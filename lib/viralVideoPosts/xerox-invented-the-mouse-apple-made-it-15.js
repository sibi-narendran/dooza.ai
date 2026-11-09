// Draft 2026-11-09. Facts only from /home/trajan/content/explainer/xerox-mouse/sources.md, each confirmed on a page opened 2026-11-09.
// Video is private until 20:30 IST 2026-11-09: no transcript fetched; title as given in the brief.
// UNVERIFIED (kept out of the post):
// - "December 1979" for the PARC visit: Gladwell's page says only "In late 1979".
// - Xerox Star "1981 priced $16,595", "commercial failure": Gladwell's page says Xerox sold "a successor to the Alto in 1981", "slow and underpowered"; no $16,595 and no "Star" product name seen.
// - Macintosh "$2,495": CHM's 1984 timeline says "Its price was $2,500" (used instead).
// - Xerox Alto "1973" and the "ten-year / 11-year head start": no CHM page opened showed the Alto's 1973 date.
// - "Hovey-Kelley" firm name: Gladwell names Dean Hovey and "the industrial-design firm that would become known as IDEO" (used instead).
// Facts:
// - Jobs visited Xerox PARC in late 1979 · https://www.newyorker.com/magazine/2011/05/16/creation-myth
// - Xerox could buy 100,000 Apple shares for $1 million, IPO "a year away" · https://www.newyorker.com/magazine/2011/05/16/creation-myth
// - Xerox mouse cost $300 to build, broke within two weeks; Apple spec under $15 · https://www.newyorker.com/magazine/2011/05/16/creation-myth
// - Xerox sold a successor to the Alto in 1981; later withdrew from personal computers · https://www.newyorker.com/magazine/2011/05/16/creation-myth
// - First Alto cost Xerox $12,000; as a product might have been $40,000 · https://www.computerhistory.org/revolution/input-output/14/347
// - Macintosh launched 1984 (Super Bowl ad January 22, 1984), price $2,500 · https://www.computerhistory.org/timeline/1984/
// Dooza Crew claims only from the approved list (no prices).
import { yt } from './helpers';

const VIDEO_ID = 'WDLJlyrh1LM';
const VIDEO_TITLE = 'Xerox invented the mouse, Apple made it $15';

