// Facts: content/drafts/video-posts/klarna-facts.md (transcript = Trajan captions, sources opened November 1, 2026).
import { yt } from './helpers';

const VIDEO_ID = '85TXT6E7ml8';
// Live YouTube title (checked 2026-11-01 via oEmbed).
const VIDEO_TITLE = 'Klarna Said AI Did 700 Agents\' Work. Then It Hired Humans Again. #Shorts';
const CHECKED = 'November 1, 2026';

const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const KLARNA = 'https://www.klarna.com/international/press/klarna-ai-assistant-handles-two-thirds-of-customer-service-chats-in-its-first-month/';
const CXTODAY = 'https://cxtoday.com/klarna-grapples-with-ai-led-customer-service-pivots-to-an-uber-type-of-setup';
const ENTREPRENEUR = 'https://www.entrepreneur.com/business-news/klarna-ceo-reverses-course-by-hiring-more-humans-not-ai/491396';
const FORTUNE_OCT = 'https://fortune.com/2025/10/10/klarna-ceo-sebastian-siemiatkowski-halved-workforce-says-tech-ceos-sugarcoating-ai-impact-on-jobs-mass-unemployment-warning/';
const FORTUNE_FEB = 'https://fortune.com/2026/02/17/klarnas-ceo-dario-amodei-ai-white-collar-workforce-shrink-2030/';
const COST_POST = '/blog/ai-support-agent-vs-human-cost';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza-blog&amp;utm_medium=video-post&amp;utm_content=klarna-ai-hired-humans-again';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 541,
    title: 'Klarna\'s AI Did 700 Agents\' Work. Then It Hired Humans Again',
    seoTitle: 'Klarna\'s AI Did 700 Agents\' Work, Then It Hired Humans',
    seoDescription: 'Klarna said its AI did the work of 700 agents in 2024. In 2025 its CEO said cost-first support led to lower quality. The timeline and 4 lessons for small business.',
    excerpt: 'In 2024 Klarna said its AI assistant did the equivalent work of 700 support agents. In 2025 its CEO said putting cost first had led to "lower quality" and moved to bring humans back. Here is the timeline with sources, and what a small business should copy.',
    author: 'Dooza Team',
    date: '2026-11-01',
    modifiedDate: '2026-11-01',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Klarna', 'AI Customer Support', 'AI Agents', 'Human Support', 'Dooza Video'],
    image: '/blog/klarna-ai-hired-humans-again.jpg',
    imageAlt: 'Watercolor illustration of robot and human support agents with headsets working side by side at one desk, under a balance scale',
    slug: 'klarna-ai-hired-humans-again',
    video: {
        name: VIDEO_TITLE,
        description: 'Klarna said its AI assistant did the work of 700 support agents in 2024, then said in 2025 that cost-first support had cost it quality and brought humans back.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-01',
    },
    tocData: [
        { id: 'timeline', label: 'The timeline' },
        { id: 'claim', label: 'The 2024 claim' },
        { id: 'reversal', label: 'The 2025 reversal' },
        { id: 'now', label: 'Where Klarna is now' },
        { id: 'lessons', label: '4 lessons for small business' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
        { id: 'sources', label: 'Sources' },
    ],
    content: `<p>Klarna did not drop AI. It kept its AI assistant and added humans back. In February 2024 Klarna said the assistant did "the equivalent work of 700 full-time agents." In May 2025 its CEO said that putting cost first had led to "lower quality," and Klarna began testing remote human agents again. The lesson for a small business: let AI take the repeat questions, and always keep a way to reach a person.</p>
<ul>
<li><strong>Feb 2024.</strong> Klarna: 2.3 million AI conversations in the first month, two-thirds of its support chats, "the equivalent work of 700 full-time agents" (${a(KLARNA, 'klarna.com')}).</li>
<li><strong>May 2025.</strong> CEO Sebastian Siemiatkowski: cost "seems to have been a too predominant evaluation factor" and the result was "lower quality" (${a(CXTODAY, 'CX Today')}).</li>
<li><strong>Feb 2026.</strong> Still shrinking headcount, but he says "it's going to be vital to offer a human connection" (${a(FORTUNE_FEB, 'Fortune')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), our own Short. Narrated by an AI voice with AI illustrations. The Short is a quick retelling; the quotes and numbers in this post come only from the sources listed below. <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="timeline">What happened with Klarna's AI customer service?</h2>
<table><thead><tr><th>When</th><th>What Klarna said</th><th>Source</th></tr></thead><tbody>
<tr><td>Feb 27, 2024</td><td>AI assistant handled two-thirds of chats in month one, "equivalent work of 700 full-time agents"</td><td>Klarna press release</td></tr>
<tr><td>May 2025</td><td>CEO: cost-first support meant "lower quality"; testing an "Uber-type of setup" for human agents</td><td>CX Today, Entrepreneur (via Bloomberg)</td></tr>
<tr><td>Oct 2025</td><td>Headcount down "from 7,400 to 3,000"</td><td>Fortune</td></tr>
<tr><td>Feb 2026</td><td>Expects fewer than 2,000 staff by 2030 through "natural attrition," but a human connection stays "vital"</td><td>Fortune</td></tr>
</tbody></table>

<h2 id="claim">What did Klarna claim in 2024?</h2>
<p>In its ${a(KLARNA, 'press release of February 27, 2024')}, Klarna said the assistant had "2.3 million conversations, two-thirds of Klarna's customer service chats" in its first month. It said customers "now resolve their errands in less than 2 mins compared to 11 mins previously," and that the assistant was estimated to bring "$40 million USD in profit improvement to Klarna in 2024."</p>
<p>Two words matter: "equivalent" and "estimated." The 700 was a measure of workload, not a count of people fired. And these are Klarna's own numbers, from its own launch announcement.</p>

<h2 id="reversal">Why did Klarna start hiring humans again?</h2>
<p>Because quality dropped. In May 2025 the CEO told Bloomberg, as reported by ${a(CXTODAY, 'CX Today')}, that cost "seems to have been a too predominant evaluation factor" and "what you end up having is lower quality." ${a(ENTREPRENEUR, 'Entrepreneur')} quotes him saying "Really, investing in the quality of human support is the way of the future for us."</p>
<p>CX Today says Klarna began testing an "Uber-type of setup" for remote support agents, so that customers know "there will be always a human if you want." That is a promise of choice, not a return to an all-human team.</p>

<h2 id="now">Is Klarna still using AI for support?</h2>
<p>Yes. ${a(FORTUNE_OCT, 'Fortune reported in October 2025')} that Klarna had "reduced its employee base from 7,400 to 3,000." In ${a(FORTUNE_FEB, 'February 2026')} Fortune reported the CEO expects fewer than 2,000 employees by 2030 through "natural attrition," while saying "it's going to be vital to offer a human connection there." So the end state is a mix: AI does the volume, people stay reachable.</p>

<h2 id="lessons">What should a small business learn from Klarna?</h2>
<p>This section is our reading of the story, not a sourced statistic.</p>
<ol>
<li><strong>Do not judge AI support on cost alone.</strong> That is the exact mistake Klarna's CEO named. Track repeat contacts and complaints, not just cost per ticket.</li>
<li><strong>Always offer a human.</strong> A clear "talk to a person" option costs little and protects trust.</li>
<li><strong>Give AI the repeat questions.</strong> Order status, opening hours and simple how-tos are where speed wins (Klarna's "11 mins" to "2 mins").</li>
<li><strong>Keep people on the hard cases.</strong> Refunds, upset customers and odd problems still need judgment.</li>
</ol>
<p>For the cost side, see our break-even math in ${a(COST_POST, 'AI support agent vs human agent: what each one costs')}.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>${a(CREW, 'Dooza Crew')} is AI employees for small business. $5 to start.</p>

<h2 id="sources">Sources</h2>
<ul>
<li>${a(VIDEO_URL, `“${VIDEO_TITLE}”`)}, Dooza on YouTube. Our own video.</li>
<li>${a(KLARNA, 'Klarna press release, February 27, 2024')}. Checked ${CHECKED}.</li>
<li>${a(CXTODAY, 'CX Today, May 12, 2025')}: CEO quotes on cost, quality and the "Uber-type of setup." Checked ${CHECKED}.</li>
<li>${a(ENTREPRENEUR, 'Entrepreneur, May 9, 2025')}: report on the CEO's Bloomberg interview. Checked ${CHECKED}.</li>
<li>${a(FORTUNE_OCT, 'Fortune, October 10, 2025')}: headcount from 7,400 to 3,000. Checked ${CHECKED}.</li>
<li>${a(FORTUNE_FEB, 'Fortune, February 17, 2026')}: under 2,000 staff by 2030, human connection "vital." Checked ${CHECKED}.</li>
</ul>`,
    faqData: [
        { question: 'Did Klarna replace 700 customer service agents with AI?', answer: 'Klarna said in February 2024 that its AI assistant did "the equivalent work of 700 full-time agents." That was a measure of workload in its own press release, not a count of people laid off.' },
        { question: 'Why did Klarna start hiring humans again?', answer: 'In May 2025 CEO Sebastian Siemiatkowski said cost "seems to have been a too predominant evaluation factor" and the result was "lower quality," per CX Today. Klarna began testing remote human agents so customers can always reach a person.' },
        { question: 'Did Klarna stop using AI for customer service?', answer: 'No. Klarna kept AI and added human options back. Fortune reported in February 2026 that the CEO expects fewer than 2,000 staff by 2030, while calling a human connection "vital."' },
        { question: 'What should a small business learn from Klarna?', answer: 'Use AI for repeat questions, keep a clear way to reach a person, and judge AI support on quality and repeat contacts, not on cost alone.' },
        { question: 'How fast did Klarna\'s AI resolve issues?', answer: 'Klarna said customers resolved errands in under 2 minutes, down from 11 minutes, in its February 2024 press release.' },
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
