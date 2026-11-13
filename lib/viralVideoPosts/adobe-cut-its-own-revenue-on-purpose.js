// Draft 2026-11-13. Facts only from /home/trajan/content/explainer/adobe-2013-bet/sources.md.
// SEC 10-K curl returned empty 2026-11-13: numbers as recorded in Trajan's sources.md (unverified here).
// CS6 stayed on sale: never say boxes stopped entirely (Trajan). No quotes used.
import { yt } from './helpers';

const VIDEO_ID = 'LkInRE29TGQ';
const VIDEO_TITLE = 'Adobe Cut Its Own Revenue. On Purpose.';

const K13 = 'https://www.sec.gov/Archives/edgar/data/0000796343/000079634314000004/adbe10kfy13.htm';
const K25 = 'https://www.sec.gov/Archives/edgar/data/796343/000079634326000003/adbe-20251128.htm';
const TNW = 'https://thenextweb.com/news/after-nearly-10-years-adobe-abandons-its-creative-suite-entirely-to-focus-on-creative-cloud';
const MACTECH = 'https://www.mactech.com/2013/05/13/petition-launched-to-keep-adobe-creative-suite-perpetual-license';
const CGC = 'https://www.cgchannel.com/2013/05/14000-petition-adobe-to-reinstate-the-creative-suites/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=adobe-cut-its-own-revenue-on-purpose';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 554,
    title: 'Adobe Cut Its Own Revenue On Purpose. Why Did It Work?',
    seoTitle: 'Adobe Cut Its Own Revenue. On Purpose. Here\'s Why.',
    seoDescription: 'In 2013 Adobe moved new versions to Creative Cloud subscriptions and revenue fell 8%. By FY2025 subscriptions were about 96% of $23.8B. The lesson for small businesses.',
    excerpt: 'Adobe\'s revenue fell 8% in FY2013, from $4.40 billion to $4.06 billion, after it made new versions subscription-only. Twelve years later subscriptions are about 96% of its revenue. Our take: one bad year bought the next ten.',
    author: 'Dooza Team',
    date: '2026-11-13',
    modifiedDate: '2026-11-13',
    readTime: '4 min read',
    readTimeMinutes: 4,
    category: 'AI News',
    tags: ['Adobe', 'Creative Cloud', 'Subscriptions', 'Business Strategy', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/adobe-cut-its-own-revenue-on-purpose.jpg',
    imageAlt: 'Illustration of a software box turning into a cloud subscription',
    slug: 'adobe-cut-its-own-revenue-on-purpose',
    video: {
        name: VIDEO_TITLE,
        description: 'In 2013 Adobe stopped making new Creative Suite versions and went subscription-only. Revenue fell 8%. Here is why it chose that.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-12',
    },
    tocData: [
        { id: 'the-switch', label: 'The 2013 switch' },
        { id: 'the-drop', label: 'Revenue fell 8%' },
        { id: 'the-backlash', label: 'The backlash' },
        { id: 'the-payoff', label: 'The payoff' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Adobe cut its own revenue on purpose when it moved its creative software to subscriptions. In May 2013 it said there would be no Creative Suite 7: new versions of Photoshop, Illustrator and the rest would come only through Creative Cloud, a monthly subscription (${a(TNW, 'The Next Web')}). CS6 stayed on sale, with bug fixes only. Adobe's total revenue fell 8%, from $4,403.7 million in FY2012 to $4,055.2 million in FY2013, and its annual report put that down to customers moving from one-time licences to Creative Cloud (${a(K13, 'Adobe 10-K FY2013')}). By FY2025, subscriptions were $22,798 million of $23,769 million in revenue, about 96% (${a(K25, 'Adobe 10-K FY2025')}). In our view, Adobe took one bad year to win the next ten.</p>
<ul>
<li><strong>May 2013:</strong> No CS7. New versions are Creative Cloud only; CS6 stays on sale.</li>
<li><strong>FY2013:</strong> Revenue $4.06 billion, down 8% from $4.40 billion.</li>
<li><strong>Creative ARR:</strong> $155.0 million exiting FY2012 to $768.0 million exiting FY2013, about 5x.</li>
<li><strong>FY2025:</strong> Subscriptions about 96% of $23.8 billion revenue.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-switch">What did Adobe change in 2013?</h2>
<p>At its MAX conference in May 2013, Adobe said it would stop developing new Creative Suite versions. From then on, new features would ship only in Creative Cloud, paid monthly or yearly (${a(TNW, 'The Next Web')}). Customers who wanted to own a copy could still buy CS6, but it would not get new features.</p>

<h2 id="the-drop">How much revenue did Adobe lose?</h2>
<p>About 8%. Adobe's FY2013 annual report shows total revenue of $4,055.2 million, down from $4,403.7 million the year before (${a(K13, 'Adobe 10-K FY2013')}). The reason is simple: a customer who paid a large one-time price for a box now paid a smaller amount each month.</p>

<h2 id="the-backlash">Did customers push back?</h2>
<p>Yes. A student, Derek Schoffstall, started a change.org petition asking Adobe to keep the perpetual licence (${a(MACTECH, 'MacTech')}). Within days it had 13,897 signatures (${a(CGC, 'CG Channel')}). Adobe kept going.</p>

<h2 id="the-payoff">Did the switch pay off?</h2>
<p>Yes. Creative annual recurring revenue went from $155.0 million at the end of FY2012 to $768.0 million at the end of FY2013, about five times higher in one year (${a(K13, 'Adobe 10-K FY2013')}). In FY2025, subscription revenue was $22,798 million out of $23,769 million total, about 96% (${a(K25, 'Adobe 10-K FY2025')}).</p>

<h2 id="small-business-lesson">What can small businesses learn from Adobe?</h2>
<p>This is our takeaway. Sometimes the right move looks worse on this quarter's numbers. Adobe accepted a dip in revenue because it could see where its customers were going.</p>
<p>In our view, AI agents are that kind of choice for small businesses now. Moving work to an agent takes setup time and feels slower in the first week. A few ways to make the switch like Adobe did:</p>
<ol>
<li><strong>Pick the direction, then commit.</strong> Adobe did not run boxes and subscriptions as equals forever.</li>
<li><strong>Expect a dip.</strong> Plan for the first weeks to be slower while you set things up.</li>
<li><strong>Keep the old way available.</strong> Adobe kept CS6 on sale. Keep your old process running while the new one proves itself.</li>
<li><strong>Measure the new number.</strong> Adobe watched recurring revenue, not just total revenue. Track the hours an agent saves, not just this week's output.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>The cheapest way to start the switch is with a free tool. Dooza Crew is free: install the app and start. Crew agents work on web and phone.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'Why did Adobe switch to Creative Cloud?', answer: 'In May 2013 Adobe stopped making new Creative Suite versions and put new features only in Creative Cloud subscriptions. It accepted lower revenue in the short term in exchange for recurring subscription revenue. CS6 stayed on sale with bug fixes only.' },
        { question: 'How much did Adobe revenue drop after Creative Cloud?', answer: 'About 8%. Adobe reported $4,055.2 million in FY2013 revenue, down from $4,403.7 million in FY2012, and said the move from perpetual licences to Creative Cloud was the reason.' },
        { question: 'Did people protest Adobe Creative Cloud?', answer: 'Yes. A change.org petition started by student Derek Schoffstall in May 2013 asked Adobe to keep perpetual licences; CG Channel reported 13,897 signatures within days.' },
        { question: 'How much of Adobe revenue is subscriptions now?', answer: 'About 96%. In FY2025 Adobe reported $22,798 million of subscription revenue out of $23,769 million total.' },
        { question: 'What is the lesson from Adobe for small businesses?', answer: 'Our view: a change that dips this quarter\'s numbers can still be the right call if it is where customers are going. With AI agents, start now, expect a slower first few weeks, and keep the old process running until the new one proves itself.' },
    ],
};

export default post;
