// AI visibility / Profound-alternative campaign, part A (September 2026).
// Dooza is an AI-native company (doc/positioning.md); for AI search, Ranky
// measures how answer engines talk about a brand, finds the gaps, and closes them.

const yt = (id, title) => `<div class="not-prose my-8 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><iframe class="h-full w-full" width="560" height="315" src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

const quote = (text, who, id, seconds, stamp, title) => `<figure><blockquote><p>${text}</p></blockquote><figcaption>— ${who}, <a href="https://www.youtube.com/watch?v=${id}&amp;t=${seconds}s" target="_blank" rel="noopener noreferrer">${title}</a> (at ${stamp})</figcaption></figure>`;

export const doozaPlatformSummary = `<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses. For AI search, Ranky does the work.</strong> Ranky tracks how ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, and Google AI Overviews answer the prompts your buyers ask, maps which sources those answers cite, and then does the fixes: it drafts and publishes answer-ready pages, fixes schema, and flags the third-party threads worth joining, all behind your approval. Every Dooza product starts with a refundable pilot — 100% refund within 14 days.</p>`;

const profoundAlternativePost = {
    id: 209,
    title: 'Best Profound AI Alternative in 2026: Track AI Visibility and Actually Improve It',
    seoTitle: 'Best Profound AI Alternative (Tryprofound) in 2026',
    seoDescription: 'Looking for a Profound (tryprofound.com) alternative? Compare AI visibility platforms on tracking, citations, content execution, and pricing, and see where Dooza fits.',
    excerpt: 'Profound is a strong AI marketing platform whose agents can research, write, and publish with your approval. If you are a small business that wants the measure-and-improve loop done for you, starting with a refundable pilot, here is how to choose an alternative.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '12 min read',
    readTimeMinutes: 12,
    category: 'Comparison',
    tags: ['Profound AI', 'Tryprofound', 'Profound Alternative', 'AI Visibility', 'AEO', 'GEO Tools'],
    image: '/blog/profound-ai-alternative.png',
    imageAlt: 'Watercolor illustration of a small business team reviewing AI chat answers that mention their brand, with arrows leading from measurement to a checklist and a published web page',
    slug: 'profound-ai-alternative',
    video: {
        name: 'AEO Playbook: How to Optimize for AI w/ Profound’s Josh Blyskal',
        description: 'Profound AI strategist Josh Blyskal explains what Profound sees in answer-engine data, which content types get cited, and why teams struggle to turn AI visibility data into action.',
        thumbnailUrl: 'https://i.ytimg.com/vi/GgGueQggcfU/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/GgGueQggcfU',
        uploadDate: '2025-06-30',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-profound-sells', label: 'What Profound sells' },
        { id: 'why-switch', label: 'Why teams look for alternatives' },
        { id: 'video', label: 'What Profound says' },
        { id: 'criteria', label: 'How to evaluate' },
        { id: 'comparison', label: 'Comparison table' },
        { id: 'dooza', label: 'Dooza as a Profound alternative' },
        { id: 'others', label: 'Other alternatives' },
        { id: 'migration', label: 'Switching checklist' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 7, 2026. Profound plan details checked against <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer">tryprofound.com/pricing</a>.</em></p>
<h2 id="short-answer">What is the best Profound AI alternative?</h2>
<p><strong>The best Profound alternative depends on who will act on the data.</strong> Profound (tryprofound.com) is an enterprise AI marketing platform: it tracks how answer engines mention your brand, estimates what people prompt, measures AI crawler traffic, and adds an AI Marketer and Agents that research, write, and publish content, with an approval step before anything publishes. Its pricing page lists a 7-day free Trial, an Agency Growth plan at $99/month (full client workspaces are a $399/month add-on), and a custom-priced Enterprise plan (checked October 7, 2026).</p>
<p>If you want that same loop, <strong>measure, find gaps, publish, and prove impact</strong>, done for you rather than run by your own team, Dooza is the closest fit for small businesses: Ranky and Dooza engineers do the work with your approval, starting with a refundable pilot. If you only want a cheaper tracker, Peec AI and Otterly.ai are common picks.</p>
<ul>
<li><strong>Pick Profound</strong> if you are an enterprise or agency that needs up to 9 tracked answer engines, SSO/SAML, SOC 2, API access, and custom contracts, or if your own marketing team wants to run AI agents in-house.</li>
<li><strong>Pick Dooza</strong> if you need AI visibility tracking <em>and</em> someone to do the fixes, starting with a refundable pilot (100% refund within 14 days).</li>
<li><strong>Pick a pure tracker</strong> (Peec AI, Otterly.ai) if you already have writers and SEO staff waiting on data.</li>
</ul>

<h2 id="what-profound-sells">What does Profound actually sell?</h2>
<p>Profound describes itself as "the AI marketing platform to win" in ChatGPT, Perplexity, Claude, Gemini, Microsoft Copilot, DeepSeek, and Google AI Overviews. Its platform is a set of modules, and knowing them makes it easier to compare alternatives like for like:</p>
<table><thead><tr><th>Profound module</th><th>What it does</th><th>What to look for in an alternative</th></tr></thead><tbody>
<tr><td>Answer Engine Insights</td><td>How answer engines describe your category and brand; share of voice</td><td>Prompt-level tracking across the engines your buyers use</td></tr>
<tr><td>Prompt Volumes</td><td>Estimates of what people ask AI assistants</td><td>A defensible way to choose which prompts to track</td></tr>
<tr><td>Agent Analytics</td><td>AI crawler and agent visits to your site</td><td>Crawler access checks and bot traffic visibility</td></tr>
<tr><td>AI Marketer and Agents</td><td>Finds work worth doing; Agents research, write, and publish content, with an approval step before anything publishes</td><td>Who runs the agents and reviews the output: your team or the vendor</td></tr>
<tr><td>Context Manager</td><td>Brand context that powers the agents</td><td>A single brand facts source the AI writes from</td></tr>
<tr><td>Shopping</td><td>Product visibility in ChatGPT Shopping</td><td>Product-recommendation prompt tracking (for ecommerce)</td></tr>
</tbody></table>
<p>The pricing page lists a free <strong>Trial</strong> (50 prompts tracked daily for 7 days, three engines: ChatGPT, Gemini, and Google AI Overviews, no history or exports), an <strong>Agency Growth</strong> plan for agencies at $99/month with full client workspaces as a $399/month add-on, and <strong>Enterprise</strong> (custom prompts, up to 9 engines, multiple regions, API, CSV/JSON exports, SSO/SAML, SOC 2), custom-priced (checked October 7, 2026). We broke the numbers down in <a href="/blog/profound-ai-pricing">Profound AI pricing</a>.</p>

<h2 id="why-switch">Why do teams look for Profound alternatives?</h2>
<p>Most teams that search for a tryprofound alternative are not unhappy with the data. They run into one of four problems:</p>
<ol>
<li><strong>Custom Enterprise pricing.</strong> Agencies get a published $99/month Agency Growth plan, but brand Enterprise plans are custom-priced after a demo (checked October 7, 2026). Small teams often cannot budget an unknown contract.</li>
<li><strong>Someone still has to run it.</strong> AI visibility moves when pages get written, comparisons get published, schema gets fixed, and third-party mentions get earned. Profound's Agents can research, write, and publish with an approval step, but your team still sets priorities, reviews the work, and runs the program. Small businesses without a marketer often want that done for them.</li>
<li><strong>Too much surface area.</strong> Nine engines, multiple regions, and agent credits are valuable for a Fortune 500 brand. A 20-person company usually needs 30 to 100 prompts tracked well.</li>
<li><strong>Time to value.</strong> Lean teams need changes live this month, not a quarter-long rollout.</li>
</ol>

<h2 id="video">What does Profound's own team say about turning data into action?</h2>
<p>The clearest argument for an execution-first alternative comes from Profound itself. In a 2025 interview, Profound AI strategist Josh Blyskal described the most common feedback the company hears:</p>
${quote('So right now some of the biggest feedback we get from marketers and users alike is that this data is incredible. The data is, you know, world-class leading, you know, no one has this data, but how do we actually understand, how do we understand for our site, for our brand, how to actually take action?', 'Josh Blyskal, Profound', 'GgGueQggcfU', 2854, '47:34', 'AEO Playbook: How to Optimize for AI (Content and Conversation)')}
<p>In the same conversation he shares Profound's citation research: listicle and comparison content made up 32.9% of the citations in their dataset, the single most cited content type, and he notes that ChatGPT's retrievals lean on Bing, so a page must be indexed in Bing to appear. Those are the kinds of findings a platform should turn into a to-do list, and then into published pages.</p>
${yt('GgGueQggcfU', 'AEO Playbook: How to Optimize for AI w/ Profound’s Josh Blyskal')}

<h2 id="criteria">How should you evaluate a Profound alternative?</h2>
<p>Use the same six questions for every tool on your shortlist:</p>
<ol>
<li><strong>Which engines are tracked?</strong> At minimum ChatGPT, Google AI Overviews, Perplexity, and Gemini. Claude and Copilot matter for B2B.</li>
<li><strong>How are prompts chosen?</strong> Look for prompts built from real search demand, sales calls, and support tickets, not a generic list.</li>
<li><strong>Do you see citations, not just mentions?</strong> You need the URLs answer engines cite, so you know which pages to win or improve.</li>
<li><strong>Who does the work?</strong> Ask what happens after a gap is found. Brief? Draft? Published page?</li>
<li><strong>Is pricing published?</strong> Know your cost at 50, 100, and 250 prompts before the demo.</li>
<li><strong>How is impact proven?</strong> Re-checks on a fixed prompt set, AI referral traffic, and conversions from AI sources.</li>
</ol>

<h2 id="comparison">Profound vs alternatives: comparison table</h2>
<table><thead><tr><th>Platform</th><th>Model</th><th>Published starting price</th><th>Does the content work</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>Dooza</strong></td><td>AI visibility tracking + execution, done for you</td><td>Refundable pilot (see <a href="/pricing">/pricing</a>)</td><td>Yes: Ranky and Dooza engineers do it for you, with your approval</td><td>Small businesses without an in-house SEO team</td></tr>
<tr><td>Profound</td><td>AI marketing platform</td><td>7-day free Trial; Agency Growth $99/mo; Enterprise custom (checked October 7, 2026)</td><td>Yes: AI Marketer and Agents research, write, and publish with approval; your team runs them</td><td>Enterprises, agencies, and in-house marketing teams</td></tr>
<tr><td>Peec AI</td><td>AI search analytics</td><td>$95/mo, or $80/mo billed annually (checked October 7, 2026)</td><td>Recommended actions and agent actions from your data</td><td>Marketing teams wanting clean tracking</td></tr>
<tr><td>Otterly.ai</td><td>AI search monitoring</td><td>From $29/mo, Lite (checked October 7, 2026)</td><td>Recommendations and GEO audit</td><td>Budget baseline tracking</td></tr>
<tr><td>Semrush AI Visibility Toolkit</td><td>Toolkit in an SEO suite</td><td>$99/mo, or bundled in Semrush One (checked October 7, 2026)</td><td>Check vendor</td><td>Teams already on Semrush</td></tr>
<tr><td>Ahrefs Brand Radar</td><td>Add-on to an SEO suite</td><td>Free with paid Ahrefs plans from Lite; starts at $50/mo (checked October 7, 2026)</td><td>Check vendor</td><td>Teams already on Ahrefs</td></tr>
</tbody></table>
<p>Prices change often. Figures are from each vendor's own pricing page: <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer">Profound</a>, <a href="https://peec.ai/pricing" target="_blank" rel="noopener noreferrer">Peec AI</a>, <a href="https://otterly.ai/pricing" target="_blank" rel="noopener noreferrer">Otterly.ai</a>, <a href="https://www.semrush.com/kb/1493-ai-toolkit" target="_blank" rel="noopener noreferrer">Semrush</a>, and <a href="https://ahrefs.com/brand-radar" target="_blank" rel="noopener noreferrer">Ahrefs</a>; confirm with each vendor before you buy.</p>

<h2 id="dooza">How does Dooza work as a Profound alternative?</h2>
${doozaPlatformSummary}
<p>Here is how Dooza maps to the jobs Profound's modules do:</p>
<table><thead><tr><th>Job</th><th>Profound</th><th>Dooza</th></tr></thead><tbody>
<tr><td>See how AI answers describe you</td><td>Answer Engine Insights</td><td>AI visibility tracking: a fixed prompt set re-run on a schedule, with mentions, position, sentiment, and share of voice vs competitors</td></tr>
<tr><td>Know what to track</td><td>Prompt Volumes</td><td>Prompt research from real search data, your sales questions, and competitor comparisons</td></tr>
<tr><td>Know who gets cited</td><td>Citations</td><td>Citation map: the URLs and domains each engine cites for your prompts, grouped into owned, editorial, community, and competitor sources</td></tr>
<tr><td>See AI bots on your site</td><td>Agent Analytics</td><td>AI crawler check: robots.txt, OAI-SearchBot, Claude-SearchBot, and PerplexityBot access, plus <code>llms.txt</code></td></tr>
<tr><td>Turn gaps into work</td><td>AI Marketer, Agents</td><td>Ranky drafts, optimizes, and publishes the page, fixes schema, and suggests community replies for approval</td></tr>
<tr><td>Keep AI on-brand</td><td>Context Manager</td><td>Brand facts file: products, pricing, proof, and positioning Ranky writes from</td></tr>
</tbody></table>
<p>The honest trade-off: Dooza is built for small businesses that want the work done for them, not for Fortune 100 procurement. If you need up to nine engines across 30+ languages with SSO and a data API, or your marketing team wants to run AI agents itself, Profound is the stronger buy. If you need to show up in ChatGPT for the 50 prompts that drive your pipeline, Dooza is built for that. See the full <a href="/dooza-vs-profound">Dooza vs Profound comparison</a>.</p>

<h2 id="others">What are the other Profound alternatives?</h2>
<ul>
<li><strong>Peec AI</strong> — clean share-of-voice, source, and sentiment reporting; three models per self-serve plan. See <a href="/blog/profound-vs-peec-ai">Profound vs Peec AI</a>.</li>
<li><strong>Otterly.ai</strong> — a low-cost way to get a baseline and simple alerts, from $29/mo (checked October 7, 2026).</li>
<li><strong>Scrunch AI</strong> — AI visibility monitoring plus page optimizations and content generation; Core from $250/mo (checked October 7, 2026, <a href="https://scrunch.com/pricing" target="_blank" rel="noopener noreferrer">scrunch.com/pricing</a>).</li>
<li><strong>AthenaHQ</strong> — a free Essential plan and a $295/mo Starter plan with on-page and off-page actions and a content optimization agent (checked October 7, 2026, <a href="https://www.athenahq.ai/pricing" target="_blank" rel="noopener noreferrer">athenahq.ai/pricing</a>).</li>
<li><strong>Semrush and Ahrefs add-ons</strong> — sensible if you already pay for the suite and only need a view of AI mentions.</li>
</ul>
<p>For the full shortlist, read <a href="/profound-alternatives">Profound alternatives</a> and our <a href="/blog/ai-visibility-tools">AI visibility tools buyer's guide</a>.</p>

<h2 id="migration">Switching from Profound: a 7-step checklist</h2>
<ol>
<li>Export your current prompt list and competitor set before your contract or trial ends.</li>
<li>Cut the list to the 30–100 prompts closest to revenue: "best X for Y", "X vs Y", "X alternatives", pricing questions.</li>
<li>Record a baseline: mention rate, average position, and cited URLs per engine.</li>
<li>List the cited pages you do not own. Those are your outreach and community targets.</li>
<li>List the prompts with no good answer page on your site. Those are your content backlog.</li>
<li>Publish in order of revenue impact, then re-run the same prompts every 2–4 weeks.</li>
<li>Report AI referral traffic and "how did you hear about us" answers alongside visibility.</li>
</ol>
<p>New to the category? Start with <a href="/blog/answer-engine-optimization">answer engine optimization</a> and <a href="/blog/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>.</p>

<h2 id="get-started">Get the measure-and-improve loop without an enterprise contract</h2>
<p>A Dooza engineer scopes your prompt set, baseline, and first fixes as a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a> or read how our <a href="/generative-engine-optimization">generative engine optimization</a> works.</p>`,
    faqData: [
        { question: "What is the best alternative to Profound AI?", answer: "For small businesses that want AI visibility tracking and the content work done for them, Dooza is the closest alternative, and it starts with a refundable pilot. For tracking only, Peec AI and Otterly.ai are common cheaper picks." },
        { question: "What is tryprofound.com?", answer: "Tryprofound.com is the website of Profound, an enterprise AI marketing platform that tracks how answer engines like ChatGPT, Perplexity, Gemini, and Google AI Overviews mention and cite brands, with modules for prompt volumes, agent analytics, and an AI Marketer." },
        { question: "Does Profound have a free plan?", answer: "Profound offers a free 7-day Trial that tracks 50 prompts daily across ChatGPT, Gemini, and Google AI Overviews. After that, agencies can buy the Agency Growth plan at $99/month (client workspaces are a $399/month add-on), and brands use a custom-priced Enterprise plan (checked October 7, 2026)." },
        { question: "How does Dooza pricing compare to Profound?", answer: "Dooza lists its pricing at dooza.ai/pricing and every Dooza product starts with a refundable pilot (100% refund within 14 days), with no credits and no per-seat fees. Profound publishes a 7-day free Trial and a $99/month Agency Growth plan for agencies; its Enterprise plan is custom-priced after a demo (checked October 7, 2026)." },
        { question: "What is the difference between Profound and Dooza?", answer: "Both measure how answer engines talk about your brand, and both can act on it: Profound's AI Marketer and Agents research, write, and publish with an approval step, run by your team. Dooza is built for small businesses that want it done for them: Ranky and Dooza engineers draft and publish the fixes with your approval, starting with a refundable pilot (100% refund within 14 days). Profound is the better pick for enterprise depth or an in-house team." },
        { question: "Can I use Dooza and Profound together?", answer: "Yes. Some teams keep an enterprise tracker for reporting and use Dooza to produce and publish the content, schema, and community work the data calls for." },
    ],
};

