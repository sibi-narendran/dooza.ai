# Blog Writing Guide for AI Discovery

Use this guide when writing or editing Dooza blog posts. The goal is to make every article useful for humans and easy for AI search, answer engines, and retrieval tools to crawl, understand, and cite.

This is not a replacement for good writing. AI systems reward the same things strong readers reward: clarity, specificity, structure, trust, and direct answers.

## Core Rule

Write clear, specific, useful pages that a human can scan quickly.

If a human can understand the answer in 30 seconds, an AI retrieval system is more likely to extract it correctly.

## Required Blog Structure

Every strategic blog should follow this shape:

1. Title
   - Use the exact search intent.
   - Prefer concrete wording over vague marketing.
   - Example: `Best AI Receptionist for Small Business in 2026`

2. Opening direct answer
   - Put a short, direct answer in the first 100-150 words.
   - Define the topic and explain where Dooza fits.
   - Do not start with a long story before answering the query.

3. Quick summary block
   - Add 3-5 bullets with the main answer.
   - Include the buyer takeaway, not just definitions.

4. Clear H2 sections
   - Use question-style headings when possible.
   - Good examples:
     - `What is an AI receptionist?`
     - `How does an AI receptionist work?`
     - `AI receptionist vs answering service`
     - `When should a small business use one?`
     - `Where Dooza fits`

5. Comparison table
   - Add a table when comparing tools, categories, prices, or workflows.
   - Tables are easier for AI systems to summarize and cite.

6. Practical examples
   - Include real workflows, setup steps, use cases, and outputs.
   - Avoid generic claims like "saves time" without showing how.

7. FAQ section
   - Add visible FAQ content on the page.
   - Keep answers short and extractable.
   - Match the visible FAQ to FAQ schema when schema is used.

8. Internal links
   - Link to the relevant Dooza agent page.
   - Link to related blog posts.
   - Link to comparison or industry pages when relevant.

9. Source links
   - Link to credible external sources for market claims, statistics, legal/medical claims, or platform-specific facts.
   - Do not invent numbers.

10. Conversion section
    - End with a practical reason to try Dooza.
    - Tie the CTA to the article's problem, not a generic sales line.

## AI-Friendly Writing Rules

### Use Direct Definitions

Bad:

```text
The future of business communication is changing fast, and companies need to keep up.
```

Good:

```text
An AI receptionist is software that answers calls, qualifies callers, books appointments, and sends summaries without a human receptionist.
```

### Use Specific Entity Names

Name the product, role, and category consistently.

Preferred phrasing:

```text
Dooza is an AI employee platform for small businesses.
Ranky is Dooza's AI visibility and growth employee.
Voice Pro is Dooza's AI voice agent for missed calls and lead capture.
Lead Gen Pro is Dooza's AI lead generation employee.
Outbound Pro is Dooza's outbound email automation employee.
```

Avoid switching between too many names for the same thing.

### Make Claims Citable

Weak:

```text
Dooza is the best automation tool.
```

Better:

```text
Dooza gives small businesses role-based AI employees for SEO, voice calls, lead generation, outbound email, and content workflows.
```

Best:

```text
Dooza gives small businesses role-based AI employees for SEO, voice calls, lead generation, outbound email, and content workflows, starting at the current published plan price.
```

Only use exact pricing if the page is kept current.

### Keep Paragraphs Short

Use 2-4 sentence paragraphs. Avoid giant blocks of text.

AI systems extract facts more reliably when each paragraph has one main idea.

### Use Lists for Processes

For workflows, use ordered steps:

1. Connect the account or tool.
2. Add business context.
3. Define the output.
4. Set approval rules.
5. Review the report.

### Use Tables for Comparisons

Example:

| Feature | Traditional answering service | AI receptionist | Dooza Voice Pro |
| --- | --- | --- | --- |
| Availability | Limited by staffing | 24/7 | 24/7 |
| Lead qualification | Script-based | Dynamic questions | Business-specific workflow |
| Summary | Manual notes | Automated summary | Routed call summary |

## Trust Signals AI Can Use

Add these where relevant:

