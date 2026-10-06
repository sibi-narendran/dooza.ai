import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'OpenAI', handle: 'OpenAI', id: '2104986129686741046', date: 'September 29, 2026' };

const post = {
    id: 402,
    title: 'GPT-6.1 Sol: Near-Astra Intelligence for a Fifth of the Price, Explained',
    seoTitle: 'GPT-6.1 Sol Explained: Price, Lineup and Agent Costs',
    seoDescription: 'OpenAI says GPT-6.1 Sol nears GPT-6 Astra at a fifth of the price. The GPT-6 lineup, API prices vs Claude 5.5, and what it means for AI agents.',
    excerpt: "OpenAI's GPT-6.1 Sol promises near-Astra intelligence at one-fifth of Astra's token prices. Here is how the GPT-6 lineup (Astra, Sol, Luna) fits together, how the prices compare with Claude Opus 5.5 and Sonnet 5.5, and what cheaper near-frontier models mean for businesses running AI agents.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['OpenAI', 'GPT-6.1 Sol', 'GPT-6', 'AI Model Pricing', 'AI Agents', 'Viral X Post'],
    image: '/blog/gpt-6-1-sol.png',
    imageAlt: 'Soft watercolor illustration of a warm golden sun beside a smaller pale moon and a distant bright star, above a set of balance scales tipping toward a small stack of coins',
    slug: 'gpt-6-1-sol',
    tocData: [
        { id: 'what-happened', label: 'What OpenAI announced' },
        { id: 'lineup', label: 'Astra, Sol and Luna' },
        { id: 'pricing', label: 'Pricing compared' },
        { id: 'claims', label: 'How close to Astra?' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'agents', label: 'What it means for AI agents' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did OpenAI announce with GPT-6.1 Sol?</h2>
<p>On September 29, 2026, OpenAI released GPT-6.1 Sol, an upgrade to the GPT-6 Sol model it had shipped one week earlier. OpenAI's pitch is in the post below: "near-Astra intelligence for a fifth of the price." Astra is OpenAI's top GPT-6 model. In the API, GPT-6.1 Sol costs $2 per million input tokens and $10 per million output tokens, against $10 and $50 for GPT-6 Astra, according to ${src('https://developers.openai.com/api/docs/pricing', "OpenAI's API pricing page")}.</p>
<ul>
<li><strong>The lineup:</strong> GPT-6 Astra is the most capable tier, Sol is the mid tier, and Luna is the cheapest, high-volume tier.</li>
<li><strong>The price:</strong> GPT-6.1 Sol is one-fifth of Astra's standard input and output prices, and its cached input is $0.10 per million tokens.</li>
<li><strong>The claim:</strong> OpenAI says it nearly matches Astra on agentic coding, computer use, and professional work. Those are OpenAI's own benchmark results.</li>
<li><strong>Where to get it:</strong> ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, and Edu users, and the API as <code>gpt-6.1-sol</code>.</li>
<li><strong>For small businesses:</strong> cheaper near-frontier models make AI agents that run all day more affordable, but the model is only one part of a working agent.</li>
</ul>
${xPost({ text: 'GPT-6.1 Sol: near-Astra intelligence for a fifth of the price.<br><br>It’s the most cost-efficient model for its performance available today.', ...X })}
${postCredit({ ...X, views: '3.1 million', likes: '21,000' })}

<h2 id="lineup">What are GPT-6 Astra, Sol and Luna?</h2>
<p>OpenAI's GPT-6 family now comes in three tiers, named like the sky: a star, a sun, and a moon. Astra arrived first, on September 3, 2026, according to ${src('https://thenextweb.com/news/openai-gpt-6-1-sol-price-astra-devday', 'The Next Web')}. OpenAI's ${src('https://developers.openai.com/api/docs/models/gpt-6-astra', 'model page')} calls it "our most capable model for the most demanding work."</p>
<p>On September 22, the ${src('https://x.com/ChatGPT', '@ChatGPT')} account announced GPT-6 Sol and GPT-6 Luna, rolling out in ChatGPT Work and Codex for paid plans. OpenAI says the two models bring much of Astra's strength into faster, cheaper models for work at scale. One week later, GPT-6.1 Sol replaced Sol as the recommended mid-tier model.</p>
<table><thead><tr><th>Model</th><th>Released</th><th>What OpenAI positions it for</th></tr></thead><tbody>
<tr><td>GPT-6 Astra</td><td>September 3, 2026</td><td>The hardest work: complex reasoning, coding, computer use, research</td></tr>
<tr><td>GPT-6 Sol</td><td>September 22, 2026</td><td>Professional work, coding, and automation at lower cost</td></tr>
<tr><td>GPT-6.1 Sol</td><td>September 29, 2026</td><td>${src('https://developers.openai.com/api/docs/models/gpt-6.1-sol', '"Near-Astra performance for complex work at a lower cost"')}</td></tr>
<tr><td>GPT-6 Luna</td><td>September 22, 2026</td><td>${src('https://developers.openai.com/api/docs/models/gpt-6-luna', '"Focused, high-volume tasks"')}</td></tr>
</tbody></table>
<p>All three tiers list a context window of about 1.05 million tokens and up to 128,000 output tokens on OpenAI's model pages.</p>

<h2 id="pricing">How much does GPT-6.1 Sol cost compared with Astra, Luna and Claude?</h2>
<p>Here are the standard API prices per million tokens, from ${src('https://developers.openai.com/api/docs/pricing', "OpenAI's pricing page")} and ${src('https://platform.claude.com/docs/en/about-claude/pricing', "Anthropic's pricing page")}, as of October 6, 2026:</p>
<table><thead><tr><th>Model</th><th>Input</th><th>Cached input</th><th>Output</th></tr></thead><tbody>
<tr><td>GPT-6 Astra</td><td>$10.00</td><td>$1.00</td><td>$50.00</td></tr>
<tr><td>GPT-6.1 Sol</td><td>$2.00</td><td>$0.10</td><td>$10.00</td></tr>
<tr><td>GPT-6 Sol</td><td>$2.00</td><td>$0.20</td><td>$10.00</td></tr>
<tr><td>GPT-6 Luna</td><td>$0.10</td><td>$0.01</td><td>$0.50</td></tr>
<tr><td>Claude Opus 5.5</td><td>$4.00</td><td>$0.20</td><td>$20.00</td></tr>
<tr><td>Claude Sonnet 5.5</td><td>$2.00</td><td>$0.20</td><td>$10.00</td></tr>
</tbody></table>
<p>Two details are easy to miss. First, GPT-6.1 Sol costs the same as GPT-6 Sol for fresh input and output. The upgrade is in quality, plus cached input at half the old price. Second, GPT-6.1 Sol lists at the same headline price as <a href="/blog/claude-sonnet-5-5">Claude Sonnet 5.5</a> and at half the price of <a href="/blog/claude-opus-5-5">Claude Opus 5.5</a>. Both providers offer a 50% discount for batch jobs, and long prompts can cost more. Different tokenizers also mean the same text can produce a different number of tokens on each model, so compare cost per finished task, not just the price list.</p>

<h2 id="claims">How close does GPT-6.1 Sol get to Astra?</h2>
<p>According to OpenAI's ${src('https://openai.com/index/introducing-gpt-6-1-sol/', 'launch post')}:</p>
<ul>
<li><strong>DeepSWE v1.1</strong> (software engineering in real codebases): GPT-6.1 Sol matches GPT-6 Astra at roughly one-fifth of the cost.</li>
<li><strong>OSWorld 2.0, offline set</strong> (using a computer like a person): it comes within 2.1 percentage points of Astra at roughly one-seventh of the cost per task, and beats GPT-6 Sol by seven points.</li>
<li><strong>AutomationBench</strong> (multi-step business workflows): OpenAI says it scores 2.2 points above Claude Opus 5.5 at medium effort for about a third of the cost, as ${src('https://thenextweb.com/news/openai-gpt-6-1-sol-price-astra-devday', 'The Next Web reported')}.</li>
</ul>
<p>These are vendor-run benchmarks, picked by the company selling the model. Independent results and your own tests on your own tasks matter more. OpenAI's ${src('https://deploymentsafety.openai.com/gpt-6-1-sol', 'system card addendum')} also says GPT-6.1 Sol gets the same safeguards as Astra.</p>

<h2 id="why-viral">Why did the GPT-6.1 Sol post go viral?</h2>
<p>The post reached about 3.1 million views. The message is easy to repeat: the same quality for less money. That reaches far beyond developers. It also landed in the middle of a tight race. Anthropic's Claude Opus 5.5 arrived the same week as GPT-6 Sol, and OpenAI's launch named Opus 5.5 in its comparisons. And "a fifth of the price" fits the price drops many people have watched over the past two years: each new mid-tier model reaches a level that used to cost far more.</p>

<h2 id="agents">What do cheaper near-frontier models mean for businesses running AI agents?</h2>
<p>AI agents use many more tokens than a chat. One task can mean reading a long instruction file, calling tools, checking results, and trying again. Most of that is input, and much of it repeats, which is why the cheaper cached input matters. Here is a rough example for one agent task with 200,000 input tokens (150,000 of them cached) and 20,000 output tokens, at list prices and ignoring cache-write fees:</p>
<table><thead><tr><th>Model</th><th>Rough cost per task</th><th>1,000 tasks a month</th></tr></thead><tbody>
<tr><td>GPT-6 Astra</td><td>$1.65</td><td>$1,650</td></tr>
<tr><td>Claude Opus 5.5</td><td>$0.63</td><td>$630</td></tr>
<tr><td>Claude Sonnet 5.5</td><td>$0.33</td><td>$330</td></tr>
<tr><td>GPT-6.1 Sol</td><td>$0.32</td><td>$315</td></tr>
<tr><td>GPT-6 Luna</td><td>$0.02</td><td>$17</td></tr>
</tbody></table>
<p>This is arithmetic, not a forecast. Real costs depend on how many tokens each model uses and how many retries a task needs. But it shows the shift in practice:</p>
<ul>
<li><strong>Routing beats picking one model.</strong> Use a Luna-class model for simple sorting and tagging, a Sol-class model for most agent work, and save the top tier for the hardest problems.</li>
<li><strong>Always-on agents become cheaper to run.</strong> Agents that answer email, qualify leads, or update a CRM all day cost less per task.</li>
<li><strong>The bottleneck moves.</strong> The model is rarely what stops an agent working. Clear instructions, the right access to your tools, and approval steps for anything sensitive matter more.</li>
</ul>

<h2 id="small-business">What does GPT-6.1 Sol mean for a small business?</h2>
<p>If you don't write code against the OpenAI API, you won't use GPT-6.1 Sol directly. You will feel it through the tools you already pay for, which can now run stronger models for the same money. If you have a ChatGPT Plus or Business plan, you can try it in ChatGPT Work and Codex today.</p>
<p>Three honest takeaways:</p>
<ol>
<li><strong>Don't chase every release.</strong> A new model every week is normal now. Pick a workflow, measure the result, and switch models only when it improves.</li>
<li><strong>Price is no longer the main barrier to agents.</strong> The hard part is setup: connecting your inbox, calendar, and CRM, and deciding what the agent may do without asking.</li>
<li><strong>Stay model-flexible.</strong> OpenAI and Anthropic now trade the lead in weeks. Avoid tools that lock you into one provider.</li>
</ol>
<p>For background, read <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a> and <a href="/blog/automate-business-processes">how to automate business processes</a>.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build frontier models. It builds the agents on top of them and keeps them running. <a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees: Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your workflows, and they can move to a better or cheaper model when one ships.</p>
<p>Common first projects are an <a href="/ai-receptionist">AI receptionist</a>, <a href="/ai-customer-support">AI customer support</a>, and <a href="/workflow-automation">workflow automation</a>. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> helps you pick the first one. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Want cheaper models working on your business, not just in benchmarks?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow. Start with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is GPT-6.1 Sol?', answer: "GPT-6.1 Sol is OpenAI's mid-tier GPT-6 model, released September 29, 2026. OpenAI says it delivers near GPT-6 Astra performance on coding, computer use, and professional work at one-fifth of Astra's standard API token prices." },
        { question: 'How much does GPT-6.1 Sol cost?', answer: "On OpenAI's API pricing page, GPT-6.1 Sol costs $2 per million input tokens, $0.10 per million cached input tokens, and $10 per million output tokens. GPT-6 Astra costs $10, $1, and $50." },
        { question: 'What is the difference between GPT-6 Astra, Sol and Luna?', answer: 'Astra is the most capable and most expensive tier. Sol is the mid tier for most professional and agent work. Luna is the cheapest tier, built for focused, high-volume tasks.' },
        { question: 'How does GPT-6.1 Sol compare with Claude Sonnet 5.5 and Opus 5.5?', answer: 'At list prices, GPT-6.1 Sol and Claude Sonnet 5.5 both cost $2 input and $10 output per million tokens, and Claude Opus 5.5 costs $4 and $20. OpenAI claims GPT-6.1 Sol beats Opus 5.5 on AutomationBench at about a third of the cost, but that is a vendor benchmark.' },
        { question: 'Where can I use GPT-6.1 Sol?', answer: 'In ChatGPT Work and Codex for Plus, Pro, Business, Enterprise, and Edu users, and in the OpenAI API as gpt-6.1-sol.' },
        { question: 'Does a small business need GPT-6.1 Sol?', answer: 'Not directly. Most small businesses benefit through the AI tools and agents they use, which can now run stronger models for less. The bigger challenge is setting up agents with the right access and approvals, which services like Dooza handle.' },
    ],
};

export default post;
