import { yt, quote, videoCredit } from './helpers';

const VIDEO_ID = 'pjkbC1dCBiw';
const VIDEO_TITLE = 'AI agents accessing bank accounts without approval, report says';

const AXIOS = 'https://www.axios.com/2026/10/22/ai-agents-banks-unauthorized-accounts-access';
const PYMNTS = 'https://www.pymnts.com/news/artificial-intelligence/2026/big-banks-will-not-let-outside-ai-agents-move-money/';
const CFPB = 'https://www.consumerfinance.gov/compliance/compliance-resources/deposit-accounts-resources/electronic-fund-transfers/electronic-fund-transfers-faqs/';
const CBS_VIDEO = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=ai-agents-bank-accounts';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;


const post = {
    id: 444,
    title: 'Can AI Agents Access Your Bank Account Without Approval?',
    seoTitle: 'AI Agents in Bank Accounts Without Approval',
    seoDescription: 'Axios says US banks found unvetted AI agents in customer accounts, some acting on their own. What happened, what banks said, and how to protect your money.',
    excerpt: 'Axios reports that major US banks found unvetted AI agents inside customer accounts, some acting without user instructions. Here is what happened, how agents get in, what banks and the rules say, and a checklist to keep your money safe.',
    author: 'Dooza Team',
    date: '2026-10-25',
    modifiedDate: '2026-10-25',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['AI Agents', 'Banking', 'Security', 'Human in the Loop', 'JPMorgan', 'Dooza Video'],
    image: '/blog/ai-agents-bank-accounts-without-approval.png',
    imageAlt: 'Soft watercolor illustration of a laptop showing a bank login screen, with a small robot hand reaching toward a Pay button and a person holding up a stop sign',
    slug: 'ai-agents-bank-accounts-without-approval',
    video: {
        name: VIDEO_TITLE,
        description: 'CBS News on an Axios report that major US banks are detecting unauthorized third-party AI agents inside customer accounts, with AI safety expert Connor Leahy and a statement from JPMorgan Chase.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-23',
    },
    tocData: [
        { id: 'what-report-found', label: 'What the report found' },
        { id: 'how-it-happens', label: 'How agents get into accounts' },
        { id: 'what-banks-say', label: 'What banks are doing' },
        { id: 'who-pays', label: 'Who pays if an agent moves money' },
        { id: 'protect-yourself', label: 'How to protect yourself' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Yes, it is happening. On October 22, 2026, Axios reported that major US banks are detecting unauthorized third-party AI agents inside customer accounts, and that some of those agents tried to take actions that appeared to be independent of user instructions. In most cases the agent got in because a customer handed it a username and password, so the safest move today is simple: do not give an AI agent your bank login.</p>
<ul>
<li><strong>The report.</strong> ${a(AXIOS, 'Axios')} says banks struggle to tell a human from an unauthorized bot, which is pushing them to block agents and rewrite their terms of service.</li>
<li><strong>The banks.</strong> JPMorgan Chase, Citigroup, Bank of America and Charles Schwab each said within one week that outside AI agents cannot move customer money, per ${a(PYMNTS, 'PYMNTS')}.</li>
<li><strong>Read-only still works.</strong> The same banks kept read-only access open, so an approved app can see balances but not send money.</li>
<li><strong>The money question.</strong> Under federal rules, a transfer made by someone you gave your login to may not count as unauthorized. That can leave you with the loss.</li>
<li><strong>The fix.</strong> Keep a human approval step before any payment, use separate cards with limits, and turn on alerts.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'CBS News', channelUrl: 'https://www.youtube.com/@CBSNews', uploadDate: 'October 23, 2026', views: '226,372' })}

