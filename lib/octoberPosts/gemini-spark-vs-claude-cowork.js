// Gemini Spark vs Claude Cowork (Sibi 2026-10-22 16:50: comparison posts vs general AI agents, "I need to get discovered").
// Demand: Google Suggest "gemini spark vs" -> "claude cowork" first, then "claude", "cowork" (Oct 22, 2026).
// Spark facts: content/research/gemini-spark-facts-2026-10-22.md (numbered Facts only; checker PASS on the live
// dooza-crew-vs-gemini-spark post). Claude facts: content/research/claude-agent-facts-2026-10-22.md (numbered Facts only;
// checker re-curled pricing, Cowork help article and Chrome post). Same quotes as the two Crew posts; nothing UNCONFIRMED.
// Dooza Crew claims only as on the homepage (components/home/HomeCrew.jsx).

import { src } from './helpers';

const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=spark-vs-cowork';
const LAUNCH = 'https://blog.google/innovation-and-ai/products/gemini-app/next-evolution-gemini-app/';
const JULY = 'https://blog.google/innovation-and-ai/products/gemini-app/gemini-spark-updates-july-2026/';
const PLANS = 'https://blog.google/products-and-platforms/products/google-one/google-ai-subscriptions/';
const NOTES = 'https://support.google.com/gemini/answer/17171264';
const PRICING = 'https://claude.com/pricing';
const COWORK = 'https://support.claude.com/en/articles/13345190-get-started-with-cowork';
const CHROME = 'https://claude.com/blog/cowork-chrome-side-panel';

