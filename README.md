# CitizenApproved

Consumer advocacy and civic engagement platform.

## Tech Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Styling**: Tailwind CSS 3.4
- **Hosting**: Cloudflare Pages
- **Error Tracking**: Sentry (via `@sentry/browser`)

## Getting Started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Command         | Purpose                        |
| --------------- | ------------------------------ |
| `npm run dev`   | Local dev server (Turbopack)   |
| `npm run build` | Static export → `out/`         |
| `npm run lint`  | ESLint check                   |
| `npm start`     | Serve production build locally |

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable                 | Required | Purpose                                               |
| ------------------------ | -------- | ----------------------------------------------------- |
| `NEXT_PUBLIC_SENTRY_DSN` | No       | Sentry error tracking DSN                             |
| `NEXT_PUBLIC_GA_ID`      | No       | Google Analytics 4 measurement ID                     |
| `NEXT_PUBLIC_SITE_URL`   | No       | Canonical site URL (defaults to citizensapproved.com) |

## Deployment

Push to `main` → Cloudflare Pages auto-deploys the `out/` directory.

```bash
# Manual deploy
npx wrangler pages deploy out --project-name=citizensapproved
```

## Project Structure

```
src/
├── app/           # Next.js App Router pages
│   ├── layout.tsx # Root layout (Inter font, metadata, Sentry)
│   ├── page.tsx   # Homepage
│   └── resources/ # Resource pages (timeline, checklist, forms)
├── components/    # Shared React components
└── lib/           # Utilities
public/            # Static assets
```

## Part of the GFD Ecosystem

Managed under [Good Flippin Design](https://goodflippindesign.com) — see the [master charter](https://github.com/weave0/goodflippindesign/blob/main/gfd_master_charter.md) for ecosystem context.
