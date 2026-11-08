// Draft 2026-11-08. Facts only from [solid] items in
// /home/trajan/learned/knowledge/learnings/research/2026-11-08-blockbuster-facts.md. Quotes checked 2026-11-08 against:
// https://sports.yahoo.com/blockbuster-ceo-struggled-not-laugh-191553438.html ("struggling not to laugh", "The dot-com hysteria is completely overblown")
// https://fortune.com/2023/04/14/netflix-cofounder-marc-randolph-recalls-blockbuster-rejecting-chance-to-buy-it/ ("laughed us out of the room")
// https://www.newsweek.com/fact-check-did-blockbuster-turn-down-chance-buy-netflix-50-million-1575557 (Antioco's denial, quoted verbatim)
// Dooza Crew claims only from the approved list (no prices).
import { yt } from './helpers';

const VIDEO_ID = 'gN-g8-5F4iE';
const VIDEO_TITLE = 'Blockbuster Could Have Bought Netflix for $50 Million #Shorts';

const MARKETPLACE = 'https://www.marketplace.org/2020/09/08/ceo-reed-hastings-on-how-netflix-beat-blockbuster/';
const YAHOO = 'https://sports.yahoo.com/blockbuster-ceo-struggled-not-laugh-191553438.html';
const FORTUNE = 'https://fortune.com/2023/04/14/netflix-cofounder-marc-randolph-recalls-blockbuster-rejecting-chance-to-buy-it/';
const NEWSWEEK = 'https://www.newsweek.com/fact-check-did-blockbuster-turn-down-chance-buy-netflix-50-million-1575557';
const BLW = 'https://en.wikipedia.org/wiki/Blockbuster_LLC';
const BEND = 'https://en.wikipedia.org/wiki/Blockbuster_(Bend,_Oregon)';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=blockbuster-could-have-bought-netflix-50-million';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 549,
    title: 'Did Blockbuster Really Turn Down Buying Netflix for $50 Million?',
    seoTitle: 'Did Blockbuster Turn Down Netflix for $50 Million?',
    seoDescription: 'In 2000 Netflix offered to sell itself to Blockbuster for $50 million. Blockbuster said no, and filed for bankruptcy in 2010. What small businesses can learn.',
    excerpt: 'In 2000 Netflix\'s founders flew to Dallas and offered to sell their company to Blockbuster for $50 million. Blockbuster passed. Ten years later it filed for bankruptcy. The lesson: the big player dismissed a cheap new way of serving customers.',
    author: 'Dooza Team',
    date: '2026-11-08',
    modifiedDate: '2026-11-08',
    readTime: '5 min read',
    readTimeMinutes: 5,
    category: 'AI News',
    tags: ['Blockbuster', 'Netflix', 'Innovation', 'Small Business', 'AI Agents', 'Dooza Video'],
    image: '/blog/blockbuster-could-have-bought-netflix-50-million.jpg',
    imageAlt: 'Illustration of a video rental store shelf of tapes beside a red mail envelope holding a DVD',
    slug: 'blockbuster-could-have-bought-netflix-50-million',
    video: {
        name: VIDEO_TITLE,
        description: 'In 2000 Netflix offered to sell itself to Blockbuster for $50 million. Blockbuster passed, and filed for Chapter 11 bankruptcy in 2010.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-08',
    },
    tocData: [
        { id: 'the-meeting', label: 'The Dallas meeting' },
        { id: 'antioco-side', label: "Antioco's side" },
        { id: 'what-happened-next', label: 'What happened next' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Yes. In 2000, Netflix co-founders Reed Hastings and Marc Randolph, with CFO Barry McCarthy, met Blockbuster CEO John Antioco at Blockbuster's headquarters in Dallas and offered to sell Netflix for $50 million. Blockbuster said no. Both founders have written about it, and Antioco confirms the visit and the $50 million figure, though he says there were never serious acquisition talks. Netflix was losing money at the time and Blockbuster was about 100 times bigger. Ten years later, in 2010, Blockbuster filed for bankruptcy.</p>
<ul>
<li><strong>2000:</strong> Netflix offers itself to Blockbuster for $50 million in Dallas. Blockbuster passes.</li>
<li><strong>2010:</strong> Blockbuster filed for Chapter 11 on September 23, 2010 (${a(BLW, 'Wikipedia')}).</li>
<li><strong>Today:</strong> One store is left, in Bend, Oregon, the last Blockbuster since March 2019 (${a(BEND, 'Wikipedia')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza (@thedooza) on YouTube. <a href="https://www.youtube.com/shorts/${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="the-meeting">What happened in the Blockbuster and Netflix meeting?</h2>
<p>Netflix's founders flew to Dallas with an offer: Blockbuster could buy Netflix for $50 million. Hastings tells the story in his book No Rules Rules (${a(MARKETPLACE, 'excerpt via Marketplace')}).</p>
<p>Randolph says Antioco was not impressed. In his book, Randolph recalls Antioco telling them: "The dot-com hysteria is completely overblown." Randolph says he then saw a small twitch at the corner of Antioco's mouth and knew that "John Antioco was struggling not to laugh" (${a(YAHOO, 'Yahoo, on Randolph\'s book')}). Years later Randolph put it more bluntly: Blockbuster "laughed us out of the room" (${a(FORTUNE, 'Fortune, 2023')}).</p>

<h2 id="antioco-side">What does Blockbuster's CEO say?</h2>
<p>Antioco tells it differently. He told Newsweek there were never any serious acquisition talks with Netflix in 2000. In a LinkedIn post he confirms the Netflix team visited to "discuss a potential business arrangement and apparently offered to sell their company for $50 million." He adds: "I was not a part of that meeting, although I did stop by to greet our guests, as was my custom." And: "In the end, it doesn't appear that anyone, including Netflix, felt their company was worth $50 million at that time" (${a(NEWSWEEK, 'Newsweek fact-check')}).</p>
<p>So the offer and the number are not in dispute. How seriously Blockbuster took it is.</p>

<h2 id="what-happened-next">What happened to Blockbuster after it passed?</h2>
<p>Blockbuster filed for Chapter 11 bankruptcy on September 23, 2010 and said it would keep its 3,300 stores open (${a(BLW, 'Wikipedia')}). Netflix kept going. Today a single Blockbuster remains, at 211 NE Revere Ave in Bend, Oregon, the last one on Earth since March 2019 (${a(BEND, 'Wikipedia')}).</p>

<h2 id="small-business-lesson">What can small-business owners learn from Blockbuster?</h2>
<p>This is our takeaway. Blockbuster was not beaten by a bigger rival. It was beaten by a small, money-losing company with a cheaper, easier way of serving the same customers. Netflix looked too small to matter, and online looked like a fad. The big player judged the newcomer by its size today, not by where customers were heading.</p>
<p>Many small businesses look at AI agents the same way: a toy, a fad, or something for big companies. But the real question is not how big AI looks now. It is whether your customers will soon expect what it makes easy: a call answered at 9 pm, a quote the same day, a follow-up that never slips. A few practical steps:</p>
<ol>
<li><strong>Test it small before you judge it.</strong> Give one task, like lead follow-up, to an agent for a couple of weeks and see what it does.</li>
<li><strong>Judge by your customers, not the hype.</strong> Ask what your customers would like done faster, then see if an agent can help.</li>
<li><strong>Don't laugh off the cheap option.</strong> Blockbuster's mistake was dismissing the cheaper way. Try it before a competitor does.</li>
<li><strong>Keep a person in charge of what goes out.</strong> New tools are safest when you approve their work before customers see it.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew is free to use: install the app and start. Crew gives you a lead AI agent plus helper agents you chat with on web or phone. Crew agents take phone calls too.</p>
<p>Agents ask for your approval before they send or pay. Nothing reaches a customer until you approve it.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: 'Did Blockbuster really turn down buying Netflix for $50 million?', answer: 'Yes. In 2000 Netflix co-founders Reed Hastings and Marc Randolph offered to sell Netflix to Blockbuster for $50 million at its Dallas headquarters, and Blockbuster declined. Former CEO John Antioco confirms the visit and the figure but says there were never serious acquisition talks.' },
        { question: 'Did Blockbuster laugh at Netflix?', answer: 'Randolph says so. In his book he writes that CEO John Antioco was struggling not to laugh, and he later said Blockbuster laughed them out of the room. Antioco disputes that version of the meeting.' },
        { question: 'When did Blockbuster go bankrupt?', answer: 'Blockbuster filed for Chapter 11 bankruptcy on September 23, 2010 and said it would keep its 3,300 stores open at first.' },
        { question: 'Is there still a Blockbuster open?', answer: 'Yes, one. The store in Bend, Oregon has been the last Blockbuster on Earth since March 2019.' },
        { question: 'What is the lesson from Blockbuster for small businesses?', answer: 'Do not dismiss a cheaper, easier way of serving your customers because it looks small today. Test new tools like AI agents on one task, judge them by what your customers want, and keep a person approving what goes out.' },
    ],
};

export default post;