export default {
    id: 430,
    title: 'Gemini Spark vs Claude Cowork (2026): Which AI Agent to Use?',
    seoTitle: 'Gemini Spark vs Claude Cowork (2026): Compared',
    seoDescription: 'Gemini Spark vs Claude Cowork compared: where each runs, what it does on its own, approvals, plans and price, and when a business needs a team instead.',
    excerpt: 'Google\'s Gemini Spark and Anthropic\'s Claude Cowork are both AI agents that keep working when you close your laptop. Spark lives in Gmail, Docs and Chrome and comes with Google AI plans; Cowork works on your files and browser and comes with paid Claude plans from $20 a month.',
    author: 'Dooza Team',
    date: '2026-10-22',
    modifiedDate: '2026-10-22',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'Comparison',
    tags: ['Gemini Spark', 'Claude Cowork', 'Google Gemini', 'Claude', 'AI Agents', 'Personal AI Agents', 'Dooza Crew'],
    image: '/blog/gemini-spark-vs-claude-cowork.png',
    imageAlt: 'Watercolor illustration of a person comparing AI agents on a laptop and two phones, next to a small team of AI helpers who sort mail and update a calendar',
    slug: 'gemini-spark-vs-claude-cowork',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'comparison', label: 'Side-by-side table' },
        { id: 'spark', label: 'Gemini Spark' },
        { id: 'cowork', label: 'Claude Cowork' },
        { id: 'pricing', label: 'Pricing' },
        { id: 'pick', label: 'Which should you pick?' },
        { id: 'business', label: 'What if you run a small business?' },
        { id: 'faq', label: 'FAQ' },
    ],
    faqData: [
        { question: 'What is the difference between Gemini Spark and Claude Cowork?', answer: 'Gemini Spark is Google\'s 24/7 personal AI agent inside the Gemini app. It runs on Google Cloud and is built around Gmail, Docs, Slides and Chrome. Claude Cowork is the agent mode in Anthropic\'s Claude for knowledge work. Its sessions continue in the cloud, but local files, browser use and computer use go through the Claude Desktop app on your Mac or Windows computer.' },
        { question: 'Which is cheaper, Gemini Spark or Claude Cowork?', answer: 'Claude Cowork comes with paid Claude plans, starting with Pro at $20 a month billed monthly (claude.com/pricing, October 22, 2026). Gemini Spark comes with Google AI plans: it launched under AI Ultra at $100 and $200 a month, and in July 2026 Google began rolling it out to Google AI Pro subscribers in over 160 additional countries. Which Google plan includes Spark depends on your country.' },
        { question: 'Do Gemini Spark and Claude Cowork work when my laptop is closed?', answer: 'Yes for both, with a limit for Cowork. Google says Spark keeps working in the background even when you close your laptop or lock your phone. Anthropic says Cowork work continues if you close your laptop and scheduled tasks run in the cloud, but tasks that need your local files or browser need the Claude Desktop app open and connected.' },
        { question: 'Can Gemini Spark or Claude Cowork spend money?', answer: 'Both ask first. Google says Spark is designed to ask you before high-stakes actions like spending money or sending emails, and in Chrome it hands payments back to you. Anthropic says Claude still asks before irreversible or costly actions like making a purchase.' },
        { question: 'Can Gemini Spark or Claude Cowork make phone calls?', answer: 'Phone calls are not mentioned on Google\'s Spark pages or Anthropic\'s Cowork, Chrome and pricing pages (checked October 22, 2026).' },
        { question: 'Which is better for a small business team?', answer: 'Both are built mainly for one person\'s work. Claude has Team plans for 2 to 150 seats, with Cowork in the premium seat. If you want AI employees with their own computer and browser, working in one chat with your staff, look at Dooza Crew: free to try.' },
    ],
    content: `<p><em>Checked October 22, 2026, against Google's Gemini Spark announcements and release notes, claude.com/pricing, Anthropic's Cowork help article and its Claude in Chrome announcement. Plans change; re-check before you buy.</em></p>

<h2 id="short-answer">Gemini Spark vs Claude Cowork: the short answer</h2>
<p><strong>Both are AI agents that keep working after you close your laptop. Pick Gemini Spark if your work lives in Gmail, Docs and Chrome and you pay for Google AI. Pick Claude Cowork if you want an agent for documents, files and browser work on your own computer, with paid Claude plans from $20 a month. Neither page mentions phone calls, and both are built mainly for one person.</strong></p>
<ul>
<li><strong>Gemini Spark</strong>: in Google's words, ${src(LAUNCH, '"a 24/7 personal AI agent that helps you navigate your digital life."')}</li>
<li><strong>Claude Cowork</strong>: in Anthropic's words, it ${src(COWORK, '"brings Claude Code\'s agentic capabilities to knowledge work beyond coding."')}</li>
</ul>

<h2 id="comparison">Gemini Spark vs Claude Cowork: side by side</h2>
<table><thead><tr><th></th><th>Gemini Spark</th><th>Claude Cowork</th></tr></thead><tbody>
<tr><td>Made by</td><td>Google (announced May 19, 2026)</td><td>Anthropic</td></tr>
<tr><td>Where it runs</td><td>Google Cloud virtual machines</td><td>Cloud sessions; local files and browser use through the Claude Desktop app</td></tr>
<tr><td>Where you use it</td><td>Spark tab in the Gemini app; Gemini macOS app</td><td>Claude on web, desktop (Mac, Windows) and mobile</td></tr>
<tr><td>Works with</td><td>Gmail, Docs, Slides; Chrome with your logins; connectors like Canva, OpenTable and Instacart</td><td>Your files, your browser through Claude in Chrome, connectors to your apps</td></tr>
<tr><td>Recurring work</td><td>Recurring tasks and triggers</td><td>Scheduled tasks that run in the cloud with no device online</td></tr>
<tr><td>Approvals</td><td>Asks before spending money or sending emails</td><td>Manual, Auto or Skip modes; asks before a purchase</td></tr>
<tr><td>Phone calls</td><td>Not mentioned (Oct 22, 2026)</td><td>Not mentioned (Oct 22, 2026)</td></tr>
<tr><td>Age</td><td>18 and over</td><td>18 or the local minimum age, whichever is higher</td></tr>
<tr><td>Price</td><td>Google AI Ultra ($100 and $200 a month at launch); later Google AI Pro in over 160 more countries</td><td>Pro $20/month; Max from $100/month; Team premium seat $125/month (monthly billing)</td></tr>
</tbody></table>

<h2 id="spark">Gemini Spark</h2>
<p>Google introduced Spark at Google I/O as an agent inside the Gemini app. It launched ${src(NOTES, '"in Beta to Google AI Ultra subscribers aged 18 and over in the United States"')}.</p>
<ul>
<li><strong>Runs in the cloud.</strong> ${src(LAUNCH, '"because it is a cloud-based agent, Spark keeps working in the background even when you close your laptop or lock your phone."')}</li>
<li><strong>Built into Google's apps.</strong> It is ${src(LAUNCH, '"deeply integrated with the Workspace tools you rely on daily, like Gmail, Docs, Slides and more."')}</li>
<li><strong>Errands in Chrome.</strong> ${src(JULY, '"with your permission, Spark can use your logged-in accounts and saved passwords to handle tedious web errands"')}.</li>
<li><strong>Asks first.</strong> It is ${src(LAUNCH, '"designed to ask you first before performing high-stakes actions like spending money or sending emails."')}</li>
</ul>

<h2 id="cowork">Claude Cowork</h2>
<p>Cowork is the agent mode in Claude, and the pricing page now says ${src(PRICING, '"Claude Cowork is now just Claude."')} It is ${src(COWORK, '"available to paid Claude plans (Pro, Max, Team, Enterprise) only."')}</p>
<ul>
<li><strong>Keeps going.</strong> ${src(COWORK, '"Work continues if you close your laptop, and you can open the same session from any surface."')}</li>
<li><strong>Scheduled tasks.</strong> ${src(COWORK, '"Scheduled tasks run in the cloud, with no device online."')}</li>
<li><strong>Your computer for local work.</strong> For local files, browser use and computer use you need ${src(COWORK, '"The Claude Desktop app for macOS or Windows, open and connected."')}</li>
<li><strong>Approvals.</strong> In Manual mode ${src(COWORK, '"Claude pauses and asks for approval for actions."')} In the browser, ${src(CHROME, '"Claude still asks before certain irreversible or costly actions, like making a purchase or sharing personal data."')}</li>
</ul>

<h2 id="pricing">Pricing</h2>
<p><strong>Gemini Spark</strong> comes with a Google AI subscription. At launch Google listed ${src(PLANS, '"Gemini Spark (AI Ultra $100 and $200; U.S. only)"')}, and on July 30, 2026 it said ${src(JULY, '"We\'re rolling out access for Google AI Pro subscribers in over 160 additional countries starting today"')}. Check Google's plans page for your country.</p>
<p><strong>Claude Cowork</strong> (${src(PRICING, 'claude.com/pricing')}, October 22, 2026): not on the Free plan. <strong>Pro</strong> $20 a month billed monthly, or $17 a month billed annually. <strong>Max</strong> from $100 a month. <strong>Team</strong>, for 2 to 150 people: the premium seat, which includes Claude Code and Claude Cowork, is $125 a month billed monthly or $100 billed annually.</p>

<h2 id="pick">Which should you pick?</h2>
<ul>
<li><strong>Pick Gemini Spark if</strong> your email, documents and calendar are in Google, you want errands done in Chrome with your logins, and your Google AI plan includes it in your country.</li>
<li><strong>Pick Claude Cowork if</strong> you work in files and documents on a Mac or Windows computer, want scheduled tasks in the cloud, and want to choose how much Claude does without asking.</li>
</ul>

<h2 id="business">What if you run a small business?</h2>
<p>Spark and Cowork are built mainly for one person's own work, and neither mentions phone calls. A small business usually needs leads called back, appointments confirmed and customers answered on several channels, with staff able to see and approve the work.</p>
<p>That is what Dooza Crew does. A master agent creates a team of AI employees, each with its own computer and a real browser, working with your staff in one chat; you watch every step live in chat, and before it clicks Send or Pay, it asks you: Approve, Edit or Reject. Free to try.</p>
<p>More comparisons: <a href="/blog/dooza-crew-vs-gemini-spark">Dooza Crew vs Gemini Spark</a>, <a href="/blog/dooza-crew-vs-claude">Dooza Crew vs Claude Cowork</a> and <a href="/blog/chatgpt-dots-vs-meta-muse">ChatGPT dots vs Meta Muse</a>.</p>
<p><a href="${CREW}">Try Dooza Crew free</a> or <a href="/book">book a 30-minute call</a>.</p>`,
};
