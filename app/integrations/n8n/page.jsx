// /integrations/n8n: the Dooza Crew community node for n8n. Answer-first, facts from the published package
// (npm n8n-nodes-dooza-crew 0.1.0, published 2026-10-28 with provenance) and the node README in
// github.com/Dooza-ai/n8n-nodes-dooza-crew. Checked 2026-10-29.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { crewSignupUrl } from '@/lib/crewUrl';
import { SITE_URL } from '@/lib/site';

const PATH = '/integrations/n8n';
const SOURCE = 'integrations_n8n';
const TITLE = 'Dooza Crew n8n Node: Give n8n Workflows AI Employees';
const DESCRIPTION =
    'Official n8n community node for Dooza Crew: send a task to an AI agent from any n8n workflow and use its answer in the next step. Install n8n-nodes-dooza-crew, add your dz_ API key, done.';
const UPDATED_LABEL = 'October 29, 2026';
const CREW = crewSignupUrl(SOURCE);
const BOOK = `/book?utm_source=website&utm_medium=page&utm_content=${SOURCE}`;
const NPM = 'https://www.npmjs.com/package/n8n-nodes-dooza-crew';
const GITHUB = 'https://github.com/Dooza-ai/n8n-nodes-dooza-crew';
const OPENAPI = 'https://crew.dooza.ai/v1/openapi.json';
const A = 'font-semibold text-primary-700 underline';

const faqItems = [
    {
        question: 'What does the Dooza Crew n8n node do?',
        answer:
            'It lets an n8n workflow hand a task to an agent in your Dooza Crew and use the answer in the next node. Two operations: Run Task (send a task to an agent and, by default, wait for the result) and Get Task (fetch the status and result of a task by id). The node can also be attached to the n8n AI Agent node as a tool.',
    },
    {
        question: 'How do I install the Dooza Crew node in n8n?',
        answer:
            'On a self-hosted n8n, install the community node package n8n-nodes-dooza-crew from Settings > Community Nodes using the n8n installation guide (https://docs.n8n.io/integrations/community-nodes/installation/). The node appears in the node panel as Dooza Crew.',
    },
    {
        question: 'Where do I get the Dooza Crew API key?',
        answer:
            'Sign in at crew.dooza.ai (free to try, no card needed), open the account menu at the top right and choose API key (crew.dooza.ai/bridge/api-key). The key starts with dz_. In n8n, create a Dooza Crew API credential, paste the key and leave Base URL as https://crew.dooza.ai.',
    },
    {
        question: 'What happens if the agent takes longer than the workflow can wait?',
        answer:
            'Run Task polls the task by default (Poll Interval 5 seconds) and stops after the Timeout you set (600 seconds by default). On timeout the node returns the latest status with timedOut: true, so your workflow can branch or alert instead of hanging.',
    },
    {
        question: 'Does the node need my own OpenAI or model keys?',
        answer:
            'No. The agents run inside your Dooza Crew; the node only needs your Crew API key. You do not configure model providers in n8n.',
    },
    {
        question: 'Is the Dooza Crew node free?',
        answer:
            'The node is open source (MIT) and free to install. Using it consumes your Crew account: Dooza Crew is free to try with no card needed, and agents ask you to Approve, Edit or Reject before they send or pay for anything.',
    },
    {
        question: 'Can I use the Dooza Crew node on n8n Cloud?',
        answer:
            'Community nodes are installed on self-hosted n8n. On n8n Cloud, use the HTTP Request node against the Crew API instead; the OpenAPI description is at crew.dooza.ai/v1/openapi.json.',
    },
];

const steps = [
    {
        name: 'Install the community node package',
        text: 'On self-hosted n8n open Settings > Community Nodes, install n8n-nodes-dooza-crew, and reload the editor. The node appears as Dooza Crew.',
    },
    {
        name: 'Create the Crew API key',
        text: 'Sign in at crew.dooza.ai, open the account menu and choose API key. Copy the key that starts with dz_. Dooza Crew is free to try and needs no card.',
    },
    {
        name: 'Add the credential in n8n',
        text: 'New credential > Dooza Crew API, paste the key, leave Base URL as https://crew.dooza.ai. The key is sent as an Authorization: Bearer header on every request.',
    },
    {
        name: 'Add the Dooza Crew node to a workflow',
        text: 'Put it after any trigger, choose Run Task, set the agent (master for your main agent) and write the task in plain words. Use expressions to pass data in, for example: Draft a reply to this lead: {{ $json.message }}.',
    },
    {
        name: 'Use the answer in the next node',
        text: 'The output carries the task id, status and the agent answer. Send it by Gmail, write it to a sheet, post it to Slack, or feed it to another AI step.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'Dooza Crew n8n node',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'n8n',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        softwareVersion: '0.1.1',
        datePublished: '2026-10-28',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', description: 'Community node, MIT licence; Dooza Crew itself is free to try with no card needed.' },
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'How to give an n8n workflow a Dooza Crew AI agent',
        totalTime: 'PT10M',
        step: steps.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.name, text: s.text })),
    },
];

export const metadata = {
    title: `${TITLE} (2026)`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: `${TITLE} (2026)`, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'article' },
};

