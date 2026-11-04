# Time 4U Website

Initial repository scaffold for Time 4U Therapy Massage Clinic and School website.

## Planned Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Approval-First Workflow
1. Publish a planning page on GitHub Pages for client approval.
2. Confirm final sitemap, business details, and content direction.
3. Build mockup only after approval.
4. Start implementation and launch workflow.

## Hosting
- Live site: https://time4utherapymassageclinicandschool.com (Cloudflare Pages, auto-deploys on push to `main`; root dir `site`, build `npm run build`, output `out`).
- Content editor: https://time4utherapymassageclinicandschool.com/admin/ (Decap CMS, config in `site/public/admin/config.yml`).
- The old GitHub Pages preview (`docs/`) has been retired.

## Clara's Editing Handoff
- [Clara's website editing guide](CLARA-WEBSITE-GUIDE.md): sign-in, publishing, event announcements, photos, prices, and troubleshooting.
- Intended sign-in: Cloudflare Access email code via `cms-access-auth/`, not the legacy GitHub OAuth worker.
- Before handoff, verify Access allows Clara's approved email, configure the worker's Access team domain and application audience, and add a repository-scoped publishing credential only after Access protection is verified.
- Complete a real sign-in and small publish test with Clara, confirm the public site updates, and restore the test edit. Until that passes, independent editing is not verified.

### Access Setup (November 3, 2026)
- Cloudflare Access app `cms-auth.time4utherapymassageclinicandschool.com`: login method **One-time PIN** only (instant auth), policy **Time 4U website editors** = Allow, Emails: Time4utherapymassage@outlook.com, victorfelisbino@gmail.com. Add more editors in that policy.
- Worker `cms-access-auth` deployed with `CF_ACCESS_TEAM_DOMAIN=lively-sea-ff19` and the app's AUD; `GITHUB_TOKEN` secret is present (value and permissions not inspected).
- Remaining acceptance test: sign in with the email code, publish a small change, confirm it goes live, then restore it.

## Local Website App
- Stack: Next.js + TypeScript + Tailwind CSS
- Location: `site/`

### Run Locally
1. Load Node (nvm): `export NVM_DIR="$HOME/.nvm" && . "$NVM_DIR/nvm.sh" && nvm use 22`
2. Install deps: `cd site && npm install`
3. Start dev server: `npm run dev`
4. Open: `http://localhost:3000`

### Build Check
- `cd site && npm run build`

## Next Steps
1. Finalize homepage POC content and visual direction with Clara.
2. Build branded components in `site/src`.
3. Move approved copy into core pages (Home, Services, About, Contact, Pricing, Credentials, FAQ).
4. Connect production deployment (Vercel) after approval.
