// Facts: content/drafts/video-posts/knight-capital-440-million-45-minutes-facts.md
import { yt } from './helpers';

const VIDEO_ID = 'jqgX4rpTGC8';
const VIDEO_TITLE = '$440 Million Gone in 45 Minutes. No Hacker.';
const SLUG = 'knight-capital-440-million-45-minutes';

const SEC_ORDER = 'https://www.sec.gov/litigation/admin/2013/34-70694.pdf';
const SEC_PR = 'https://www.sec.gov/newsroom/press-releases/2013-222';
const KNIGHT_AUG2 = 'https://www.sec.gov/Archives/edgar/data/1060749/000119312512332176/d391111dex991.htm';
const KNIGHT_AUG6 = 'https://www.sec.gov/Archives/edgar/data/1060749/000119312512338098/d392396d8k.htm';
const CREW = `https://crew.dooza.ai/?utm_source=dooza&amp;utm_medium=blog&amp;utm_content=${SLUG}`;
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 545,
    title: 'What Happened to Knight Capital? $440 Million Lost in 45 Minutes, No Hacker',
    seoTitle: 'What Happened to Knight Capital? $440M in 45 Minutes',
    seoDescription: 'On August 1, 2012, old code on one of eight servers sent millions of orders in 45 minutes. Knight Capital lost over $440 million. What went wrong and why.',
    excerpt: 'On August 1, 2012, Knight Capital lost hundreds of millions of dollars in about 45 minutes. No hacker was involved. A bad software deploy woke up old code, and nothing stopped it. Here is the timeline, the cost and the lesson for anyone letting software or AI act for them.',
    author: 'Dooza Team',
    date: '2026-11-04',
    modifiedDate: '2026-11-04',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Knight Capital', 'Software Failure', 'Automation Risk', 'Kill Switch', 'Human in the Loop', 'Dooza Video'],
    image: `/blog/${SLUG}.jpg`,
    imageAlt: 'Soft watercolor illustration of a trading desk at market open, with a wall of screens filling with red order tickets and a clock showing 9:30',
    slug: SLUG,
    video: {
        name: VIDEO_TITLE,
        description: 'How Knight Capital lost hundreds of millions of dollars in 45 minutes on August 1, 2012, with no hacker involved: old code, a missed server and no way to stop it.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-03',
    },
    tocData: [
        { id: 'what-happened', label: 'What happened' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'why', label: 'Why it happened' },
        { id: 'cost', label: 'What it cost' },
        { id: 'lesson', label: 'The lesson for software and AI agents' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What happened to Knight Capital?</h2>
<p><strong>On August 1, 2012, a trading router at Knight Capital ran old, broken code on one of its eight servers. In about 45 minutes it sent millions of orders into the US stock market and built up billions of dollars in positions nobody wanted. Knight first reported a pre-tax loss of about $440 million; the SEC later put it at more than $460 million. No hacker was involved.</strong></p>
<ul>
<li><strong>The cause was a deploy.</strong> New code went to seven of eight servers. The eighth still had old code called "Power Peg," and a reused flag switched it on.</li>
<li><strong>There were warnings.</strong> Before the market opened, Knight's systems sent 97 automated emails that named the error. The SEC found staff "generally did not review them."</li>
<li><strong>Nothing stopped it.</strong> The SEC found Knight had no procedures to halt the router when it misbehaved, and no firm-wide capital limit that blocked new orders.</li>
<li><strong>The bill.</strong> A $400 million rescue investment five days later, and a $12 million SEC penalty in 2013.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published November 3, 2026. Narrated by an AI voice with AI illustrations; sources below. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="timeline">What is the Knight Capital timeline?</h2>
<p>All dates come from the ${a(SEC_ORDER, 'SEC order')} unless noted.</p>
<table><thead><tr><th>Date</th><th>What happened</th><th>Source</th></tr></thead><tbody>
<tr><td>2003</td><td>Knight stops using its "Power Peg" function. The code stays on the servers.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>2005</td><td>Knight moves the share-counting part of Power Peg. It does not retest Power Peg afterwards.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>July 27, 2012</td><td>Knight starts deploying new code for the NYSE Retail Liquidity Program, server by server.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>Aug 1, 2012, about 8:01 a.m. ET</td><td>Automated emails start flagging "Power Peg disabled." 97 go out before the 9:30 a.m. open.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>Aug 1, 2012, from the open</td><td>For about 45 minutes the router sends millions of orders while staff hunt for the cause.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>Aug 2, 2012</td><td>Knight reports a realized pre-tax loss of about $440 million.</td><td>${a(KNIGHT_AUG2, 'Knight press release (8-K)')}</td></tr>
<tr><td>Aug 6, 2012</td><td>Knight sells $400 million of preferred stock to a group of investors.</td><td>${a(KNIGHT_AUG6, 'Knight 8-K')}</td></tr>
<tr><td>July 1, 2013</td><td>Knight's parent and GETCO combine to form KCG Holdings.</td><td>${a(SEC_ORDER, 'SEC order')}</td></tr>
<tr><td>Oct 16, 2013</td><td>Knight agrees to pay $12 million to settle SEC charges.</td><td>${a(SEC_PR, 'SEC press release')}</td></tr>
</tbody></table>

<h2 id="why">Why did it happen?</h2>
<p>The SEC order lays out a chain of small failures. None of them was a hack.</p>
<h3>1. Old code was left switched on</h3>
<p>Knight's router, called SMARS, still held code for a function called "Power Peg." Knight stopped using it in 2003, but the SEC says it "remained present and callable." In 2005 Knight moved the part that counted filled shares, and it did not retest Power Peg. So if Power Peg ever ran again, it would not know when to stop.</p>
<h3>2. A flag got a new job</h3>
<p>The new code reused a flag that used to turn on Power Peg. The plan was that the flag would now turn on the new feature instead.</p>
<h3>3. One of eight servers was missed</h3>
<p>The SEC says one technician "did not copy the new code to one of the eight SMARS computer servers." No second person reviewed the deploy, and Knight "had no written procedures that required such a review." On August 1, the seven updated servers worked. Orders that reached the eighth server woke up Power Peg. It kept sending child orders for each customer order, with no regard for how many shares had already been bought.</p>
<h3>4. The warnings were ignored</h3>
<p>From about 8:01 a.m. ET, an internal system sent emails, known as "BNET rejects," that named an error: "Power Peg disabled." It sent 97 of them before the open. The SEC says Knight did not design them as alerts and staff "generally did not review them." They were not acted on before the open.</p>
<h3>5. There was no way to stop it</h3>
<p>This is the part that turned a bug into a disaster. The SEC found Knight "did not have procedures in place to halt SMARS’s operations in response to its own aberrant activity." Its main risk tool "relied entirely on human monitoring" and did not block orders when limits were passed. Knight also had no firm-wide capital limit wired to stop new orders. Then, trying to fix things live, staff removed the new code from the seven good servers. The SEC says "This action worsened the problem," because those servers started running Power Peg too.</p>

<h2 id="cost">What did it cost Knight Capital?</h2>
<ul>
<li><strong>The trades.</strong> To fill 212 customer orders, the router sent millions of orders. That produced 4 million executions in 154 stocks, for more than 397 million shares, in about 45 minutes.</li>
<li><strong>The positions.</strong> Knight ended up with a net long position of about $3.5 billion in 80 stocks and a net short position of about $3.15 billion in 74 stocks.</li>
<li><strong>The loss.</strong> On August 2, Knight said it had traded out of the position, with a "realized pre-tax loss of approximately $440 million." The SEC order later said Knight "lost more than $460 million." The short video uses the first number.</li>
<li><strong>The rescue.</strong> On August 6, 2012, Knight sold preferred stock to a group of investors for $400 million in cash. That stock equaled about 73% of the common stock on an as-converted basis. Knight's Finance and Audit Committee said waiting for a shareholder vote "would seriously jeopardize the financial viability of the Company." Details are in the ${a(KNIGHT_AUG6, '8-K')}.</li>
<li><strong>The fine.</strong> In October 2013 Knight agreed to pay $12 million. The SEC called it its first enforcement action under the market access rule, per its ${a(SEC_PR, 'press release')}.</li>
</ul>
<p>The damage reached other traders too. For 37 stocks, the price moved by more than 10% and Knight's trades were more than half the volume, according to the ${a(SEC_ORDER, 'SEC order')}.</p>

<h2 id="lesson">What is the lesson for businesses using software or AI agents?</h2>
<p>This part is our own takeaway, not the SEC's. Knight's software did exactly what its code told it to do. It did it very fast, with real money, and nobody could stop it in time. Any business that lets software or AI agents act for it faces a smaller version of the same risk.</p>
<p>The SEC's Daniel Hawke put the question well. Firms must ask "what would happen if the component malfunctions and what safety nets are in place to limit the harm it could cause." He added that "Knight Capital’s failure to ask these questions had catastrophic consequences," in the ${a(SEC_PR, 'SEC press release')}.</p>
<p>For a small business, three safety nets cover most of it:</p>
<ol>
<li><strong>A human approval before anything you cannot undo.</strong> Sending an email, paying an invoice, placing an order. Knight had no second person checking its deploy. Make the agent ask first.</li>
<li><strong>A hard spending cap.</strong> Knight's limits did not block new orders. A cap that actually stops spending turns a runaway into a small bill.</li>
<li><strong>A way to stop it, and a reason to look.</strong> You need to see what the agent is doing and be able to halt it. Warnings that nobody reads, like Knight's 97 emails, do not count.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew gives a small business AI employees, each with its own computer and a real browser. You watch every step live in chat, and before an agent clicks Send or Pay, it asks you: Approve, Edit or Reject. Each account has a hard cap on AI spend. Free: install the app and start.</p>
<p><a href="${CREW}">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'What happened to Knight Capital in 2012?', answer: 'On August 1, 2012, Knight Capital\'s order router ran old code on one of its eight servers. In about 45 minutes it sent millions of orders and built billions of dollars in unwanted positions. Knight reported a pre-tax loss of about $440 million; the SEC later put the loss at more than $460 million.' },
        { question: 'Was Knight Capital hacked?', answer: 'No. The SEC order describes a software deployment failure. New code was not copied to one of eight servers, and a reused flag switched on old code called Power Peg on that server.' },
        { question: 'Did Knight Capital lose $440 million or $460 million?', answer: 'Both numbers come from official filings. Knight\'s August 2, 2012 press release reported a realized pre-tax loss of approximately $440 million. The SEC order of October 2013 said Knight lost more than $460 million.' },
        { question: 'How was Knight Capital rescued?', answer: 'On August 6, 2012, Knight sold $400 million of preferred stock to a group of investors that included Jefferies, Blackstone, GETCO, TD Ameritrade, Stephens and Stifel, according to its 8-K filing. In 2013 Knight\'s parent combined with GETCO to form KCG Holdings.' },
        { question: 'How much was the SEC fine for Knight Capital?', answer: 'Knight agreed to pay $12 million in October 2013 to settle charges that it broke the SEC market access rule. The SEC said it was its first enforcement action under that rule.' },
        { question: 'What can a business learn from Knight Capital about AI agents?', answer: 'Put a human approval in front of any action you cannot undo, set a hard spending cap that actually blocks spending, and make sure you can see and stop what the software is doing. The SEC found Knight had no second reviewer for its deploy, no firm-wide capital limit that blocked orders, and no procedures to halt the router.' },
    ],
};

export default post;
