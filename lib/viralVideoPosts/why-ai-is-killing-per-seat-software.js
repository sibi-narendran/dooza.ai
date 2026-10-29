import { yt } from './helpers';

const VIDEO_ID = 'H3MtcG9mXEg';
// Live YouTube title (oEmbed, checked 2026-10-29). Working title was "Why AI Is Killing Per-Seat Software".
const VIDEO_TITLE = 'Outcome-Based Pricing for AI Agents (Per-Seat Is Dying)';
const CHECKED = 'October 29, 2026';

const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const INTERCOM = 'https://www.intercom.com/pricing';
const ZENDESK = 'https://www.zendesk.com/pricing/';
const SALESFORCE = 'https://www.salesforce.com/agentforce/pricing/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza-blog&amp;utm_medium=video-post&amp;utm_content=why-ai-is-killing-per-seat-software';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 536,
    title: 'Is Per-Seat Software Pricing Dying? No, AI Adds a Second Meter',
    seoTitle: 'Is Per-Seat Pricing Dying? AI Adds a Second Meter',
    seoDescription: 'Not yet. Intercom, Zendesk and Salesforce still sell seats, but AI agents now add a second meter: you pay per outcome on top. What changed and what it means.',
    excerpt: 'Per-seat pricing is not dead, but it is no longer the only meter. Support vendors still sell seats and now charge per AI outcome on top. Here is what our video says, what the pricing pages show, and why counting seats stops measuring value when agents do the work.',
    author: 'Dooza Team',
    date: '2026-10-29',
    modifiedDate: '2026-10-29',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['AI Pricing', 'Per-Seat Pricing', 'Outcome-Based Pricing', 'AI Agents', 'SaaS', 'Dooza Video'],
    image: '/blog/why-ai-is-killing-per-seat-software.jpg',
    imageAlt: 'Soft watercolor illustration of an office desk with an empty chair, a software invoice listing seats, and a second line for finished AI tasks',
    slug: 'why-ai-is-killing-per-seat-software',
    video: {
        name: VIDEO_TITLE,
        description: 'Why per-seat software pricing is under pressure now that AI agents do the work: Intercom, Zendesk and Salesforce add a meter for AI outcomes beside their seats, and what buyers and sellers should ask next.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-28',
    },
    tocData: [
        { id: 'what-the-video-says', label: 'What the video says' },
        { id: 'second-meter', label: 'Seats plus a second meter' },
        { id: 'our-take', label: 'Our take' },
        { id: 'what-to-ask', label: 'What to ask your vendors' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
        { id: 'sources', label: 'Sources' },
    ],
    content: `<p>Per-seat software pricing is not dying yet, but it is no longer the only thing you pay for. Now that AI agents do part of the work, vendors like Intercom, Zendesk and Salesforce still sell seats and add a second meter on top that charges for what the AI gets done.</p>
<ul>
<li><strong>Seats are still here.</strong> ${a(ZENDESK, 'Zendesk')} says its pricing is "primarily seat-based (per agent, per month)", and ${a(SALESFORCE, 'Salesforce')} still offers "per-user licensing" for Agentforce (both checked ${CHECKED}).</li>
<li><strong>A second meter sits beside them.</strong> Intercom lists "Fin AI Agent $0.99 per outcome" on plans priced from $29 to $132 per seat a month, per ${a(INTERCOM, 'intercom.com/pricing')} (checked ${CHECKED}).</li>
<li><strong>The unit is changing.</strong> AI is billed for results, such as a resolved customer issue, not for a person logging in.</li>
<li><strong>Our take.</strong> When agents do the work, counting human seats stops measuring value. A small team running many agents breaks the per-seat model.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published October 28, 2026. Narrated by an AI voice with AI illustrations; sources below. <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="what-the-video-says">What does the video say?</h2>
<p>The video explains why the old seat deal is under strain. These points come straight from its narration.</p>
<ul>
<li><strong>Seats assumed a person does the work.</strong> The video says per-seat pricing "had one hidden assumption. A human does the work and the software only helps."</li>
<li><strong>That assumption is breaking.</strong> In its words: "That deal is breaking. And the reason is simple. The person in the chair is starting to be software."</li>
<li><strong>Support moved first.</strong> It describes Intercom's Fin charging for "each customer issue it resolves", and says Zendesk "announced the same idea": customers pay only for the issues the AI resolves on its own.</li>
<li><strong>Buyers need a new question.</strong> "What exactly am I paying for? And what do I pay when nothing gets solved?"</li>
<li><strong>The summary.</strong> "Seats counted people. AI does more of the work. So the price is moving from people to results."</li>
</ul>
<p>One line in the video says none of the three vendors "counts chairs." That is true of their AI meters, not of their whole bill. All three still sell seats, as the next section shows.</p>

<h2 id="second-meter">Are seats going away, or is a second meter being added?</h2>
<p>A second meter is being added. The pricing pages we checked on ${CHECKED} all keep seats and add usage on top.</p>
<table><thead><tr><th>Vendor</th><th>Seats still sold?</th><th>AI meter beside the seats</th><th>Source</th></tr></thead><tbody>
<tr><td>Intercom</td><td>Yes: plans from $29 to $132 per seat a month</td><td>"Fin AI Agent $0.99 per outcome"</td><td>${a(INTERCOM, 'intercom.com/pricing')}, checked ${CHECKED}</td></tr>
<tr><td>Zendesk</td><td>Yes: "primarily seat-based (per agent, per month)"</td><td>Billed per "automated resolution"</td><td>${a(ZENDESK, 'zendesk.com/pricing')}, checked ${CHECKED}</td></tr>
<tr><td>Salesforce Agentforce</td><td>Yes: "per-user licensing"</td><td>Consumption-based pricing "with Flex Credits or Conversations"</td><td>${a(SALESFORCE, 'salesforce.com/agentforce/pricing')}, checked ${CHECKED}</td></tr>
</tbody></table>
<p>Intercom puts it plainly on its own page: "Beyond seats, pricing is usage-based for certain features," with Fin AI Agent listed per outcome. So the bill now has two parts: one that counts people, and one that counts finished work.</p>

<h2 id="our-take">Why does counting seats stop working when agents do the work?</h2>
<p>This section is our take, not a sourced fact. A seat price makes sense when each person is one unit of work. Hire more people, buy more seats, and the vendor grows with you.</p>
<p>AI agents break that link. A small team can run many agents, and the agents do work that used to need more hires. If the price counts only humans, the vendor is paid for the few people logging in, not for the work the agents finish. That is why vendors are adding a meter for results, and why we expect that meter to matter more over time while seats stay on the bill.</p>

<h2 id="what-to-ask">What should you ask your software vendors?</h2>
<p>If you buy software with AI built in, read the bill as two meters. Ask these four questions.</p>
<ol>
<li><strong>What counts as one outcome?</strong> Get the vendor's exact definition in writing.</li>
<li><strong>What do I pay when nothing gets solved?</strong> This is the question the video ends on for buyers.</li>
<li><strong>Do I still pay for every seat?</strong> Check whether the AI meter replaces seats or sits on top of them.</li>
<li><strong>Is there a cap?</strong> A usage meter with no limit can grow faster than a seat count.</li>
</ol>
<p>If you sell software, the video's advice is direct: "You'll need to show results a customer can count."</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>${a(CREW, 'Dooza Crew')} gives your business AI employees that work on their own computer and browser. Before an agent clicks Send or Pay, it asks you: Approve, Edit or Reject. Nothing goes out until you say so.</p>
<p>Crew is not priced per seat. It is priced per organization, with unlimited users and agents, and it is usage-based, so adding a teammate or another agent does not add a seat fee. Sign-ups currently open in waves; you can ${a(CREW, 'join Dooza Crew here')}.</p>

<h2 id="sources">Sources</h2>
<ul>
<li>${a(VIDEO_URL, `“${VIDEO_TITLE}”`)}, Dooza on YouTube, published October 28, 2026. Quotes checked against the transcript on ${CHECKED}.</li>
<li>${a(INTERCOM, 'Intercom pricing')}: "Fin AI Agent $0.99 per outcome", plans from $29 to $132 per seat a month, and "Beyond seats, pricing is usage-based for certain features." Checked ${CHECKED}.</li>
<li>${a(ZENDESK, 'Zendesk pricing')}: "primarily seat-based (per agent, per month)" and billing per "automated resolution." Checked ${CHECKED}.</li>
<li>${a(SALESFORCE, 'Salesforce Agentforce pricing')}: "consumption-based pricing, with Flex Credits or Conversations, or per-user licensing." Checked ${CHECKED}.</li>
<li>${a(CREW, 'Dooza Crew')}: Dooza's own product, per organization pricing with unlimited users and agents.</li>
</ul>`,
    faqData: [
        { question: 'Is per-seat software pricing dying because of AI?', answer: 'Not yet. Intercom, Zendesk and Salesforce still sell seats or per-user licenses. What is changing is that AI adds a second meter on top that charges for outcomes, such as a resolved customer issue (pricing pages checked October 29, 2026).' },
        { question: 'How does Intercom charge for its AI agent?', answer: 'Intercom lists "Fin AI Agent $0.99 per outcome" on plans priced from $29 to $132 per seat a month, per intercom.com/pricing, checked October 29, 2026. The outcome charge comes on top of the seats.' },
        { question: 'What is outcome-based pricing for AI agents?', answer: 'You pay for a result the AI finishes, such as a resolved support issue, instead of paying for a person who logs in. Today it usually sits beside seat pricing rather than replacing it.' },
        { question: 'Do I pay per seat with Dooza Crew?', answer: 'No. Dooza Crew is priced per organization, with unlimited users and agents, and it is usage-based. Sign-ups currently open in waves.' },
    ],
};

// For review only: the site builds these from post.video and post.faqData (see lib/blogData.js).
export const jsonLd = [
    {
        '@context': 'https://schema.org',
        '@type': 'VideoObject',
        name: post.video.name,
        description: post.video.description,
        thumbnailUrl: [post.video.thumbnailUrl],
        embedUrl: post.video.embedUrl,
        uploadDate: post.video.uploadDate,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: post.faqData.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    },
];

export default post;
