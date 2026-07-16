# Google Search Console API Access

Claude Code (and any script in this repo) has programmatic access to Dooza's
Google Search Console. **Never ask the user for GSC access — it's already set up.**

## Credentials

| What | Value |
|---|---|
| Service account | `gsc-reader@dooza-tools.iam.gserviceaccount.com` (GCP project `dooza-tools`) |
| Key file | `~/.config/dooza/gsc-sa.json` (outside the repo, chmod 600 — **never commit**) |
| GSC property | `sc-domain:dooza.ai` |
| Permission | Full user (read analytics; API sitemap submit possible if scope is raised) |
| Env vars | `GSC_SA_KEY_PATH` and `GSC_SITE_URL` in `.env.local` (gitignored) |
| Set up | 2026-07-16 |

## Usage — `scripts/gsc.mjs` (no dependencies, Node stdlib only)

```bash
node scripts/gsc.mjs sites                        # list properties (access check)
node scripts/gsc.mjs query                        # last 28 days, clicks by page
node scripts/gsc.mjs query 7 query                # last 7 days, by search query
node scripts/gsc.mjs page-queries /workforce      # which queries hit one page
node scripts/gsc.mjs sitemaps                     # sitemap status (last read, counts)
node scripts/gsc.mjs inspect https://www.dooza.ai/workforce   # index status of a URL
```

Notes:
- GSC data lags ~2 days; the script's date windows account for that.
- Auth is a self-signed JWT (RS256 via Node `crypto`) exchanged at
  `oauth2.googleapis.com/token` with scope `webmasters.readonly`.
  To enable write operations (sitemap submit), change the scope in
  `getAccessToken()` to `https://www.googleapis.com/auth/webmasters`.
- There is a stale legacy property sitemap at `https://dooza.ai/sitemap.xml`
  (non-www, 9 URLs, last read Jan 2026) — harmless, can be deleted in GSC UI.

## Standing context (July 2026 pivot)

The site pivoted to FDE positioning: the old home content ("AI employees $49/mo")
moved to `/workforce`, and `/` became the FDE landing page. When analyzing GSC
data, the key question is whether `/` rankings for "AI employees" queries are
transferring to `/workforce`, and which forward-deployed/FDE queries are growing.
Useful checks:

```bash
node scripts/gsc.mjs page-queries /workforce 28
node scripts/gsc.mjs page-queries dooza.ai/ 28     # home page queries
```

## If access breaks

1. Key revoked/rotated → create a new JSON key for `gsc-reader` in GCP console
   (IAM → Service Accounts → Keys) and replace `~/.config/dooza/gsc-sa.json`.
2. Permission removed → GSC → Settings → Users and permissions → re-add the
   service account email.
