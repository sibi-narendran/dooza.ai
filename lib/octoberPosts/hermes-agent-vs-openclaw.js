// Hermes Agent vs OpenClaw (October 2026 search-gap post).
// Targets: "hermes vs openclaw", "openclaw vs hermes", "hermes agent vs openclaw",
// "hermes agent review", "hermes agent pricing", "hermes agent use cases",
// "hermes agent vs claude code". Facts checked October 6, 2026.
// Dooza is a managed alternative to self-hosting either agent; never "built on" them.

import { src, yt, quote, xPost, pilotLine } from './helpers';

const HERMES_README = 'https://github.com/NousResearch/hermes-agent';
const OPENCLAW_README = 'https://github.com/openclaw/openclaw';

export default {
    id: 235,
    title: 'Hermes Agent vs OpenClaw (2026): Which Open-Source AI Agent Should You Run?',
    seoTitle: 'Hermes Agent vs OpenClaw (2026): Memory, Skills, Security, Cost',
    seoDescription: 'Hermes vs OpenClaw compared side by side: architecture, memory, self-improving skills, channels, models, security record, real costs, and which one fits your use case. Checked October 6, 2026.',
    excerpt: 'Hermes Agent (Nous Research) and OpenClaw are the two most popular open-source personal AI agents. Hermes is built around a learning loop that writes its own skills; OpenClaw is built around a gateway that puts one assistant in 30+ chat apps and on your devices. Here is a sourced, side-by-side comparison and a simple way to pick.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-06',
    readTime: '12 min read',
    readTimeMinutes: 12,
    category: 'Comparison',
    tags: ['Hermes Agent', 'OpenClaw', 'Hermes vs OpenClaw', 'Nous Research', 'Open-Source AI Agents', 'Self-Hosted AI Agent', 'Claude Code'],
    image: '/blog/hermes-agent-vs-openclaw.png',
    imageAlt: 'Watercolor illustration of a business owner at a crossroads between two friendly AI robots, one holding a notebook and a glowing scroll for memory and skills, the other surrounded by chat bubbles for messaging channels',
    slug: 'hermes-agent-vs-openclaw',
    video: {
        name: 'OpenClaw vs Hermes Agent: Which One Is Actually Better in 2026?',
        description: 'Tech With Tim installs and compares OpenClaw and Nous Research\'s Hermes Agent, covering setup, memory, skills, and which agent suits which kind of user.',
        thumbnailUrl: 'https://i.ytimg.com/vi/86Dfgazdu-0/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/86Dfgazdu-0',
        uploadDate: '2026-07-02',
    },
    tocData: [
        { id: 'short-answer', label: 'Short answer' },
        { id: 'comparison', label: 'Side-by-side table' },
        { id: 'hermes', label: 'What Hermes Agent is' },
        { id: 'openclaw', label: 'What OpenClaw is' },
        { id: 'memory-skills', label: 'Memory and skills' },
        { id: 'security', label: 'Security record' },
        { id: 'cost', label: 'Pricing and cost' },
        { id: 'claude-code', label: 'Hermes vs Claude Code' },
        { id: 'use-cases', label: 'Use-case picker' },
        { id: 'video', label: 'Video walkthrough' },
        { id: 'self-hosting', label: 'Self-hosting caveats' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Checked October 6, 2026, against both projects' GitHub repositories and official docs. Star counts and versions change weekly; re-check before you decide.</em></p>

<h2 id="short-answer">Hermes Agent vs OpenClaw: which should you use?</h2>
<p><strong>Pick Hermes Agent if you want one agent that learns your work and gets better at it. Pick OpenClaw if you want one assistant that lives in every chat app and device you use, with the biggest skill ecosystem.</strong> Both are free, MIT-licensed, self-hosted personal AI agents that work with any major model. Hermes, from Nous Research, is built around a learning loop that writes and refines its own skills. OpenClaw, from the OpenClaw Foundation, is built around a Gateway that connects one assistant to 30+ messaging channels and companion apps.</p>
<ul>
<li><strong>Hermes Agent</strong> is the better fit for a single power user or developer who runs repeat tasks and wants the agent to remember how it did them.</li>
<li><strong>OpenClaw</strong> is the better fit when reach matters: more channels, native device apps, shared team deployments, and the largest public skill registry (ClawHub).</li>
<li><strong>Cost is mostly model tokens and hosting</strong>, not software. Both are free; Hermes adds an optional Nous Portal subscription.</li>
<li><strong>Both run tools on real machines.</strong> OpenClaw has a public security record (a 2026 CVE and a malicious-skills campaign); Hermes ships stricter defaults. Either way, you own the ops.</li>
<li><strong>If you want the outcome without running an agent,</strong> a managed option like Dooza does the setup, hosting, and maintenance for you.</li>
</ul>

<h2 id="comparison">Hermes vs OpenClaw: side-by-side comparison</h2>
<table><thead><tr><th>Category</th><th>Hermes Agent</th><th>OpenClaw</th></tr></thead><tbody>
<tr><td>Maker</td><td>Nous Research</td><td>OpenClaw Foundation (independent 501(c)(3)); created by Peter Steinberger</td></tr>
<tr><td>License</td><td>MIT</td><td>MIT</td></tr>
<tr><td>Architecture</td><td>Python agent with TUI, a messaging gateway, and seven terminal backends (local, Docker, SSH, Singularity, Modal, Daytona, Vercel Sandbox)</td><td>Node.js Gateway as the local control plane; Control UI, CLI, TUI, and companion apps for macOS, iOS, Android, Windows, Linux</td></tr>
<tr><td>Memory</td><td>MEMORY.md + USER.md (small, curated), SQLite full-text search of past sessions, optional memory plugins</td><td>USER.md, MEMORY.md, daily notes, hybrid vector + keyword search, background "dreaming" consolidation</td></tr>
<tr><td>Skills</td><td>Creates and updates its own skills after tasks; optional human approval gate; agentskills.io standard</td><td>SKILL.md (AgentSkills spec); agent drafts skill proposals for operator approval; ClawHub public registry</td></tr>
<tr><td>Channels</td><td>29 platforms in the gateway docs (Telegram, Slack, WhatsApp, Teams, Signal, email, SMS and more)</td><td>34 channels in the docs, plus WebChat and device nodes (voice, camera, screen)</td></tr>
<tr><td>Models</td><td>Any: Nous Portal, OpenRouter, OpenAI, your own endpoint; switch with <code>hermes model</code></td><td>Hosted and local providers; Claude, Codex, and local models plug in as harnesses</td></tr>
<tr><td>Install</td><td>One-line installer (macOS, Linux, WSL2, native Windows), Android via Termux, Hermes Desktop app</td><td>One-line installer or npm (Node 24.16+), Docker, Nix; onboarding wizard</td></tr>
<tr><td>Security defaults</td><td>Command approval (smart/manual/off), hard-blocked destructive commands, DM pairing, hardened containers</td><td>DM pairing by default; tools run on the host for the main session unless you configure sandboxing</td></tr>
<tr><td>Software cost</td><td>Free; optional Nous Portal plans ($0, $20, $100, $200/mo)</td><td>Free</td></tr>
<tr><td>Best for</td><td>Developers and solo operators with repeat workflows</td><td>Multi-channel personal assistants, households, small teams, device control</td></tr>
</tbody></table>
<p>Sources: ${src(HERMES_README, 'Hermes Agent README')}, ${src('https://hermes-agent.nousresearch.com/docs/user-guide/messaging', 'Hermes messaging docs')}, ${src(OPENCLAW_README, 'OpenClaw README')}, ${src('https://docs.openclaw.ai/channels', 'OpenClaw channels docs')}, ${src('https://portal.nousresearch.com', 'Nous Portal plans')}, all checked October 6, 2026.</p>

<h2 id="hermes">What is Hermes Agent?</h2>
<p>Hermes Agent is an open-source, self-improving AI agent built by Nous Research. Its README calls it "the agent that grows with you" and describes a "built-in learning loop": it creates skills from experience, improves them during use, searches its own past conversations, and builds a model of who you are across sessions (${src(HERMES_README, 'GitHub')}).</p>
<p>A few facts worth knowing before you install it:</p>
<ul>
<li><strong>Traction.</strong> The repository had about 251,000 GitHub stars on October 6, 2026, and the latest release was v0.21.5 on September 24, 2026 (${src('https://github.com/NousResearch/hermes-agent/releases', 'releases')}). Nous Research launched it publicly in February 2026 (${src('https://charonhub.deeplearning.ai/hermes-agent-challenges-openclaw/', 'DeepLearning.AI, The Batch')}).</li>
<li><strong>Runs anywhere.</strong> It is not tied to your laptop. You can run it on a small VPS or serverless backends like Modal and Daytona that hibernate when idle, and talk to it from Telegram while it works on a cloud VM.</li>
<li><strong>Desktop app.</strong> Nous released Hermes Desktop, an MIT-licensed app for macOS, Windows, and Linux, on June 2, 2026, ending the terminal-only era (${src('https://the-decoder.com/nous-research-releases-hermes-desktop-an-open-source-ai-agent-for-every-platform/', 'The Decoder')}).</li>
<li><strong>Built-in OpenClaw migration.</strong> <code>hermes claw migrate</code> imports OpenClaw settings, memories, skills, and API keys, with a dry-run preview and a preset that skips secrets.</li></ul>

<h2 id="openclaw">What is OpenClaw?</h2>
<p>OpenClaw is an open-source AI assistant that runs on your own computer and meets you in the chat apps you already use. Its README lists Discord, iMessage, Slack, Teams, Telegram, WhatsApp, and 20+ more, plus native apps for macOS, iOS, Android, Windows, and Linux (${src(OPENCLAW_README, 'GitHub')}). We cover the basics in <a href="/blog/what-is-openclaw">What is OpenClaw?</a></p>
<ul>
<li><strong>Traction.</strong> About 391,000 GitHub stars on October 6, 2026; latest release 2026.9.8 on October 3, 2026.</li>
<li><strong>Governance.</strong> OpenClaw is run by the OpenClaw Foundation, an independent 501(c)(3). Its creator, Peter Steinberger, joined OpenAI in February 2026, and OpenAI is a donor, not an owner (${src('https://www.macstories.net/linked/openclaw-creator-peter-steinberger-joins-openai/', 'MacStories')}, ${src(OPENCLAW_README, 'README')}).</li>
<li><strong>Architecture.</strong> One Gateway is the control plane for sessions, tools, events, and channels. It can run as a personal assistant on a laptop or as a shared team deployment. Companion apps and "nodes" add voice, Canvas, camera, and screen actions.</li>
<li><strong>Models as plugins.</strong> Claude, Codex, and local models are swappable harnesses, so changing models does not change the rest of your setup.</li>
</ul>

<h2 id="memory-skills">How do memory and skills differ?</h2>
<p>This is the real difference between the two projects.</p>
<h3>Memory</h3>
<p><strong>Hermes keeps memory deliberately small.</strong> Two files, MEMORY.md (2,200 characters) and USER.md (1,375 characters), are injected into the prompt at session start. Everything else lives in a SQLite database with full-text search that the agent queries when it needs to recall an old conversation (${src('https://hermes-agent.nousresearch.com/docs/user-guide/features/memory', 'Hermes memory docs')}). That keeps every session lean.</p>
<p><strong>OpenClaw keeps memory broad.</strong> It writes USER.md, MEMORY.md, and dated daily notes in your workspace, searches them with hybrid vector and keyword search, flushes key facts to disk before a long conversation is compacted, and runs a background "dreaming" pass that promotes daily notes into long-term memory (${src('https://docs.openclaw.ai/concepts/memory', 'OpenClaw memory docs')}).</p>
<h3>Skills</h3>
<p><strong>Hermes writes its own skills.</strong> A <code>skill_manage</code> tool lets the agent create, update, and delete skills, which the docs call its "procedural memory". A background review can stage skill changes after a session, and you can require human approval before they land (${src('https://hermes-agent.nousresearch.com/docs/user-guide/features/skills', 'Hermes skills docs')}).</p>
<p><strong>OpenClaw proposes skills, then you approve.</strong> Its Skill Workshop drafts a proposal when the agent spots reusable work, instead of writing straight to SKILL.md. Its bigger advantage is ClawHub, the public skills registry, which now shows VirusTotal and static-analysis scan results before install (${src('https://docs.openclaw.ai/tools/skills', 'OpenClaw skills docs')}).</p>
<p>In short: Hermes compounds what <em>you</em> teach it; OpenClaw gives you more of what <em>everyone else</em> has built. DeepLearning.AI's comparison reached the same conclusion and noted that some users find Hermes less token-efficient (${src('https://charonhub.deeplearning.ai/hermes-agent-challenges-openclaw/', 'The Batch, May 2026')}).</p>

<h2 id="security">How do their security records compare?</h2>
<p>Both agents can run shell commands, read files, and send messages for you, so security is about defaults and track record.</p>
<p><strong>OpenClaw's record is public and mixed.</strong> CVE-2026-25253 affected versions before 2026.1.29: OpenClaw took a <code>gatewayUrl</code> value from a query string and connected to it automatically, sending a token without prompting (${src('https://nvd.nist.gov/vuln/detail/CVE-2026-25253', 'NVD')}). In February 2026, researchers at Koi Security found 341 malicious ClawHub skills, 335 of them from one campaign (ClawHavoc) that installed the Atomic Stealer macOS malware (${src('https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html', 'The Hacker News')}). The project has since added scan results to ClawHub, and its README still warns that tools run on the host for the main session unless you configure sandboxing.</p>
<p><strong>Hermes ships stricter defaults.</strong> Its docs describe eight security layers: smart command approval (an auxiliary model rates risk; uncertain cases go to you), a hard block on catastrophic commands even in "yolo" mode, DM pairing codes that expire in one hour, and Docker containers run with all capabilities dropped (${src('https://hermes-agent.nousresearch.com/docs/user-guide/security', 'Hermes security docs')}). Fewer public incidents also reflects a younger, smaller skill ecosystem, not immunity.</p>
<p>See our <a href="/blog/openclaw-vs-dooza">OpenClaw vs Dooza</a> breakdown for what a self-hosted setup asks of you.</p>

<h2 id="cost">How much does Hermes Agent cost compared with OpenClaw?</h2>
<p><strong>Both are free software.</strong> Your bill is the model you run, the machine it runs on, and any paid tools (search, voice, browser).</p>
<table><thead><tr><th>Cost line</th><th>Hermes Agent</th><th>OpenClaw</th></tr></thead><tbody>
<tr><td>Software license</td><td>Free (MIT)</td><td>Free (MIT)</td></tr>
<tr><td>Model access</td><td>Bring your own keys, or Nous Portal: Free $0, Plus $20/mo, Super $100/mo, Ultra $200/mo (credits included)</td><td>Bring your own keys or local models</td></tr>
<tr><td>Hosting</td><td>Laptop, VPS, or idle-hibernating serverless (Modal, Daytona)</td><td>Your computer, a server, or Docker</td></tr>
<tr><td>Hidden cost</td><td>Your time on setup, updates, and approvals</td><td>Same, plus vetting third-party skills</td></tr>
</tbody></table>
<p>Nous Portal prices are from ${src('https://portal.nousresearch.com', 'portal.nousresearch.com')}, checked October 6, 2026. Nous pitches the Portal as the simplest way to power Hermes:</p>
${xPost({
        text: 'Hermes is the agent that grows with you.<br><br>Nous Portal is the best way to power it: bundling the models, useful external tools, and the cloud agent itself under a single unified subscription with incredibly simple setup.<a href="https://t.co/4KFwhsReyA">https://t.co/4KFwhsReyA</a> <a href="https://t.co/cQOvpL0LXa">pic.twitter.com/cQOvpL0LXa</a>',
        name: 'Nous Research',
        handle: 'NousResearch',
        url: 'https://x.com/NousResearch/status/2079347632619577693',
        date: 'July 20, 2026',
    })}

<h2 id="claude-code">Hermes Agent vs Claude Code: what's the difference?</h2>
<p><strong>Claude Code is a coding agent; Hermes is a general personal agent.</strong> Anthropic describes Claude Code as "an agentic coding tool that reads your codebase, edits files, runs commands, and integrates with your development tools," available in the terminal, IDE, desktop app, and browser. Most surfaces need a Claude subscription or Anthropic Console account (${src('https://code.claude.com/docs/en/overview', 'Claude Code docs')}).</p>
<ul>
<li><strong>Use Claude Code</strong> to build and fix software: multi-file edits, tests, pull requests, CI reviews.</li>
<li><strong>Use Hermes</strong> for an always-on assistant across chat apps that works with any model provider and learns your recurring tasks.</li>
<li><strong>Use both</strong> if you code: Claude Code for the repo, Hermes or OpenClaw as the assistant in your chat apps.</li>
</ul>

<h2 id="use-cases">Which one fits your use case?</h2>
<table><thead><tr><th>If you want to…</th><th>Pick</th><th>Why</th></tr></thead><tbody>
<tr><td>Automate the same research, report, or ops task every week</td><td>Hermes</td><td>Self-written skills and cron jobs compound over time</td></tr>
<tr><td>Reach your assistant from iMessage, WhatsApp, Teams, and your phone</td><td>OpenClaw</td><td>Most channels plus native mobile and desktop apps</td></tr>
<tr><td>Run on a cheap cloud box that sleeps when idle</td><td>Hermes</td><td>Modal and Daytona backends hibernate between sessions</td></tr>
<tr><td>Install a ready-made skill for a popular app today</td><td>OpenClaw</td><td>ClawHub is the largest public registry (read skills before enabling)</td></tr>
<tr><td>Share one assistant across a small team or household</td><td>OpenClaw</td><td>Documented team deployments on one Gateway</td></tr>
<tr><td>Try the other one without starting over</td><td>Hermes</td><td><code>hermes claw migrate</code> imports OpenClaw memories and skills</td></tr>
<tr><td>Have AI answer customers, chase leads, or post content for a business, without running a server</td><td>Neither, self-hosted</td><td>A managed service such as <a href="/workforce">Dooza Workforce</a> fits better</td></tr>
</tbody></table>
<p>For the wider field, see <a href="/blog/openclaw-alternatives">OpenClaw alternatives</a>, and for the terminology, <a href="/blog/ai-agents-vs-agentic-ai">AI agents vs agentic AI</a>.</p>

<h2 id="video">Video: OpenClaw vs Hermes Agent, tested</h2>
<p>Tech With Tim set up both agents on real servers and ran the same jobs through each in a July 2026 video. His video description frames the stakes:</p>
<figure><blockquote><p>Six months ago everyone was running OpenClaw. Now Hermes Agent has surpassed it — 224 billion tokens per day vs OpenClaw's 186 billion.</p></blockquote><figcaption>— Tech With Tim, <a href="https://www.youtube.com/watch?v=86Dfgazdu-0" target="_blank" rel="noopener noreferrer">OpenClaw vs Hermes Agent: Which One Is Actually Better in 2026?</a> (video description, July 2, 2026)</figcaption></figure>
<p>The chapters worth jumping to are "The Key Difference - Skills" (3:30), "Hermes Agent Curator" (12:01), and "Security Issues". Treat usage figures as a snapshot: DeepLearning.AI reported in May 2026 that Hermes had moved ahead of OpenClaw on OpenRouter's daily-token leaderboard, and those rankings shift week to week.</p>
${yt('86Dfgazdu-0', 'OpenClaw vs Hermes Agent: Which One Is Actually Better in 2026?')}

<h2 id="self-hosting">What does self-hosting either agent really take?</h2>
<p>The installers take minutes. Running an agent safely for months is the real job. Before you connect either one to business accounts, plan for:</p>
<ol>
<li><strong>Isolation.</strong> Run it in Docker, a VM, or a separate machine, not on the laptop that holds your bank and email sessions.</li>
<li><strong>Least-privilege credentials.</strong> Give the agent its own email, calendar, and API keys with the narrowest scopes.</li>
<li><strong>Allowlists and pairing.</strong> Never let unknown senders talk to the agent; approve each pairing.</li>
<li><strong>Skill review.</strong> Treat every third-party skill as untrusted code and read it before enabling.</li>
<li><strong>Updates.</strong> Both projects ship releases every few weeks; CVE fixes only help if you install them.</li>
<li><strong>Spend caps.</strong> Set budget limits with your model provider; an agent loop can burn tokens overnight.</li>
<li><strong>Logs and approvals.</strong> Someone has to read what the agent did and approve sensitive actions.</li>
</ol>
<p>For a developer, this is a fun weekend. For a business owner, it is a part-time job.</p>

<h2 id="dooza">Where Dooza fits</h2>
<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses, from custom AI agents built and maintained by Dooza engineers to done-for-you AI receptionist, customer support and AI visibility services. Every product starts with a refundable pilot: 100% refund within 14 days.</strong></p>
<p>Dooza is a managed alternative to self-hosting Hermes or OpenClaw. It is not built on either one. If you want the outcome (emails answered, leads followed up, calls picked up, content posted) without choosing a framework, patching a gateway, or vetting skills, there are two ways in:</p>
<ul>
<li><strong><a href="/workforce">Dooza Workforce</a></strong> gives you ready-made AI employees for set roles: email, social media, SEO and AI visibility, lead generation and outreach, legal documents, and phone calls. Workforce employees can start working the same day.</li>
<li><strong><a href="/">Dooza Agents</a></strong> are custom AI agents built and maintained by Dooza engineers around your workflow, with 1,000+ app integrations. Custom agents are live in days.</li>
</ul>
<p>Either way you get encrypted connections and your approval on anything sensitive, and no server to babysit. Pricing depends on the product; see <a href="/pricing">pricing</a>. ${pilotLine}</p>
<p>The honest trade-off: if you enjoy tinkering, want full control of your data on your own hardware, or are building agents yourself, Hermes or OpenClaw is the better choice. If you want the work done, a managed option is faster.</p>
<p><a href="/book">Book a free pilot call</a> and a Dooza engineer will scope your pilot in 30 minutes.</p>

<h2 id="faq">Frequently asked questions</h2>
<h3>What is the difference between Hermes Agent and OpenClaw?</h3>
<p>Both are free, MIT-licensed, self-hosted AI agents. Hermes Agent, from Nous Research, centers on a learning loop that writes and improves its own skills and keeps a small, curated memory. OpenClaw, from the OpenClaw Foundation, centers on a Gateway that connects one assistant to 30+ chat channels and device apps, with the largest public skill registry, ClawHub.</p>
<h3>Is Hermes Agent better than OpenClaw?</h3>
<p>Neither is better for everyone. Hermes is better for developers and solo operators who repeat tasks and want the agent to learn them, and it ships stricter security defaults. OpenClaw is better when you need more channels, native mobile apps, team deployments, or ready-made community skills.</p>
<h3>How much does Hermes Agent cost?</h3>
<p>Hermes Agent is free and open source under the MIT license. You pay for the model and hosting you choose. Nous Research also sells an optional Nous Portal subscription, listed at $0, $20, $100, and $200 per month on October 6, 2026, which bundles model access and hosted tools.</p>
<h3>Can I migrate from OpenClaw to Hermes Agent?</h3>
<p>Yes. Hermes includes a <code>hermes claw migrate</code> command that detects an existing OpenClaw folder and imports settings, memories, skills, and API keys. It supports a dry run and a preset that migrates everything except secrets.</p>
<h3>Hermes Agent vs Claude Code: which should I use?</h3>
<p>Use Claude Code for software development: it reads your codebase, edits files, runs commands, and opens pull requests. Use Hermes Agent for a general, always-on personal assistant that works with any model provider across chat apps. Many developers use both.</p>
<h3>Is there a managed alternative to self-hosting Hermes or OpenClaw?</h3>
<p>Yes. Dooza is a managed alternative: Dooza Workforce provides ready-made AI employees, and Dooza Agents are custom agents built and maintained by Dooza engineers. Dooza is not built on Hermes or OpenClaw, and every Dooza product starts with a refundable pilot with a 100% refund within 14 days.</p>`,
    faqData: [
        { question: 'What is the difference between Hermes Agent and OpenClaw?', answer: 'Both are free, MIT-licensed, self-hosted AI agents. Hermes Agent, from Nous Research, centers on a learning loop that writes and improves its own skills and keeps a small, curated memory. OpenClaw, from the OpenClaw Foundation, centers on a Gateway that connects one assistant to 30+ chat channels and device apps, with the largest public skill registry, ClawHub.' },
        { question: 'Is Hermes Agent better than OpenClaw?', answer: 'Neither is better for everyone. Hermes is better for developers and solo operators who repeat tasks and want the agent to learn them, and it ships stricter security defaults. OpenClaw is better when you need more channels, native mobile apps, team deployments, or ready-made community skills.' },
        { question: 'How much does Hermes Agent cost?', answer: 'Hermes Agent is free and open source under the MIT license. You pay for the model and hosting you choose. Nous Research also sells an optional Nous Portal subscription, listed at $0, $20, $100, and $200 per month on October 6, 2026, which bundles model access and hosted tools.' },
        { question: 'Can I migrate from OpenClaw to Hermes Agent?', answer: 'Yes. Hermes includes a hermes claw migrate command that detects an existing OpenClaw folder and imports settings, memories, skills, and API keys. It supports a dry run and a preset that migrates everything except secrets.' },
        { question: 'Hermes Agent vs Claude Code: which should I use?', answer: 'Use Claude Code for software development: it reads your codebase, edits files, runs commands, and opens pull requests. Use Hermes Agent for a general, always-on personal assistant that works with any model provider across chat apps. Many developers use both.' },
        { question: 'Is there a managed alternative to self-hosting Hermes or OpenClaw?', answer: 'Yes. Dooza is a managed alternative: Dooza Workforce provides ready-made AI employees, and Dooza Agents are custom agents built and maintained by Dooza engineers. Dooza is not built on Hermes or OpenClaw, and every Dooza product starts with a refundable pilot with a 100% refund within 14 days.' },
    ],
};
