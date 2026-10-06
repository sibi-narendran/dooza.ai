import { yt, quote, videoCredit, doozaSummary } from './helpers';

const VIDEO_ID = 'wYFt9NCYaVI';
const VIDEO_TITLE = 'Dreamforce Main Keynote 2026';

const post = {
    id: 241,
    title: 'Dreamforce 2026 Keynote Recap: AI Force and the Agentic Enterprise',
    seoTitle: 'Dreamforce 2026 Keynote Recap: AI Force & Agentforce',
    seoDescription: 'Dreamforce 2026 keynote recap: AI Force, Claude in Salesforce, new Agentforce agents, Agent Fabric, Guardian, and what the agentic enterprise means for SMBs.',
    excerpt: 'Salesforce\'s Dreamforce 2026 main keynote introduced AI Force, a wave of ready-made Agentforce agents, a CRM reasoning model, and new tools to govern agents. Here are the main announcements and how a small business can apply the same ideas without an enterprise Salesforce budget.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '9 min read',
    readTimeMinutes: 9,
    category: 'AI News',
    tags: ['Salesforce', 'Dreamforce 2026', 'Viral Video', 'Agentforce', 'AI Force', 'Agentic Enterprise', 'AI Agents'],
    image: '/blog/dreamforce-2026-keynote-agentic-enterprise.png',
    imageAlt: 'Soft watercolor illustration of a large conference stage with layered blocks labeled data, apps, agents and interface, and a small shop owner in the foreground building a smaller version of the same stack',
    slug: 'dreamforce-2026-keynote-agentic-enterprise',
    video: {
        name: VIDEO_TITLE,
        description: 'Salesforce\'s Dreamforce 2026 main keynote with Marc Benioff, featuring AI Force, Claude and Slack integrations, new Agentforce agents, a CRM reasoning model, Agent Fabric, Salesforce Guardian, and guests from Anthropic, NVIDIA, Siemens and Adecco.',
        thumbnailUrl: `https://i.ytimg.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
        embedUrl: `https://www.youtube.com/embed/${VIDEO_ID}`,
        uploadDate: '2026-09-15',
    },
    tocData: [
        { id: 'what-happened', label: 'What was announced' },
        { id: 'ai-force', label: 'What is AI Force?' },
        { id: 'agentforce-agents', label: 'New Agentforce agents' },
        { id: 'governance', label: 'Governing agents' },
        { id: 'guests', label: 'What the guests said' },
        { id: 'small-business', label: 'What it means for SMBs' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<h2 id="what-happened">What did Salesforce announce at the Dreamforce 2026 main keynote?</h2>
<p><strong>The Dreamforce 2026 main keynote introduced AI Force, Salesforce's plan to connect leading AI models such as Anthropic's Claude to Salesforce data, so people can run their CRM from Claude, Slack, or Salesforce's own Lightning interface instead of clicking through screens.</strong> Marc Benioff framed the whole show around the "agentic enterprise," built on four layers: data, apps and business semantics, agents, and a new live AI interface.</p>
<p>Alongside AI Force, Salesforce showed ready-made Agentforce agents for sales, service, IT, and operations, a CRM reasoning model, and two tools for controlling agents at scale: Agent Fabric and Salesforce Guardian. Guests included Anthropic CEO Dario Amodei, NVIDIA CEO Jensen Huang, Siemens CEO Roland Busch, and Adecco's CEO.</p>
<ul>
<li><strong>AI Force:</strong> AI models plus Salesforce data, delivered inside Claude Cowork, Slack, and Lightning, with an SDK to build more. In open beta at launch.</li>
<li><strong>Out-of-the-box agents:</strong> Hunter (outbound sales), Piper (inbound website), Casey (service), Page (IT and HR), Marshall (operations), and Fin (customer service).</li>
<li><strong>Governance:</strong> Agent Fabric registers and budgets agents from any provider; Guardian flags risky agents and unprotected data.</li>
<li><strong>The small-business takeaway:</strong> the stack is built for large Salesforce customers, but the pattern of grounded data, role-based agents, and approvals works at any size.</li>
</ul>
${yt(VIDEO_ID, VIDEO_TITLE)}
${videoCredit({ id: VIDEO_ID, title: VIDEO_TITLE, channel: 'Salesforce', channelUrl: 'https://www.youtube.com/@salesforce', uploadDate: 'September 15, 2026', views: '19.7 million' })}
<p>The keynote runs close to two hours. Below we pull out the announcements that matter and skip the stage banter.</p>

<h2 id="ai-force">What is Salesforce AI Force?</h2>
<p>AI Force is Salesforce's answer to a question Benioff kept returning to: AI models know the world, but they don't know your customers, pipeline, permissions, or processes. His argument is that models are "probabilistic," so they need to be grounded in the "deterministic" data and rules a business already keeps in its systems.</p>
${quote("Models alone cannot run the enterprise. Models alone are not going to show us what's possible.", 'Marc Benioff, Salesforce', VIDEO_ID, 1147, '19:07', VIDEO_TITLE)}
<p>According to the keynote, AI Force comes in several forms:</p>
<table><thead><tr><th>AI Force form</th><th>Where it runs</th><th>What was shown</th></tr></thead><tbody>
<tr><td>Claude version (called Claude Force or Claudeforce on stage)</td><td>Anthropic's Claude Cowork</td><td>Patrick Stokes ran a custom pipeline, service, and marketing "command center" he built by asking Claude</td></tr>
<tr><td>Slackforce</td><td>Slack</td><td>The same live interface inside Slack, plus Slack CRM and coding with agents in Slack</td></tr>
<tr><td>Agentforce Coworker</td><td>Salesforce Lightning</td><td>The live interface inside the existing Salesforce UI</td></tr>
<tr><td>SDK</td><td>Your own apps</td><td>Announced so customers can build their own AI Force apps</td></tr>
</tbody></table>
<p>Stokes said the Claude version ships as a Salesforce plugin for Claude that bundles the hard parts, such as MCP connections, zero data retention, and Claude skills, so a Claude Enterprise admin can switch it on for chosen users. At launch it was in open beta through AppExchange. Benioff also announced an "AI Force Max Edition" that bundles the functionality into one product, and repeated that Salesforce products use zero data retention, meaning customer data is not used to train models.</p>
<p>Salesforce also put internal numbers on stage: 7,000 employees using the Claude version, $500 million in pipeline last quarter credited to its Hunter and Piper agents, and 5 million service conversations resolved by its Casey agent. These are Salesforce's own figures.</p>

<h2 id="agentforce-agents">Which new Agentforce agents did Salesforce show?</h2>
<p>Stokes said Agentforce has more than 30,000 customers, and that Agent Script and Voice are now generally available. The bigger shift is that Salesforce admitted building agents is hard ("a new muscle"), so it now sells ready-made agents that business teams, not just IT, can deploy:</p>
<table><thead><tr><th>Agent</th><th>Job</th><th>Notable detail from the keynote</th></tr></thead><tbody>
<tr><td>Hunter</td><td>Outbound sales</td><td>Data vendors such as ZoomInfo, Demandbase, and Apollo built in</td></tr>
<tr><td>Piper</td><td>Inbound website pipeline</td><td>Demoed with Siemens; Salesforce said customers go live in 45 days or less</td></tr>
<tr><td>Casey</td><td>Customer service</td><td>Runs on help.salesforce.com</td></tr>
<tr><td>Page</td><td>IT and HR service</td><td>Internal help desk for employees</td></tr>
<tr><td>Marshall</td><td>Operations and supply chain</td><td>Learned SAP supplier onboarding in a sandbox in 90 minutes, then runs a library of "trusted actions"</td></tr>
<tr><td>Fin</td><td>Customer service</td><td>Welcomed as now part of Agentforce; Benioff said Salesforce had it running in about 12 days</td></tr>
</tbody></table>
<p>The Marshall demo was the most useful idea in the keynote. The agent explored a process in a safe sandbox, then turned what it learned into fixed, repeatable steps. In Salesforce's words, that is where "AI reasoning becomes deterministic execution." For repeatable work, you want the agent following the same checked path every time, not improvising.</p>
<p>Other product highlights: contact center as a service going live in October, a marketing campaign agent, a Commerce Cloud shopper agent, voice-to-text for field service forms, a self-updating CMDB, a Revenue Cloud renewals agent, proactive Tableau insights, and over 500 industry agents and actions. Salesforce also announced a CRM reasoning model for long-running agents, built by extending NVIDIA's Nemotron and, the company said, trained only on synthetic data.</p>

<h2 id="governance">How will companies govern AI agents, according to Salesforce?</h2>
<p>Rohan Kumar, Salesforce's new president of platform and engineering, walked through the data and control stack: Informatica to clean data, Data 360 to build "enterprise context" (including zero-copy access to data outside Salesforce), and Tableau for business semantics like what "churn" or "customer health" mean.</p>
<p>Then came two new products aimed at the people who will be nervous about all of this:</p>
<ul>
<li><strong>Agent Fabric</strong> (an evolution of MuleSoft) scans for agents across providers, including Azure, AWS, Google, and Agentforce, and keeps them in one registry. It shows each agent's grounding sources, latency, error rate, and policy violations, and uses "wallets" to set monthly budgets per agent.</li>
<li><strong>Salesforce Guardian</strong> (an evolution of Shield) focuses on agent identity, spotting agents that are "going rogue," and data security, such as finding data that is not classified or protected.</li>
</ul>
<p>The point is sound for any business: once you have more than one agent, someone needs to know what each one can touch, what it costs, and when it misbehaves.</p>

<h2 id="guests">What did Dario Amodei, Jensen Huang and the other guests say?</h2>
<p>Anthropic's Dario Amodei argued that the bottleneck is adoption, not capability. Even if models stopped improving today, he said, most of the value is still unused.</p>
${quote("Even if that were the case, we're making use of maybe only 5% or 10% of what the possible value of the technology is.", 'Dario Amodei, Anthropic', VIDEO_ID, 3035, '50:35', VIDEO_TITLE)}
<p>Siemens CEO Roland Busch made the same grounding argument from the factory floor, where a wrong answer has physical consequences.</p>
${quote('Hallucination does not really work on the shop floor, as you can imagine.', 'Roland Busch, Siemens', VIDEO_ID, 3898, '1:04:58', VIDEO_TITLE)}
<p>NVIDIA's Jensen Huang described open models, an open agent harness, and OpenShell, which he called a secure sandbox and runtime for deploying agents. He called safety "an engineering problem" and told the audience not to give up on AI if a first test disappoints.</p>
${quote("Engage the technology. Learn about it. If it doesn't work for you right away, don't give up on it.", 'Jensen Huang, NVIDIA', VIDEO_ID, 5088, '1:24:48', VIDEO_TITLE)}
<p>Adecco's CEO closed with the most concrete business result on stage: he said Adecco recruiters save 35 to 40% of their time and the company has placed 20,000 more people year to date, using a voice recruiting agent called Ada. He framed it as AI that happens "with people and not to people."</p>

<h2 id="small-business">What does the agentic enterprise mean for a small business?</h2>
<p>Most of what Salesforce showed assumes a Salesforce org, years of data in it, admins to configure it, and in the Claude version's case a Claude Enterprise plan. A 15-person HVAC company or a two-location clinic is not buying an "AI Force Max Edition" and waiting 45 days for an inbound agent.</p>
<p>But the ideas underneath are not enterprise-only. Here is how we would translate them:</p>
<table><thead><tr><th>Dreamforce idea</th><th>Enterprise version</th><th>Small-business version</th></tr></thead><tbody>
<tr><td>Ground AI in your source of truth</td><td>Data 360, Informatica, Tableau semantics</td><td>Connect the agent to your real calendar, CRM or spreadsheet, price list, and FAQs</td></tr>
<tr><td>Ready-made agents by role</td><td>Hunter, Piper, Casey, Page, Marshall</td><td>Start with one role: phone answering, inbound leads, or support email</td></tr>
<tr><td>Trusted actions for repeatable work</td><td>Marshall's learned SAP action library</td><td>Write down the exact steps for booking, quoting, or follow-up, and have the agent follow them</td></tr>
<tr><td>Meet people where they work</td><td>Claude, Slack, Lightning interfaces</td><td>Summaries in the inbox, text, or chat app your team already uses</td></tr>
<tr><td>Agent registry and budgets</td><td>Agent Fabric with wallets</td><td>A simple list of every agent, what it can access, and what it costs each month</td></tr>
<tr><td>Agent and data security</td><td>Salesforce Guardian, zero data retention</td><td>Scoped logins per agent, and a human approval on anything sensitive</td></tr>
</tbody></table>
<p>Two habits from the keynote are worth copying straight away. First, Benioff's story about a friend whose AI app always showed a wrong number: if an agent is not reading your actual data, do not trust its numbers. Second, Adecco's advice to start with the core workflow, not the easy demo, and measure the outcome.</p>
<p>For a wider view of the agent landscape, see <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>, <a href="/blog/ai-tools-for-solopreneurs">AI tools for solopreneurs</a>, and <a href="/blog/build-a-20x-company">how to build a 20x company</a> with a small team.</p>

<h2 id="dooza">Where does Dooza fit?</h2>
${doozaSummary}
<p>Think of Dooza as the agentic enterprise sized for a small business. Instead of assembling a data platform, agent builder, and governance suite, you start with the role you need and a Dooza engineer connects it to the tools you already use, through 1,000+ app integrations.</p>
<ul>
<li><a href="/workforce">Dooza Workforce</a> gives you ready-made AI employees for email, social media, SEO and AI visibility, lead generation and sales outreach, legal documents, and phone calls. They can start working the same day.</li>
<li><a href="/">Dooza Agents</a> are custom agents built and maintained by Dooza engineers, live in days, for workflows that don't fit an off-the-shelf role.</li>
<li>Done-for-you services include the <a href="/ai-receptionist">AI receptionist</a>, <a href="/ai-customer-support">AI customer support</a>, <a href="/workflow-automation">workflow automation</a>, and <a href="/generative-engine-optimization">AI visibility</a>.</li>
</ul>
<p>Like Salesforce, we think agents need guardrails: encrypted connections and your approval on anything sensitive. Pricing depends on the product; see <a href="/pricing">pricing</a>. For the bigger picture of how we work, read <a href="/blog/what-is-ai-native-service-company">what an AI-native service company is</a>.</p>
<p><strong>Want the agentic enterprise without the enterprise rollout?</strong> <a href="/book">Book a free 30-minute call to scope your pilot</a>. Start with a refundable pilot — 100% refund within 14 days.</p>`,
    faqData: [
        { question: 'What was announced at the Dreamforce 2026 main keynote?', answer: 'Salesforce introduced AI Force, which connects AI models like Claude to Salesforce data inside Claude Cowork, Slack, and Lightning. It also showed ready-made Agentforce agents, a CRM reasoning model, Agent Fabric for managing agents, and Salesforce Guardian for agent and data security.' },
        { question: 'What is Salesforce AI Force?', answer: 'AI Force is Salesforce\'s live AI interface that grounds frontier AI models in a company\'s Salesforce data, permissions, and workflows. It was shown in a Claude version, Slackforce, and Agentforce Coworker in Lightning, with an SDK announced and an open beta at launch.' },
        { question: 'What does "agentic enterprise" mean?', answer: 'In Salesforce\'s framing, an agentic enterprise runs AI agents across sales, service, marketing, and operations, built on four layers: connected data, apps and business semantics, agents, and an AI interface, with governance over all of it.' },
        { question: 'Which Agentforce agents were shown at Dreamforce 2026?', answer: 'Hunter for outbound sales, Piper for inbound website pipeline, Casey for customer service, Page for IT and HR service, Marshall for operations and supply chain, and Fin for customer service.' },
        { question: 'Can small businesses use the agentic enterprise approach?', answer: 'Yes, at a smaller scale. Connect an AI agent to your real data, start with one role such as phone answering or inbound leads, document the exact steps it should follow, and require human approval for anything sensitive.' },
        { question: 'How is Dooza different from Agentforce?', answer: 'Agentforce is built for companies running Salesforce. Dooza is an AI-native company that gives small businesses ready-made AI employees and custom agents connected to the tools they already use. Every product starts with a refundable pilot: 100% refund within 14 days.' },
    ],
};

export default post;
