# GitHub Actions Workflows

## CI Workflow (`ci.yml`)

**Triggers:** Pull requests and pushes to `main`

**Purpose:** Validates code quality and build integrity before deployment.

**Steps:**
1. TypeScript type checking (`tsc --noEmit`)
2. Linting (`next lint`)
3. Static build (`next build`)
4. RSC payload flattening (`scripts/flatten-rsc.js`)
5. Verification that flattened files exist

**Why RSC flattening?** Next.js App Router generates RSC payloads in nested directories (`out/legal/__next.legal/__PAGE__.txt`), but the client expects flat paths (`/legal/__next.legal.__PAGE__.txt`). The flatten script copies nested files to the expected flat structure.

---

## CD Workflow (`deploy.yml`)

**Triggers:** 
- Automatic: Pushes to `main`
- Manual: `workflow_dispatch` trigger

**Purpose:** Deploys to Cloudflare Pages after successful CI.

**Required Secrets:**
Configure these in **Repository Settings → Secrets and variables → Actions**:

| Secret | Description | How to get |
|--------|-------------|------------|
| `CLOUDFLARE_API_TOKEN` | API token with Cloudflare Pages edit permissions | Cloudflare Dashboard → My Profile → API Tokens → Create Token |
| `CLOUDFLARE_ACCOUNT_ID` | Cloudflare account ID | Cloudflare Dashboard → Account → Account ID |

**Project Name:** `citizenapproved` (must match Cloudflare Pages project)

---

## Local Development

```bash
# Type check only (fast)
npm run type-check

# Full static build with RSC flattening
npm run build:static

# Development server
npm run dev
```

---

## Deployment Flow

```
PR opened → CI runs (type-check + lint + build + flatten)
             ↓
          CI passes → PR merged to main
                         ↓
                     CD runs → Deploy to Cloudflare Pages
```

---

## Troubleshooting

**CI failing on "Verify Flattened Files":**
- This is a warning, not an error (exits 0)
- Only fails if `out/` directory is missing
- Some routes may not have RSC payloads if they're fully static

**CD failing with "Cloudflare API error":**
- Verify `CLOUDFLARE_API_TOKEN` has Cloudflare Pages edit permissions
- Verify `CLOUDFLARE_ACCOUNT_ID` is correct
- Verify project name `citizenapproved` exists in Cloudflare Pages dashboard
