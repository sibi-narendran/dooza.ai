// /done-for-you-ai-agents: done-for-you vs DIY (n8n, Make, Zapier, Lindy) for small business. Common page (Managed + custom pilot only).
// Source copy: content/drafts/done-for-you-ai-agents-2026-10-21.md (facts verified 2026-10-21). Vendor prices read on each vendor page Oct 21, 2026.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import OfferCards from '@/components/OfferCards';
import TalkNowStrip from '@/components/TalkNowStrip';
import { MANAGED_PAY_URL, tagPay } from '@/lib/offers';
import { SITE_URL } from '@/lib/site';

const PATH = '/done-for-you-ai-agents';
const SOURCE = 'dfy_ai_agents';
const TITLE = 'Done-for-You AI Agents for Small Business';
const DESCRIPTION = 'Done-for-you AI agents for small business: we build, run and fix them for you. Compare n8n, Make, Zapier and Lindy on cost, upkeep and skills needed.';
const UPDATED_LABEL = 'October 21, 2026';
const BOOK = `/book?utm_source=website&utm_medium=page&utm_content=${SOURCE}`;
const MANAGED_PAY = tagPay(MANAGED_PAY_URL, SOURCE);
const A = 'font-semibold text-primary-700 underline';

const faqItems = [
    {
        question: 'What are done-for-you AI agents?',
        answer: 'AI agents that a provider builds, connects to your tools, runs and maintains for you. You explain the job and approve anything sensitive. At Dooza, a Dooza engineer does the building and the upkeep.',
    },
    {
        question: 'How much does an AI agent cost for a small business?',
        answer: 'DIY tools start free, and entry paid plans run from $9 to $49.99 a month (Make, Zapier, n8n, Lindy, checked Oct 21, 2026). Dooza Managed is $200 a month with the first 7 days free. Custom Dooza agents are quoted on a free 30-minute call.',
    },
    {
        question: 'Is Dooza an AI agent agency?',
        answer: 'Dooza is an AI-native company. We build custom AI agents for small businesses and keep them working, and we run Dooza Managed, an AI admin assistant checked by a real person.',
    },
    {
        question: 'Do I need technical skills?',
        answer: 'No. You explain the job in plain words on a call. Dooza engineers do the building, the connecting and the upkeep.',
    },
    {
        question: 'Who fixes the agent when it gets something wrong?',
        answer: 'We do. Dooza reads the agent\'s work, fixes mistakes and adds new skills as your business changes. With DIY tools, you fix it yourself.',
    },
    {
        question: 'How fast can a done-for-you AI agent be live?',
        answer: 'Custom Dooza agents are live in days, usually within the first week of the pilot. Dooza Managed starts by card, with no call needed.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Done-for-you AI agents',
        serviceType: 'Done-for-you AI agent build and maintenance for small businesses',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: [
            { '@type': 'Offer', name: 'Dooza Managed', price: '200', priceCurrency: 'USD', description: 'Per month, after a free first 7 days. Cancel anytime.' },
            { '@type': 'Offer', name: 'Custom AI agents', description: 'Quoted on a free 30-minute call. Starts as a paid pilot with a 100% refund within 14 days.' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Done-for-You AI Agents', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: `${TITLE} | Dooza`, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: `${TITLE} | Dooza`, description: DESCRIPTION },
};

const COLS = [
    { name: 'Dooza (done for you)', src: null },
    { name: 'n8n', src: 'https://n8n.io/pricing/' },
    { name: 'Make', src: 'https://www.make.com/pricing' },
    { name: 'Zapier', src: 'https://zapier.com/pricing' },
    { name: 'Lindy', src: 'https://www.lindy.ai/pricing' },
];

const ROWS = [
    { label: 'Who builds it', cells: ['A Dooza engineer', 'You', 'You', 'You', 'You'] },
    { label: 'Who maintains it', cells: ['Dooza: we watch it, fix it, add tasks', 'You', 'You', 'You', 'You'] },
    {
        label: 'Monthly cost',
        cells: [
            'Managed: $200/mo, first 7 days free. Custom agents: quoted on a free call',
            'Free self-hosted Community Edition; Cloud Starter €20/mo billed annually (checked Oct 21, 2026)',
            'Free plan; Core from $9/mo (checked Oct 21, 2026)',
            'Free plan (100 tasks/mo); Professional from $19.99/mo (billing period per vendor page) (checked Oct 21, 2026)',
            'Free with $50 in credits; Team from $29.99/mo per active user for 3,000 credits (checked Oct 21, 2026)',
        ],
    },
    { label: 'Skills needed', cells: ['Explain the job in plain words', 'Workflow logic; self-hosting needs a server', 'Workflow logic', 'Basic workflow setup', 'Writing prompts and agent instructions'] },
    { label: 'Setup time', cells: ['Live in days, usually in the first week of the pilot', 'Your own time', 'Your own time', 'Your own time', 'Your own time'] },
    { label: 'When it breaks', cells: ['We fix it', 'You debug it', 'You debug it', 'You debug it', 'You debug it'] },
];

const SOURCES = [
    { label: 'n8n pricing (Starter "20€ /mo, billed annually", 2.5K executions; Community Edition self-hosted)', href: 'https://n8n.io/pricing/' },
    { label: 'Make pricing (Free "$0/mo", 1,000 credits; Core "$9/mo" at 10,000 credits/mo; page offers "Save 15%" on annual billing)', href: 'https://www.make.com/pricing' },
    { label: 'Zapier pricing (Free "$0/month", 100 tasks; Professional "Starting from $19.99/month"; "Pay yearly (Save 33%)" toggle)', href: 'https://zapier.com/pricing' },
    { label: 'Lindy pricing (Free "$0", "$50 in credits"; Team "$49.99/mo" for 5,000 credits; "Every active user in your workspace is billed")', href: 'https://www.lindy.ai/pricing' },
    { label: 'Dooza pricing', href: 'https://www.dooza.ai/pricing' },
    { label: 'Dooza home (how it works, jobs, FAQ)', href: 'https://www.dooza.ai/' },
    { label: 'Dooza AI admin assistant', href: 'https://www.dooza.ai/ai-admin-assistant' },
    { label: 'Dooza AI answering service', href: 'https://www.dooza.ai/ai-answering-service-for-small-business' },
    { label: 'Dooza llms.txt', href: 'https://www.dooza.ai/llms.txt' },
];

export default function DoneForYouAiAgentsPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-warm text-slate-900 font-sans">
                <Navbar />
                <main>
                    <section className="pt-32 pb-10 md:pt-40">
                        <div className="mx-auto max-w-3xl px-4">
                            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">Done-for-You AI Agents for Small Business</h1>
                            <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                <strong>Done-for-you AI agents means someone else builds the agent, connects it to your tools, runs it and fixes it when it goes wrong. You describe the job and approve anything sensitive.</strong> It is for small business owners who want the work done, not a new tool to learn.
                            </p>
                            <p className="mt-4 text-slate-700">
                                At Dooza, an engineer scopes your job on a <a href={BOOK} data-source={SOURCE} className={A}>free 30-minute call</a>. We build the agent into the tools you already use, check its work and improve it every month. If you only need written admin help, <a href="/pricing" className={A}>Dooza Managed</a> is $200 a month with the first 7 days free.
                            </p>
                            <p className="mt-4 text-slate-600">Updated {UPDATED_LABEL}.</p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href={BOOK} data-source={`${SOURCE}-hero`} className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Book a free pilot call</a>
                                <a href={MANAGED_PAY} data-offer="managed" data-source={`${SOURCE}-hero`} className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-800 hover:border-slate-400">Start Dooza Managed, 7 days free</a>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-5xl px-4">
                            <div className="mx-auto max-w-3xl">
                                <h2 className="font-serif text-2xl font-bold text-slate-900">Done-for-you vs DIY (n8n, Make, Zapier, Lindy)</h2>
                                <p className="mt-3 text-slate-700">DIY tools are good and often cheap. The catch is that you, or someone you pay, has to build and maintain every workflow. Here is how the options compare. Tool prices are the entry paid plans shown on each vendor&rsquo;s pricing page.</p>
                            </div>
                            <div className="mt-5 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full min-w-[760px] text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-4 py-3"><span className="sr-only">Question</span></th>
                                            {COLS.map((c) => (
                                                <th key={c.name} className="px-4 py-3">{c.src ? <a href={c.src} rel="noopener" target="_blank" className="underline">{c.name}</a> : c.name}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ROWS.map((r) => (
                                            <tr key={r.label} className="border-t border-slate-100 align-top">
                                                <th scope="row" className="px-4 py-3 font-semibold text-slate-900">{r.label}</th>
                                                {r.cells.map((c, i) => (
                                                    <td key={i} className={i === 0 ? 'px-4 py-3 font-medium text-slate-900 bg-primary-50/50' : 'px-4 py-3 text-slate-700'}>{c}</td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mx-auto mt-4 max-w-3xl text-slate-700">Two things to note. First, a DIY tool&rsquo;s price is only the software. Your hours to build and fix workflows are extra. Second, with done for you, someone else does that work.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">What we build</h2>
                            <p className="mt-3 text-slate-700">These are the jobs Dooza already takes on. If a job repeats every week, bring it to the call. See <a href="/blog/ai-agents-examples-small-business" className={A}>25 real AI agent examples for small business</a> for more ideas.</p>
                            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
                                <li><strong>Call answering.</strong> The <a href="/ai-answering-service-for-small-business" className={A}>Dooza AI answering service</a> picks up when you can&rsquo;t. It takes the caller&rsquo;s message and emails it to you with the transcript and a recording link. It costs $149 a month for up to 500 minutes, then $0.30 a minute. It does not book onto calendars or send texts.</li>
                                <li><strong>Lead follow-up.</strong> Replies to new leads and keeps following up until they book or say no.</li>
                                <li><strong>Inbox and admin.</strong> Sorts your email and drafts replies. For written admin work (email drafts, documents and forms, spreadsheets, research), <a href="/ai-admin-assistant" className={A}>Dooza Managed</a> has AI do the task and a real person check it. Tasks come back by the next business day.</li>
                                <li><strong>Scheduling.</strong> Books meetings on your calendar as part of an inbox agent.</li>
                                <li><strong>Customer support.</strong> Answers customer questions by email and chat from your own docs. It drafts the rest for you to review.</li>
                                <li><strong>Reporting.</strong> Keeps your CRM and spreadsheets up to date and sends you a short daily summary.</li>
                            </ol>
                            <p className="mt-4 text-slate-700">We also chase unpaid invoices with polite reminders, and reply to reviews and post on social accounts on a schedule.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">How it works</h2>
                            <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
                                <li><strong>Call.</strong> You explain the work that eats your week on a free 30-minute call. A Dooza engineer scopes it with you and quotes your price.</li>
                                <li><strong>Build.</strong> We build the agent into your tools: email, phone, CRM, calendar, spreadsheets. We connect your apps for you (Dooza works with 1,000+ app integrations).</li>
                                <li><strong>Run.</strong> The agent does the job every day. It is live in days, usually within the first week of your pilot.</li>
                                <li><strong>Improve.</strong> We read its work, fix mistakes and teach it new tasks as your business changes. You never maintain anything.</li>
                                <li><strong>Human checks.</strong> Anything sensitive waits for your OK. On Dooza Managed, a real person checks every task before it goes back to you.</li>
                            </ol>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">What it costs</h2>
                            <p className="mt-3 text-slate-700"><strong>How much does an AI agent cost?</strong> It depends on who builds and runs it.</p>
                            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                                <li><strong>Dooza Managed (admin assistant):</strong> $200 a month. $0 today, and $200 after 7 days only if you don&rsquo;t cancel first. See <a href="/pricing" className={A}>pricing</a>.</li>
                                <li><strong>Dooza AI answering service:</strong> $149 a month for up to 500 minutes, then $0.30 a minute. Month to month, with a full refund if you cancel within 14 days of the first charge.</li>
                                <li><strong>Custom AI agents:</strong> priced by the job. A Dooza engineer quotes it on a <a href={BOOK} data-source={SOURCE} className={A}>free 30-minute call</a>. Every custom build starts as a paid pilot with a 100% refund within 14 days.</li>
                                <li><strong>DIY tools:</strong> from free to about $30 a month for the entry paid plans in the table above, plus your own time to build and maintain the workflows.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">We did not find a public, citable price list for agency or freelancer AI agent builds, so we don&rsquo;t quote one here. Ask any agency what is included after launch: monitoring, fixes and new tasks are often extra.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-2xl font-bold text-slate-900">When DIY is the better choice</h2>
                            <p className="mt-3 text-slate-700">Done for you is not right for everyone. DIY is the better pick when:</p>
                            <ul className="mt-4 list-disc space-y-3 pl-5 text-slate-700">
                                <li><strong>You or your team like building workflows.</strong> n8n, Make and Zapier are made for this, and the entry plans cost less than a done-for-you service.</li>
                                <li><strong>The job is one simple trigger.</strong> &ldquo;New form entry, add a row to a sheet&rdquo; takes minutes on Zapier&rsquo;s or Make&rsquo;s free plan. You don&rsquo;t need us for that.</li>
                                <li><strong>You want full control of the code and data.</strong> Self-hosted n8n runs on your own server.</li>
                                <li><strong>Your budget is near zero.</strong> All four tools have a free option.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">Done for you makes more sense when the job touches customers, has many steps, or needs someone to notice when it goes wrong. It also makes sense when nobody on your team has time to build and fix workflows. For a wider view of the options, read our guide to <a href="/ai-employee-for-small-business" className={A}>hiring an AI employee for a small business</a>.</p>
                        </div>
                    </section>

                    <section className="pb-12 px-4">
                        <OfferCards source={SOURCE} only="managed" />
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center md:p-8">
                                <h2 className="font-serif text-2xl font-bold text-slate-900">Tell us the job. We build the agent.</h2>
                                <p className="mx-auto mt-3 max-w-2xl text-slate-700">Book a free 30-minute call with a Dooza engineer. You leave knowing what we would build and what it would do. Every custom build starts with a refundable pilot: 100% refund within 14 days.</p>
                                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                                    <a href={BOOK} data-source={`${SOURCE}-cta`} className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Book a free pilot call</a>
                                </div>
                                <p className="mt-4 text-sm text-slate-600">Or start <a href={MANAGED_PAY} data-offer="managed" data-source={`${SOURCE}-cta`} className={A}>Dooza Managed</a>: first 7 days free, then $200/month. <a href="/pricing" className="underline">See pricing</a>.</p>
                            </div>
                        </div>
                    </section>

                    <TalkNowStrip source={SOURCE} />

                    <section className="pb-16">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-xl font-bold text-slate-900">Sources</h2>
                            <p className="mt-2 text-sm text-slate-600">All checked Oct 21, 2026.</p>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-700">
                                {SOURCES.map((s) => (
                                    <li key={s.href}>{s.label}: <a href={s.href} rel="noopener" target="_blank" className="break-all underline">{s.href}</a></li>
                                ))}
                            </ul>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}
