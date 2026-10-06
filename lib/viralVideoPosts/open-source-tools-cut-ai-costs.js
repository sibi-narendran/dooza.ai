import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = 'Y5rSSvXfL4g';
const VIDEO_TITLE = '5 open source tools that replaced my $320/mo AI stack...';

const post = {
    id: 245,
    title: 'Fireship\'s 5 Open Source Tools to Cut AI Costs: Worth Self-Hosting?',
    seoTitle: '5 Open Source Tools to Cut AI Costs (Fireship)',
    seoDescription: 'Fireship swaps a $320/mo AI stack for Ollama, 9router, Headroom, Dify, and OpenHands. What each tool does and when self-hosting saves small teams money.',
    excerpt: 'Fireship\'s Code Report replaces paid AI subscriptions with five open source tools: Ollama, 9router, Headroom, Dify, and OpenHands. Here is what each one does, and an honest look at when self-hosting actually saves a small team money.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'Tech News',
    tags: ['Fireship', 'Viral Video', 'Open Source AI', 'Ollama', 'OpenHands', 'Dify', 'AI Costs', 'Self-Hosting'],
    image: '/blog/open-source-tools-cut-ai-costs.png',
    imageAlt: 'Soft watercolor illustration of a small home server on a desk connected to five labeled tool icons, with a stack of cancelled subscription cards and a shrinking pile of coins beside it',
    slug: 'open-source-tools-cut-ai-costs',
    video: {
        name: VIDEO_TITLE,
        description: 'Fireship\'s Code Report walks through five free and open source tools, Ollama, 9router, Headroom, Dify, and OpenHands, that can replace or reduce paid AI subscriptions and token spend.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-09-07',
    },
    tocData: [
        { id: 'what-is-it', label: 'What is the video about?' },
        { id: 'five-tools', label: 'The 5 tools at a glance' },
        { id: 'how-they-fit', label: 'How do they fit together?' },
        { id: 'when-it-saves', label: 'When does self-hosting save money?' },
        { id: 'hidden-costs', label: 'Hidden costs' },
        { id: 'small-team-plan', label: 'A plan for small teams' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-is-it">What is Fireship's "5 open source tools" video about?</h2>
<p><strong>In this September 2026 episode of The Code Report, Fireship argues you can cancel most paid AI subscriptions and self-host a cheaper AI stack built from five open source tools: Ollama, 9router, Headroom, Dify, and OpenHands.</strong> Ollama runs models locally. 9router puts all your model providers behind one endpoint with automatic fallback. Headroom compresses context to cut input tokens. Dify is a visual builder for AI workflows. OpenHands is an autonomous coding agent.</p>
<p>The video tallies the subscriptions behind the "$320 a month" in its title: Cursor, Claude Max, GPT Pro, and Gemini Ultra. It's aimed at developers, and the episode is sponsored. The ideas apply to any small team watching its AI bill, but self-hosting is not automatically cheaper.</p>
<ul>
<li>Local models (Ollama) cost nothing per token but need hardware, and small models can't match frontier ones.</li>
<li>Routing (9router) and compression (Headroom) cut spend without giving up the big models.</li>
<li>Dify and OpenHands are the "build things" layer: workflows and coding agents.</li>
<li>Self-hosting saves money when usage is high and someone on the team can run servers. Otherwise, it can cost more in time.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Fireship', channelUrl: 'https://www.youtube.com/@Fireship', uploadDate: 'September 7, 2026', views: '1.26 million' })}
<p>Fireship opens with the math that started it:</p>
${quote('Cursor, $20. Claude Max, $100. GPT Pro, another 100. Gemini Ultra, another 100.', 'Fireship', VIDEO_ID, 4, '0:04', VIDEO_TITLE)}

<h2 id="five-tools">What are the 5 open source tools, and what does each one do?</h2>
<table><thead><tr><th>Tool</th><th>What it does (per the video)</th><th>How it cuts cost</th><th>Main catch</th></tr></thead><tbody>
<tr><td><strong>Ollama</strong></td><td>Command line and API for downloading and running open-weight models on your own machine</td><td>Zero per-token cost; prompts stay private</td><td>Frontier-size models need serious hardware</td></tr>
<tr><td><strong>9router</strong></td><td>Self-hosted proxy that puts dozens of model providers behind one OpenAI-compatible local endpoint</td><td>Fallback tiers use subscriptions you already pay for first, then cheap or free providers; tracks usage and compresses tool output</td><td>One more service to run and keep updated</td></tr>
<tr><td><strong>Headroom</strong></td><td>Context compression layer between your app and the model provider</td><td>Shrinks tool outputs, logs, and other noise before they become billable input tokens</td><td>Only pays off if you send a lot of context</td></tr>
<tr><td><strong>Dify</strong></td><td>Visual drag-and-drop builder for AI workflows, exposed as an API</td><td>Build AI features without a separate paid workflow tool</td><td>Still calls a model, so token costs remain</td></tr>
<tr><td><strong>OpenHands</strong></td><td>Autonomous coding agent you self-host; works from GitHub issues</td><td>Runs with OpenAI or Anthropic models, or local models through Ollama</td><td>Agents left running can burn tokens fast if pointed at paid models</td></tr>
</tbody></table>
<p>Fireship's one-line pitch for Ollama is the easiest way to understand it:</p>
${quote("Essentially, it's like Docker for large language models.", 'Fireship', VIDEO_ID, 65, '1:05', VIDEO_TITLE)}

<h2 id="how-they-fit">How do these tools fit together?</h2>
<p>The video builds a stack in layers, and it's worth seeing it that way because each tool solves a different cost problem:</p>
<ol>
<li><strong>Models:</strong> Ollama runs small and mid-size open models locally for cheap, private work.</li>
<li><strong>Routing:</strong> 9router sends each request to the right provider. According to the video, if you max out a subscription like Claude Max, it rolls over to a pay-per-token backup and then to free providers automatically.</li>
<li><strong>Compression:</strong> Headroom trims what you send. Fireship highlights one design choice: the compressed content is cached locally, so the model can retrieve the original if it needs it.</li>
<li><strong>Apps:</strong> Dify turns AI steps into workflows your product can call. His joke example is a horse-matchmaking app that pulls matches from a database and has a model explain each one.</li>
<li><strong>Agents:</strong> OpenHands runs coding agents in the background on your own server, picking up GitHub issues.</li>
</ol>
${quote("One clever design feature of this tool is that it's reversible.", 'Fireship', VIDEO_ID, 179, '2:59', VIDEO_TITLE)}
<p>The key idea is that you don't have to choose between local and frontier models. Fireship keeps the option to tap Claude and GPT for hard tasks while routing everything else to cheaper options.</p>

<h2 id="when-it-saves">When does self-hosting AI actually save money for a small team?</h2>
<p>Fireship is honest about the biggest limit:</p>
${quote("The big problem though is that you probably don't own the hardware to run anything close to state-of-the-art.", 'Fireship', VIDEO_ID, 86, '1:26', VIDEO_TITLE)}
<p>That shapes the whole decision. Here is our rule of thumb for small teams:</p>
<table><thead><tr><th>Situation</th><th>Self-hosting likely saves money?</th><th>Why</th></tr></thead><tbody>
<tr><td>Heavy API usage (agents, long context, big codebases)</td><td>Often yes</td><td>Routing and compression cut a real, recurring token bill</td></tr>
<tr><td>Several overlapping chat subscriptions per person</td><td>Yes, partly</td><td>Consolidating and routing removes duplicate seats</td></tr>
<tr><td>Simple, repetitive tasks (classifying, summarizing, drafting)</td><td>Often yes</td><td>A small local model is usually good enough</td></tr>
<tr><td>Privacy-sensitive data you can't send out</td><td>Yes, for compliance</td><td>Local models keep prompts on your machine</td></tr>
<tr><td>Light, occasional use</td><td>Usually no</td><td>One subscription costs less than the server and the time</td></tr>
<tr><td>Nobody on the team can maintain servers</td><td>Usually no</td><td>Breakages, updates, and security become unpaid work</td></tr>
<tr><td>Tasks that need frontier-level reasoning</td><td>No</td><td>You still pay a big provider; self-hosting only trims the edges</td></tr>
</tbody></table>

<h2 id="hidden-costs">What are the hidden costs of a self-hosted AI stack?</h2>
<p>A subscription bundles things you don't see. When you self-host, you take them on:</p>
<ul>
<li><strong>Hardware or a server.</strong> Either a capable machine for local models or a rented server. A small server is fine for routing, compression, and Dify. It won't run large models.</li>
<li><strong>Setup and upkeep.</strong> Five tools means five things to update, monitor, and debug. Someone's hours go here.</li>
<li><strong>Security.</strong> A proxy that holds all your API keys is a valuable target. Lock it down, don't expose it to the internet without auth, and rotate keys.</li>
<li><strong>Quality trade-offs.</strong> Local models are good at many tasks, but swapping a frontier model for a small one on hard work can cost more in rework than it saves.</li>
<li><strong>Runaway agents.</strong> Always-on agents connected to paid models need usage caps. A routing layer that tracks usage helps.</li>
</ul>
<p>The fair summary: self-hosting turns a monthly bill into a mix of a smaller bill plus your time. That trade is great for developers who enjoy it, and expensive for a business owner who doesn't.</p>

<h2 id="small-team-plan">What should a small team actually do?</h2>
<p>If you want lower AI costs without rebuilding your stack, start small:</p>
<ol>
<li><strong>Audit your subscriptions.</strong> Fireship's forgotten API keys line is relatable. List every AI tool, who uses it, and what it costs.</li>
<li><strong>Cut duplicates first.</strong> Most teams don't need four chat assistants. This is the fastest saving and needs no servers.</li>
<li><strong>Try Ollama on one task.</strong> Pick a simple, high-volume job like summarizing notes and see if a local model is good enough.</li>
<li><strong>Add routing or compression only if you have a real API bill.</strong> These tools pay off at volume.</li>
<li><strong>Decide who owns it.</strong> If no one does, buy a managed product instead.</li>
</ol>
<p>For a wider look at which tools are worth paying for, see <a href="/blog/ai-tools-for-solopreneurs">AI tools for solopreneurs</a>. If you're weighing self-hosted agents generally, <a href="/blog/what-is-openclaw">what is OpenClaw</a> covers a similar trade-off, and <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a> explains the terms.</p>

<h2 id="dooza">Where does Dooza fit?</h2>
${doozaSummary}
<p>Fireship's stack is built for developers who want to run their own infrastructure. Most small business owners we talk to want the result, not the servers. That's the gap Dooza fills.</p>
<p><a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees for jobs like email, social media, SEO, and lead generation, with no hosting to manage. On <a href="/">Dooza Agents</a>, Dooza engineers build and maintain custom agents for your workflows, so model choice, cost control, and upkeep are handled for you. If your need is narrower, look at <a href="/workflow-automation">workflow automation</a>, an <a href="/ai-receptionist">AI receptionist</a>, or <a href="/ai-customer-support">AI customer support</a>. Our <a href="/blog/automate-business-processes">guide to automating business processes</a> is a good starting point.</p>
<p>Pricing depends on the product; see <a href="/pricing">pricing</a>. Every product starts with a refundable pilot.</p>
<p><strong>Want lower AI costs without running servers?</strong> <a href="/book">Book a free 30-minute call to scope your pilot</a>. Start with a refundable pilot — 100% refund within 14 days.</p>`,
    faqData: [
        {
            question: 'What 5 open source tools does Fireship recommend to cut AI costs?',
            answer: 'Ollama for running models locally, 9router for routing requests across providers with fallback tiers, Headroom for compressing context, Dify for visual AI workflows, and OpenHands for autonomous coding agents.',
        },
        {
            question: 'What does the $320/mo in the video title refer to?',
            answer: 'Fireship adds up Cursor at $20 plus Claude Max, GPT Pro, and Gemini Ultra at $100 each, as quoted in the video, which comes to $320 a month.',
        },
        {
            question: 'Is self-hosting AI cheaper than paying for subscriptions?',
            answer: 'Only sometimes. It saves money when API usage is high, tasks suit small local models, and someone can maintain the servers. For light use or teams without technical staff, a subscription is usually cheaper overall.',
        },
        {
            question: 'Can Ollama replace ChatGPT or Claude?',
            answer: 'For simple tasks, often yes. But as Fireship notes, most people do not own hardware to run anything close to state-of-the-art models, so frontier-level work still needs a big provider.',
        },
        {
            question: 'What does Headroom do?',
            answer: 'According to the video, Headroom sits between your app and the model provider and compresses tool outputs, logs, and other noise before they become billable input tokens. The compression is reversible because the original is cached locally.',
        },
        {
            question: 'Is there a managed option for small businesses that do not want to self-host?',
            answer: 'Yes. Dooza Workforce provides ready-made AI employees and Dooza Agents provides custom agents built and maintained by Dooza engineers. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.',
        },
    ],
};

export default post;
