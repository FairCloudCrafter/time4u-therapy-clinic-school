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
