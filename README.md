# CitizenApproved

CitizenApproved.org is a free, source-first educational resource for understanding current United States citizenship and naturalization law.

The project is designed to answer five questions clearly:

1. **What rule applies today?**
2. **What authority creates or interprets that rule?**
3. **What facts can change the answer?**
4. **What is current law versus agency policy, guidance, or a proposal?**
5. **Where can a reader verify the claim directly?**

CitizenApproved is not a law firm or government agency and does not provide individualized legal advice.

## Research standard

Primary authority is preferred whenever available: the Constitution, U.S. Code, eCFR, judicial opinions, Federal Register, USCIS forms/instructions/policy, DHS oversight material, and other official government sources. Secondary sources may add history or empirical context but do not replace primary authority.

Volatile policy facts live in `src/lib/policy/current-policy.ts` with a shared review date. CI runs `npm run freshness` to reject known stale public claims and reviews older than the configured maximum age. A scheduled GitHub Actions workflow applies a stricter 14-day freshness window even when no PR is open.

## Tech stack

- **Framework:** Next.js 16 (App Router, static export)
- **Styling:** Tailwind CSS 3.4
- **Hosting:** Cloudflare Pages
- **Monitoring:** Sentry + GA4/Web Vitals when configured
- **Validation:** TypeScript, ESLint, policy freshness guard, production static build

## Local development

```bash
npm install
npm run dev
```

## Quality gates

```bash
npm run freshness
npm run type-check
npm run lint
npm run build
```

| Command | Purpose |
| --- | --- |
| `npm run dev` | Local development server |
| `npm run freshness` | Check policy-review age and reject known stale public claims |
| `npm run type-check` | TypeScript validation |
| `npm run lint` | ESLint validation |
| `npm run build` | Production static export |
| `npm run build:static` | Build plus RSC payload flattening for static hosting |

## Deployment

A push to `main` triggers the Cloudflare Pages deployment workflow. Production is:

- `https://citizenapproved.org`

The Cloudflare Pages project name is `citizenapproved`.

## Project structure

```text
src/
├── app/                    # Public pages and resource guides
├── components/             # Shared UI
└── lib/
    └── policy/             # Current-policy registry and volatile facts
scripts/
└── check-policy-freshness.mjs
.github/workflows/
├── ci.yml                  # Build + freshness + type/lint gate
├── deploy.yml              # Cloudflare Pages deployment
└── policy-freshness.yml    # Scheduled policy-age check
```

## Editorial principle

CitizenApproved should simplify **presentation**, not simplify away the law. Where citizenship turns on historical statutes, dates, custody, parentage, travel, criminal history, immigration status, military service, or jurisdiction-specific precedent, the site should explain the decision point and link to the authority rather than manufacture a definitive result from incomplete facts.

## Part of the GFD ecosystem

Managed under [Good Flippin Design](https://goodflippindesign.com).
