import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'Claude', handle: 'claudeai', id: '2102435511222890900', date: 'September 22, 2026' };

const OPUS = 'https://www.anthropic.com/news/claude-opus-5-5';
const PRICING = 'https://platform.claude.com/docs/en/about-claude/pricing';
const MODELS = 'https://platform.claude.com/docs/en/about-claude/models/overview';

const post = {
    id: 400,
    title: 'Claude Opus 5.5: Fable-Level Performance at 40% Lower Cost, Explained',
    seoTitle: 'Claude Opus 5.5 Explained: Price, Benchmarks, Use Cases',
    seoDescription: 'Anthropic says Claude Opus 5.5 matches Claude Fable 5.1 on most work and costs 40% less to run than Opus 5. What changed and how to pick a model.',
    excerpt: "Anthropic's Claude Opus 5.5 is the first model in the Claude 5.5 family. It performs at roughly the level of Claude Fable 5.1 on most work, costs 40% less to run than Opus 5, and generates output more than 30% faster. Here is what changed, how to choose between Opus 5.5, Fable 5.1 and Sonnet 5.5, and what it means for businesses running AI agents.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Claude Opus 5.5', 'Anthropic', 'Viral X Post', 'AI Models', 'AI Agents', 'LLM Pricing'],
    image: '/blog/claude-opus-5-5.png',
    imageAlt: 'Soft watercolor illustration of a glowing geometric crystal on a desk beside a stack of coins that is smaller than before, with faint flowing lines suggesting speed and efficiency',
    slug: 'claude-opus-5-5',
    tocData: [
        { id: 'what-happened', label: 'What Anthropic announced' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'pricing', label: 'Pricing vs Opus 5' },
        { id: 'benchmarks', label: 'Benchmarks' },
        { id: 'which-model', label: 'Opus 5.5 vs Fable 5.1 vs Sonnet 5.5' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'next-step', label: 'Next step' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What is Claude Opus 5.5?</h2>
<p>Claude Opus 5.5 is Anthropic's newest Opus model, released on September 22, 2026, as the first model in the new Claude 5.5 family. Anthropic says it ${src(OPUS, 'performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5')}. Anthropic says it is available on all its platforms, including the Claude Platform as <code>claude-opus-5-5</code>, AWS, Google Cloud and Microsoft Azure.</p>
<p>The short version: the top of the capability range did not move much, but that level of work got a lot cheaper and faster.</p>
<ul>
<li><strong>Same tier, lower cost:</strong> roughly Fable 5.1-level results on most tasks, at about 40% lower cost than Opus 5 on typical workloads, per Anthropic.</li>
<li><strong>Cheaper tokens:</strong> $4 input and $20 output per million tokens, 20% below Opus 5, with cache reads down 60% to $0.20.</li>
<li><strong>Faster:</strong> Anthropic says it generates output more than 30% faster than Opus 5.</li>
<li><strong>Safety-first framing:</strong> it is Anthropic's first release since it called for "pacing the frontier," and it was tested by external evaluators before launch.</li>
<li><strong>For small businesses:</strong> the gain is indirect but real. AI agents built on top-tier models now cost less to run, which matters most for long, multi-step work.</li>
</ul>
${xPost({ text: 'Introducing Claude Opus 5.5, the first model in our new Claude 5.5 family.<br><br>It performs at the level of Claude Fable 5.1 for most tasks, and costs 40% less to run than Opus 5.', ...X })}
${postCredit({ ...X, views: '28 million', likes: '97,000' })}

<h2 id="why-viral">Why did the Opus 5.5 announcement go viral?</h2>
<p>The post reached about 28 million views in two weeks. Three things made it spread.</p>
<p><strong>It promised the top model's quality at a lower tier's price.</strong> Claude Fable 5.1 is Anthropic's model for the hardest reasoning and long-running agent work, and it is priced well above Opus. "Fable-level for most tasks" in an Opus-priced model is a simple, shareable claim for anyone paying an AI bill.</p>
<p><strong>The cost cut is bigger than the price cut.</strong> List prices fell 20%, but Anthropic says total cost on typical workloads falls about 40%. The gap comes from cheaper cache reads, which Anthropic says ${src(OPUS, 'make up the majority of agentic and coding work costs')}, and from the model using fewer tokens per task.</p>
<p><strong>The timing was unusual.</strong> Days earlier, Anthropic CEO Dario Amodei published an essay, ${src('https://darioamodei.com/post/we-must-pace-the-frontier', '"We Must Pace the Frontier"')}, arguing that labs should slow how fast they push capabilities so safety work can keep up. Anthropic calls Opus 5.5 ${src(OPUS, 'its first release since that call')}. A model that holds capability roughly level while lowering cost and improving alignment was read by many as what "paced" progress looks like, a reading ${src('https://www.mindstudio.ai/blog/anthropic-pacing-the-frontier/', 'MindStudio laid out in its analysis')}.</p>

<h2 id="pricing">How much does Claude Opus 5.5 cost compared with Opus 5?</h2>
<p>These are Anthropic's published API prices per million tokens, from the ${src(PRICING, 'official Claude pricing page')} as of October 6, 2026. Check that page before budgeting, since prices change.</p>
<table><thead><tr><th>Price per million tokens</th><th>Claude Opus 5.5</th><th>Claude Opus 5</th><th>Change</th></tr></thead><tbody>
<tr><td>Input</td><td>$4</td><td>$5</td><td>-20%</td></tr>
<tr><td>Output</td><td>$20</td><td>$25</td><td>-20%</td></tr>
<tr><td>Cache reads (hits)</td><td>$0.20</td><td>$0.50</td><td>-60%</td></tr>
<tr><td>5-minute cache writes</td><td>$5</td><td>$6.25</td><td>-20%</td></tr>
<tr><td>Batch API (input / output)</td><td>$2 / $10</td><td>$2.50 / $12.50</td><td>-20%</td></tr>
<tr><td>Fast mode (input / output)</td><td>$8 / $40</td><td>$10 / $50</td><td>-20%</td></tr>
</tbody></table>
<p>The 40% figure is Anthropic's own measurement "at default settings" on typical workloads, not a list-price change. Your savings depend on how much of your usage is cached context, how long your outputs are, and which effort level you run. Opus 5.5's default effort on the API is <code>medium</code>, according to the ${src(MODELS, 'models overview')}.</p>

<h2 id="benchmarks">How does Opus 5.5 score on benchmarks?</h2>
<p>Anthropic published these results in its ${src(OPUS, 'launch post')}. They are the company's own numbers, so treat them as a guide and test on your own tasks.</p>
<table><thead><tr><th>Benchmark</th><th>Opus 5.5</th><th>Fable 5.1</th><th>Opus 5</th></tr></thead><tbody>
<tr><td>Terminal-Bench 4.0 (agentic coding)</td><td>66.4%</td><td>55.8%</td><td>52.3%</td></tr>
<tr><td>FrontierCode v1.1 (Main)</td><td>54.4%</td><td>50.3%</td><td>48.0%</td></tr>
<tr><td>CursorBench 4.0</td><td>57.8%</td><td>51.8%</td><td>46.6%</td></tr>
<tr><td>GDPval-AA v2.1 (knowledge work, Elo)</td><td>1846</td><td>1735</td><td>1708</td></tr>
<tr><td>AutomationBench</td><td>40.0%</td><td>31.4%</td><td>26.9%</td></tr>
<tr><td>Humanity's Last Exam</td><td>67.7%</td><td>65.6%</td><td>63.6%</td></tr>
<tr><td>OSWorld 2.1 (computer use)</td><td>81.8%</td><td>80.7%</td><td>74.0%</td></tr>
</tbody></table>
<p>On these evaluations Opus 5.5 matches or beats Fable 5.1. Anthropic still positions Fable 5.1 as the model for the most demanding work, which suggests benchmark wins don't capture every hard case. Anthropic also reports Opus 5.5 is the strongest model it has tested on its automated behavioral audit, and was evaluated before release by external groups including METR.</p>

<h2 id="which-model">Opus 5.5 vs Fable 5.1 vs Sonnet 5.5: which should you use?</h2>
<p>Anthropic's own ${src(MODELS, 'models overview')} now says: if you're unsure, start with Opus 5.5 for most workloads. Here is how the current lineup compares.</p>
<table><thead><tr><th></th><th>Claude Fable 5.1</th><th>Claude Opus 5.5</th><th>Claude Sonnet 5.5</th></tr></thead><tbody>
<tr><td>Anthropic's description</td><td>Demanding reasoning and long-horizon agentic work</td><td>Long-running agentic coding and knowledge work</td><td>Best combination of speed and intelligence</td></tr>
<tr><td>Relative latency</td><td>Slower</td><td>Moderate</td><td>Fast</td></tr>
<tr><td>API price (input / output per MTok)</td><td>$10 / $50</td><td>$4 / $20</td><td>$2 / $10</td></tr>
<tr><td>Context window</td><td>1M tokens</td><td>1M tokens</td><td>1M tokens</td></tr>
<tr><td>Use it when</td><td>Opus 5.5 at higher effort still falls short in your tests</td><td>Default choice for complex, multi-step work</td><td>Well-scoped everyday tasks, high volume, speed matters</td></tr>
</tbody></table>
<p>A practical rule: start on Opus 5.5, move routine high-volume steps down to ${src('https://www.anthropic.com/claude-sonnet-5-5', 'Claude Sonnet 5.5')}, and only move up to Fable 5.1 for the specific tasks where your own tests show Opus 5.5 isn't good enough. We cover Sonnet 5.5 in detail in <a href="/blog/claude-sonnet-5-5">our Claude Sonnet 5.5 breakdown</a>.</p>

<h2 id="small-business">What does Claude Opus 5.5 mean for small businesses?</h2>
<p>If you only use Claude in a chat window, the change is modest. You get a stronger, faster default model, but you were never paying per token.</p>
<p>The bigger effect is on AI agents. An agent that answers an inbox, qualifies leads, or reconciles records runs many model calls per task, and re-reads the same instructions and context each time. That is exactly where cheaper cache reads and fewer tokens per task add up. Three practical takeaways:</p>
<ul>
<li><strong>Top-tier models become affordable for routine work.</strong> Tasks that needed the best model but were too expensive to run all day are now cheaper to automate.</li>
<li><strong>Re-check old "not worth it" decisions.</strong> If you priced an automation six months ago and it didn't pencil out, the numbers may be different now.</li>
<li><strong>Don't chase every release.</strong> A new model doesn't fix a badly defined workflow. Clear instructions, access to the right tools, and approval rules still matter more than the model name.</li>
</ul>
<p>What isn't relevant yet for most small businesses: benchmark races, fast mode, and model switching mid-project. If you are not building software yourself, let whoever runs your agents handle model choice. For background, see <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build frontier models. We build and run the agents that use them for real business work, and we pick the model that fits each job. Releases like Opus 5.5 lower the cost of running capable agents, and that benefit passes into the workflows we maintain.</p>
<p><a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees: Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your workflows.</p>
<p>Common starting points are an <a href="/ai-receptionist">AI receptionist</a>, <a href="/ai-customer-support">AI customer support</a> and <a href="/workflow-automation">workflow automation</a>. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> shows how to choose the first workflow. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Want agents built on the latest models without managing them?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow. Start with a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is Claude Opus 5.5?', answer: "Claude Opus 5.5 is Anthropic's Opus model released on September 22, 2026, the first in the Claude 5.5 family. Anthropic says it performs at the level of Claude Fable 5.1 on most work and costs 40% less to run than Opus 5." },
        { question: 'How much does Claude Opus 5.5 cost?', answer: "On Anthropic's API it is $4 per million input tokens and $20 per million output tokens, with cache reads at $0.20 per million, as of October 2026. Check Anthropic's official pricing page for current rates." },
        { question: 'Why is Opus 5.5 40% cheaper if prices only fell 20%?', answer: 'Anthropic says the 40% saving on typical workloads combines 20% lower token prices, 60% cheaper cache reads, and the model using fewer tokens to finish the same work.' },
        { question: 'Is Claude Opus 5.5 better than Claude Fable 5.1?', answer: "On Anthropic's published benchmarks, Opus 5.5 matches or beats Fable 5.1. Anthropic still recommends Fable 5.1 for the most demanding reasoning and long-horizon agent work when Opus 5.5 falls short in your own tests." },
        { question: 'Should I use Opus 5.5 or Sonnet 5.5?', answer: "Anthropic suggests Opus 5.5 as the default for most workloads and complex multi-step work. Sonnet 5.5 is faster and half the token price, and suits well-scoped everyday tasks and high-volume work." },
        { question: 'What does Opus 5.5 mean for small businesses?', answer: 'It lowers the cost of running capable AI agents that make many model calls per task, such as inbox, support and lead follow-up agents. Dooza builds and runs agents like these, each starting with a refundable pilot.' },
    ],
};

export default post;
