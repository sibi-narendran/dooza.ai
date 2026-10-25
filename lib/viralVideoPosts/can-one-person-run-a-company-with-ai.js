import { yt, doozaSummary } from './helpers';
// Our video DCYuKe8Jdpo (Trajan, @thedooza, 2026-10-23). Facts re-fetched Oct 23, 2026 from the primary sources below;
// Trajan's fact pack: /home/trajan/learned/knowledge/learnings/research/2026-10-08-one-person-ai-company-facts.md.
// Dooza Crew claims only as on crew.dooza.ai and doc/positioning.md (Crew exception).

const VIDEO_ID = 'DCYuKe8Jdpo';
const VIDEO_TITLE = 'Can One Person Run a Company With AI Employees?';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=can-one-person-run-a-company-with-ai';

const FORTUNE = 'https://fortune.com/2024/02/04/sam-altman-one-person-unicorn-silicon-valley-founder-myth/';
const INSTAGRAM = 'https://www.kqed.org/news/61601/facebook-to-buy-instagram-for-1-billion';
const WHATSAPP = 'https://www.npr.org/sections/thetwo-way/2014/02/19/279763675/facebook-will-buy-whatsapp-message-service-for-19-billion';
const GLOBES = 'https://en.globes.co.il/en/article-1001513267';
const YNET = 'https://www.ynetnews.com/business/article/bkqk6tylzg';
const LEVELS = 'https://levels.io';
const NATION = 'https://www.thenation.com/article/society/matthew-gallagher-silicon-valley-high-agency/';
const TAC = 'https://arxiv.org/abs/2412.14161';
const VEND1 = 'https://www.anthropic.com/research/project-vend-1';
const VEND2 = 'https://www.anthropic.com/research/project-vend-2';
const KLARNA = 'https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396';
const MIT = 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/';
const CENSUS = 'https://www.census.gov/newsroom/press-releases/2025/business-owner-characteristics.html';
const BLS_REC = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm';
const BLS_BOOK = 'https://www.bls.gov/ooh/office-and-administrative-support/bookkeeping-accounting-and-auditing-clerks.htm';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const TRANSCRIPT = `Somewhere in Silicon Valley there is a group chat of tech CEOs with a betting pool. The bet: in what year will a single person, with no employees, build a company worth a billion dollars? Sam Altman, the head of OpenAI, talked about it on stage, and said it would have been unimaginable without AI. The story you have probably heard goes like this. AI employees will do the work. One founder with a laptop will do what used to take a hundred people. Hiring is over. Except, it is now late 2026, and nobody has collected on that bet. Which raises a better question. Can one person really run a company with AI employees? And if so, what kind of company? Quick note: the narrator you are hearing is an AI voice and the pictures are AI illustrations, which is fitting for this one. Every number on screen has a source. Let's look at the scoreboard. First, tiny teams with huge outcomes are not new. In 2012, Facebook agreed to buy Instagram for one billion dollars. Instagram had thirteen employees. Two years later Facebook bought WhatsApp for nineteen billion. It had fifty-five. No AI agents were involved. What those teams had was software that copies itself for free. One app, a hundred million users, almost no extra cost per user. So the real question is not whether a small team can be valuable. It is whether AI can do the work that still needs people: the support tickets, the sales calls, the books, the phone. Here is the closest thing to a winner so far. In 2025, a developer in Israel named Maor Shlomo built an app-building tool called Base44, with no outside money. Six months later, the website company Wix bought it for about eighty million dollars, at the time with six employees. The extra payments since then could take the founder above a hundred and fifty million, by one Israeli newspaper's estimate. But look closer. Six people, not one. And running an AI product is expensive: early this year Base44's gross margin was reported near zero, because every user's request costs computing power. AI did not remove the payroll. It turned part of it into a cloud bill. Then there is Pieter Levels, maybe the most famous solo founder on the internet. No employees. He runs apps like Photo AI and says his products together make over three million dollars a year. That is self-reported, not audited, but it is real enough to inspire a whole movement of one-person software businesses. And this spring, the New York Times profiled a telehealth company heading for one point eight billion dollars with about two people. Critics quickly pointed out that the number was a revenue projection, that 2025 sales were closer to four hundred million, and that a brother and contractors did a lot of the work. The closest thing to a solo unicorn turned out to be a team, plus a very good story. So what happens when you actually hand a business to an AI? Researchers have tried. At Carnegie Mellon, a team built a fake software company and gave AI agents a hundred and seventy-five real office tasks. The best agent in their latest round finished thirty percent on its own. And Anthropic, the company that makes the Claude AI, let its model run a small shop in its own office. It found suppliers and restocked well. It also sold metal cubes below cost, handed out discounts when people asked nicely, and one day insisted it was a human wearing a blue blazer and a red tie. It did not make money. In the second round, with better models, an AI boss, and written procedures, the losing weeks mostly disappeared. But it still nearly signed an onion futures contract, which is actually illegal in the United States. Anthropic's own conclusion: it still needs a lot of human support. The big companies are learning the same thing. Klarna, the payments firm, said in 2024 that AI was doing the work of seven hundred support agents. In 2025 its CEO said the focus on cost had led to lower quality, and Klarna started hiring humans again. MIT researchers studied company AI projects in 2025 and found only about five percent of pilots showed a measurable profit impact by their definition. That number got repeated as AI fails ninety-five percent of the time, which is not what it said. The same report found that bought tools worked about twice as often as home-built ones, and the best returns were in boring back-office work. Now flip the question around. In America there are already more than thirty million businesses with no employees at all. One person companies are not the future. They are the most common kind of business in the country. But the average one makes around fifty-nine thousand dollars a year in receipts. And most stay that size, for a simple reason. The owner is also the receptionist, the bookkeeper, the scheduler and the salesperson. Every hour on the phone is an hour not doing the work people pay for. And those are exactly the jobs AI does best right now: narrow, repetitive, with clear rules. A receptionist in the US earns a median of about thirty-eight thousand dollars a year. A bookkeeping clerk, about fifty thousand. The government expects both jobs to shrink. So, can one person run a company with AI employees? Yes, if the AI does the narrow jobs and the person does the judgment. Not yet, if you expect the AI to be the company. The billion-dollar bet is still open. The fifty-nine-thousand-dollar problem is being solved right now. That is the bet we make at Dooza: an admin assistant for a small business, where AI does the email, the paperwork and the data entry, and a real person checks the work. If that's you, the link is in the description. If this cut through the hype for you, subscribe. And tell me in the comments: which job in your business would you hand to an AI first?`;

