# DataForSEO API Access

Third-party SEO data (keyword volume, SERPs, competitor rankings, backlinks) —
complements GSC, which only covers our own property. See `doc/gsc-access.md`.

## Credentials

| What | Value |
|---|---|
| Login | `sibi@dooza.ai` |
| Password | **API password** from dataforseo.com → Dashboard → API Access |
| Env vars | `DATAFORSEO_LOGIN` / `DATAFORSEO_PASSWORD` in `.env.local` (gitignored) |
| Auth | HTTP Basic — `Authorization: Basic base64(login:password)` |
| Default market | `location_code` 2840 (US), `language_code` `en` — override with `DATAFORSEO_LOCATION_CODE` / `DATAFORSEO_LANGUAGE_CODE` |

**Use the API password, not the account login password.** DataForSEO issues a
separate API password so the account password never lands in an env file. The
account password also controls billing and account settings; the API password
does not.

## Usage — `scripts/dfs.mjs` (no dependencies, Node stdlib only)

```bash
node scripts/dfs.mjs user                              # account + balance (access check)
node scripts/dfs.mjs volume "ai employees" "fde"       # search volume / CPC / competition
node scripts/dfs.mjs serp "forward deployed engineer"  # live Google SERP, top 20
node scripts/dfs.mjs ranked dooza.ai 30                # keywords we rank for
node scripts/dfs.mjs ideas "ai workforce" 30           # keyword ideas from a seed
node scripts/dfs.mjs competitors dooza.ai              # organic competitors
node scripts/dfs.mjs backlinks dooza.ai                # backlink summary
```

Notes:
- All endpoints used are `live` — immediate response, higher cost per call than
  the queued task endpoints. Check the balance with `user` before big runs.
- `ranked` / `ideas` / `competitors` hit DataForSEO Labs; `volume` hits Google
  Ads data; `serp` hits live SERP. These are separately priced.

## GSC vs DataForSEO

| Question | Tool |
|---|---|
| How is *our* page performing in search? | GSC (`scripts/gsc.mjs`) |
| What's the search volume for a keyword? | DataForSEO (`volume`) |
| Who ranks for a term, and where do we sit? | DataForSEO (`serp`) |
| What keywords do competitors own? | DataForSEO (`ranked` on their domain) |
| Is this URL indexed? | GSC (`inspect`) |

## If access breaks

1. `40100` / `401` → wrong password; regenerate the API password in the
   dashboard and update `.env.local`.
2. `40200` → insufficient balance; top up the account.
3. Rate limited → default is ~2000 requests/min; the `user` command shows the
   current limit.
