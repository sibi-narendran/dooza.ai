// Draft 2026-11-11. Facts only from /home/trajan/content/explainer/ibm-dos/sources.md, each page opened 2026-11-11.
// Transcript: /home/achilles/learned/knowledge/learnings/sources/yt/20261110_I9vDl00UzhU.txt
// Facts:
// - 6 Nov 1980 Gates signed contract to create an OS for IBM's new PC · https://www.computinghistory.org.uk/det/6083/Microsoft%20signs%20contract%20with%20IBM%20to%20create%20MS-DOS
// - Microsoft bought 86-DOS from Seattle Computer Products, hired author Tim Paterson · same
// - July 27, 1981: Microsoft paid $50,000 for full rights to DOS; a year earlier $25,000 for 86-DOS · https://www.cbsnews.com/news/dos-at-30-the-best-tech-deal-ever/
// - A couple of weeks before IBM's August 12 PC launch · same (CBS)
// - Renamed MS-DOS; within a year licensed to over 70 other companies · https://en.wikipedia.org/wiki/MS-DOS
// - IBM thought it had sole rights; clause let Microsoft sell to others; many licensees already cloning IBM's hardware · https://www.docusign.com/en-gb/blog/clever-clause-made-microsoft
// Dooza Crew claims only from the brief's approved list (no prices, counts or customers).
import { yt } from './helpers';

const VIDEO_ID = 'I9vDl00UzhU';
const VIDEO_TITLE = 'IBM Built the PC. Microsoft Got Rich.';

