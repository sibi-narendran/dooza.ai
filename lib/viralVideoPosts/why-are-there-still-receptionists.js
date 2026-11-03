// Facts: content/drafts/video-posts/why-are-there-still-receptionists-facts.md (transcript = learn_yt.sh, sources opened November 3, 2026).
import { yt } from './helpers';

const VIDEO_ID = 'NGpauuMQmnQ';
// Live YouTube title (checked 2026-11-03 via oEmbed).
const VIDEO_TITLE = 'Machines Took the Switchboard. So Why Are There 947,500 Receptionists? #Shorts';
const CHECKED = 'November 3, 2026';

const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const BLS_OOH = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm';
const BLS_WHAT = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm#tab-2';
const BLS_PAY = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm#tab-5';
const BLS_OUTLOOK = 'https://www.bls.gov/ooh/office-and-administrative-support/receptionists.htm#tab-6';
const RICHMOND_FED = 'https://www.richmondfed.org/publications/research/econ_focus/2019/q4/economic_history';
const CONVERSABLE = 'https://conversableeconomist.com/2020/02/14/telephone-switchboard-operators-rise-and-fall/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=why-are-there-still-receptionists';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 543,
    title: 'Machines Took the Switchboard. Why Are There Still 947,500 Receptionists?',
    seoTitle: 'Why Are There Still 947,500 Receptionists?',
    seoDescription: 'Machines took over call switching, but the front desk kept people. BLS counts 947,500 US receptionists in 2025 and projects a 2% decline to 2035.',
    excerpt: 'Machines took over connecting calls, but they did not take the whole front desk. The Bureau of Labor Statistics counts 947,500 receptionist jobs in 2025 and projects a 2 percent decline from 2025 to 2035, with about 105,100 openings a year. Here is why the job survived, what is being automated, and what it means for a small business that misses calls.',
    author: 'Dooza Team',
    date: '2026-11-03',
    modifiedDate: '2026-11-03',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Receptionists', 'Telephone History', 'Automation', 'Jobs', 'Dooza Video'],
    image: '/blog/why-are-there-still-receptionists.jpg',
    imageAlt: 'Watercolor of a modern receptionist on the phone at a front desk, with mid-century switchboard operators in the background',
    slug: 'why-are-there-still-receptionists',
    video: {
        name: VIDEO_TITLE,
        description: 'In 1950 one in 13 working women in America was a telephone operator. Machines took over connecting calls, yet the US still has about 947,500 receptionists. What the government projects next, and why the front desk kept its people.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-02',
    },
    tocData: [
        { id: 'switchboard', label: 'What machines took' },
        { id: 'what-changed', label: 'What the job became' },
        { id: 'then-now', label: 'Operator vs receptionist' },
        { id: 'outlook', label: 'What BLS projects' },
        { id: 'small-business', label: 'Missed calls today' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
        { id: 'sources', label: 'Sources' },
    ],
    content: `<p>Because machines took one task, not the whole job. Automatic switching replaced the people who plugged calls through a switchboard, but someone still has to greet visitors, answer questions and keep the calendar. The ${a(BLS_OOH, 'Bureau of Labor Statistics')} counts 947,500 receptionist jobs in 2025. It projects that "Employment of receptionists is projected to decline 2 percent from 2025 to 2035," yet "about 105,100 openings for receptionists are projected each year, on average, over the decade."</p>
<ul>
<li><strong>1950.</strong> About one out of every 13 working women were telephone operators (${a(CONVERSABLE, 'Conversable Economist')}).</li>
<li><strong>Mid-century to 1984.</strong> Operators rose to about 342,000, then fell to 40,000 by 1984 (${a(RICHMOND_FED, 'Richmond Fed')}).</li>
<li><strong>2025.</strong> 947,500 receptionist jobs in the US (${a(BLS_OOH, 'BLS')}).</li>
<li><strong>2025 to 2035.</strong> Projected change of -2%, or -16,000 jobs (${a(BLS_OUTLOOK, 'BLS')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), our own Short. Dooza made this video, and Dooza Crew, mentioned below, is our product. Narrated by an AI voice with AI illustrations. The Short is a quick retelling and rounds some numbers; the dates, numbers and quotes in this post come only from the sources listed below. <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="switchboard">What did machines take from the switchboard?</h2>
<p>The connecting. In the early telephone, callers could not dial. According to the ${a(RICHMOND_FED, 'Richmond Fed')}, a caller "picked up their handset and were greeted by an operator, almost always a woman, who asked for the desired phone number and placed the call." The first automated switching system came into use in La Porte, Indiana, on November 3, 1892. (For how the job started, with rude teenage boys, see ${'<a href="/blog/first-telephone-operators-teenage-boys">our companion post on the first telephone operators</a>'}.)</p>
<p>The change was slow. The Richmond Fed notes that "As late as 1930, only one-third of Bell System exchanges had automatic switchboards." Operator numbers grew "from around 178,000 in 1920 to about 342,000 in the middle of the century," then fell to "less than 250,000 in 1960." By 1984, "the number of operators was down to 40,000." When the article was written in 2019, BLS counted "a mere 1,460" operators in the telecommunications industry.</p>
<p>The operator did more than plug cords, though. The same article says she "got to know her 50 to 100 assigned customers by name," took messages and "made wake-up calls and gave the time, weather, and sports scores." Those people tasks did not disappear with the switchboard.</p>

<h2 id="what-changed">What does a receptionist do today?</h2>
<p>The BLS summary is short: "Receptionists do tasks such as answering phones, receiving visitors, and providing information about their organization to the public." Its ${a(BLS_WHAT, 'What They Do')} tab lists the typical duties, including:</p>
<ul>
<li>Answer the telephone and take messages or forward calls</li>
<li>Schedule and confirm appointments and maintain calendars</li>
<li>Greet customers, clients, and other visitors</li>
<li>Enter customer information into the organization's database</li>
</ul>
<p>BLS adds: "Receptionists are often the first employee of an organization to have contact with a customer or client. They are responsible for making a good first impression for the organization." Switching a call is something a machine does. A first impression is something a business has to manage.</p>

<h2 id="then-now">Telephone operator vs receptionist</h2>
<table><thead><tr><th></th><th>Telephone operator</th><th>Receptionist</th></tr></thead><tbody>
<tr><td>Core task</td><td>Place calls through a switchboard</td><td>Answer phones, greet visitors, give information</td></tr>
<tr><td>Headcount</td><td>About 342,000 at mid-century; 40,000 by 1984</td><td>947,500 jobs in 2025</td></tr>
<tr><td>What automation took</td><td>The connecting itself, through automatic switching</td><td>Some interactions, through software, websites and apps</td></tr>
<tr><td>Source</td><td>Richmond Fed</td><td>BLS</td></tr>
</tbody></table>

<h2 id="outlook">What does BLS project for receptionists, and why?</h2>
<p>A small decline, not a collapse. The ${a(BLS_OUTLOOK, 'Job Outlook')} tab shows employment of 947,500 in 2025 and a projected 931,600 in 2035, a change of -16,000. For comparison, BLS projects 3% growth for all occupations over the same years.</p>
<p>The reason BLS gives is about tasks: "Employment of receptionists is expected to be constrained as organizations continue to automate or consolidate administrative functions. For example, many organizations use computer software, websites, mobile applications, or other technology to interact with the public or customers."</p>
<p>The openings come from people leaving, not from growth: "All of those openings are expected to result from the need to replace workers who transfer to other occupations or exit the labor force, such as to retire."</p>
<p>Pay, from the ${a(BLS_PAY, 'Pay')} tab: "The median hourly wage for receptionists was $18.27 in May 2025," against $24.51 for all occupations.</p>
<p>These are projections, not facts about the future. The Richmond Fed article has a useful warning: in 1964, an economist wrote that "in the foreseeable future no machines will be devised" to handle the many kinds of operator calls. A year later the Bell System installed its first permanent fully electronic switching system.</p>

<h2 id="small-business">What does this mean for a small business that misses calls?</h2>
<p>This section is our reading, not a sourced statistic.</p>
<ol>
<li><strong>Split the job into tasks.</strong> Answering, taking a message, booking an appointment and answering the same question for the tenth time are repeat tasks. Those are the parts BLS says organizations already hand to software.</li>
<li><strong>Keep the first impression in mind.</strong> Whoever (or whatever) picks up is, in BLS's words, "the first employee of an organization to have contact with a customer or client." A missed call makes an impression too.</li>
<li><strong>Keep a person in charge.</strong> The operator story shows that machines took the routine connecting while people kept the judgment calls. Let software answer and book, and keep a human deciding on refunds, payments and upset customers.</li>
</ol>
<p>If you are comparing options, our page on the ${'<a href="/ai-receptionist">AI receptionist</a>'} explains how AI call answering works.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew gives a small business AI employees (agents), each with its own computer and browser. You and your staff work with them in one chat, and Crew agents take phone calls too, included in the Crew plan. Before an agent sends or pays for anything, it asks you to Approve, Edit or Reject, so you stay the one in charge. It is $5 to start (paid in the app), with unlimited users and agents, on Android, iPhone and Mac. ${a(CREW, 'Get the Dooza Crew app')}.</p>
<p>Disclosure: Dooza made the video above, and Dooza Crew is our product.</p>

<h2 id="sources">Sources</h2>
<ul>
<li>${a(VIDEO_URL, `“${VIDEO_TITLE}”`)}, Dooza on YouTube. Our own video.</li>
<li>${a(BLS_OOH, 'U.S. Bureau of Labor Statistics, Occupational Outlook Handbook, Receptionists')}: Summary, What They Do, Pay and Job Outlook tabs; 947,500 jobs, -2% from 2025 to 2035, 105,100 openings a year, $18.27 median hourly wage. Checked ${CHECKED}.</li>
<li>${a(RICHMOND_FED, 'Federal Reserve Bank of Richmond, Econ Focus, Fourth Quarter 2019, "Goodbye, Operator" by David A. Price')}: the La Porte exchange, operator numbers from 1920 to 1984, what operators did. Checked ${CHECKED}.</li>
<li>${a(CONVERSABLE, 'Conversable Economist, February 14, 2020')}: one out of every 13 working women in 1950. Checked ${CHECKED}.</li>
</ul>`,
    faqData: [
        { question: 'Why are there still receptionists if machines took the switchboard?', answer: 'Machines took the task of connecting calls, not the whole front desk. Receptionists answer phones, greet visitors, schedule appointments and give information about their organization. The Bureau of Labor Statistics counts 947,500 receptionist jobs in the US in 2025.' },
        { question: 'Are receptionist jobs declining?', answer: 'Slightly. BLS projects employment of receptionists to decline 2 percent from 2025 to 2035, from 947,500 to 931,600 jobs, a change of -16,000. It still projects about 105,100 openings each year on average, all from replacing workers who change jobs or retire.' },
        { question: 'Why does BLS expect fewer receptionist jobs?', answer: 'BLS says employment is expected to be constrained as organizations continue to automate or consolidate administrative functions, for example by using computer software, websites, mobile applications or other technology to interact with the public or customers.' },
        { question: 'How many telephone operators were there, and what happened to them?', answer: 'About one out of every 13 working women in 1950 were telephone operators, per Conversable Economist. The Richmond Fed says operator numbers reached about 342,000 in the middle of the century, fell below 250,000 in 1960 and were down to 40,000 by 1984 as automatic switching spread.' },
        { question: 'How much do receptionists earn?', answer: 'The median hourly wage for receptionists was $18.27 in May 2025, according to the Bureau of Labor Statistics, compared with $24.51 for all occupations.' },
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
