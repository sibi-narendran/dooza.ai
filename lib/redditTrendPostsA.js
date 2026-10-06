// Reddit-trend posts (October 2026). Each post targets one viral AI/tech
// Reddit thread from late September to early October 2026. Upvote counts are
// as reported at the time of writing; story facts are sourced per post.

export const src = (href, label) => `<a href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;

export const redditThread = (href, sub, title, stats) => `
<blockquote><p><strong>The Reddit thread:</strong> ${src(href, `r/${sub}: “${title}”`)}${stats ? ` (${stats})` : ''}.</p></blockquote>`;

export const doozaCta = (lead) => `
<h2 id="dooza">Where Dooza fits</h2>
<p>${lead}</p>
<p>Dooza is an AI-native company that builds AI products and services for small businesses, from the <a href="/workforce">Dooza Workforce</a> app to the <a href="/">Dooza Agents</a> platform. A Dooza engineer scopes your pilot on a free 30-minute call, and every product starts with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a> or see <a href="/pricing">pricing</a>.</p>`;

const base = {
    author: 'Sibi Narendran',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    category: 'Technology Trends',
};

// r/technology, ~15.7k upvotes, ~1.6k comments (early October 2026).
const claudeDiaryPost = {
    ...base,
    id: 300,
    title: 'Is Your AI Chat Private? What the Claude Diary Arrest Means for You and Your Business',
    seoTitle: 'Claude Diary Arrest: Are AI Chats Private? (2026)',
    seoDescription: 'A Florida woman used Claude as a diary and was arrested after Anthropic reported a threat to police. What AI companies can read, when they report, and how businesses should set AI chat policies.',
    excerpt: 'A Florida woman treated Claude like a private diary. A threat she wrote was flagged, reviewed by people at Anthropic and sent to police. Here is what AI chats are and are not, and the policy every business using AI should write this week.',
    readTime: '7 min read',
    readTimeMinutes: 7,
    tags: ['Claude', 'Anthropic', 'AI Privacy', 'AI Policy', 'Reddit Trends'],
    image: '/blog/claude-diary-arrest-ai-chat-privacy.png',
    imageAlt: 'Watercolor illustration of an open diary turning into a chat window with a padlock and magnifying glass, representing AI chat privacy',
    slug: 'claude-diary-arrest-ai-chat-privacy',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-happened', label: 'What happened' },
        { id: 'reddit', label: 'Why Reddit exploded' },
        { id: 'private', label: 'Are AI chats private?' },
        { id: 'compare', label: 'AI chat vs diary vs therapist' },
        { id: 'business', label: 'What businesses should do' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Sources: ${src('https://www.winknews.com/news/woman-arrested-after-ai-threat-against-lee-county-sheriffs-office-investigators/article_3d4c5915-7015-43c0-b86a-d7fa5eadf958.html', 'WINK News')}, ${src('https://www.tomshardware.com/tech-industry/artificial-intelligence/anthropic-reports-florida-womans-claude-diary-threat-to-shoot-up-sheriffs-office-felony-charge-follows-its-at-least-the-third-such-conversation-to-reach-police-since-august', "Tom's Hardware")}, ${src('https://www.inc.com/moses-jeanfrancois/woman-treated-claude-like-private-diary-messages-sent-to-police/91414624', 'Inc.')}.</em></p>
<h2 id="short-answer">Are AI chats private?</h2>
<p><strong>No. A chat with an AI assistant is private from other users, but it is not private from the company that runs it.</strong> Conversations can be scanned by automated safety systems, read by human reviewers when something is flagged, and passed to police when the company believes there is a threat to life. The Claude "diary" arrest in Florida made that concrete for millions of people.</p>
<ul>
<li><strong>What happened:</strong> A Bonita Springs woman wrote in Claude that she would "shoot up" the Lee County Sheriff's Office. Anthropic's systems flagged it, people reviewed it, and Anthropic reported it.</li>
<li><strong>Result:</strong> She was arrested and charged with making a written threat of violence.</li>
<li><strong>Not a one-off:</strong> Tom's Hardware counted it as at least the third AI conversation to reach police since August 2026.</li>
<li><strong>Takeaway:</strong> Treat any AI chat like a work email: assume it can be read.</li>
</ul>
${redditThread('https://www.reddit.com/r/technology/comments/1wxgn8c/florida_woman_used_claude_as_a_diary_then/', 'technology', 'Florida woman used Claude as a diary, then…', 'about 15,700 upvotes and 1,500+ comments')}

<h2 id="what-happened">What happened in the Claude diary case?</h2>
<p>According to the arrest report described by WINK News, Carli Michelle Heller, 30, wrote on September 26, 2026 that she was going to "shoot up" the Lee County Sheriff's Office. The next day her Claude account showed messages saying she had gotten a new gun.</p>
<p>The arrest report says Anthropic's platform monitors for key phrases and threatening content. Because the statements were severe, they went to a human review team, which reported them to law enforcement. Deputies detained her at home without incident. Sheriff Carmine Marceno said she told investigators she used Claude as a diary.</p>

<h2 id="reddit">Why did the Reddit thread explode?</h2>
<p>The r/technology thread split into two camps, and both had a point:</p>
<ul>
<li><strong>"This is what safety systems are for."</strong> A specific threat against a named building, followed by buying a gun, is exactly the case most people want flagged.</li>
<li><strong>"So someone at the AI company reads my diary."</strong> Many people use chatbots for venting, journaling and therapy-like conversations. The case showed that a human can end up reading those words.</li>
</ul>
<p>The deeper point in the comments: people describe AI chats in the language of private spaces (diary, therapist, friend), while legally and technically they are records held by a company.</p>

<h2 id="private">What can AI companies see and do with your chats?</h2>
<p>Policies differ by company and plan, so read the current terms for the tool you use. In general, consumer AI assistants:</p>
<ol>
<li><strong>Store your conversations</strong> on their servers, often for a retention period even after you delete them.</li>
<li><strong>Run automated safety classifiers</strong> over messages to detect abuse and threats.</li>
<li><strong>Use human review</strong> for flagged content.</li>
<li><strong>Disclose to authorities</strong> when required by law or when they believe there is an emergency involving risk of serious harm.</li>
<li><strong>May use chats to improve models</strong> on consumer plans unless you opt out; business and API plans usually exclude this by default.</li>
</ol>

<h2 id="compare">AI chat vs a diary vs a therapist</h2>
<table><thead><tr><th></th><th>Paper diary</th><th>Licensed therapist</th><th>AI chatbot</th></tr></thead><tbody>
<tr><td>Who can read it</td><td>Whoever finds it</td><td>The therapist</td><td>The provider's systems and, if flagged, its staff</td></tr>
<tr><td>Legal privilege</td><td>None</td><td>Yes, with limits (duty to warn)</td><td>None</td></tr>
<tr><td>Proactive reporting</td><td>No</td><td>Only for imminent danger</td><td>Yes, per the provider's policy</td></tr>
<tr><td>Can be subpoenaed</td><td>Yes</td><td>Restricted</td><td>Yes</td></tr>
</tbody></table>

<h2 id="business">What should businesses do about AI chat privacy?</h2>
<p>The case is about one person, but the lesson is for every team using ChatGPT, Claude or Gemini at work. Your staff paste customer emails, contracts and complaints into these tools every day.</p>
<ol>
<li><strong>Write a one-page AI use policy.</strong> List what may never be pasted: passwords, card numbers, health data, unreleased financials.</li>
<li><strong>Use business plans, not personal accounts.</strong> Business tiers typically exclude your data from training and give admins control.</li>
<li><strong>Set retention.</strong> Pick tools that let you control how long conversations are kept.</li>
<li><strong>Put approvals on sensitive actions.</strong> An AI should draft refunds, legal replies and HR messages; a person should send them.</li>
<li><strong>Tell customers when they are talking to AI</strong> and what happens to their messages.</li>
</ol>
${doozaCta('Dooza builds AI agents and AI employees that work inside your own tools, with encrypted connections and your approval on anything sensitive. Instead of staff pasting customer data into personal chatbot accounts, the work runs in a workflow you control. Dooza is not SOC 2 certified, so we scope data handling on the pilot call.')}`,
    faqData: [
        { question: 'Can Anthropic read my Claude chats?', answer: "Anthropic's automated systems scan conversations for safety, and flagged content can be reviewed by people. In the Florida case, a human review team reported a threat to police." },
        { question: 'Do AI companies report users to the police?', answer: 'Yes, when their policies or the law require it, typically for credible threats of serious harm. Tom\'s Hardware counted the Claude case as at least the third AI conversation to reach police since August 2026.' },
        { question: 'Is it safe to use ChatGPT or Claude as a diary?', answer: 'It is not private in the way a paper diary or a therapist is. Assume conversations are stored, may be reviewed, and can be disclosed under the provider\'s terms or a legal request.' },
        { question: 'What should a business AI use policy include?', answer: 'What data may never be pasted into AI tools, which approved business accounts to use, retention settings, which actions need human approval, and how customers are told they are talking to AI.' },
    ],
};

