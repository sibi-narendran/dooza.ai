// Reddit-trend posts (October 2026), part B. See redditTrendPostsA.js.
import { src, redditThread, doozaCta } from './redditTrendPostsA';

const base = {
    author: 'Sibi Narendran',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    category: 'Technology Trends',
};

// r/StableDiffusion, ~1,250 upvotes, ~120 comments (October 1-2, 2026).
const orbitingVideoPost = {
    ...base,
    id: 306,
    title: 'The Orbiting LoRA + MiniMax Trick: How to Make 360-Degree AI Product Videos',
    seoTitle: 'Orbiting LoRA + MiniMax: 360° AI Product Video Guide',
    seoDescription: 'A viral r/StableDiffusion workflow combines an orbiting LoRA with first and last frames in MiniMax to create 360-degree camera orbits. How it works and how ecommerce brands can use it for product video.',
    excerpt: 'A r/StableDiffusion workflow pairs an orbiting LoRA with first-and-last-frame control in MiniMax to get smooth 360-degree camera moves. Here is how it works and how small brands can use it for product video.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['AI Video', 'MiniMax', 'LoRA', 'Product Video', 'Reddit Trends'],
    image: '/blog/minimax-orbiting-lora-360-product-video.png',
    imageAlt: 'Watercolor illustration of a product on a turntable with a camera orbiting it on a dotted circular path',
    slug: 'minimax-orbiting-lora-360-product-video',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'terms', label: 'Key terms' },
        { id: 'workflow', label: 'The workflow' },
        { id: 'failures', label: 'What goes wrong' },
        { id: 'ecommerce', label: 'Use it for products' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Workflow summary based on the Reddit post and ${src('https://buttondown.com/agent-k/archive/llm-daily-october-02-2026/', 'LLM Daily')}.</em></p>
<h2 id="short-answer">What is the orbiting LoRA + MiniMax trick?</h2>
<p><strong>It is a way to get a smooth 360-degree camera orbit around a still subject from an AI video model.</strong> The creator combined a LoRA trained on orbiting camera moves with MiniMax's first-and-last-frame control: you give the model where the shot starts and ends, and the LoRA pushes the camera to circle the subject between them. The post reached about 1,250 upvotes because orbits are one of the hardest shots to get right with AI video.</p>
<ul>
<li><strong>Use:</strong> product spins, real-estate exteriors, character turnarounds.</li>
<li><strong>Key inputs:</strong> a start frame, an end frame, the orbit LoRA, a careful prompt.</li>
<li><strong>Main problems solved:</strong> subject drift and the background changing mid-orbit.</li>
<li><strong>For brands:</strong> a cheap way to test 360-degree product shots before a studio shoot.</li>
</ul>
${redditThread('https://www.reddit.com/r/StableDiffusion/comments/1wuzyq0/orbiting_lora_first_and_last_frame_in_minimax/', 'StableDiffusion', 'Orbiting LoRA + First and Last Frame in MiniMax', 'about 1,250 upvotes and 120 comments')}

<h2 id="terms">Key terms in plain English</h2>
<table><thead><tr><th>Term</th><th>Meaning</th></tr></thead><tbody>
<tr><td>LoRA</td><td>A small add-on file that teaches a big model one specific style or motion without retraining it.</td></tr>
<tr><td>Orbit shot</td><td>The camera circles around a subject that stays in place.</td></tr>
<tr><td>First and last frame</td><td>You supply the opening and closing images; the model fills in the motion between them.</td></tr>
<tr><td>Subject drift</td><td>The object slowly changes shape, color or position during the clip.</td></tr>
</tbody></table>

<h2 id="workflow">How the workflow works, step by step</h2>
<ol>
<li><strong>Make or shoot the start frame:</strong> the subject from the front.</li>
<li><strong>Make the end frame:</strong> the same subject from the angle where the orbit should finish, with the same lighting and background.</li>
<li><strong>Load the orbit LoRA</strong> so the model favors circular camera motion.</li>
<li><strong>Prompt the camera, not the subject:</strong> describe a slow, steady orbit and say the subject stays still.</li>
<li><strong>Generate several takes</strong> and keep the one with the least drift.</li>
</ol>

<h2 id="failures">What goes wrong, and how the post fixed it</h2>
<ul>
<li><strong>Subject drift:</strong> lock it with matching start and end frames and a prompt that says the subject does not move.</li>
<li><strong>Background inconsistency:</strong> keep the environment simple; busy backgrounds change as the camera turns.</li>
<li><strong>Half orbits:</strong> for a full 360, chain clips where each end frame becomes the next start frame.</li>
</ul>

<h2 id="ecommerce">How ecommerce brands can use it</h2>
<p>A product spin on a product page or in an ad shows shape and finish better than a still. Traditionally that means a turntable and a photographer. With this workflow you can test the idea from two good product photos.</p>
<p>Be honest with it: AI-generated product video must show the real product accurately. Check colors, labels and proportions against the physical item before you publish, and don't use it to show features the product doesn't have.</p>
${doozaCta('Dooza\'s <a href="/agents/ugc-reel-creator">UGC Reel Creator</a> turns your product photos and briefs into short-form videos for social and ads, with a person reviewing every clip before it goes out.')}`,
    faqData: [
        { question: 'What is an orbiting LoRA?', answer: 'A small add-on model trained on circular camera moves. Loaded into a video model, it pushes the camera to orbit around a still subject.' },
        { question: 'How do you make a 360-degree video with AI?', answer: 'Provide a start frame and end frame of the subject from different angles, use an orbit LoRA or camera-control feature, prompt a slow steady orbit, and chain clips for a full rotation.' },
        { question: 'Can AI product videos replace a product shoot?', answer: 'They are good for testing ideas and social content. For product pages, check every frame against the real product so colors, labels and proportions are accurate.' },
        { question: 'What causes subject drift in AI video?', answer: 'The model re-imagines the subject frame by frame. Matching start and end frames, simple backgrounds and prompts that say the subject stays still all reduce it.' },
    ],
};

// r/LocalLLaMA, ~300 upvotes, ~80 comments (October 1-2, 2026).
const clefPost = {
    ...base,
    id: 307,
    title: 'Cloudflare Clef Explained: Open-Weights "Decision Models" That Pick Instead of Write',
    seoTitle: 'Cloudflare Clef: Open-Weights Decision Models Explained',
    seoDescription: 'Cloudflare released Clef and Clef-flash, open-weights decision models that return probabilities for a fixed list of options. What a decision model is, how it differs from a chatbot, and where it fits in AI workflows.',
    excerpt: 'Cloudflare\'s Clef does not write text. You give it a situation and a list of options, and it returns how likely each one is. Here is why that is useful for routing, triage and approvals in AI workflows.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['Cloudflare', 'Clef', 'Decision Models', 'AI Routing', 'Reddit Trends'],
    image: '/blog/cloudflare-clef-decision-model.png',
    imageAlt: 'Watercolor illustration of a crossroads signpost with arrows pointing to different department doors',
    slug: 'cloudflare-clef-decision-model',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'specs', label: 'Clef at a glance' },
        { id: 'vs-llm', label: 'Decision model vs LLM' },
        { id: 'uses', label: 'Where it fits' },
        { id: 'example', label: 'Support triage example' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Sources: ${src('https://www.cloudflare.com/resource/clef-rl-interest', 'Cloudflare')}, ${src('https://www.developersdigest.tech/blog/cloudflare-clef-decision-models-2026', 'Developers Digest')}.</em></p>
<h2 id="short-answer">What is Cloudflare Clef?</h2>
<p><strong>Clef is an open-weights "decision model" from Cloudflare, released October 1, 2026.</strong> Instead of generating text token by token, it takes a situation and a list of multiple-choice options and returns a probability for each. That makes it fast and predictable for the small decisions inside AI workflows: where to route a request, whether to continue, whether a human should check.</p>
<ul>
<li><strong>Two sizes:</strong> Clef (27B, post-trained from Qwen3.8-27B, multimodal) and Clef-flash (9B, from Qwen3.5-9B).</li>
<li><strong>License:</strong> Apache 2.0, weights on Hugging Face.</li>
<li><strong>Hosted:</strong> on Cloudflare Workers AI.</li>
<li><strong>Speed:</strong> Clef-flash median response of about 39 ms, per reports.</li>
</ul>
${redditThread('https://www.reddit.com/r/LocalLLaMA/comments/1wv4zzi/clef_open_weights_decision_model_by_cloudflare/', 'LocalLLaMA', 'Clef — Open-weights decision model by Cloudflare', 'about 300 upvotes and 80 comments')}

<h2 id="specs">Clef at a glance</h2>
<table><thead><tr><th></th><th>Clef</th><th>Clef-flash</th></tr></thead><tbody>
<tr><td>Size</td><td>27B parameters</td><td>9B parameters</td></tr>
<tr><td>Base model</td><td>Qwen3.8-27B</td><td>Qwen3.5-9B</td></tr>
<tr><td>Input</td><td>Text and images</td><td>Text</td></tr>
<tr><td>Workers AI input price</td><td>$0.24 per million tokens</td><td>$0.09 per million tokens</td></tr>
<tr><td>License</td><td colspan="2">Apache 2.0</td></tr>
</tbody></table>
<p>Prices as reported at launch; check Cloudflare for current rates.</p>

<h2 id="vs-llm">Decision model vs a normal LLM</h2>
<table><thead><tr><th></th><th>Chat LLM</th><th>Decision model</th></tr></thead><tbody>
<tr><td>Output</td><td>Free text</td><td>A probability for each option you list</td></tr>
<tr><td>Parsing</td><td>You must parse the answer, which can go wrong</td><td>Always one of your options</td></tr>
<tr><td>Confidence</td><td>Hard to read</td><td>Built in: 0.92 vs 0.51 tells you when to ask a person</td></tr>
<tr><td>Speed and cost</td><td>Slower, pays for output tokens</td><td>Fast, almost no output</td></tr>
<tr><td>Good for</td><td>Writing, reasoning, drafting</td><td>Routing, classification, yes/no gates</td></tr>
</tbody></table>
<p>The Reddit discussion welcomed it because so much of agent building is the boring glue: is this an invoice or a complaint? Is the draft safe to send? A model that answers only those questions, with a confidence score, removes a lot of fragile prompt parsing.</p>

<h2 id="uses">Where decision models fit in a workflow</h2>
<ul>
<li><strong>Routing:</strong> which team, queue or agent should take this?</li>
<li><strong>Triage:</strong> urgent, normal or spam?</li>
<li><strong>Gates:</strong> is this draft ready to send, or does a person review it?</li>
<li><strong>Tool choice:</strong> which tool should an agent call next?</li>
</ul>

<h2 id="example">Example: customer support triage</h2>
<ol>
<li>A customer email arrives.</li>
<li>The decision model picks a category: order status, return, billing, complaint, other.</li>
<li>If confidence is high and the category is low-risk, a drafting model writes a reply from your policies.</li>
<li>If confidence is low, or the category is a complaint or refund, the message goes to a person.</li>
</ol>
<p>The confidence score is the useful part: it gives you a dial for how much you let AI handle alone.</p>
${doozaCta('Dooza <a href="/customer-support-automation-agency">AI customer support</a> works this way: AI classifies and drafts, low-confidence and sensitive messages go to a person, and refunds and complaints come to you for one-tap approval.')}`,
    faqData: [
        { question: 'What is Cloudflare Clef?', answer: 'An open-weights decision model released by Cloudflare on October 1, 2026. It returns probabilities for a predefined list of options instead of generating text. It comes in a 27B version and a 9B Clef-flash version.' },
        { question: 'What is a decision model in AI?', answer: 'A model that, given a situation and a list of options, scores how likely each option is correct. It is used for routing, classification and yes/no checks in AI workflows.' },
        { question: 'Is Clef open source?', answer: 'The weights are released under the Apache 2.0 license on Hugging Face, and both models are also hosted on Cloudflare Workers AI.' },
        { question: 'When should I use a decision model instead of an LLM?', answer: 'When the answer must be one of a fixed set of choices and you want speed, low cost and a confidence score, for example routing tickets or deciding if a human should review.' },
    ],
};