export default function N8nIntegrationPage() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:pt-32">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Integrations · n8n</p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
                    Dooza Crew for n8n: give any workflow an AI employee
                </h1>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    The <strong>Dooza Crew</strong> community node hands a task to an agent in your Crew from any n8n workflow and returns
                    the agent&rsquo;s answer to the next node. Package: <code className="rounded bg-slate-100 px-1">{'n8n-nodes-dooza-crew'}</code> on npm,
                    MIT licensed, published 28 October 2026, latest 0.1.1 on 29 October 2026.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href={CREW} data-source={SOURCE} className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">
                        Try Dooza Crew free
                    </a>
                    <a href={NPM} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:border-slate-400">
                        Install from npm
                    </a>
                </div>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">What the node does</h2>
                <ul className="mt-4 space-y-3 text-slate-700">
                    <li>
                        <strong>Run Task</strong>: send a task to an agent in your crew. With <em>Wait for Result</em> on (the default) the node waits until the
                        agent finishes and returns its answer; with it off it returns the task id at once.
                    </li>
                    <li>
                        <strong>Get Task</strong>: fetch the status and result of a task by id.
                    </li>
                    <li>
                        <strong>Tool for the n8n AI Agent</strong>: the node can also be attached to the AI Agent node as a tool.
                    </li>
                    <li>
                        <strong>Options</strong>: Poll Interval (seconds between status checks, default 5) and Timeout (seconds, default 600). On timeout the node
                        returns the latest status with <code className="rounded bg-slate-100 px-1">timedOut: true</code>.
                    </li>
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">How to set it up</h2>
                <ol className="mt-4 space-y-4">
                    {steps.map((s, i) => (
                        <li key={s.name} className="rounded-xl border border-slate-200 bg-white p-4">
                            <p className="font-semibold text-slate-900">
                                {i + 1}. {s.name}
                            </p>
                            <p className="mt-1 text-slate-700">{s.text}</p>
                        </li>
                    ))}
                </ol>
                <p className="mt-4 text-sm text-slate-600">
                    The key path in the Crew app is account menu (top right) → <strong>API key</strong> (
                    <a className={A} href="https://crew.dooza.ai/bridge/api-key" target="_blank" rel="noopener noreferrer">
                        crew.dooza.ai/bridge/api-key
                    </a>
                    ), and it starts with <code className="rounded bg-slate-100 px-1">dz_</code>. API description:{' '}
                    <a className={A} href={OPENAPI} target="_blank" rel="noopener noreferrer">
                        OpenAPI JSON
                    </a>
                    .
                </p>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">Example workflow</h2>
                <p className="mt-3 text-slate-700">
                    Schedule Trigger (every morning) → <strong>Dooza Crew: Run Task</strong> (agent <code className="rounded bg-slate-100 px-1">master</code>, task
                    &ldquo;Find 5 new reviews of our business and summarize them&rdquo;) → Gmail: send the answer to yourself. Any trigger works the same way: a form, a
                    webhook, a new row in a sheet, a support email.
                </p>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">How it fits with n8n&rsquo;s own AI nodes</h2>
                <p className="mt-3 text-slate-700">
                    n8n&rsquo;s AI Agent node runs a model you configure, inside the workflow. The Dooza Crew node calls a team of agents that browse the web, keep files
                    and do a multi-step job, then returns the result to the workflow. Use n8n for the plumbing (triggers, apps, delivery) and Crew for the work that needs
                    judgement and tools. Nothing leaves your Crew without your approval: agents ask you to Approve, Edit or Reject before they send or pay for anything.
                </p>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">Links</h2>
                <ul className="mt-3 space-y-2 text-slate-700">
                    <li>
                        npm package: <a className={A} href={NPM} target="_blank" rel="noopener noreferrer">n8n-nodes-dooza-crew</a>
                    </li>
                    <li>
                        Source: <a className={A} href={GITHUB} target="_blank" rel="noopener noreferrer">github.com/Dooza-ai/n8n-nodes-dooza-crew</a>
                    </li>
                    <li>
                        n8n community nodes guide:{' '}
                        <a className={A} href="https://docs.n8n.io/integrations/community-nodes/installation/" target="_blank" rel="noopener noreferrer">
                            docs.n8n.io installation guide
                        </a>
                    </li>
                    <li>
                        Crew sign-up: <a className={A} href={CREW}>crew.dooza.ai</a> (free to try, no card needed)
                    </li>
                </ul>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">Questions</h2>
                <div className="mt-4">
                    <FAQAccordion items={faqItems} />
                </div>

                <section className="mt-14 rounded-2xl bg-slate-900 p-7 text-white">
                    <h2 className="text-2xl font-bold">Want a workflow built, not just connected?</h2>
                    <p className="mt-2 text-slate-200">
                        We build and run AI agents for small businesses, and we keep them working. Tell us the job on a free 30-minute call, or start with Crew
                        yourself in the next five minutes.
                    </p>
                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                        <a href={CREW} data-source={SOURCE} className="rounded-lg bg-white px-5 py-3 font-semibold text-slate-900">
                            Try Dooza Crew free
                        </a>
                        <a href={BOOK} className="rounded-lg border border-white/40 px-5 py-3 font-semibold text-white">
                            Book a free call
                        </a>
                    </div>
                </section>

                <p className="mt-8 text-sm text-slate-500">
                    Package and node behaviour checked on npm and in the node source on {UPDATED_LABEL}. If a later version changes an option, the README on npm is the
                    source of truth.
                </p>

                {schemas.map((s, i) => (
                    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
                ))}
            </main>
            <Footer />
        </>
    );
}
