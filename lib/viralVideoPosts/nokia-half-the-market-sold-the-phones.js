// Draft 2026-11-11. Facts only from /home/trajan/content/explainer/nokia-iphone/sources.md.
// Transcript: learned/knowledge/learnings/sources/yt/20261111_pVzRfCJf4yw.txt (fetched 2026-11-11).
// Source pages: curl of Light Reading, Mobile Marketing Magazine and wirelessandmobilenews returned no text 2026-11-11,
// so the numbers below are as recorded in Trajan's sources.md, NOT re-opened in this run (unverified here).
// Kept out: Samsung passing Nokia in Q1 2012 ("widely reported", no URL); PhoneArena $7.17B (no URL).
// Facts: content/drafts/video-posts/nokia-half-the-market-sold-the-phones-facts.md
// Dooza Crew claims only from the approved list (no prices).
import { yt } from './helpers';

const VIDEO_ID = 'pVzRfCJf4yw';
const VIDEO_TITLE = 'Nokia Had Half the Market. Then It Sold the Phones.';

const ITPRO = 'https://www.itpro.com/603516/nokia-maintains-smartphone-lead';
const WMN = 'https://www.wirelessandmobilenews.com/2008/09/322-million-world-smartphone-s.html';
const CIOL = 'https://www.ciol.com/mobile-phone-sales-grew-pc-q3-07-gartner';
const LIGHTREADING = 'https://www.lightreading.com/business-management/nokia-s-burning-platform-memo';
const TNW = 'https://thenextweb.com/news/nokia-ceo-stephen-elop-says-we-are-standing-on-a-burning-platform';
const MMM = 'https://mobilemarketingmagazine.com/microsoft-to-buy-nokias-mobile-business-for-544bn/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=nokia-half-the-market-sold-the-phones';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 553,
    title: 'Nokia Had Half the Market. Why Did It Lose to the iPhone?',
    seoTitle: 'Nokia Had Half the Market. Then It Sold the Phones.',
    seoDescription: 'Nokia sold 50.8% of the world\'s smartphones in Q2 2007. Six years later it sold its phone business to Microsoft. What small businesses can learn from it.',
    excerpt: 'In Q2 2007 Nokia sold 50.8% of the world\'s smartphones. The iPhone went on sale June 29, 2007. In September 2013 Microsoft agreed to buy Nokia\'s phone business for €5.44 billion. Our take: Nokia lost because it waited.',
    author: 'Dooza Team',
    date: '2026-11-11',
    modifiedDate: '2026-11-11',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Nokia', 'iPhone', 'Apple', 'Microsoft', 'Innovation', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/nokia-half-the-market-sold-the-phones.jpg',
    imageAlt: 'Illustration of a sturdy keypad phone beside a touchscreen smartphone',
    slug: 'nokia-half-the-market-sold-the-phones',
    video: {
        name: VIDEO_TITLE,
        description: 'In 2007 Nokia sold about half the world\'s smartphones. Six years later it sold its whole phone business to Microsoft. Here is how.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-11',
    },
    tocData: [
        { id: 'nokia-on-top', label: 'Nokia on top in 2007' },
        { id: 'the-iphone', label: 'The iPhone arrives' },
        { id: 'burning-platform', label: 'The burning platform memo' },
        { id: 'the-sale', label: 'The sale to Microsoft' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Nokia lost to the iPhone by sticking with its own way of building phones while the market moved to touchscreens, apps and software. In Q2 2007, Nokia sold 50.8% of the world's smartphones, according to Gartner (${a(WMN, 'Wireless and Mobile News')}). Apple's iPhone went on sale in the US on June 29, 2007. In February 2011, new CEO Stephen Elop told staff in a memo that Nokia was standing on a "burning platform" (${a(LIGHTREADING, 'Light Reading')}). In September 2013, Microsoft agreed to buy Nokia's Devices & Services business for €5.44 billion, and the deal closed in April 2014 (${a(MMM, 'Mobile Marketing Magazine')}). In our view, Nokia didn't lose because it stopped working. It lost because it waited.</p>
<ul>
<li><strong>Q2 2007:</strong> Nokia has 50.8% of worldwide smartphone sales (Gartner).</li>
<li><strong>June 29, 2007:</strong> The iPhone goes on sale in the US.</li>
<li><strong>February 2011:</strong> Elop's "burning platform" memo.</li>
<li><strong>September 2013:</strong> Microsoft agrees to buy Nokia's phone business for €5.44 billion. The deal closes in April 2014.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="nokia-on-top">How big was Nokia in 2007?</h2>
<p>Huge. Gartner's figures put Nokia at 50.8% of worldwide smartphone sales in Q2 2007 (${a(ITPRO, 'ITPro')}, ${a(WMN, 'Wireless and Mobile News')}). A year later, in Q2 2008, that share was 47.5%. Nokia was also the biggest maker of mobile phones overall, with 38.1% of all phones sold in Q3 2007 (${a(CIOL, 'Gartner via CIOL')}).</p>
<p>Nokia phones had a reputation for being tough. The video jokes that if you dropped one, the floor cracked.</p>

<h2 id="the-iphone">What changed when the iPhone launched?</h2>
<p>The iPhone went on sale in the US on June 29, 2007, with a big touchscreen and almost no buttons. Our opinion: the iPhone was not really about the phone. It was about apps and software that kept getting better.</p>
<p>Nokia stayed on its own platforms, Symbian and MeeGo, for years after that. Being the biggest phone maker in the world made it easy to keep building phones its own way.</p>

<h2 id="burning-platform">What was Nokia's "burning platform" memo?</h2>
<p>Stephen Elop became Nokia's CEO in September 2010. On February 9, 2011, his memo to employees was reported by Light Reading and The Next Web (${a(LIGHTREADING, 'Light Reading')}, ${a(TNW, 'The Next Web')}). Its message: Nokia was standing on a "burning platform." The memo discussed where Symbian and MeeGo had fallen short. That same month Nokia announced a partnership with Microsoft to use Windows Phone.</p>

<h2 id="the-sale">When did Nokia sell its phone business?</h2>
<p>In early September 2013, Microsoft agreed to buy substantially all of Nokia's Devices & Services business for €5.44 billion: €3.79 billion for the business and €1.65 billion for a patent licence (${a(MMM, 'Mobile Marketing Magazine')}). The deal closed in April 2014. That is six years after Nokia had half the smartphone market.</p>

<h2 id="small-business-lesson">What can small businesses learn from Nokia?</h2>
<p>This is our takeaway. Being big, and good at what you already do, does not protect you when the way work gets done changes. Nokia's phones still worked. It waited too long to change how it built them.</p>
<p>In our view, AI agents are the new iPhone for small businesses. The ones who wait lose. A few ways to avoid Nokia's mistake:</p>
<ol>
<li><strong>Don't let past success set the plan.</strong> What won last year is not proof it wins next year.</li>
<li><strong>Watch where the software is going.</strong> The iPhone won on apps and updates, not hardware.</li>
<li><strong>Start small, now.</strong> Try one AI agent on one real task this week instead of waiting for the perfect moment.</li>
<li><strong>Don't wait for a burning platform.</strong> By the time a memo like Elop's is needed, the choice is already late.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>If AI agents are this decade's iPhone, the cheapest move is to start using one. Dooza Crew is free: install the app and start. Crew agents work on web and phone.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'What happened to Nokia phones?', answer: 'Nokia sold 50.8% of the world\'s smartphones in Q2 2007 (Gartner). After the iPhone and Android, it lost ground, partnered with Microsoft in 2011, and in September 2013 agreed to sell its Devices & Services business to Microsoft for €5.44 billion. The deal closed in April 2014.' },
        { question: 'Why did Nokia lose to the iPhone?', answer: 'Nokia stayed on its own Symbian and MeeGo platforms while the iPhone, launched June 29, 2007, made the phone about touchscreens, apps and software. In our opinion, Nokia lost because it waited too long to change.' },
        { question: 'What was the Nokia burning platform memo?', answer: 'A February 2011 memo to employees from new CEO Stephen Elop, reported on February 9, 2011, saying Nokia was on a "burning platform." It discussed Symbian and MeeGo falling short.' },
        { question: 'How much did Microsoft pay for Nokia\'s phone business?', answer: '€5.44 billion: €3.79 billion for the Devices & Services business and €1.65 billion for a patent licence. Announced September 2013, closed April 2014.' },
        { question: 'What is the lesson from Nokia for small businesses?', answer: 'Our view: being big and good at what you do does not protect you when the way work gets done changes. With AI agents, start small now instead of waiting.' },
    ],
};

export default post;
