import { yt } from './helpers';

const VIDEO_ID = 'UMssRcZjL0k';
const VIDEO_TITLE = 'I gave my AI employee my worst Google review #Shorts';

const GBP_REPLY = 'https://support.google.com/business/answer/3474050';
const GBP_TIPS = 'https://support.google.com/business/answer/3474122';
const GBP_REPORT = 'https://support.google.com/business/answer/4596773';
const GATHERUP = 'https://gatherup.com/?p=26153';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza-blog&amp;utm_medium=video-post&amp;utm_content=how-to-reply-to-a-bad-google-review';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 535,
    title: 'How to Reply to a Bad Google Review (With Templates)',
    seoTitle: 'How to Reply to a Bad Google Review: Steps + Templates',
    seoDescription: 'Reply fast, say sorry once, name the fix and take it offline. Three reply templates for angry, false and fair bad Google reviews, plus what not to do.',
    excerpt: 'Reply to a bad Google review in four steps: stay calm, thank and apologize once, state the fix, and move the talk offline. Here are three templates, the mistakes to avoid, and where an AI employee helps.',
    author: 'Dooza Team',
    date: '2026-10-28',
    modifiedDate: '2026-10-28',
    readTime: '6 min read',
    readTimeMinutes: 6,
    category: 'How-To',
    tags: ['Google Reviews', 'Reputation', 'Customer Service', 'Local Business', 'AI Employee', 'Human in the Loop', 'Dooza Video'],
    image: '/blog/how-to-reply-to-a-bad-google-review.png',
    imageAlt: 'Soft watercolor illustration of a cafe owner reading a one-star review on her phone, with a drafted reply waiting on a laptop',
    slug: 'how-to-reply-to-a-bad-google-review',
    video: {
        name: VIDEO_TITLE,
        description: 'A short screen recording from Dooza: a Dooza Crew AI employee is given a bad Google review and drafts a reply for the owner.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-27',
    },
    tocData: [
        { id: 'short-answer', label: 'The short answer' },
        { id: 'steps', label: 'Step-by-step method' },
        { id: 'templates', label: 'Three reply templates' },
        { id: 'dont', label: 'What not to do' },
        { id: 'does-it-help', label: 'Does replying help?' },
        { id: 'ai-employee', label: 'Where an AI employee fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="short-answer">How do you reply to a bad Google review?</h2>
<p><strong>Reply in public, keep it short, and be polite. Thank the reviewer, say sorry for how they felt, state what you will do, and invite them to talk by phone or email.</strong> Do not argue, and do not share private details. If the review breaks Google's rules, flag it as well as replying.</p>
<p>Google says the same in its own ${a(GBP_TIPS, 'tips for review replies')}: be professional, keep it short and simple, and personalize the reply.</p>
<p><em>Disclosure: the video below is our own. It is a screen recording of a Dooza Crew AI employee drafting a reply to a bad review, and Dooza sells Crew.</em></p>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500"><strong>Video:</strong> “${VIDEO_TITLE}” by <a href="https://www.youtube.com/@thedooza" target="_blank" rel="noopener noreferrer">Dooza (@thedooza)</a>, published October 27, 2026 on YouTube. <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>. This is our own video.</p>

<h2 id="steps">What are the steps to reply to a bad review?</h2>
<ol>
<li><strong>Wait a few minutes.</strong> Do not reply while angry. Read the review twice.</li>
<li><strong>Check the facts.</strong> Find the visit, order or call in your records. Is the review fair, wrong or fake?</li>
<li><strong>Use the reviewer's name and one detail from their review.</strong> Google advises you to ${a(GBP_TIPS, 'address the reviewer by name and acknowledge their specific feedback')}.</li>
<li><strong>Apologize once, where it is true.</strong> Say sorry for the experience. Admit a real mistake. Do not take blame for things outside your control.</li>
<li><strong>State the fix.</strong> Say what you changed or will do.</li>
<li><strong>Move it offline.</strong> Give a phone number or email. Google suggests asking the reviewer to ${a(GBP_TIPS, 'contact you via phone or email')} for complex issues.</li>
<li><strong>Post it.</strong> Verified owners can reply from their Business Profile: ${a(GBP_REPLY, 'Read reviews, then Reply')}. Google checks replies against its content policies first.</li>
</ol>
<p>Keep it to a few sentences. Long replies lose readers.</p>

<h2 id="templates">What should the reply say? Three templates</h2>
<p>Swap in real names and facts. Never paste a template unchanged.</p>
<h3>1. The angry customer (the complaint is partly fair)</h3>
<blockquote><p>Hi [Name], I am sorry your visit went this way. Waiting [detail from the review] is not what we want for anyone. I have spoken with the team about it. Please call me at [number] so I can make it right. [Your first name], [Business]</p></blockquote>
<h3>2. The unfair or false review</h3>
<blockquote><p>Hi [Name], we take every review seriously, but we cannot find a visit or order under this name. If we have the wrong details, please call [number] or email [address] so we can look into it. Thank you, [Your first name], [Business]</p></blockquote>
<p>Stay calm and factual. Do not call the person a liar. If the review is spam, fake or breaks policy, also ${a(GBP_REPORT, 'report it for removal')}. Google says only reviews that violate its policies are eligible for removal.</p>
<h3>3. A real mistake on your side</h3>
<blockquote><p>Hi [Name], you are right, and I am sorry. We [what went wrong]. That is on us. We have [what you changed]. I would like to [refund, redo or fix] it. Please call [number] and ask for [name]. [Your first name], [Business]</p></blockquote>
<p>A plain apology with a fix beats a long excuse. Do not offer money in return for a changed review: Google lists ${a(GBP_TIPS, 'incentives to change or remove reviews as prohibited')}.</p>

<h2 id="dont">What should you not do?</h2>
<ul>
<li><strong>Do not argue or attack.</strong> Google says to ${a(GBP_TIPS, 'never share a reviewer\'s private information or engage in personal attacks')}.</li>
<li><strong>Do not flag a review just because you dislike it.</strong> Google says: ${a(GBP_REPORT, '"Do not report a review just because you disagree with it or dislike it."')}</li>
<li><strong>Do not pay or bribe for a changed review.</strong> It counts as fake and misleading content.</li>
<li><strong>Do not paste the same reply on every review.</strong> Google says to avoid the same generic answer for everyone.</li>
<li><strong>Do not promote.</strong> Keep replies conversational, not promotional.</li>
<li><strong>Do not ignore it.</strong> Silence is read as a choice.</li>
</ul>

<h2 id="does-it-help">Does replying to a bad review actually help?</h2>
<p>Google thinks so. It says replying ${a(GBP_REPLY, 'shows customers you value their feedback')}, that the reviewer is notified, and that ${a(GBP_REPLY, 'customers can still change their review after reading your reply')}.</p>
<p>Surveys point the same way, though most come from review-software vendors, so treat them as directional. In ${a(GATHERUP, "GatherUp's survey of 1,200 US consumers")}, these figures appear on the page:</p>
<ul>
<li>"79% of negative reviewers expect an owner response from your brand."</li>
<li>"69% of consumers want to see you apologize for a customer's bad experience..."</li>
<li>"73% of unhappy customers are willing to give your business a second chance..."</li>
<li>"59% of customers will never give your business a second chance if your brand ignores their negative reviews."</li>
</ul>
<p>We also tried to read the BrightLocal Local Consumer Review Survey, but the page would not open for us, so we cite no numbers from it.</p>

<h2 id="ai-employee">Where does an AI employee fit?</h2>
<p>Replying well takes time, and bad reviews sting. That is when owners write the worst replies. An AI employee can write the first draft so you start from calm text, not a blank box.</p>
<p>This is the idea behind our video. A <a href="${CREW}">Dooza Crew</a> AI employee has its own computer and a real browser. You give it the job in plain words, such as "draft a reply to this review", and you watch each step live in chat. Before it clicks Send or Pay, it asks you to Approve, Edit or Reject.</p>
<p>In the video, the AI employee only drafts. You read the reply, edit it, and post it yourself, so your name stays on every word.</p>
<p>The same AI employee can draft replies to customer email and chat from your own docs, sent once you approve. It also takes your business phone calls, which is included in the Crew plan. Your staff can join the same chat. <a href="${CREW}">Crew is free to try</a>, with no card needed.</p>
<p>The draft is a starting point. You know the customer and the facts. You decide what goes public.</p>`,
    faqData: [
        { question: 'How do you reply to a bad Google review?', answer: 'Reply in public, keep it short and polite. Thank the reviewer, apologize once where it is true, say what you will do, and ask them to call or email you. Do not argue or share private details.' },
        { question: 'Can you get a bad Google review removed?', answer: "Only if it breaks Google's content policies, such as spam or profanity. Google says that reviews that violate its policies are eligible for removal and that you should not report a review just because you dislike it. You can flag it from your Business Profile and check the status in the Reviews Management Tool." },
        { question: 'Should you reply to a false Google review?', answer: 'Yes, calmly. State that you cannot find the visit, invite them to contact you, and do not accuse them. Also flag the review if it breaks Google policy.' },
        { question: 'How long should a reply to a bad review be?', answer: 'A few sentences. Google advises keeping replies short and simple, because people may stop reading before they reach the main point.' },
        { question: 'Can a reviewer change their review after you reply?', answer: 'Yes. Google says the reviewer is notified of your reply and can still change their review. If they do, the review date updates to show the latest change.' },
        { question: 'Can an AI employee reply to Google reviews for me?', answer: 'A Dooza Crew AI employee can draft the reply, and you approve or edit it. In our video it drafts the reply and the owner posts it, so a person checks every word before it goes public.' },
    ],
};

export default post;
