import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'Claude', handle: 'claudeai', id: '2104633115620823187', date: 'September 28, 2026' };

const SONNET = 'https://www.anthropic.com/claude-sonnet-5-5';
const WHATSNEW = 'https://platform.claude.com/docs/en/models/sonnet-5-5/whats-new-sonnet-5-5';
const PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing';
const MODELS = 'https://platform.claude.com/docs/en/about-claude/models/overview';

const post = {
    id: 401,
    title: 'Claude Sonnet 5.5: 30% Faster, Up to 30% Cheaper, and Close to Opus',
    seoTitle: 'Claude Sonnet 5.5: Speed, Cost, and Sonnet vs Opus 5.5',
    seoDescription: 'Claude Sonnet 5.5 runs 30%+ faster than Sonnet 5 and costs up to 30% less per task at the same price. Benchmarks, Sonnet vs Opus 5.5, and best uses.',
    excerpt: "Anthropic's Claude Sonnet 5.5 is the second model in the Claude 5.5 family. It keeps Sonnet 5's token prices, runs more than 30% faster, and Anthropic says it costs up to 30% less per task because it needs fewer tokens. Here is how it compares with Opus 5.5, where it fits best, and what it means for small businesses.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Claude Sonnet 5.5', 'Anthropic', 'Viral X Post', 'AI Models', 'AI Agents', 'Customer Support AI'],
    image: '/blog/claude-sonnet-5-5.png',
    imageAlt: 'Soft watercolor illustration of a sleek paper airplane gliding over a tidy desk with documents, a spreadsheet and a headset, with light motion lines suggesting speed',
    slug: 'claude-sonnet-5-5',
    tocData: [
        { id: 'what-happened', label: 'What Anthropic announced' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'speed-cost', label: 'Speed and cost claims' },
        { id: 'sonnet-vs-opus', label: 'Sonnet 5.5 vs Opus 5.5' },
        { id: 'use-cases', label: 'Best use cases' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'next-step', label: 'Next step' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What is Claude Sonnet 5.5?</h2>
<p>Claude Sonnet 5.5 is Anthropic's new mid-tier model, released on September 28, 2026, as the second model in the Claude 5.5 family, six days after <a href="/blog/claude-opus-5-5">Claude Opus 5.5</a>. Anthropic calls it ${src(SONNET, 'a clear upgrade over Claude Sonnet 5')} that runs more than 30% faster and costs up to 30% less for most work. It keeps Sonnet 5's token prices and is available on the Claude API as <code>claude-sonnet-5-5</code>, plus AWS, Google Cloud and Microsoft Foundry.</p>
<ul>
<li><strong>Faster:</strong> Anthropic says Sonnet 5.5 generates output 30%+ faster than Sonnet 5.</li>
<li><strong>Cheaper per task, same price per token:</strong> $2 input and $10 output per million tokens, unchanged, but it needs fewer tokens for the same work.</li>
<li><strong>Close to Opus on many tests:</strong> on Anthropic's knowledge-work and computer-use benchmarks it lands within a point or two of Opus 5.5 at half the token price.</li>
<li><strong>Built for everyday work:</strong> Anthropic says it is strongest at well-scoped tasks, fixing bugs, and polished documents, slides and spreadsheets.</li>
<li><strong>For small businesses:</strong> it is a strong default for high-volume agent work like support replies and lead follow-up, where speed and cost per task matter most.</li>
</ul>
${xPost({ text: 'Introducing Claude Sonnet 5.5, the second model in the Claude 5.5 family.<br><br>It’s a clear upgrade over Sonnet 5, runs more than 30% faster, and costs up to 30% less for most work.', ...X })}
${postCredit({ ...X, views: '12.6 million', likes: '56,000' })}

<h2 id="why-viral">Why did the Sonnet 5.5 announcement go viral?</h2>
<p>The post passed 12 million views in just over a week. A few reasons stand out.</p>
<p><strong>Faster and cheaper at once is rare.</strong> Most upgrades trade one for the other. Sonnet 5.5 claims both, without a price increase.</p>
<p><strong>The jump on agentic coding is unusually large.</strong> On Terminal-Bench 4.0, Anthropic reports ${src(SONNET, 'Sonnet 5.5 at 70.6%, up from 10.3% for Sonnet 5')}. That score is also above Opus 5.5's 66.4% on the same test, so a model at half the price edges out the flagship on one widely watched coding benchmark.</p>
<p><strong>It arrived right after Opus 5.5.</strong> Opus 5.5 had already reset expectations on cost. Sonnet 5.5 pushed the same story further down the lineup, and Anthropic says Claude Haiku 5.5 will follow ${src(SONNET, 'in the coming weeks')}. It is also, per Anthropic, the first Sonnet model to beat <em>Pokémon Red</em> working only from screenshots, the kind of detail that travels well on social media.</p>

<h2 id="speed-cost">How much faster and cheaper is Sonnet 5.5, really?</h2>
<p>The token prices did not change. According to Anthropic's ${src(PRICING, 'official pricing page')} as of October 6, 2026:</p>
<table><thead><tr><th>Price per million tokens</th><th>Claude Sonnet 5.5</th><th>Claude Sonnet 5</th></tr></thead><tbody>
<tr><td>Input</td><td>$2</td><td>$2</td></tr>
<tr><td>Output</td><td>$10</td><td>$10</td></tr>
<tr><td>Cache reads (hits)</td><td>$0.20</td><td>$0.20</td></tr>
<tr><td>5-minute cache writes</td><td>$2.50</td><td>$2.50</td></tr>
<tr><td>Batch API (input / output)</td><td>$1 / $5</td><td>$1 / $5</td></tr>
</tbody></table>
<p>The saving comes from efficiency. Anthropic says Sonnet 5.5 ${src(SONNET, 'typically needs far fewer tokens to do the same work')}, and in its testing it costs up to 30% less per task. "Up to" matters: your result depends on the task, the effort setting and how much context you cache.</p>
<p>Two practical notes from Anthropic's ${src(WHATSNEW, 'developer docs')}. Effort levels were recalibrated, so a setting carried over from Sonnet 5 won't behave the same. And there are breaking changes for teams already on Sonnet 5, such as forced tool use no longer being supported. If someone built your agents, they will need to test before switching.</p>

<h2 id="sonnet-vs-opus">Sonnet 5.5 vs Opus 5.5: how do they compare?</h2>
<p>Anthropic positions Sonnet 5.5 as ${src(SONNET, '"a faster, lower-cost complement to Claude Opus 5.5"')}. Opus 5.5 is built for complex work requiring careful judgment; Sonnet 5.5 is strongest at well-scoped everyday tasks. Here are Anthropic's published numbers side by side, with specs from the ${src(MODELS, 'models overview')}.</p>
<table><thead><tr><th></th><th>Claude Sonnet 5.5</th><th>Claude Opus 5.5</th><th>Claude Sonnet 5</th></tr></thead><tbody>
<tr><td>API price (input / output per MTok)</td><td>$2 / $10</td><td>$4 / $20</td><td>$2 / $10</td></tr>
<tr><td>Relative latency</td><td>Fast</td><td>Moderate</td><td>—</td></tr>
<tr><td>Context window</td><td>1M tokens</td><td>1M tokens</td><td>—</td></tr>
<tr><td>Terminal-Bench 4.0 (agentic coding)</td><td>70.6%</td><td>66.4%</td><td>10.3%</td></tr>
<tr><td>FrontierCode 1.1</td><td>46.2%</td><td>54.4%</td><td>42.4%</td></tr>
<tr><td>CursorBench 4.0</td><td>55.5%</td><td>57.8%</td><td>34.1%</td></tr>
<tr><td>GDPval-AA v2.1 (knowledge work, Elo)</td><td>1844</td><td>1846</td><td>1449</td></tr>
<tr><td>OSWorld 2.1 (computer use)</td><td>80.1%</td><td>81.8%</td><td>57.0%</td></tr>
<tr><td>Best for</td><td>Well-scoped tasks, volume, speed</td><td>Complex, judgment-heavy, long-running work</td><td>Superseded by 5.5</td></tr>
</tbody></table>
<p>The pattern: on office-style knowledge work and computer use, Sonnet 5.5 is nearly level with Opus 5.5. On harder coding benchmarks like FrontierCode, Opus 5.5 keeps a clear lead. These are Anthropic's own results, so test on your real tasks before deciding.</p>

<h2 id="use-cases">What is Claude Sonnet 5.5 best used for?</h2>
<p>Based on Anthropic's positioning and the benchmarks above, Sonnet 5.5 fits work that is clearly defined and happens often:</p>
<ul>
<li><strong>AI agents that run all day.</strong> Agents make many calls per task. A faster model that uses fewer tokens shortens each run and lowers the bill.</li>
<li><strong>Everyday coding.</strong> Anthropic highlights bug fixing and agentic coding, where its Terminal-Bench result stands out.</li>
<li><strong>Customer support at volume.</strong> Answering order questions, drafting replies and routing tickets are well-scoped, repetitive and speed-sensitive. Companies such as Zendesk and Slack are among those quoted on ${src(SONNET, "Anthropic's launch page")}.</li>
<li><strong>Documents and spreadsheets.</strong> Anthropic calls out polished documents, slides and spreadsheets as a strength.</li>
</ul>
<p>Reach for Opus 5.5 instead when a task needs careful judgment over many steps, such as complex research, sensitive decisions or hard multi-file code changes.</p>

<h2 id="small-business">What does Sonnet 5.5 mean for small businesses?</h2>
<p>For most small businesses, Sonnet 5.5 matters more than Opus 5.5, because most useful automation is high-volume and well-defined. A missed-call follow-up, a support reply or a lead qualification email doesn't need the most powerful model. It needs a capable one that is fast and cheap enough to run on every single request.</p>
<p>What changes in practice:</p>
<ul>
<li><strong>Faster replies to customers.</strong> A 30%+ speed gain is noticeable in live chat and voice follow-ups.</li>
<li><strong>Lower running cost for the same automation.</strong> Fewer tokens per task means agents can cover more of your volume.</li>
<li><strong>A higher floor.</strong> The mid-tier model now handles work that needed the top tier a few months ago.</li>
</ul>
<p>What isn't relevant yet: if you use Claude only in a chat window, you will notice speed more than cost. And if your process isn't written down, no model will fix that. Start by defining one workflow, the approval rules and what "done" looks like. Our guide on <a href="/blog/automate-customer-support-with-ai">automating customer support with AI</a> walks through it.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build AI models. We build and run the agents that use them, and we choose the model per job: a fast model like Sonnet 5.5 for high-volume steps, a stronger one where judgment matters. When a better or cheaper model ships, we test it against your workflow before switching.</p>
<p><a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees: Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents built and maintained by Dooza engineers.</p>
<p>The best fits for a fast, efficient model are <a href="/ai-customer-support">AI customer support</a>, an <a href="/ai-receptionist">AI receptionist</a> and <a href="/workflow-automation">workflow automation</a>. For the bigger picture, read <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Ready to put a fast AI agent on your busiest workflow?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow. Start with a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is Claude Sonnet 5.5?', answer: "Claude Sonnet 5.5 is Anthropic's mid-tier model released on September 28, 2026, the second in the Claude 5.5 family. Anthropic says it is a clear upgrade over Sonnet 5, runs 30%+ faster and costs up to 30% less for most work." },
        { question: 'How much does Claude Sonnet 5.5 cost?', answer: "It has the same API prices as Sonnet 5: $2 per million input tokens and $10 per million output tokens, as of October 2026. Check Anthropic's official pricing page for current rates." },
        { question: 'How can Sonnet 5.5 be cheaper if the price did not change?', answer: 'Anthropic says it typically needs far fewer tokens to do the same work, so the cost per task falls by up to 30% in its testing even though the price per token is unchanged.' },
        { question: 'Is Sonnet 5.5 as good as Opus 5.5?', answer: "On Anthropic's knowledge-work and computer-use benchmarks it is within a point or two of Opus 5.5, and it scores higher on Terminal-Bench 4.0. Opus 5.5 keeps a lead on harder coding tests and complex, judgment-heavy work." },
        { question: 'What is Sonnet 5.5 best for?', answer: 'Well-scoped, frequent tasks: AI agents that run all day, everyday coding and bug fixing, customer support at volume, and documents, slides and spreadsheets.' },
        { question: 'What does Sonnet 5.5 mean for small businesses?', answer: 'It makes fast, capable AI agents cheaper to run on high-volume work like support replies and lead follow-up. Dooza builds and runs agents like these, each starting with a refundable pilot.' },
    ],
};

export default post;
