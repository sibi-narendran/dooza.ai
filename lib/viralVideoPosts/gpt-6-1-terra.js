import { yt, videoCredit } from './helpers';

// Draft 2026-10-27. Every number below is in content/drafts/video-posts/gpt-6-1-terra-facts.md with its source URL.
// Dooza Crew claims only from the approved fact list (no prices, trial days or usage numbers). Crew is NOT claimed to use GPT-6.1 Terra.

const VIDEO_ID = 'tTuk4pGnT0A';
const VIDEO_TITLE = 'GPT-6.1 Terra is now in orbit';

const OPENAI = 'https://openai.com/index/introducing-gpt-6-1-terra/';
const OPENAI_DOCS = 'https://developers.openai.com/api/docs/models/gpt-6.1-terra';
const OPENROUTER = 'https://openrouter.ai/openai/gpt-6.1-terra';
const HN = 'https://news.ycombinator.com/item?id=50248124';
const CREW = 'https://crew.dooza.ai/?utm_source=blog&utm_medium=video-post&utm_campaign=crew&utm_content=gpt-6-1-terra';
const CREW_HDR = 'https://crew.dooza.ai/?utm_source=blog&utm_medium=video-post&utm_campaign=crew&utm_content=hdr-gpt-6-1-terra';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 533,
    title: 'GPT-6.1 Terra: What OpenAI\'s Computer-Use Model Means for Small Business',
    seoTitle: 'GPT-6.1 Terra: What It Means for Small Business',
    seoDescription: 'GPT-6.1 Terra is OpenAI\'s mid-tier model built for computer use: it reads the screen and acts across apps. $1/M input, $5/M output. What it means for owners.',
    excerpt: 'OpenAI released GPT-6.1 Terra on October 26, 2026: a fast model that reads what is on screen and takes action across apps, at half the standard API price of GPT-5.6 Terra. Here is what it does, what it costs, and what computer use means for a small business.',
    author: 'Dooza Team',
    date: '2026-10-27',
    modifiedDate: '2026-10-27',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'AI News',
    tags: ['OpenAI', 'GPT-6.1 Terra', 'Computer Use', 'AI Agents', 'Small Business', 'Dooza Video'],
    image: '/blog/gpt-6-1-terra.png',
    imageAlt: 'Watercolor illustration of a small planet in orbit next to a laptop whose screen shows app windows being clicked by an AI cursor',
    slug: 'gpt-6-1-terra',
    video: {
        name: VIDEO_TITLE,
        description: 'OpenAI\'s 32-second introduction to GPT-6.1 Terra, a fast, efficient model for computer use: it understands what is on screen, takes action across apps and writes naturally, at lower API prices than GPT-5.6 Terra.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-26',
    },
    tocData: [
        { id: 'what-it-is', label: 'What GPT-6.1 Terra is' },
        { id: 'computer-use', label: 'What computer use means' },
        { id: 'the-numbers', label: 'The benchmark numbers' },
        { id: 'price', label: 'What it costs' },
        { id: 'reaction', label: 'How developers reacted' },
        { id: 'small-business', label: 'What it means for a small business' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>GPT-6.1 Terra is OpenAI's new mid-tier AI model, released on October 26, 2026, built for computer use: it reads what is on a screen and takes action across apps, such as filling out forms or entering invoice details into accounting software. OpenAI calls it "a fast, efficient model that combines detailed visual reasoning and precise computer use alongside clearer, more natural writing," and its standard API price is $1 per million input tokens and $5 per million output tokens, 50% lower than GPT-5.6 Terra, per ${a(OPENAI, 'OpenAI')}.</p>
<ul>
<li><strong>What it does.</strong> Sees the screen, clicks and types across apps, and writes. OpenAI's examples: "drafting proposals and interpreting technical drawings to filling out forms and editing videos."</li>
<li><strong>How good it is.</strong> On Agents' Last Exam, a computer-use benchmark, it scores 15 percentage points higher than GPT-5.6 Terra at about one-third the cost, OpenAI says.</li>
<li><strong>Fewer made-up answers.</strong> On OpenAI's internal test of error-inducing prompts, the error rate at low effort fell from 53.6% to 16.7%.</li>
<li><strong>Who gets it.</strong> Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and developers through the API as <code>gpt-6.1-terra</code>.</li>
<li><strong>For owners.</strong> Software that can use a computer the way a person does is now cheaper. The question is no longer "can AI do this click work?" but "who checks it before it sends or pays?" (${a(CREW_HDR, 'how Dooza Crew handles that')}).</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'OpenAI', channelUrl: 'https://www.youtube.com/@OpenAI', uploadDate: 'October 26, 2026', views: '257,154' })}

