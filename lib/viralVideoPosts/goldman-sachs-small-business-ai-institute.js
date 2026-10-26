import { yt, videoCredit } from './helpers';

const VIDEO_ID = 'jZ_ZBjtiIh0';
const VIDEO_TITLE = 'Goldman Sachs spends big to give small businesses an AI boost';

const NBC = 'https://www.nbcnews.com/business/ceo-interviews/goldman-sachs-small-business-ai-institute-rcna604621';
const GS_10KSB = 'https://www.goldmansachs.com/citizenship/10000-small-businesses/';
const NBC_VIDEO = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=goldman-sachs-small-business-ai';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 455,
    title: 'Goldman Sachs Small Business AI Institute: What Owners Should Know',
    seoTitle: 'Goldman Sachs Small Business AI Institute, Explained',
    seoDescription: 'Goldman Sachs put $500M into 10,000 Small Businesses and a new AI institute with OpenAI, Google, Anthropic and Meta. What it is, the 86% vs 15% gap, and what to do.',
    excerpt: 'Goldman Sachs launched a Small Business AI Institute inside a $500 million expansion of 10,000 Small Businesses. Its own survey says 86% of graduates use AI but only 15% have it in core operations. Here is what the program is and how to close that gap.',
    author: 'Dooza Team',
    date: '2026-10-26',
    modifiedDate: '2026-10-26',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'AI News',
    tags: ['Goldman Sachs', 'Small Business', 'AI Adoption', '10,000 Small Businesses', 'OpenAI', 'Anthropic', 'Dooza Video'],
    image: '/blog/goldman-sachs-small-business-ai.png',
    imageAlt: 'Watercolor illustration of a small shop owner at a counter learning to use a laptop with a friendly AI helper, a bank building in the background',
    slug: 'goldman-sachs-small-business-ai-institute',
    video: {
        name: VIDEO_TITLE,
        description: 'NBC News on Goldman Sachs expanding its 10,000 Small Businesses program by $500 million and launching a Small Business AI Institute with OpenAI, Google, Anthropic and Meta, with a precision machine shop and a laundromat owner on how they use AI.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-22',
    },
    tocData: [
        { id: 'what-it-is', label: 'What Goldman announced' },
        { id: 'the-gap', label: 'The 86% vs 15% gap' },
        { id: 'in-the-video', label: 'How the owners in the video use AI' },
        { id: 'close-the-gap', label: 'How to move AI into core operations' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>On October 22, 2026, Goldman Sachs launched a Small Business AI Institute as part of a $500 million expansion of its 10,000 Small Businesses program, and said it will partner with Google, Anthropic, OpenAI and Meta to give small businesses AI training and tools, per ${a(NBC, 'NBC News')}. The number that matters for owners is in Goldman's own survey: 86% of its graduates use AI, but just 15% have fully integrated it into their core operations. Most businesses have tried AI. Few have handed it real, repeat work.</p>
<ul>
<li><strong>The money.</strong> $500 million to expand 10,000 Small Businesses, Goldman's program for educating and supporting entrepreneurs.</li>
<li><strong>The institute.</strong> A new Small Business AI Institute, with Google, Anthropic, OpenAI and Meta as partners for training and tools.</li>
<li><strong>The survey.</strong> More than 2,400 graduates answered: 86% use AI, up from 56% in 2024; 15% have it fully in core operations.</li>
<li><strong>The takeaway.</strong> Using a chatbot is not the same as running a process on AI. The gap is in the second step.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'NBC News', channelUrl: 'https://www.youtube.com/@NBCNews', uploadDate: 'October 22, 2026', views: '3,047' })}

<h2 id="what-it-is">What did Goldman Sachs announce?</h2>
<p>10,000 Small Businesses is Goldman's long-running program for small business owners (${a(GS_10KSB, 'program page')}). The October 2026 announcement adds $500 million to it and creates the Small Business AI Institute. ${a(NBC, 'NBC News')} reports that Goldman will "partner with Google, Anthropic, OpenAI and Meta to provide AI training and tools to small businesses," and that OpenAI CEO Sam Altman issued a statement for the launch.</p>
<p>In the ${a(NBC_VIDEO, 'NBC segment')}, the message to owners is blunt: "You've got to embrace new technology always, because if you're not embracing it, trying to figure out, trying to figure out how it can make your businesses better, there's a real chance that you can fall behind."</p>
<p>What we could not confirm: NBC does not say how an owner applies to the new institute or what each AI partner will deliver. Check Goldman's ${a(GS_10KSB, '10,000 Small Businesses page')} for application details before you plan around it.</p>