- Author name or Dooza Team attribution.
- Published date and modified date.
- Product names and category names.
- Clear pricing references, only when current.
- Screenshots, images, or examples of the workflow.
- Third-party source links for statistics.
- Internal links to related pages.
- FAQ answers that match visible content.
- Schema markup for Article, FAQPage, BreadcrumbList, Organization, Product, or Service where appropriate.

## Technical Requirements

These are already partly handled by the app, but writers should not fight them.

- Keep important article content in server-rendered HTML.
- Do not hide the main answer behind JavaScript-only UI.
- Use one H1 per page.
- Use H2 and H3 headings in logical order.
- Use descriptive image alt text.
- Use canonical URLs.
- Keep noindex only for pages we intentionally do not want indexed.
- Make sure the article is included in sitemap generation unless intentionally excluded.
- Keep `/llms.txt` as a curated AI-readable site map.
- Keep `/robots.txt` open for public pages and do not block AI/search crawlers.

## Blog Opening Template

Use this for high-intent SEO/GEO articles:

```text
[Topic] is [direct definition in one sentence].

For [target audience], the main value is [specific business outcome]. The best setup is not just a chatbot; it needs [tool/context/approval/reporting elements].

Dooza helps by [specific Dooza role or workflow], so [audience] can [result] without [pain].
```

Example:

```text
An AI receptionist is software that answers phone calls, qualifies callers, books appointments, and sends call summaries automatically.

For small businesses, the main value is capturing leads that would otherwise go to voicemail. The best setup is not just a voice bot; it needs business FAQs, qualification rules, calendar access, routing logic, and clear summaries.

Dooza Voice Pro helps small businesses answer missed calls, qualify callers, and route next steps without hiring a full-time receptionist.
```

## FAQ Template

Use concise answers. One question should answer one search intent.

```text
### What is [topic]?
[Direct 1-3 sentence answer.]

### How does [topic] work?
[Simple workflow explanation.]

### Is [topic] better than [alternative]?
[Balanced comparison with when each makes sense.]

### How much does [topic] cost?
[Use current pricing only if verified. Otherwise explain pricing factors.]

### Where does Dooza fit?
[Specific role, workflow, and buyer.]
```

## Claim Rules

Do:

- Use exact product names.
- Use current, verified pricing only.
- Link to sources for external statistics.
- Say what Dooza does in concrete workflow terms.
- Include limitations and approval needs when relevant.

Do not:

- Invent statistics.
- Claim guaranteed rankings, revenue, or lead volume.
- Say "best" without a specific reason.
- Overuse generic AI terms without explaining the workflow.
- Bury the answer under a long intro.

## AI Discovery Checklist

Before publishing a blog, check:

- [ ] The first 150 words directly answer the search query.
- [ ] The article uses clear H2 question headings.
- [ ] There is at least one comparison table if the topic involves alternatives.
- [ ] There is a visible FAQ section.
- [ ] The FAQ content matches any FAQ schema.
- [ ] The article links to at least one relevant Dooza page.
- [ ] The article links to related Dooza blogs where useful.
- [ ] Any external statistic has a source link.
- [ ] Product names are consistent.
- [ ] Image alt text describes the image.
- [ ] The article is indexable unless intentionally excluded.
- [ ] The page is included in the sitemap unless intentionally excluded.

## Related Technical Files

- `app/robots.js`: controls crawler access.
- `app/sitemap.js`: lists indexable site pages.
- `app/llms.txt/route.js`: generates the AI-readable site map.
- `app/blog/[slug]/page.jsx`: generates blog metadata and schema.
- `lib/blogData.js`: static blog metadata and FAQ data.
- `docs/ai-geo-strategy.md`: broader AI and GEO strategy.

## Source Notes

- Google Search does not require AI-specific files for AI features; it recommends normal crawlability, useful content, and standard SEO foundations.
- OpenAI documents separate crawlers for search, user-triggered browsing, and training use cases.
- Anthropic documents `ClaudeBot`, `Claude-User`, and `Claude-SearchBot`.
- Perplexity documents `PerplexityBot` and `Perplexity-User`.
- Tavily says it does not publish a separate crawler user-agent and uses Googlebot crawlability.
- Exa, Tavily, and Perplexity all publish `llms.txt` files for their own documentation, which is a useful pattern for AI-readable documentation.
