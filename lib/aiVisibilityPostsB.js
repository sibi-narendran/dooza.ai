// AI visibility / Profound-alternative campaign, part B (September 2026).

import { doozaPlatformSummary } from './aiVisibilityPostsA';

const yt = (id, title) => `<div class="not-prose my-8 aspect-video overflow-hidden rounded-2xl border border-slate-200 shadow-lg"><iframe class="h-full w-full" width="560" height="315" src="https://www.youtube.com/embed/${id}" title="${title}" frameborder="0" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;

const quote = (text, who, id, seconds, stamp, title) => `<figure><blockquote><p>${text}</p></blockquote><figcaption>— ${who}, <a href="https://www.youtube.com/watch?v=${id}&amp;t=${seconds}s" target="_blank" rel="noopener noreferrer">${title}</a> (at ${stamp})</figcaption></figure>`;

const aiOverviewsTrackingPost = {
    id: 214,
    title: 'AI Overviews Tracking: How to Track Your Brand in Google AI Overviews and AI Mode (2026)',
    seoTitle: 'AI Overviews Tracking: Track Google AI Overviews (2026)',
    seoDescription: 'How to track Google AI Overviews and AI Mode: what Search Console shows and does not, how to track mentions and citations by prompt, which metrics matter, and tools that help.',
    excerpt: 'Google counts AI Overviews and AI Mode traffic inside normal Search Console data, so you cannot see AI visibility there directly. Here is how to track AI Overviews properly, by prompt and by citation.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-09-29',
    readTime: '10 min read',
    readTimeMinutes: 10,
    category: 'Guides',
    tags: ['AI Overviews', 'Google AI Mode', 'AI Overviews Tracking', 'AI Search Tracking', 'AI Visibility', 'SEO'],
    image: '/blog/ai-overviews-tracking.png',
    imageAlt: 'Watercolor illustration of a search results page with an AI summary panel, map pins marking brand mentions, and a line chart tracking them over time',
    slug: 'ai-overviews-tracking',
    video: {
        name: 'How Ranking in Google AI Overviews, ChatGPT, and Perplexity are Different | 1.2 AEO Course by Ahrefs',
        description: 'Ahrefs’ Sam Oh compares the sources cited by Google AI Overviews, Google AI Mode, ChatGPT, and Perplexity, and explains why each needs its own tracking.',
        thumbnailUrl: 'https://i.ytimg.com/vi/LXdtraYM1dg/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/LXdtraYM1dg',
        uploadDate: '2026-04-29',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'search-console', label: 'What Search Console shows' },
        { id: 'video', label: 'Why AIO needs its own tracking' },
        { id: 'metrics', label: 'Metrics to track' },
        { id: 'how-to', label: 'Step-by-step setup' },
        { id: 'ai-mode', label: 'AI Mode vs AI Overviews' },
        { id: 'improve', label: 'How to improve' },
        { id: 'dooza', label: 'Tracking with Dooza' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">How do you track Google AI Overviews?</h2>
<p><strong>You track AI Overviews by running a fixed set of queries on a schedule and recording whether an AI Overview appears, whether your brand is named, and which URLs are cited.</strong> Google Search Console alone cannot do this: Google says traffic from AI features such as AI Overviews and AI Mode is included in overall Search Console traffic, not broken out as its own report.</p>
<p>A good setup combines three things: prompt-level tracking for AI Overviews and AI Mode, Search Console trends for the pages that get cited, and analytics for the traffic that follows.</p>
<ul>
<li>Track 30–100 queries close to revenue, not your whole keyword list.</li>
<li>Record appearance, mention, citation, and position for each query.</li>
<li>Track AI Mode separately; it cites different sources.</li>
</ul>

<h2 id="search-console">What does Search Console show about AI Overviews?</h2>
<p>According to <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google's AI features documentation</a>, sites that appear in AI features "are included in the overall search traffic in Search Console." Google also says a page only needs to be indexed and eligible for a snippet to appear, and that no special optimization or markup is required.</p>
<table><thead><tr><th>Question</th><th>Search Console</th><th>Prompt-level tracking</th></tr></thead><tbody>
<tr><td>Did an AI Overview appear for this query?</td><td>No</td><td>Yes</td></tr>
<tr><td>Was my brand named in it?</td><td>No</td><td>Yes</td></tr>
<tr><td>Which URLs were cited?</td><td>No</td><td>Yes</td></tr>
<tr><td>Which competitors were named?</td><td>No</td><td>Yes</td></tr>
<tr><td>Impressions and clicks to my pages</td><td>Yes (blended with regular results)</td><td>No</td></tr>
</tbody></table>
<p>Use Search Console for traffic trends and a tracking tool for AI Overview presence. Neither replaces the other.</p>

<h2 id="video">Why do AI Overviews need their own tracking?</h2>
<p>Because every AI surface cites a different slice of the web. Ahrefs' Sam Oh summarizes their research:</p>
${quote('So, the takeaway here is clear. AI search is not one thing. Each platform has its own index, its own biases, and its own preferences for what kind of sources it likes to cite.', 'Sam Oh, Ahrefs', 'LXdtraYM1dg', 180, '3:00', 'How Ranking in Google AI Overviews, ChatGPT, and Perplexity are Different')}
<p>Key findings from the lesson, all from Ahrefs' studies:</p>
<ul>
<li>Only 7 of the top 50 cited domains appeared across all three of Google AI Overviews, ChatGPT, and Perplexity.</li>
<li>YouTube accounts for about 5.6% of AI Overview citations.</li>
<li>AI Overviews and AI Mode share only 13.7% of citations even though their answers are 86% semantically similar.</li>
<li>The share of AI Overview citations coming from Google's top 10 has fallen from 76% to closer to 38% in a more recent study.</li>
</ul>
${yt('LXdtraYM1dg', 'How Ranking in Google AI Overviews, ChatGPT, and Perplexity are Different | 1.2 AEO Course by Ahrefs')}

<h2 id="metrics">Which AI Overview metrics should you track?</h2>
<table><thead><tr><th>Metric</th><th>Definition</th></tr></thead><tbody>
<tr><td>AIO trigger rate</td><td>% of your tracked queries that show an AI Overview</td></tr>
<tr><td>Brand mention rate</td><td>% of AI Overviews that name your brand</td></tr>
<tr><td>Citation rate</td><td>% of AI Overviews that link to your domain</td></tr>
<tr><td>Cited URL</td><td>Which of your pages is cited (often not the one you expect)</td></tr>
<tr><td>Competitor share of voice</td><td>How often each competitor is named or cited</td></tr>
<tr><td>Source mix</td><td>Share of citations from YouTube, Reddit, editorial, and brand sites</td></tr>
<tr><td>Click impact</td><td>Search Console clicks and CTR trends for cited pages</td></tr>
</tbody></table>

<h2 id="how-to">How do you set up AI Overviews tracking, step by step?</h2>
<ol>
<li><strong>Pick queries.</strong> Question and comparison queries near revenue. AI Overviews appear most often on informational and question queries.</li>
<li><strong>Set location and device.</strong> AI Overviews vary by country and device; fix both.</li>
<li><strong>Baseline.</strong> Record appearance, mention, citations, and competitors for each query.</li>
<li><strong>Add AI Mode.</strong> Track the same queries in AI Mode as a separate surface.</li>
<li><strong>Tag pages.</strong> Note which of your URLs are cited and annotate them in Search Console.</li>
<li><strong>Re-run weekly or biweekly</strong> and chart trends. One snapshot is noise.</li>
<li><strong>Connect traffic.</strong> Watch clicks and conversions on cited pages.</li>
</ol>

<h2 id="ai-mode">How is AI Mode different from AI Overviews?</h2>
<p>AI Overviews sit on top of a normal results page. AI Mode is a conversational search experience with follow-up questions. Ahrefs found AI Mode's most cited domain is YouTube by a wide margin, and that it cites Quora and social platforms more often than AI Overviews. Track both, and plan video and community content if AI Mode matters in your category.</p>

<h2 id="improve">How do you get into more AI Overviews?</h2>
<ul>
<li>Answer the query in the first paragraph, in plain declarative sentences.</li>
<li>Use tables, steps, and FAQs that can be lifted as passages.</li>
<li>Keep key pages fresh and dated.</li>
<li>Publish YouTube videos on your highest-value topics; YouTube is heavily cited.</li>
<li>Earn mentions in the Reddit threads and editorial pages already cited.</li>
<li>Keep technical SEO clean: indexable, snippet-eligible, fast.</li>
</ul>
<p>More in <a href="/blog/ai-citations">how AI citations work</a> and <a href="/blog/answer-engine-optimization">answer engine optimization</a>.</p>

<h2 id="dooza">How does Dooza track AI Overviews?</h2>
${doozaPlatformSummary}
<p>For Google specifically, Dooza tracks AI Overviews and AI Mode presence for your prompt set, lists the URLs cited for each query, and pairs them with Search Console trends for the pages involved. When a competitor's page is cited and yours is not, Ranky drafts the better answer page for your approval. See how this compares to enterprise tools in <a href="/blog/profound-ai-alternative">Profound alternatives</a>.</p>

<h2 id="get-started">See your AI Overviews baseline</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot that baselines your AI Overviews and AI Mode visibility for your top queries.</p>`,
    faqData: [
        { question: "Can you track AI Overviews in Google Search Console?", answer: "Not directly. Google includes traffic from AI features such as AI Overviews and AI Mode in overall Search Console traffic, so you need prompt-level tracking to see appearance, mentions, and citations." },
        { question: "How do I know if my site is cited in AI Overviews?", answer: "Run your target queries on a schedule, with fixed location and device, and record the cited URLs in each AI Overview. AI visibility tools automate this." },
        { question: "Do I need special markup to appear in AI Overviews?", answer: "No. Google says a page must be indexed and eligible to show with a snippet, and that no special optimizations or markup are required. Clear, answer-first content helps you get selected." },
        { question: "Are AI Mode and AI Overviews the same?", answer: "No. AI Mode is a conversational search experience. Ahrefs found AI Overviews and AI Mode share only 13.7% of citations, so track them separately." },
        { question: "How often should I track AI Overviews?", answer: "Weekly or biweekly on a fixed query set. AI Overviews change frequently, so trends over several runs are more reliable than a single snapshot." },
    ],
};