<h2 id="the-gap">What does the 86% vs 15% gap mean?</h2>
<p>Goldman surveyed more than 2,400 graduates of its program. ${a(NBC, 'NBC News')} reports that 86% were using AI in their businesses, up from 56% in 2024, and "just 15% of them said they had fully integrated AI into their core operations."</p>
<p>Keep the sample in mind. These are graduates of a growth program, so they are likely ahead of the average small business. Even in that group, about 7 in 10 use AI without having it fully built into their core operations. In plain terms, they ask a chatbot for help, but the bookkeeping, follow-ups, scheduling and supplier checks still wait for a person.</p>
<p>That is the gap the institute is aimed at. It is also where most of the time savings are, because a one-off answer saves minutes while a process that runs every day saves hours.</p>

<h2 id="in-the-video">How do the owners in the video use AI?</h2>
<p>NBC visits two businesses, and they sit at two different stages.</p>
<ul>
<li><strong>A precision machine shop.</strong> Mike DiMarino of Linda Tool makes parts for airplanes, electronics and industrial machines. He lists the pressure: "material costs, tariffs, labor increase, insurance increases, utility increases." He hopes AI will help control costs and says it "can help us plan" and "manage tools," but he does not see it replacing his people: "Machines are expensive. People are priceless."</li>
<li><strong>A laundromat and dry cleaner.</strong> Owner Rochelle Balanzat uses AI to go through her chat messages and emails, read financial reports, and run parts of her pickup and delivery system. She is testing an AI video version of herself that staff can talk to, even in Spanish. She has not put AI chat in front of customers yet, because she worries it will turn them off.</li>
</ul>
<p>Both owners use AI to back up their staff, not to replace them. That matches what the survey suggests: owners are open to AI, but careful about where it touches customers.</p>

<h2 id="close-the-gap">How do you move AI into your core operations?</h2>
<p>You do not need a program to start. Use this five-step plan on one process at a time.</p>
<ol>
<li><strong>Pick one repeat task that eats an hour a day.</strong> Good first picks: answering routine emails, chasing unpaid invoices, logging orders, or checking supplier prices.</li>
<li><strong>Write the steps down as if for a new hire.</strong> Where the information comes from, what to do, and what "done" looks like.</li>
<li><strong>Keep a human on the risky step.</strong> Anything that sends money or speaks to a customer gets a person's yes first. That is how Balanzat handles customer-facing AI today.</li>
<li><strong>Run it for two weeks and count.</strong> Hours saved, errors caught, tasks finished. If the numbers are not there, change the task, not just the tool.</li>
<li><strong>Then add the next process.</strong> "Fully integrated" is a stack of small processes that each run on their own.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>${a(CREW, 'Dooza Crew')} is built for that second step. You tell Dooza, your master agent, the job in plain words from the web or your phone; it plans it, builds the helper agents it needs (a researcher, a writer, an outreach agent) and reports back. Each agent has its own computer and browser in a private, isolated workspace, and you watch every step live in chat.</p>
<p>It is free for 7 days (card required), then $49 a month per organization with unlimited users and agents, and AI usage included with a hard spending cap. ${a(CREW, 'Try Dooza Crew free for 7 days')}.</p>`,
    faqData: [
        { question: 'What is the Goldman Sachs Small Business AI Institute?', answer: 'It is a new institute Goldman Sachs launched on October 22, 2026 as part of a $500 million expansion of its 10,000 Small Businesses program. Goldman said it will partner with Google, Anthropic, OpenAI and Meta to provide AI training and tools to small businesses, per NBC News.' },
        { question: 'How much is Goldman Sachs investing in small business AI?', answer: 'Goldman announced a $500 million expansion of 10,000 Small Businesses, which includes launching the Small Business AI Institute.' },
        { question: 'How many small businesses use AI?', answer: 'In Goldman\'s survey of more than 2,400 graduates of its small business program, 86% said they use AI, up from 56% in 2024. Only 15% said AI is fully integrated into their core operations. The sample is program graduates, not all small businesses.' },
        { question: 'How do I apply to the Goldman Sachs AI program for small businesses?', answer: 'NBC News did not publish application details. Check the 10,000 Small Businesses page on goldmansachs.com for current eligibility and how to apply.' },
        { question: 'How can a small business start integrating AI into operations?', answer: 'Pick one repeat task that takes an hour a day, write the steps down, keep a person approving anything that sends money or reaches customers, run it for two weeks and measure hours saved, then add the next process.' },
    ],
};

export default post;
