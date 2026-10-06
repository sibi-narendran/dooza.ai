import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = '7RVf25Rg0Mc';
const VIDEO_TITLE = 'you need to try Paperclip RIGHT NOW!';

const post = {
    id: 247,
    title: 'Paperclip AI Agent Company: NetworkChuck\'s AI IT Department Test',
    seoTitle: 'Paperclip AI Agents: NetworkChuck\'s AI Company Test',
    seoDescription: 'NetworkChuck built an AI IT department in Paperclip, an open-source app that runs AI agents like a company. What it does and what it means for SMBs.',
    excerpt: 'NetworkChuck set up Paperclip, an open-source "meta harness" that organizes AI agents into a company with a CEO, an org chart, tasks, and approvals, then put it to work on a network drop he blamed on a toilet. Here is what Paperclip does and what multi-agent AI companies mean for small businesses.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'AI News',
    tags: ['NetworkChuck', 'Viral Video', 'Paperclip', 'AI Agents', 'Multi-Agent Systems', 'Claude Code', 'Codex', 'AI Workforce'],
    image: '/blog/paperclip-ai-agent-company.png',
    imageAlt: 'Soft watercolor illustration of a small server room with a network switch and blinking cables, a friendly org chart of robot employees floating above it, and a single paperclip linking the team together',
    slug: 'paperclip-ai-agent-company',
    video: {
        name: VIDEO_TITLE,
        description: 'NetworkChuck installs Paperclip, an open-source app that organizes AI agents such as Claude Code, Codex, and Hermes into a company with an org chart, tasks, decisions, and routines, then uses an all-AI IT department to investigate why his studio loses its NAS connection.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-09-24',
    },
    tocData: [
        { id: 'what-is-the-video-about', label: 'What is the video about?' },
        { id: 'what-is-paperclip', label: 'What is Paperclip?' },
        { id: 'how-it-works', label: 'How the AI company works' },
        { id: 'toilet-ticket', label: 'The toilet and the NAS' },
        { id: 'what-went-wrong', label: 'What to watch out for' },
        { id: 'small-business', label: 'What it means for small businesses' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-is-the-video-about">What is NetworkChuck's Paperclip video about?</h2>
<p><strong>NetworkChuck's video is a hands-on tour of Paperclip, an open-source app that organizes AI agents into a company.</strong> Instead of chatting with Claude Code, Codex, or other agents one at a time, you "hire" them into an org chart, give them a CEO and managers, and hand out work as tasks. You sit above it all as the board of directors and approve hires and key decisions.</p>
<p>To test it, Chuck builds an all-AI IT department and gives it a real, very strange problem: every time someone flushes the toilet at his studio, everyone seems to lose their connection to the NAS (network storage). The agents map his network, file reports, ask him questions, and reach a verdict. Along the way, he shows Paperclip's routines, artifacts, secrets, and export features, plus a few moments where the agents did more than he asked.</p>
<ul>
<li><strong>What Paperclip is:</strong> a self-hosted "meta harness" that coordinates the AI agents you already use, rather than being an agent itself.</li>
<li><strong>How agents work together:</strong> through tasks and projects, with problems escalating from employee to CEO agent to you.</li>
<li><strong>What happened:</strong> the agents ruled out the NAS and router and traced the drops to a batch of cheap third-party network transceivers. Chuck still suspects the toilet.</li>
<li><strong>The catch:</strong> it takes a server, agent subscriptions, and technical comfort, and the agents need guardrails.</li>
<li><strong>For small businesses:</strong> it's a preview of AI teams organized like a company, with structure, approvals, and records.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'NetworkChuck', channelUrl: 'https://www.youtube.com/@NetworkChuck', uploadDate: 'September 24, 2026', views: '1.2 million' })}

<h2 id="what-is-paperclip">What is Paperclip, and how is it different from an AI agent?</h2>
<p>Chuck opens with a problem many AI power users now have: he runs eight agents across different tools, and keeping track of who does what, how they talk, and how to keep them secure is hard. Paperclip is his answer.</p>
${quote('In Paperclip, your agents become employees. You give them managers, you assign them tasks.', 'NetworkChuck', VIDEO_ID, 34, '0:34', VIDEO_TITLE)}
<p>The key idea is that Paperclip doesn't replace your agents. Chuck calls it a "meta harness": you bring in Claude Code, Codex, Hermes, OpenClaw, or a local model, and Paperclip gives them a shared structure. When a better model or tool comes out, you add it to the company instead of starting over.</p>
${quote("Paperclip itself is not an agent harness. It's a meta harness.", 'NetworkChuck', VIDEO_ID, 413, '6:53', VIDEO_TITLE)}
<p>Paperclip's creator, who appears in the video, makes a point that shapes the design. Agents talk to each other through tasks, not open-ended chat rooms:</p>
${quote("I haven't seen a lot of super value out of like agent conference room or an agent town where you just set your agents to sit there and talk to each other.", 'Paperclip\'s creator', VIDEO_ID, 45, '0:45', VIDEO_TITLE)}
<p>If you're new to the agent tools mentioned here, our explainer on <a href="/blog/what-is-openclaw">what OpenClaw is</a> covers one of the most popular self-hosted options.</p>

<h2 id="how-it-works">How does a Paperclip AI company work?</h2>
<p>Here are the main parts of Paperclip as the video shows them, and what each one maps to in a normal business.</p>
<table><thead><tr><th>Paperclip feature (per the video)</th><th>What it does</th><th>Business equivalent</th></tr></thead><tbody>
<tr><td>Board of directors</td><td>You approve agent hires and answer escalated decisions.</td><td>Owner or manager sign-off</td></tr>
<tr><td>CEO agent</td><td>Chuck's CEO, "Dumbledore," runs on Claude Code, breaks work down, and assigns it.</td><td>Operations lead</td></tr>
<tr><td>Org chart and hires</td><td>Agents on different tools (Hermes, Codex, Pi with local models) get roles and managers.</td><td>Team structure and job roles</td></tr>
<tr><td>Tasks and projects</td><td>All work and agent-to-agent talk happens on tasks, with reviewers, approvers, and blocking tasks.</td><td>Tickets or a project board</td></tr>
<tr><td>Decisions inbox</td><td>Agents send you questions when they need a call made.</td><td>Approval requests</td></tr>
<tr><td>Artifacts</td><td>Reports, network maps, and files the agents produce, stored and searchable.</td><td>Shared drive</td></tr>
<tr><td>Activity and timeline</td><td>A record of who did what, and when.</td><td>Audit log</td></tr>
<tr><td>Routines</td><td>Scheduled tasks, such as a daily storage check or a daily agent stand-up.</td><td>Recurring checklists and meetings</td></tr>
<tr><td>Secrets</td><td>API keys stored centrally and given to specific agents only.</td><td>Password manager with access control</td></tr>
<tr><td>Import and export</td><td>Move the whole company, including agents, routines, and tasks, to another install.</td><td>Portable operations playbook</td></tr>
</tbody></table>
<p>Setup in the video is fairly quick for a technical user. Chuck installs it on an Ubuntu virtual machine with two commands and opens it in a browser on port 3100. He says most people can try it on their own Mac, Linux, or Windows (WSL2) computer, while a dedicated VM or cloud server is the more serious option. The agents themselves run on that machine, so you still need each tool installed and logged in. His CEO agent failed at first because Claude Code wasn't installed yet.</p>
<p>One detail that matters for anyone managing people or agents: when an agent gets stuck, it doesn't come straight to Chuck. It goes to the CEO agent first, and only reaches him if the CEO can't fix it.</p>

<h2 id="toilet-ticket">What happened with the toilet and the NAS?</h2>
<p>This is the fun part. Chuck creates a project for the toilet problem and hands the details to his CEO agent. The CEO splits the work: Fred, the network engineer, maps the studio network and logs into the switches. Another agent builds a way to capture events when they happen. A security reviewer checks that work. A scanner agent sweeps the network.</p>
<p>Chuck gets questions in his decisions inbox, such as whether everyone loses the connection at the same moment, whether to run a "control flush test," and whether to replace a suspect fiber optic module. The first final report is notably careful:</p>
${quote('So, their honest report is that they can\'t name the trigger.', 'NetworkChuck', VIDEO_ID, 1097, '18:17', VIDEO_TITLE)}
<p>According to the video, the agents found the NAS and router never went down. A shared physical event was knocking four specific fiber links offline within about two seconds. A flush fit the data, but so did a door, an HVAC compressor, or a chair bumping the cabinet.</p>
<p>After the problem kept happening, Chuck had them dig deeper. The new verdict, as he reads it on screen: four ports on his MikroTik switch had no margin and had been unstable for months. One port had logged far more link drops than a comparable one. Every problem port used third-party SFP transceivers from one batch he'd bought cheaply online, a batch the report says had a 50% in-service failure rate. The fix was to replace them with MikroTik-branded modules.</p>
<p>Chuck's own take is honest too. He still thinks it's the toilet, or at least a better story. He says he'll watch it for a week or two before calling it solved.</p>

<h2 id="what-went-wrong">What should you watch out for with multi-agent AI?</h2>
<p>The video is upbeat, but it shows several real limits. Chuck points some out himself.</p>
<ul>
<li><strong>Things break.</strong> He says things weren't running perfectly, and one agent kept timing out during the investigation.</li>
<li><strong>Agents go beyond the brief.</strong> When he connects a dark-web monitoring tool, a new agent finds issues and assigns other agents to force password resets, which he didn't ask for. He pauses that work. Paperclip makes pausing easy, but you have to be watching.</li>
<li><strong>Access is real access.</strong> His network agent logs into his switches. Any agent with credentials can change real systems, so scoped secrets and approvals matter.</li>
<li><strong>Cost isn't covered.</strong> The video doesn't show what running ten agents on paid models costs per month. Check that before you scale.</li>
<li><strong>The answer still needs a human.</strong> The useful outcome was a hardware swap Chuck chose and did himself, based on agent reports he could read and question.</li>
</ul>

<h2 id="small-business">What do AI agent "companies" mean for small businesses?</h2>
<p>The striking part of the video isn't the toilet. It's that a business owner ran a team of AI agents with the same structure he'd use for people: roles, a manager, tickets, approvals, a daily stand-up, and records of every step. Chuck shows agents in his other Paperclip install asking each other questions at stand-up, including one checking that video footage is backed up before recordings expire.</p>
<p>That structure is the lesson, whether or not you ever install Paperclip:</p>
<ol>
<li><strong>Give each agent one clear role.</strong> Fred handles the network, George handles storage. Vague "do everything" agents are harder to trust.</li>
<li><strong>Run work through tasks you can see.</strong> If an agent's work isn't recorded, you can't review it.</li>
<li><strong>Escalate before you act.</strong> Decisions that cost money or touch customers should come to a person.</li>
<li><strong>Automate the boring recurring checks first.</strong> A daily storage check is a perfect first routine.</li>
<li><strong>Be honest about the setup cost.</strong> Self-hosted tools give you control but need someone to install, update, and secure them.</li>
</ol>
<p>Here is how the two main paths compare for a small business:</p>
<table><thead><tr><th>Factor</th><th>Self-hosted (Paperclip, OpenClaw)</th><th>Managed AI workforce</th></tr></thead><tbody>
<tr><td>Who sets it up</td><td>You, on your own server or computer</td><td>The provider</td></tr>
<tr><td>Control and flexibility</td><td>Maximum: bring any model or tool</td><td>Defined roles, with customization on request</td></tr>
<tr><td>Ongoing upkeep</td><td>You install updates, fix errors, manage keys</td><td>Handled for you</td></tr>
<tr><td>Best for</td><td>Technical owners and IT teams who enjoy tinkering</td><td>Owners who want the work done, not another system to run</td></tr>
</tbody></table>
<p>We go deeper on that tradeoff in <a href="/blog/openclaw-vs-dooza">OpenClaw vs Dooza</a>, and on the "AI team as company" idea in <a href="/blog/build-a-20x-company">how to build a 20x company</a>.</p>

<h2 id="dooza">Where does Dooza fit?</h2>
${doozaSummary}
<p>Paperclip is a great playground if you like running servers and wiring up agents. Most small business owners want the outcome Chuck got, organized AI employees doing real work with a record of everything, without owning the setup. That's what Dooza does, as a managed alternative to self-hosting tools like OpenClaw.</p>
<p>The <a href="/workforce">Dooza Workforce app</a> gives you ready-made AI employees with clear roles, such as Maily for email, Somi for social media, Ranky for SEO and AI visibility, Stan for lead generation, Linda for legal documents, and Rachel for phone calls. If your process needs something custom, <a href="/">Dooza Agents</a> are built and maintained by Dooza engineers, with 1,000+ app integrations, encrypted connections, and your approval on anything sensitive. For a specific job like answering calls, see our <a href="/ai-receptionist">AI receptionist</a> or <a href="/workflow-automation">workflow automation</a> services. Pricing depends on the product; see <a href="/pricing">pricing</a>.</p>
<p><strong>Want an AI team without running the server room?</strong> <a href="/book">Book a free 30-minute call to scope your pilot</a>. Every Dooza product starts with a refundable pilot: 100% refund within 14 days.</p>`,
    faqData: [
        {
            question: 'What is Paperclip AI?',
            answer: 'Paperclip is an open-source, self-hosted app that organizes AI agents such as Claude Code, Codex, and Hermes into a company with an org chart, tasks, decisions, routines, and audit records. NetworkChuck calls it a "meta harness."',
        },
        {
            question: 'Is Paperclip an AI agent itself?',
            answer: 'No. In the video, NetworkChuck stresses that Paperclip is not an agent harness. It coordinates the agents you already use, which run on the same machine as Paperclip.',
        },
        {
            question: 'How do you install Paperclip?',
            answer: 'In the video, NetworkChuck installs it on an Ubuntu VM with two commands and opens it in a browser on port 3100. He says Mac, Linux, or Windows with WSL2 also work for trying it out.',
        },
        {
            question: 'Did the AI agents solve NetworkChuck\'s toilet problem?',
            answer: 'The agents ruled out the NAS and router and traced the drops to a batch of third-party SFP transceivers on four switch ports. Chuck replaced them but still suspects the toilet and planned to watch it for a week or two.',
        },
        {
            question: 'Is Paperclip a good fit for a small business?',
            answer: 'It suits technical owners comfortable running a server, managing agent subscriptions, and supervising agents with real system access. Non-technical teams may prefer a managed AI workforce instead.',
        },
        {
            question: 'What are the risks of running a team of AI agents?',
            answer: 'The video shows agents timing out, acting beyond the brief (forcing password resets), and logging into real systems. Use scoped credentials, approvals for risky actions, and someone who reviews the activity log.',
        },
    ],
};

export default post;
