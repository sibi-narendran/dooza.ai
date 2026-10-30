// /integrations: hub for the ways software can hand work to Dooza Crew. Only surfaces that exist: the Crew Task API
// (OpenAPI at crew.dooza.ai/v1/openapi.json, 3 endpoints) and the n8n community node. Checked 2026-10-30: unauthenticated
// GET /v1/tasks -> 401 {"error":{"message":"missing API key"}}; keyed GET /v1/tasks?limit=1 -> id, agent, status, result,
// created_at, updated_at. Add a row here only when a new surface is live.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { crewSignupUrl } from '@/lib/crewUrl';
import { SITE_URL } from '@/lib/site';

const PATH = '/integrations';
const SOURCE = 'integrations_hub';
const TITLE = 'Dooza Crew Integrations: API and n8n Node';
const DESCRIPTION =
    'Hand a task to a Dooza Crew AI agent from your own software: a REST Task API (OpenAPI, Bearer dz_ key) and an open-source n8n community node. Free to try, no card needed.';
const UPDATED_LABEL = 'October 30, 2026';
const CREW = crewSignupUrl(SOURCE);
const BOOK = `/book?utm_source=website&utm_medium=page&utm_content=${SOURCE}`;
const OPENAPI = 'https://crew.dooza.ai/v1/openapi.json';
const NPM = 'https://www.npmjs.com/package/n8n-nodes-dooza-crew';
const A = 'font-semibold text-primary-700 underline';
const CODE = 'rounded bg-slate-100 px-1';

const endpoints = [
    { method: 'POST', path: '/v1/tasks', what: 'Create a task. Body: text (required, up to 20,000 characters) and agent (optional, default master). Returns 202 with the task.' },
    { method: 'GET', path: '/v1/tasks/{id}', what: 'Get one task. Poll until status is completed or failed, then read result.' },
    { method: 'GET', path: '/v1/tasks', what: 'List recent tasks. Query limit from 1 to 100, default 20.' },
];

const surfaces = [
    {
        name: 'Crew Task API',
        href: OPENAPI,
        status: 'Live',
        what: 'REST over HTTPS with a Bearer key. Use it from your own code or any tool that can send an HTTP request with a header.',
    },
    {
        name: 'n8n community node',
        href: '/integrations/n8n',
        status: 'Live on npm (n8n verification under review)',
        what: 'n8n-nodes-dooza-crew: Run Task and Get Task inside a workflow, or attach it to the n8n AI Agent node as a tool.',
    },
];

const CURL_CREATE = `curl -X POST https://crew.dooza.ai/v1/tasks \\
  -H "Authorization: Bearer dz_YOUR_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"agent": "master", "text": "Summarize the 5 newest reviews of our business"}'`;

const CURL_GET = `curl https://crew.dooza.ai/v1/tasks/task_0123456789abcdef01234567 \\
  -H "Authorization: Bearer dz_YOUR_KEY"`;