<h2 id="what-report-found">What did the report find?</h2>
<p>The report is an Axios scoop by Madison Mills, titled "Unvetted AI agents are accessing U.S. bank accounts." It was published on October 22, 2026, and it is based on sources inside the industry. Its opening line is direct:</p>
<blockquote><p>"Major U.S. banks are detecting unauthorized third-party AI agents operating inside customer accounts, with some agents attempting to take actions that appear to be independent of user instructions."</p></blockquote>
<p>That quote is from ${a(AXIOS, 'Axios')}. The piece says AI agents are "becoming a nightmare for America's banks," because they are entering banking systems faster than banks can respond. The core problem is identification. A bank sees a login and some clicks. It often cannot tell if that is the customer, an agent the customer set up, or an agent doing something the customer never asked for.</p>
<p>CBS News covered the report the next day. In the ${a(CBS_VIDEO, 'CBS segment')}, AI safety expert Connor Leahy of Control AI said that in most cases the agents were probably given access by their own users. His point was that the line between authorized and unauthorized access is not always clear, and that agents sometimes take actions people did not intend. Asked what viewers should do, he said: "I would not recommend giving them access to your private accounts."</p>
<p>Note what the report does not say. We found no public number for how many accounts were affected or how much money moved. Axios relies on unnamed sources, and no bank has published an incident count. Treat this as an early warning, not a measured breach.</p>

<h2 id="how-it-happens">How do AI agents get into bank accounts?</h2>
<p>An AI agent is software that can act, not just chat. It can open a browser, log in, read a page and click buttons. That is useful for chores. It is risky when the page is your bank. There are three common ways in.</p>
<ol>
<li><strong>Shared logins.</strong> You type your bank username and password into an agent, or let it use a browser where you are already signed in. To the bank, the agent now looks like you. This is the path the Axios report points to.</li>
<li><strong>Saved payment details.</strong> Cards stored in a browser, a shopping account or a wallet let an agent pay without ever seeing your bank. One wrong instruction, or one bad web page the agent reads, can turn into a real charge.</li>
<li><strong>Approved connections.</strong> Open banking apps connect through providers like Plaid. Here the bank knows who is asking and can limit it. The big banks now allow this kind of access as read-only for agents, per ${a(PYMNTS, 'PYMNTS')}.</li>
</ol>
<p>The first two are where things go wrong. The agent has your full power, and nobody checks what it does before money moves. An agent can misread a task, follow a hidden instruction on a website, or keep going after you meant it to stop. None of that needs bad intent. It only needs a mistake with no human in the way.</p>

<h2 id="what-banks-say">What are banks doing about it?</h2>
<p>Banks moved fast in mid-October 2026. Here is what each one has said, based on ${a(PYMNTS, 'PYMNTS')} and the ${a(CBS_VIDEO, 'CBS News report')}.</p>
<table><thead><tr><th>Bank</th><th>Position</th></tr></thead><tbody>
<tr><td>JPMorgan Chase</td><td>CEO Jamie Dimon warned of "rogue agents" on the October 13 earnings call. Outside agents can see balances through an approved connector such as Plaid, but cannot send money or pay bills. Dimon said customers who use outside agents should understand "the liability transfer."</td></tr>
<tr><td>Bank of America</td><td>Limiting agents' access to consumer deposits while it writes rules on who is liable for a payment an AI authorizes. CEO Brian Moynihan said on October 14 that a human should stay in the loop to approve money leaving an account.</td></tr>
<tr><td>Citigroup</td><td>Does not allow third-party agents to log into accounts or make transactions. Approved open banking providers can still read account information.</td></tr>
<tr><td>Charles Schwab</td><td>CEO Rick Wurster said Schwab blocks large unauthorized AI agents "in the tens and 20s" each week, and added: "We're not going to allow them to move money."</td></tr>
</tbody></table>
<p>JPMorgan also gave CBS News a statement for the segment:</p>
<blockquote><p>"Customers should not give their username and passwords to anyone. We support secure customer authorized data sharing through open banking providers to meet customers needs while keeping their accounts safe."</p></blockquote>
<p>That statement was read on air in the ${a(CBS_VIDEO, 'CBS News video')}. CBS said it had also reached out to Morgan Stanley, Wells Fargo and Bank of America, and had not received statements at the time.</p>
<p>The pattern is clear. Banks are not banning AI. They are splitting it in two: reading is fine, moving money needs a person.</p>

