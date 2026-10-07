// n8n alternatives (October 2026 search-gap post). Targets "n8n alternative(s)",
// "n8n vs zapier", "is n8n free", "n8n pricing", "n8n self-hosted".
// All vendor prices checked October 6, 2026 on each vendor's pricing page.
import { src, yt, quote, xPost, pilotLine } from './helpers';

const CHECKED = 'checked October 6, 2026';

export default {
    id: 237,
    title: 'Best n8n Alternatives in 2026: Honest Picks for Builders, Marketers, Small Businesses, and Enterprise',
    seoTitle: 'Best n8n Alternatives 2026: Pricing & Self-Hosting',
    seoDescription: 'The best n8n alternatives in 2026 by buyer type: Zapier, Make, Activepieces, Pipedream, Gumloop, Lindy, Workato, Celigo, Windmill, and Node-RED, with sourced pricing, licenses, and hosting options.',
    excerpt: 'n8n is powerful, but its Sustainable Use License, execution-based cloud pricing, and self-hosting upkeep push many teams to look elsewhere. Here are the real alternatives by buyer type, with current sourced pricing, plus when a done-for-you service makes more sense than another tool.',
    author: 'Dooza Team',
    date: '2026-10-06',
    modifiedDate: '2026-10-07',
    readTime: '13 min read',
    readTimeMinutes: 13,
    category: 'Comparison',
    tags: ['n8n', 'n8n Alternatives', 'n8n vs Zapier', 'n8n Pricing', 'Workflow Automation', 'Zapier', 'Make', 'Activepieces', 'No-Code Automation'],
    image: '/blog/n8n-alternatives.png',
    imageAlt: 'Watercolor illustration of a small business owner at a desk comparing four branching workflow diagrams pinned to a board, with one path of connected email, calendar, chat, and spreadsheet nodes highlighted in green as the chosen route',
    slug: 'n8n-alternatives',
    video: {
        name: 'N8N vs Make vs Zapier (2025) - Honest Review',
        description: 'A short comparison of n8n, Make, and Zapier from the Simplified YouTube channel, covering how each one prices usage, connector counts, error handling, custom code, and which type of user each tool suits.',
        thumbnailUrl: 'https://i.ytimg.com/vi/IYV8OVFzq_c/maxresdefault.jpg',
        embedUrl: 'https://www.youtube.com/embed/IYV8OVFzq_c',
        uploadDate: '2025-01-18',
    },
    tocData: [
        { id: 'short-answer', label: 'Best n8n alternative' },
        { id: 'why-leave', label: 'Why people leave n8n' },
        { id: 'n8n-pricing', label: 'n8n pricing in 2026' },
        { id: 'comparison', label: 'Comparison table' },
        { id: 'tools', label: 'Alternatives, tool by tool' },
        { id: 'n8n-vs-zapier', label: 'n8n vs Zapier' },
        { id: 'is-n8n-free', label: 'Is n8n free?' },
        { id: 'video', label: 'n8n vs Make vs Zapier video' },
        { id: 'migration', label: 'Migration checklist' },
        { id: 'dooza', label: 'Where Dooza fits' },
        { id: 'faq', label: 'FAQ' },
    ],
    content: `<p><em>Updated October 7, 2026. Every price below links to the vendor's own pricing page (${CHECKED}). Third-party figures are marked "reported".</em></p>

<h2 id="short-answer">What is the best n8n alternative?</h2>
<p><strong>The best n8n alternative depends on who builds and who maintains the workflows.</strong> If you want open source you can self-host without n8n's Sustainable Use License limits, pick <strong>Activepieces</strong> (MIT-licensed core). If you want the easiest no-code tool with the most apps, pick <strong>Zapier</strong>. If you want visual power at a low price, pick <strong>Make</strong>. If you want an AI agent that does the work rather than a flowchart, look at <strong>Lindy</strong> or <strong>Gumloop</strong>. Enterprises with ERP-heavy integrations should shortlist <strong>Workato</strong> or <strong>Celigo</strong>. And if you do not want to build or maintain anything, a done-for-you service such as <a href="/workflow-automation">Dooza Workflow Automation</a> is the alternative to the tool itself.</p>
<ul>
<li><strong>Developer who self-hosts:</strong> Activepieces, Windmill, or Node-RED. You keep control of your data and servers, and the licenses are more permissive than n8n's.</li>
<li><strong>No-code marketer or ops person:</strong> Zapier (9,000+ app connections) or Make (cheapest paid entry point at $9/mo).</li>
<li><strong>AI-first team:</strong> Lindy or Gumloop, which are built around agents rather than trigger-action chains. Note that Relay.app, a common pick in older lists, shut down in September 2026.</li>
<li><strong>Small business that wants it done:</strong> a managed service where engineers build and maintain the workflows. That is what Dooza does.</li>
<li><strong>Enterprise iPaaS buyer:</strong> Workato or Celigo, both quote-based.</li>
</ul>

<h2 id="why-leave">Why do people look for n8n alternatives?</h2>
<p>n8n is a capable tool. Its GitHub repository shows more than 200,000 stars (${src('https://github.com/n8n-io/n8n', 'n8n on GitHub')}, ${CHECKED}), and its AI Agent node, MCP support, and code steps make it a favorite among technical builders. People still leave for four recurring reasons.</p>
<ol>
<li><strong>The license is "fair-code", not open source.</strong> n8n's ${src('https://github.com/n8n-io/n8n/blob/master/LICENSE.md', 'Sustainable Use License')} lets you use or modify the software "only for your own internal business purposes or for non-commercial or personal use." Agencies and SaaS companies that want to host n8n for clients or embed it in a paid product need a commercial agreement. Files marked ".ee" require an Enterprise license.</li>
<li><strong>Cloud pricing is per execution.</strong> Every run of a workflow counts, whatever its size. A workflow that polls every five minutes uses roughly 8,600 to 8,900 executions a month by n8n's own estimate (${src('https://n8n.io/pricing/', 'n8n pricing FAQ')}), which is more than three times the Starter plan's 2,500.</li>
<li><strong>Self-hosting is real ops work.</strong> The free Community Edition means you run the server, database, backups, upgrades, SSL, and security patches yourself. Features such as SSO, environments, and Git version control sit on paid plans.</li>
<li><strong>The learning curve is steep for non-developers.</strong> n8n leans on expressions, JSON, and JavaScript. That is a strength for engineers and a wall for a marketer who just wants leads to land in the CRM.</li>
</ol>

<h2 id="n8n-pricing">How much does n8n cost in 2026?</h2>
<p>n8n prices by monthly workflow executions. All plans include unlimited users, unlimited active workflows, and every integration. An execution is "a single run of your entire workflow," regardless of how many steps it has. Prices from ${src('https://n8n.io/pricing/', 'n8n.io/pricing')} (${CHECKED}), billed annually; monthly billing costs about 17% more:</p>
<table><thead><tr><th>n8n plan</th><th>Price</th><th>Executions / month</th><th>Hosting</th><th>Notes</th></tr></thead><tbody>
<tr><td>Community Edition</td><td>Free</td><td>No n8n limit (your server is the limit)</td><td>Self-hosted</td><td>Sustainable Use License; no SSO, environments, or Git control</td></tr>
<tr><td>Starter</td><td>€20/mo</td><td>2,500</td><td>n8n Cloud</td><td>5 concurrent executions, 5-minute max run time</td></tr>
<tr><td>Pro</td><td>€50/mo</td><td>10,000</td><td>n8n Cloud</td><td>Up to 50 concurrent executions, admin roles, workflow history</td></tr>
<tr><td>Business</td><td>€667/mo</td><td>40,000</td><td>Self-hosted only</td><td>SSO, environments, Git version control; extra 300,000 executions cost €4,000</td></tr>
<tr><td>Enterprise</td><td>Custom</td><td>Custom</td><td>Self-hosted or cloud</td><td>200+ concurrent executions, dedicated support with SLA</td></tr>
</tbody></table>
<p>The Cloud free trial includes 1,000 executions and a 180-second execution timeout. n8n moved to this model in August 2025, when it removed active-workflow limits from all plans:</p>
${xPost({
    text: 'Our pricing evolves to give you more freedom to build ⚡<br><br>Over the past few months, we’ve spoken with many of you about how you use n8n and realized we could make our pricing work better for the way you build. Our goal: to help you automate more, without limits getting in the… <a href="https://t.co/6lW7Dqae0M">pic.twitter.com/6lW7Dqae0M</a>',
    name: 'n8n.io',
    handle: 'n8n_io',
    url: 'https://x.com/n8n_io/status/1953417264037822721',
    date: 'August 7, 2025',
})}

<h2 id="comparison">n8n alternatives compared: pricing, license, hosting, AI</h2>
<table><thead><tr><th>Tool</th><th>Starting paid price (${CHECKED})</th><th>License</th><th>Self-host?</th><th>AI agent features</th><th>Best for</th></tr></thead><tbody>
<tr><td><strong>n8n</strong> (baseline)</td><td>€20/mo billed annually, 2,500 executions</td><td>Sustainable Use (fair-code)</td><td>Yes</td><td>AI Agent node, MCP client and server</td><td>Technical teams</td></tr>
<tr><td><strong>Zapier</strong></td><td>$19.99/mo billed annually, 750 tasks</td><td>Proprietary</td><td>No</td><td>Zapier Agents, Copilot, MCP</td><td>No-code users who need the most apps</td></tr>
<tr><td><strong>Make</strong></td><td>$9/mo for 5,000 credits</td><td>Proprietary</td><td>No</td><td>Make AI Agents (beta)</td><td>Visual builders on a budget</td></tr>
<tr><td><strong>Activepieces</strong></td><td>$20/mo flat, 10,000 credits</td><td>MIT core, separate enterprise license</td><td>Yes</td><td>AI pieces, MCP</td><td>Open-source self-hosters</td></tr>
<tr><td><strong>Pipedream</strong></td><td>$99/mo billed annually ($150 monthly), 10,000 credits</td><td>Proprietary platform</td><td>No</td><td>Integration layer and MCP tools for AI agents</td><td>Developers adding integrations to AI apps</td></tr>
<tr><td><strong>Gumloop</strong></td><td>From $37/mo, 20k credits</td><td>Proprietary</td><td>No (VPC optional on Enterprise)</td><td>Agent-first platform</td><td>AI-first ops and marketing teams</td></tr>
<tr><td><strong>Lindy</strong></td><td>$29.99/mo for 3,000 credits</td><td>Proprietary</td><td>No</td><td>AI assistant and agents, 1,500+ integrations</td><td>Individuals and teams wanting an AI teammate</td></tr>
<tr><td><strong>Windmill</strong></td><td>Free open source; Enterprise from $120/mo</td><td>AGPLv3 core</td><td>Yes</td><td>AI-assisted scripting</td><td>Engineers turning scripts into workflows</td></tr>
<tr><td><strong>Node-RED</strong></td><td>Free</td><td>Apache 2.0</td><td>Yes</td><td>Community nodes only</td><td>IoT and event-driven automations</td></tr>
<tr><td><strong>Workato</strong></td><td>Custom quote; reported $10,000–15,000/yr entry</td><td>Proprietary</td><td>No (on-prem agents available)</td><td>Agent Studio, Genies</td><td>Enterprise iPaaS</td></tr>
<tr><td><strong>Celigo</strong></td><td>Custom, priced by endpoints and flows</td><td>Proprietary</td><td>No</td><td>Agent Builder, MCP Server</td><td>NetSuite and ecommerce integrations</td></tr>
<tr><td><strong>Dooza Workflow Automation</strong></td><td>Refundable pilot (see <a href="/pricing">/pricing</a>)</td><td>Managed service</td><td>No, hosted for you</td><td>AI agents with human approvals</td><td>Small businesses that want it built and maintained</td></tr>
</tbody></table>
<p>Credits, tasks, and executions are not the same unit. A five-step workflow that runs once is one n8n execution but five Zapier tasks (Zapier counts "each successful action in a Zap" as a task, per its ${src('https://zapier.com/pricing', 'pricing FAQ')}). Compare on your real workflow volume, not the headline price.</p>

<h2 id="tools">The n8n alternatives, tool by tool</h2>

<h3>Zapier: easiest no-code option</h3>
<p>Zapier is the default trigger-and-action tool, with 9,000+ app connections. Its Free plan includes 100 tasks a month and two-step Zaps. Professional starts at $19.99/mo billed annually ($29.99 monthly) for 750 tasks; Team starts at $69/mo billed annually for 2,000 tasks (${src('https://zapier.com/pricing', 'Zapier pricing')}, ${CHECKED}). Zapier Agents is priced separately.</p>
<p><strong>Pick it if</strong> non-technical people will build and you need a niche app integration. <strong>Skip it if</strong> you run high-volume, many-step workflows, because per-task billing adds up fast.</p>

<h3>Make: most visual power per dollar</h3>
<p>Make (formerly Integromat) offers a visual canvas with routers, iterators, and error handlers. The Free plan gives up to 1,000 credits a month, two active scenarios, and a 15-minute minimum interval. Paid usage starts at $9/mo for 5,000 credits, with 1-minute scheduling and unlimited active scenarios (${src('https://www.make.com/en/pricing', 'Make pricing')}, ${CHECKED}). Make AI Agents is in beta.</p>
<p><strong>Pick it if</strong> you like n8n's visual style but do not want to host anything. <strong>Skip it if</strong> you need to self-host or keep data on your own servers.</p>

<h3>Activepieces: the open-source n8n alternative</h3>
<p>Activepieces is the closest like-for-like swap for self-hosters. Code outside its enterprise folders is under the MIT license (${src('https://github.com/activepieces/activepieces/blob/main/LICENSE', 'Activepieces license')}), which is more permissive than n8n's. Cloud plans: Free with 1,000 credits a month, Plus at $20/mo flat for 10,000 credits and up to 5 users, Team at $200/mo for 50,000 credits (${src('https://www.activepieces.com/pricing', 'Activepieces pricing')}, ${CHECKED}).</p>
<p><strong>Pick it if</strong> you want open source you can embed or resell more freely. <strong>Skip it if</strong> you rely on n8n's deeper library of community nodes and code-heavy patterns.</p>

<h3>Pipedream: integrations for developers and AI apps</h3>
<p>Pipedream now positions itself as "the integration layer for AI agents," with 3,000+ connectors and 10,000+ prebuilt tools. The Free plan covers development only; Startup costs $99/mo billed annually ($150/mo billed monthly) with 10,000 credits, at one credit per 30 seconds of compute (${src('https://pipedream.com/pricing', 'Pipedream pricing')}, checked October 7, 2026).</p>
<p><strong>Pick it if</strong> you are a developer adding user-facing integrations to your own product or agent. <strong>Skip it if</strong> you want a no-code tool for internal business workflows.</p>

<h3>Gumloop: agent-first automation</h3>
<p>Gumloop has shifted from workflows (now labeled "legacy" on its pricing page) to AI agents that work across your tools. Pro starts at $37/mo with 20k credits and a 14-day trial; Enterprise is custom (${src('https://www.gumloop.com/pricing', 'Gumloop pricing')}, ${CHECKED}).</p>
<p><strong>Pick it if</strong> your team wants agents for research, lead qualification, or content tasks. <strong>Skip it if</strong> you need deterministic, auditable step-by-step flows.</p>

<h3>Lindy: an AI teammate instead of a flowchart</h3>
<p>Lindy is an AI assistant that handles inbox, meetings, and tasks across 1,500+ integrations. The Free tier gives $50 in credits for 7 days; Team starts at $29.99/mo for 3,000 credits per active user (${src('https://www.lindy.ai/pricing', 'Lindy pricing')}, ${CHECKED}).</p>
<p><strong>Pick it if</strong> your "workflows" are really personal assistant work. <strong>Skip it if</strong> you need backend data syncs between systems.</p>
<p><em>About Relay.app:</em> many older n8n-alternative lists recommend it. Relay.app's site now states it shut down in September 2026 (${src('https://www.relay.app/', 'relay.app')}, ${CHECKED}), so remove it from your shortlist.</p>

<h3>Windmill and Node-RED: open source for engineers</h3>
<p><strong>Windmill</strong> turns Python, TypeScript, Go, and SQL scripts into workflows and internal apps. Its core is AGPLv3 (${src('https://github.com/windmill-labs/windmill/blob/main/LICENSE', 'Windmill license')}); the open-source edition is free and Enterprise starts at $120/mo (${src('https://www.windmill.dev/pricing', 'Windmill pricing')}, ${CHECKED}). <strong>Node-RED</strong> is a free, Apache 2.0 flow-based tool (${src('https://github.com/node-red/node-red', 'Node-RED on GitHub')}), strongest for IoT, hardware, and event streams.</p>
<p><strong>Pick them if</strong> you have engineers and want full code control. <strong>Skip them if</strong> nobody on the team writes code.</p>

<h3>Workato and Celigo: enterprise iPaaS</h3>
<p><strong>Workato</strong> does not publish prices; procurement data from Vendr puts entry-level Standard deals around $10,000–15,000 a year, as reported by ${src('https://automationatlas.io/answers/workato-pricing-explained-2026/', 'Automation Atlas')}. <strong>Celigo</strong> prices by endpoints and flows rather than tasks, across Standard, Professional, and Enterprise editions, with a 30-day free trial (${src('https://www.celigo.com/pricing/', 'Celigo pricing')}, ${CHECKED}).</p>
<p><strong>Pick them if</strong> you need governed integrations across NetSuite, Salesforce, SAP, or Workday. <strong>Skip them if</strong> you are a small business, because the cost and rollout are sized for IT departments.</p>

<h2 id="n8n-vs-zapier">n8n vs Zapier: which should you choose?</h2>
<p><strong>Choose n8n if you are technical, run high volumes, or need to self-host. Choose Zapier if non-developers will build and you need the widest app coverage.</strong></p>
<table><thead><tr><th></th><th>n8n</th><th>Zapier</th></tr></thead><tbody>
<tr><td>Billing unit</td><td>Execution (whole workflow run)</td><td>Task (each successful action)</td></tr>
<tr><td>Entry paid plan</td><td>€20/mo annually, 2,500 executions</td><td>$19.99/mo annually, 750 tasks</td></tr>
<tr><td>Free option</td><td>Self-hosted Community Edition</td><td>Free plan, 100 tasks/mo, two-step Zaps</td></tr>
<tr><td>Self-hosting</td><td>Yes</td><td>No</td></tr>
<tr><td>Apps</td><td>Built-in nodes plus HTTP and code</td><td>9,000+ app connections</td></tr>
<tr><td>Learning curve</td><td>Steeper (JSON, expressions, code)</td><td>Gentle</td></tr>
</tbody></table>
<p>For long, multi-step workflows, n8n is usually cheaper because ten steps still count as one execution. For short two-step automations run by a marketer, Zapier is faster to set up. More options for marketers are in our <a href="/blog/marketing-automation-tools">marketing automation tools</a> guide.</p>

<h2 id="is-n8n-free">Is n8n free?</h2>
<p><strong>Yes, if you self-host the Community Edition for your own internal or personal use.</strong> n8n does not cap executions or workflows on it. You still pay for the server and your time to run it, and the Sustainable Use License does not allow you to sell n8n as a hosted service to others. n8n Cloud is not free: it has a trial with 1,000 executions, then paid plans from €20/mo billed annually (${src('https://n8n.io/pricing/', 'n8n pricing')}, ${CHECKED}).</p>
<p>When self-hosting, plan for a VPS or container host, Postgres, backups, monitoring, and a routine for updates. If nobody owns that list, "free" becomes expensive the first time a workflow fails silently.</p>

<h2 id="video">How do n8n, Make, and Zapier compare in practice?</h2>
<p>For a quick side-by-side, the Simplified channel's comparison sums up the split most buyers land on:</p>
${quote('Zapier is a good starting point for non-tech users who are exploring automation. Make is more robust for building advanced scenarios for yourself, and n8n is even more advanced for the people who are more developed in code.', 'Simplified', 'IYV8OVFzq_c', 61, '1:01', 'N8N vs Make vs Zapier (2025) - Honest Review')}
<p>The video also explains the billing difference covered above: n8n charges per workflow execution, while Make and Zapier charge per operation or action. It was published in January 2025, so use the pricing table in this guide for current numbers.</p>
${yt('IYV8OVFzq_c', 'N8N vs Make vs Zapier (2025) - Honest Review')}
<p>The takeaway for buyers: the tool matters less than who designs, tests, and maintains the automation. That is the real choice behind every n8n alternative.</p>

<h2 id="migration">How do you migrate off n8n? A 7-step checklist</h2>
<ol>
<li><strong>Export everything.</strong> Download each workflow as JSON and list every credential, webhook URL, and schedule.</li>
<li><strong>Inventory by value.</strong> Rank workflows by business impact and monthly runs. Retire the ones nobody uses.</li>
<li><strong>Map nodes to the new tool.</strong> Check every app, Code node, and HTTP request has an equivalent. Code nodes are the usual blocker.</li>
<li><strong>Estimate the new bill.</strong> Convert executions into the new unit (tasks, credits, operations) using real run counts.</li>
<li><strong>Rebuild and run in parallel.</strong> Keep n8n running while the new version processes the same inputs, and compare outputs.</li>
<li><strong>Swap webhooks and triggers.</strong> Point forms, apps, and payment providers at the new endpoints, one workflow at a time.</li>
<li><strong>Add monitoring.</strong> Set error alerts and name an owner for each workflow before you shut n8n down.</li>
</ol>
<p>For a broader view of what to automate first, see <a href="/blog/automate-business-processes">how to automate business processes</a> and our roundup of <a href="/blog/best-ai-agentic-ai-tool-for-automation-in-usa">AI agentic tools for automation</a>.</p>

<h2 id="dooza">Where does Dooza fit?</h2>
<p><strong>Dooza is an AI-native company that builds AI products and services for small businesses, from the Dooza Workforce app to the Dooza Agents platform. Every product starts with a refundable pilot: 100% refund within 14 days.</strong></p>
<p><a href="/workflow-automation">Dooza Workflow Automation</a> is a Dooza Agents service: Dooza engineers build and maintain AI-powered workflows across 1,000+ app integrations. You get a visual workflow builder, built-in AI agents that classify, draft, decide, and act, human-in-the-loop approvals for sensitive steps, full run tracing, and custom code when visual steps are not enough. Dooza engineers can migrate your existing workflows for you during the pilot. For work that goes beyond a workflow, <a href="/">Dooza Agents</a> builds custom AI agents. Security is simple: encrypted connections and your approval on anything sensitive.</p>
<p><strong>The honest trade-off:</strong> if you enjoy building automations and have the time, a tool is cheaper. Activepieces, Make, or self-hosted n8n will cost less than any done-for-you service. Dooza fits when nobody on your team should be the automation engineer, and you would rather pay for working, maintained workflows than for another login. Pricing depends on the product; see <a href="/pricing">/pricing</a>. ${pilotLine}</p>
<p>Comparing agent platforms too? Read our <a href="/blog/openclaw-alternatives">OpenClaw alternatives</a> guide.</p>

<h2 id="faq">Frequently asked questions</h2>
<h3>What is the best alternative to n8n?</h3>
<p>It depends on your team. Activepieces is the best open-source, self-hostable alternative; Zapier is the easiest no-code option; Make offers the most visual power per dollar; Workato and Celigo suit enterprises; and Dooza Workflow Automation suits small businesses that want engineers to build and maintain the workflows for them.</p>
<h3>Is n8n free?</h3>
<p>The self-hosted n8n Community Edition is free for internal business, personal, or non-commercial use under the Sustainable Use License, with no n8n execution limits. n8n Cloud has a free trial with 1,000 executions, then paid plans from €20/mo billed annually (checked October 6, 2026).</p>
<h3>How much does n8n cost?</h3>
<p>As of October 6, 2026, n8n Cloud Starter is €20/mo billed annually for 2,500 executions, Pro is €50/mo for 10,000 executions, the self-hosted Business plan is €667/mo for 40,000 executions, and Enterprise is custom. Monthly billing costs about 17% more.</p>
<h3>Is n8n better than Zapier?</h3>
<p>n8n is better for technical teams, high-volume multi-step workflows, and self-hosting, because it bills per workflow execution rather than per action. Zapier is better for non-developers and for its 9,000+ app connections.</p>
<h3>Is n8n open source?</h3>
<p>Not by the OSI definition. n8n is "fair-code" under the Sustainable Use License: the source is public and free to self-host for internal use, but you cannot offer it commercially to others without an agreement. Activepieces (MIT core), Windmill (AGPLv3), and Node-RED (Apache 2.0) are open-source alternatives.</p>
<h3>Can someone build and maintain my automations for me?</h3>
<p>Yes. Dooza Workflow Automation is a done-for-you service where Dooza engineers build and maintain AI-powered workflows across 1,000+ app integrations. Every Dooza product starts with a refundable pilot, 100% refund within 14 days.</p>

<h2 id="get-started">Stop maintaining automations yourself</h2>
<p>A Dooza engineer scopes your workflows on a free 30-minute call, then builds them as a refundable pilot — 100% refund within 14 days. <a href="/book">Book a free pilot call</a> or see how <a href="/workflow-automation">Dooza Workflow Automation</a> works.</p>`,
    faqData: [
        { question: 'What is the best alternative to n8n?', answer: 'It depends on your team. Activepieces is the best open-source, self-hostable alternative; Zapier is the easiest no-code option; Make offers the most visual power per dollar; Workato and Celigo suit enterprises; and Dooza Workflow Automation suits small businesses that want engineers to build and maintain the workflows for them.' },
        { question: 'Is n8n free?', answer: 'The self-hosted n8n Community Edition is free for internal business, personal, or non-commercial use under the Sustainable Use License, with no n8n execution limits. n8n Cloud has a free trial with 1,000 executions, then paid plans from €20/mo billed annually (checked October 6, 2026).' },
        { question: 'How much does n8n cost?', answer: 'As of October 6, 2026, n8n Cloud Starter is €20/mo billed annually for 2,500 executions, Pro is €50/mo for 10,000 executions, the self-hosted Business plan is €667/mo for 40,000 executions, and Enterprise is custom. Monthly billing costs about 17% more.' },
        { question: 'Is n8n better than Zapier?', answer: 'n8n is better for technical teams, high-volume multi-step workflows, and self-hosting, because it bills per workflow execution rather than per action. Zapier is better for non-developers and for its 9,000+ app connections.' },
        { question: 'Is n8n open source?', answer: 'Not by the OSI definition. n8n is "fair-code" under the Sustainable Use License: the source is public and free to self-host for internal use, but you cannot offer it commercially to others without an agreement. Activepieces (MIT core), Windmill (AGPLv3), and Node-RED (Apache 2.0) are open-source alternatives.' },
        { question: 'Can someone build and maintain my automations for me?', answer: 'Yes. Dooza Workflow Automation is a done-for-you service where Dooza engineers build and maintain AI-powered workflows across 1,000+ app integrations. Every Dooza product starts with a refundable pilot, 100% refund within 14 days.' },
    ],
};
