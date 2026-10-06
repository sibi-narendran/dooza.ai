import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = 'LlhTEttKcwQ';
const VIDEO_TITLE = 'I Tried The LAZIEST Way to Make Money With AI';

const post = {
    id: 242,
    title: 'Mark Tilbury\'s Laziest Way to Make Money With AI: AI Influencers Tested',
    seoTitle: 'Mark Tilbury AI Influencer Challenge: Does It Work?',
    seoDescription: 'Mark Tilbury spent 7 days and $99 building AI influencers. Here is what he made, what it cost, the disclosure rules, and how brands can use AI UGC honestly.',
    excerpt: 'Mark Tilbury gave himself seven days and a $99 budget to build AI influencers with Claude and Higgsfield. He made $276 in sales and $157 in profit. Here is what worked, what it really costs, the disclosure rules, and the better business use: AI UGC for your own brand.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '8 min read',
    readTimeMinutes: 8,
    category: 'AI News',
    tags: ['Mark Tilbury', 'Viral Video', 'AI Influencers', 'AI UGC', 'Make Money With AI', 'Higgsfield', 'Claude', 'AI Side Hustle'],
    image: '/blog/laziest-way-to-make-money-with-ai.png',
    imageAlt: 'Soft watercolor illustration of three friendly AI-generated influencer characters, an old farmer, a glamorous grandmother, and a young woman, appearing on phone screens beside a small stack of coins and a workbook',
    slug: 'laziest-way-to-make-money-with-ai',
    video: {
        name: VIDEO_TITLE,
        description: 'Mark Tilbury spends seven days and a $99 startup budget creating three AI influencers with Claude and Higgsfield, posting them on Instagram, and selling a digital workbook to see whether AI influencers really make money.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-09-21',
    },
    tocData: [
        { id: 'what-happened', label: 'What happened in the video' },
        { id: 'how-it-worked', label: 'How he built the AI influencers' },
        { id: 'the-numbers', label: 'The real numbers' },
        { id: 'honest-take', label: 'Does it actually work?' },
        { id: 'disclosure', label: 'Disclosure rules' },
        { id: 'business-use', label: 'The better use: AI UGC for brands' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What is Mark Tilbury's "laziest way to make money with AI" video about?</h2>
<p><strong>In "I Tried The LAZIEST Way to Make Money With AI," Mark Tilbury tests whether AI influencers, fully synthetic social media characters, can make real money.</strong> He gives himself seven days, a startup budget under $99, and three rules: no using his own face or voice, and the first influencer has to exist by the end of day one. If he made less than $1,000, he promised to give $1,000 of his own money to a commenter.</p>
<p>He used Claude to invent three characters, Higgsfield to generate their photos, voices and videos, and Instagram to publish them. The winning character then sold a $12 digital workbook through Stan Store. Result: 23 sales, $276 in revenue, and about $157 in profit after costs. He missed his $1,000 target and paid out the forfeit.</p>
<ul>
<li><strong>It works, a little.</strong> The video shows AI characters can earn money in a week, but $157 is not "laziest side hustle" money yet.</li>
<li><strong>Testing beat guessing.</strong> Launching three characters at once mattered, because the one he dropped later had a video go viral.</li>
<li><strong>The product mattered more than the face.</strong> Money came from a structured workbook, not from the influencer alone.</li>
<li><strong>Disclosure is not optional.</strong> Tilbury labelled his character as "your AI grandpa." Platform and advertising rules push the same way.</li>
<li><strong>For businesses,</strong> the stronger play is AI UGC for your own products, clearly labelled, rather than fake people selling to strangers.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Mark Tilbury', channelUrl: 'https://www.youtube.com/@marktilbury', uploadDate: 'September 21, 2026', views: '5.3 million' })}

<h2 id="how-it-worked">How did Mark Tilbury build his AI influencers?</h2>
<p>Tilbury split the work into a simple checklist. Most of it ran inside one Claude chat, because he connected Higgsfield to Claude as a custom connector and used free Claude skills he found online for scripts and video prompts.</p>
<table><thead><tr><th>Step</th><th>What he did</th><th>Tool used</th></tr></thead><tbody>
<tr><td>1. Study the competition</td><td>Looked at existing AI influencers, including Lil Miquela, a 108-year-old "holistic expert" character, and an AI granny, and noted how each makes money</td><td>Instagram, research</td></tr>
<tr><td>2. Pick niches</td><td>Health, wealth and relationships, one character each</td><td>His own judgement</td></tr>
<tr><td>3. Create characters</td><td>Asked for a name, backstory, look and selling point: Amos (101-year-old farmer, health), Grandma Vivian (wealthy grandmother, wealth), Sienna (22-year-old, dating)</td><td>Claude (free plan)</td></tr>
<tr><td>4. Generate photos and scenes</td><td>Character sheets plus locations such as a porch, a private jet and a podcast set</td><td>Higgsfield via Claude connector</td></tr>
<tr><td>5. Write scripts</td><td>A "content engine" skill produced content ideas and scripts per character</td><td>Claude skills</td></tr>
<tr><td>6. Voices and video</td><td>Generated voices, then vertical 1080p clips with consistent characters</td><td>Higgsfield audio and Cinema Studio</td></tr>
<tr><td>7. Launch</td><td>Three Instagram accounts, 10 videos each, captions added in a free editor</td><td>Instagram, Instagram Edits</td></tr>
<tr><td>8. Monetize</td><td>A 30-day habit workbook for the winning character, sold through a link in bio</td><td>Claude skill, Stan Store</td></tr>
</tbody></table>
<p>One detail worth noticing: while studying competitors, Tilbury called out an account that pretends a real craftsman makes its products.</p>
${quote('Now, is this ethical? No, because the person behind the account is lying to their customers. But is it making a load of money? Almost certainly, yes.', 'Mark Tilbury', VIDEO_ID, 194, '3:14', VIDEO_TITLE)}

<h2 id="the-numbers">How much money did the AI influencers actually make?</h2>
<p>Amos, the 101-year-old farmer, won the first round of views, so Tilbury built the product around him. He chose a workbook over an ebook on purpose, arguing that plain information is now free from Google or ChatGPT.</p>
${quote('If we want people to actually buy our digital product, it has to be structured, interactive, and hold their hand through some sort of transformation.', 'Mark Tilbury', VIDEO_ID, 1500, '25:00', VIDEO_TITLE)}
<p>Here is the scorecard as reported in the video:</p>
<table><thead><tr><th>Item</th><th>Amount</th></tr></thead><tbody>
<tr><td>Workbook price</td><td>$15.99, discounted to $12</td></tr>
<tr><td>Sales</td><td>23</td></tr>
<tr><td>Revenue</td><td>$276</td></tr>
<tr><td>Higgsfield plan (counted at full price)</td><td>$99</td></tr>
<tr><td>PayPal fees</td><td>$19.52</td></tr>
<tr><td>Claude, Instagram Edits, Stan Store trial</td><td>$0</td></tr>
<tr><td><strong>Profit</strong></td><td><strong>about $157</strong></td></tr>
</tbody></table>
<p>The twist came at the end. After he doubled down on Amos, Grandma Vivian's account took off, with one video passing 250,000 views. Tilbury admits he picked the winner too early.</p>

<h2 id="honest-take">Does the AI influencer side hustle actually work?</h2>
<p>Our honest read: the video proves the mechanics, not the income. A few things are easy to miss.</p>
<ul>
<li><strong>The "laziest" label hides real work.</strong> Tilbury still chose niches, reviewed images, picked scripts, added captions, set up accounts, wrote bios, priced a product and, in his words, read the workbook to make sure it was "logically sound and safe." That editing step is the part that keeps you out of trouble.</li>
<li><strong>Free tiers ran out.</strong> He mentions waiting for Claude credits to refresh. At any real volume you pay for AI models, video credits and storage, and you should plan for it.</li>
<li><strong>Seven days is a test, not a business.</strong> The Vivian surprise shows that a week of data is noisy. A fair test needs more posts and more time.</li>
<li><strong>Big headline numbers are not your numbers.</strong> The intro cites influencers earning thousands, and Lil Miquela's brand deals with fashion labels. Those took years and teams. Tilbury's own result was $157.</li>
<li><strong>Health and money niches carry extra risk.</strong> An AI "101-year-old" giving longevity tips is an invented authority. If the advice is wrong, it is your liability, not the character's.</li>
</ul>
<p>Tilbury ends on a similar note of caution, even after the test made money:</p>
${quote('But I definitely don\'t want everyone to jump on this because I think one of the coolest things about social media is connecting with actual people from all walks of life.', 'Mark Tilbury', VIDEO_ID, 1812, '30:12', VIDEO_TITLE)}

<h2 id="disclosure">Do you have to disclose that an influencer is AI?</h2>
<p><strong>Treat the answer as yes.</strong> Tilbury added "your AI grandpa" to his character's bio, and says he did it so nobody felt tricked.</p>
${quote('I\'m also going to write your AI grandpa because I don\'t want anyone feeling like they\'ve been tricked.', 'Mark Tilbury', VIDEO_ID, 1244, '20:44', VIDEO_TITLE)}
<p>Three layers of rules point the same way:</p>
<ol>
<li><strong>Platform labels.</strong> Meta, TikTok and YouTube all have policies asking creators to label realistic AI-generated or altered video. Check each platform's current rules before you post, since they change often.</li>
<li><strong>Advertising law.</strong> In the US, the <a href="https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking" target="_blank" rel="noopener noreferrer">FTC's Endorsement Guides</a> say endorsements must reflect honest opinions and material connections must be disclosed. A fake person "trying" your product and recommending it is hard to square with that.</li>
<li><strong>Customer trust.</strong> Tilbury notes that no commenter complained about AI once it was disclosed. Disclosure did not kill engagement in his test. Getting caught hiding it is the bigger risk.</li>
</ol>
<p>A simple rule of thumb: label the character as AI in the bio, never claim the character used a product, and never invent customer testimonials. This is general information, not legal advice.</p>

<h2 id="business-use">What is the better business use? AI UGC for your own brand</h2>
<p>If you run a business, the interesting lesson is not "build a fake influencer." It is that the same workflow, script, character, voice, vertical video, can now produce short-form content for your own products in hours instead of weeks.</p>
<table><thead><tr><th></th><th>AI influencer side hustle</th><th>AI UGC for your brand</th></tr></thead><tbody>
<tr><td>Goal</td><td>Build an audience, then find something to sell</td><td>Sell a product you already have</td></tr>
<tr><td>Main risk</td><td>Invented authority, deceptive personas</td><td>Overclaiming what the product does</td></tr>
<tr><td>Where it earns</td><td>Affiliate links, digital products, brand deals</td><td>Ads, product pages, organic social</td></tr>
<tr><td>Good practice</td><td>Label the character as AI</td><td>Label AI presenters, keep claims to real product facts</td></tr>
<tr><td>What to measure</td><td>Followers, views, product sales</td><td>Cost per lead, click-through, sales by video</td></tr>
</tbody></table>
<p>The honest version for brands: an AI presenter explains a real feature, demonstrates a real use case, and is labelled as AI. It replaces the cost and wait of hiring creators for every variation, and it lets you test ten hooks instead of two. We compared the tools for this in our <a href="/blog/makeugc-alternative">MakeUGC alternative guide</a>, and covered the wider toolkit in <a href="/blog/ai-tools-for-solopreneurs">AI tools for solopreneurs</a>.</p>
<p>Tilbury's own lesson still applies: launch several variations, wait for real data, then double down. The difference is that your winner sells your product, not someone else's affiliate link.</p>

<h2 id="dooza">Where does Dooza fit?</h2>
${doozaSummary}
<p>For short-form video, the <a href="/workforce">Dooza Workforce</a> app includes a UGC Reel Creator for product videos and Somi, the social media employee, to plan and publish them. Every step has your approval on anything sensitive, and nothing goes out pretending to be a real customer. If your workflow is bigger than video, such as connecting content to lead capture and follow-up, <a href="/">Dooza Agents</a> are custom agents built and maintained by Dooza engineers, and <a href="/workflow-automation">workflow automation</a> ties the pieces together.</p>
<p>Pricing depends on the product. Every product starts with a refundable pilot, and you can see the details on <a href="/pricing">our pricing page</a>.</p>
<p><strong>Want AI video for your own products, done honestly?</strong> <a href="/book">Book a free 30-minute call to scope your pilot</a>. Start with a refundable pilot: 100% refund within 14 days.</p>`,
    faqData: [
        { question: 'How much money did Mark Tilbury make with AI influencers?', answer: 'According to the video, his AI character sold 23 copies of a $12 workbook for $276 in revenue. After a $99 Higgsfield plan and $19.52 in PayPal fees, profit was about $157, short of his $1,000 goal.' },
        { question: 'What tools did Mark Tilbury use to make AI influencers?', answer: 'He used Claude on the free plan to create characters, scripts and the workbook, Higgsfield for images, voices and video, Instagram to publish, Instagram Edits for captions, and Stan Store to sell the digital product.' },
        { question: 'Is making money with AI influencers really lazy?', answer: 'Not quite. The video still involved choosing niches, reviewing images and scripts, setting up accounts, editing captions, pricing a product and fact-checking it. AI removes the filming, not the decisions.' },
        { question: 'Do AI influencers need to be disclosed?', answer: 'Yes, treat disclosure as required. Major platforms ask creators to label realistic AI-generated video, and US advertising rules require honest endorsements. Mark Tilbury labelled his character as an AI grandpa in the bio.' },
        { question: 'How can a small business use AI UGC?', answer: 'Use AI presenters to make short product videos about real features, label them as AI, test several hooks, and keep the winners. Avoid fake testimonials or characters who claim to have used the product.' },
        { question: 'Can Dooza make AI UGC videos for my business?', answer: 'Yes. The Dooza Workforce app includes a UGC Reel Creator for short-form product videos and Somi for social posting. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.' },
    ],
};

export default post;
