import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'vittorio', handle: 'IterIntellectus', id: '2103212539895017864', date: 'September 24, 2026' };

const post = {
    id: 403,
    title: 'Claude Made a Video on Western Civilization: How AI Explainer Videos Work',
    seoTitle: 'Claude Made a Western Civilization Video: How It Works',
    seoDescription: 'A Claude-made video on Western civilization hit 15M views on X. How code-rendered AI explainer videos work, the criticism, and how small businesses use them.',
    excerpt: 'A two-minute animated video on Western civilization, which its poster says Claude made, reached 15 million views on X. Here is what we can verify about how it was made, how code-rendered AI explainer videos work, why it went viral, the criticism, and practical ways small businesses can use AI video.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Claude', 'Claude Opus 5.5', 'AI Video', 'Explainer Videos', 'Video Marketing', 'Viral X Post'],
    image: '/blog/claude-made-video-western-civilization.png',
    imageAlt: 'Soft watercolor illustration of a golden line drawing of a Greek temple on a dark background, with faint film frames and curly code brackets floating around it',
    slug: 'claude-made-video-western-civilization',
    tocData: [
        { id: 'what-happened', label: 'What happened' },
        { id: 'how-made', label: 'How was it made?' },
        { id: 'how-it-works', label: 'How code-rendered video works' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'criticism', label: 'The criticism' },
        { id: 'small-business', label: 'Uses for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What happened with the Claude-made video on Western civilization?</h2>
<p>On September 24, 2026, the X user vittorio (@IterIntellectus) posted a 2-minute-16-second animated video with the caption "holy shit i asked claude to make a video on western civiization" (typo his). The video tells the story of the West in gold line art on a dark background, from ancient Greece (a Parthenon wireframe stamped "432 BC") through Rome, the Renaissance, and the industrial age to space. It reached about 15 million views. The poster has not published the prompt or the session, so the exact method is unconfirmed.</p>
<ul>
<li><strong>What it is:</strong> a short animated history explainer that the poster says Claude made.</li>
<li><strong>How such videos are made:</strong> in the public examples, Claude writes animation code, and a script renders that code to frames and stitches them into an MP4.</li>
<li><strong>Why it spread:</strong> it looks like a hand-crafted motion-graphics piece, and the caption says one person made it by asking.</li>
<li><strong>The pushback:</strong> critics called the history one-sided, and the "one prompt" claim can't be checked.</li>
<li><strong>For small businesses:</strong> code-rendered explainers are a real, low-cost option for product and how-it-works videos, with a human checking the facts.</li>
</ul>
${xPost({ text: 'holy shit<br>i asked claude to make a video on western civiization', ...X })}
${postCredit({ ...X, views: '15 million', likes: '61,000' })}

<h2 id="how-made">How did Claude make the Western civilization video?</h2>
<p>Here is what can and can't be verified.</p>
<table><thead><tr><th>Question</th><th>What we know</th><th>Source</th></tr></thead><tbody>
<tr><td>Who made it?</td><td>The poster says he asked Claude to make it</td><td>The X post</td></tr>
<tr><td>Was it one prompt?</td><td>When asked, the poster reportedly replied "one shot"; no session or prompt was published</td><td>${src('https://explainx.ai/blog/claude-opus-5-5-western-civilization-video-2026', 'ExplainX')}, ${src('https://blurredculture.com/i-asked-claude-to-make-a-video-on-western-civiization/', 'Blurred Culture')}</td></tr>
<tr><td>Which model?</td><td>Widely attributed to Claude Opus 5.5, released days earlier; the post itself only says "claude"</td><td>${src('https://x.com/minchoi/status/2103461343663730868', 'Min Choi on X')}, ${src('https://officechai.com/ai/claude-opus-5-5-motion-graphic-videos/', 'OfficeChai')}</td></tr>
<tr><td>Which tools?</td><td>Not confirmed for this video; public look-alike projects use code, headless Chrome, and FFmpeg</td><td>${src('https://github.com/JohnHeibel/ClaudeAnimationBase', 'ClaudeAnimationBase on GitHub')}</td></tr>
</tbody></table>
<p>So the honest answer: the author says Claude made it, and the style matches a wave of code-rendered videos people made with Claude Opus 5.5 that week. ${src('https://officechai.com/ai/claude-opus-5-5-motion-graphic-videos/', 'OfficeChai collected ten of them')}. In one, the maker says every frame is rendered from code, with no stock footage and no image or video generators. It is not a text-to-video model like Sora or Veo turning a prompt straight into pixels.</p>

<h2 id="how-it-works">How do code-rendered AI explainer videos work?</h2>
<p>The clearest public example is ${src('https://github.com/JohnHeibel/ClaudeAnimationBase', 'ClaudeAnimationBase')}, an open-source starter kit by John Heibel based on his music video ${src('https://github.com/JohnHeibel/PDoomVideo', '"I\'m Upping My P(doom)"')}. Its README says all test videos were made with Opus 5.5 on xhigh reasoning in Claude Code. The workflow looks like this:</p>
<ol>
<li><strong>Storyboard.</strong> The model plans the scenes, timing, and visual style before writing any code.</li>
<li><strong>Code each shot.</strong> It writes JavaScript drawing code for each scene (the kit uses ${src('https://p5js.org', 'p5.js')}), where every frame is calculated from its timestamp.</li>
<li><strong>Check its own work.</strong> It renders contact sheets, which are grids of still frames, to spot problems and fix them.</li>
<li><strong>Render.</strong> A Node.js script drives headless Chrome to capture each frame, and ${src('https://ffmpeg.org', 'FFmpeg')} assembles the frames, plus any music, into an MP4.</li>
</ol>
<p>Why this works so well for explainers:</p>
<table><thead><tr><th></th><th>Code-rendered video (Claude writes code)</th><th>Text-to-video models</th></tr></thead><tbody>
<tr><td>Text and numbers</td><td>Sharp and exactly as written, like dates and labels</td><td>Often garbled or drifting</td></tr>
<tr><td>Editing</td><td>Change one line, re-render one scene</td><td>Regenerate and hope</td></tr>
<tr><td>Consistency</td><td>Same style and colors in every shot</td><td>Can drift between clips</td></tr>
<tr><td>Best for</td><td>Diagrams, timelines, product explainers, data stories</td><td>Realistic footage, people, scenes</td></tr>
<tr><td>Main limit</td><td>Stylized look; you need Node.js, Chrome, and FFmpeg or an agent that runs them</td><td>Less control over details</td></tr>
</tbody></table>
<p>The same idea already exists in tools like Remotion (videos in React) and Manim (math animations). What changed is that the model can now write all of the code, with taste, from a short brief.</p>

<h2 id="why-viral">Why did the Claude Western civilization video go viral?</h2>
<p>Three things came together:</p>
<ul>
<li><strong>The gap between effort and result.</strong> The caption is one casual line. The video looks like weeks of motion-design work. That gap is what makes people share.</li>
<li><strong>A clear, bold theme.</strong> According to ${src('https://blurredculture.com/i-asked-claude-to-make-a-video-on-western-civiization/', 'Blurred Culture')}, the piece was proud and punchy, which made it easy to cheer for or argue with.</li>
<li><strong>Big accounts.</strong> OfficeChai reports it was shared by Elon Musk and Marc Andreessen. A YouTube mirror followed.</li>
</ul>
<p>It also arrived the week Claude Opus 5.5 launched, while many people were posting what the model could build. The post became the headline example.</p>

<h2 id="criticism">What was the criticism?</h2>
<p>Two kinds:</p>
<ul>
<li><strong>The history.</strong> Critics said it reads like a myth of progress. Blurred Culture lists omissions raised by readers, including the role of Christianity, slavery, and non-Western contributions. ExplainX notes the commentator Curtis Yarvin's point that it skips the 20th century's wars.</li>
<li><strong>The "one prompt" claim.</strong> ExplainX points out that the session was never published, and that people who did publish their sessions show a storyboard step and a second pass.</li>
</ul>
<p>Both points matter for a business. AI will confidently produce a one-sided story, and "one prompt" demos hide the review and revision work. Budget for both.</p>

<h2 id="small-business">How can a small business use AI to make explainer and marketing videos?</h2>
<p>Code-rendered video is good at exactly the videos small businesses need but rarely make: clear, branded, and full of text and diagrams. Practical uses:</p>
<ul>
<li><strong>How it works videos.</strong> A 60-second animation of your process, such as "how our roof inspection works" or "what happens after you book."</li>
<li><strong>Product and pricing explainers.</strong> Plans, features, or a before-and-after, with exact numbers that stay readable.</li>
<li><strong>Social clips.</strong> Short animated tips or stats in your brand colors, for LinkedIn, Instagram, or YouTube Shorts.</li>
<li><strong>Onboarding and training.</strong> Walkthroughs for new customers or staff, easy to update when something changes.</li>
</ul>
<p>How to do it well:</p>
<ol>
<li><strong>Write the script yourself, or check it closely.</strong> You own every claim in the video.</li>
<li><strong>Give a brief, not just a topic.</strong> Include your audience, length, brand colors, fonts, and the one action you want viewers to take.</li>
<li><strong>Ask for a storyboard first.</strong> Approve it before any rendering.</li>
<li><strong>Keep it short.</strong> 15 to 60 seconds is easier to get right and works better on social.</li>
<li><strong>Use licensed music and assets.</strong> The code is yours to run; music and logos still need rights.</li>
</ol>
<p>When it isn't the right tool yet: if you need real people, real locations, or your actual product on camera, film it or use an avatar video tool. And if no one on your team will run Claude Code, Node.js, and FFmpeg, you will want a service that does it for you.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't make Claude or video models. It builds AI employees and agents that use them for everyday marketing work. In <a href="/workforce">Dooza Workforce</a>, Somi is the social media employee who plans, writes, and schedules posts, and the <a href="/agents/ugc-reel-creator">UGC Reel Creator</a> drafts short product reels with your approval before anything is generated. Maily handles email, Ranky handles SEO and AI visibility, Stan handles lead generation, Linda handles legal documents, and Rachel answers the phone.</p>
<p>If you want a custom video or content pipeline, <a href="/">Dooza Agents</a> are built and maintained by Dooza engineers around your workflow, and <a href="/workflow-automation">workflow automation</a> connects it to your tools. Customer-facing teams can also look at an <a href="/ai-receptionist">AI receptionist</a> or <a href="/ai-customer-support">AI customer support</a>. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> covers how to pick a first project, and <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a> explains the terms. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Want explainer videos and social content without a production team?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around your content workflow. Start with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'Did Claude really make the Western civilization video?', answer: 'The poster, vittorio (@IterIntellectus), says he asked Claude to make it and reportedly called it "one shot." He has not published the prompt or session, so the exact process cannot be independently verified.' },
        { question: 'How does Claude make videos if it is a text model?', answer: 'In the public examples, Claude writes animation code, for example JavaScript with p5.js. A script renders each frame in headless Chrome and FFmpeg stitches the frames into an MP4. No image or video generator is needed.' },
        { question: 'Which Claude model made the video?', answer: 'The post only says "claude." It was widely attributed to Claude Opus 5.5, which had launched days earlier and was behind a wave of similar code-rendered videos.' },
        { question: 'Why was the video criticized?', answer: 'Critics said its history was one-sided, leaving out topics such as religion, slavery, wars, and non-Western contributions. Others questioned the "one prompt" claim because no session was published.' },
        { question: 'Can a small business make explainer videos with AI?', answer: 'Yes. Code-rendered animation suits how-it-works videos, product explainers, social clips, and onboarding. Write or check the script yourself, approve a storyboard first, and use licensed music.' },
        { question: 'Can Dooza make social media videos for my business?', answer: "Dooza's Somi handles social media and the UGC Reel Creator drafts short product reels with your approval. Custom content pipelines can be built as Dooza Agents. Every product starts with a refundable pilot: 100% refund within 14 days." },
    ],
};

export default post;