const aiCitationsPost = {
    id: 215,
    title: 'AI Citations: How ChatGPT, Perplexity, and Google AI Choose Sources (and How to Get Cited)',
    seoTitle: 'AI Citations: How AI Chooses Sources + How to Get Cited',
    seoDescription: 'How AI citations work in ChatGPT, Perplexity, and Google AI Overviews: query fan-out, what gets cited, citation vs mention, and a practical plan to get your pages cited.',
    excerpt: 'An AI citation is a link an answer engine shows as a source. Here is how engines pick those sources, which content types get cited most, and a practical plan to earn citations for your brand.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '11 min read',
    readTimeMinutes: 11,
    category: 'Guides',
    tags: ['AI Citations', 'ChatGPT Citations', 'Perplexity', 'AI Overviews', 'AEO', 'AI Visibility'],
    image: '/blog/ai-citations.png',
    imageAlt: 'Watercolor illustration of a chat bubble with numbered footnote markers connected by threads to a stack of source web pages',
    slug: 'ai-citations',
    video: {
        name: 'Learn 80% of AEO in 19 Minutes',
        description: 'Ahrefs condenses its AEO course: query fan-out, what AI cites, freshness, brand mentions, YouTube, technical access, and measurement.',
        thumbnailUrl: 'https://i.ytimg.com/vi/58MR03s0ev8/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/58MR03s0ev8',
        uploadDate: '2026-07-29',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'citation-vs-mention', label: 'Citation vs mention' },
        { id: 'how-it-works', label: 'How engines pick sources' },
        { id: 'video', label: 'What the data says' },
        { id: 'what-gets-cited', label: 'What gets cited' },
        { id: 'by-engine', label: 'By engine' },
        { id: 'plan', label: '30-day citation plan' },
        { id: 'dooza', label: 'Citation maps in Dooza' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">What is an AI citation?</h2>
<p><strong>An AI citation is a source link that an answer engine attaches to its response.</strong> When ChatGPT search, Perplexity, Gemini, Copilot, or Google AI Overviews answer a question, they show the URLs they relied on. Being cited sends referral traffic and signals that your page is a trusted source for that topic.</p>
<p>Engines choose citations by splitting a prompt into many sub-searches, retrieving pages, and selecting passages that answer directly, name specific entities, are fresh, and agree with other sources. You earn more citations by publishing answer-first pages, especially comparisons and lists, and by being mentioned on the third-party pages engines already trust.</p>

<h2 id="citation-vs-mention">What is the difference between a citation and a mention?</h2>
<table><thead><tr><th></th><th>Mention</th><th>Citation</th></tr></thead><tbody>
<tr><td>What it is</td><td>Your brand named in the answer text</td><td>Your URL shown as a source</td></tr>
<tr><td>Main value</td><td>Recommendation and consideration</td><td>Traffic and authority</td></tr>
<tr><td>Can happen without the other?</td><td>Yes, via third-party sources</td><td>Yes, e.g. a cited guide that does not name you</td></tr>
<tr><td>Best case</td><td colspan="2">Named in the answer <em>and</em> cited as a source</td></tr>
</tbody></table>

<h2 id="how-it-works">How do answer engines pick which sources to cite?</h2>
<ol>
<li><strong>Fan-out:</strong> the prompt becomes many narrower searches.</li>
<li><strong>Retrieval:</strong> the engine pulls candidate pages from its search index or partner (for ChatGPT search, practitioners widely report Bing's index plays a large role, though OpenAI does not name a partner in its bot docs; Google's index for AI Overviews).</li>
<li><strong>Passage selection:</strong> self-contained passages that directly answer a sub-question win.</li>
<li><strong>Consensus:</strong> claims repeated across several sources are preferred.</li>
<li><strong>Attribution:</strong> the engine lists the pages whose passages it used.</li>
</ol>

<h2 id="video">What does the data say about what gets cited?</h2>
<p>Ahrefs' condensed AEO course is one of the most data-dense explanations of AI citations. It starts with fan-out:</p>
${quote('When you ask an AI assistant a question, that one prompt gets fanned out into dozens of smaller, more specific searches behind the scenes.', 'Ahrefs', '58MR03s0ev8', 49, '0:49', 'Learn 80% of AEO in 19 Minutes')}
${quote('In a study of 75,000 brands, branded web mentions have the strongest correlation with visibility in AI overviews. That’s stronger than backlinks, domain rating, referring domains, or anything else that we studied.', 'Ahrefs', '58MR03s0ev8', 580, '9:40', 'Learn 80% of AEO in 19 Minutes')}
<p>Other findings from the same video, all from Ahrefs' studies:</p>
<ul>
<li>Content AI cites is on average 25.7% fresher than content ranking in Google.</li>
<li>43.8% of pages ChatGPT cites are lists, "best X", "top X", comparisons, and reviews.</li>
<li>Among 174,000 pages cited in AI Overviews, word count had basically zero correlation with being cited.</li>
<li>YouTube is the most-cited domain in AI Overviews.</li>
</ul>
<p>These are correlations, not proof of cause, but they line up with what Profound's own team reports: in their dataset, listicles and comparisons were 32.9% of all citations.</p>
${yt('58MR03s0ev8', 'Learn 80% of AEO in 19 Minutes')}

<h2 id="what-gets-cited">Which content types get cited most?</h2>
<table><thead><tr><th>Content type</th><th>Why engines cite it</th><th>Example</th></tr></thead><tbody>
<tr><td>Comparisons and listicles</td><td>Answer "best", "vs", and "alternatives" prompts directly</td><td>"Profound vs Peec AI"</td></tr>
<tr><td>Definitions and guides</td><td>Clear definitions for "what is" prompts</td><td>"What is AEO?"</td></tr>
<tr><td>Pricing pages</td><td>Concrete numbers for cost questions</td><td>"How much does X cost?"</td></tr>
<tr><td>Original data</td><td>Unique facts others repeat</td><td>Benchmarks, surveys</td></tr>
<tr><td>Community threads</td><td>First-hand experience</td><td>Reddit discussions</td></tr>
<tr><td>Videos</td><td>Heavily cited by Google surfaces</td><td>YouTube explainers</td></tr>
</tbody></table>

<h2 id="by-engine">Does each AI engine cite differently?</h2>
<ul>
<li><strong>ChatGPT:</strong> leans toward high-authority publishers and editorial sites; practitioners report that being indexed in Bing helps with search retrieval.</li>
<li><strong>Perplexity:</strong> the most aligned with Google's top results; cites many sources per answer.</li>
<li><strong>Google AI Overviews:</strong> authoritative sites, YouTube, and Reddit; increasingly beyond the top 10.</li>
<li><strong>Google AI Mode:</strong> YouTube first, more Quora and social platforms.</li>
</ul>
<p>Track by engine, as covered in <a href="/blog/ai-overviews-tracking">AI Overviews tracking</a>.</p>

<h2 id="plan">A 30-day plan to earn more AI citations</h2>
<ol>
<li><strong>Days 1–3:</strong> choose 30–50 prompts; record which URLs each engine cites today.</li>
<li><strong>Days 4–7:</strong> make sure OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot, and Googlebot can crawl you. See <a href="/blog/gptbot-claudebot-ai-crawlers">AI crawlers explained</a>.</li>
<li><strong>Days 8–15:</strong> rewrite your top five pages answer-first, with a table and FAQ each.</li>
<li><strong>Days 16–23:</strong> publish two comparison or alternatives pages for prompts where competitors are cited and you are not.</li>
<li><strong>Days 24–28:</strong> contact the authors of cited listicles; join cited Reddit threads honestly.</li>
<li><strong>Days 29–30:</strong> re-run the prompts and compare.</li>
</ol>

<h2 id="dooza">How does Dooza map and win AI citations?</h2>
${doozaPlatformSummary}
<p>Dooza's citation map groups every cited URL for your prompts into owned, competitor, editorial, and community sources. Owned gaps become Ranky's content backlog. Editorial and community gaps become an outreach list. Then the same prompts are re-run to show what moved. Compare with <a href="/blog/ai-visibility-tools">other AI visibility tools</a>.</p>

<h2 id="get-started">Find out who gets cited instead of you</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot that maps citations for your top prompts.</p>`,
    faqData: [
        { question: "What is an AI citation?", answer: "An AI citation is a source link an answer engine such as ChatGPT, Perplexity, or Google AI Overviews shows alongside its answer, indicating the pages it relied on." },
        { question: "How does ChatGPT decide what to cite?", answer: "ChatGPT search breaks a prompt into sub-searches, retrieves pages (practitioners report Bing's index plays a large role, though OpenAI does not name a search partner), and cites the pages whose passages it used, favoring clear, fresh, authoritative content that agrees with other sources." },
        { question: "What type of content gets cited most by AI?", answer: "Lists, comparisons, and reviews are the most-cited formats in several studies. Ahrefs found 43.8% of pages ChatGPT cites are lists, best-of pages, comparisons, and reviews." },
        { question: "Do backlinks help AI citations?", answer: "They help indirectly, but Ahrefs found branded web mentions correlate more strongly with AI Overview visibility than backlinks or domain rating." },
        { question: "How do I get cited by Perplexity?", answer: "Rank well in traditional search, answer questions directly, keep pages fresh, and make sure PerplexityBot can crawl your site. Perplexity's citations overlap most with Google's top results." },
    ],
};

const aiCrawlersPost = {
    id: 216,
    title: 'GPTBot, ClaudeBot, and AI Crawlers Explained: What to Allow, What to Block, and How to Track Them',
    seoTitle: 'GPTBot vs ClaudeBot: AI Crawlers Explained (2026)',
    seoDescription: 'What GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, and PerplexityBot do, which to allow for AI visibility, a robots.txt template, and how to track AI bot traffic.',
    excerpt: 'Blocking the wrong AI crawler can remove you from ChatGPT and Claude search answers. Here is what each bot does, a safe robots.txt, and how to see which AI agents actually visit your site.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-09-29',
    readTime: '10 min read',
    readTimeMinutes: 10,
    category: 'Guides',
    tags: ['ClaudeBot', 'GPTBot', 'AI Crawlers', 'robots.txt', 'Agent Analytics', 'AI Visibility'],
    image: '/blog/gptbot-claudebot-ai-crawlers.png',
    imageAlt: 'Watercolor illustration of small robot crawlers walking along a website sitemap drawn like a subway map, next to a robots.txt signpost',
    slug: 'gptbot-claudebot-ai-crawlers',
    video: {
        name: 'AI Bots Are Crawling Your Site - What Does It Actually Mean? (Agent Analytics Use Cases)',
        description: 'OtterlyAI walks through agent analytics: which AI bots crawl a site, which pages they visit, and how crawl data compares with citation data.',
        thumbnailUrl: 'https://i.ytimg.com/vi/Tp8Q27KHRz4/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/Tp8Q27KHRz4',
        uploadDate: '2026-08-11',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'bot-table', label: 'Every AI bot explained' },
        { id: 'allow-block', label: 'What to allow or block' },
        { id: 'robots', label: 'robots.txt template' },
        { id: 'video', label: 'Tracking AI bot visits' },
        { id: 'track', label: 'How to track AI crawlers' },
        { id: 'mistakes', label: 'Common mistakes' },
        { id: 'dooza', label: 'Crawler checks in Dooza' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">What are GPTBot and ClaudeBot?</h2>
<p><strong>GPTBot is OpenAI's crawler for collecting content that may be used to train its models; ClaudeBot is Anthropic's equivalent.</strong> Neither is the bot that puts you in search answers. For that, ChatGPT uses <strong>OAI-SearchBot</strong> and Claude uses <strong>Claude-SearchBot</strong>. User-triggered fetches come from <strong>ChatGPT-User</strong> and <strong>Claude-User</strong>.</p>
<p>That split matters: you can block training crawlers and still stay visible in AI search, but blocking the search bots can remove you from answers.</p>

<h2 id="bot-table">What does each AI crawler do?</h2>
<table><thead><tr><th>User agent</th><th>Company</th><th>Purpose</th><th>Block it and…</th></tr></thead><tbody>
<tr><td>GPTBot</td><td>OpenAI</td><td>Crawls content that may be used to train models</td><td>Your content should not be used in training</td></tr>
<tr><td>OAI-SearchBot</td><td>OpenAI</td><td>Surfaces websites in ChatGPT search</td><td>You can drop out of ChatGPT search answers</td></tr>
<tr><td>ChatGPT-User</td><td>OpenAI</td><td>Visits pages when a user's action asks for it</td><td>robots.txt rules may not apply (user-initiated)</td></tr>
<tr><td>ClaudeBot</td><td>Anthropic</td><td>Collects content that may contribute to training</td><td>Future content excluded from training</td></tr>
<tr><td>Claude-SearchBot</td><td>Anthropic</td><td>Improves search result quality for Claude users</td><td>Less visibility and accuracy in Claude search</td></tr>
<tr><td>Claude-User</td><td>Anthropic</td><td>Fetches pages when a Claude user asks</td><td>Claude cannot retrieve your page for users</td></tr>
<tr><td>PerplexityBot</td><td>Perplexity</td><td>Indexes sites for Perplexity answers</td><td>Less visibility in Perplexity</td></tr>
<tr><td>Google-Extended</td><td>Google</td><td>Controls use in Gemini models (not a separate crawler)</td><td>Does not remove you from AI Overviews</td></tr>
</tbody></table>
<p>Sources: <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI's crawler documentation</a> and <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">Anthropic's crawler documentation</a>. AI Overviews use normal Googlebot crawling; see <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google's AI features guide</a>.</p>

<h2 id="allow-block">Which AI crawlers should you allow?</h2>
<ul>
<li><strong>Want AI visibility (most businesses):</strong> allow OAI-SearchBot, Claude-SearchBot, PerplexityBot, Googlebot, and Bingbot. User agents (ChatGPT-User, Claude-User) should also be allowed.</li>
<li><strong>Want visibility but not training:</strong> allow the search bots, disallow GPTBot and ClaudeBot. This is a legitimate middle ground.</li>
<li><strong>Publishers protecting content:</strong> decide per bot; blocking everything trades away AI referral traffic.</li>
</ul>
<p>Also check your CDN. Some Cloudflare and firewall settings now block AI bots by default, regardless of what robots.txt says.</p>

<h2 id="robots">What is a safe robots.txt for AI visibility?</h2>
<pre><code>User-agent: OAI-SearchBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: Claude-SearchBot
Allow: /

User-agent: Claude-User
Allow: /

User-agent: PerplexityBot
Allow: /

# Optional: opt out of model training
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: *
Allow: /
Sitemap: https://www.example.com/sitemap.xml</code></pre>
<p>Remove the two training blocks if you are happy for your public content to inform future models; many brands allow them to improve how models describe them.</p>

<h2 id="video">How do you see which AI bots visit your site?</h2>
<p>Agent analytics tools read your server or CDN logs and label AI bot visits. Thomas from OtterlyAI explains why that data is useful next to citation tracking:</p>
${quote('Not every agent is the same. We have different on-demand AI fetchers. There are agents crawling the internet basically to build up the search index. And we also have agents from the different models that are basically crawling content for the training of the different LLM models.', 'Thomas, OtterlyAI', 'Tp8Q27KHRz4', 55, '0:55', 'AI Bots Are Crawling Your Site - What Does It Actually Mean?')}
${quote('An agent is crawling my content, is coming to my home page in this case, is crawling that particular page and then is deciding if it’s citation worthy content.', 'Thomas, OtterlyAI', 'Tp8Q27KHRz4', 269, '4:29', 'AI Bots Are Crawling Your Site - What Does It Actually Mean?')}
<p>His practical point: compare crawl data with citation data. A page crawled often but rarely cited may need clearer, citable passages. A page cited often from few crawls is working and worth expanding.</p>
${yt('Tp8Q27KHRz4', 'AI Bots Are Crawling Your Site - What Does It Actually Mean? (Agent Analytics Use Cases)')}

<h2 id="track">How do you track AI crawler traffic?</h2>
<ol>
<li><strong>Server or CDN logs:</strong> filter user agents for GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, Claude-User, and PerplexityBot.</li>
<li><strong>Verify IPs:</strong> OpenAI and others publish IP ranges; spoofed user agents are common.</li>
<li><strong>Hosting dashboards:</strong> Cloudflare, Vercel, and others show bot traffic and AI crawler controls.</li>
<li><strong>Analytics for humans:</strong> track referrals from chatgpt.com, perplexity.ai, claude.ai, gemini.google.com, and copilot.microsoft.com separately.</li>
<li><strong>Compare with citations:</strong> map crawled pages to cited pages from your prompt tracking.</li>
</ol>

<h2 id="mistakes">What are the most common AI crawler mistakes?</h2>
<ul>
<li>Blocking GPTBot and thinking you are out of ChatGPT search. You are not; OAI-SearchBot controls that.</li>
<li>Blocking OAI-SearchBot or Claude-SearchBot by accident with a broad <code>User-agent: *</code> disallow.</li>
<li>A CDN bot-fight mode silently blocking AI crawlers.</li>
<li>Key content rendered only by JavaScript, so bots see an empty page.</li>
<li>No sitemap reference, so new pages are discovered slowly.</li>
</ul>

<h2 id="dooza">How does Dooza check AI crawler access?</h2>
${doozaPlatformSummary}
<p>Every Dooza setup starts with a crawler check: robots.txt rules per AI bot, CDN blocking, raw-HTML rendering of key pages, sitemaps, and an <code>llms.txt</code> file. Fixes ship before any content work, because a page bots cannot read cannot be cited. Next, see <a href="/blog/ai-citations">how AI citations work</a> and <a href="/blog/llm-seo">LLM SEO</a>.</p>

<h2 id="get-started">Check your AI crawler access</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot: we check which AI bots can reach your site and fix what is blocked.</p>`,
    faqData: [
        { question: "What is ClaudeBot?", answer: "ClaudeBot is Anthropic's web crawler that collects content that may contribute to training Claude models. Blocking it signals your content should be excluded from training; it is separate from Claude-SearchBot, which supports Claude's search results." },
        { question: "What is GPTBot?", answer: "GPTBot is OpenAI's crawler for content that may be used to train its generative AI models. Disallowing it opts your content out of training but does not remove you from ChatGPT search, which uses OAI-SearchBot." },
        { question: "Should I block GPTBot?", answer: "Only if you do not want your content used for model training. Blocking GPTBot does not affect ChatGPT search visibility as long as OAI-SearchBot is allowed." },
        { question: "Which AI bots should I allow for AI visibility?", answer: "Allow OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Googlebot, and Bingbot. These power AI search answers and user-requested page fetches." },
        { question: "Does blocking Google-Extended remove me from AI Overviews?", answer: "No. Google-Extended controls use of content for Gemini models. AI Overviews rely on normal Googlebot crawling and indexing." },
        { question: "How can I see AI bot traffic?", answer: "Filter server or CDN logs by AI user agents, verify IP ranges, use hosting dashboards like Cloudflare or Vercel, or use an agent analytics tool, and compare crawled pages with cited pages." },
    ],
};

const chatgptShoppingPost = {
    id: 217,
    title: 'ChatGPT Shopping: How Products Get Recommended and How to Get Yours In (2026)',
    seoTitle: 'ChatGPT Shopping: How to Get Your Products Recommended',
    seoDescription: 'How ChatGPT Shopping picks products and merchants, the role of product feeds and Google Shopping, what to fix first, and how to track product recommendation visibility.',
    excerpt: 'ChatGPT now shows product cards and merchants for shopping questions. Here is how products get selected, why your product data matters more than ads, and how to track whether ChatGPT recommends you.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '10 min read',
    readTimeMinutes: 10,
    category: 'Guides',
    tags: ['ChatGPT Shopping', 'AI Shopping', 'Ecommerce SEO', 'Product Feeds', 'AI Visibility', 'Agentic Commerce'],
    image: '/blog/chatgpt-shopping.png',
    imageAlt: 'Watercolor illustration of product cards, a shopping bag, and a price tag emerging from an AI chat bubble on a phone',
    slug: 'chatgpt-shopping',
    video: {
        name: 'Optimising for AI shopping visibility & How ChatGPT finds your products',
        description: 'Re:signal discusses how ChatGPT and Google AI Mode surface products, the role of Google Shopping and product feeds, product data enrichment, and how to track AI shopping visibility.',
        thumbnailUrl: 'https://i.ytimg.com/vi/6IjVCoIOX2U/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/6IjVCoIOX2U',
        uploadDate: '2026-09-04',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'how-it-works', label: 'How it works' },
        { id: 'video', label: 'How ChatGPT finds products' },
        { id: 'fix-first', label: 'What to fix first' },
        { id: 'checklist', label: 'Product page checklist' },
        { id: 'track', label: 'Tracking recommendations' },
        { id: 'dooza', label: 'Dooza for ecommerce' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">How does ChatGPT Shopping choose products?</h2>
<p><strong>ChatGPT Shopping shows product cards when a question has shopping intent, and it picks products from web search results and merchant product data, not from paid placement.</strong> OpenAI's help center states that product results are selected independently and are not ads. Merchants can also submit product feeds and support checkout through OpenAI's Agentic Commerce Protocol.</p>
<p>In practice, the brands that get recommended have clean, detailed product data in the places ChatGPT looks: their product pages, structured data, Google Shopping listings, and the reviews and editorial roundups that search results return.</p>

<h2 id="how-it-works">How does ChatGPT Shopping work?</h2>
<ol>
<li>A user asks a shopping question, like "best waterproof hiking boots under $200".</li>
<li>ChatGPT expands it into several searches and adds attributes (waterproof, wide fit, lightweight).</li>
<li>It retrieves products, prices, and reviews from the web and merchant data.</li>
<li>It shows product cards with merchants, and may explain trade-offs.</li>
<li>Where supported, the user can buy through Instant Checkout.</li>
</ol>
<p>According to <a href="https://developers.openai.com/commerce/guides/key-concepts" target="_blank" rel="noopener noreferrer">OpenAI's commerce documentation</a>, merchants can provide a regularly refreshed product feed with identifiers, descriptions, pricing, inventory, media, and fulfillment details, and "rich media, reviews, and performance signals" improve ranking and relevance. See also <a href="https://help.openai.com/en/articles/11128490-shopping-with-chatgpt-search" target="_blank" rel="noopener noreferrer">Shopping with ChatGPT search</a>.</p>

<h2 id="video">How does ChatGPT actually find your products?</h2>
<p>Re:signal's Cal has studied this closely. His most practical point is about where product data lives:</p>
${quote('When we talk about product data enrichment, it’s about getting those attributes that ChatGPT is looking for into the areas where it’s looking for it, not into just your PIM and then it’s never used or just your CMS and it’s never used.', 'Cal, Re:signal', '6IjVCoIOX2U', 849, '14:09', 'Optimising for AI shopping visibility &amp; How ChatGPT finds your products')}
${quote('Yeah, in a way that product feeds matter, but your product feed in Google matters more than one that you would submit directly to ChatGPT at the moment.', 'Cal, Re:signal', '6IjVCoIOX2U', 488, '8:08', 'Optimising for AI shopping visibility &amp; How ChatGPT finds your products')}
<p>He reports seeing ChatGPT send requests to Google Shopping in his own tests, and describes a pattern where the top merchant in Google's shopping results tends to become the recommended seller in ChatGPT. He is clear that this is his own inference from testing, so treat it as a hypothesis to check in your category, not a rule. He also notes that about a third of product recommendations in the studies he cites also appeared in Reddit threads.</p>
${yt('6IjVCoIOX2U', 'Optimising for AI shopping visibility & How ChatGPT finds your products')}

<h2 id="fix-first">What should ecommerce brands fix first?</h2>
<ol>
<li><strong>Technical basics:</strong> product pages indexable, fast, and readable in raw HTML; OAI-SearchBot and Bingbot allowed.</li>
<li><strong>Product data at the source:</strong> clear product names, materials, sizes, use cases, and compatibility in your PIM or CMS, so every channel inherits them.</li>
<li><strong>Google Merchant Center:</strong> a complete, error-free feed; it influences more than Google.</li>
<li><strong>Structured data:</strong> Product, Offer, AggregateRating, and Review schema on every product page.</li>
<li><strong>Reviews:</strong> recent, detailed reviews on your site and on third-party platforms.</li>
<li><strong>Editorial and community:</strong> get into the "best X" roundups and Reddit threads for your category.</li>
<li><strong>OpenAI merchant feed and checkout:</strong> apply once the basics are solid. On Shopify, OpenAI says product data is already integrated into ChatGPT through Shopify Catalog, with no additional work required.</li>
</ol>

<h2 id="checklist">What does a ChatGPT-ready product page include?</h2>
<table><thead><tr><th>Element</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Descriptive product name</td><td>Matches attribute-rich searches ("men's waterproof trail runner, wide")</td></tr>
<tr><td>Attribute table</td><td>Materials, dimensions, weight, compatibility in plain text</td></tr>
<tr><td>"Best for" statement</td><td>Maps the product to use-case prompts</td></tr>
<tr><td>Price and stock in HTML and schema</td><td>Lets engines show accurate offers</td></tr>
<tr><td>Reviews with specifics</td><td>Social proof engines can quote</td></tr>
<tr><td>Short FAQ</td><td>Answers follow-up questions (sizing, returns, care)</td></tr>
<tr><td>Comparison content</td><td>"X vs Y" pages for top alternatives</td></tr>
</tbody></table>

<h2 id="track">How do you track ChatGPT Shopping visibility?</h2>
<ul>
<li><strong>Product recommendation prompts:</strong> 30–100 buying-intent prompts by category, price band, and use case.</li>
<li><strong>Recommendation rate:</strong> % of prompts where your product is shown or named.</li>
<li><strong>Merchant share:</strong> whether you, a retailer, or a marketplace is shown as the seller.</li>
<li><strong>Attribute gaps:</strong> which attributes ChatGPT adds to searches that your pages do not mention.</li>
<li><strong>AI referral revenue:</strong> sessions and orders from chatgpt.com in analytics.</li>
</ul>
<p>Profound sells a dedicated Shopping module for this, and Peec AI has a shopping report. For smaller catalogs, a prompt-level tracker is enough to start. See <a href="/blog/ai-visibility-tools">AI visibility tools</a>.</p>

<h2 id="dooza">How does Dooza help ecommerce brands show up in ChatGPT?</h2>
${doozaPlatformSummary}
<p>For stores on Shopify, WooCommerce, and custom platforms, Dooza tracks product-recommendation prompts, finds the attributes and comparisons missing from your pages, and has Ranky rewrite product copy, add schema, and publish "best for" and comparison pages for approval. More for store owners in <a href="/blog/ai-for-shopify-store">AI for Shopify stores</a>.</p>

<h2 id="get-started">See whether ChatGPT recommends your products</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot with a product-recommendation baseline for your top categories.</p>`,
    faqData: [
        { question: "Are ChatGPT Shopping results ads?", answer: "No. OpenAI states that product results in ChatGPT shopping are selected independently and are not ads." },
        { question: "How do I get my products into ChatGPT Shopping?", answer: "Make product pages crawlable and rich in attributes, add Product and Offer schema, keep a complete Google Merchant Center feed, earn reviews and roundup mentions, and apply to OpenAI's merchant program to submit a product feed. Shopify merchants' product data is already integrated through Shopify Catalog, according to OpenAI." },
        { question: "Does ChatGPT use Google Shopping data?", answer: "Practitioners such as Re:signal report seeing ChatGPT query Google Shopping in tests, and some studies link many ChatGPT product results to Google Shopping. OpenAI has not published its full selection method." },
        { question: "What is the Agentic Commerce Protocol?", answer: "It is OpenAI's specification that lets merchants provide product feeds and support purchases inside ChatGPT through Instant Checkout, with the merchant handling fulfillment and payment through its own systems." },
        { question: "How do I track if ChatGPT recommends my products?", answer: "Run a fixed set of product-recommendation prompts on a schedule and record whether your products appear, which merchant is shown, and which attributes ChatGPT searched for." },
    ],
};

const llmSeoPost = {
    id: 218,
    title: 'LLM SEO: How to Optimize Your Website for ChatGPT, Claude, Gemini, and Perplexity',
    seoTitle: 'LLM SEO: Optimize for ChatGPT, Claude & Gemini (2026)',
    seoDescription: 'LLM SEO explained: how large language models read pages, on-page techniques that get content cited, technical checks, myths to ignore, and how to measure LLM visibility.',
    excerpt: 'LLM SEO is optimizing your pages so large language models can read, trust, and cite them. Here are the on-page and technical changes that matter, the myths to skip, and how to measure results.',
    author: 'Dooza Team',
    date: '2026-09-29',
    modifiedDate: '2026-10-07',
    readTime: '11 min read',
    readTimeMinutes: 11,
    category: 'Guides',
    tags: ['LLM SEO', 'LLM Optimization', 'LLM Visibility', 'AEO', 'GEO', 'On-Page SEO'],
    image: '/blog/llm-seo.png',
    imageAlt: 'Watercolor illustration of a clean web page with headings, a table, and an FAQ list being read by a glowing neural network lattice',
    slug: 'llm-seo',
    video: {
        name: 'On-Page LLM SEO: Optimize for the Future of Search',
        description: 'Rank Math’s Jack walks through on-page LLM SEO: key takeaways, entity-rich writing, question headings, speakable schema, tables, and checking raw HTML.',
        thumbnailUrl: 'https://i.ytimg.com/vi/nfYlaX6b8E4/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/nfYlaX6b8E4',
        uploadDate: '2025-09-10',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'how-llms-read', label: 'How LLMs read pages' },
        { id: 'video', label: 'On-page LLM SEO' },
        { id: 'on-page', label: 'On-page checklist' },
        { id: 'technical', label: 'Technical checklist' },
        { id: 'off-page', label: 'Off-page signals' },
        { id: 'myths', label: 'Myths' },
        { id: 'measure', label: 'Measuring LLM visibility' },
        { id: 'dooza', label: 'LLM SEO with Dooza' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">What is LLM SEO?</h2>
<p><strong>LLM SEO is the practice of optimizing your website and brand so large language models such as ChatGPT, Claude, Gemini, and Perplexity can find, understand, trust, and cite your content.</strong> It is also called LLM optimization or LLMO, and it overlaps almost entirely with <a href="/blog/answer-engine-optimization">answer engine optimization</a>.</p>
<p>The core idea is simple: LLMs retrieve pages, pull out passages, and synthesize answers. Pages whose passages are self-contained, specific, and easy to lift get cited. Brands that many trusted sources describe consistently get recommended.</p>

<h2 id="how-llms-read">How do LLMs read web pages?</h2>
<ul>
<li><strong>In passages, not whole pages.</strong> Retrieval systems split pages into chunks and score each chunk against a sub-question.</li>
<li><strong>From raw HTML.</strong> Most AI crawlers do not run JavaScript like a browser; content hidden behind scripts can be invisible.</li>
<li><strong>Through entities.</strong> Named products, companies, places, and standards help the model connect a passage to the question.</li>
<li><strong>Across sources.</strong> Claims repeated by several credible sources are preferred over one-off claims.</li>
</ul>

<h2 id="video">What does on-page LLM SEO look like?</h2>
<p>Rank Math's Jack gives a practical, page-level walkthrough. Two points stand out:</p>
${quote('But for LLMs, they read text in chunks and can’t see the whole page at once, so you need to give context and mention key entities in your sentence and associate them with your key points.', 'Jack, Rank Math', 'nfYlaX6b8E4', 481, '8:01', 'On-Page LLM SEO: Optimize for the Future of Search')}
${quote('But if you cannot find the text here, then it is practically hidden from LLMs. That’s because LLMs do not render JavaScript like a browser. They rely on text that is accessible in the raw HTML.', 'Jack, Rank Math', 'nfYlaX6b8E4', 1068, '17:48', 'On-Page LLM SEO: Optimize for the Future of Search')}
<p>His other recommendations: open with key takeaways written as questions and answers, turn headings into questions followed by a direct 20–40 word answer, put statistics in standalone sentences, caption tables of original data, and publish transcripts for video and podcast content. Note the video also demonstrates Rank Math's own plugin features.</p>
${yt('nfYlaX6b8E4', 'On-Page LLM SEO: Optimize for the Future of Search')}

<h2 id="on-page">What is the on-page LLM SEO checklist?</h2>
<ol>
<li><strong>Answer first.</strong> A bolded 2–3 sentence answer in the first 100 words.</li>
<li><strong>Question headings.</strong> H2s phrased the way people ask, each opened with a one-sentence answer.</li>
<li><strong>Self-contained sections.</strong> Each section makes sense if lifted alone; repeat the subject instead of "it".</li>
<li><strong>Named entities.</strong> "Google AI Overviews, ChatGPT, and Perplexity", not "AI tools".</li>
<li><strong>Tables and lists</strong> for comparisons, specs, prices, and steps.</li>
<li><strong>Sourced numbers</strong> with links, in standalone sentences.</li>
<li><strong>Visible FAQ</strong> that matches your FAQPage schema.</li>
<li><strong>Dates.</strong> "Updated" dates and current facts; freshness is a citation signal.</li>
</ol>

<h2 id="technical">What is the technical LLM SEO checklist?</h2>
<table><thead><tr><th>Check</th><th>Pass condition</th></tr></thead><tbody>
<tr><td>AI search bots allowed</td><td>OAI-SearchBot, Claude-SearchBot, PerplexityBot, Bingbot, Googlebot not blocked (see <a href="/blog/gptbot-claudebot-ai-crawlers">AI crawlers</a>)</td></tr>
<tr><td>Raw HTML content</td><td>Main text visible in view-source, not only after JavaScript</td></tr>
<tr><td>Bing indexing</td><td>Key pages indexed in Bing Webmaster Tools (widely reported to help ChatGPT search; OpenAI does not name a search partner)</td></tr>
<tr><td>Schema</td><td>Organization, Article, Product, FAQPage, BreadcrumbList</td></tr>
<tr><td>Sitemaps</td><td>XML sitemap current and referenced in robots.txt</td></tr>
<tr><td><code>llms.txt</code></td><td>Optional curated map of key pages</td></tr>
<tr><td>Speed and status codes</td><td>Fast responses, no soft 404s on key pages</td></tr>
</tbody></table>

<h2 id="off-page">What off-page signals matter for LLM SEO?</h2>
<ul>
<li><strong>Brand mentions</strong> on editorial sites, listicles, and review platforms.</li>
<li><strong>Community presence</strong> in relevant Reddit threads and forums, as a real, disclosed participant.</li>
<li><strong>YouTube videos</strong> on core topics; Google's AI surfaces cite YouTube heavily.</li>
<li><strong>Consistent descriptions</strong> of what you do across your site, profiles, and directories.</li>
</ul>

<h2 id="myths">Which LLM SEO myths should you ignore?</h2>
<ul>
<li><strong>"You must rewrite everything."</strong> Start with the pages closest to revenue and the prompts you lose.</li>
<li><strong>"Schema guarantees citations."</strong> Schema helps structure and eligibility; evidence that it directly drives LLM citations is mostly correlational.</li>
<li><strong>"llms.txt is required."</strong> It is a cheap, optional helper; no major answer engine has said it uses it.</li>
<li><strong>"Longer is better."</strong> Ahrefs found word count had essentially no correlation with AI Overview citations.</li>
<li><strong>"Spam listicles work."</strong> Mass-produced self-ranking lists can spike briefly, but they risk trust and do not last.</li>
</ul>

<h2 id="measure">How do you measure LLM visibility?</h2>
<p>Track a fixed prompt set across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews: mention rate, citations, share of voice, position, and sentiment. Add AI referral traffic and "how did you hear about us" answers. Compare tools in <a href="/blog/ai-visibility-tools">AI visibility tools</a>, or read <a href="/blog/how-to-rank-in-chatgpt">how to rank in ChatGPT</a>.</p>

<h2 id="dooza">How does Dooza handle LLM SEO?</h2>
${doozaPlatformSummary}
<p>For LLM SEO, Dooza audits your key pages against the on-page and technical checklists above, has Ranky rewrite them answer-first with tables, entities, and FAQs, adds schema, and re-measures LLM visibility on your prompt set. It is the same loop enterprise platforms sell, priced for growing brands. See <a href="/blog/profound-ai-alternative">the Profound alternative guide</a> or our <a href="/generative-engine-optimization">GEO services</a>.</p>

<h2 id="get-started">Get your pages LLM-ready</h2>
<p><a href="/book">Book a free pilot call</a> to scope a refundable pilot: we audit your top pages for LLM SEO and fix the first three.</p>`,
    faqData: [
        { question: "What is LLM SEO?", answer: "LLM SEO is optimizing your website and brand so large language models like ChatGPT, Claude, Gemini, and Perplexity can find, understand, trust, and cite your content in their answers." },
        { question: "Is LLM SEO different from regular SEO?", answer: "It builds on regular SEO. LLM SEO adds answer-first, self-contained passages, entity-rich writing, raw-HTML content, AI crawler access, off-site brand mentions, and prompt-based measurement." },
        { question: "Do LLMs read JavaScript content?", answer: "Most AI crawlers rely on text available in the raw HTML and do not render JavaScript like a browser, so important content should be server-rendered." },
        { question: "Does schema markup help LLM SEO?", answer: "Schema helps search engines understand and display pages, and supports eligibility for rich results. Direct evidence that it increases LLM citations is mostly correlational, so treat it as a foundation, not a guarantee." },
        { question: "What is llms.txt?", answer: "llms.txt is an optional file that gives AI systems a curated map of a site's key pages. It is cheap to add, but no major answer engine has said it uses it." },
        { question: "How do I measure LLM visibility?", answer: "Re-run a fixed set of prompts across ChatGPT, Claude, Gemini, Perplexity, and Google AI Overviews and track mentions, citations, share of voice, position, and sentiment, plus AI referral traffic." },
    ],
};

export const aiVisibilityPostsB = [
    aiOverviewsTrackingPost,
    aiCitationsPost,
    aiCrawlersPost,
    chatgptShoppingPost,
    llmSeoPost,
];