<h2 id="what-it-is">What is GPT-6.1 Terra?</h2>
<p>Terra is the middle model in OpenAI's lineup. On ${a(OPENROUTER, 'OpenRouter')} it is described as "the mid-tier model in OpenAI's GPT-6.1 series, priced below GPT-6.1 Sol," and OpenAI positions GPT-6 Astra as its most capable frontier model. OpenAI says Terra is "a significant step up from GPT‑5.6 Terra" and that "it excels at the communication and computer-based tasks that fill the workday."</p>
<p>The ${a(`https://www.youtube.com/watch?v=${VIDEO_ID}`, '32-second launch video')} is a short brand clip, not a demo. Its description sums up the pitch: Terra "understands what's on screen, takes action across apps, writes naturally, and is a more capable model for your whole workday."</p>
<p>The ${a(OPENAI_DOCS, 'developer docs')} list a 1,050,000-token context window, 128,000 max output tokens, text and image input, text output, and a June 1, 2026 knowledge cutoff. It supports a computer_use tool in OpenAI's Responses API.</p>

<h2 id="computer-use">What does "computer use" mean?</h2>
<p>Computer use means the AI works a computer the way you do. It looks at the screen, finds the button or the field, clicks, types and moves to the next app. It does not need a special connection to each piece of software. If a person can do the task in a browser or a desktop app, a computer-use model can try it.</p>
<p>OpenAI's own example is plain office work: "reading incoming invoices and entering their details into accounting software." Other examples from the launch post include filling out forms, interpreting technical drawings and turning them into a 3D model, and reviewing a film shot by shot to build a time-coded log.</p>

<h2 id="the-numbers">How good is GPT-6.1 Terra? The benchmark numbers</h2>
<p>All of these numbers are OpenAI's own, from its ${a(OPENAI, 'launch post')}. Independent tests will follow.</p>
<ul>
<li><strong>Agents' Last Exam (computer use).</strong> At medium reasoning effort, Terra "scores 15 percentage points higher than GPT-5.6 Terra at about one-third the cost" and "performs on par with GPT-6 Astra at only one-tenth its price per token." OpenAI also says it completes tasks "over three times faster than both GPT-6 Astra and GPT-6.1 Sol."</li>
<li><strong>OSWorld 2.1 (desktop apps).</strong> At medium effort, Terra "surpasses GPT-5.6 Terra's best score at a fraction of the cost per task."</li>
<li><strong>Factual errors.</strong> On OpenAI's internal benchmark of error-inducing prompts, the low-effort error rate "fell from 53.6% with GPT-5.6 Terra to 16.7% with GPT-6.1 Terra." At maximum effort it fell to 4.3%.</li>
<li><strong>Coding.</strong> On Terminal-Bench 4.0 at maximum effort, Terra solves 50.3% of tasks, "more than double GPT‑5.6 Terra's published score of 21.5%." OpenAI adds that for the most complex coding, Sol and Astra "remain the better choice."</li>
</ul>
<p>On safety, OpenAI says Terra "is more likely to stay within scope and honestly disclose limitations and potential blockers to the user" than GPT-5.6 Terra, and that in prompt-injection tests it "showed strong resistance to malicious instructions designed to divert it from the user's task."</p>

<h2 id="price">How much does GPT-6.1 Terra cost?</h2>
<p>OpenAI's standard API price is "$1 per million input tokens, $0.05 per million cached input tokens, and $5 per million output tokens." ${a(OPENROUTER, 'OpenRouter')} lists the same $1 / $5 per million, with cheaper Flex ($0.50 / $2.50) and pricier Fast ($2.00 / $10.00) endpoints. Per the ${a(OPENAI_DOCS, 'docs')}, prompts over 272K input tokens cost 2x on input and 1.5x on output, and Batch and Flex are 50% lower than Standard.</p>
<p>For ChatGPT users there is no new fee. OpenAI says "the same usage allowance covers more tasks than with GPT‑5.6 Terra and substantially more than with GPT‑6.1 Sol or GPT‑6 Astra."</p>