const faqItems = [
    {
        question: 'Does Dooza Crew have an API?',
        answer:
            'Yes. The Crew Task API lets your software send a task to one of your Crew agents and read the result. It has three endpoints: POST /v1/tasks, GET /v1/tasks/{id} and GET /v1/tasks. The OpenAPI description is at crew.dooza.ai/v1/openapi.json.',
    },
    {
        question: 'How do I get a Dooza Crew API key?',
        answer:
            'Sign in at crew.dooza.ai (free to try, no card needed), open the account menu at the top right and choose API key. The key starts with dz_ and is sent as an Authorization: Bearer header.',
    },
    {
        question: 'Is the API synchronous?',
        answer:
            'No. POST /v1/tasks returns 202 with a task id and status running. Poll GET /v1/tasks/{id} until status is completed (read result) or failed (read error). Agents do multi-step work with a browser and files, so a task can take a while.',
    },
    {
        question: 'Which apps does Dooza Crew connect to?',
        answer:
            'Two ready-made surfaces exist today: the Task API and the n8n community node. Anything that can make an HTTP request with a header can call the API, including the HTTP Request node on n8n Cloud. We list a connector here only once it is live.',
    },
    {
        question: 'Do I need my own OpenAI or model keys?',
        answer: 'No. The agents run inside your Dooza Crew. The API and the n8n node only need your Crew API key.',
    },
    {
        question: 'Can an API task send emails or spend money without me?',
        answer:
            'No. Crew agents ask you to Approve, Edit or Reject before they send or pay for anything, whether the task came from the app, the API or n8n.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebAPI',
        name: 'Dooza Crew Task API',
        description: 'Send a task to one of your Dooza Crew agents and read the result.',
        documentation: OPENAPI,
        url: `${SITE_URL}${PATH}`,
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
];

export const metadata = {
    title: `${TITLE} (2026)`,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: `${TITLE} (2026)`, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
};

export default function IntegrationsPage() {
    return (
        <>
            <Navbar />
            <main className="mx-auto max-w-5xl px-5 pb-20 pt-28 sm:pt-32">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary-700">Integrations</p>
                <h1 className="mt-3 text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">Dooza Crew integrations: hand work to an AI agent from your software</h1>
                <p className="mt-4 max-w-3xl text-lg text-slate-700">
                    Dooza Crew connects to other software in two ways today: the <strong>Crew Task API</strong> (REST, Bearer key, OpenAPI description) and the{' '}
                    <strong>n8n community node</strong>. Both send a task in plain words to an agent in your Crew and give you back its answer. The agent does the
                    work with its own computer and browser, and asks you before it sends or pays for anything.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                    <a href={CREW} data-source={SOURCE} className="inline-flex items-center justify-center rounded-lg bg-primary-700 px-5 py-3 font-semibold text-white hover:bg-primary-800">
                        Try Dooza Crew free
                    </a>
                    <a href={OPENAPI} className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-5 py-3 font-semibold text-slate-800 hover:border-slate-400">
                        OpenAPI description
                    </a>
                </div>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">What is available</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    {surfaces.map((s) => (
                        <a key={s.name} href={s.href} className="block rounded-xl border border-slate-200 bg-white p-5 hover:border-primary-300">
                            <p className="font-semibold text-slate-900">{s.name}</p>
                            <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary-700">{s.status}</p>
                            <p className="mt-2 text-slate-700">{s.what}</p>
                        </a>
                    ))}
                </div>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">Crew Task API</h2>
                <p className="mt-3 text-slate-700">
                    Base URL <code className={CODE}>https://crew.dooza.ai</code>. Every request carries <code className={CODE}>Authorization: Bearer dz_…</code>; a
                    missing or wrong key returns 401. A task has an <code className={CODE}>id</code>, <code className={CODE}>agent</code>,{' '}
                    <code className={CODE}>status</code> (running, completed or failed), <code className={CODE}>result</code>, and created and updated times.
                </p>
                <div className="mt-4 overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="border-b border-slate-200 text-slate-900">
                                <th className="py-2 pr-4">Method</th>
                                <th className="py-2 pr-4">Path</th>
                                <th className="py-2">What it does</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700">
                            {endpoints.map((e) => (
                                <tr key={e.method + e.path} className="border-b border-slate-100 align-top">
                                    <td className="py-2 pr-4 font-mono">{e.method}</td>
                                    <td className="py-2 pr-4 font-mono">{e.path}</td>
                                    <td className="py-2">{e.what}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h3 className="mt-8 text-lg font-semibold text-slate-900">Send a task</h3>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
                    <code>{CURL_CREATE}</code>
                </pre>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">Read the result</h3>
                <pre className="mt-2 overflow-x-auto rounded-xl bg-slate-900 p-4 text-sm text-slate-100">
                    <code>{CURL_GET}</code>
                </pre>
                <p className="mt-3 text-slate-700">
                    Poll every few seconds until <code className={CODE}>status</code> is <code className={CODE}>completed</code> (read{' '}
                    <code className={CODE}>result</code>) or <code className={CODE}>failed</code> (read <code className={CODE}>error</code>). Get your key in the Crew
                    app: account menu → <strong>API key</strong>. Full schema:{' '}
                    <a className={A} href={OPENAPI} target="_blank" rel="noopener noreferrer">
                        crew.dooza.ai/v1/openapi.json
                    </a>
                    .
                </p>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">n8n</h2>
                <p className="mt-3 text-slate-700">
                    On self-hosted n8n, install <code className={CODE}>n8n-nodes-dooza-crew</code> (
                    <a className={A} href={NPM} target="_blank" rel="noopener noreferrer">
                        npm
                    </a>
                    , MIT) from Settings › Community Nodes. It wraps the same API: <strong>Run Task</strong> waits for the answer by default, <strong>Get Task</strong>{' '}
                    reads a task by id. On n8n Cloud, call the API with the HTTP Request node. Setup steps and an example workflow:{' '}
                    <a className={A} href="/integrations/n8n">
                        Dooza Crew for n8n
                    </a>
                    .
                </p>

                <h2 className="mt-12 text-2xl font-bold text-slate-900">Questions</h2>
                <div className="mt-4">
                    <FAQAccordion items={faqItems} />
                </div>

                <section className="mt-14 rounded-2xl bg-slate-900 p-7 text-white">
                    <h2 className="text-2xl font-bold">Rather have the connection built for you?</h2>
                    <p className="mt-2 text-slate-200">
                        We build and run AI agents for small businesses, and we keep them working. Tell us the job on a free 30-minute call, or start with Crew yourself
                        and get your API key in a few minutes.
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
                    Endpoints checked against the live OpenAPI description and a live API call on {UPDATED_LABEL}. The OpenAPI file is the source of truth if they ever
                    differ.
                </p>

                {schemas.map((s, i) => (
                    <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
                ))}
            </main>
            <Footer />
        </>
    );
}