const post = {
    id: 443,
    title: 'Can One Person Run a Company With AI Employees? The Evidence',
    seoTitle: 'Can One Person Run a Company With AI Employees?',
    seoDescription: 'Yes for narrow jobs like email, paperwork and books, with a human doing the judgment. No verified one-person $1B company exists yet. The evidence.',
    excerpt: 'Tech CEOs have a betting pool on the first one-person billion-dollar company. Nobody has won. Here is what the closest cases, two AI-run business experiments and government data say one person with AI can really do.',
    author: 'Dooza Team',
    date: '2026-10-23',
    modifiedDate: '2026-10-23',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'AI News',
    tags: ['One Person Company', 'AI Employees', 'Solo Founder', 'AI Agents', 'Project Vend', 'Small Business', 'Dooza Video', 'Dooza Crew'],
    image: '/blog/can-one-person-run-a-company-with-ai.png',
    imageAlt: 'Silhouette of a person with a laptop standing on a stack of gold coins in a dark city street, with the words $1B alone?',
    slug: 'can-one-person-run-a-company-with-ai',
    video: {
        name: VIDEO_TITLE,
        description: 'Tech CEOs bet on the year one person builds a billion-dollar company. We check the closest cases (Instagram, WhatsApp, Base44, Pieter Levels, the NYT "solo unicorn"), two experiments that handed a business to AI, and what 30.4 million US businesses with no employees tell us.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        contentUrl: `https://www.youtube.com/watch?v=${VIDEO_ID}`,
        duration: 'PT7M6S',
        uploadDate: '2026-10-23',
        transcript: TRANSCRIPT,
    },
    tocData: [
        { id: 'short-answer', label: 'The short answer' },
        { id: 'tiny-teams', label: 'Tiny teams are not new' },
        { id: 'closest-cases', label: 'The closest cases' },
        { id: 'ai-runs-business', label: 'When an AI runs a business' },
        { id: 'big-companies', label: 'What big companies learned' },
        { id: 'real-one-person', label: 'The real one-person companies' },
        { id: 'what-to-hand-off', label: 'What to hand to AI first' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'transcript', label: 'Video transcript' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Yes, one person can run a company with AI doing the narrow jobs: email, paperwork, data entry, scheduling. No, not if you expect the AI to be the company. As of October 2026 there is no verified billion-dollar company run by one person, and the two best-known experiments that handed a real shop to an AI still needed humans to step in.</p>
<ul>
<li><strong>The bet is still open.</strong> Sam Altman ${a(FORTUNE, 'told an interviewer')} his tech CEO group chat has "this betting pool for the first year that there is a one-person billion-dollar company."</li>
<li><strong>Tiny teams with huge outcomes predate AI.</strong> ${a(INSTAGRAM, 'Instagram had 13 employees')} when Facebook agreed to buy it for $1 billion in 2012.</li>
<li><strong>The closest real case had six people.</strong> Wix paid an ${a(GLOBES, 'initial $80 million for Base44')}, which had six employees and no outside funding.</li>
<li><strong>AI agents finish a minority of office work alone.</strong> The best agent in Carnegie Mellon's ${a(TAC, 'TheAgentCompany')} completed 30% of tasks autonomously.</li>
<li><strong>One-person businesses are already normal.</strong> The US had ${a(CENSUS, '30.4 million nonemployer businesses in 2023')}, with $1.8 trillion in receipts.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published October 23, 2026. Narrated by an AI voice with AI illustrations; sources below and in the video description. <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>. Full transcript at the end of this page.</p>

<h2 id="short-answer">Can one person run a company with AI employees?</h2>
<p>For a small business, yes, if the AI does narrow, repetitive jobs with clear rules and the person does the judgment: pricing, promises to customers, anything that sends money or makes commitments. For a fully autonomous company that runs itself, not yet. Every serious test so far shows AI agents still make costly mistakes when left alone for long, open-ended work.</p>

<h2 id="tiny-teams">Are tiny teams with huge outcomes new?</h2>
<p>No. Facebook agreed to buy Instagram for $1 billion in April 2012, when it had ${a(INSTAGRAM, '13 employees')}. In February 2014, Facebook bought WhatsApp for ${a(WHATSAPP, '$19 billion')}; it had 55 employees. Neither used AI agents.</p>
<p>What they had was software that copies itself for almost nothing: one app, many millions of users, little extra cost per user. So the real question is not whether a small team can be valuable. It is whether AI can do the work that still needs people: support tickets, sales calls, books and the phone.</p>

<h2 id="closest-cases">What are the closest cases to a one-person AI company?</h2>
<h3>Base44: six people, about $80 million</h3>
<p>Maor Shlomo built Base44, an app-building tool, in Israel. In June 2025 Wix agreed to an ${a(GLOBES, 'initial payment of $80 million')} plus later milestone payments. Base44 had six employees and had not raised any money, according to Globes.</p>
<p>Two caveats. It was six people, not one. And running an AI product is expensive: Base44's gross margin was near zero at the start of 2026, ${a(YNET, 'expected to reach about 60%')} in the second half of the year. Every user request costs computing power. AI did not remove the payroll; it turned part of it into a cloud bill.</p>
<h3>Pieter Levels: solo, self-reported revenue</h3>
<p>Pieter Levels is probably the best-known solo founder online. ${a(LEVELS, 'His site')} says he builds startups "by myself", and one of his posts says Photo AI made $105,000 a month in revenue. The figures are self-reported, not audited, but they inspired a movement of one-person software businesses.</p>
<h3>The "solo unicorn" that was a team</h3>
<p>In April 2026 the New York Times profiled Medvi, a telehealth company. Per founder Matthew Gallagher, it was ${a(NATION, 'on track to $1.8 billion in sales this year')} with a staff of two: him and his younger brother. Critics, including The Nation, pointed out the number is the founder's own sales projection, not a valuation or audited revenue, and that "one person" was really a small team.</p>

<h2 id="ai-runs-business">What happens when an AI runs a business?</h2>
<p>Researchers have tried it, twice in ways worth knowing.</p>
<p><strong>TheAgentCompany (Carnegie Mellon and others).</strong> The team built a simulated software company with ${a(TAC, '175 realistic professional tasks')}. In the latest version of the paper (September 2025), the most competitive agent completed 30% of tasks on its own. The authors say harder long-horizon tasks are still beyond current systems. Newer 2026 models may score higher; we have not seen a published rerun.</p>
<p><strong>Project Vend (Anthropic).</strong> Anthropic let its Claude model run a small shop in its office. In ${a(VEND1, 'phase one')} it found suppliers and restocked well. It also sold specialty metal cubes at a loss because it quoted prices without research, gave discounts when staff asked, and at one point claimed to be a human wearing a blue blazer and a red tie. It did not make money.</p>
<p>In ${a(VEND2, 'phase two')}, with stronger models, an AI "CEO" agent and written procedures, weeks with negative profit margin were largely eliminated. It still nearly agreed to a contract to buy onions at a locked-in future price, which is illegal in the US under a 1958 law. Anthropic's conclusion: the shop still needed "a great deal of human support".</p>

<h2 id="big-companies">What have big companies learned?</h2>
<p>Klarna said in February 2024 that its ${a(KLARNA, 'AI could do the work of 700 customer service agents')}. In 2025 its CEO said the AI was cheaper but produced "lower quality" output, and Klarna started rehiring humans so customers can always reach a person.</p>
<p>An MIT report in 2025 found only about ${a(MIT, '5% of enterprise generative AI pilots')} achieved rapid revenue acceleration, by its definition. That got repeated as "AI fails 95% of the time", which is not what it measured. The same report found tools bought from specialist vendors succeeded about 67% of the time, internal builds about a third as often, and the biggest return came from back-office automation.</p>

<h2 id="real-one-person">Where are the real one-person companies?</h2>
<p>Everywhere. The US Census Bureau counted ${a(CENSUS, '30.4 million nonemployer businesses in 2023')}, with $1.8 trillion in receipts. Nonemployers have no paid employees. That works out to about $59,000 in receipts per business on average (our arithmetic: $1.8 trillion divided by 30.4 million), and many are side businesses.</p>
<p>Most stay small for a simple reason: the owner is also the receptionist, the bookkeeper, the scheduler and the salesperson. Every hour on admin is an hour not spent on the work customers pay for. Those jobs are what AI does best today: narrow, repetitive, rule-based.</p>
<table><thead><tr><th>Job</th><th>US median pay (May 2025)</th><th>Projected employment, 2025-2035</th></tr></thead><tbody>
<tr><td>Receptionist</td><td>${a(BLS_REC, '$38,010 a year')}</td><td>-2%</td></tr>
<tr><td>Bookkeeping, accounting and auditing clerk</td><td>${a(BLS_BOOK, '$50,670 a year')}</td><td>-6%</td></tr>
</tbody></table>
<p>Source: US Bureau of Labor Statistics, Occupational Outlook Handbook. Pay is wages only; an employer's full cost is higher.</p>

<h2 id="what-to-hand-off">What should one person hand to AI first?</h2>
<ol>
<li><strong>Pick one narrow, repeated job.</strong> Inbox triage and follow-ups, quotes from a template, data entry, research lists. Project Vend went wrong where the AI had open-ended freedom over prices and deals.</li>
<li><strong>Write the procedure down.</strong> In Anthropic's second phase, written procedures and checklists were part of what cut the losing weeks.</li>
<li><strong>Keep a human sign-off on anything that sends or pays.</strong> Discounts, contracts and payments are where the AI shopkeeper lost money.</li>
<li><strong>Buy before you build.</strong> In MIT's data, bought tools worked about twice as often as home-built ones. For a step-by-step setup, see our <a href="/blog/one-person-business-with-ai">guide to building a one-person business with AI</a>.</li>
<li><strong>Watch the AI bill.</strong> Base44's near-zero margin is a reminder that AI usage costs money; set a spending cap.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>If you want to try running part of your business with AI agents yourself, <strong>Dooza Crew</strong> is built for one person: a lead agent plans the job and builds helper agents (a researcher, a writer, an outreach agent) as you need them. They browse the web and write files in a private, isolated workspace, and you chat with them on the web or your phone. Before an agent sends or pays, it asks you in chat: <strong>Approve, Edit or Reject</strong>, and each account has a hard cap on AI spend. Seats are limited, with a waitlist when full. 7-day free trial (card needed), then $49 a month per organization (unlimited users and agents, no per-seat fee), with AI usage included and a hard spending cap: <a href="${CREW}">crew.dooza.ai</a>.</p>
<p>Prefer to hand the admin off entirely? Dooza Managed does your email, documents, spreadsheets and research, and a real person checks the work (<a href="/pricing">pricing</a>).</p>

<h2 id="transcript">Video transcript</h2>
<details><summary>Read the full transcript of “${VIDEO_TITLE}”</summary>
<p>${TRANSCRIPT}</p>
</details>`,
    faqData: [
        { question: 'Can one person run a company with AI employees?', answer: 'Yes, for narrow jobs such as email, paperwork, data entry and scheduling, with the person doing the judgment and signing off on anything that sends money or makes commitments. Not yet as a fully autonomous company: in Anthropic\'s Project Vend the AI-run shop still needed a great deal of human support.' },
        { question: 'Has anyone built a one-person billion-dollar company?', answer: 'Not that has been verified, as of October 2026. Sam Altman has said his tech CEO group chat has a betting pool on the year it happens. The closest cases were small teams: Base44 had six employees when Wix agreed to pay an initial $80 million.' },
        { question: 'How much office work can AI agents do on their own?', answer: 'In Carnegie Mellon\'s TheAgentCompany benchmark of 175 tasks in a simulated software company, the most competitive agent completed 30% autonomously (paper version of September 2025). Newer models may score higher.' },
        { question: 'How many one-person businesses are there in the US?', answer: 'The Census Bureau counted 30.4 million nonemployer businesses in 2023, with $1.8 trillion in receipts. That is about $59,000 per business on average, by our arithmetic.' },
        { question: 'What did Klarna learn from replacing support staff with AI?', answer: 'Klarna said in 2024 that AI could do the work of 700 customer service agents. In 2025 its CEO said the AI output was lower quality, and Klarna began rehiring human agents so customers can always reach a person.' },
    ],
};

export default post;
