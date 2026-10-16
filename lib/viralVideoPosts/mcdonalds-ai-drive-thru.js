import { yt, doozaSummary } from './helpers';

const VIDEO_ID = '6hu1Tk4uJsM';
const VIDEO_TITLE = "Why Did McDonald's Give Up on AI Drive-Thrus?";

const NBC = 'https://www.nbcnews.com/business/business-news/mcdonalds-end-ai-drive-test-ibm-rcna157603';
const VOICEBOT = 'https://voicebot.ai/2021/10/27/ibm-acquires-mcdonalds-mcd-tech-labs-to-seal-drive-thru-ai-partnership/';
const PYMNTS = 'https://www.pymnts.com/news/artificial-intelligence/2026/mcdonalds-fired-ai-now-its-back-with-googl/';
const CHOWHOUND = 'https://www.chowhound.com/1984153/ai-drive-thru-order-fast-food-disasters';
const GIZMODO = 'https://gizmodo.com/secret-behind-ai-drive-thrus-fast-food-humans--1851085269';
const SEC = 'https://www.sec.gov/enforcement-litigation/administrative-proceedings/33-11352-s';
const WENDYS_DIVE = 'https://www.restaurantdive.com/news/wendys-expand-google-generative-ai-drive-thru-test/702184/';
const WENDYS_YAHOO = 'https://finance.yahoo.com/news/wendy-deploy-drive-thru-ai-103100226.html';
const YUM = 'https://www.pymnts.com/restaurant-innovation/2024/yum-brands-leverages-voice-ai-and-data-for-personalized-service/';
const TACO = 'https://foodondemand.com/09242025/it-seems-every-brand-wants-to-use-voice-ai-yet-taco-bell-is-pulling-back/';
const SCRIPPS = 'https://www.scrippsnews.com/business/california-fast-food-workers-now-make-20-minimum-wage';
const WTOP = 'https://wtop.com/national/2023/06/ai-drive-thrus-may-be-good-for-business-but-not-for-the-rest-of-us/';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 412,
    title: "Why Did McDonald's Give Up on AI Drive-Thrus? The Real Reason",
    seoTitle: "Why McDonald's Ended Its AI Drive-Thru Test",
    seoDescription: "McDonald's ended its IBM AI drive-thru test in 2024. An analyst put accuracy in the low-to-mid 80s, short of the 95% needed. Here is what happened next.",
    excerpt: "McDonald's ended its AI drive-thru test with IBM in July 2024. The likely reason was accuracy, not viral clips. Here is the timeline, the numbers, what rivals found, and the lesson for small businesses.",
    author: 'Dooza Team',
    date: '2026-10-16',
    modifiedDate: '2026-10-16',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'AI News',
    tags: ['McDonald\'s', 'AI Drive-Thru', 'Voice AI', 'IBM', 'Human in the Loop', 'Dooza Video'],
    image: '/blog/mcdonalds-ai-drive-thru.png',
    imageAlt: 'Soft watercolor illustration of a fast-food drive-thru speaker and a car window, with a small order screen showing a mixed-up order',
    slug: 'mcdonalds-ai-drive-thru',
    video: {
        name: VIDEO_TITLE,
        description: "Why McDonald's ended its AI drive-thru test with IBM in 2024: the timeline, the accuracy math, what Wendy's, Taco Bell and Presto found, and what McDonald's did next.",
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-16',
    },
    tocData: [
        { id: 'timeline', label: 'Timeline' },
        { id: 'why-hard', label: 'Why drive-thru speech is hard' },
        { id: 'viral-videos', label: 'What the viral videos got wrong' },
        { id: 'accuracy-math', label: 'The accuracy math' },
        { id: 'competitors', label: 'What competitors found' },
        { id: 'what-next', label: 'What McDonald\'s did next' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>McDonald's ended its AI drive-thru test with IBM because the system was not accurate enough. An analyst, BTIG's Peter Saleh, estimated from franchisee checks that accuracy sat in the low-to-mid 80% range, while he said it needed to be above 95%. McDonald's never published its own number, but it did not give up on AI: it moved to Google and began a new pilot in 2026.</p>
<ul>
<li><strong>The test ended in 2024.</strong> A June 2024 memo said the IBM voice ordering test, in more than 100 restaurants, had to be off by July 26, 2024.</li>
<li><strong>Accuracy was the issue.</strong> Saleh estimated the low-to-mid 80% range against a 95%+ need. These are analyst figures, not McDonald's.</li>
<li><strong>Viral clips were the symptom.</strong> No source ties the shutdown to a TikTok clip, and the memo gives no such reason.</li>
<li><strong>It was a vendor swap.</strong> McDonald's announced a Google Cloud partnership in December 2023 and piloted a new voice assistant in 2026.</li>
<li><strong>The lesson is narrow jobs plus a human.</strong> Voice AI works best when it has one clear task and a person checks the result.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published October 16, 2026. Narrated by an AI voice with AI illustrations; sources below. <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="timeline">What is the timeline of McDonald's AI drive-thru?</h2>
<p>The project ran for about five years. Here are the main dates.</p>
<table><thead><tr><th>Date</th><th>What happened</th><th>Source</th></tr></thead><tbody>
<tr><td>2019</td><td>McDonald's buys voice-AI startup Apprente and folds it into McD Tech Labs</td><td>${a(VOICEBOT, 'Voicebot.ai')}</td></tr>
<tr><td>2021</td><td>A pilot in about 10 Chicago-area drive-thrus. CEO Chris Kempczinski put accuracy near 85%, with about 1 in 5 orders still needing a human (outlets date this differently)</td><td>${a(VOICEBOT, 'Voicebot.ai')}</td></tr>
<tr><td>Oct 27, 2021</td><td>IBM agrees to acquire McD Tech Labs and partner with McDonald's</td><td>${a(VOICEBOT, 'Voicebot.ai')}</td></tr>
<tr><td>Dec 2023</td><td>McDonald's announces a multi-year Google Cloud partnership</td><td>${a(NBC, 'NBC News')}</td></tr>
<tr><td>Jun 17, 2024</td><td>A memo reports the IBM test in more than 100 restaurants is ending</td><td>${a(NBC, 'NBC News')}</td></tr>
<tr><td>Jul 26, 2024</td><td>Deadline for the systems to be removed</td><td>${a(NBC, 'NBC News')}</td></tr>
<tr><td>Jun 2026</td><td>A new voice assistant, nicknamed Archy, is piloted in 5 US restaurants</td><td>${a(PYMNTS, 'PYMNTS')}</td></tr>
</tbody></table>

<h2 id="why-hard">Why is drive-thru speech so hard for AI?</h2>
<p>A drive-thru is a bad place for speech recognition. There is engine noise, wind and a speaker that is often poor. Accents vary, and people change their minds mid-sentence. A Forrester analyst named accents and noise as problems in ${a(WTOP, 'a 2023 report')}.</p>
<p>Cars often hold several people, and they talk over each other. One viral case showed the system hearing orders from another lane. A customer ended up with nine sweet teas added, as ${a(CHOWHOUND, 'Chowhound reported')}. Each of these errors is small. In a fast line, one wrong item still means a person has to fix it.</p>

<h2 id="viral-videos">What did the viral videos get wrong?</h2>
<p>The 2024 clips were real, and they were funny. They included the nine sweet teas, bacon on ice cream and stacked McNugget orders. They were social-media clips, though, and the dollar amounts in them vary by outlet.</p>
<p>The most repeated story is the 260 McNuggets order. That one comes from a different case. It was a single customer's account from 2025, when kids tested a newer AI, according to ${a(CHOWHOUND, 'Chowhound')}. It did not come from the 2024 IBM clips.</p>
<p>Two other claims have no source behind them. The memo does not say TikTok caused the shutdown. And nothing links the shutdown to California's $20 fast-food minimum wage, which ${a(SCRIPPS, 'started on April 1, 2024')}. The test ended about two and a half months later. The timing is close, but we found no source for a link, so we do not claim one.</p>

<h2 id="accuracy-math">What was the accuracy math?</h2>
<p>McDonald's never published an accuracy number. The best figure comes from an analyst. After talking to franchisees, BTIG's Peter Saleh estimated accuracy in the low-to-mid 80% range. He said the system would need 95% or more to be viable, and he called accuracy "the most important thing right now." The source is ${a(NBC, 'NBC News')}.</p>
<p>The memo itself was polite:</p>
<blockquote><p>"While there have been successes to date, we feel there is an opportunity to explore voice ordering solutions more broadly."</p></blockquote>
<p>That quote comes from the memo as reported by ${a(NBC, 'NBC News')}. The memo also said IBM "remains a trusted partner."</p>
<p>Here is why the gap matters. At 85%, about 15 orders in 100 need a person to step in. At 95%, it is about 5 in 100. If a worker must watch the screen anyway, the labor saving shrinks. The stakes are high because the drive-thru is roughly 70% of McDonald's US sales, per ${a(PYMNTS, 'PYMNTS')}. That share varies by source and year. This is our reading of the numbers, and McDonald's has not confirmed its reasons.</p>

<h2 id="competitors">What did other chains find?</h2>
<ul>
<li><strong>Presto.</strong> ${a(GIZMODO, 'Bloomberg reported in December 2023')} that off-site workers in the Philippines helped take orders. Presto's filings said about 70% of orders needed human help. In January 2025, the ${a(SEC, 'SEC settled with Presto')}. It said Presto made false or misleading claims, that early units used another company's speech recognition, and that Presto's own AI needed human help for "the vast majority" of orders.</li>
<li><strong>Wendy's.</strong> With Google Cloud, Wendy's pilot averaged ${a(WENDYS_DIVE, '86% of orders handled with no staff help')}. In May 2025 it said ${a(WENDYS_YAHOO, 'FreshAI was in 160+ restaurants')}. The target of 500+ by the end of 2025 is unconfirmed.</li>
<li><strong>Taco Bell.</strong> Parent Yum said its voice AI had taken ${a(YUM, 'more than 2 million orders')} across 300+ Taco Bell stores. In 2025 its tech chief told the Wall Street Journal the AI "lets me down sometimes," and a prankster ordered 18,000 cups of water, as ${a(TACO, 'Food On Demand reported')}.</li>
</ul>
<p>The pattern is the same everywhere. Voice AI handles most orders and fails on the rest. The chains that do well plan for the rest.</p>

<h2 id="what-next">What did McDonald's do next?</h2>
<p>It never quit AI. Six months before the memo, McDonald's had already announced its Google Cloud partnership. In June 2026, at its worldwide convention, it showed a new voice assistant nicknamed Archy. It was piloted in five US restaurants, in English and Spanish, and it recognizes a customer's usual order. Details are in ${a(PYMNTS, 'PYMNTS')}.</p>
<p>One franchisee posted on X that the system had handled more than 1 million orders. McDonald's has not confirmed that claim, so treat it as unverified. The story is a change of vendor and design, not an exit from AI.</p>

<h2 id="small-business-lesson">What can small businesses learn from this?</h2>
<p>This is our own takeaway, not a sourced fact. Give AI a narrow job. A drive-thru is open-ended, noisy and fast, and every small error shows. A task like drafting emails, sorting a shared inbox or updating a spreadsheet is much easier to get right.</p>
<p>Then add a human checking its work. Taco Bell's tech chief said humans stay in the loop. The Presto case shows the other lesson: be honest about what is automated and what is not.</p>
<ol>
<li>Pick one task with a clear right answer.</li>
<li>Let AI do the first pass.</li>
<li>Have a person review before anything reaches a customer.</li>
<li>Count how often the person has to fix it, as McDonald's accuracy numbers did.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza Managed is built on the lesson above. It is an AI admin assistant with a narrow job list, and a real person checks its work. Start with the free week on <a href="/pricing">pricing</a>.</p>
<p>If you need something custom, book a free 30-minute call at <a href="/book">dooza.ai/book</a> and we will scope an AI agent around one workflow.</p>`,
    faqData: [
        { question: "Why did McDonald's end its AI drive-thru test?", answer: "McDonald's never gave a number. BTIG analyst Peter Saleh estimated from franchisee checks that accuracy was in the low-to-mid 80% range, against the 95%+ he said was needed. Staff still had to step in, so the benefit was small. The memo only said the company wanted to explore voice ordering solutions more broadly." },
        { question: "When did McDonald's end the IBM AI drive-thru test?", answer: "A memo reported on June 17, 2024 said the test, in more than 100 US restaurants, had to end by July 26, 2024." },
        { question: "Did McDonald's give up on AI?", answer: "No. It announced a Google Cloud partnership in December 2023 and, in June 2026, piloted a new voice assistant nicknamed Archy in five US restaurants." },
        { question: "Was the 260 McNuggets order part of the shutdown?", answer: "No. The 260 McNuggets story is a 2025 single-customer account. It is not from the 2024 IBM clips, and the memo does not mention any viral video." },
        { question: "What can a small business learn from the McDonald's AI drive-thru?", answer: "Give AI a narrow job with a clear right answer, and have a person check its work. Track how often the person has to fix it before you rely on it." },
    ],
};

export default post;