const CBS = 'https://www.cbsnews.com/news/dos-at-30-the-best-tech-deal-ever/';
const CCH = 'https://www.computinghistory.org.uk/det/6083/Microsoft%20signs%20contract%20with%20IBM%20to%20create%20MS-DOS';
const WIKI = 'https://en.wikipedia.org/wiki/MS-DOS';
const DOCUSIGN = 'https://www.docusign.com/en-gb/blog/clever-clause-made-microsoft';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=ibm-built-the-pc-microsoft-got-rich';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 552,
    title: 'IBM Built the PC. Why Did Microsoft Get Rich Instead?',
    seoTitle: 'IBM Built the PC. Why Did Microsoft Get Rich?',
    seoDescription: 'IBM sold the hardware. Microsoft kept the right to license DOS to every clone maker. What that one clause teaches a small business about ownership.',
    excerpt: 'IBM built the PC, but Microsoft kept the right to license DOS to other computer makers. As clones spread, Microsoft got paid again and again. The lesson: own the layer your customers keep using, not the one-time box.',
    author: 'Dooza Team',
    date: '2026-11-11',
    modifiedDate: '2026-11-11',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['IBM', 'Microsoft', 'MS-DOS', 'Business History', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/ibm-built-the-pc-microsoft-got-rich.jpg',
    imageAlt: 'Illustration of an early beige personal computer with a floppy disk labeled DOS beside it',
    slug: 'ibm-built-the-pc-microsoft-got-rich',
    video: {
        name: VIDEO_TITLE,
        description: 'IBM built the PC. Microsoft bought an operating system, renamed it MS-DOS, and kept the right to license it to everyone else who built a PC.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-10',
    },
    tocData: [
        { id: 'the-deal', label: 'The IBM deal' },
        { id: 'the-clause', label: 'The clause that mattered' },
        { id: 'the-clones', label: 'Clones paid Microsoft' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Microsoft got rich instead of IBM because IBM sold the hardware once, while Microsoft kept the right to license its operating system, MS-DOS, to every other company that built a PC. IBM thought it had sole rights to the software. It did not. When other makers started cloning IBM's machine, they licensed DOS from Microsoft. Within a year, Microsoft had licensed MS-DOS to more than 70 other companies (${a(CCH, 'Centre for Computing History')}; ${a(DOCUSIGN, 'DocuSign')}).</p>
<ul>
<li><strong>6 November 1980:</strong> Bill Gates signs a contract to create an operating system for IBM's new PC.</li>
<li><strong>27 July 1981:</strong> Microsoft pays Seattle Computer Products $50,000 for full rights to DOS.</li>
<li><strong>12 August 1981:</strong> IBM launches its PC, a couple of weeks later (${a(CBS, 'CBS News')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-deal">How did Microsoft get the IBM deal?</h2>
<p>On 6 November 1980, Bill Gates signed a contract for Microsoft to create an operating system for IBM's new PC. Microsoft did not write one from scratch. It bought existing software, 86-DOS, from Seattle Computer Products and hired its author, Tim Paterson (${a(CCH, 'Centre for Computing History')}).</p>
<p>The purchase came in two steps. CBS News reports that Microsoft first paid $25,000 for 86-DOS, also called Q-DOS, and then, on 27 July 1981, paid $50,000 for full rights to it. That was only a couple of weeks before IBM's PC launch on 12 August (${a(CBS, 'CBS News')}). Microsoft renamed the software MS-DOS (${a(WIKI, 'Wikipedia')}). Sources give different totals, so the safe summary is the one in the video: about $50,000 for the rights.</p>

<h2 id="the-clause">What was the clause that made Microsoft?</h2>
<p>The licence to IBM was not exclusive. DocuSign's history of the deal says IBM was under the impression that it had sole rights, but Microsoft had included a clause that let it sell the same operating system to other companies (${a(DOCUSIGN, 'DocuSign')}).</p>
<p>That one line decided who would earn from the PC boom. IBM owned the machine it sold. Microsoft owned the software layer that any IBM-style machine needed.</p>

<h2 id="the-clones">How did the clones pay Microsoft?</h2>
<p>Other companies began copying IBM's hardware. To run the same programs, their machines needed the same operating system, and Microsoft was free to license it to them. Within a year it had licensed MS-DOS to 70 other companies, many of which were already cloning IBM's hardware platform (${a(DOCUSIGN, 'DocuSign')}; ${a(WIKI, 'Wikipedia')}).</p>
<p>IBM built the machine. Microsoft owned the one part every machine needed.</p>

<h2 id="small-business-lesson">What can a small business learn from IBM and Microsoft?</h2>
<p>This is our takeaway. A one-time sale pays you once. The layer your customers keep using pays you again and again, and it is the part a competitor cannot easily copy. For most small businesses, that layer is not the product in the box. It is:</p>
<ol>
<li><strong>Your customer list.</strong> Keep it in a place you own and control, not only inside a marketplace or a social app.</li>
<li><strong>Your follow-ups.</strong> The repeat order, the check-in after a job, the reminder before renewal. That is where repeat revenue comes from.</li>
<li><strong>Your process.</strong> Write down how you quote, deliver and follow up. A written process is something you can improve and hand off.</li>
</ol>
<p>Ask the IBM question about your own business: if someone copied what you sell tomorrow, what would they still not have? Spend more of your time on that.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Follow-ups and process are the work that slips when you are busy. Dooza Crew is free and runs in an app: install it from Google Play on Android, sign in, and use your agents. A lead AI agent works with helper agents that can browse the web and write files for you.</p>
<p>You stay in charge. Before anything is sent or paid, you approve it.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'Why did Microsoft get rich instead of IBM?', answer: 'IBM sold PC hardware, but its licence for the operating system was not exclusive. Microsoft kept the right to license MS-DOS to other companies, including makers cloning the IBM PC, and licensed it to more than 70 companies within a year.' },
        { question: 'Did Microsoft write MS-DOS?', answer: 'No. Microsoft bought an existing system, 86-DOS, from Seattle Computer Products, hired its author Tim Paterson, and renamed it MS-DOS.' },
        { question: 'How much did Microsoft pay for DOS?', answer: 'CBS News reports that Microsoft paid $25,000 for 86-DOS and then, on 27 July 1981, about $50,000 for full rights to it. Sources give different totals.' },
        { question: 'When did IBM sign with Microsoft and launch the PC?', answer: 'Bill Gates signed the contract to create an operating system for IBM on 6 November 1980. IBM launched its PC on 12 August 1981.' },
        { question: 'What is the lesson for small businesses?', answer: 'Own the layer your customers keep using, such as your customer list, your follow-ups and your process, not only the one-time product. That is what keeps paying you and what competitors cannot easily copy.' },
    ],
};

export default post;
