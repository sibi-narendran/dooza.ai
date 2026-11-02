// Facts: content/drafts/video-posts/first-telephone-operators-facts.md (transcript = learn_yt.sh, sources opened November 2, 2026).
import { yt } from './helpers';

const VIDEO_ID = 'vueOSByNP60';
// Live YouTube title (checked 2026-11-02 via oEmbed).
const VIDEO_TITLE = 'The First Phone Operators Were Rude Teenage Boys #Shorts';
const CHECKED = 'November 2, 2026';

const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const ETHW = 'https://ethw.org/Telephone_Operators';
const SMITHSONIAN = 'https://www.smithsonianmag.com/smart-news/long-siri-emma-nutts-voice-was-other-end-line-180964651/';
const BOSTON_MAG = 'https://www.bostonmagazine.com/news/2016/09/01/emma-nutt-first-female-telephone-operator/';
const MIT_TR = 'https://www.technologyreview.com/2000/01/01/41433/no-operator-please/';
const EBSCO_STROWGER = 'https://www.ebsco.com/research-starters/history/strowger-patents-automatic-dial-telephone-system';
const EBSCO_DDD = 'https://www.ebsco.com/research-starters/communication-and-mass-media/first-operator-free-long-distance-telephone-call';
const CONVERSABLE = 'https://conversableeconomist.com/2020/02/14/telephone-switchboard-operators-rise-and-fall/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=first-telephone-operators-teenage-boys';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 542,
    title: 'Were the First Telephone Operators Teenage Boys? Yes. Here Is Why They Were Replaced',
    seoTitle: 'Were the First Telephone Operators Teenage Boys? Yes',
    seoDescription: 'Yes. Bell\'s first operators in the 1870s were teenage boys, who proved rude and unruly. Women replaced them from 1878, then automatic switching took over.',
    excerpt: 'Yes. The first telephone operators in the 1870s were teenage boys hired from telegraph offices. They swore at callers and played pranks, so on September 1, 1878 Bell\'s Boston dispatch hired Emma Nutt, the first woman operator. Later, automatic switching and direct dialing took most of the job. Here is the story with sources, and what it means for a small business.',
    author: 'Dooza Team',
    date: '2026-11-02',
    modifiedDate: '2026-11-02',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Telephone History', 'Telephone Operators', 'Automation', 'Customer Service', 'Dooza Video'],
    image: '/blog/first-telephone-operators-teenage-boys.jpg',
    imageAlt: 'Soft watercolor of an 1870s wooden telephone switchboard with cords and brass plugs in a dim exchange room',
    slug: 'first-telephone-operators-teenage-boys',
    video: {
        name: VIDEO_TITLE,
        description: 'The first telephone operators in the 1870s were teenage boys. They were rude to callers, so the phone companies hired women instead. Then machines took over the switching.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-28',
    },
    tocData: [
        { id: 'boys', label: 'Why boys first' },
        { id: 'emma-nutt', label: 'Emma Nutt, 1878' },
        { id: 'machines', label: 'What replaced operators' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'lesson', label: 'The lesson for small business' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
        { id: 'sources', label: 'Sources' },
    ],
    content: `<p>Yes. The first telephone operators who worked for the Bell Telephone Company in the 1870s were teenage boys, many of them hired from telegraph offices. According to the ${a(ETHW, 'Engineering and Technology History Wiki')}, "the boys frequently proved rude and unruly," so the company hired young women instead. The first was Emma Nutt, who started at the Edwin Holmes Telephone Dispatch Company in Boston on September 1, 1878 (${a(SMITHSONIAN, 'Smithsonian')}, ${a(BOSTON_MAG, 'Boston Magazine')}). Decades later, automatic switching and direct dialing took most of the connecting work away from people altogether.</p>
<ul>
<li><strong>1870s.</strong> Bell's first operators were teenage boys (${a(ETHW, 'ETHW')}).</li>
<li><strong>Sept 1, 1878.</strong> Emma Nutt becomes the first woman telephone operator, in Boston (${a(BOSTON_MAG, 'Boston Magazine')}).</li>
<li><strong>1891 to 1892.</strong> Almon Strowger patents an automatic switch; the first automatic exchange opens in La Porte, Indiana (${a(MIT_TR, 'MIT Technology Review')}).</li>
<li><strong>Nov 10, 1951.</strong> The first long-distance call dialed without an operator, from Englewood, New Jersey (${a(EBSCO_DDD, 'EBSCO')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), our own Short. Dooza made this video, and Dooza Crew, mentioned below, is our product. Narrated by an AI voice with AI illustrations. The Short is a quick retelling; the dates, numbers and quotes in this post come only from the sources listed below. <a href="${VIDEO_URL}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="boys">Why were the first telephone operators teenage boys?</h2>
<p>Because the telegraph business already used them. ${a(SMITHSONIAN, 'Smithsonian magazine')} explains that the boys were hired from telegraph companies, where their small size, speed and low pay gave them an edge. Connecting a call was physical work at a tall switchboard.</p>
<p>Talking to the public was another matter. Smithsonian says teenagers proved "totally unsuitable for speaking to real live people" on the other end of the line, and notes they were expected to work 12-hour days. ${a(BOSTON_MAG, 'Boston Magazine')} puts it plainly: the boys were known to horse around, swearing at and pranking callers and each other.</p>

<h2 id="emma-nutt">Who was Emma Nutt, the first female telephone operator?</h2>
<p>Emma Nutt was a Boston woman who had worked in a telegraph office. On September 1, 1878 she started at the Edwin Holmes Telephone Dispatch Company, hired by Alexander Graham Bell, according to ${a(SMITHSONIAN, 'Smithsonian')}. Her pay was $10 a month for a 54-hour work week. Her sister Stella was hired a few hours later, making her the second woman operator (${a(BOSTON_MAG, 'Boston Magazine')}).</p>
<p>The switch was fast. Smithsonian, citing Time, says that within six months all Bell telephone operators were women. The reasons were not flattering by today's standards: women could be paid less, and Bell shared the common belief that women were naturally more polite.</p>
<p>A note on sources: ETHW names her "Emma McNutt" and says she was hired in New York City. Smithsonian and Boston Magazine both say Emma Nutt, in Boston. We follow the two that agree.</p>

<h2 id="machines">What replaced telephone operators?</h2>
<p>Machines, in two big steps.</p>
<p><strong>Automatic switching.</strong> Almon Strowger, a Kansas City undertaker, suspected that operators were sending callers who asked for his business to his competitors. ${a(MIT_TR, 'MIT Technology Review')} reports that he was issued his first patent in 1891 and, with partners, opened the Strowger Automatic Telephone Exchange in La Porte, Indiana, on November 3, 1892. ${a(EBSCO_STROWGER, 'EBSCO')} says his 1891 system could connect up to ninety-nine telephones, with no operator in the middle.</p>
<p><strong>Dial phones across the Bell System.</strong> ${a(ETHW, 'ETHW')} says AT&amp;T installed more and more automatic switching so customers with dial telephones could connect calls themselves. Over time, operators were needed only for long distance and collect calls.</p>
<p><strong>Direct distance dialing.</strong> Then long distance went automatic too. On November 10, 1951, the mayor of Englewood, New Jersey, called the mayor of Alameda, California, in the first direct coast-to-coast call, made possible by the new area codes (${a(EBSCO_DDD, 'EBSCO')}).</p>
<p>The job did not vanish overnight. ETHW says the peak came in the late 1940s, with more than 350,000 operators at AT&amp;T, 98% of them women. Around 1950, about one in every 13 working women was a telephone operator (${a(CONVERSABLE, 'Conversable Economist')}). By 1984, operator jobs in the telecom industry were down to 40,000.</p>

<h2 id="timeline">Telephone operators: a short timeline</h2>
<table><thead><tr><th>When</th><th>What happened</th><th>Source</th></tr></thead><tbody>
<tr><td>1870s</td><td>Bell's first operators are teenage boys from telegraph offices</td><td>ETHW, Smithsonian</td></tr>
<tr><td>Sept 1, 1878</td><td>Emma Nutt starts in Boston; her sister Stella follows hours later</td><td>Smithsonian, Boston Magazine</td></tr>
<tr><td>1891</td><td>Strowger patents an automatic switch for up to 99 phones</td><td>MIT Technology Review, EBSCO</td></tr>
<tr><td>Nov 3, 1892</td><td>First automatic exchange opens in La Porte, Indiana</td><td>MIT Technology Review</td></tr>
<tr><td>Late 1940s</td><td>Peak: over 350,000 AT&amp;T operators, 98% women</td><td>ETHW</td></tr>
<tr><td>Nov 10, 1951</td><td>First direct-dialed coast-to-coast call, from Englewood, NJ</td><td>EBSCO</td></tr>
<tr><td>1984</td><td>Telecom operator jobs down to 40,000</td><td>Conversable Economist</td></tr>
</tbody></table>

<h2 id="lesson">What is the lesson for a small business today?</h2>
<p>This section is our reading of the story, not a sourced statistic.</p>
<ol>
<li><strong>The routine part moves to machines.</strong> Plugging one wire into another was the repeat work, and it was automated first. The same thing is happening now to repeat tasks like answering common questions and booking calls.</li>
<li><strong>Manners are part of the job.</strong> The boys could connect calls; they lost the job because of how they treated callers. Whoever (or whatever) answers for your business is your brand.</li>
<li><strong>Someone still has to be in charge.</strong> Even after dial phones, people handled the long distance and collect calls. Automate the routine, but keep a person who decides on the calls that matter: refunds, payments, upset customers.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew gives a small business AI employees (agents), each with its own computer and browser. You and your staff work with them in one chat, and Crew agents take phone calls too, included in the Crew plan. Before an agent sends or pays for anything, it asks you to Approve, Edit or Reject, so you stay the one in charge. It is $5 to start (paid in the app), with unlimited users and agents, on Android, iPhone and Mac. ${a(CREW, 'Get the Dooza Crew app')}.</p>
<p>Disclosure: Dooza made the video above, and Dooza Crew is our product.</p>

<h2 id="sources">Sources</h2>
<ul>
<li>${a(VIDEO_URL, `“${VIDEO_TITLE}”`)}, Dooza on YouTube. Our own video.</li>
<li>${a(ETHW, 'Engineering and Technology History Wiki, Telephone Operators')}: boys first, women hired instead, automatic switching, 350,000 operators at the peak. Checked ${CHECKED}.</li>
<li>${a(SMITHSONIAN, 'Smithsonian magazine, September 1, 2017')}: Emma Nutt, her pay and why the boys failed. Checked ${CHECKED}.</li>
<li>${a(BOSTON_MAG, 'Boston Magazine, September 1, 2016')}: Emma Nutt's first day, the boys' behavior, Stella Nutt. Checked ${CHECKED}.</li>
<li>${a(MIT_TR, 'MIT Technology Review, January 1, 2000')}: Strowger's 1891 patent and the 1892 La Porte exchange. Checked ${CHECKED}.</li>
<li>${a(EBSCO_STROWGER, 'EBSCO Research Starters, Strowger patents automatic dial telephone system')}: up to ninety-nine telephones. Checked ${CHECKED}.</li>
<li>${a(EBSCO_DDD, 'EBSCO Research Starters, First operator-free long-distance telephone call')}: Englewood, November 10, 1951. Checked ${CHECKED}.</li>
<li>${a(CONVERSABLE, 'Conversable Economist, February 14, 2020')}: one in 13 working women in 1950; 40,000 by 1984. Checked ${CHECKED}.</li>
</ul>`,
    faqData: [
        { question: 'Were the first telephone operators teenage boys?', answer: 'Yes. The first operators for the Bell Telephone Company in the 1870s were teenage boys, many hired from telegraph offices. The Engineering and Technology History Wiki says "the boys frequently proved rude and unruly," so young women were hired instead.' },
        { question: 'Why were boy telephone operators replaced by women?', answer: 'Their manners. Smithsonian and Boston Magazine report the boys swore at callers, played pranks and fought on the job. Bell turned to women, who could be paid less and were believed to be more polite. Within six months all Bell operators were women, per Smithsonian citing Time.' },
        { question: 'Who was the first female telephone operator?', answer: 'Emma Nutt. She started on September 1, 1878 at the Edwin Holmes Telephone Dispatch Company in Boston, for $10 a month and a 54-hour week, according to Smithsonian. Her sister Stella was hired a few hours later.' },
        { question: 'What replaced telephone operators?', answer: 'Automatic switching. Almon Strowger patented an automatic switch in 1891 and the first automatic exchange opened in La Porte, Indiana, on November 3, 1892 (MIT Technology Review). Dial phones then let customers connect most calls themselves, and direct distance dialing removed operators from long-distance calls starting in 1951.' },
        { question: 'When was the first long-distance call dialed without an operator?', answer: 'On November 10, 1951, the mayor of Englewood, New Jersey, called the mayor of Alameda, California, in the first direct coast-to-coast call, according to EBSCO Research Starters.' },
        { question: 'How many telephone operators were there at the peak?', answer: 'More than 350,000 worked for AT&T in the late 1940s, 98% of them women, per the Engineering and Technology History Wiki. Around 1950 about one in every 13 working women was a telephone operator.' },
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
