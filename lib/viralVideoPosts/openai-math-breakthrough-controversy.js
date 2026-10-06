import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = 'aspmNhKAFMc';
const VIDEO_TITLE = "OpenAI's biggest math breakthrough is getting ugly...";

const post = {
    id: 246,
    title: 'OpenAI\'s Navier-Stokes Math Claim and the NYU Dispute, Explained',
    seoTitle: 'OpenAI Navier-Stokes Claim Controversy Explained',
    seoDescription: 'Fireship breaks down OpenAI\'s claimed Navier-Stokes breakthrough and NYU professor Tristan Buckmaster\'s objections. What happened and what businesses can learn.',
    excerpt: 'Fireship\'s Code Report covers OpenAI\'s claim that its agents cracked the Navier-Stokes Millennium Prize Problem, and an NYU mathematician\'s account of why the story is more complicated. Here is a balanced summary and the lesson for anyone relying on AI output.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'AI News',
    tags: ['Fireship', 'Viral Video', 'OpenAI', 'Navier-Stokes', 'AI Math', 'AI Verification', 'AI Hype'],
    image: '/blog/openai-math-breakthrough-controversy.png',
    imageAlt: 'Soft watercolor illustration of swirling blue water currents over a chalkboard of equations, with two researchers on opposite sides of a table holding papers, and a magnifying glass resting on a printed proof',
    slug: 'openai-math-breakthrough-controversy',
    video: {
        name: VIDEO_TITLE,
        description: 'Fireship\'s The Code Report explains the Navier-Stokes equations, OpenAI\'s claim to have broken them with thousands of AI agents, and NYU professor Tristan Buckmaster\'s account of a disputed phone call about credit and data.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-09-11',
    },
    tocData: [
        { id: 'what-happened', label: 'What happened?' },
        { id: 'what-is-navier-stokes', label: 'What is Navier-Stokes?' },
        { id: 'timeline', label: 'Timeline of the dispute' },
        { id: 'who-says-what', label: 'Who says what' },
        { id: 'why-it-matters', label: 'Why it matters beyond math' },
        { id: 'business-lessons', label: 'Lessons for businesses' },
        { id: 'verification-checklist', label: 'Verification checklist' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What is Fireship's OpenAI math video about?</h2>
<p><strong>In this episode of The Code Report, Fireship covers OpenAI's claim that it used a new model and a swarm of AI agents to break the Navier-Stokes equations, one of the Clay Mathematics Institute's million-dollar Millennium Prize Problems.</strong> The twist is that NYU math professor Tristan Buckmaster and mathematician Levent Alpöge say they had spent about a year developing the same novel approach, partly with AI coding tools, and had just used it to break a simpler set of equations.</p>
<p>The video walks through Buckmaster's account of a tense phone call with OpenAI about credit and training data, OpenAI's very different account of the same events, and a warning from mathematician Terence Tao about what this could do to open science. Fireship tells it with jokes, but the underlying questions are serious, and both sides' versions are presented as claims, not settled facts.</p>
<ul>
<li><strong>The claim:</strong> According to the video, OpenAI says its agents broke Navier-Stokes after it threw every unsolved Millennium Problem at a model in training.</li>
<li><strong>The objection:</strong> Buckmaster says OpenAI's method matches the approach he and Alpöge had been building, and that he got no clear answer on whether his AI coding sessions were used in training.</li>
<li><strong>OpenAI's response:</strong> Per the video, OpenAI says no user data was accessed, the two proofs are significantly different, and its staff acted with integrity.</li>
<li><strong>The bigger worry:</strong> Terence Tao warns that if rumors of research trigger agent swarms racing to front-run it, researchers may stop sharing ideas.</li>
<li><strong>The business lesson:</strong> A big AI headline is a claim to verify, and whatever you put into AI tools deserves the same care as any other confidential asset.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Fireship', channelUrl: 'https://www.youtube.com/@Fireship', uploadDate: 'September 11, 2026', views: '3.4 million' })}

<h2 id="what-is-navier-stokes">What are the Navier-Stokes equations, and why is the problem so hard?</h2>
<p>Fireship gives a plain-English version. In the 1800s, French engineer Claude-Louis Navier wrote down equations describing how fluids move, and Irish mathematician George Stokes later refined them. You feed the equations the current state of a fluid, such as its speed and pressure, and they tell you how it will move a moment later.</p>
${quote("They're basically force equals mass times acceleration, but for water.", 'Fireship', VIDEO_ID, 64, '1:04', VIDEO_TITLE)}
<p>The video notes that engineers rely on these equations for hurricane forecasts, airplane wing design, and simulating blood flow. But mathematicians have never proven one basic thing: whether the equations can ever "break." The <a href="https://www.claymath.org/millennium-problems/" target="_blank" rel="noopener noreferrer">Clay Mathematics Institute</a> lists this as one of its seven Millennium Prize Problems, with a million-dollar prize for either proving the equations never break or showing a case where they do.</p>

<h2 id="timeline">What is the timeline of the OpenAI Navier-Stokes dispute?</h2>
<p>Here is the sequence of events as Fireship describes it. The dates come from the video, and the accounts of the phone call come from the two parties, who disagree.</p>
<table><thead><tr><th>When (per the video)</th><th>What happened</th></tr></thead><tbody>
<tr><td>2019</td><td>Tristan Buckmaster wins the Clay Research Award for work on these equations.</td></tr>
<tr><td>2025</td><td>Buckmaster teams up with Levent Alpöge, a mathematician who works at Anthropic.</td></tr>
<tr><td>Mid-August 2026</td><td>The pair lean more heavily on Claude Code and Codex, and progress speeds up.</td></tr>
<tr><td>August 15, 2026</td><td>Their approach breaks the Euler equations, a simpler relative of Navier-Stokes. Fireship calls it the closest anyone had come.</td></tr>
<tr><td>Late August 2026</td><td>OpenAI gives a model in training every unsolved Millennium Problem and later claims to have broken Navier-Stokes.</td></tr>
<tr><td>September 3, 2026</td><td>Buckmaster emails OpenAI to ask what is going on.</td></tr>
<tr><td>The following Sunday</td><td>Buckmaster has a call with OpenAI researcher Sébastien Bubeck. The two sides later describe it very differently.</td></tr>
<tr><td>The next Tuesday</td><td>Buckmaster and Alpöge post their papers and a four-page statement. That afternoon, OpenAI posts its solution and a blog post.</td></tr>
</tbody></table>
<p>The scale is part of the story. Fireship describes OpenAI's effort this way:</p>
${quote('The 10,000 agents and 20 million dollars worth of compute later, they claim to have broken Navier-Stokes.', 'Fireship', VIDEO_ID, 172, '2:52', VIDEO_TITLE)}
<p>Note the word "claim." The video does not say the proof has been independently verified. It ends by mentioning rumors that OpenAI is close to verifying another Millennium Problem, which tells you checking these results is still in progress.</p>

<h2 id="who-says-what">What do Buckmaster and OpenAI each say happened?</h2>
<p>This is where the accounts split. We are summarizing what the video reports each side said. We have not independently confirmed either version.</p>
<table><thead><tr><th>Question</th><th>Buckmaster's account (per the video)</th><th>OpenAI's account (per the video)</th></tr></thead><tbody>
<tr><td>How much human input went in?</td><td>He was first told OpenAI only gave the model the problem statement, then learned the whole team worked on it, Codex wrote the prompt, and the effort started days earlier after rumors of his work.</td><td>Not addressed in detail in the video.</td></tr>
<tr><td>Was his data used?</td><td>He was told the model didn't look up user data, but says he got no answer when he asked about training specifically.</td><td>OpenAI's blog post says no user data was accessed.</td></tr>
<tr><td>Are the proofs the same?</td><td>He says OpenAI used the same novel process he and Alpöge developed.</td><td>OpenAI says the two proofs are significantly different.</td></tr>
<tr><td>What about credit?</td><td>He says OpenAI offered two options, one of which left Alpöge off a paper because he works at Anthropic. He refused both.</td><td>OpenAI says it never asked for Alpöge to be removed.</td></tr>
<tr><td>Who made threats?</td><td>He says the OpenAI researcher asked why he'd ruin his career.</td><td>Sam Altman says everyone at OpenAI acted with integrity and Buckmaster was the only one making threats.</td></tr>
</tbody></table>
<p>The honest summary: two credible parties tell incompatible stories about one private call, and both have now published their math. Experts can compare the proofs. Nobody outside the call can settle what was said on it.</p>

<h2 id="why-it-matters">Why does this matter beyond mathematics?</h2>
<p>Fireship gives the last word to Terence Tao. The video says Tao congratulated Buckmaster and Alpöge, then raised a broader concern:</p>
${quote('If the mere rumor of your research can trigger a swarm of agents racing to front-run it, mathematicians will simply stop sharing ideas.', 'Fireship, summarizing Terence Tao', VIDEO_ID, 310, '5:10', VIDEO_TITLE)}
<p>That concern isn't limited to academia. Any business that builds something new, such as a pricing model, a sales process, or proprietary code, now has to think about two questions: <strong>where does my work go when I use AI tools on it</strong>, and <strong>what happens when someone with far more compute can reproduce an idea quickly once they hear about it?</strong></p>

<h2 id="business-lessons">What should small business owners take from this?</h2>
<p>You are probably not working on Millennium Prize Problems. But you are using AI tools, reading AI headlines, and deciding what to trust. Four lessons carry over.</p>
<h3>1. Treat AI announcements as claims until checked</h3>
<p>"AI solves 200-year-old problem" is a headline. "A company claims a proof that experts are still checking, and a researcher disputes the credit" is the actual story. The same applies to vendor promises about what an AI tool will do for your business: ask what was shown, who checked it, and under what conditions.</p>
<h3>2. Scale is not the same as a repeatable result</h3>
<p>The video describes 10,000 agents and $20 million in compute. That tells you about a frontier lab's budget, not about what an AI assistant will do on your invoices or support tickets next week. Judge AI by small, measurable tests on your own work.</p>
<h3>3. Know what your AI tools do with your data</h3>
<p>Buckmaster's sharpest question was whether his sessions were used for training, and the video says he didn't get a clear answer. Before you paste customer lists, contracts, or product plans into any AI tool, read its data and training terms, and use business settings that limit training where they exist.</p>
<h3>4. Keep a human checking what matters</h3>
<p>Even when AI output is impressive, the people involved here still had to read, compare, and argue over the proofs. For a business, the equivalent is simple: a person signs off on anything that touches money, customers, or legal exposure. We covered the difference between assistants and autonomous systems in <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>.</p>

<h2 id="verification-checklist">How do you verify AI output in a business?</h2>
<p>You don't need a math PhD to check AI work. You need a routine. Here is a simple one.</p>
<table><thead><tr><th>Step</th><th>What to do</th><th>Example</th></tr></thead><tbody>
<tr><td>1. Ask for sources</td><td>Have the AI cite where each fact came from, then open the source.</td><td>A competitor price in a report links to that competitor's pricing page.</td></tr>
<tr><td>2. Spot-check samples</td><td>Review a random sample of outputs, not just the first one.</td><td>Read 10 of 200 AI-drafted customer replies before they go out.</td></tr>
<tr><td>3. Compare with a known answer</td><td>Run the AI on cases where you already know the right result.</td><td>Re-run last month's bookkeeping categories and compare.</td></tr>
<tr><td>4. Gate risky actions</td><td>Require human approval before sending, paying, or publishing.</td><td>Refunds over a set amount wait for a manager.</td></tr>
<tr><td>5. Log what happened</td><td>Keep a record of what the AI did and who approved it.</td><td>A weekly summary of every action an AI agent took.</td></tr>
<tr><td>6. Check data terms</td><td>Confirm what the tool stores and whether it trains on your inputs.</td><td>Read the vendor's privacy and data-use terms before uploading contracts.</td></tr>
</tbody></table>

<h2 id="dooza">Where does Dooza fit?</h2>
${doozaSummary}
<p>We build AI for small businesses that don't have time to fact-check every claim about AI. That means scoped jobs, measured results, and a person in the loop. Dooza's AI employees in the <a href="/workforce">Workforce app</a> and custom agents on <a href="/">Dooza Agents</a> work behind encrypted connections and need your approval for anything sensitive, so a human always checks what goes out the door.</p>
<p>If you want AI handling a process like intake, follow-ups, or reporting, our <a href="/workflow-automation">workflow automation</a> team scopes it to a result you can check. You can read more about how we work in <a href="/blog/what-is-ai-native-service-company">what an AI-native service company is</a>. Pricing depends on the product; see <a href="/pricing">pricing</a>.</p>
<p><strong>Want AI you can verify instead of AI you have to take on faith?</strong> <a href="/book">Book a free 30-minute call to scope your pilot</a>. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.</p>`,
    faqData: [
        {
            question: 'Did OpenAI solve the Navier-Stokes Millennium Prize Problem?',
            answer: 'According to Fireship\'s video, OpenAI claims its agents broke the Navier-Stokes equations. The video presents this as a claim and does not say it has been independently verified or that the Clay prize has been awarded.',
        },
        {
            question: 'Who is Tristan Buckmaster?',
            answer: 'Tristan Buckmaster is an NYU math professor who, per the video, won the 2019 Clay Research Award for work on these equations. With Levent Alpöge, he says he developed the approach OpenAI later used.',
        },
        {
            question: 'What is Buckmaster\'s main complaint against OpenAI?',
            answer: 'He says OpenAI\'s method matched his and Alpöge\'s unpublished approach, that he got no clear answer on whether his AI coding sessions were used in training, and that credit options he was offered were unfair. OpenAI disputes this.',
        },
        {
            question: 'What does OpenAI say in response?',
            answer: 'Per the video, OpenAI says no user data was accessed, the two proofs are significantly different, and it never asked for Alpöge to be removed. Sam Altman says OpenAI\'s staff acted with integrity.',
        },
        {
            question: 'What did Terence Tao say about the controversy?',
            answer: 'Fireship says Tao congratulated Buckmaster and Alpöge and warned that if rumors of research can trigger AI agent swarms racing to front-run it, mathematicians may stop sharing ideas.',
        },
        {
            question: 'What is the lesson for businesses using AI?',
            answer: 'Treat AI headlines and vendor claims as claims to verify, test AI on your own work, check what tools do with your data, and keep a human approving anything that touches money, customers, or legal risk.',
        },
    ],
};

export default post;
