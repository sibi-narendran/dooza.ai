// Draft 2026-11-06. Every number is quoted from a page opened on 2026-11-06 (sources listed in the consts below).
import { yt } from './helpers';
// Dooza Crew claims only from the approved list (no prices). Local yt stub kept so the draft runs standalone.

const VIDEO_ID = 'C1oxNmZb57k';
const VIDEO_TITLE = "Duolingo's Users Grew 23%. Its Stock Fell 80%.";

const Q2_2026 = 'https://www.sec.gov/Archives/edgar/data/1562088/000162828026053299/q2fy26duolingo6-30x26share.htm';
const Q3_2026 = 'https://www.sec.gov/Archives/edgar/data/1562088/000162828026069474/q3fy26duolingo9-30x26share.htm';
const Q4_2025 = 'https://www.sec.gov/Archives/edgar/data/1562088/000162828026012246/q4fy25duolingo12-31x25shar.htm';
const TECHCRUNCH = 'https://techcrunch.com/2025/04/30/duolingo-launches-148-courses-created-with-ai-after-sharing-plans-to-replace-contractors-with-ai/';
const FORTUNE = 'https://fortune.com/2025/08/18/duolingo-ceo-admits-controversial-ai-memo-did-not-give-enough-context-insists-company-never-laid-off-full-time-employees/';
const PRICES = 'https://finance.yahoo.com/quote/DUOL/history/';
const CREW = 'https://crew.dooza.ai/?utm_source=dooza.ai&utm_medium=blog&utm_content=duolingo-users-up-stock-down';
const a = (href, text) => `<a href="${href}" target="_blank" rel="noopener">${text}</a>`;

