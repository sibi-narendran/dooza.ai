# Blog Playbook: Research → AI-Readable Post → Images → Video/X Embeds → Production

How Dooza picks and ships blog posts (written 2026-10-06). An AI agent can follow this end to end.
Read with `doc/positioning.md` (claims, pilot line, no prices outside /pricing) and
`doc/blog-writing-for-ai-discovery.md` (page structure).

## 1. Pick topics (data, not guesses)

What already works for dooza.ai (GSC, 90 days): trending AI-agent topics (Karpathy "graph engineering",
"ai slop checker") and `<tool> alternatives` posts (Marblism, Revid, Accio Work). Generic head terms
("ai business tools", pos 25) do not. So target: **low-difficulty (KD < 30) alternatives, comparisons,
and service-category terms that map to a Dooza product.**

```bash
node scripts/gsc.mjs query 90 query                 # what we already rank for
node scripts/dfs.mjs serp "<keyword>" 10            # who ranks; small sites = beatable
```

For KD + volume by phrase match, use the DataForSEO Labs `keyword_suggestions/live` endpoint
(filter `keyword_properties.keyword_difficulty < 30`). Each call costs ~$0.015.

### Shortlist (DataForSEO, US, 2026-10-06)

| Post | Keywords (vol/mo, KD) | Dooza page it feeds |
|---|---|---|
| `/blog/openclaw-alternatives` | openclaw alternative(s) 1,900 ×2 (KD 0), self-hosted ai agent 3,600 (KD 0) | `/workforce`, `/` |
| `/blog/hermes-agent-vs-openclaw` | hermes vs openclaw 2,400 (7), openclaw vs hermes 1,300 (6), hermes agent vs openclaw 1,300 (7) | `/workforce`, `/` |
| `/blog/after-hours-answering-service` | after-hours answering service + 9 variants 1,300 each (KD 0, CPC $154) | `/ai-receptionist` |
| `/blog/n8n-alternatives` | n8n alternative(s) 1,000 ×2 (KD 0), n8n vs zapier 880 (17) | `/workflow-automation` |
| `/blog/ringcentral-ai-receptionist` | ringcentral ai receptionist 5,400 (KD 0), …pricing 140 (5) | `/ai-receptionist` |

Next in line: medical answering service (5,400, KD 0), ai phone answering service (2,400, 18),
no-code ai agent builder (3,600, 10), ai agent for business (3,600, 14), n8n pricing (4,400, 8),
openclaw vs claude code (880, 0), ai sdr tools (260, 7), white label ai receptionist (110, 0).

## 2. Write so AI engines can read and cite it

- Post = one JS module in `lib/octoberPosts/<slug>.js` (default export, HTML `content`), using
  helpers in `lib/octoberPosts/helpers.js`. Registered in `lib/blogData.js`.
- **First 100 words answer the query.** Then a 3–5 bullet summary. Question-style H2s with `id`s
  matching `tocData`. At least one comparison table. Short paragraphs, one idea each.
- **Every fact sourced.** Vendor prices link to the vendor's pricing page with a "checked <date>" note;
  mark third-party prices "reported". No invented stats. No Dooza prices (link `/pricing`).
- **Honest limits.** Say when a competitor is the better pick. Answer engines cite balanced pages.
- **Dooza section** uses the positioning one-liner and the pilot line verbatim.
- **FAQ:** 5–6 `faqData` entries that repeat visible FAQ content (feeds FAQPage schema).
- Server-rendered HTML only (no client-only text). Schema (BlogPosting, FAQPage, Breadcrumb,
  VideoObject) is generated from the post object.

## 3. Embeds

- **YouTube (required, 1 per post):** search YouTube, pull the transcript
  (`youtube-transcript-api`), quote verbatim with `quote()` + timestamp, embed with `yt()`, and set the
  `video` field (name, description, thumbnailUrl, embedUrl, uploadDate from `yt-dlp`).
- **X post (when a real, relevant one exists):** verify through
  `https://publish.twitter.com/oembed?url=<post url>&omit_script=1` (follow redirects) and copy the
  exact text, name, handle and date into `xPost()`. The blockquote is server-rendered (crawlable); X's
  widget script loads only on pages that have one (`DynamicBlogInteractive.jsx`).

## 4. Hero image

Watercolor template from `doc/brand-guidelines.md`, generated with the imagegen skill CLI
(`~/.claude/skills/imagegen/scripts/image_gen.py`, `--model gpt-image-2 --quality medium --size 1536x864`),
`OPENAI_API_KEY` from `.env.local`, center-cropped to 1200×630 → `public/blog/<slug>.png`.
Descriptive `imageAlt`.

## 5. Ship

1. Register the post in `lib/blogData.js`; add related links in `components/InternalLinks.jsx`.
2. `npm run build` must pass; check the page locally (content, table, video, X post, FAQ).
3. Commit to `main` and push → Vercel deploys production.
4. Check the live URL, then request indexing (`node scripts/gsc.mjs inspect <url>`).