const profoundVsPeecPost = {
    id: 210,
    title: 'Profound vs Peec AI (2026): Which AI Visibility Tool Should You Buy?',
    seoTitle: 'Profound vs Peec AI (2026): Features, Pricing, Verdict',
    seoDescription: 'Profound vs Peec AI compared on answer engines, prompts, pricing, citations, and who each fits, plus a third option if you want the fixes done for you.',
    excerpt: 'Profound and Peec AI both track how ChatGPT, Perplexity, and Google AI answers mention your brand. They differ sharply on price, depth, and who they are built for. Here is a side-by-side, and what to do if you want the work done for you.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '10 min read',
    readTimeMinutes: 10,
    category: 'Comparison',
    tags: ['Profound AI', 'Peec AI', 'AI Visibility', 'AI Search Analytics', 'Tryprofound', 'Comparison'],
    image: '/blog/profound-vs-peec-ai.png',
    imageAlt: 'Watercolor illustration of two share-of-voice dashboards balanced on a brass scale, with a small open toolbox of pages beneath',
    slug: 'profound-vs-peec-ai',
    video: {
        name: 'Peec.ai Review & Tutorial 2026 — Full Beginner’s Guide',
        description: 'A walkthrough of Peec AI covering prompts, share of voice, source types, sentiment, position, and competitor tracking.',
        thumbnailUrl: 'https://i.ytimg.com/vi/1O0U0oemB84/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/1O0U0oemB84',
        uploadDate: '2025-10-04',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'side-by-side', label: 'Side-by-side' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'tracking', label: 'Tracking depth' },
        { id: 'video', label: 'Peec in practice' },
        { id: 'profound-wins', label: 'Where Profound wins' },
        { id: 'peec-wins', label: 'Where Peec wins' },
        { id: 'gap', label: 'The gap both leave' },
        { id: 'dooza', label: 'A third option' },
        { id: 'decision', label: 'How to decide' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 7, 2026. Plan details checked against each vendor's pricing page.</em></p>
<h2 id="short-answer">Profound or Peec AI: which is better?</h2>
<p><strong>Profound is better for enterprises that need depth; Peec AI is better for marketing teams that want clean, affordable tracking.</strong> Profound (tryprofound.com) tracks up to 9 answer engines on custom Enterprise contracts and adds prompt-volume data, agent analytics, and an AI Marketer with Agents that research, write, and publish with your approval. Peec AI publishes self-serve plans from $95/mo billed monthly, or $80/mo billed annually (checked October 7, 2026), that track three AI models per plan with share of voice, sources, sentiment, and position.</p>
<p>Both tools assume your team runs the program. If you are a small business without that team and want the work done for you, a done-for-you option such as Dooza is worth a look.</p>

<h2 id="side-by-side">Profound vs Peec AI side by side</h2>
<table><thead><tr><th></th><th>Profound</th><th>Peec AI</th></tr></thead><tbody>
<tr><td>Positioning</td><td>"The AI marketing platform to win" in AI search</td><td>AI search analytics for marketing teams</td></tr>
<tr><td>Pricing</td><td>7-day free Trial; Agency Growth $99/mo (client workspaces a $399/mo add-on); Enterprise custom (checked October 7, 2026)</td><td>Self-serve Starter, Pro, Advanced; Enterprise custom</td></tr>
<tr><td>Answer engines</td><td>Trial: 3. Enterprise: up to 9 (ChatGPT, Perplexity, Google AI Mode, Gemini, Copilot, DeepSeek, Claude, AI Overviews, Exa)</td><td>3 models per self-serve plan; more as paid add-ons; Enterprise: up to 13 models</td></tr>
<tr><td>Prompts</td><td>Trial: 50. Enterprise: custom</td><td>50 / 150 / 350 by tier</td></tr>
<tr><td>Prompt demand data</td><td>Prompt Volumes</td><td>Prompt volume (relative demand, scored 1–5)</td></tr>
<tr><td>AI crawler analytics</td><td>Agent Analytics with CDN integrations</td><td>Agent analytics: crawl insights across 40+ AI bots</td></tr>
<tr><td>Content and actions</td><td>AI Marketer and Agents research, write, and publish, with an approval step</td><td>Recommended actions and agent actions generated from your data</td></tr>
<tr><td>Security / procurement</td><td>SSO/SAML, SOC 2, API on Enterprise</td><td>API and SSO on Enterprise</td></tr>
<tr><td>Best for</td><td>Enterprise brands and large agencies</td><td>SMB to mid-market marketing teams</td></tr>
</tbody></table>
<p>Sources: <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer">Profound pricing</a> and <a href="https://peec.ai/pricing" target="_blank" rel="noopener noreferrer">Peec AI pricing</a>, checked October 7, 2026. Both vendors change plans often.</p>

<h2 id="pricing">How do Profound and Peec AI pricing compare?</h2>
<p>Peec AI is the easier budget line. Its self-serve pricing, billed monthly: <strong>Starter $95/mo</strong> (50 prompts, 3 models), <strong>Pro $245/mo</strong> (150 prompts), and <strong>Advanced $495/mo</strong> (350 prompts). Annual billing takes 15% off: $80, $205, and $420 per month (checked October 7, 2026). Extra models cost more.</p>
<p>Profound's Trial is free for 7 days. Agencies can buy Agency Growth at $99/month, with full client workspaces as a $399/month add-on; brand Enterprise plans are custom-priced after a demo (checked October 7, 2026). Third-party reviews report enterprise deals in the low thousands per month. See our <a href="/blog/profound-ai-pricing">Profound pricing breakdown</a>.</p>

<h2 id="tracking">How does tracking depth differ?</h2>
<p>Both tools track a set of prompts, record whether your brand appears, and calculate share of voice. The differences are breadth and extras:</p>
<ul>
<li><strong>Engines:</strong> Profound Enterprise tracks up to 9 engines, including DeepSeek and Exa. Peec starts with three models per self-serve plan, sells more as add-ons, and tracks up to 13 models on Enterprise.</li>
<li><strong>Sources:</strong> Peec classifies each cited source into a category such as competitor, editorial, reference, or UGC, which is helpful for planning outreach. Profound offers citation analysis at larger scale.</li>
<li><strong>Demand:</strong> Profound's Prompt Volumes estimates what people ask. Peec scores the relative demand behind each tracked prompt from 1 to 5.</li>
<li><strong>Bots:</strong> Profound's Agent Analytics shows AI crawler traffic via Cloudflare, Vercel, Akamai, and others. Peec's agent analytics shows which AI bots hit which pages, across 40+ bots.</li>
</ul>

<h2 id="video">What does using Peec AI look like in practice?</h2>
<p>This independent walkthrough shows Peec's prompts, share of voice, source types, and per-prompt sentiment and position. Two points from it apply to any AI visibility tool, including Profound:</p>
${quote('I want you to think of prompts as keywords of AI search world. People are not typing keywords in ChatGPT, they’re typing prompts.', 'Ako Stark Tutorials', '1O0U0oemB84', 426, '7:06', 'Peec.ai Review &amp; Tutorial 2026')}
${quote('If you see the Reddit, YouTube, and corporate sources dominate, post more high value UGC and long-form product pages. LLMs prefer redundancy. Appearing in multiple source types increases your permanence in responses.', 'Ako Stark Tutorials', '1O0U0oemB84', 1010, '16:50', 'Peec.ai Review &amp; Tutorial 2026')}
<p>The reviewer also points out that Peec asks you to keep your own brand name out of tracked prompts, so you measure whether you show up organically. Peec has since added recommended actions and agent actions generated from your data, so check the current product rather than older reviews.</p>
${yt('1O0U0oemB84', 'Peec.ai Review & Tutorial 2026 — Full Beginner’s Guide')}

<h2 id="profound-wins">Where does Profound win?</h2>
<ul>
<li>Enterprise coverage: up to 9 engines, multiple languages and regions.</li>
<li>Prompt Volumes for prioritizing large content roadmaps.</li>
<li>Agent Analytics with CDN and hosting integrations.</li>
<li>Procurement-ready: SSO/SAML, SOC 2, API, exports, dedicated Slack support.</li>
<li>AI Marketer and Agents that research, write, and publish content inside the platform, with an approval step.</li>
<li>A published $99/month Agency Growth plan for agencies (checked October 7, 2026).</li>
</ul>

<h2 id="peec-wins">Where does Peec AI win?</h2>
<ul>
<li>Published, self-serve pricing you can start today.</li>
<li>Simple, readable reporting on visibility, position, sentiment, and sources.</li>
<li>Country-level tracking and Looker Studio on higher tiers.</li>
<li>Up to 13 tracked models on Enterprise, and AI-crawler analytics across 40+ bots.</li>
<li>A lighter tool for teams that already have writers and SEO staff.</li>
</ul>

<h2 id="gap">What gap do Profound and Peec AI both leave?</h2>
<p>Both tools answer "where are we invisible?", and both now suggest or generate actions. But someone on your side still has to decide, review, and run the program: "who owns this every week?" The work that moves AI visibility is concrete:</p>
<ol>
<li>Publishing answer pages for prompts where you are missing: comparisons, alternatives, pricing, "best for" pages.</li>
<li>Rewriting existing pages so the first paragraph answers the question, with tables, FAQs, and sources.</li>
<li>Adding schema and fixing crawler access for OAI-SearchBot, Claude-SearchBot, and PerplexityBot.</li>
<li>Earning mentions on the editorial, Reddit, and YouTube pages the engines already cite.</li>
</ol>
<p>If your team has capacity to run that list, Profound or Peec is likely the better pick: you keep control and pay for software, not service. If not, a tool alone becomes a monthly reminder of the problem.</p>

<h2 id="dooza">Is there a third option that does the work for you?</h2>
${doozaPlatformSummary}
<table><thead><tr><th></th><th>Profound</th><th>Peec AI</th><th>Dooza</th></tr></thead><tbody>
<tr><td>Tracks AI answers and share of voice</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Citation / source map</td><td>Yes</td><td>Yes</td><td>Yes</td></tr>
<tr><td>Content and fixes</td><td>Agents research, write, and publish with approval; your team runs them</td><td>Recommended and agent actions; your team acts</td><td>Done for you by Ranky and Dooza engineers, with your approval</td></tr>
<tr><td>Published starting price</td><td>Yes for agencies ($99/mo Agency Growth); Enterprise custom (checked October 7, 2026)</td><td>Yes ($95/mo, or $80/mo billed annually; checked October 7, 2026)</td><td>Refundable pilot (see <a href="/pricing">/pricing</a>)</td></tr>
<tr><td>Setup</td><td>Self-serve Trial; Enterprise via demo</td><td>Self-serve</td><td>Done with you by a Dooza engineer</td></tr>
</tbody></table>
<p>Dooza is not the pick for a 9-engine, 30+-language enterprise program, or for a team that wants to run its own tool. It is the pick when a small team needs to move from invisible to cited on the prompts that drive revenue. Compare more options in <a href="/profound-alternatives">Profound alternatives</a>.</p>

<h2 id="decision">How do you decide?</h2>
<ol>
<li><strong>Enterprise with an AEO team:</strong> Profound.</li>
<li><strong>Marketing team with writers, modest budget:</strong> Peec AI.</li>
<li><strong>Small business that wants the work done for it:</strong> Dooza, or any tracker plus Dooza's done-for-you execution.</li>
</ol>
<p>Whatever you pick, run a 30-day test on a fixed set of 30–50 prompts and judge by what changed, not by how the dashboard looks. Our <a href="/blog/ai-visibility-tools">AI visibility tools guide</a> has a scoring sheet.</p>

<h2 id="get-started">Get tracking and fixes done for you</h2>
<p><a href="/book">Book a free pilot call</a>. We will scope a refundable pilot that builds your prompt set, baseline, and first three fixes.</p>`,
    faqData: [
        { question: "Is Peec AI cheaper than Profound?", answer: "For brands, usually yes. Peec AI's self-serve plans start at $95/mo billed monthly, or $80/mo billed annually, while Profound offers a 7-day free Trial, a $99/month Agency Growth plan for agencies, and custom-priced Enterprise plans (checked October 7, 2026)." },
        { question: "How many AI engines does Peec AI track?", answer: "Peec AI's self-serve plans track three AI models by default, with additional models available as paid add-ons, and its Enterprise plan tracks up to 13 models. Profound Enterprise tracks up to nine answer engines." },
        { question: "Does Profound or Peec AI write content?", answer: "Profound's AI Marketer and Agents research, write, and publish content, with an approval step before anything publishes. Peec AI offers recommended actions and agent actions generated from your data. In both cases your team runs the tool." },
        { question: "Which is better for a small business, Profound or Peec AI?", answer: "Peec AI is usually the better fit of the two for a small business because it has published self-serve pricing. If the business wants the content and schema work done for it rather than run in-house, a done-for-you option like Dooza fits better." },
        { question: "What should I track in Profound or Peec AI?", answer: "Track 30 to 100 unbranded, buying-intent prompts such as 'best X for Y', 'X vs Y', and 'X alternatives', plus a few branded prompts to check accuracy and sentiment." },
    ],
};

const aiVisibilityToolsPost = {
    id: 211,
    title: 'AI Visibility Tools in 2026: How to Choose a Platform That Tracks and Improves Your Brand in AI Search',
    seoTitle: 'AI Visibility Tools 2026: How to Choose (Buyer’s Guide)',
    seoDescription: 'A buyer’s guide to AI visibility tools and platforms: what they measure, how to test one for free, a scoring sheet, pricing ranges, and how Dooza tracks and improves AI visibility.',
    excerpt: 'AI visibility tools show how ChatGPT, Perplexity, Gemini, and Google AI Overviews talk about your brand. This guide explains the metrics, how to run a free manual audit first, and how to pick a platform that turns the numbers into fixes.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '11 min read',
    readTimeMinutes: 11,
    category: 'Guides',
    tags: ['AI Visibility', 'AI Visibility Tools', 'AI Search Tracking', 'AEO Tools', 'Share of Voice', 'Profound Alternative'],
    image: '/blog/ai-visibility-tools.png',
    imageAlt: 'Watercolor illustration of an open toolbox holding a magnifying glass, speech bubbles, a line chart, and citation tags',
    slug: 'ai-visibility-tools',
    video: {
        name: 'How to Track Your Brand in ChatGPT & AI Search in 2026 (for FREE)',
        description: 'Backlinko’s Matt Kenyon shows a manual method to track brand mentions, citations, sentiment, and share of voice across ChatGPT, Google AI Overviews, Claude, and Perplexity.',
        thumbnailUrl: 'https://i.ytimg.com/vi/kjMC_9buuzw/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/kjMC_9buuzw',
        uploadDate: '2025-10-15',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-it-measures', label: 'What they measure' },
        { id: 'video', label: 'Free manual audit' },
        { id: 'types', label: 'Three types of tools' },
        { id: 'scorecard', label: 'Scoring sheet' },
        { id: 'pricing', label: 'Pricing ranges' },
        { id: 'dooza', label: 'Dooza' },
        { id: 'mistakes', label: 'Buying mistakes' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 7, 2026. Vendor prices checked against each vendor's own pricing page.</em></p>
<h2 id="short-answer">What is an AI visibility tool?</h2>
<p><strong>An AI visibility tool measures how often and how favorably AI answer engines mention and cite your brand.</strong> It runs a fixed set of prompts through ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, and Google AI Overviews, records who gets named and which URLs get cited, and reports your share of voice against competitors.</p>
<p>Many AI visibility platforms now go one step further: they turn gaps into work, such as new answer pages, schema fixes, and third-party mentions, and then re-measure. Some, like Profound, use AI agents your team runs; others, like Dooza, do the work for you. That is the difference between knowing you are invisible and becoming visible.</p>
<ul>
<li>Start with a free manual audit of 10–20 prompts to learn the metrics.</li>
<li>Buy a tracker or platform if you have people ready to run it and act on the data.</li>
<li>Choose a done-for-you option, like Dooza, if you do not.</li>
</ul>

<h2 id="what-it-measures">What do AI visibility tools measure?</h2>
<table><thead><tr><th>Metric</th><th>Definition</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Mention rate</td><td>% of tracked prompts where your brand is named</td><td>The core visibility number</td></tr>
<tr><td>Citation rate</td><td>% of answers that link to your URLs</td><td>Drives AI referral traffic</td></tr>
<tr><td>Share of voice</td><td>Your mentions ÷ all brand mentions for the prompt set</td><td>Shows competitive position</td></tr>
<tr><td>Average position</td><td>Where you appear in lists and recommendations</td><td>First-named brands get chosen more</td></tr>
<tr><td>Sentiment</td><td>How positively the answer describes you</td><td>Catches wrong or negative framing</td></tr>
<tr><td>Cited sources</td><td>Domains and URLs the engine relies on</td><td>Tells you where to earn mentions</td></tr>
<tr><td>AI crawler access</td><td>Whether search bots like OAI-SearchBot can reach you</td><td>Blocked bots cannot cite you</td></tr>
<tr><td>AI referral traffic</td><td>Sessions from chatgpt.com, perplexity.ai, and others</td><td>Connects visibility to revenue</td></tr>
</tbody></table>

<h2 id="video">How do you track AI visibility for free first?</h2>
<p>Before buying any tool, run the audit by hand once. Backlinko's Matt Kenyon makes the case directly:</p>
${quote('Before you go spending money on an automated AI visibility tracker, you should understand how large language models think, work, and what makes them valuable lead generation channels.', 'Matt Kenyon, Backlinko', 'kjMC_9buuzw', 39, '0:39', 'How to Track Your Brand in ChatGPT &amp; AI Search in 2026 (for FREE)')}
${quote('But even better is getting your brand mentioned by name in the actual answer. And if you can get both a direct mention and a citation, that’s perfection.', 'Matt Kenyon, Backlinko', 'kjMC_9buuzw', 107, '1:47', 'How to Track Your Brand in ChatGPT &amp; AI Search in 2026 (for FREE)')}
<p>His method, condensed:</p>
<ol>
<li>Write at least five unbranded discovery prompts and five branded prompts. Pull ideas from sales and support.</li>
<li>Run them in temporary or incognito mode in ChatGPT, Perplexity, Claude, and Google.</li>
<li>Log mentions, sentiment, recurring sources, and competitors in a spreadsheet.</li>
<li>Have two different LLMs analyze the sheet, and verify the results.</li>
<li>Re-run the audit about a month after you make changes.</li>
</ol>
${yt('kjMC_9buuzw', 'How to Track Your Brand in ChatGPT & AI Search in 2026 (for FREE)')}
<p>The manual audit is the right first step. It stops working when you need 50+ prompts, several engines, weekly re-runs, and a record over time. That is when a platform pays for itself.</p>

<h2 id="types">What types of AI visibility tools are there?</h2>
<table><thead><tr><th>Type</th><th>Examples</th><th>What you get</th><th>What you still need</th></tr></thead><tbody>
<tr><td>AI marketing platforms with agents</td><td>Profound</td><td>Deep multi-engine data, prompt volumes, agent analytics, and Agents that research, write, and publish with approval</td><td>Budget and a team to run the agents and review the work</td></tr>
<tr><td>Trackers with optimization or content features</td><td>Scrunch AI, AthenaHQ</td><td>Share of voice, sources, plus page optimizations, content generation, or a content optimization agent</td><td>A team to run them and act on the output</td></tr>
<tr><td>Trackers</td><td>Peec AI, Otterly.ai</td><td>Share of voice, sources, sentiment, recommended actions</td><td>Writers, SEO, outreach</td></tr>
<tr><td>SEO-suite add-ons</td><td>Semrush AI Visibility Toolkit, Ahrefs Brand Radar</td><td>AI mentions next to SEO data</td><td>Same as trackers</td></tr>
<tr><td>Done-for-you service</td><td>Dooza</td><td>Tracking, citation map, and fixes done by Ranky and Dooza engineers</td><td>Approvals from you</td></tr>
</tbody></table>

<h2 id="scorecard">How do you score AI visibility platforms?</h2>
<p>Score each tool 1–5 on these criteria and weight them to your situation:</p>
<ol>
<li><strong>Engine coverage</strong> for the assistants your buyers use.</li>
<li><strong>Prompt quality:</strong> can you build prompts from real demand and sales questions?</li>
<li><strong>Citation detail:</strong> do you see exact URLs, not just domains?</li>
<li><strong>Actionability:</strong> does the tool tell you what to do, draft it, or publish it?</li>
<li><strong>Re-measurement:</strong> fixed prompt sets, history, and trend lines.</li>
<li><strong>Traffic tie-in:</strong> AI referral traffic and conversions.</li>
<li><strong>Price transparency</strong> at your prompt count.</li>
</ol>
<p>A team with no writers should weight actionability at 3x. A team with an agency already producing content can weight coverage and history higher.</p>

<h2 id="pricing">How much do AI visibility tools cost?</h2>
<ul>
<li><strong>Budget trackers:</strong> from $29/mo (Otterly.ai Lite); AthenaHQ also has a free Essential plan.</li>
<li><strong>Mid-market tools:</strong> $95–$495/mo billed monthly (Peec AI self-serve tiers; $80–$420/mo billed annually), $250/mo (Scrunch AI Core), $295/mo (AthenaHQ Starter).</li>
<li><strong>Profound:</strong> a 7-day free Trial, Agency Growth at $99/mo for agencies (client workspaces a $399/mo add-on), and custom-priced Enterprise.</li>
<li><strong>Done for you:</strong> Dooza, starting with a refundable pilot (100% refund within 14 days); see <a href="/pricing">/pricing</a>.</li>
</ul>
<p>Competitor prices are from each vendor's own pricing page, checked October 7, 2026: <a href="https://otterly.ai/pricing" target="_blank" rel="noopener noreferrer">Otterly.ai</a>, <a href="https://peec.ai/pricing" target="_blank" rel="noopener noreferrer">Peec AI</a>, <a href="https://scrunch.com/pricing" target="_blank" rel="noopener noreferrer">Scrunch AI</a>, <a href="https://www.athenahq.ai/pricing" target="_blank" rel="noopener noreferrer">AthenaHQ</a>, and <a href="https://www.tryprofound.com/pricing" target="_blank" rel="noopener noreferrer">Profound</a>. Always price your exact prompt count and engine list.</p>

<h2 id="dooza">How does Dooza track and improve AI visibility?</h2>
${doozaPlatformSummary}
<p>In practice, a Dooza month looks like this:</p>
<ol>
<li><strong>Week 1:</strong> build the prompt set from search data and your sales questions; record the baseline and citation map.</li>
<li><strong>Week 2:</strong> fix crawler access and schema; publish the first answer pages Ranky drafted and you approved.</li>
<li><strong>Week 3:</strong> join the community threads and pitch the listicles the engines already cite.</li>
<li><strong>Week 4:</strong> re-run the prompt set and report what changed, including AI referral traffic.</li>
</ol>
<p>If you are comparing against enterprise tools, read <a href="/blog/profound-ai-alternative">the best Profound AI alternative</a> and <a href="/dooza-vs-profound">Dooza vs Profound</a>.</p>

<h2 id="mistakes">What mistakes do buyers make with AI visibility tools?</h2>
<ul>
<li><strong>Tracking branded prompts only.</strong> You will look great and learn nothing. Most prompts should not include your name.</li>
<li><strong>Tracking too many prompts.</strong> 500 generic prompts dilute the signal. Start with 30–100 near revenue.</li>
<li><strong>Treating one run as truth.</strong> AI answers vary run to run; trends over weeks matter more than a single answer.</li>
<li><strong>Buying data with no owner.</strong> Assign who acts on each finding before you buy.</li>
<li><strong>Ignoring off-site sources.</strong> Many citations come from Reddit, YouTube, reviews, and listicles, not your site.</li>
</ul>
<p>Next, learn how <a href="/blog/ai-citations">AI citations</a> work and how to <a href="/blog/ai-overviews-tracking">track Google AI Overviews</a>.</p>

<h2 id="get-started">Start with a refundable pilot</h2>
<p><a href="/book">Book a free pilot call</a>. We will scope a pilot that builds your prompt set and baseline and ships the first fixes, with a 100% refund within 14 days.</p>`,
    faqData: [
        { question: "What is an AI visibility tool?", answer: "An AI visibility tool tracks how often and how favorably AI answer engines such as ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews mention and cite your brand, usually by running a fixed set of prompts on a schedule." },
        { question: "Can I track AI visibility for free?", answer: "Yes. Run 10 to 20 prompts manually in ChatGPT, Perplexity, Claude, and Google using temporary or incognito mode, log mentions, sources, and sentiment in a spreadsheet, and re-run the audit monthly." },
        { question: "What metrics matter most for AI visibility?", answer: "Mention rate, citation rate, share of voice against competitors, average position, sentiment, cited sources, AI crawler access, and AI referral traffic." },
        { question: "How many prompts should I track?", answer: "Most growing brands should start with 30 to 100 unbranded, buying-intent prompts close to revenue, plus a small set of branded prompts to check accuracy." },
        { question: "What is the difference between an AI visibility tracker and platform?", answer: "A tracker reports where you appear. Many platforms also turn gaps into work: Profound's Agents research, write, and publish with approval, and Scrunch AI and AthenaHQ sell content features, all run by your team. Dooza does that work for you, with Ranky and Dooza engineers publishing fixes with your approval, then re-measuring." },
        { question: "How much do AI visibility tools cost?", answer: "Published prices range from a free plan (AthenaHQ Essential) and $29 per month (Otterly.ai Lite) to custom enterprise contracts (checked October 7, 2026). Dooza pricing depends on the product, and every Dooza product starts with a refundable pilot (100% refund within 14 days)." },
    ],
};

const answerEngineOptimizationPost = {
    id: 212,
    title: 'Answer Engine Optimization (AEO): The 2026 Guide to Getting Cited by AI',
    seoTitle: 'Answer Engine Optimization (AEO): 2026 Guide',
    seoDescription: 'What answer engine optimization (AEO) is, how answer engines choose sources, the AEO playbook step by step, how to measure it, and the tools and platforms that help.',
    excerpt: 'Answer engine optimization is how you get mentioned and cited when people ask ChatGPT, Perplexity, Gemini, and Google AI a question. Here is how it works, what to do first, and how to measure it.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '13 min read',
    readTimeMinutes: 13,
    category: 'Guides',
    tags: ['Answer Engine Optimization', 'AEO', 'GEO', 'AI Search', 'AI Visibility', 'LLM SEO'],
    image: '/blog/answer-engine-optimization.png',
    imageAlt: 'Watercolor illustration of a question mark flowing into an AI chat answer card with numbered citation tags linked to web pages',
    slug: 'answer-engine-optimization',
    video: {
        name: 'Answer Engine Optimization (AEO) Course by Ahrefs: What is AEO?',
        description: 'Ahrefs’ Sam Oh defines answer engine optimization, explains how it differs from SEO, and shares Ahrefs’ data on AI search traffic and conversions.',
        thumbnailUrl: 'https://i.ytimg.com/vi/MLKgbeDeCxU/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/MLKgbeDeCxU',
        uploadDate: '2026-04-29',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'video', label: 'AEO explained' },
        { id: 'aeo-vs-seo', label: 'AEO vs SEO' },
        { id: 'how-engines-choose', label: 'How engines choose' },
        { id: 'playbook', label: 'AEO playbook' },
        { id: 'page-template', label: 'Page template' },
        { id: 'measure', label: 'Measuring AEO' },
        { id: 'tools', label: 'AEO tools' },
        { id: 'dooza', label: 'Dooza for AEO' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">What is answer engine optimization?</h2>
<p><strong>Answer engine optimization (AEO) is the practice of making your brand and content visible, and cited, in AI-generated answers.</strong> Answer engines include ChatGPT, Perplexity, Gemini, Claude, Microsoft Copilot, Google AI Overviews, and Google AI Mode. AEO is also called generative engine optimization (GEO) or LLM optimization; the terms mean essentially the same thing.</p>
<p>AEO builds on SEO. The foundations still matter: crawlable pages, useful content, and authority. What changes is the goal. You are no longer competing only for a position in a list of links; you are competing to be named and cited inside one synthesized answer.</p>
<ul>
<li><strong>Win condition:</strong> a mention by name plus a citation to your URL.</li>
<li><strong>Biggest levers:</strong> answer-first pages, comparison content, and brand mentions on sites the engines trust.</li>
<li><strong>Measure it</strong> with a fixed prompt set re-run over time, not by rankings.</li>
</ul>

<h2 id="video">How do experts define AEO?</h2>
<p>Ahrefs' Sam Oh gives the clearest short definition in the first lesson of Ahrefs' AEO course:</p>
${quote('In AEO, there is no list. The AI reads from dozens of sources, synthesizes an answer, and decides who to mention or cite. You’re not competing for a position. You’re competing for a mention.', 'Sam Oh, Ahrefs', 'MLKgbeDeCxU', 145, '2:25', 'Answer Engine Optimization (AEO) Course by Ahrefs: What is AEO?')}
${quote('AEO doesn’t replace SEO. It builds on top of it.', 'Sam Oh, Ahrefs', 'MLKgbeDeCxU', 167, '2:47', 'Answer Engine Optimization (AEO) Course by Ahrefs: What is AEO?')}
<p>He also shares Ahrefs' own numbers: in June 2025, AI search sent 0.5% of Ahrefs' traffic but drove 12.1% of its sign-ups, which he describes as a 23 times higher conversion rate than organic search. That is one company's data, but it explains why AEO moved from experiment to budget line.</p>
${yt('MLKgbeDeCxU', 'Answer Engine Optimization (AEO) Course by Ahrefs: What is AEO?')}

<h2 id="aeo-vs-seo">What is the difference between AEO and SEO?</h2>
<table><thead><tr><th></th><th>SEO</th><th>AEO</th></tr></thead><tbody>
<tr><td>Where you show up</td><td>A ranked list of links</td><td>Inside a synthesized AI answer</td></tr>
<tr><td>Win condition</td><td>Top positions, clicks</td><td>Mentions, citations, recommendations</td></tr>
<tr><td>Query shape</td><td>Short keywords</td><td>Long conversational prompts with context</td></tr>
<tr><td>Main signals</td><td>Relevance, links, technical health</td><td>Consensus across sources, clarity, freshness, brand mentions</td></tr>
<tr><td>Off-site focus</td><td>Backlinks</td><td>Mentions on listicles, reviews, Reddit, YouTube</td></tr>
<tr><td>Measurement</td><td>Rank tracking, Search Console</td><td>Prompt tracking, share of voice, AI referral traffic</td></tr>
</tbody></table>
<p>For a deeper comparison, see <a href="/blog/geo-vs-seo">GEO vs SEO</a>.</p>

<h2 id="how-engines-choose">How do answer engines choose which sources to cite?</h2>
<ol>
<li><strong>Query fan-out.</strong> The engine splits your prompt into many smaller searches, then retrieves pages for each.</li>
<li><strong>Retrieval.</strong> Pages must be indexed by the engine's search partner and reachable by its bot. ChatGPT search relies on OAI-SearchBot; Claude on Claude-SearchBot; Perplexity on PerplexityBot.</li>
<li><strong>Selection.</strong> Engines favor passages that answer directly, name specific entities, include data, and agree with other sources.</li>
<li><strong>Synthesis.</strong> The answer blends several sources; brands mentioned across many of them tend to get named.</li>
</ol>
<p>Each engine has its own preferences. Ahrefs found only 7 of the top 50 cited domains overlapped across Google AI Overviews, ChatGPT, and Perplexity. More in <a href="/blog/ai-citations">how AI citations work</a>.</p>

<h2 id="playbook">What is the AEO playbook, step by step?</h2>
<ol>
<li><strong>Build a prompt set.</strong> 30–100 prompts from search data, sales calls, support tickets, and competitor comparisons.</li>
<li><strong>Baseline.</strong> Record mentions, position, sentiment, and cited URLs per engine.</li>
<li><strong>Fix access.</strong> Allow search bots (OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, Bingbot) and check pages render in raw HTML. See <a href="/blog/gptbot-claudebot-ai-crawlers">AI crawlers explained</a>.</li>
<li><strong>Rewrite top pages answer-first.</strong> Direct answer in the first 100 words, then tables, steps, and FAQs.</li>
<li><strong>Publish missing pages.</strong> "Best X for Y", "X vs Y", "X alternatives", pricing, and use-case pages.</li>
<li><strong>Earn off-site mentions.</strong> Get listed on the listicles, review sites, Reddit threads, and YouTube videos the engines cite.</li>
<li><strong>Add structured data.</strong> Organization, Product, FAQPage, Article, and BreadcrumbList schema.</li>
<li><strong>Keep it fresh.</strong> Update key pages with dates and current facts.</li>
<li><strong>Re-measure</strong> every 2–4 weeks on the same prompt set.</li>
</ol>

<h2 id="page-template">What does an AEO-optimized page look like?</h2>
<ul>
<li>A title that matches the question.</li>
<li>A 2–3 sentence direct answer, bolded, at the top.</li>
<li>A short summary list with the buyer takeaway.</li>
<li>Question-style H2s, each opened by a one-sentence answer.</li>
<li>At least one comparison table.</li>
<li>Named entities (products, places, standards) instead of vague references.</li>
<li>Sourced statistics with links.</li>
<li>A visible FAQ that matches your FAQ schema.</li>
</ul>
<p>This article follows that template. For on-page detail, read <a href="/blog/llm-seo">LLM SEO</a>.</p>

<h2 id="measure">How do you measure AEO?</h2>
<table><thead><tr><th>Metric</th><th>How to get it</th></tr></thead><tbody>
<tr><td>Mention rate and share of voice</td><td>Re-run a fixed prompt set with an AI visibility platform</td></tr>
<tr><td>Citations</td><td>Log cited URLs per prompt and engine</td></tr>
<tr><td>AI referral traffic</td><td>Analytics segment for chatgpt.com, perplexity.ai, gemini.google.com, copilot.microsoft.com, claude.ai</td></tr>
<tr><td>Self-reported attribution</td><td>"How did you hear about us?" with an AI assistant option</td></tr>
<tr><td>AI Overviews presence</td><td>SERP tracking plus Search Console trends; see <a href="/blog/ai-overviews-tracking">AI Overviews tracking</a></td></tr>
</tbody></table>

<h2 id="tools">What tools help with answer engine optimization?</h2>
<p>AEO tools fall into trackers (Peec AI, Otterly.ai), platforms that also generate or publish content for your team to run (Profound, Scrunch AI, AthenaHQ), SEO-suite add-ons (Semrush, Ahrefs), and done-for-you options (Dooza). Our <a href="/blog/ai-visibility-tools">AI visibility tools guide</a> and <a href="/blog/best-geo-tools">best GEO tools</a> list compare them.</p>

<h2 id="dooza">How does Dooza do answer engine optimization?</h2>
${doozaPlatformSummary}
<p>Dooza runs the playbook above as a loop: prompt set and baseline, citation map, access and schema fixes, answer pages drafted by Ranky and approved by you, community and listicle outreach, then re-measurement. Compare it with enterprise options in <a href="/blog/profound-ai-alternative">Profound alternatives</a>, or see our <a href="/generative-engine-optimization">GEO services</a>.</p>

<h2 id="get-started">Start AEO with a refundable pilot</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot that shows where you appear today and ships the three fixes that will move it first.</p>`,
    faqData: [
        { question: "What is answer engine optimization (AEO)?", answer: "Answer engine optimization is the practice of making your brand and content visible and cited in AI-generated answers from ChatGPT, Perplexity, Gemini, Claude, Copilot, and Google AI Overviews." },
        { question: "Is AEO the same as GEO?", answer: "Essentially yes. AEO, GEO (generative engine optimization), and LLMO (large language model optimization) are used interchangeably for optimizing visibility in AI answers." },
        { question: "Does AEO replace SEO?", answer: "No. AEO builds on SEO. Crawlable, useful, authoritative pages remain the foundation; AEO adds answer-first formatting, comparison content, off-site mentions, and prompt-based measurement." },
        { question: "How long does AEO take to work?", answer: "Engines that search the web live, such as ChatGPT search and Perplexity, can pick up new or updated pages within days to weeks. Changing how models describe your brand broadly takes consistent work over months." },
        { question: "How do you measure answer engine optimization?", answer: "Re-run a fixed set of prompts across answer engines and track mention rate, citations, share of voice, position, and sentiment, alongside AI referral traffic and self-reported attribution." },
        { question: "What is the fastest AEO win?", answer: "Publish or rewrite comparison and 'best for' pages with a direct answer at the top, a comparison table, and an FAQ, and make sure AI search bots can crawl them." },
    ],
};

const aeoAgencyPost = {
    id: 213,
    title: 'AEO Agency vs AEO Platform: What Should You Hire in 2026?',
    seoTitle: 'AEO Agency vs AEO Platform: What to Hire (2026)',
    seoDescription: 'Should you hire an AEO or GEO agency, buy an AEO platform, or both? Costs, what each actually does, questions to ask, and a hybrid model that tracks and executes.',
    excerpt: 'AEO agencies sell expertise and hours. AEO platforms sell software your team runs. Most growing brands need both the measurement and the work. Here is how to decide, what to ask, and what it should cost.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '11 min read',
    readTimeMinutes: 11,
    category: 'Guides',
    tags: ['AEO Agency', 'GEO Agency', 'AEO Platform', 'Answer Engine Optimization', 'AI Visibility', 'Profound Alternative'],
    image: '/blog/aeo-agency.png',
    imageAlt: 'Watercolor illustration of a forked garden path, one side leading to consultants at a whiteboard and the other to a laptop running an automated platform',
    slug: 'aeo-agency',
    video: {
        name: 'The ultimate guide to AEO: How to get ChatGPT to recommend your product | Ethan Smith (Graphite)',
        description: 'Graphite CEO Ethan Smith explains on Lenny’s Podcast how answer engine optimization works, what to track, which tools are worth paying for, and what is hard to hire for.',
        thumbnailUrl: 'https://i.ytimg.com/vi/iT7kq-R3Gjc/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/iT7kq-R3Gjc',
        uploadDate: '2025-09-14',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-agencies-do', label: 'What agencies do' },
        { id: 'what-platforms-do', label: 'What platforms do' },
        { id: 'video', label: 'Ethan Smith on tools and teams' },
        { id: 'comparison', label: 'Comparison' },
        { id: 'costs', label: 'Costs' },
        { id: 'questions', label: 'Questions to ask' },
        { id: 'hybrid', label: 'The hybrid model' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">Should you hire an AEO agency or buy an AEO platform?</h2>
<p><strong>Buy a platform if you have people to do the work; hire an agency if you need the work done and can afford retainers; choose a hybrid if you need both on a small budget.</strong> An AEO agency (also called a GEO agency) sells strategy and execution hours: content, digital PR, community work, and technical fixes. An AEO platform sells software: prompt tracking, share of voice, and citation data, and increasingly AI agents that create content for your team to review and run.</p>
<p>The trap is buying only one half. A platform nobody on your team runs produces reports nobody acts on. An agency without measurement produces activity you cannot prove.</p>

<h2 id="what-agencies-do">What does an AEO agency actually do?</h2>
<ul>
<li>Audits how answer engines describe your brand and competitors.</li>
<li>Builds a prompt and content strategy.</li>
<li>Writes and rewrites answer pages, comparisons, and listicles.</li>
<li>Runs digital PR to get you onto the editorial pages AI cites.</li>
<li>Manages authentic participation on Reddit, forums, and YouTube.</li>
<li>Fixes schema, crawler access, and site structure.</li>
<li>Reports on visibility, usually using a third-party tracker.</li>
</ul>

<h2 id="what-platforms-do">What does an AEO platform do?</h2>
<ul>
<li>Runs your prompt set across answer engines on a schedule.</li>
<li>Reports mentions, position, sentiment, and share of voice.</li>
<li>Shows which URLs and domains get cited.</li>
<li>Some add prompt demand estimates, AI crawler analytics, and content creation. Profound's Agents research, write, and publish with an approval step; Scrunch AI sells content generation; AthenaHQ has a content optimization agent.</li>
</ul>
<p>Even platforms that can publish need someone on your team to set priorities, review the work, and build relationships off-site. See the <a href="/blog/ai-visibility-tools">AI visibility tools guide</a>.</p>

<h2 id="video">What does an AEO practitioner say about tools and teams?</h2>
<p>Ethan Smith, CEO of the growth agency Graphite, walked through AEO in depth on Lenny's Podcast. Two of his points go straight to the hire-vs-buy decision. On tools:</p>
${quote('My general suggestion is pick the one that, pick the cheapest one that does what you need. Just like keyword tracking, you can only, you know, there’s not a premium version of keyword tracking. You rank number three or you don’t.', 'Ethan Smith, Graphite', 'iT7kq-R3Gjc', 2135, '35:35', 'The ultimate guide to AEO (Lenny’s Podcast)')}
<p>On people:</p>
${quote('So, who’s your team? Probably your team is your SEO team or your SEO agency or your SEO consultant. Probably hopefully they can do this stuff. And then, however, what I think is hard to hire for is the off-site stuff.', 'Ethan Smith, Graphite', 'iT7kq-R3Gjc', 1981, '33:01', 'The ultimate guide to AEO (Lenny’s Podcast)')}
<p>He also argues that very expensive tools for what are essentially commodity tracking tasks are unusual in marketing. Note that Graphite is an agency that also builds answer tracking, so he sees both sides of this decision.</p>
${yt('iT7kq-R3Gjc', 'The ultimate guide to AEO: How to get ChatGPT to recommend your product | Ethan Smith (Graphite)')}

<h2 id="comparison">AEO agency vs AEO platform vs hybrid</h2>
<table><thead><tr><th></th><th>AEO agency</th><th>AEO platform</th><th>Hybrid (Dooza)</th></tr></thead><tbody>
<tr><td>Tracking</td><td>Via a third-party tool</td><td>Core product</td><td>Included</td></tr>
<tr><td>Strategy</td><td>Yes</td><td>Data only</td><td>Prompt set, citation map, prioritized backlog</td></tr>
<tr><td>Content production</td><td>Yes, by the hour</td><td>Varies: from none to agents that publish with approval (Profound), run by your team</td><td>Done for you: Ranky and Dooza engineers draft and publish with your approval</td></tr>
<tr><td>Off-site mentions</td><td>Yes, often the strongest part</td><td>Source data; some suggest outreach targets</td><td>Finds threads and targets; suggests replies for approval</td></tr>
<tr><td>Technical fixes</td><td>Yes</td><td>Recommendations</td><td>Schema, crawler access, <code>llms.txt</code></td></tr>
<tr><td>Typical cost</td><td>Monthly retainer</td><td>Subscription</td><td>Refundable pilot (see <a href="/pricing">/pricing</a>)</td></tr>
<tr><td>Speed to first change</td><td>Weeks (onboarding)</td><td>Days, if your team has time to act</td><td>Days</td></tr>
</tbody></table>

<h2 id="costs">How much do AEO agencies and platforms cost?</h2>
<ul>
<li><strong>AEO/GEO agency retainers</strong> vary widely by scope and region; get at least three quotes with deliverables listed per month.</li>
<li><strong>Platforms:</strong> from $29/mo (Otterly.ai Lite) to $95–$495/mo (Peec AI self-serve, billed monthly), up to custom enterprise contracts (Profound Enterprise; Profound's agency plan is $99/mo), all checked October 7, 2026 on the vendors' pricing pages.</li>
<li><strong>Hybrid:</strong> Dooza, starting with a refundable pilot (100% refund within 14 days).</li>
</ul>
<p>Compare cost per shipped deliverable, not cost per month: how many answer pages, fixes, and earned mentions do you get for the money?</p>

<h2 id="questions">What should you ask an AEO agency or platform before signing?</h2>
<ol>
<li>Which prompts will you track, and how were they chosen?</li>
<li>Which engines, and how often are prompts re-run?</li>
<li>What gets shipped each month? Name the deliverables.</li>
<li>How do you earn off-site mentions without fake accounts or paid spam?</li>
<li>How will you prove impact: prompt-level change, AI referral traffic, or leads?</li>
<li>Can we run a control group of prompts you do not touch?</li>
<li>What happens to our data and content if we leave?</li>
</ol>
<p>Be wary of anyone who guarantees rankings in ChatGPT. Answer engines change; the honest promise is a process and a measured trend.</p>

<h2 id="hybrid">What is the hybrid model?</h2>
${doozaPlatformSummary}
<p>The hybrid gives you the platform half (prompt tracking, citation map, reports) and the execution half (answer pages, schema, community targets), with approvals so nothing ships without you. Read more on our <a href="/generative-engine-optimization">generative engine optimization</a> page, or compare with enterprise platforms in <a href="/blog/profound-ai-alternative">the best Profound alternative</a>.</p>

<h2 id="get-started">Get the measurement and the work</h2>
<p><a href="/book">Book a free pilot call</a>. We will show your baseline and a 30-day plan, and every pilot is refundable within 14 days.</p>`,
    faqData: [
        { question: "What is an AEO agency?", answer: "An AEO agency is a marketing agency that improves how often AI answer engines mention and cite a brand, through content, digital PR, community work, technical fixes, and reporting." },
        { question: "What is the difference between an AEO agency and a GEO agency?", answer: "There is no practical difference. AEO (answer engine optimization) and GEO (generative engine optimization) describe the same work; agencies use whichever term their market searches for." },
        { question: "Do I need an AEO agency or a tool?", answer: "Buy a tool if you already have people to run it and act on the data; that is usually the cheaper, more flexible pick. Hire an agency if you need execution and can afford a retainer. A done-for-you option like Dooza combines tracking and execution for small businesses, starting with a refundable pilot." },
        { question: "How much does an AEO agency cost?", answer: "Retainers vary widely by scope. Compare quotes by deliverables per month, such as answer pages published, fixes shipped, and mentions earned, rather than by hours." },
        { question: "Can an AEO agency guarantee ChatGPT rankings?", answer: "No. AI answers vary and engines change often. A credible provider commits to a process, a fixed prompt set, and measured trends, not guaranteed placements." },
    ],
};

export const aiVisibilityPostsA = [
    profoundAlternativePost,
    profoundVsPeecPost,
    aiVisibilityToolsPost,
    answerEngineOptimizationPost,
    aeoAgencyPost,
];