// r/LocalLLaMA, ~235 upvotes, ~165 comments (October 3-4, 2026).
const overfitEnginesPost = {
    ...base,
    id: 308,
    title: 'The Rise of "Overfit" Inference Engines: Why Specialized AI Runtimes Are Winning',
    seoTitle: 'Overfit Inference Engines: Specialized LLM Runtimes',
    seoDescription: 'A heavily debated r/LocalLLaMA post on "overfit" inference engines: runtimes built for one model family or GPU that trade compatibility for speed. What they are, when to use them, and the lesson for AI at work.',
    excerpt: 'Small, specialized inference engines built for one model or one GPU are beating general runtimes on speed. A r/LocalLLaMA debate drew 165 comments. Here is what is going on and why specialization wins in AI.',
    readTime: '6 min read',
    readTimeMinutes: 6,
    tags: ['LLM Inference', 'llama.cpp', 'vLLM', 'Local AI', 'Reddit Trends'],
    image: '/blog/overfit-inference-engines.png',
    imageAlt: 'Watercolor illustration of small custom engines next to one large general-purpose engine in a workshop',
    slug: 'overfit-inference-engines',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'what', label: 'What is an inference engine?' },
        { id: 'why', label: 'Why specialize?' },
        { id: 'compare', label: 'General vs overfit' },
        { id: 'choose', label: 'Which to use' },
        { id: 'lesson', label: 'The bigger lesson' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Summary based on the Reddit post and ${src('https://buttondown.com/agent-k/archive/llm-daily-october-04-2026/', 'LLM Daily')}.</em></p>
<h2 id="short-answer">What are "overfit" inference engines?</h2>
<p><strong>They are AI runtimes built for one model family or one hardware setup, trading broad compatibility for maximum speed.</strong> A r/LocalLLaMA post named a wave of them, including Strata, ninfer, DwarfStar, Splash, llamAmpere and gufo, and argued the ecosystem is splitting in two: general runtimes such as llama.cpp and vLLM for everything, and specialized engines for squeezing out throughput on specific deployments.</p>
<ul>
<li><strong>"Overfit"</strong> is borrowed from machine learning: tuned so tightly to one case that it doesn't generalize.</li>
<li><strong>Gain:</strong> higher tokens per second on the target model and GPU.</li>
<li><strong>Cost:</strong> narrow support, smaller communities, more maintenance risk.</li>
<li><strong>Consensus in the thread:</strong> both tiers will coexist.</li>
</ul>
${redditThread('https://www.reddit.com/r/LocalLLaMA/comments/1wwu6zj/the_rise_of_overfit_inference_engines/', 'LocalLLaMA', 'The Rise of Overfit Inference Engines', 'about 235 upvotes and 165 comments')}

<h2 id="what">What is an inference engine?</h2>
<p>An inference engine is the software that actually runs a trained model: it loads the weights into memory, schedules the math on the GPU or CPU, manages the context cache and streams tokens back. The same model can run at very different speeds depending on the engine.</p>

<h2 id="why">Why are specialized engines appearing now?</h2>
<ul>
<li><strong>Models are converging on a few families</strong>, so it is worth hand-tuning for the popular ones.</li>
<li><strong>Hardware is expensive</strong> (memory prices are rising), so extracting more from what you own matters.</li>
<li><strong>AI coding tools</strong> make it cheaper for small teams to write and maintain low-level kernels.</li>
<li><strong>General runtimes carry overhead</strong> to support hundreds of models and devices.</li>
</ul>

<h2 id="compare">General vs overfit runtimes</h2>
<table><thead><tr><th></th><th>General (llama.cpp, vLLM)</th><th>Overfit / specialized</th></tr></thead><tbody>
<tr><td>Model support</td><td>Hundreds</td><td>One family or a few</td></tr>
<tr><td>Hardware support</td><td>Broad</td><td>Specific GPUs or chips</td></tr>
<tr><td>Peak speed</td><td>Good</td><td>Best on the target</td></tr>
<tr><td>Community and fixes</td><td>Large</td><td>Small</td></tr>
<tr><td>Risk if the project stalls</td><td>Low</td><td>High</td></tr>
</tbody></table>

<h2 id="choose">Which should you use?</h2>
<ol>
<li><strong>Prototyping or many models:</strong> a general runtime.</li>
<li><strong>Serving many users:</strong> vLLM or a similar server-grade engine.</li>
<li><strong>One model, one GPU, at scale:</strong> benchmark a specialized engine against your general one on your real prompts.</li>
<li><strong>Always:</strong> keep a fallback path to a general runtime.</li>
</ol>

<h2 id="lesson">The bigger lesson: specialization beats generality in production</h2>
<p>The same pattern shows up above the infrastructure layer. A general chatbot can do a bit of everything; a focused agent built for one job, with your data, tools and rules, does that job better and more reliably. Most real gains in business AI come from narrowing the task, not from a bigger model.</p>
${doozaCta('Dooza builds focused AI employees and custom agents for specific jobs (email, phone, SEO, lead generation, support) instead of one general assistant, and Dooza engineers handle the models and infrastructure underneath.')}`,
    faqData: [
        { question: 'What is an overfit inference engine?', answer: 'A runtime built for one model family or hardware setup that trades broad compatibility for maximum speed. Examples named on r/LocalLLaMA include Strata, ninfer, DwarfStar, Splash, llamAmpere and gufo.' },
        { question: 'Is llama.cpp or vLLM better?', answer: 'llama.cpp is strongest for local, single-user and CPU or Apple Silicon setups; vLLM is built for serving many concurrent users on GPUs. Choose based on deployment.' },
        { question: 'Are specialized inference engines worth using?', answer: 'When you run one model on one hardware setup at scale, they can deliver more throughput. Benchmark on your real prompts and keep a general runtime as a fallback.' },
        { question: 'What does inference mean in AI?', answer: 'Inference is running a trained model to produce outputs, as opposed to training it. The inference engine is the software that does this.' },
    ],
};

// Announced in r/modnews and r/redditdev on September 30, 2026; widely
// discussed across Reddit.
const redditApiPost = {
    ...base,
    id: 309,
    title: 'Reddit Is Killing RSS Feeds and Free API Access Because of AI Bots: What Changes and What to Do',
    seoTitle: 'Reddit Kills RSS & Public API Over AI Scrapers (2026)',
    seoDescription: 'Reddit is ending RSS feeds on November 13, 2026 and public API access by March 2027, citing AI scraping. Every date, who is affected, and what marketers and businesses using Reddit should do now.',
    excerpt: 'Reddit is ending RSS feeds on November 13 and free public API access by March 2027, blaming AI scrapers. Here are the dates, who is affected, and how businesses that listen or market on Reddit should adapt.',
    readTime: '7 min read',
    readTimeMinutes: 7,
    tags: ['Reddit', 'Reddit API', 'RSS', 'AI Scraping', 'Reddit Trends'],
    image: '/blog/reddit-killing-rss-api-ai-scrapers.png',
    imageAlt: 'Watercolor illustration of a forum building closing its back door while small robot scrapers wait outside',
    slug: 'reddit-killing-rss-api-ai-scrapers',
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'dates', label: 'Key dates' },
        { id: 'why', label: 'Why Reddit did it' },
        { id: 'affected', label: 'Who is affected' },
        { id: 'do', label: 'What to do now' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Published October 6, 2026. Sources: ${src('https://techcrunch.com/2026/09/30/reddit-is-killing-rss-feeds-ending-public-api-access-because-of-ai-bots/', 'TechCrunch')}, ${src('https://www.techrepublic.com/article/news-reddit-rss-public-api-shutdown/', 'TechRepublic')}, ${src('https://thenextweb.com/news/reddit-rss-feeds-shut-down-old-reddit-ai-scraping', 'The Next Web')}.</em></p>
<h2 id="short-answer">Is Reddit ending RSS and its public API?</h2>
<p><strong>Yes.</strong> On September 30, 2026, Reddit announced in r/modnews and r/redditdev that RSS feeds will stop working on November 13, 2026, and free public API access will end by March 2027. Reddit says RSS has become a "common surface for large-scale scraping and automated abuse." Data access moves to its Developer Platform, where it will be paid only.</p>
<ul>
<li><strong>RSS:</strong> ends November 13, 2026.</li>
<li><strong>New public API requests:</strong> not accepted after October 31, 2026.</li>
<li><strong>Existing apps and bots:</strong> must register before January 12, 2027.</li>
<li><strong>Public API:</strong> ends by March 2027.</li>
<li><strong>Old Reddit:</strong> limited to moderators and users active in the last six months.</li>
</ul>
${redditThread('https://www.reddit.com/r/modnews/', 'modnews', 'Reddit\'s RSS and public API announcement', 'September 30, 2026')}

<h2 id="dates">Reddit RSS and API shutdown dates</h2>
<table><thead><tr><th>Date</th><th>What changes</th></tr></thead><tbody>
<tr><td>September 30, 2026</td><td>Announcement in r/modnews and r/redditdev</td></tr>
<tr><td>October 31, 2026</td><td>No new requests for public API access</td></tr>
<tr><td>November 13, 2026</td><td>RSS feeds stop working</td></tr>
<tr><td>January 12, 2027</td><td>Deadline for existing third-party apps and bots to register</td></tr>
<tr><td>March 2027</td><td>Public API access ends; data access paid via Developer Platform</td></tr>
</tbody></table>

<h2 id="why">Why is Reddit doing this?</h2>
<p>Reddit's conversations are some of the most valuable training and retrieval data for AI, and AI assistants and answer engines cite Reddit constantly. Free RSS and API access let anyone collect that data at scale. Reddit already licenses data to AI companies, and TechCrunch notes its "other revenue," which includes data licensing, grew 24% year over year to $43 million. Closing free access pushes AI products, researchers and social-listening tools toward paid deals.</p>

<h2 id="affected">Who is affected?</h2>
<table><thead><tr><th>Group</th><th>Impact</th></tr></thead><tbody>
<tr><td>Moderators using RSS alerts</td><td>Reddit points them to the Discord Relay Devvit app</td></tr>
<tr><td>Feed reader users</td><td>Subreddit feeds stop; Reddit says there is no replacement outside moderation</td></tr>
<tr><td>Social listening and brand monitoring tools</td><td>Must move to paid access or lose Reddit coverage</td></tr>
<tr><td>Researchers</td><td>Free data collection ends</td></tr>
<tr><td>AI assistants and agents</td><td>Need licensed access to read Reddit programmatically</td></tr>
<tr><td>Regular users</td><td>Little change on the main site and apps</td></tr>
</tbody></table>

<h2 id="do">What businesses that use Reddit should do now</h2>
<ol>
<li><strong>Audit your tools.</strong> List every RSS feed, Zapier/n8n trigger and monitoring tool that reads Reddit. Anything using RSS breaks on November 13.</li>
<li><strong>Ask vendors about their plan.</strong> Social-listening tools should confirm whether they have licensed access after March 2027.</li>
<li><strong>Register bots early.</strong> If you run an approved app or bot, register before January 12, 2027.</li>
<li><strong>Keep the human part human.</strong> Reddit rewards real participation. Use automation to find threads and draft replies, and have a real person post.</li>
<li><strong>Build visibility beyond Reddit.</strong> AI answer engines cite Reddit, but also your site, reviews and comparison pages. See our guide to <a href="/generative-engine-optimization">AI visibility (GEO)</a>.</li>
</ol>
${doozaCta('Dooza helps small businesses get found in AI answers and on the communities their buyers use, without scraping. Our <a href="/blog/reddit-agent-dooza-workspace-guide">Reddit agent guide</a> covers finding relevant threads and drafting replies a real person approves and posts.')}`,
    faqData: [
        { question: 'When does Reddit RSS stop working?', answer: 'Reddit RSS feeds stop working on November 13, 2026, according to Reddit\'s September 30, 2026 announcement.' },
        { question: 'Is the Reddit API going away?', answer: 'Free public API access ends by March 2027. New requests are not accepted after October 31, 2026, and existing apps and bots must register by January 12, 2027. Data access moves to Reddit\'s paid Developer Platform.' },
        { question: 'Why is Reddit removing RSS?', answer: 'Reddit says RSS became a common surface for large-scale scraping and automated abuse, much of it from AI bots collecting Reddit content.' },
        { question: 'How can I monitor Reddit without RSS?', answer: 'Use a monitoring tool with licensed Reddit access, Reddit\'s own Developer Platform, or moderators can use the Discord Relay Devvit app. Confirm your vendor\'s plan before March 2027.' },
    ],
};

export const redditTrendPostsB = [
    orbitingVideoPost,
    clefPost,
    overfitEnginesPost,
    redditApiPost,
];