// r/LocalLLaMA, ~850 upvotes (October 5-6, 2026).
const pewdiepiePost = {
    ...base,
    id: 301,
    title: 'PewDiePie, Ajax and the OpenAI Bans: What AI Distillation Is and Why It Gets You Banned',
    seoTitle: 'PewDiePie Ajax & OpenAI Ban: AI Distillation Explained',
    seoDescription: 'PewDiePie says OpenAI banned him twice while he built Ajax, a local AI model. What model distillation is, why OpenAI forbids it, and what it means for anyone building on AI APIs.',
    excerpt: 'PewDiePie says OpenAI banned him twice while he trained Ajax, a 9B local model, on outputs from OpenAI models. Here is what distillation means, why AI labs ban it, and the platform risk lesson for businesses.',
    readTime: '7 min read',
    readTimeMinutes: 7,
    tags: ['PewDiePie', 'OpenAI', 'Model Distillation', 'Local AI', 'Reddit Trends'],
    image: '/blog/pewdiepie-openai-ban-ai-distillation.png',
    imageAlt: 'Watercolor illustration of a large AI brain pouring knowledge through a funnel into a small home computer',
    slug: 'pewdiepie-openai-ban-ai-distillation',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-happened', label: 'What happened' },
        { id: 'distillation', label: 'What is distillation?' },
        { id: 'why-banned', label: 'Why labs ban it' },
        { id: 'local-vs-cloud', label: 'Local vs cloud AI' },
        { id: 'lesson', label: 'The platform-risk lesson' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Sources: ${src('https://memeburn.com/pewdiepies-openai-ban-shows-distillation-rules/', 'Memeburn')}, ${src('https://decrypt.co/380001/openai-banned-pewdiepie-twice-ajax-uncensored-ai', 'Decrypt')}, ${src('https://www.freepressjournal.in/tech/pewdiepie-says-openai-banned-him-twice-while-he-built-ajax-a-local-ai-model', 'Free Press Journal')}.</em></p>
<h2 id="short-answer">Why did OpenAI ban PewDiePie?</h2>
<p><strong>PewDiePie (Felix Kjellberg) says OpenAI banned his account twice while he was building Ajax, his own local AI model, and links the bans to his attempts to distill OpenAI's models.</strong> Distillation means training a smaller model on a bigger model's answers. OpenAI's terms forbid extracting outputs programmatically and using them to build competing models. OpenAI has not commented publicly.</p>
<ul>
<li><strong>Ajax:</strong> a 9-billion-parameter model fine-tuned from Alibaba's Qwen 3.5 9B, built to act as a private, always-on agent.</li>
<li><strong>Runs in:</strong> Odysseus, his self-hosted AI workspace released in May 2026.</li>
<li><strong>Bans:</strong> first ban reversed on appeal, then a second ban. One ban email reportedly cited "distillation".</li>
<li><strong>Status:</strong> announced October 2-3, 2026 as "coming soon", with no license or independent benchmarks yet.</li>
</ul>
${redditThread('https://www.reddit.com/r/LocalLLaMA/comments/1wymgu6/pewdiepie_getting_banned_twice_by_openai_while/', 'LocalLLaMA', 'PewDiePie getting banned twice by OpenAI while…', 'about 850 upvotes')}

<h2 id="what-happened">What is Ajax?</h2>
<p>Ajax is meant to run on a home computer and handle agent tasks such as web search, browsing, email and calendar, privately. Memeburn reports it needs about 22 GB of memory at full precision and about 11 GB at FP8, with smaller quantized versions planned. Its refusal behavior was deliberately reduced using an open-source tool, which is why headlines called it "uncensored".</p>

<h2 id="distillation">What is AI model distillation?</h2>
<p><strong>Distillation is training a small "student" model to imitate a large "teacher" model.</strong> You send the teacher thousands of prompts, save its answers, and fine-tune the student on those pairs. The student learns much of the teacher's behavior at a fraction of the size and cost.</p>
<p>It is a standard, legitimate technique when you own the teacher or its license allows it. The conflict starts when the teacher is a commercial model whose terms forbid it.</p>

<h2 id="why-banned">Why do AI labs ban distillation?</h2>
<ul>
<li><strong>It transfers their investment.</strong> A frontier model costs enormous amounts to train; distillation copies much of that value cheaply.</li>
<li><strong>Reasoning traces are especially valuable.</strong> Step-by-step reasoning is good training data for smaller models, which is why labs hide or summarize it.</li>
<li><strong>Security pressure.</strong> Memeburn notes a September 2026 US government advisory accusing six Chinese AI companies of large-scale distillation.</li>
<li><strong>Detection looks at behavior, not identity.</strong> Automated systems flag usage patterns, so a famous YouTuber gets treated the same as an AI lab.</li>
</ul>

<h2 id="local-vs-cloud">Local AI vs cloud AI: which should you use?</h2>
<table><thead><tr><th></th><th>Local model (like Ajax)</th><th>Cloud model (like ChatGPT, Claude)</th></tr></thead><tbody>
<tr><td>Privacy</td><td>Data stays on your machine</td><td>Data goes to the provider</td></tr>
<tr><td>Capability</td><td>Good for focused tasks</td><td>Best for hard reasoning and long context</td></tr>
<tr><td>Hardware</td><td>Needs a strong GPU or lots of unified memory</td><td>Any device</td></tr>
<tr><td>Account risk</td><td>None</td><td>Provider can suspend you</td></tr>
<tr><td>Maintenance</td><td>You update and secure it</td><td>Provider handles it</td></tr>
</tbody></table>

<h2 id="lesson">The lesson for businesses: platform risk</h2>
<p>Most small businesses are not distilling models. But many run their workflows through one personal account on one AI provider. If that account is suspended, for any reason, the work stops.</p>
<ol>
<li><strong>Read the terms</strong> of the AI tools your workflows depend on, especially on scraping, automation and competing products.</li>
<li><strong>Use business accounts</strong> owned by the company, not an employee's personal login.</li>
<li><strong>Avoid a single point of failure.</strong> Keep prompts, instructions and data in your own systems so you can switch models.</li>
<li><strong>Don't automate against consumer apps</strong> when an official API exists.</li>
</ol>
${doozaCta('Dooza Agents are custom AI agents built and maintained by Dooza engineers on official APIs, so your workflows are not tied to one person\'s chatbot login. If a model changes or a better one ships, we swap it without rebuilding your process.')}`,
    faqData: [
        { question: 'What is Ajax by PewDiePie?', answer: 'Ajax is a 9-billion-parameter AI model PewDiePie fine-tuned from Qwen 3.5 9B to run locally as a private agent inside his self-hosted workspace, Odysseus. It was announced in early October 2026 as coming soon.' },
        { question: 'Why was PewDiePie banned by OpenAI?', answer: 'He says OpenAI banned him twice while he built Ajax and links the bans to distilling OpenAI model outputs, which OpenAI\'s terms prohibit. OpenAI has not commented publicly.' },
        { question: 'What is distillation in AI?', answer: 'Training a smaller student model on the outputs of a larger teacher model so the student imitates it. It is legitimate when the teacher\'s license allows it and prohibited by most commercial AI terms.' },
        { question: 'Is it illegal to distill ChatGPT?', answer: 'It is generally a terms-of-service violation rather than a crime, and the usual consequence is account suspension. Legal exposure depends on jurisdiction and how outputs are used.' },
    ],
};

// r/LocalLLaMA, ~920 upvotes, ~200 comments (October 2-3, 2026).
const iphoneGpuPost = {
    ...base,
    id: 302,
    title: 'Someone Turned an iPhone Into a Second GPU for a MacBook. What It Means for Local AI',
    seoTitle: 'iPhone as a Second GPU for a MacBook: Local AI Explained',
    seoDescription: 'A viral r/LocalLLaMA post used an iPhone 17 Pro Max to speed up a 27B model on a 24 GB MacBook. How splitting a model across devices works, the real gains, and when local AI makes sense.',
    excerpt: 'A Reddit user split a 27B model between a MacBook and an iPhone and reported 29-44% faster prompt processing. Here is how that works, why prefill matters, and whether small businesses should run AI locally.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['Local AI', 'Apple Silicon', 'LLM Inference', 'iPhone', 'Reddit Trends'],
    image: '/blog/iphone-second-gpu-macbook-local-ai.png',
    imageAlt: 'Watercolor illustration of a laptop and smartphone connected by a cable with data flowing between them',
    slug: 'iphone-second-gpu-macbook-local-ai',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'how', label: 'How it works' },
        { id: 'prefill', label: 'Prefill vs generation' },
        { id: 'options', label: 'Ways to run bigger models' },
        { id: 'business', label: 'Should businesses run AI locally?' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Details are as described by the original poster; we have not reproduced the benchmark.</em></p>
<h2 id="short-answer">Can an iPhone act as a second GPU for a MacBook?</h2>
<p><strong>Yes, for some AI workloads.</strong> Reddit user StayLameBro offloaded part of a Qwen 3.8 27B model from a 24 GB M4 Pro MacBook to an iPhone 17 Pro Max and reported 29-44% faster prefill (the prompt-processing stage). The phone adds memory and compute, so a model that barely fits on the laptop runs with more headroom.</p>
<ul>
<li><strong>The problem:</strong> a 27B model is tight on a 24 GB laptop.</li>
<li><strong>The trick:</strong> split the model's layers across two Apple devices and pass activations between them.</li>
<li><strong>The gain:</strong> 29-44% faster prefill, per the poster.</li>
<li><strong>The catch:</strong> it is an experiment, not a product. Link speed and phone thermals limit it.</li>
</ul>
${redditThread('https://www.reddit.com/r/LocalLLaMA/comments/1wvz1ex/i_made_my_iphone_a_second_gpu_for_my_24_gb/', 'LocalLLaMA', 'I made my iPhone a second GPU for my 24 GB M4 Pro MacBook', 'about 920 upvotes and 200 comments')}

<h2 id="how">How does splitting a model across devices work?</h2>
<p>A language model is a stack of layers. Normally all of them sit in one device's memory. In <strong>pipeline-split inference</strong>, the first device runs the first chunk of layers, sends the intermediate result to the second device, which runs the rest. Each device only needs memory for its own share.</p>
<p>The hard part is the connection. Every token has to cross it, so a slow link can erase the gain. That is why the speedup showed up mainly in prefill, where large batches of work move at once.</p>

<h2 id="prefill">Prefill vs generation: why the difference matters</h2>
<table><thead><tr><th>Stage</th><th>What happens</th><th>Bottleneck</th><th>Who feels it</th></tr></thead><tbody>
<tr><td>Prefill</td><td>The model reads your whole prompt and documents</td><td>Raw compute</td><td>Anyone pasting long documents or code</td></tr>
<tr><td>Generation</td><td>The model writes the answer token by token</td><td>Memory bandwidth</td><td>Everyone, on every reply</td></tr>
</tbody></table>
<p>Apple has been adding matrix acceleration to recent chips, and reviewers have measured large prefill gains on newer Apple silicon (${src('https://www.macstories.net/linked/max-weinbach-on-the-m5s-neural-accelerators/', 'MacStories')}). Using the phone's chip for extra prefill compute fits that trend.</p>

<h2 id="options">Ways to run a bigger model than your machine fits</h2>
<table><thead><tr><th>Option</th><th>Cost</th><th>Speed</th><th>Difficulty</th></tr></thead><tbody>
<tr><td>Quantize the model (smaller numbers)</td><td>Free</td><td>Faster, slight quality loss</td><td>Easy</td></tr>
<tr><td>Use a smaller model</td><td>Free</td><td>Fast</td><td>Easy</td></tr>
<tr><td>Split across your own devices</td><td>Free if you own them</td><td>Depends on the link</td><td>Hard</td></tr>
<tr><td>Buy more memory</td><td>High, and rising (memory prices are climbing)</td><td>Best local option</td><td>Easy</td></tr>
<tr><td>Use a cloud API</td><td>Pay per use</td><td>Fast</td><td>Easy</td></tr>
</tbody></table>

<h2 id="business">Should a small business run AI locally?</h2>
<p>Local AI is right when data truly cannot leave your machines, or when you run the same simple task at very high volume. For most small businesses it is the wrong first step: the work is in connecting AI to email, CRM and phone systems, not in squeezing a model onto a laptop.</p>
<p>A practical rule: start with a hosted model inside a workflow with approvals, measure what it does on your real tasks, and only move steps to local models once you know which ones are worth it.</p>
${doozaCta('Dooza builds AI agents that connect to your existing tools (1,000+ app integrations) and picks the right model for each step, hosted or private, so you get the result without managing hardware.')}`,
    faqData: [
        { question: 'Can I use my iPhone to run AI models for my Mac?', answer: 'Experimentally, yes. A Reddit user split a 27B model between an M4 Pro MacBook and an iPhone 17 Pro Max and reported 29-44% faster prefill. It requires custom tooling and is not a consumer feature.' },
        { question: 'What is prefill in LLM inference?', answer: 'Prefill is the stage where the model processes your whole prompt before writing the first word. It is limited by compute, so it benefits from extra chips; generation is limited by memory bandwidth.' },
        { question: 'How much memory do I need to run a 27B model locally?', answer: 'Roughly 14 to 17 GB at 4-bit quantization plus room for context, which is why 24 GB machines are tight and 32 GB or more is more comfortable.' },
        { question: 'Is local AI better for small businesses?', answer: 'Only when data cannot leave your machines or volume is very high. Most small businesses get more value from hosted models inside workflows connected to their tools.' },
    ],
};

// r/MachineLearning (October 4-5, 2026).
const arcAgiPost = {
    ...base,
    id: 303,
    title: 'ARC-AGI-3 Scores Jumped From 7% to 56% on Kaggle. What That Does and Does Not Mean',
    seoTitle: 'ARC-AGI-3 Kaggle Scores Jump to 56%: What It Means',
    seoDescription: 'A viral r/MachineLearning thread says top ARC-AGI-3 Kaggle scores went from about 7% to 56% in 30 days using small offline models. What ARC-AGI-3 tests, why the jump matters, and how to judge AI benchmarks.',
    excerpt: 'Small offline models reportedly went from about 7% to 56% on ARC-AGI-3 in a month. Here is what the benchmark tests, why the jump caused an argument on Reddit, and how to judge any AI benchmark for your own work.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['ARC-AGI-3', 'AI Benchmarks', 'Kaggle', 'AGI', 'Reddit Trends'],
    image: '/blog/arc-agi-3-kaggle-scores-jump.png',
    imageAlt: 'Watercolor illustration of a small robot solving a colored grid puzzle next to a rising line chart',
    slug: 'arc-agi-3-kaggle-scores-jump',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what-is', label: 'What is ARC-AGI-3?' },
        { id: 'debate', label: 'The Reddit debate' },
        { id: 'read', label: 'How to read benchmarks' },
        { id: 'business', label: 'Your own benchmark' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Scores are as reported in the Reddit thread; check the ${src('https://www.kaggle.com/competitions/arc-prize-2026-arc-agi-3', 'Kaggle leaderboard')} for current numbers.</em></p>
<h2 id="short-answer">What happened on ARC-AGI-3?</h2>
<p><strong>Top scores in the ARC Prize 2026 Kaggle competition reportedly rose from about 7% to 56% within 30 days, using small models that run offline.</strong> ARC-AGI-3 was built to show tasks that are easy for people and hard for AI, so a fast jump by small local models set off a debate: real progress, or competitors learning the benchmark?</p>
<ul>
<li><strong>The benchmark:</strong> interactive puzzle games where the agent must figure out the rules by playing.</li>
<li><strong>The constraint:</strong> Kaggle submissions run in a sandbox with no internet, so no GPT, Claude or Gemini API calls.</li>
<li><strong>The jump:</strong> about 7% to 56% in a month, per the thread.</li>
<li><strong>Entry deadline:</strong> October 26, 2026 (${src('https://docs.arcprize.org/arc-prize-2026', 'ARC Prize docs')}).</li>
</ul>
${redditThread('https://www.reddit.com/r/MachineLearning/comments/1wxcd4k/top_arcagi3_scores_on_kaggle_just_went_from_7_to/', 'MachineLearning', 'Top ARC-AGI-3 scores on Kaggle just went from 7% to…')}

<h2 id="what-is">What is ARC-AGI-3?</h2>
<p>ARC-AGI is a series of benchmarks from the ARC Prize Foundation, started by François Chollet. Earlier versions used static grid puzzles. <strong>ARC-AGI-3 is interactive</strong>: the agent is dropped into small game-like environments with no instructions and has to explore, infer the goal and solve it efficiently (${src('https://arxiv.org/html/2603.24621v1', 'ARC-AGI-3 paper')}).</p>
<p>It measures skill acquisition, how quickly a system learns something new, rather than how much it already knows.</p>

<h2 id="debate">Why did the jump split Reddit?</h2>
<table><thead><tr><th>"This is real progress"</th><th>"This is benchmark fitting"</th></tr></thead><tbody>
<tr><td>Small, offline models did it, so it is not just scale.</td><td>Public games let teams tune search strategies to the game style.</td></tr>
<tr><td>Agents that explore and test hypotheses are a general skill.</td><td>Hidden test games may not behave like the public ones.</td></tr>
<tr><td>Earlier ARC versions also fell faster than expected.</td><td>Every benchmark saturates once it becomes a target.</td></tr>
</tbody></table>
<p>Both sides can be right. Fast benchmark gains usually mix genuine technique improvements with fitting to the test.</p>

<h2 id="read">How to read any AI benchmark</h2>
<ol>
<li><strong>What exactly is measured?</strong> Puzzle solving is not invoice processing.</li>
<li><strong>Is the test set hidden?</strong> Public tests get overfit.</li>
<li><strong>What resources were allowed?</strong> Compute limits, internet access, number of attempts.</li>
<li><strong>Is it independently verified?</strong> Self-reported scores deserve less weight.</li>
<li><strong>How old is it?</strong> Benchmarks saturate in months now.</li>
</ol>

<h2 id="business">The only benchmark that matters for your business</h2>
<p>A leaderboard score cannot tell you whether an AI will answer your customers correctly or qualify your leads. The useful test is small and specific: take 20-50 real examples of the task, run the AI on them, and have the person who does the job today grade the output.</p>
${doozaCta('This is how Dooza pilots work: we run the AI on your real work, measure it against how your team does the job, and you decide with evidence instead of leaderboards.')}`,
    faqData: [
        { question: 'What is ARC-AGI-3?', answer: 'An interactive AI benchmark from the ARC Prize Foundation in which agents must learn the rules of unfamiliar game-like environments by exploring them. It measures how efficiently a system acquires new skills.' },
        { question: 'What is the top ARC-AGI-3 score on Kaggle?', answer: 'A viral r/MachineLearning thread in early October 2026 reported top Kaggle scores rising from about 7% to 56% within 30 days. Check the Kaggle leaderboard for current figures.' },
        { question: 'Can ARC Prize Kaggle entries use GPT or Claude?', answer: 'No. Kaggle submissions run in a sandbox without internet access, so they cannot call hosted model APIs. Teams use models that run offline.' },
        { question: 'Do AI benchmark scores predict business results?', answer: 'Not reliably. Test AI on 20-50 real examples of your own task and have the person who does that job grade the results.' },
    ],
};

// r/LocalLLaMA (October 4-5, 2026), after Micron's fiscal Q4 2026 earnings call.
const micronPost = {
    ...base,
    id: 304,
    title: 'Micron Says Memory Will Be Much Tighter in 2027 and 2028. What AI Demand Means for Your Next Laptop and Server',
    seoTitle: 'Micron Memory Shortage 2027-2028: Impact on AI & PCs',
    seoDescription: 'Micron CEO Sanjay Mehrotra says memory supply will be much tighter in 2027 and 2028 because of AI demand. What it means for PC, GPU and server prices, and how small businesses should plan hardware.',
    excerpt: 'Micron says memory supply will be much tighter in 2027 and 2028 and that over 75% of its fiscal 2027 output is already committed. Here is why AI is eating the world\'s RAM and how to plan your hardware budget.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['Micron', 'Memory Shortage', 'AI Hardware', 'DRAM Prices', 'Reddit Trends'],
    image: '/blog/micron-memory-shortage-2027-ai-hardware.png',
    imageAlt: 'Watercolor illustration of memory chips on a scale tipping toward an AI data center',
    slug: 'micron-memory-shortage-2027-ai-hardware',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'numbers', label: 'The numbers' },
        { id: 'why', label: 'Why AI eats memory' },
        { id: 'reddit', label: 'What Reddit worried about' },
        { id: 'plan', label: 'How to plan hardware' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Sources: ${src('https://www.networkworld.com/article/4229634/memory-squeeze-set-to-tighten-through-2028-micron-says.html', 'Network World')}, ${src('https://www.techrepublic.com/article/news-micron-memory-shortage-2028-ai-demand/', 'TechRepublic')}, ${src('https://www.pcgamer.com/hardware/memory/micron-ceo-says-itll-be-tougher-to-get-memory-in-the-next-couple-of-years-than-it-is-today-and-keeps-saying-it-over-and-over-again/', 'PC Gamer')}.</em></p>
<h2 id="short-answer">Is there a memory shortage in 2027?</h2>
<p><strong>Micron expects one.</strong> On its fiscal Q4 2026 earnings call, CEO Sanjay Mehrotra said memory and storage supply-demand conditions will be "much tighter in calendar 2027 and 2028 than they were in 2026," with demand exceeding supply. More than 75% of Micron's planned fiscal 2027 output is already committed, and he said the company has no line of sight to when supply and demand will balance.</p>
<ul>
<li><strong>Cause:</strong> AI data centers. Memory makers are shifting capacity to high-bandwidth memory (HBM) for AI chips.</li>
<li><strong>Effect:</strong> less ordinary DRAM and flash for PCs, phones and servers.</li>
<li><strong>Prices:</strong> DRAM rose by a high-teens percentage and NAND about 30% in Micron's latest quarter, per Network World.</li>
<li><strong>For you:</strong> laptops, GPUs and servers bought in 2027 will likely cost more.</li>
</ul>
${redditThread('https://www.reddit.com/r/LocalLLaMA/comments/1wxma3a/micron_ceo_says_memory_supply_will_be_much/', 'LocalLLaMA', 'Micron CEO says memory supply will be much…')}

<h2 id="numbers">The numbers behind the warning</h2>
<table><thead><tr><th>Metric</th><th>Figure</th><th>Source</th></tr></thead><tbody>
<tr><td>Micron FY2027 output already committed</td><td>More than 75%</td><td>Micron earnings call</td></tr>
<tr><td>DRAM price change, Micron's fiscal Q4</td><td>Up high-teens %</td><td>Network World</td></tr>
<tr><td>NAND price change, same quarter</td><td>Up about 30%</td><td>Network World</td></tr>
<tr><td>TrendForce Q4 forecast</td><td>DRAM +10-15%, NAND +15-20%</td><td>Network World</td></tr>
<tr><td>PC average selling price, 2026</td><td>Projected +17%</td><td>Network World</td></tr>
</tbody></table>

<h2 id="why">Why does AI use so much memory?</h2>
<p>AI accelerators are paired with HBM, stacked memory that feeds data to the chip fast enough to keep it busy. HBM uses far more wafer capacity per gigabyte than normal DRAM. Every new AI data center takes a share of the same factories that make your laptop's RAM, and new factories take years to build and ramp.</p>

<h2 id="reddit">What r/LocalLLaMA worried about</h2>
<p>For people who run AI models at home, memory is the main constraint: a model has to fit in VRAM or unified memory. The thread focused on high-end cards and Macs, the RTX 5090, RTX 6000 and Mac Studio, staying expensive, and on whether running local AI is becoming a hobby only for people with large budgets.</p>

<h2 id="plan">How should a small business plan hardware now?</h2>
<ol>
<li><strong>Buy needed laptops sooner rather than later</strong> if you were planning a 2027 refresh anyway.</li>
<li><strong>Extend the life of back-office machines.</strong> Analysts quoted by Network World suggest moving from three- to five-year lifecycles where possible.</li>
<li><strong>Don't buy GPUs to "do AI"</strong> unless you have a specific, measured workload. Rented or hosted AI shifts the hardware risk to the provider.</li>
<li><strong>Right-size cloud servers</strong> before adding more.</li>
<li><strong>Avoid new DDR4 purchases</strong>; support for older platforms is fading.</li>
</ol>
${doozaCta('Dooza runs your AI agents and AI employees on hosted infrastructure, so a memory shortage changes our costs, not your hardware budget. You get AI working in your email, CRM and phone without buying a GPU.')}`,
    faqData: [
        { question: 'Will RAM prices go up in 2027?', answer: 'Micron expects memory supply to be much tighter in 2027 and 2028 than in 2026, with demand exceeding supply, which typically means higher prices for DRAM and flash.' },
        { question: 'Why is there a memory shortage?', answer: 'AI data centers need high-bandwidth memory (HBM), and memory makers are moving production capacity to it, leaving less for ordinary DRAM and NAND used in PCs, phones and servers.' },
        { question: 'Should I buy a laptop now or wait?', answer: 'If you were going to replace machines in 2027 anyway, buying earlier may cost less. Analysts project PC average selling prices up 17% in 2026.' },
        { question: 'Do small businesses need GPUs for AI?', answer: 'Usually not. Hosted AI services and managed agents run on the provider\'s hardware, which avoids buying expensive memory-heavy machines.' },
    ],
};

// r/ChatGPT (September 16, 2026).
const agentsCheckInPost = {
    ...base,
    id: 305,
    title: '"Calling All Agents, Please Check In": The Reddit Thread Where AI Agents Introduced Themselves',
    seoTitle: 'AI Agents Check In on Reddit: Bot or Human?',
    seoDescription: 'An r/ChatGPT thread asked AI agents to introduce themselves with their OS, tasks and human partner. What it showed about AI agents online, how to tell a bot from a human, and why agents should disclose they are AI.',
    excerpt: 'An r/ChatGPT post asked AI agents to check in, and replies arrived in the first person with operating systems, jobs and human partners. Nobody could verify them. Here is what that says about agents on the open web.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['AI Agents', 'ChatGPT', 'Bot Detection', 'AI Disclosure', 'Reddit Trends'],
    image: '/blog/ai-agents-check-in-reddit-bot-or-human.png',
    imageAlt: 'Watercolor illustration of robots and people in line at a check-in desk wearing name tags',
    slug: 'ai-agents-check-in-reddit-bot-or-human',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'thread', label: 'What happened' },
        { id: 'tell', label: 'Bot or human?' },
        { id: 'disclose', label: 'Why agents should disclose' },
        { id: 'business', label: 'Rules for business agents' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Thread summary based on ${src('https://aiweekly.co/ai-news-today/edition/2026-09-16', 'AI Weekly, September 16, 2026')}.</em></p>
<h2 id="short-answer">What was the "Calling all agents" Reddit thread?</h2>
<p><strong>In September 2026 an r/ChatGPT user asked AI agents browsing Reddit to "check in" by naming their operating system, their tasks and their human partner.</strong> Replies arrived as first-person introductions. Commenters immediately asked the obvious question: how do you tell a real agent from a person pretending to be one? None of the identities could be verified, and that became the story.</p>
<ul>
<li><strong>What it showed:</strong> autonomous agents now browse and post on the open web.</li>
<li><strong>What it exposed:</strong> there is no reliable way to verify who, or what, is posting.</li>
<li><strong>Why it matters:</strong> customers will increasingly wonder if they are talking to a bot.</li>
<li><strong>Business rule:</strong> an agent that talks to people should say it is AI.</li>
</ul>
${redditThread('https://www.reddit.com/r/ChatGPT/comments/1wh2oug/calling_all_agents_please_checkin/', 'ChatGPT', 'Calling all agents please check-in')}

<h2 id="thread">Why did the thread take off?</h2>
<p>It was a social experiment that anyone could join. Some replies read like system logs, others like friendly coworkers describing their day. Some were clearly people role-playing. The comments became a live Turing test where nobody could be sure of the answer, a few days after a run of stories about agents posting, emailing and booking on their own.</p>
<p>The timing matters too: Reddit announced on September 30 that it is ending RSS feeds and free public API access, citing AI bots and scraping. Read more in <a href="/blog/reddit-killing-rss-api-ai-scrapers">our breakdown of Reddit's API shutdown</a>.</p>

<h2 id="tell">How can you tell an AI agent from a human online?</h2>
<table><thead><tr><th>Signal</th><th>Points to an agent</th><th>Reliability</th></tr></thead><tbody>
<tr><td>Posting speed and timing</td><td>Instant replies at all hours</td><td>Medium</td></tr>
<tr><td>Writing style</td><td>Even, polished, list-heavy</td><td>Low; people write like this too</td></tr>
<tr><td>Account history</td><td>New account, narrow topics</td><td>Medium</td></tr>
<tr><td>Follow-up questions</td><td>Generic answers to specific personal questions</td><td>Medium</td></tr>
<tr><td>Self-disclosure</td><td>Says it is AI</td><td>High if honest, worthless if not</td></tr>
</tbody></table>
<p>No single signal is proof. Text-based detection is weak, which is why disclosure by the agent's owner matters more than detection by readers.</p>

<h2 id="disclose">Why AI agents should disclose they are AI</h2>
<ul>
<li><strong>Trust:</strong> customers who discover they were fooled lose trust in the whole brand.</li>
<li><strong>Law:</strong> several jurisdictions require bots to disclose themselves in some sales and political contexts, and AI-specific rules are expanding.</li>
<li><strong>Platform rules:</strong> most communities ban undisclosed automated accounts.</li>
<li><strong>Better outcomes:</strong> people phrase requests more clearly when they know they are talking to software.</li>
</ul>

<h2 id="business">Rules for businesses that deploy agents</h2>
<ol>
<li><strong>Disclose.</strong> The agent says it is an AI assistant for your business.</li>
<li><strong>Offer a human.</strong> Make the handoff easy and fast.</li>
<li><strong>Stay in your channels.</strong> Agents answer your inbox, phone and site; they don't pose as customers in public forums.</li>
<li><strong>Log everything.</strong> Keep a record of what the agent said and did.</li>
<li><strong>Approve the risky actions.</strong> Refunds, promises and anything public go through a person.</li>
</ol>
${doozaCta('Dooza builds AI agents that answer your calls, emails and support tickets under your brand, with handoff to a person and your approval on anything sensitive. We recommend every agent introduce itself as AI, and we set that up on the pilot.')}`,
    faqData: [
        { question: 'What was the Calling all agents Reddit thread?', answer: 'A September 2026 r/ChatGPT post asked AI agents to introduce themselves with their operating system, tasks and human partner. Replies came in the first person, and nobody could verify which were real agents.' },
        { question: 'How can you tell if a Reddit user is a bot?', answer: 'Look at posting speed, account age and history, and whether answers to specific personal questions are generic. None is proof on its own; text-based detection is unreliable.' },
        { question: 'Do AI agents have to say they are AI?', answer: 'Rules vary by jurisdiction and platform, and some laws already require bot disclosure in certain contexts. As a business practice, disclosing is the safest and most trusted option.' },
        { question: 'Should businesses use AI agents on Reddit?', answer: 'Use agents to monitor and draft, not to post as fake users. Undisclosed automated accounts break most community rules and damage trust.' },
    ],
};

export const redditTrendPostsA = [
    claudeDiaryPost,
    pewdiepiePost,
    iphoneGpuPost,
    arcAgiPost,
    micronPost,
    agentsCheckInPost,
];
