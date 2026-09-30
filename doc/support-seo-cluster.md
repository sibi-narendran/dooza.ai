# Customer Support SEO Cluster (Sept 2026)

Pages built 2026-09-30 to rank for customer-support outsourcing, VA, and Gorgias keywords.
All pages funnel into `/customer-support-automation-agency` (the support offer).

## Keyword → page map

Data: DataForSEO, US, 2026-09-30. KD = DataForSEO keyword difficulty.

| Page | Primary keywords | Vol/mo | KD |
|---|---|---|---|
| `/customer-service-outsourcing` (pillar) | customer service outsourcing, outsource customer service, customer support outsourcing, outsourced customer support, outsource customer support | 1,300 + 1,600 (+ variants) | 0–13 |
| `/customer-service-outsourcing-for-small-business` | customer service outsourcing for small business(es), small business customer service outsourcing | 70 ×3 | 3 |
| `/ecommerce-customer-service-outsourcing` | outsourcing ecommerce customer service, ecommerce/e-commerce customer service outsourcing, ecommerce customer support outsourcing | 90 + 70 ×3 + 40 ×3 | 0 |
| `/customer-service-virtual-assistant` | customer service virtual assistant, virtual assistant for customer service, virtual customer service assistant | 320 ×4 | 0 |
| `/ecommerce-virtual-assistant` | ecommerce virtual assistant, virtual assistant for ecommerce | 170 ×3 | 0 |
| `/shopify-virtual-assistant` | shopify virtual assistant, virtual assistant shopify | 110 ×2 | 9 |
| `/gorgias-alternatives` | gorgias alternative(s) | 110 (CPC up to $235) | 0 |
| `/blog/gorgias-pricing` | gorgias pricing, gorgias price | 210 + 210 | 22 |
| `/blog/gorgias-ai` | gorgias ai | 210 | 25 |
| `/blog/customer-service-outsourcing-cost` | customer service outsourcing cost/pricing, cost of outsourcing customer service | 70 ×4 | 0–3 |
| `/blog/best-customer-service-outsourcing-companies` | customer service outsourcing companies, top … companies, customer support outsourcing companies | 390 + 170 + 140 | 0–2 |

Deliberately **not** targeted: "ai customer service/support" (enterprise buyers, KD 35–38, CPC up to $995) and "shopify customer support" (people trying to reach Shopify).

SERP notes: "customer service outsourcing" and "customer support outsourcing" share the same top pages (Liveops, EverHelp, business.com, Shopify, Zendesk, Gladly), so one pillar owns both. VA SERPs mix agencies with job boards and "become a VA" content; our pages serve the hiring buyer.

## How the pages are built

- Template: `components/supportGuides/SupportGuidePage.jsx` (server-rendered; Article, FAQPage, BreadcrumbList, VideoObject, ItemList, Service schema).
- Content: `lib/supportGuides/*.js` (one file per page, HTML sections).
- Offer copy: `lib/supportGuides/shared.js` → `OFFER`. Change it there and every guide updates.
- Blog posts: `lib/supportBlogPosts.js`, registered in `lib/blogData.js`.
- Images: `public/support-guides/*.jpg` (page heroes, gpt-image-2, matched to the support landing's plum/lime palette); `public/blog/<slug>.png` (brand watercolor style, 1200×630).
- Wired into: sitemap, `/alternatives`, `llms.txt`, footer, `components/InternalLinks.jsx`.

## Sources used (re-check when updating prices)

- Gorgias plans & AI fees: gorgias.com/pricing, helpcenter.gorgias.com billing article (checked 2026-09-30)
- Competitor pricing pages (2026-09-30): Richpanel, Re:amaze, Zendesk, Help Scout, Freshdesk, Tidio, Shopify Inbox, Smith.ai, Helpware
- Outsourcing hourly rates: stealthagents.com/research/nearshore-bpo-cost-comparison (Jul 2026)
- Per-ticket/per-agent pricing: ringly.io/blog/cost-to-outsource-customer-service-ecommerce (Sep 2026)
- VA rates: stealthagents.com/research/cost-of-hiring-a-virtual-assistant-2026 (May 2026); hiretalent.ph salary guide

## YouTube embeds (all verified embeddable 2026-09-30)

| Page | Video |
|---|---|
| Outsourcing pillar | HRCO6spaR0Y (80/20 Service), 8k-D667N2Xg (Jobber) |
| Small business | 6JKRRdXpX9s (The Business of eCommerce) |
| Ecommerce outsourcing | Pwv-LlhTPwo (Brandon Amoroso, Gorgias demo) |
| CS virtual assistant | gWr43H05SW8 (Fields of Profit) |
| Ecommerce VA | dWkUNii4G9s (Zack Allen) |
| Shopify VA | fkCgQ303lcs (Upsellcom) |
| Gorgias alternatives | uY0rxAE7AMA (Rosie Collins) |
| Blog: Gorgias pricing / AI / cost / companies | tKO2bEPnBhc, 1vmZr3yD4yE, oRWzBcoLbW0, NBSpd9O5ih4 |

## Tracking

OpenSEO rank tracker `e20cf7aa-2997-4ceb-95ee-987cf8fd8f67` (project Default, US, both devices, depth 100, **manual**, so it only spends credits when run). 17 keywords. Same keywords are saved with metrics in OpenSEO's saved keywords list.

## Follow-ups

- After deploy: submit the 7 URLs + 4 posts via GSC URL inspection, then run the rank tracker in ~2–3 weeks.
- Offer wording: the guides use the support landing's "free 20-message sample" and avoid printing prices or saying "free trial". `doc/positioning.md` still says every page should carry the refundable-pilot line; reconcile once the support offer is final.
