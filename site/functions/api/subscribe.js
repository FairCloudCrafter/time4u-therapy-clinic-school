// Cloudflare Pages Function: newsletter signup -> Brevo contact list.
// The Brevo API key stays server-side (Cloudflare secret), never exposed to the browser.
//
// Required Cloudflare Pages environment variables (Settings -> Environment variables):
//   BREVO_API_KEY  (encrypted secret) - Brevo API key with "Contacts" permission
//   BREVO_LIST_ID  (plain)            - numeric id of the Brevo list to add subscribers to

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { "content-type": "application/json; charset=utf-8" },
  });
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

export async function onRequestPost({ request, env }) {
  let email = "";
  let honeypot = "";

  try {
    const contentType = request.headers.get("content-type") || "";
    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = String(body.email || "").trim();
      honeypot = String(body.company || "").trim();
    } else {
      const form = await request.formData();
      email = String(form.get("email") || "").trim();
      honeypot = String(form.get("company") || "").trim();
    }
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  // Bots fill the hidden "company" field. Pretend success and drop it.
  if (honeypot) return json({ ok: true });

  if (!isValidEmail(email)) {
    return json({ ok: false, error: "Please enter a valid email address." }, 400);
  }

  const apiKey = env.BREVO_API_KEY;
  const listId = env.BREVO_LIST_ID;
  if (!apiKey || !listId) {
    return json(
      {
        ok: false,
        error:
          "Newsletter sign-up isn't quite ready yet. Please call or text us and we'll add you.",
      },
      503,
    );
  }

  let resp;
  try {
    resp = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [Number(listId)],
        updateEnabled: true,
      }),
    });
  } catch {
    return json({ ok: false, error: "Something went wrong. Please try again later." }, 502);
  }

  if (resp.ok || resp.status === 204) {
    return json({ ok: true });
  }

  let detail = {};
  try {
    detail = await resp.json();
  } catch {
    /* ignore non-JSON error bodies */
  }
  if (detail && detail.code === "duplicate_parameter") {
    return json({ ok: true, already: true });
  }

  return json({ ok: false, error: "Something went wrong. Please try again later." }, 502);
}
