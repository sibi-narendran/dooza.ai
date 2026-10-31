// Facts: content/drafts/video-posts/ai-support-agent-vs-human-cost-facts.md (transcript = Trajan captions, sources opened October 31, 2026).
import { yt } from './helpers';

const VIDEO_ID = 'iITrKLv7yMQ';
// Live YouTube title (checked 2026-10-31).
const VIDEO_TITLE = '$2,100 a Month for a Support Agent. 99 Cents for a Fix. #Shorts';
const CHECKED = 'October 31, 2026';

const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const INTERCOM = 'https://www.intercom.com/pricing';
const KLARNA = 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/';
const EESEL = 'https://www.eesel.ai/blog/call-center-outsourcing-alternatives';
const ENTREPRENEUR = 'https://www.entrepreneur.com/business-news/%20klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396';
const SEAT_POST = '/blog/why-ai-is-killing-per-seat-software';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza-blog&amp;utm_medium=video-post&amp;utm_content=ai-support-agent-vs-human-cost';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 538,
    title: 'AI Support Agent vs Human Agent: What Does Each One Cost?',
    seoTitle: 'AI Support Agent vs Human Agent: What Does Each Cost?',
    seoDescription: 'An outsourced human agent starts around $1,400 to $2,100 a month. Intercom charges $0.99 per AI outcome. The break-even math, Klarna, and where humans win.',
    excerpt: 'An outsourced human support agent starts around $1,400 to $2,100 a month. An AI agent like Intercom Fin charges $0.99 per outcome. Here is the break-even math for a small business, what Klarna\'s numbers do and do not prove, and where humans still win.',
    author: 'Dooza Team',
    date: '2026-10-31',
    modifiedDate: '2026-10-31',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['AI Customer Support', 'Support Costs', 'Intercom Fin', 'Klarna', 'AI Agents', 'Dooza Video'],
    image: '/blog/ai-support-agent-vs-human-cost.jpg',
    imageAlt: 'Soft watercolor illustration of a balance scale with a monthly invoice on one side and a small stack of coins on the other, in front of a customer support desk',
    slug: 'ai-support-agent-vs-human-cost',
    video: {
        name: VIDEO_TITLE,
        description: 'What an outsourced human support agent costs per month versus an AI agent that charges per fixed issue, with Klarna as the big example.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-31',
    },
    tocData: [
        { id: 'the-math', label: 'The break-even math' },
        { id: 'klarna', label: 'What Klarna proves' },
        { id: 'walk-back', label: 'Klarna changed course' },
        { id: 'not-included', label: 'What the meter leaves out' },
        { id: 'humans-win', label: 'Where humans still win' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
        { id: 'sources', label: 'Sources' },
    ],
    content: `<p>An outsourced human support agent starts around $1,400 to $2,100 a month. An AI agent can charge by the result instead: Intercom lists "$0.99 per outcome" for its Fin AI Agent. On price alone, the AI wins until you reach roughly 1,400 to 2,100 fixed issues a month. Then the two cost about the same.</p>
<ul>
<li><strong>Human, outsourced.</strong> Influx "starts from $1,400/month in APAC" for its Talent as a Service plan and "$2,100/month per agent plus a Team Leader fee" for Managed Operations, per ${a(EESEL, 'eesel.ai')} (checked ${CHECKED}).</li>
<li><strong>AI, per result.</strong> "Fin is priced at $0.99 per outcome," per ${a(INTERCOM, 'intercom.com/pricing')} (checked ${CHECKED}).</li>
<li><strong>Break-even.</strong> About 1,414 outcomes a month against $1,400, and about 2,121 against $2,100. The math is below.</li>
<li><strong>Caveat.</strong> Price is not quality. Klarna, the biggest example, later said human support matters. See below.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), our own Short. Narrated by an AI voice with AI illustrations; sources below. <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-math">At what ticket volume does an AI agent cost the same as a human?</h2>
<p>Divide the human monthly cost by the AI price per outcome. That gives the number of fixed issues where the two bills match.</p>
<table><thead><tr><th>Human agent cost</th><th>AI price</th><th>Break-even</th></tr></thead><tbody>
<tr><td>$1,400 a month</td><td>$0.99 per outcome</td><td>1,400 / 0.99 = about 1,414 outcomes a month</td></tr>
<tr><td>$2,100 a month</td><td>$0.99 per outcome</td><td>2,100 / 0.99 = about 2,121 outcomes a month</td></tr>
</tbody></table>
<p>Below those numbers, the per-outcome meter is cheaper. Above them, the flat human cost is cheaper on paper. So if your business fixes fewer than about 1,400 issues a month, the meter is the cheaper bill.</p>
<p>Two limits on this math. First, the human prices are "starts from" prices for one agent from one outsourcing firm. Your real quote can be higher. Second, an "outcome" is the vendor's definition. Ask what counts before you rely on it.</p>

<h2 id="klarna">What do Klarna's numbers prove?</h2>
<p>They show what Klarna claimed, not what an independent audit found. In its ${a(KLARNA, 'press release of February 27, 2024')}, Klarna said "The AI assistant has had 2.3 million conversations, two-thirds of Klarna’s customer service chats" and "It is doing the equivalent work of 700 full-time agents." It also said customers "now resolve their errands in less than 2 mins compared to 11 mins previously." And it said the assistant was "estimated to drive a $40 million USD in profit improvement to Klarna in 2024."</p>
<p>Note the words "equivalent work" and "estimated." Those are Klarna's own figures, from a company announcing its own product launch. They are a useful signal that AI can take on a large share of routine chats. They are not proof that it will work the same way in your business.</p>

<h2 id="walk-back">Did Klarna change course later?</h2>
<p>Yes, in part. In May 2025, ${a(ENTREPRENEUR, 'Entrepreneur reported')} on a Bloomberg interview with Klarna CEO Sebastian Siemiatkowski. It quotes him saying "Really, investing in the quality of human support is the way of the future for us," and "there will always be a human if you want." The article describes Klarna as hiring human customer service staff again. It does not say Klarna dropped AI. Read it as a mix: AI for volume, people for quality.</p>

<h2 id="not-included">What does the per-outcome price leave out?</h2>
<p>The $0.99 is not your whole support bill. Three things sit outside it.</p>
<ul>
<li><strong>Seats, in some setups.</strong> Intercom's plans are priced per seat: Essential lists $29 (shown with a new-customer $19), Advanced is $85 and Expert is $132, each "per seat/mo" (checked ${CHECKED}). The page also says Fin can be used with your current helpdesk with "No seats required" for the standalone product. So whether you pay seats depends on how you buy it.</li>
<li><strong>Your own time.</strong> Someone must set up the answers, check the results and handle what the AI cannot.</li>
<li><strong>Issues the AI does not fix.</strong> You pay a person for those anyway. The savings only reach the share of tickets the AI actually resolves.</li>
</ul>
<p>For how seat and outcome pricing fit together, see our post on ${a(SEAT_POST, 'why per-seat software pricing is changing')}.</p>

<h2 id="humans-win">Where do human agents still win?</h2>
<p>This section is our view, not a sourced statistic. People still do better in a few places.</p>
<ul>
<li><strong>Angry or upset customers.</strong> They want to feel heard by a person.</li>
<li><strong>Refunds and exceptions.</strong> A human can judge a special case and approve money.</li>
<li><strong>Edge cases.</strong> Odd problems that no help article covers.</li>
</ul>
<p>The practical setup for a small business is AI for the repeat questions and a person for the hard ones.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>${a(CREW, 'Dooza Crew')} is AI employees for small business. Start for $5. If you want an AI support agent, Dooza Support is $300/month for up to 250 customer messages.</p>

<h2 id="sources">Sources</h2>
<ul>
<li>${a(VIDEO_URL, `“${VIDEO_TITLE}”`)}, Dooza on YouTube. Our own video.</li>
<li>${a(INTERCOM, 'Intercom pricing')}: "Fin is priced at $0.99 per outcome," plan prices per seat. Checked ${CHECKED}.</li>
<li>${a(EESEL, 'eesel.ai, 5 call center outsourcing alternatives worth considering in 2026')}: Influx prices. Checked ${CHECKED}.</li>
<li>${a(KLARNA, 'Klarna press release, February 27, 2024')}. Checked ${CHECKED}.</li>
<li>${a(ENTREPRENEUR, 'Entrepreneur, May 9, 2025')}: report on Klarna CEO's Bloomberg interview. Checked ${CHECKED}.</li>
<li>${a('https://dooza.ai/pricing', 'Dooza pricing')}: Dooza's own page.</li>
</ul>`,
    faqData: [
        { question: 'How much does an AI customer support agent cost compared to a human?', answer: 'An outsourced human agent starts around $1,400 to $2,100 a month (Influx, per eesel.ai). Intercom lists its Fin AI Agent at $0.99 per outcome. The two match at roughly 1,414 to 2,121 fixed issues a month (checked October 31, 2026).' },
        { question: 'How many resolved tickets make an AI agent as costly as a human?', answer: 'Divide the human cost by $0.99. $1,400 / 0.99 is about 1,414 outcomes a month. $2,100 / 0.99 is about 2,121. Below that, the AI meter is cheaper on price alone.' },
        { question: 'Did Klarna prove AI can replace human support agents?', answer: 'No. Klarna said its assistant did "the equivalent work of 700 full-time agents," but those are the company\'s own figures. In 2025 its CEO said "investing in the quality of human support is the way of the future for us," per Entrepreneur.' },
        { question: 'Is the $0.99 per outcome the full cost of an AI support agent?', answer: 'Not always. Intercom also sells plans per seat, from $29 per seat a month, and you need time to set up and check the AI. Ask what counts as an outcome and what you pay when it does not fix the issue.' },
        { question: 'When should a human handle a support ticket?', answer: 'Angry customers, refunds and unusual cases are best handled by a person. Let the AI take the repeat questions.' },
        { question: 'How much is Dooza Support?', answer: 'Dooza Support is $300/month for up to 250 customer messages.' },
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
