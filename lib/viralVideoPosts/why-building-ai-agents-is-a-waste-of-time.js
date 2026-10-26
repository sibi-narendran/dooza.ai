// Video answer post (October 26, 2026): answers Jake Van Clief's "Why Building AI Agents Is (Mostly) a Waste of Time".
// Targets: "is building ai agents a waste of time", "build vs buy ai agent", "should I build my own ai agent".
// Facts: content/drafts/video-posts/why-building-ai-agents-is-a-waste-of-time-facts.md (transcript, yt-dlp metadata, Fortune and w.media opened October 26, 2026).
// Dooza Crew claims only as in the task brief (no included-usage amount, seats, integrations or customer results).

import { yt, videoCredit } from './helpers';

const VIDEO_ID = 'JPJ0gbCUSQk';
const VIDEO_TITLE = 'Why Building AI Agents Is (Mostly) a Waste of Time';

const VIDEO = `https://www.youtube.com/watch?v=${VIDEO_ID}`;
const GARTNER = 'https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/';
const FORTUNE = 'https://fortune.com/2025/08/18/mit-report-95-percent-generative-ai-pilots-at-companies-failing-cfo/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza&utm_medium=blog&utm_content=why-building-ai-agents-is-a-waste-of-time';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 460,
    title: 'Is Building Your Own AI Agent a Waste of Time? A Small-Business Answer',
    seoTitle: 'Is Building Your Own AI Agent a Waste of Time?',
    seoDescription: 'Jake Van Clief says building AI agents is mostly a waste of time. For a small business, building your own usually is. Here is when it is not.',
    excerpt: 'Jake Van Clief argues that coding your own AI agents is mostly wasted effort. We agree for most small businesses: the build is the easy part, the upkeep is not. Here is when a custom agent is worth it, when a ready-made one wins, and where a ready-made one loses.',
    author: 'Dooza Team',
    date: '2026-10-26',
    modifiedDate: '2026-10-26',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'AI News',
    tags: ['AI Agents', 'Build vs Buy', 'Small Business', 'Jake Van Clief', 'Dooza Video'],
    image: '/blog/why-building-ai-agents-is-a-waste-of-time.png',
    imageAlt: 'Soft watercolor illustration of a small-business owner at a desk, choosing between a half-built robot in a toolbox and a ready robot assistant waiting with a laptop',
    slug: 'why-building-ai-agents-is-a-waste-of-time',
    video: {
        name: VIDEO_TITLE,
        description: 'Jake Van Clief explains why coding a separate AI agent for every workflow is mostly wasted effort, and why he puts prompts, tools and data into simple folders that an AI harness can read instead.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-22',
    },
    tocData: [
        { id: 'what-the-video-says', label: 'What the video says' },
        { id: 'build-vs-use', label: 'Build vs. use a ready-made agent' },
        { id: 'when-to-build', label: 'When a custom build is worth it' },
        { id: 'where-ready-made-loses', label: 'Where a ready-made agent loses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>For most small businesses, yes: building your own AI agent is mostly a waste of time. The code is the easy part. Keeping it running, fixing it when a website or model changes, and paying for the hours of whoever built it is the hard part, and a ready-made agent carries that load for you. A custom build is worth it only when the workflow is unique to your business, it runs at high volume, and you have someone who will own it for years.</p>
<ul>
<li><strong>The video's point.</strong> Jake Van Clief says coding a separate agent for every workflow is mostly wasted effort and that a simple folder of prompts, tools and data, read by an AI harness, does the same job.</li>
<li><strong>The wider data.</strong> Gartner says more than 40% of agentic AI projects could be canceled by the end of 2027, citing cost, unclear value and weak risk controls, per ${a(GARTNER, 'W.Media')}.</li>
<li><strong>Buy beats build, on average.</strong> MIT research reported by ${a(FORTUNE, 'Fortune')} found that tools bought from specialized vendors succeed about 67% of the time, while internal builds succeed about one-third as often.</li>
<li><strong>Our rule of thumb.</strong> Use a ready-made agent for common office work. Build only for a core, high-volume workflow you will maintain.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Jake Van Clief', channelUrl: 'https://www.youtube.com/@JEVanClief', uploadDate: 'October 22, 2026', views: '9,197' })}

<h2 id="what-the-video-says">What does the video say?</h2>
<p>The video is about four minutes long. Van Clief starts from one idea: an AI model on its own is just a prediction engine, and it only becomes useful when it gets the right context. He splits context into three parts: prompts and instructions, tools, and data.</p>
<p>The old way, he says, is to write code in Python, C# or Rust that wires a model to data, prompts and tools, call that "agent one," and then repeat it for every workflow until you have a swarm. His verdict on that approach is blunt:</p>
<blockquote><p>"Complete waste of time. We don't need to do all this."</p></blockquote>
<p>He allows that a built agent might be useful about 1% of the time. His alternative is to put prompts, tools and data into plain folders and let a harness, such as Codex or Claude Code, move through those folders with simple commands. As he puts it, "The folders become the architecture." When you ask a question, the AI reads the folders it needs and, in his words, becomes the agent you need for that question. He also warns that some harnesses are too complex and names security problems in OpenClaw. He closes by recommending the Unix philosophy and Douglas Engelbart's 1962 paper "Augmenting Human Intellect" as study material.</p>
<p>Note that his audience is people who already work with code and AI tools. A folder-and-harness setup is simpler than an agent swarm, but someone still has to set it up and keep it tidy.</p>

<h2 id="build-vs-use">Should a small business build an AI agent or use a ready-made one?</h2>
<p>This is our take, not the video's. Van Clief compares two ways of building. A small-business owner usually has a different choice: build anything at all, or use an agent someone else already built and maintains. Four costs decide it.</p>
<ol>
<li><strong>Maintenance.</strong> A custom agent is never finished. Prompts drift, models get updated, and the files and folders it relies on need someone to keep them in order. That work lands on you or whoever built it.</li>
<li><strong>Breakage.</strong> Agents touch websites, inboxes and spreadsheets that change without warning. When a login page or a form moves, a home-built agent stops, often quietly. With a ready-made agent, fixing that is the vendor's job.</li>
<li><strong>The builder's time.</strong> Every hour spent wiring up and debugging an agent is an hour not spent on customers. If you pay a developer, those hours are billed; if you do it yourself, they come out of your week. Gartner's analyst warned that early projects "can blind organizations to the real cost and complexity of deploying AI agents at scale," per ${a(GARTNER, 'W.Media')}.</li>
<li><strong>Risk.</strong> An agent that can send email or pay a bill needs a guardrail. Building safe approval steps and spending limits yourself is extra work that is easy to skip. Gartner lists inadequate risk controls among the main reasons agent projects get canceled.</li>
</ol>
<p>The research leans the same way. The MIT report covered by ${a(FORTUNE, 'Fortune')} found that only about 5% of AI pilots reach rapid revenue gains, and that buying from specialized vendors worked far more often than building in-house. Those are large-company numbers, but a small business has even fewer spare hours to absorb a failed build.</p>

<h2 id="when-to-build">When is building your own AI agent worth it?</h2>
<p>A custom build earns its cost when most of these are true:</p>
<ul>
<li>The workflow is core to how you make money and no off-the-shelf product does it.</li>
<li>It runs often enough that small time savings add up, such as hundreds of records a day.</li>
<li>It depends on your own systems or data that a general agent cannot reach.</li>
<li>You have a person, in-house or on retainer, who will own and fix it for as long as you use it.</li>
</ul>
<p>If only one or two are true, start with a ready-made agent, learn what the job really needs, and build later if you outgrow it. Van Clief's folder approach is a good middle path for teams that are comfortable with code and a terminal.</p>

<h2 id="where-ready-made-loses">Where does a ready-made agent lose?</h2>
<p>To be fair, a ready-made agent is not always the better choice. It is built for common work, so it will not know your niche process out of the box, and you have to explain it. And an agent that works in a browser, clicking through screens like a person, is slower than a script that talks to a system directly. For one narrow, high-volume, repetitive job, such as moving thousands of rows between two systems every night, a small custom script can beat any general agent on speed and running cost.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>If you would rather not build or maintain agents, ${a(CREW, 'Dooza Crew')} gives your business AI employees: a lead agent plus helper agents. Each agent has its own computer and a real browser, and it works in the web tools you already use. You chat with them on web or phone.</p>
<p>Before an agent clicks Send or Pay, it asks you in chat: Approve, Edit or Reject. AI spend has a hard cap, so costs cannot run away. Crew agents take phone calls too, included in the plan. It costs $49 a month after a 7-day free trial. No card is needed. You can ${a(CREW, 'try Dooza Crew here')}.</p>`,
    faqData: [
        { question: 'Is building AI agents a waste of time?', answer: 'For most small businesses, mostly yes. Jake Van Clief argues that coding a separate agent for every workflow is wasted effort, and the hard part for a business is upkeep: fixing breakage, updating prompts and paying for the builder\'s time. A custom build makes sense when the workflow is core, high-volume and has an owner who will maintain it.' },
        { question: 'What does Jake Van Clief suggest instead of building agents?', answer: 'He suggests putting prompts, tools and data into simple folders and letting an AI harness, such as Codex or Claude Code, read them with simple commands. In his words, the folders become the architecture.' },
        { question: 'Is it better to build or buy an AI agent?', answer: 'On average, buying wins. MIT research reported by Fortune in August 2025 found that AI tools bought from specialized vendors succeed about 67% of the time, while internal builds succeed about one-third as often. Gartner says more than 40% of agentic AI projects could be canceled by the end of 2027.' },
        { question: 'When should a small business build its own AI agent?', answer: 'When the workflow is unique and core to the business, runs at high volume, needs your own systems or data, and someone will own and fix the agent for as long as you use it. Otherwise, start with a ready-made agent.' },
        { question: 'What is the downside of a ready-made AI agent?', answer: 'It is built for common work, so you have to teach it your niche process, and a browser-based agent is slower than a direct script for one narrow, high-volume, repetitive job.' },
    ],
};

export default post;