<h2 id="reaction">How did developers react?</h2>
<p>The ${a(HN, 'Hacker News thread')} had 497 points and 314 comments within about seven hours. Much of it was about naming: several commenters said the Luna, Terra, Sol and Astra lineup is hard to choose from. An OpenAI employee in the thread explained that "much of the variation in performance is explained by just a single variable: model size."</p>
<p>One comment caught the point for non-developers: "I don't think software devs are the audience for 6.1 Terra, but instead computer work, automation, and technical writing." Others pointed to rival models from other labs as better value on some benchmarks, so treat OpenAI's charts as one view.</p>

<h2 id="small-business">What does GPT-6.1 Terra mean for a small business owner?</h2>
<p>Here is our plain read. This part is our opinion, not a sourced fact.</p>
<ol>
<li><strong>Click work is now in scope for AI.</strong> Copying invoice details into your books, updating a CRM, filling supplier forms, posting to a booking site: if it is done in a browser, AI that can see the screen can now try it, and the price keeps falling.</li>
<li><strong>You do not need new software.</strong> Computer use works in the web tools you already pay for. There is no integration project to wait on.</li>
<li><strong>The risk moves to the last click.</strong> A model that can fill a form can also submit the wrong one. Fewer errors is not zero errors: OpenAI's own best number is 4.3% on hard prompts. Anything that sends a message or moves money should wait for a person's yes.</li>
<li><strong>Cost needs a ceiling.</strong> Cheaper per token still adds up when an agent works all day. Set a hard spending cap before you hand AI repeat work.</li>
<li><strong>Start with one task.</strong> Pick one hour-a-day browser chore, write the steps down, run it for two weeks and count the hours saved and the fixes you had to make.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Terra's headline is an AI that sees the screen and acts across apps. ${a(CREW, 'Dooza Crew')} is an AI team that already works this way for small businesses. A lead agent plus helper agents take on the job, and each agent has its own computer and a real browser, so it works in the web tools you already use. You chat with them on web or phone, and Crew answers phone calls too.</p>
<p>The two risks above are built in. Before an agent sends or pays, it asks you: Approve, Edit or Reject. AI spend has a hard cap. Dooza Crew is $5 to start. ${a(CREW, 'Start Dooza Crew for $5')}.</p>`,
    faqData: [
        { question: 'What is GPT-6.1 Terra?', answer: 'GPT-6.1 Terra is OpenAI\'s mid-tier model in the GPT-6.1 series, released October 26, 2026. OpenAI describes it as a fast, efficient model that combines detailed visual reasoning and precise computer use with clearer, more natural writing. It can read what is on screen and take action across apps.' },
        { question: 'How much does GPT-6.1 Terra cost?', answer: 'Standard API pricing is $1 per million input tokens, $0.05 per million cached input tokens and $5 per million output tokens, per OpenAI. That is 50% lower than GPT-5.6 Terra and GPT-6.1 Sol. Batch and Flex are 50% lower again; prompts over 272K input tokens cost more.' },
        { question: 'Who can use GPT-6.1 Terra?', answer: 'It is available to Plus, Pro, Enterprise and Edu users in ChatGPT Work and Codex, and to developers through the OpenAI API as gpt-6.1-terra.' },
        { question: 'Is GPT-6.1 Terra better than GPT-5.6 Terra?', answer: 'By OpenAI\'s numbers, yes. It scores 15 percentage points higher on the Agents\' Last Exam computer-use benchmark at about one-third the cost, cuts the low-effort error rate on error-inducing prompts from 53.6% to 16.7%, and solves 50.3% of Terminal-Bench 4.0 tasks versus 21.5%. These are OpenAI\'s own benchmarks.' },
        { question: 'What can a small business do with a computer-use AI model?', answer: 'Browser chores such as entering invoice details into accounting software, filling out forms and updating the web tools you already use. Keep a person approving anything that sends a message or moves money, set a hard cap on AI spend, and start with one task you can measure.' },
    ],
};

export default post;
