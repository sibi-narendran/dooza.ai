import { src, xPost, postCredit, doozaSummary } from './helpers';

const X = { name: 'Dyna Robotics', handle: 'DynaRobotics', id: '2104970523726033387', date: 'September 29, 2026' };

const post = {
    id: 407,
    title: 'Dyna-2.1: The Robot That Ran an Hour-Long Laundry Shift Uncut',
    seoTitle: 'Dyna-2.1 Robot Does Laundry: The Physical Agent Explained',
    seoDescription: "Dyna Robotics' Dyna-2.1 ran an hour-long laundry workflow on its own in uncut footage. What a physical agent is, how it compares, and what it means for SMBs.",
    excerpt: "Dyna Robotics released Dyna-2.1, a wheeled semi-humanoid it calls a physical agent, with uncut footage of it running an hour-long laundry room workflow. Here is what is new, how it compares with other robots, and what laundromats, hotels, and cleaning businesses should realistically expect.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Dyna Robotics', 'Viral X Post', 'Physical AI', 'Humanoid Robots', 'Robotics', 'Laundry Automation'],
    image: '/blog/dyna-2-1-robot-laundry-physical-agent.png',
    imageAlt: 'Soft watercolor illustration of a friendly wheeled robot with two arms folding white towels beside a row of commercial washing machines, neat stacks of folded towels on shelves',
    slug: 'dyna-2-1-robot-laundry-physical-agent',
    tocData: [
        { id: 'what-happened', label: 'What Dyna released' },
        { id: 'why-viral', label: 'Why it went viral' },
        { id: 'who-is-dyna', label: 'Who Dyna Robotics is' },
        { id: 'physical-agent', label: 'What a physical agent is' },
        { id: 'comparison', label: 'How it compares' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did Dyna Robotics release with Dyna-2.1?</h2>
<p>On September 29, 2026, Dyna Robotics released Dyna-2.1, which it calls a "Physical Agent," along with uncut footage of the robot completing an hour-long laundry room workflow on its own. Dyna-2.1 pairs new semi-humanoid hardware (a two-armed upper body on four steerable wheels) with an agentic system built around Dyna-2, the company's robot foundation model. According to the ${src('https://www.prnewswire.com/news-releases/dyna-robotics-launches-dyna-2-1-physical-agent-a-semi-humanoid-robot-that-completes-full-workflows-such-as-a-commercial-laundry-shift-302892411.html', 'launch announcement')}, the robot loads and runs washers and dryers, pulls out towels, folds and sorts them by size, shelves the stacks, and recovers from its own mistakes without human help.</p>
<ul>
<li><strong>What is new:</strong> one robot running a whole workflow, not a single task like folding.</li>
<li><strong>Hardware:</strong> a wheeled semi-humanoid, so it doesn't have to balance like a walking robot.</li>
<li><strong>Brain:</strong> a vision-language "orchestrator" that plans the workflow, plus a whole-body controller.</li>
<li><strong>Metric that matters:</strong> mean time between interventions, meaning how long it works before a person has to step in.</li>
<li><strong>For small businesses:</strong> real deployments exist, but broad, affordable availability is still ahead.</li>
</ul>
${xPost({ text: 'We are releasing Dyna-2.1, the first Physical Agent that achieves reliable super long-horizon whole-body autonomy. It combines our brand-new semi-humanoid hardware with an agentic system built around Dyna-2 to handle ultra-long real-world workflows.<br><br>Here is an uncut footage of Dyna-2.1 completing an entire hour-long laundry room workflow, just like a human does.', ...X })}
${postCredit({ ...X, views: '3.1 million', likes: '3,900' })}

<h2 id="why-viral">Why did the Dyna-2.1 laundry video go viral?</h2>
<p>Robot demo videos are everywhere, and many are short, sped up, or carefully edited. This one went the other way. Three things stood out:</p>
<ul>
<li><strong>It is uncut.</strong> An hour of continuous footage is harder to fake than a 30-second clip, and viewers can see the robot fumble and recover.</li>
<li><strong>It is a real job.</strong> Laundry is a chore everyone knows, and commercial laundry is real, paid work in hotels and laundromats.</li>
<li><strong>It is boring on purpose.</strong> The robot doesn't backflip. It loads machines and folds towels, which is exactly the point for buyers.</li>
</ul>

<h2 id="who-is-dyna">Who is Dyna Robotics?</h2>
<p>Dyna Robotics is based in Redwood City, California, and was founded in 2024 by Lindon Gao (CEO), York Yang, and Jason Ma, a former DeepMind research scientist. Gao and Yang previously sold Caper AI, a smart shopping cart company, for $350 million in 2021. In September 2025 the company ${src('https://www.prnewswire.com/news-releases/dyna-robotics-raises-120-million-to-advance-robotic-foundation-models-on-the-path-to-physical-artificial-general-intelligence-302556817.html', 'raised a $120 million Series A')} led by Robostrategy, CRV, and First Round Capital, with Salesforce Ventures, NVentures (Nvidia), the Amazon Industrial Innovation Fund, Samsung Next, and LG Technology Ventures joining.</p>
<p>Dyna's strategy is to sell narrow, commercial jobs first and generalize later. Its progress so far:</p>
<table><thead><tr><th>Milestone</th><th>What Dyna reported</th></tr></thead><tbody>
<tr><td>Dyna-1 (2025)</td><td>Robot foundation model claiming a 99%+ success rate over 24 hours of non-stop operation, deployed in hotels, restaurants, laundries, and gyms</td></tr>
<tr><td>Dyna-1 napkin folding (June 2025)</td><td>About 35 napkins an hour, roughly 480 per shift, 75% passing quality checks</td></tr>
<tr><td>Dyna-2 (August 2026)</td><td>About 95 napkins an hour, 1,590 per 18-hour shift, 93% passing quality checks, per ${src('https://www.dyna.co/research/scaling-customer-deployments', "Dyna's research post")}</td></tr>
<tr><td>Restaurant rollout</td><td>Dyna says restaurant chain Din Tai Fung, which needs 1,500 napkins per robot per shift, is rolling the robots out across its network</td></tr>
<tr><td>Dyna-2.1 (September 2026)</td><td>New wheeled semi-humanoid running full laundry workflows; deployments in hotels, laundromats, and restaurants</td></tr>
</tbody></table>
<p>Dyna also says its fleet should reach "hundreds of robots" by the first half of 2027, and that some deployments pay back in as little as three days. Those are company claims, not independent audits.</p>

<h2 id="physical-agent">What is a "physical agent" with long-horizon autonomy?</h2>
<p>In software, an AI agent is a system that plans and carries out a multi-step job, like reading an email, checking a calendar, and booking a meeting. A physical agent is the same idea in a body: it plans a chain of real-world steps and does them.</p>
<p>"Long-horizon" means the chain is long. Folding one towel is a short task. Running a laundry room means dozens of linked steps over an hour or more, where one dropped towel or stuck door can derail everything. Dyna says Dyna-2.1 handles this with two layers:</p>
<ol>
<li><strong>An orchestrator:</strong> a vision-language model that looks at the scene, decides what to do next, and notices when something went wrong.</li>
<li><strong>A whole-body controller:</strong> driving, reaching, bending, and lifting as one coordinated motion, built on Dyna-2, which the company says was trained on about one million hours of human and robot data.</li>
</ol>
<p>The number Dyna wants judged on is mean time between interventions (MTBI): how long the robot works before someone has to help. CEO Lindon Gao put the goal as robots that "complete an entire workflow for a full shift — without human babysitters." Coverage from ${src('https://interestingengineering.com/ai-robotics/watch-new-humanoid-robot-unloads-laundry-and-folds-towels-without-human-help', 'Interesting Engineering')} describes the same workflow and recovery behavior.</p>

<h2 id="comparison">How does Dyna-2.1 compare with other humanoid robot efforts?</h2>
<table><thead><tr><th>Company / robot</th><th>Form</th><th>Main target</th><th>Commercial status (public)</th></tr></thead><tbody>
<tr><td>Dyna Robotics, Dyna-2.1</td><td>Wheeled semi-humanoid, two arms</td><td>Commercial laundry, restaurants, hotels</td><td>Paid deployments reported; no public price</td></tr>
<tr><td>1X, NEO</td><td>Walking humanoid</td><td>Homes</td><td>${src('https://www.businesswire.com/news/home/20251027434628/en/1X-Launches-NEO-The-Robot-Redefining-Life-at-Home', 'Pre-orders opened October 2025')} at $20,000 or $499 a month, with US deliveries targeted for 2026</td></tr>
<tr><td>Agility Robotics, Digit</td><td>Walking humanoid</td><td>Warehouses and logistics</td><td>${src('https://agilityrobotics.com/content/gxo-signs-industry-first-multi-year-agreement-with-agility-robotics', 'Multi-year robots-as-a-service deal with GXO')} signed in 2024</td></tr>
<tr><td>Boston Dynamics, Atlas</td><td>Walking humanoid</td><td>Industrial and manufacturing work</td><td>In development</td></tr>
</tbody></table>
<p>Dyna's bet is that wheels and a narrow job beat legs and a general one, at least for now. Wheels are cheaper, safer, and don't fall over, and a laundry room has flat floors. The trade-off is that it can't climb stairs.</p>

<h2 id="small-business">What does Dyna-2.1 mean for laundromats, hotels, and cleaning businesses?</h2>
<p>This is one of the few robot videos with a direct small-business link. Laundromats, hotel housekeeping, linen services, and restaurants all have repetitive folding and machine work, and that is exactly where Dyna is deploying. Still, be realistic:</p>
<ul>
<li><strong>Availability is limited.</strong> Dyna is working with chosen customers and projects hundreds of robots by mid-2027. That is not yet a product you can order next week.</li>
<li><strong>No public price.</strong> Neither the launch nor the coverage lists one. Expect a lease or robots-as-a-service model, as is common in the industry, but check with the vendor.</li>
<li><strong>Interventions still happen.</strong> The goal is a full shift without help. Plan on someone being nearby during any trial.</li>
<li><strong>Volume matters.</strong> The economics work best where machines run many hours a day, such as a busy commercial laundry or a hotel with hundreds of rooms.</li>
</ul>
<p>If you run one of these businesses, a sensible plan is to keep watching, talk to vendors once you see deployments near you, and in the meantime automate the front office, where AI already works reliably. Missed booking calls, customer emails, review replies, and quote follow-ups can all be handled by digital agents today. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> explains how to pick the first one.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build robots or foundation models. We build the digital agents that handle the work around the laundry room: phones, inboxes, bookings, and follow-ups. <a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees: Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your workflows.</p>
<p>For service businesses, the usual first steps are an <a href="/ai-receptionist">AI receptionist</a> to answer every call, <a href="/ai-customer-support">AI customer support</a> for questions and complaints, and <a href="/workflow-automation">workflow automation</a> for scheduling and invoicing. For more on how agents work, see <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Ready to automate your front office while robots handle the back?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope a pilot around one workflow. Start with a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is Dyna-2.1?', answer: 'Dyna-2.1 is a wheeled semi-humanoid robot from Dyna Robotics, released September 29, 2026. It combines new two-armed hardware with an agentic system built on the Dyna-2 model to run long real-world workflows, such as an hour-long laundry room shift.' },
        { question: 'What is a physical agent?', answer: 'It is an AI agent with a body. Like a software agent, it plans and carries out a multi-step job, but in the physical world, such as loading machines, folding, sorting, and shelving.' },
        { question: 'What does long-horizon autonomy mean?', answer: 'It means a robot can complete a long chain of linked steps, over an hour or a full shift, and recover from mistakes without a person stepping in. Dyna measures it as mean time between interventions.' },
        { question: 'Where is Dyna Robotics deploying its robots?', answer: 'Dyna says its robots are deployed in hotels, laundromats, and restaurants, and that Din Tai Fung is rolling out its napkin-folding robots. It projects hundreds of robots by the first half of 2027.' },
        { question: 'Can a small laundromat buy a Dyna robot?', answer: 'There is no public price or general ordering yet. Dyna works with commercial customers directly. Small operators should watch for deployments nearby and talk to the company when it fits their volume.' },
        { question: 'What can a cleaning or laundry business automate today?', answer: 'Front-office work: answering calls, booking pickups, replying to emails and reviews, and following up on quotes. Dooza offers these through Dooza Workforce and Dooza Agents, each starting with a refundable pilot.' },
    ],
};

export default post;