const post = {
    id: 546,
    title: "Duolingo's Users Grew 23%. Its Stock Fell 80%. Why?",
    seoTitle: "Duolingo: Users Up 23%, Stock Down 80%. Why?",
    seoDescription: "Duolingo's daily users grew 23% a year, yet its stock fell over 80% from its May 2025 peak. Its own letters point to slower growth and a monetization push.",
    excerpt: "Duolingo grew daily users 23% a year to 58.7 million, yet its stock fell from $540.68 to $90.03. The AI-first memo got the blame online; Duolingo's own letters tell a different story. Here is the timeline and the lesson for small businesses.",
    author: 'Dooza Team',
    date: '2026-11-06',
    modifiedDate: '2026-11-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Duolingo', 'AI-First', 'Growth Metrics', 'AI Backlash', 'Human in the Loop', 'Dooza Video'],
    image: '/blog/duolingo-users-up-stock-down.jpg',
    imageAlt: 'Soft watercolor illustration of a green owl on a rising user chart beside a falling stock line',
    slug: 'duolingo-users-up-stock-down',
    video: {
        name: VIDEO_TITLE,
        description: "Duolingo's daily users grew 23% in a year while its stock fell about 80% from its May 2025 peak. The AI-first memo, the backlash, the all-time high, and what Duolingo itself blames.",
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-11-04',
    },
    tocData: [
        { id: 'numbers', label: 'The numbers' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'ai-memo', label: 'The AI-first memo' },
        { id: 'what-duolingo-blames', label: 'What Duolingo blames' },
        { id: 'small-business-lesson', label: 'Lesson for small businesses' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p>Duolingo's stock fell while its users grew because investors price future growth, not current size, and Duolingo's growth was slowing. Daily users still grew 23% a year in Q2 2026, but that was down from more than 40% a year from 2022 to mid-2025. In February 2026 Duolingo said 2026 user growth would be about 20% and that bookings growth and profit would be lower. The stock fell from a $540.68 close on May 14, 2025 to $90.03 on April 10, 2026, a drop of about 83%. The "AI-first" memo got the blame online, but Duolingo's own letter points to its monetization push.</p>
<ul>
<li><strong>Users really grew.</strong> Daily active users went from 47.7 million to 58.7 million between Q2 2025 and Q2 2026, up 23%. In Q3 2026 growth sped up to 29%.</li>
<li><strong>The stock really fell.</strong> The closing price dropped from $540.68 to $90.03, about 83%. On November 5, 2026 it closed at $157.02.</li>
<li><strong>The peak came after the memo.</strong> The AI-first memo went out in late April 2025. The all-time high came on May 14, 2025, about two weeks later.</li>
<li><strong>Duolingo blames itself.</strong> Its Q4 2025 letter says more friction for free users, from its monetization push, is "part of the reason our DAU growth has slowed".</li>
<li><strong>The lesson is to watch the rate, not just the total.</strong> Also keep a person approving what AI sends out.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
<p class="text-sm text-slate-500">Video: “${VIDEO_TITLE}” by Dooza on YouTube (@thedooza), published November 4, 2026. Sources below. <a href="https://www.youtube.com/watch?v=${VIDEO_ID}" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>.</p>

<h2 id="numbers">Did Duolingo's users grow 23% while the stock fell 80%?</h2>
<p>Yes, both are true, depending on the dates you pick. Here are the figures from Duolingo's shareholder letters and the daily price history.</p>
<table><thead><tr><th>Metric</th><th>Then</th><th>Now</th><th>Source</th></tr></thead><tbody>
<tr><td>Daily active users, Q2</td><td>47.7M (Q2 2025)</td><td>58.7M (Q2 2026), +23%</td><td>${a(Q2_2026, 'Q2 2026 letter')}</td></tr>
<tr><td>Daily active users, Q3</td><td>50.5M (Q3 2025)</td><td>64.9M (Q3 2026), +29%</td><td>${a(Q3_2026, 'Q3 2026 letter')}</td></tr>
<tr><td>Paid subscribers, Q3</td><td>11.5M</td><td>13.1M, +14%</td><td>${a(Q3_2026, 'Q3 2026 letter')}</td></tr>
<tr><td>Total bookings, Q3</td><td>$281.9M</td><td>$316.1M, +12%</td><td>${a(Q3_2026, 'Q3 2026 letter')}</td></tr>
<tr><td>Adjusted EBITDA margin, Q3</td><td>29.5%</td><td>25.5%</td><td>${a(Q3_2026, 'Q3 2026 letter')}</td></tr>
<tr><td>Stock, closing price</td><td>$540.68 (May 14, 2025 peak)</td><td>$90.03 (Apr 10, 2026 low); $157.02 (Nov 5, 2026)</td><td>${a(PRICES, 'DUOL price history')}</td></tr>
</tbody></table>
<p>The video says "about 80%". Based on intraday prices (about $545 high, about $88 low) or closing prices, the real fall was a bit more than 80%. Users grew, but the rate of growth fell. Bookings and profit margins grew more slowly than users.</p>

<h2 id="timeline">What is the timeline?</h2>
<table><thead><tr><th>Date</th><th>What happened</th><th>Source</th></tr></thead><tbody>
<tr><td>Late April 2025</td><td>CEO Luis von Ahn emails staff that Duolingo will be "AI-first"</td><td>${a(TECHCRUNCH, 'TechCrunch')}</td></tr>
<tr><td>Apr 30, 2025</td><td>Duolingo launches 148 new courses created with generative AI</td><td>${a(TECHCRUNCH, 'TechCrunch')}</td></tr>
<tr><td>May 14, 2025</td><td>Stock closes at its all-time high of $540.68</td><td>${a(PRICES, 'Price history')}</td></tr>
<tr><td>Aug 2025</td><td>Von Ahn: "This was on me. I did not give enough context"</td><td>${a(FORTUNE, 'Fortune')}</td></tr>
<tr><td>Feb 26, 2026</td><td>Q4 2025 letter: user growth slowed; Duolingo will "prioritize user growth over monetization"</td><td>${a(Q4_2025, 'Q4 2025 letter')}</td></tr>
<tr><td>Apr 10, 2026</td><td>Stock closes at its low of $90.03</td><td>${a(PRICES, 'Price history')}</td></tr>
<tr><td>Aug 2026</td><td>Q2 2026: daily users grow 23% to 58.7 million</td><td>${a(Q2_2026, 'Q2 2026 letter')}</td></tr>
<tr><td>Nov 3, 2026</td><td>Q3 2026: daily users grow 29% to 64.9 million</td><td>${a(Q3_2026, 'Q3 2026 letter')}</td></tr>
</tbody></table>

<h2 id="ai-memo">What did the AI-first memo say, and did it sink the stock?</h2>
<p>Von Ahn wrote that Duolingo would "gradually stop using contractors to do work that AI can handle" and that "headcount will only be given if a team cannot automate more of their work," as ${a(TECHCRUNCH, 'TechCrunch reported')}. Two days later Duolingo launched 148 AI-built courses. He said, "Developing our first 100 courses took about 12 years, and now, in about a year, we're able to create and launch nearly 150 new courses."</p>
<p>Users were angry. TechCrunch reported that some deleted the app and urged others to do the same. Later, von Ahn told the New York Times, "This was on me. I did not give enough context," and "We've never laid off any full-time employees. We don't plan to," according to ${a(FORTUNE, 'Fortune')}.</p>
<p>The stock didn't fall right after the memo. It hit its all-time high about two weeks later. No source we found proves the memo caused the later fall. Duolingo's letters don't blame it, so we don't either.</p>

<h2 id="what-duolingo-blames">What does Duolingo itself blame?</h2>
<p>Its own monetization push. In its ${a(Q4_2025, 'Q4 2025 shareholder letter')}, Duolingo wrote: "from Q2 2022 to Q2 2025, we did not have a single quarter with year-over-year DAU growth below 40%". It added that growth "decelerated throughout 2025, and we expect 2026 DAU growth to be about 20%."</p>
<blockquote><p>"Some of this deceleration is natural as we scale; and some of it, we believe, is a function of our increased focus on monetization in recent years."</p></blockquote>
<p>The letter says Duolingo has "decided to prioritize user growth over monetization", and that "this year will see slower bookings growth and lower profitability." That is what investors priced in. A company growing 40%+ a year was now planning on about 20%, and on lower margins.</p>
<p>The user plan is working so far. In Q3 2026, daily user growth "accelerated for a second quarter in a row to 29% year-over-year growth, up from 23% in Q2," per the ${a(Q3_2026, 'Q3 2026 letter')}.</p>

<h2 id="small-business-lesson">What can small-business owners learn from this?</h2>
<p>This is our takeaway, not a sourced fact.</p>
<ol>
<li><strong>Watch the rate, not just the total.</strong> Your customer count can go up while the business gets weaker. Track the growth rate and what each customer brings in, month by month.</li>
<li><strong>Know what others are pricing in.</strong> Investors bought Duolingo for its future growth. Your customers buy a promise too, like quick replies, a real person, or quality. Small cracks in that promise cost more than the numbers show.</li>
<li><strong>Extra friction has a cost.</strong> Duolingo says pushing free users harder slowed its growth. Upsells, pop-ups and automated nags work the same way for a small business.</li>
<li><strong>Use AI, but keep a person approving what goes out.</strong> The backlash was about fear that AI would replace people and lower quality. Let AI draft emails, replies and posts, but have someone approve each one before it reaches a customer.</li>
</ol>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
<p>Dooza Crew is free to use: install the app and start. Crew gives you a lead AI agent plus helper agents you chat with on web or phone. Crew agents take phone calls too.</p>
<p>Crew is built on the approval rule from the lesson above. Before an agent sends or pays, it asks you in chat: Approve, Edit or Reject. The AI does the work, and nothing reaches a customer until you approve it.</p>
<p><a href="${CREW}" target="_blank" rel="noopener">Get the Dooza Crew app</a></p>`,
    faqData: [
        { question: "Why did Duolingo's stock fall while its users grew?", answer: "User growth slowed. Daily active users grew more than 40% a year from Q2 2022 to Q2 2025. In February 2026 Duolingo said 2026 growth would be about 20%, with slower bookings growth and lower profitability. The stock fell from a $540.68 close on May 14, 2025 to $90.03 on April 10, 2026." },
        { question: "Did Duolingo's users really grow 23%?", answer: "Yes. Daily active users grew from 47.7 million in Q2 2025 to 58.7 million in Q2 2026, up 23%. In Q3 2026 they grew 29% to 64.9 million." },
        { question: "Did the AI-first memo cause Duolingo's stock drop?", answer: "No source proves it did. The memo went out in late April 2025, and the stock hit its all-time high on May 14, 2025. Duolingo's own letter blames slowing user growth, partly from its focus on monetization." },
        { question: "Did Duolingo lay off staff because of AI?", answer: "The memo said Duolingo would gradually stop using contractors for work AI can handle. CEO Luis von Ahn later said, 'We've never laid off any full-time employees. We don't plan to.'" },
        { question: "What can a small business learn from Duolingo?", answer: "Track your growth rate, not just your totals. Watch for friction that pushes customers away. When you use AI, have a person approve what goes out so quality and trust hold up." },
    ],
};

export default post;
