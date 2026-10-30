// Dooza Crew vs Grok Bot (Sibi 2026-10-22 16:50 "compare to grok bot ... I need to get discovered").
// Targets: "grok bot vs", "grok bot review", "grok bot pricing", "grok bot alternative", "grok bot for small business".
// Grok Bot facts: x.ai/news/introducing-grok-bot and x.ai/pricing, read by curl Oct 22, 2026 (quotes verbatim);
// content/research/chatgpt-agent-grok-facts-2026-10-22.md. Dooza Crew claims only as on the homepage (HomeCrew.jsx).

import { src } from './helpers';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=crew-vs-grok-bot';
const LAUNCH = 'https://x.ai/news/introducing-grok-bot';
const PRICING = 'https://x.ai/pricing';

export default {
    id: 421,
    title: 'Dooza Crew vs Grok Bot (2026): AI Teammates for a Small Business',
    seoTitle: 'Dooza Crew vs Grok Bot (2026): Price, Computer, Team Chat',
    seoDescription: 'Grok Bot vs Dooza Crew: own computer, approvals, channels, team chat and price ($30 Premium vs, $5 to start). Checked Oct 22, 2026.',
    excerpt: 'Grok Bot gives you always-on AI teammates with their own computer. Dooza Crew does too, and adds your staff in the same chat. Here is how they compare for a small business.',
    author: 'Dooza Team',
    date: '2026-10-22',
    modifiedDate: '2026-10-22',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'Comparison',
    tags: ['Grok Bot', 'xAI', 'Grok', 'Grok Bot Alternative', 'Dooza Crew', 'AI Employees', 'AI Agents'],
    image: '/blog/dooza-crew-vs-grok.png',
    imageAlt: 'Watercolor illustration of a shop owner weighing a single chat app on a phone against a small team of AI helpers at laptops with a calendar and an envelope',
    slug: 'dooza-crew-vs-grok-bot',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'comparison', label: 'Side-by-side table' },
        { id: 'grok-bot', label: 'What Grok Bot does well' },
        { id: 'crew', label: 'What Dooza Crew does' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'which', label: 'Which one to pick' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is Grok Bot?', answer: 'Grok Bot is xAI\'s team of always-on AI agents, launched in beta on August 11, 2026. xAI says the Bots "have their own computer, work inside tools and apps like you do, and keep working 24/7", and only come back when something needs your approval.' },
        { question: 'How much does Grok Bot cost?', answer: 'On x.ai/pricing (checked October 22, 2026), Grok Bot is listed from the Premium plan at $30 a month. Super is $100 and Ultra is $200 a month with more usage; Teams starts at $30 per user a month. The $8 Plus plan does not list Grok Bot.' },
        { question: 'Is Dooza Crew a Grok Bot alternative?', answer: 'Yes. Both give you AI teammates with their own computer. Dooza Crew is built for small businesses: each AI employee has its own computer and browser, and your staff work with the AI employees in one group chat. It is $5 to start.' },
        { question: 'Can Grok Bot make phone calls to customers?', answer: 'xAI\'s launch post and pricing page do not mention outbound calls or a phone number for the Bot (checked October 22, 2026).' },
        { question: 'Does Grok Bot remember how I work?', answer: 'Yes, per xAI: Bots "remember conversations, learn how you like things done", and you can show a Bot a workflow once so it saves it as a routine.' },
        { question: 'Is Grok Bot available for businesses?', answer: 'At launch xAI said Grok Bot is in beta on desktop and iOS, and that enterprise users can join a waitlist. A Teams plan from $30 per user a month is listed on x.ai/pricing.' },
    ],
    content: `<p><em>Checked October 22, 2026, against xAI's Grok Bot launch post and x.ai/pricing, and the Dooza Crew page. Grok Bot is in beta and changes fast; re-check before you buy.</em></p>

<h2 id="short-answer">Dooza Crew vs Grok Bot: the short answer</h2>
<p><strong>Both give you AI teammates with their own computer. Pick Grok Bot if you already pay for Grok and want strong agents for your own inbox, CRM and routines. Pick Dooza Crew if you run a small business and want AI employees with their own computer and browser who work in one chat with your staff, where you watch every step live.</strong></p>
<ul>
<li><strong>Grok Bot</strong> (xAI, beta since August 11, 2026): Bots that ${src(LAUNCH, '"have their own computer, work inside tools and apps like you do, and keep working 24/7"')}. Listed from the $30 Premium plan.</li>
<li><strong>Dooza Crew</strong>: a master agent that hires a team of AI employees, each with its own computer and a real browser, working with your staff in one chat; you watch every step live in chat, and before it clicks Send or Pay, it asks you to approve. Start for $5.</li>
<li><strong>The big difference</strong> is who the agents talk to. Grok Bot works in your tools for you. Dooza Crew is a team of AI employees with their own computer and browser, working next to your staff in one group chat.</li>
</ul>
<p><a href="${CREW}">Start Dooza Crew for $5</a> or <a href="/book">book a 30-minute call</a>.</p>

<h2 id="comparison">Dooza Crew vs Grok Bot: side by side</h2>
<table><thead><tr><th></th><th>Dooza Crew</th><th>Grok Bot</th></tr></thead><tbody>
<tr><td>Own computer</td><td>Yes, each AI employee has its own computer and a real browser</td><td>Yes, Bots "share a computer of their own in the cloud"</td></tr>
<tr><td>Customer channels</td><td>A private chat app on web and phone, with your staff in the same chat</td><td>Works across your apps, inboxes and websites</td></tr>
<tr><td>Team</td><td>Your staff and AI employees in one group chat; anyone hands out jobs</td><td>Many Bots in parallel; Bots message each other and coordinate in group chats</td></tr>
<tr><td>Approvals</td><td>You watch every step live; before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat</td><td>Bots "only come back when something needs your approval"</td></tr>
<tr><td>Learning</td><td>You brief it in plain words, like a new hire</td><td>Remembers conversations; learns a workflow by watching you once</td></tr>
<tr><td>Price</td><td>Start for $5</td><td>From $30/month (Premium); Super $100, Ultra $200</td></tr>
</tbody></table>

<h2 id="grok-bot">What Grok Bot does well</h2>
<p>xAI launched Grok Bot on August 11, 2026 as ${src(LAUNCH, '"AI teammates you can give real work to"')}. The Bots sign into the tools you already use and work across apps, inboxes and websites, ${src(LAUNCH, '"including platforms with no clean API or MCP"')}. They finish jobs end to end and come back only when something needs your approval.</p>
<p>Three things stand out:</p>
<ul>
<li><strong>Many Bots at once.</strong> xAI describes a chief-of-staff Bot managing specialists for inbox, expenses, recruiting or operations. Bots can message each other and coordinate in group chats.</li>
<li><strong>Learn by watching.</strong> You can ask a Bot to follow along while you do a job; it saves your workflow as a routine and runs it on its own next time.</li>
<li><strong>Memory.</strong> Bots ${src(LAUNCH, '"remember conversations, learn how you like things done"')}.</li>
</ul>
<p>Before you buy: Grok Bot launched in beta, on desktop and iOS, and enterprise users were put on a waitlist. Its usage is ${src(LAUNCH, '"separate from your Grok and Cursor plans"')}, and xAI's pricing page shows usage multiples rather than a fixed number of tasks.</p>

<h2 id="crew">What Dooza Crew does</h2>
<p>Dooza Crew is built for the daily work of a small business. You type the job in plain words. Your master agent creates the AI employees the job needs and gives each one its own computer and a real browser.</p>
<p>Then you add your people. Staff and AI employees work in one group chat: anyone can hand out a job, see the work. You watch every step live in chat. Before it clicks Send or Pay, it asks you: Approve, Edit or Reject in chat.</p>
<ul>
<li><strong>Sales:</strong> answer new leads in minutes, book the meeting, follow up until they reply.</li>
<li><strong>Customer service:</strong> draft replies to customer email from your own docs, sent once you approve.</li>
<li><strong>Operations:</strong> chase invoices, update the spreadsheet, check every vendor portal.</li>
<li><strong>Marketing:</strong> write the blog post and the newsletter, post to social, watch what competitors charge.</li>
<li><strong>Admin:</strong> sort the inbox, keep the calendar, turn meeting notes into tasks for the right person.</li>
</ul>

<h2 id="pricing">Pricing</h2>
<p>${src(PRICING, 'x.ai/pricing')} (October 22, 2026) lists Grok Bot from <strong>Premium at $30 a month</strong>. <strong>Super</strong> is $100 a month and <strong>Ultra</strong> $200 a month, each with more usage. <strong>Teams</strong> starts at $30 per user a month. The $8 Plus plan does not list Grok Bot.</p>
<p><strong>Dooza Crew</strong> is $5 to start. Your desk is built in order; we email you the moment it is ready.</p>

<h2 id="which">Which one should you pick?</h2>
<ul>
<li><strong>Choose Grok Bot</strong> if you already use Grok or Cursor and want agents that run your own inbox, CRM and routines, and you are comfortable with a beta.</li>
<li><strong>Choose Dooza Crew</strong> if you want a team of AI employees with their own computer and browser, working next to your staff in one chat, where you watch every step live.</li>
<li><strong>Want it done for you?</strong> Dooza also builds and runs <a href="/done-for-you-ai-agents">custom AI agents</a> and an <a href="/ai-receptionist">AI answering service</a>.</li>
</ul>
<p>Comparing other agents too? See <a href="/blog/dooza-crew-vs-manus">Dooza Crew vs Manus</a>.</p>
<p><a href="${CREW}">Give your crew its first job, free</a>, or <a href="/book">book a 30-minute call</a>.</p>`,
};