const NEWYORKER = 'https://www.newyorker.com/magazine/2011/05/16/creation-myth';
const CHM_ALTO = 'https://www.computerhistory.org/revolution/input-output/14/347';
const CHM_1984 = 'https://www.computerhistory.org/timeline/1984/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=xerox-invented-the-mouse-apple-made-it-15';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 550,
    title: 'Xerox Invented the Mouse. Why Did Apple Win With It?',
    seoTitle: 'Xerox Invented the Mouse, Apple Made It $15',
    seoDescription: 'Xerox PARC built a $300 mouse that broke in two weeks. Apple asked for one under $15 that worked on jeans. What small businesses can learn from it.',
    excerpt: 'In late 1979 Steve Jobs saw the mouse at Xerox PARC. Xerox\'s mouse cost $300 to build and broke within two weeks. Apple asked for one under $15. The lesson: inventing is not the win. Shipping a cheap, usable version is.',
    author: 'Dooza Team',
    date: '2026-11-09',
    modifiedDate: '2026-11-09',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Xerox PARC', 'Apple', 'Steve Jobs', 'Innovation', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/xerox-invented-the-mouse-apple-made-it-15.jpg',
    imageAlt: 'Illustration of an early three-button computer mouse beside a simple one-button mouse',
    slug: 'xerox-invented-the-mouse-apple-made-it-15',
    video: {
        name: VIDEO_TITLE,
        description: 'Xerox PARC built a mouse that cost $300 and broke within two weeks. Apple asked for one that cost under $15, and put it on the Macintosh.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-09',
    },
    tocData: [
        { id: 'the-visit', label: 'The visit to Xerox PARC' },
        { id: 'the-15-mouse', label: 'The $15 mouse' },
        { id: 'what-xerox-did', label: 'What Xerox did next' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Xerox built the mouse into its research computers, but Apple turned it into a product people could buy. In late 1979, Steve Jobs toured Xerox PARC and saw a mouse driving a cursor on the Alto computer. Xerox's mouse cost $300 to build and broke within two weeks. Jobs then asked designer Dean Hovey for a mouse that cost less than $15 and worked on a desk or a pair of jeans. Apple shipped it with the Macintosh in 1984. Xerox had the idea first. Apple won by making it cheap and usable (${a(NEWYORKER, 'Malcolm Gladwell, The New Yorker, 2011')}).</p>
<ul>
<li><strong>Late 1979:</strong> Jobs visits Xerox PARC and sees the Alto and its mouse.</li>
<li><strong>1981:</strong> Xerox sells a successor to the Alto. It is slow and underpowered.</li>
<li><strong>1984:</strong> Apple launches the Macintosh at $2,500 (${a(CHM_1984, 'Computer History Museum')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-visit">What did Steve Jobs see at Xerox PARC?</h2>
<p>Apple was about a year from its IPO, and many people wanted a piece of it. Jobs offered Xerox a deal: Xerox could buy 100,000 Apple shares for $1 million if PARC would show him what it was working on. At PARC he stood in front of the Xerox Alto, PARC's personal computer, while an engineer moved a cursor across the screen with a mouse (${a(NEWYORKER, 'The New Yorker')}).</p>
<p>The Alto was never cheap. The Computer History Museum notes that the first one cost Xerox $12,000, and that as a product it might have been priced at $40,000 (${a(CHM_ALTO, 'Computer History Museum')}).</p>

<h2 id="the-15-mouse">How did Apple make a $15 mouse?</h2>
<p>Right after the visit, Jobs met Dean Hovey, a founder of the design firm that would become IDEO. Hovey recalls Jobs telling him the Xerox mouse "cost three hundred dollars to build and it breaks within two weeks." His spec was simple: "Our mouse needs to be manufacturable for less than fifteen bucks." It also had to last a couple of years and work "on Formica and my bluejeans" (${a(NEWYORKER, 'The New Yorker')}).</p>
<p>Hovey went shopping for parts, including deodorants with a ball in them. The PARC mouse used ball bearings and could not handle dust and grime. His team found a way to let the ball roll freely. Gladwell sums up the gap as "three buttons and one button, three hundred dollars and fifteen dollars."</p>

<h2 id="what-xerox-did">What did Xerox do with its invention?</h2>
<p>Xerox began selling a successor to the Alto in 1981. Gladwell describes it as slow and underpowered, and says Xerox ultimately withdrew from personal computers. Apple's Macintosh came out in 1984 at $2,500, and the Computer History Museum calls it "the first successful mouse-driven computer with a graphical user interface" (${a(CHM_1984, 'Computer History Museum')}).</p>
<p>Xerox did not even own the original idea. Gladwell notes that PARC got the mouse from Douglas Engelbart at Stanford Research Institute. Being first did not decide the winner.</p>

<h2 id="small-business-lesson">What can small businesses learn from the Xerox mouse?</h2>
<p>This is our takeaway. Inventing is not the win. Shipping a cheap, usable version is. Xerox had a brilliant mouse that cost too much and broke too fast. Apple asked a plain question: what would this need to cost, and how tough would it need to be, for normal people to use it every day?</p>
<p>Small businesses can use the same test, with their own offers and with the tools they adopt:</p>
<ol>
<li><strong>Cut it down to what people use.</strong> Apple went from three buttons to one. Drop the features your customers never touch.</li>
<li><strong>Set a price and a durability target first.</strong> Jobs's spec was a price ceiling and a lifespan, before any design work. Write yours before you build.</li>
<li><strong>Test it in real conditions.</strong> Formica and bluejeans, not a lab. Try the thing where your customers will use it.</li>
<li><strong>Don't wait for the perfect version.</strong> A cheap tool you use today beats a great one you never start.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>AI agents are at their own Xerox moment: impressive demos, but the win goes to the version a small business can actually use. Dooza Crew is free: install the app and start. Crew agents work on web and phone.</p>
<p>Before an agent sends or pays, it asks you to approve. You stay in charge of what goes out.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'Did Xerox invent the computer mouse?', answer: 'No. Xerox PARC developed the mouse for its Alto computer, but the idea came from Douglas Engelbart at Stanford Research Institute. Apple then made it cheap enough to sell.' },
        { question: 'How much did the Xerox mouse cost compared to the Apple mouse?', answer: 'According to designer Dean Hovey, the Xerox mouse cost $300 to build and broke within two weeks. Steve Jobs asked for a mouse that could be made for less than $15.' },
        { question: 'Did Steve Jobs steal the mouse from Xerox?', answer: 'Not exactly. Jobs arranged the PARC visit in a deal that let Xerox buy 100,000 Apple shares for $1 million before Apple went public. Apple then redesigned the mouse to be simpler and much cheaper.' },
        { question: 'What is the lesson from the Xerox mouse for small businesses?', answer: 'Inventing something is not the win. Shipping a cheap, usable version is. Cut features to what customers use, set a price target first, and test in real conditions.' },
    ],
};

export default post;
