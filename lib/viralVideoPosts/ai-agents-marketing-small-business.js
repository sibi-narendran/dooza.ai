import { yt, doozaSummary } from './helpers';

const VIDEO_ID = 'uJuxenfe-NU';
const VIDEO_TITLE = 'AI Agents are too good at marketing now';
const WATCH = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const CHANNEL = 'https://www.youtube.com/@GregIsenberg';
const TRY = 'https://www.dooza.ai/try?utm_source=blog&amp;utm_content=ai-agents-marketing-small-business';

const post = {
    id: 551,
    title: 'Can AI Agents Do Your Marketing? What Greg Isenberg\'s Show Got Right',
    seoTitle: 'AI Agents for Marketing: What Small Businesses Can Do',
    seoDescription: 'On Greg Isenberg\'s show, Cody Schneider built ads with AI agents for about $5 each. What it takes: data, ad access, tools, and a human check before going live.',
    excerpt: 'Yes, AI agents can now make ads and run parts of your marketing, but only if you give them data, access and tools, and keep a human check before anything goes live. Here is what Greg Isenberg and Cody Schneider showed, and what a small business can take from it.',
    author: 'Dooza Team',
    date: '2026-11-10',
    modifiedDate: '2026-11-10',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'AI News',
    tags: ['AI Agents', 'AI Marketing', 'AI Ads', 'UGC', 'Human in the Loop', 'Dooza Video'],
    image: '/blog/ai-agents-marketing-small-business.jpg',
    imageAlt: 'Soft watercolor illustration of a laptop showing a grid of ad drafts, with a phone beside it asking for approval',
    slug: 'ai-agents-marketing-small-business',
    video: {
        name: VIDEO_TITLE,
        description: 'Greg Isenberg and Cody Schneider show how AI agents make static ads and AI UGC video ads, and the data, access and tools an agent needs to do marketing work.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-09',
    },
    tocData: [
        { id: 'what-it-needs', label: 'What an agent needs' },
        { id: 'what-they-built', label: 'What they built live' },
        { id: 'cost', label: 'What it cost' },
        { id: 'human-gate', label: 'Keep a human gate' },
        { id: 'small-business', label: 'What a small business can do' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Yes, AI agents can now do real marketing work, like writing ad ideas, making static ads and editing video ads, if you give them your data, access to your ad accounts and the right tools. The catch is that you still need a person to check the work before it goes live.</p>
<ul>
<li><strong>The setup matters more than the model.</strong> Cody Schneider says an agent needs three things: business data, access to ad platforms, and API tools.</li>
<li><strong>Ads got cheap.</strong> On the show, a UGC-style video ad with motion graphics came out for "about $5," by his count.</li>
<li><strong>Think in jobs, not employees.</strong> His advice is to turn one job a person did into a repeatable workflow.</li>
<li><strong>Keep a human gate.</strong> He describes a step where a human approves "before any of this goes live."</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500"><strong>Video credit:</strong> “${VIDEO_TITLE}” by <a href="${CHANNEL}" target="_blank" rel="noopener noreferrer">Greg Isenberg</a>, with guest Cody Schneider, published November 9, 2026 on YouTube. <a href="${WATCH}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>. All rights to the video belong to its creator; we embed it with YouTube's standard player and add our own commentary. Quotes come from a transcript of the video.</p>

<h2 id="what-it-needs">What does an AI agent need to do marketing?</h2>
<p>Schneider's main point is that the work itself has changed. In his words:</p>
<blockquote><p>"all marketing is now just code. It's just software and tokens."</p></blockquote>
<p>But an agent can only do that work inside a good setup. He lists three parts:</p>
<ol>
<li><strong>Data.</strong> Your ad, analytics, CRM and payment data, gathered in one place so the agent can see what actually makes money.</li>
<li><strong>Access.</strong> Permission to post to your ad platforms, website or CMS.</li>
<li><strong>Tools.</strong> API access to image, video, transcription and lead data services.</li>
</ol>
<p>He also warns about letting an agent hammer ad platform APIs. He says agents "will go and just like do a thousand requests at once," which breaks the platforms' terms of service. On the show, the advice was: "you should assume your agents are like drunk patrons at a restaurant."</p>

<h2 id="what-they-built">What did they build on the show?</h2>
<p>Schneider ran a static-ads skill on several brands, including Greg's Idea Browser and Late Checkout, plus Cursor. For each one, he said, the agent pulls the brand style from the website, checks the brand's Facebook ad library, researches pain points from Reddit and social media, proposes five ad concepts, then makes the images.</p>
<p>For Idea Browser, one of the headlines it proposed was "Stop guessing which idea to build." Then he turned the same ideas into an AI avatar video ad with captions and motion graphics. He gave a scale example too: "getting a human to audit 5,000 search terms in 20 seconds is impossible."</p>

<h2 id="cost">What did the ads cost?</h2>
<p>These are Schneider's own figures from the video, not numbers we checked. He said the video ad cost about $4.75 projected, plus a few cents for motion graphics: "basically I'm getting this ad out for about $5." He compared that with "the range of $500 plus" to have a single ad made the old way. He also said human UGC creators they work with were paid "like $40 a video" in one example.</p>
<p>He was open about the flaws. The first video came out at 480p and needed upscaling. He also said the motion graphics "didn't do this perfect on the first shot."</p>

<h2 id="human-gate">Why keep a human in the loop?</h2>
<p>This is the part small businesses should copy. Early in the episode, Schneider describes a step that says:</p>
<blockquote><p>"Hey, I need this human involvement before any of this goes live where that human taste is added to the process, to the workflow, rather than it just being this totally autonomous thing."</p></blockquote>
<p>He also says a fully general agent is the wrong tool: "you don't need God in a box to run a Facebook ads account." Instead, he says, "I would just think about it as like jobs to be done."</p>

<h2 id="small-business">What can a small business take from this?</h2>
<p>This is our own takeaway. You do not need a data warehouse to start. The lesson is the shape of the work:</p>
<ol>
<li>Pick one marketing job, like drafting social posts or ad ideas.</li>
<li>Give the AI what it needs: your website, your offer, and examples you like.</li>
<li>Let it make the first drafts.</li>
<li>Approve each one yourself before anything is posted or sent.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza Crew is a free app, on Android through Google Play and on iOS, with AI employees that do real jobs like social posts, emails and research. They ask for your approval before they send or pay, so the human gate from the video is built in. <a href="${TRY}">Try Dooza Crew free</a>.</p>`,
    faqData: [
        { question: 'Can AI agents really do marketing for a small business?', answer: 'They can do real parts of it, like ad ideas, static ads and video ad drafts, if they have your data, access and the right tools. In Greg Isenberg\'s video, Cody Schneider still describes a human check before anything goes live.' },
        { question: 'How much does an AI-made video ad cost?', answer: 'In the video, Cody Schneider said his AI avatar ad with motion graphics came out for about $5. That is his own figure, not one we checked.' },
        { question: 'What does an AI marketing agent need to work well?', answer: 'Schneider names three things: your business data in one place, access to your ad platforms, and API tools for images, video and leads.' },
        { question: 'Should AI agents post ads without a human?', answer: 'Schneider describes a step where a human approves before anything goes live, so human taste is added to the workflow. We think a small business should do the same.' },
        { question: 'What is the easiest way to start?', answer: 'Pick one job, like social posts, let AI draft it, and approve each draft yourself. Dooza Crew is a free app where AI employees ask your approval before they send or pay.' },
    ],
};

export default post;
