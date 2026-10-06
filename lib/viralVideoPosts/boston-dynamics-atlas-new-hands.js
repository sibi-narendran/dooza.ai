import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = '4whgw2gLBS8';
const VIDEO_TITLE = 'New Hands for Atlas | Boston Dynamics';

const post = {
    id: 249,
    title: "Boston Dynamics Atlas New Hands: 13 Degrees of Freedom, Explained",
    seoTitle: 'Atlas New Hands: Boston Dynamics GR3 Hand Explained',
    seoDescription: "Boston Dynamics gave Atlas new 13-degree-of-freedom hands built for sim-to-real reinforcement learning. What changed, why no pinky, and what it means for SMBs.",
    excerpt: "Boston Dynamics' new GR3 hand for Atlas almost doubles its degrees of freedom, drops the pinky, and is built to be simulated for reinforcement learning. Here is what the video shows, and what physical AI means for small businesses compared with the AI agents they can use today.",
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '7 min read',
    readTimeMinutes: 7,
    category: 'AI News',
    tags: ['Boston Dynamics', 'Viral Video', 'Atlas Robot', 'Humanoid Robots', 'Physical AI', 'Reinforcement Learning'],
    image: '/blog/boston-dynamics-atlas-new-hands.png',
    imageAlt: 'Soft watercolor illustration of a humanoid robot hand with four slender fingers gently holding a small tool, with faint simulation grid lines in the background',
    slug: 'boston-dynamics-atlas-new-hands',
    video: {
        name: VIDEO_TITLE,
        description: 'Boston Dynamics engineers introduce the GR3 hand for the Atlas humanoid: 13 degrees of freedom, back-drivable actuators, a design built for simulation and reinforcement learning, and the reasons it has no pinky.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-10-01',
    },
    tocData: [
        { id: 'what-happened', label: 'What Boston Dynamics announced' },
        { id: 'whats-new', label: 'GR2 vs GR3' },
        { id: 'sim-to-real', label: 'Sim-to-real learning' },
        { id: 'no-pinky', label: 'Why no pinky' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'physical-vs-digital', label: 'Physical vs digital AI' },
        { id: 'where-dooza-fits', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did Boston Dynamics announce about Atlas's new hands?</h2>
<p>In a short video called "New Hands for Atlas," published October 1, 2026, Boston Dynamics introduces the next-generation hand for its Atlas humanoid robot. The engineers call the new hand GR3. It has 13 degrees of freedom, up from 7 on the previous GR2 hand. It is slightly larger than an average human hand and, on average, a bit stronger.</p>
<p>The team says the hand was designed with simplicity in mind, as Atlas moves toward mass manufacturing. It was also built to be simulated cleanly, so that reinforcement learning (RL) policies trained in simulation carry over to the real robot. That transfer is called <em>sim-to-real</em>. And it has no pinky, a choice made partly after the engineers spent a day with their own pinkies taped down.</p>
<ul>
<li><strong>More dexterity:</strong> 13 degrees of freedom (GR3) vs 7 (GR2), with four fingers instead of five.</li>
<li><strong>Built for learning:</strong> designed to be easy to simulate and "transparent" to force and motion, which suits RL.</li>
<li><strong>Built to survive bumps:</strong> back-drivable joints let the hand give way on impact instead of breaking the gearbox.</li>
<li><strong>Close to human:</strong> similar enough to a human hand that human demonstrations map onto it well.</li>
<li><strong>For small businesses:</strong> this is research-stage physical AI. The AI agents that save time today are digital.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Boston Dynamics', channelUrl: 'https://www.youtube.com/@BostonDynamics', uploadDate: 'October 1, 2026', views: '2.3 million' })}

<h2 id="whats-new">What is new in the GR3 hand compared with GR2?</h2>
<p>The headline number comes in the first few seconds:</p>
${quote('We have increased the number of degrees of freedom. GR2 had seven degrees of freedom. GR3 now has 13.', 'Boston Dynamics engineer', VIDEO_ID, 15, '0:15', VIDEO_TITLE)}
<p>A degree of freedom is one independent way a joint can move. More degrees of freedom let the hand take more grasps and do more in-hand moves, but every extra one adds a motor, weight, power use, and control complexity. Here is what the video says about each design goal:</p>
<table><thead><tr><th>Design goal</th><th>What the video says</th><th>Why it matters</th></tr></thead><tbody>
<tr><td>Dexterous grasps</td><td>A pinch that can roll small objects against the thumb, a three-finger grip that holds firmly while still adjusting, and gripping a tool handle while pressing its trigger</td><td>These are the moves behind using real tools and assembling parts</td></tr>
<tr><td>Size and strength</td><td>Slightly larger than an average human hand, and a bit stronger on average</td><td>It can handle objects and tools made for people</td></tr>
<tr><td>Simulatable</td><td>Designed so it can be simulated cleanly for RL</td><td>Skills can be learned in simulation before they run on hardware</td></tr>
<tr><td>Force and motion transparency</td><td>Forces on the fingers can be sensed through proprioception, and commanded motion passes cleanly to the world</td><td>The robot can "feel" contact without extra fragile sensors</td></tr>
<tr><td>Back-drivability</td><td>Joints can be pushed backwards and move out of the way on hard impacts</td><td>Better dexterity and better durability, because the gearbox is not damaged</td></tr>
<tr><td>Manufacturability</td><td>Designed with simplicity in mind on the path to mass manufacturing</td><td>Fewer parts means lower cost and fewer failures at scale</td></tr>
</tbody></table>
<p>One engineer sums up why hands are so hard:</p>
${quote('The multi-fingered hand is like a whole mini robot.', 'Boston Dynamics engineer', VIDEO_ID, 297, '4:57', VIDEO_TITLE)}

<h2 id="sim-to-real">How does Atlas learn to use its hands with sim-to-real reinforcement learning?</h2>
<p>Reinforcement learning trains a control policy by trial and error, mostly in simulation, where a robot can practice far more than it could in the real world. According to the video, Boston Dynamics already uses RL heavily for Atlas's whole-body control. The team is now working out how to use the same tools for arms and hands.</p>
${quote("You can simulate it cleanly, and it enables very interesting work in reinforcement learning, but it's also close to anthropomorphic.", 'Boston Dynamics engineer', VIDEO_ID, 70, '1:10', VIDEO_TITLE)}
<p>Being close to human-shaped matters because, as the engineer explains, it leaves only a small gap between human demonstrations and the robot's body. People can show a task, and the motion carries over more easily.</p>
<p>The video lists three things a simulator has to get right for the hand:</p>
<ol>
<li><strong>Kinematics:</strong> the geometry, meaning where the links and joints are.</li>
<li><strong>Dynamics:</strong> friction, the torques the motors can apply, and backlash in the gears.</li>
<li><strong>Contact dynamics:</strong> how the fingers interact with objects and surfaces.</li>
</ol>
<p>The team says it closes the sim-to-real gap "from both directions." It improves the simulator to match the hardware, and it designs the hardware to be easier to simulate. The current test tasks focus on reorienting objects in the hand, which the team sees as a stand-in for future work with tools and assembling parts.</p>

<h2 id="no-pinky">Why does the new Atlas hand have no pinky?</h2>
<p>The engineers say they weighed many options, including two thumbs, and decided using simulation, 3D-printed mock-ups, and their own hands. At one point the CTO asked the team to tape their pinky to the next finger for a day. The next day they decided the robot probably didn't need one. The reasoning:</p>
${quote("There's no pinky because the team determined that the additional dexterity and tasks you'd be able to accomplish is not worth the extra complexity of three additional degrees of freedom.", 'Boston Dynamics engineer', VIDEO_ID, 272, '4:32', VIDEO_TITLE)}
<p>The engineer adds that size and power use also weighed against it. It is a useful reminder that good engineering, like a good business process, often means removing the parts that don't pay for themselves.</p>

<h2 id="small-business">What does physical AI like Atlas mean for small businesses?</h2>
<p>In the near term, very little directly. The video presents GR3 as a step on a long road. One engineer says the journey for the hand is a long one. The video gives no pricing, availability, or customer deployments for small businesses, and you shouldn't plan around a humanoid robot arriving at your shop soon.</p>
<p>It is still worth watching for three reasons:</p>
<ul>
<li><strong>Direction of travel.</strong> The same methods behind today's software agents, learning from data and practicing in simulation, are being applied to physical tasks. Warehousing, manufacturing, and logistics will feel it first.</li>
<li><strong>Design lessons.</strong> Building for simplicity and manufacturability, and dropping features that aren't worth their complexity, applies to any operations project.</li>
<li><strong>Expectations.</strong> Clients and staff will see robot videos and ask what AI can do for your business. You need an answer that fits what is actually available today.</li>
</ul>

<h2 id="physical-vs-digital">Physical AI vs digital AI agents: which helps a small business now?</h2>
<table><thead><tr><th></th><th>Physical AI (humanoids like Atlas)</th><th>Digital AI agents</th></tr></thead><tbody>
<tr><td>What it does</td><td>Moves, grasps, and handles objects in the physical world</td><td>Answers calls, writes and sends emails, updates CRMs, publishes content, and runs workflows</td></tr>
<tr><td>Stage, per the video</td><td>Active research and development, moving toward mass manufacturing</td><td>Available to small businesses today</td></tr>
<tr><td>Main constraint</td><td>Hardware, safety, and the sim-to-real gap</td><td>Good instructions, access to your tools, and approval rules</td></tr>
<tr><td>Who benefits first</td><td>Large industrial and logistics operators</td><td>Any business with phones, inboxes, and repetitive admin</td></tr>
<tr><td>What to do now</td><td>Follow the progress and learn the vocabulary</td><td>Pick one workflow, pilot an agent on it, and measure the result</td></tr>
</tbody></table>
<p>If you want to understand the software side, read <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a> and <a href="/blog/what-is-ai-native-service-company">what an AI-native service company is</a>.</p>

<h2 id="where-dooza-fits">Where does Dooza fit?</h2>
${doozaSummary}
<p>Dooza doesn't build robots. Its products are the digital side of AI: agents that do real work in your inbox, phone line, CRM, and website. <a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees for email, social media, SEO, lead generation, legal documents, and phone calls. <a href="/">Dooza Agents</a> are custom agents that Dooza engineers build and maintain around your workflows.</p>
<p>Good starting points are an <a href="/ai-receptionist">AI receptionist</a> for missed calls, <a href="/ai-customer-support">AI customer support</a> for the inbox, and <a href="/workflow-automation">workflow automation</a> for repetitive admin. Our guide to <a href="/blog/automate-business-processes">automating business processes</a> shows how to choose the first one. Pricing depends on the product and is on <a href="/pricing">our pricing page</a>.</p>

<h2 id="next-step">Ready to put AI to work before the robots arrive?</h2>
<p>Book a free 30-minute call and a Dooza engineer will scope your pilot around one workflow. Every product starts with a refundable pilot: 100% refund within 14 days. <a href="/book">Book a free pilot call</a>.</p>`,
    faqData: [
        { question: 'What is new in the Boston Dynamics Atlas hands?', answer: 'The new GR3 hand has 13 degrees of freedom, up from 7 on GR2. It is slightly larger and, on average, stronger than a human hand, and it is designed to be simulated for reinforcement learning and built for mass manufacturing.' },
        { question: 'How many fingers does the new Atlas hand have?', answer: 'Four. Boston Dynamics dropped the pinky because the extra dexterity was not worth three additional degrees of freedom and the added size, power use, and complexity.' },
        { question: 'What is sim-to-real reinforcement learning?', answer: 'It means training a robot control policy by trial and error in simulation, then running it on the real robot. It only works if the simulator matches the hardware, including kinematics, dynamics, and contact.' },
        { question: 'What does back-drivable mean for a robot hand?', answer: 'The joints can be pushed backwards by outside forces. That lets the hand sense contact through proprioception and give way on hard impacts instead of damaging its gearbox.' },
        { question: 'Can a small business buy an Atlas robot?', answer: 'The video gives no pricing or availability for small businesses. It presents the GR3 hand as part of ongoing research on the path to mass manufacturing.' },
        { question: 'What AI can a small business use today instead?', answer: 'Digital AI agents. They answer calls, handle customer emails, follow up on leads, and run workflows. Dooza offers these through Dooza Workforce and Dooza Agents, each starting with a refundable pilot.' },
    ],
};

export default post;
