// ChatGPT dots vs Grok Bot (Sibi 2026-10-22 16:50 "compare to grok bot, openai dots etc, I need to get discovered").
// Demand: Google Suggest "chatgpt dots vs" → "vs grok bot"; "grok bot vs" → "chatgpt dot" (Oct 22, 2026).
// Dots facts: openai.com/index/introducing-dots + help article 20001530 (read verbatim Oct 22, 2026);
// content/research/chatgpt-dots-facts-2026-10-22.md. Grok Bot: x.ai/news/introducing-grok-bot + x.ai/pricing,
// content/research/chatgpt-agent-grok-facts-2026-10-22.md. Dooza Crew claims only as on the homepage (HomeCrew.jsx).

import { src } from './helpers';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=dots-vs-grok-bot';
const DOTS = 'https://openai.com/index/introducing-dots/';
const DOTS_HELP = 'https://help.openai.com/en/articles/20001530-getting-started-with-your-dot';
const GROK = 'https://x.ai/news/introducing-grok-bot';
const GROK_PRICING = 'https://x.ai/pricing';

export default {
    id: 424,
    title: 'ChatGPT Dots vs Grok Bot (2026): Which Always-On AI Agent Wins?',
    seoTitle: 'ChatGPT Dots vs Grok Bot (2026): Price, Access, Limits',
    seoDescription: 'ChatGPT dots vs Grok Bot compared: launch, who can get them, price ($100+ Pro vs $30 Premium), computer, approvals, and teams. Checked Oct 22, 2026.',
    excerpt: 'OpenAI\'s dots and xAI\'s Grok Bot are both always-on AI agents with their own cloud computer. Dots come with ChatGPT Pro and Business Premium; Grok Bot is listed from the $30 Premium plan. Here is how they compare, and when a business needs something else.',
    author: 'Dooza Team',
    date: '2026-10-22',
    modifiedDate: '2026-10-22',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'Comparison',
    tags: ['ChatGPT Dots', 'Grok Bot', 'OpenAI', 'xAI', 'AI Agents', 'Always-On Agents', 'Dooza Crew'],
    image: '/blog/dooza-crew-vs-grok.png',
    imageAlt: 'Watercolor illustration of a shop owner weighing a single chat app on a phone against a small team of AI helpers at laptops',
    slug: 'chatgpt-dots-vs-grok-bot',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'comparison', label: 'Side-by-side table' },
        { id: 'dots', label: 'ChatGPT dots' },
        { id: 'grok-bot', label: 'Grok Bot' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'business', label: 'For a small business' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is the difference between ChatGPT dots and Grok Bot?', answer: 'Both are always-on AI agents with their own cloud computer. ChatGPT dots (OpenAI, September 29, 2026) give you one primary dot included in Pro or Business Premium, reachable in ChatGPT, Slack and Teams. Grok Bot (xAI, beta since August 11, 2026) lets you run many Bots at once that coordinate in group chats, and is listed from the $30 Premium plan.' },
        { question: 'Which is cheaper, ChatGPT dots or Grok Bot?', answer: 'Grok Bot is listed from xAI\'s Premium plan at $30 a month. Your first dot is included in ChatGPT Pro, which starts at $100 a month, or Business Premium at $100 to $125 per user a month (checked October 22, 2026).' },
        { question: 'Can I use ChatGPT dots in the UK or Europe?', answer: 'Not on Pro yet: OpenAI says dots roll out to Pro users in markets excluding the European Economic Area, Switzerland and the UK. Business Premium users can get dots in supported ChatGPT regions, subject to workspace eligibility.' },
        { question: 'Can ChatGPT dots or Grok Bot call customers?', answer: 'Not as far as we found. OpenAI says a dot "cannot initiate calls to you at launch"; xAI\'s launch post and pricing page do not mention outbound calls or a phone number for the Bot.' },
        { question: 'Do both ask for approval before acting?', answer: 'Yes. Dots use built-in rules and Custom Rules to allow, require approval for or block actions. Grok Bots "only come back when something needs your approval", and sensitive actions can go through Auto Review.' },
    ],
    content: `<p><em>Checked October 22, 2026, against OpenAI's dots launch post and help center, xAI's Grok Bot launch post and x.ai/pricing. Both products are new and change fast; re-check before you buy.</em></p>

<h2 id="short-answer">ChatGPT dots vs Grok Bot: the short answer</h2>
<p><strong>Both are always-on AI agents with their own cloud computer that come back to you for approval. Pick ChatGPT dots if you already pay for ChatGPT Pro or Business Premium, live where Pro dots are available, and want one personal agent across ChatGPT, Slack and Teams. Pick Grok Bot if you want a cheaper entry ($30 Premium) and several Bots working in parallel. If you run a small business and need AI employees that work with your staff, look at Dooza Crew.</strong></p>

<h2 id="comparison">ChatGPT dots vs Grok Bot: side by side</h2>
<table><thead><tr><th></th><th>ChatGPT dots</th><th>Grok Bot</th></tr></thead><tbody>
<tr><td>Launched</td><td>September 29, 2026</td><td>August 11, 2026 (beta)</td></tr>
<tr><td>Own computer</td><td>Own cloud computer and browser; can use your laptop if you allow it</td><td>Bots "share a computer of their own in the cloud"</td></tr>
<tr><td>How many agents</td><td>One primary dot today; "teams of dots" are a future plan</td><td>Many Bots at once; they message each other and coordinate in group chats</td></tr>
<tr><td>Where you talk to it</td><td>ChatGPT (desktop, web, mobile app), Slack, Teams; texting is a US Pro beta</td><td>Desktop and iOS at launch</td></tr>
<tr><td>Approvals</td><td>Built-in rules plus Custom Rules: allow, require approval or block</td><td>Comes back "when something needs your approval"; Auto Review for sensitive actions</td></tr>
<tr><td>Learning</td><td>Learns your preferences; does read-only "proactive research"</td><td>Remembers conversations; learns a workflow by watching you once</td></tr>
<tr><td>Calls to customers</td><td>Not mentioned for customers; a dot "cannot initiate calls to you at launch"</td><td>Not mentioned in the launch post or pricing</td></tr>
<tr><td>Price</td><td>Included in Pro ($100-$500/month) or Business Premium ($100-$125/user)</td><td>From $30/month (Premium); Super $100, Ultra $200; Teams from $30/user</td></tr>
<tr><td>Availability limits</td><td>Pro: not in the EEA, Switzerland or UK; Enterprise beta off by default</td><td>Beta; enterprise waitlist at launch</td></tr>
</tbody></table>

<h2 id="dots">ChatGPT dots</h2>
<p>OpenAI calls dots ${src(DOTS, '"remarkably capable, always-on agents built to handle everything"')}. Each one is powered by GPT‑6 Astra, has its own cloud computer, connects to over 4,000 apps through plugins, and keeps working between conversations. You can open its computer at any time to inspect the work or take over, and set Custom Rules for what it can share, purchase or access.</p>
<p>Limits at launch, from ${src(DOTS_HELP, 'OpenAI\'s help center')}: Pro dots are for users aged 18 and older outside the European Economic Area, Switzerland and the UK; a dot cannot initiate calls to you; you cannot give it its own standalone email address; and dots are not supported on mobile web.</p>

<h2 id="grok-bot">Grok Bot</h2>
<p>xAI launched Grok Bot on August 11, 2026 as ${src(GROK, '"AI teammates you can give real work to"')}. Bots sign into the tools you already use and work across apps, inboxes and websites, ${src(GROK, '"including platforms with no clean API or MCP"')}. xAI describes a chief-of-staff Bot managing specialists for inbox, expenses, recruiting or operations, and you can show a Bot a job once so it saves it as a routine.</p>
<p>Before you buy: Grok Bot launched in beta on desktop and iOS, enterprise users were put on a waitlist, and its usage is ${src(GROK, '"separate from your Grok and Cursor plans"')}.</p>

<h2 id="pricing">Pricing</h2>
<ul>
<li><strong>ChatGPT dots:</strong> no separate price. Your first dot is included in Pro ($100, $200 or $500 a month) or Business Premium ($100 per user a month billed annually, $125 monthly). Conversations with your dot don't count toward ChatGPT usage limits; tasks it starts in Codex or ChatGPT Work do.</li>
<li><strong>Grok Bot:</strong> ${src(GROK_PRICING, 'x.ai/pricing')} lists it from Premium at $30 a month; Super is $100 and Ultra $200 a month with more usage; Teams starts at $30 per user a month. The $8 Plus plan does not list Grok Bot.</li>
</ul>

<h2 id="business">What if you run a small business?</h2>
<p>Dots and Grok Bot are personal agents: they work in your apps on your behalf. If you want a team instead, <strong>Dooza Crew</strong> gives you a team of AI employees, each with its own computer and a real browser, working with your staff in one chat; you watch every step live in chat, and before it clicks Send or Pay, it asks you: Approve, Edit or Reject. It is free for 7 days, then $49 a month per organization (unlimited users and agents, no per-seat fee) with $20 of AI usage included.</p>
<p>Full comparisons: <a href="/blog/dooza-crew-vs-chatgpt-dots">Dooza Crew vs ChatGPT dots</a>, <a href="/blog/dooza-crew-vs-grok-bot">Dooza Crew vs Grok Bot</a>, <a href="/blog/dooza-crew-vs-chatgpt-work">Dooza Crew vs ChatGPT Work</a> and <a href="/blog/dooza-crew-vs-manus">Dooza Crew vs Manus</a>.</p>
<p><a href="${CREW}">Try Dooza Crew free for 7 days</a> or <a href="/book">book a 30-minute call</a>.</p>`,
};