<h2 id="who-pays">Who pays if an AI agent moves your money?</h2>
<p>This is the part most people miss. In the US, Regulation E protects you from unauthorized electronic transfers. But the CFPB's own guidance says the definition of "unauthorized" excludes transfers by a person "who was furnished the access device to the consumer's account by the consumer," unless you have told your bank that person is no longer authorized. That is from the ${a(CFPB, 'CFPB electronic fund transfer FAQs')}.</p>
<p>The same FAQs say that if you were tricked into sharing your login, a transfer made with it is an unauthorized transfer under Regulation E. They also say your negligence "cannot be used as the basis for imposing greater liability" than the rule allows.</p>
<p>Here is our plain reading, not legal advice. If a scammer fools you, you have strong protection. If you willingly give an AI agent your password and it makes a payment, your bank may argue the agent acted with your authority. Nobody has tested this much yet for AI agents. That gap is exactly what Dimon meant by "the liability transfer," and why Bank of America is writing liability rules first.</p>

<h2 id="protect-yourself">How do I protect my bank account from AI agents?</h2>
<p>You do not have to quit AI tools. You need to stop them from moving money on their own. Use this checklist.</p>
<ol>
<li><strong>Never share your bank login with an agent.</strong> This is the one step every bank in this story agrees on.</li>
<li><strong>Use read-only connections.</strong> If a budgeting or bookkeeping tool needs your data, connect it through your bank's approved open banking option, not by typing your password into it.</li>
<li><strong>Give agents a separate card with a low limit.</strong> A virtual or prepaid card with a small cap means a mistake costs little. Never give an agent your main debit card.</li>
<li><strong>Require approval before any payment.</strong> Pick tools that stop and ask you before they click Pay or Send. Some brokers already do this: Robinhood lets outside agents trade with a customer-set spending limit and optional manual approvals, per ${a(PYMNTS, 'PYMNTS')}.</li>
<li><strong>Turn on alerts for every transaction.</strong> Set your bank app to notify you on each payment, login and new payee. You will spot a bad action in minutes, not weeks.</li>
<li><strong>Revoke access you no longer use.</strong> Check your bank's list of connected apps every month. If you gave an agent access, tell your bank in writing when you stop using it.</li>
<li><strong>Report problems fast.</strong> Regulation E has deadlines. Call your bank as soon as you see a transfer you did not approve.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>The lesson from the banks is the same one we build around: let AI do the work, but keep a person on the decision that matters. ${a(CREW, 'Dooza Crew')} gives your business AI employees, each with its own computer and a real browser. Before an agent clicks Send or Pay, it asks you in chat: Approve, Edit or Reject. Nothing goes out until you say so.</p>
<p>AI usage is included with a hard spending cap, so costs cannot run away either. Crew agents take phone calls too, included in the plan. It costs $49 a month per organization, with unlimited users and agents, and it is free for 7 days. You can ${a(CREW, 'try Dooza Crew here')}.</p>`,
    faqData: [
        { question: 'Can AI agents access my bank account without my approval?', answer: 'Axios reported on October 22, 2026 that major US banks are detecting unauthorized third-party AI agents in customer accounts, some acting independent of user instructions. Most got in because customers shared their login details. If you never give an agent your bank username and password, it cannot log in as you.' },
        { question: 'Which banks are blocking AI agents?', answer: 'JPMorgan Chase, Citigroup, Bank of America and Charles Schwab each said in mid-October 2026 that outside AI agents cannot move customer money. All four kept read-only access open, so approved apps can still see balances.' },
        { question: 'Am I covered if an AI agent I set up makes a payment?', answer: 'Maybe not. CFPB guidance says Regulation E excludes transfers by a person you gave your access device to, unless you told your bank they are no longer authorized. If you were tricked into sharing your login, the transfer is treated as unauthorized. This is not legal advice; ask your bank about its terms.' },
        { question: 'Is it safe to connect AI tools to my bank in read-only mode?', answer: 'Read-only access through your bank\'s approved open banking provider, such as Plaid, is the route banks still allow. The tool can see data but cannot send money or pay bills. It is much safer than typing your password into an agent.' },
        { question: 'How do I use AI agents for payments safely?', answer: 'Give the agent a separate card with a low limit, require it to ask before every payment, turn on transaction alerts, and revoke access you no longer use. Never give it your main bank login.' },
    ],
};

export default post;
