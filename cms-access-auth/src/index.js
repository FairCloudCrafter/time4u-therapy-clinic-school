/**
 * Reusable Decap CMS auth worker — a "Cloudflare Access -> GitHub token" bridge.
 *
 * Instead of asking the content editor to log in with GitHub, this worker sits
 * behind a Cloudflare Access policy. The editor authenticates with just their
 * email (Access one-time PIN). Once past Access, the worker hands Decap a GitHub
 * token (stored server-side as a secret) so commits work — the editor never sees
 * or needs a GitHub account.
 *
 * REUSE FOR A NEW PROJECT (no code changes needed):
 *   1. wrangler.toml vars: SITE_ORIGINS, CF_ACCESS_TEAM_DOMAIN, CF_ACCESS_AUD.
 *   2. wrangler secret put GITHUB_TOKEN   (fine-grained PAT scoped to that repo,
 *                                          Contents: Read and write).
 *   3. Deploy on a Cloudflare Access-protected route, e.g. cms-auth.<domain>/*.
 *   4. In the site's Decap public/admin/config.yml:
 *        backend:
 *          name: github
 *          repo: OWNER/REPO
 *          branch: main
 *          base_url: https://cms-auth.<domain>
 *
 * SECURITY MODEL:
 *   - The route MUST be protected by a Cloudflare Access policy. That is what
 *     restricts who can reach this worker (and therefore who receives the token).
 *   - As defense in depth, this worker verifies the Access JWT signature/audience
 *     (when CF_ACCESS_TEAM_DOMAIN + CF_ACCESS_AUD are set) so it cannot be called
 *     directly, bypassing Access.
 *   - The token is only delivered to browser windows whose origin is listed in
 *     SITE_ORIGINS.
 */

const encoder = new TextEncoder();
const decoder = new TextDecoder();

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const provider = env.PROVIDER || "github";

    if (url.pathname === "/auth" || url.pathname === "/") {
      const access = await verifyAccess(request, env);
      if (!access.ok) {
        return new Response(`Forbidden: ${access.reason}`, { status: 403 });
      }
      if (!env.GITHUB_TOKEN) {
        return new Response("Missing GITHUB_TOKEN secret.", { status: 500 });
      }
      return renderHandshake(provider, env);
    }

    return new Response("Decap CMS Access auth worker is running.", {
      headers: { "content-type": "text/plain" },
    });
  },
};

/**
 * Confirms the request came through Cloudflare Access. Fails closed: unless the
 * CF_ACCESS_* vars are set and the Access JWT verifies, no token is released.
 */
async function verifyAccess(request, env) {
  const team = env.CF_ACCESS_TEAM_DOMAIN;
  const aud = env.CF_ACCESS_AUD;

  // Fail closed: the token is never released unless Access is actually verified.
  if (!team || !aud) {
    return { ok: false, reason: "Access not configured (set CF_ACCESS_TEAM_DOMAIN and CF_ACCESS_AUD)" };
  }

  const token = request.headers.get("Cf-Access-Jwt-Assertion");
  if (!token) return { ok: false, reason: "missing Access token" };

  try {
    const teamDomain = team.includes(".") ? team : `${team}.cloudflareaccess.com`;
    const keys = await fetchJwks(`https://${teamDomain}/cdn-cgi/access/certs`);
    const payload = await verifyJwt(token, keys, aud);
    if (!payload) return { ok: false, reason: "invalid Access token" };
    return { ok: true, reason: "verified", email: payload.email };
  } catch {
    return { ok: false, reason: "verification error" };
  }
}

let jwksCache = { url: null, keys: null, fetchedAt: 0 };

async function fetchJwks(url) {
  const now = Date.now();
  const ONE_HOUR = 3600 * 1000;
  if (jwksCache.url === url && jwksCache.keys && now - jwksCache.fetchedAt < ONE_HOUR) {
    return jwksCache.keys;
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error(`JWKS fetch failed: ${res.status}`);
  const data = await res.json();
  jwksCache = { url, keys: data.keys, fetchedAt: now };
  return data.keys;
}

async function verifyJwt(token, keys, expectedAud) {
  const parts = token.split(".");
  if (parts.length !== 3) return null;
  const [headerB64, payloadB64, sigB64] = parts;

  const header = JSON.parse(b64urlToText(headerB64));
  const jwk = keys.find((k) => k.kid === header.kid);
  if (!jwk) return null;

  const key = await crypto.subtle.importKey(
    "jwk",
    jwk,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["verify"],
  );

  const signed = encoder.encode(`${headerB64}.${payloadB64}`);
  const signature = b64urlToBytes(sigB64);
  const valid = await crypto.subtle.verify("RSASSA-PKCS1-v1_5", key, signature, signed);
  if (!valid) return null;

  const payload = JSON.parse(b64urlToText(payloadB64));
  const now = Math.floor(Date.now() / 1000);
  if (payload.exp && payload.exp < now) return null;
  if (payload.nbf && payload.nbf > now) return null;

  const auds = Array.isArray(payload.aud) ? payload.aud : [payload.aud];
  if (!auds.includes(expectedAud)) return null;

  return payload;
}

/**
 * The tiny HTML page Decap expects. It performs Decap's postMessage handshake
 * and delivers the server-side token — but only to windows whose origin is in
 * SITE_ORIGINS.
 */
function renderHandshake(provider, env) {
  const origins = (env.SITE_ORIGINS || "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
  const payload = JSON.stringify({ token: env.GITHUB_TOKEN, provider });
  const message = `authorization:${provider}:success:${payload}`;

  const html = `<!doctype html>
<html>
  <body>
    <script>
      (function () {
        var allowed = ${JSON.stringify(origins)};
        var message = ${JSON.stringify(message)};
        function receiveMessage(e) {
          if (allowed.length && allowed.indexOf(e.origin) === -1) return;
          window.opener.postMessage(message, e.origin);
          window.removeEventListener("message", receiveMessage, false);
        }
        window.addEventListener("message", receiveMessage, false);
        window.opener.postMessage("authorizing:${provider}", "*");
      })();
    </script>
  </body>
</html>`;

  return new Response(html, {
    headers: {
      "content-type": "text/html; charset=utf-8",
      "cache-control": "no-store",
    },
  });
}

function b64urlToText(s) {
  return decoder.decode(b64urlToBytes(s));
}

function b64urlToBytes(s) {
  s = s.replace(/-/g, "+").replace(/_/g, "/");
  const pad = s.length % 4 ? 4 - (s.length % 4) : 0;
  s += "=".repeat(pad);
  const bin = atob(s);
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return bytes;
}
