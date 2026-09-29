# AI Visibility (Profound-Alternative) Blog Playbook

How the September 2026 AI visibility cluster was built, so future posts match it.

## Positioning in this cluster

Dooza is written as an **AI visibility platform for growing brands**, following the model Profound (tryprofound.com) sells: measure, find gaps, publish, prove impact. It is not described as an FDE firm or an "AI employee" company in these posts.

The canonical paragraph is `doozaPlatformSummary` in `lib/aiVisibilityPostsA.js`. Reuse it instead of rewording.

| Profound module | Dooza equivalent (as written) |
|---|---|
| Answer Engine Insights | AI visibility tracking on a fixed prompt set (mentions, position, sentiment, share of voice) |
| Prompt Volumes | Prompt research from search data, sales questions, and competitor comparisons |
| Citations | Citation map (owned / competitor / editorial / community) |
| Agent Analytics | AI crawler access check at setup (not ongoing bot analytics) |
| AI Marketer / Agents | Ranky drafts and publishes with approval |
| Context Manager | Brand facts file |

Honest limits to keep: no Prompt Volumes, no 9-engine multi-region coverage, not a SOC 2 enterprise suite. Pricing: from $49/mo, free setup.

## Post requirements

- **Direct answer** in the first 100 words, a summary list, question-style H2s, and at least one table. Follow `doc/blog-writing-for-ai-discovery.md`.
- **One YouTube video per post**, with a real, verbatim quote:
  - Pull the transcript first. Use the scratchpad venv with `youtube-transcript-api` and `yt-dlp`.
  - Quote with the `quote()` helper (`<figure>` + `<figcaption>` with a timestamped link). Plain `<blockquote>` gets doubled quote marks from the prose styles.
  - Embed the video with the `yt()` helper.
  - Add the `video` field so `generateArticleSchema` emits VideoObject.
- **Hero image** from the imagegen skill, using the watercolor template in `doc/brand-guidelines.md`:
  - Generate at 1536x864 with gpt-image-2 (medium quality).
  - Center-crop to 1200x630.
  - Save to `public/blog/<slug>.png`.
  - The key is `OPENAI_API_KEY` in `.env.local`.
- **FAQ**: 5–6 short, extractable answers in `faqData`.
- **Internal links**:
  - `/book`, `/generative-engine-optimization`, `/dooza-vs-profound`, `/profound-alternatives`.
  - Sibling posts, plus an entry in `components/InternalLinks.jsx`.
- **External sources**: vendor pricing pages and official crawler and AI docs. Mark third-party prices as "reported".

## Keyword data (DataForSEO, US, Sept 2026)

| Keyword | Monthly searches |
|---|---|
| profound ai | 6,600 |
| claudebot | 6,600 |
| answer engine optimization | 2,400 |
| peec ai | 2,400 |
| ai visibility tool | 1,600 |
| chatgpt shopping | 1,000 |
| tryprofound | 880 |
| ai overviews tracking | 720 |
| ai citations | 720 |
| llm seo | 720 |
| geo agency | 720 |
| aeo agency | 590 |
| profound alternatives | 210 |

Run `node scripts/dfs.mjs volume "<kw>" ...` to refresh.
