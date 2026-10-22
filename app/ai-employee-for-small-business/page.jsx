// /ai-employee-for-small-business: answer-first guide for "ai employee for small business" (GSC pos 18.3), "hire an ai employee",
// "how much does an ai employee cost". Copy approved in content/drafts/ai-employee-for-small-business-2026-10-21.md
// (competitor prices read on each vendor's own page on 2026-10-21; Dooza claims from live /pricing, /, /llms.txt).
// Structure copied from app/ai-admin-assistant/page.jsx.
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import OfferCards from '@/components/OfferCards';
import TalkNowStrip from '@/components/TalkNowStrip';
import { MANAGED_PAY_URL } from '@/lib/offers';
import { SITE_URL } from '@/lib/site';

const PATH = '/ai-employee-for-small-business';
const SOURCE = 'ai_employee_smb';
const TITLE = 'Hire an AI Employee for Your Small Business';
const DESCRIPTION = 'An AI employee does one real job in your tools. See what it costs (Dooza $200/mo, first 7 days free, vs Sintra, Lindy, a VA) and how to hire one.';
const UPDATED_LABEL = 'October 22, 2026';
const book = (placement) => `/book?utm_source=website&utm_medium=page&utm_content=${SOURCE}_${placement}`;
const LINK = 'font-semibold text-primary-700 underline';
const H2 = 'font-serif text-2xl font-bold text-slate-900';

const faqItems = [
    {
        question: 'How much does it cost to hire an AI employee?',
        answer: 'Most cost $25 to $200 a month. DIY tools like Teammates.ai start at $25/month and Lindy at $49.99/month per user (checked Oct 21, 2026), and you set them up. Dooza Managed is $200/month after a free first 7 days, with a person checking the work.',
    },
    {
        question: 'How do I hire an AI employee?',
        answer: 'Pick one repeat job, write down how you do it, then choose a DIY tool or a done-for-you service. With Dooza, you can start Managed by card, or book a free 30-minute call and a Dooza engineer scopes a custom build.',
    },
    {
        question: 'What is the best AI employee for a small business?',
        answer: 'It depends on who will run it. If you enjoy building and testing, a DIY tool like Lindy or Sintra can work. If you want the job done without managing software, a done-for-you service like Dooza fits better.',
    },
    {
        question: 'Will an AI employee replace my staff?',
        answer: 'Usually not. It takes the repeat work so your people spend time on customers and judgment calls. Anything sensitive should wait for a person’s OK.',
    },
    {
        question: 'Is an AI employee safe to use with my email and customers?',
        answer: 'Set it up so it asks before anything sensitive goes out. With Dooza, nothing sensitive goes out without your OK, and a Dooza engineer checks the work.',
    },
    {
        question: 'How fast can an AI employee start?',
        answer: 'DIY tools can start the same day if you build it yourself. You can start Dooza Managed by card today, and tasks come back by the next business day. Custom Dooza AI employees are live in days.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Managed',
        serviceType: 'AI employee service for small businesses',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '200', priceCurrency: 'USD', description: 'Per month, after a free first 7 days. Cancel anytime.' },
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
            { '@type': 'ListItem', position: 2, name: 'AI Employee for Small Business', item: `${SITE_URL}${PATH}` },
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

const ROWS = [
    {
        who: 'Dooza Managed',
        href: '/ai-admin-assistant',
        price: '$200/month, first 7 days free',
        unit: 'Written admin tasks by email (emails, documents, spreadsheets, research). AI does the work, a real person checks it. Back by the next business day.',
        fixes: 'Dooza',
    },
    {
        who: 'Dooza custom AI employee',
        href: '/pricing',
        price: 'Priced by the job. Refundable pilot: 100% refund within 14 days.',
        unit: 'One job built into your tools: lead follow-up, support, invoice chasing and more.',
        fixes: 'Dooza engineers build, check and improve it',
    },
    {
        who: 'Sintra AI',
        src: 'https://sintra.ai/pricing',
        price: '1-month plan $97/month, shown on sale at $48.50/month. 12-month plan $52/month, shown on sale at $15.60/month. 14-day money-back guarantee.',
        unit: '12 AI “helpers”, 250 monthly credits, 15+ integrations',
        fixes: 'You',
    },
    {
        who: 'Lindy (Team)',
        src: 'https://www.lindy.ai/pricing',
        price: 'From $49.99/month per user for 5,000 credits. Top-ups $10 per 1,000 credits. $50 in free credits for 7 days.',
        unit: 'Build your own AI agents and workflows',
        fixes: 'You',
    },
    {
        who: 'Teammates.ai',
        src: 'https://www.teammates.ai/pricing',
        price: 'Free (10 credits), Pro $25/month (50 credits), Business $50/month (100 credits), Scale $100/month (200 credits)',
        unit: '3 AI teammates for support, sales and recruiting. A 30-minute sales call uses 10 credits.',
        fixes: 'You',
    },
    {
        who: 'Time etc (US virtual assistant)',
        src: 'https://www.timeetc.com/pricing',
        price: '$390/month for 10 hours ($39/hour)',
        unit: 'A dedicated US human assistant',
        fixes: 'You manage the person',
    },
    {
        who: 'In-house admin assistant',
        src: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm',
        price: '$23.23/hour, $48,310/year median pay (BLS, May 2025), before taxes and benefits',
        unit: 'A full-time person in your office',
        fixes: 'You hire, train and manage',
    },
];

const DIY_ROWS = [
    { label: 'Who sets it up', diy: 'You', dooza: 'A Dooza engineer, on a free 30-minute call' },
    { label: 'Connecting your tools', diy: 'You', dooza: 'Dooza connects them (1,000+ app integrations)' },
    { label: 'When it gets something wrong', diy: 'You figure it out', dooza: 'Dooza fixes it' },
    { label: 'Gets better over time', diy: 'Only if you rebuild it', dooza: 'Dooza improves it every month' },
    { label: 'Best for', diy: 'Owners who like building and have time to test', dooza: 'Owners who want the result, not another tool' },
];

const SOURCES = [
    { label: 'Sintra AI pricing', url: 'https://sintra.ai/pricing' },
    { label: 'Lindy pricing', url: 'https://www.lindy.ai/pricing' },
    { label: 'Teammates.ai pricing', url: 'https://www.teammates.ai/pricing' },
    { label: 'Time etc pricing', url: 'https://www.timeetc.com/pricing' },
    { label: 'US Bureau of Labor Statistics, Secretaries and Administrative Assistants (May 2025)', url: 'https://www.bls.gov/ooh/office-and-administrative-support/secretaries-and-administrative-assistants.htm' },
];

export default function AiEmployeeForSmallBusinessPage() {
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
                            <h1 className="font-serif text-4xl font-bold leading-tight text-slate-900 md:text-5xl">AI Employee for Small Business: What It Is, What It Costs, How to Hire One</h1>
                            <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                <strong>An AI employee is an AI agent that does one real job for your business, like following up with leads, drafting emails or answering customer questions. It works in the tools you already use, every day. Prices run from about $25 a month for a do-it-yourself tool to $200 a month for a done-for-you service like Dooza Managed, where a real person checks the work.</strong>
                            </p>
                            <p className="mt-4 text-slate-600">Updated {UPDATED_LABEL}. Prices below were read on each vendor&rsquo;s own page that day.</p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                <a href={MANAGED_PAY_URL} data-offer="managed" data-source={`${SOURCE}_hero`} className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Start 7 days free</a>
                                <a href={book('hero')} data-source={`${SOURCE}_hero`} className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-800 hover:border-slate-400">Book a free call</a>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className={H2}>What does &ldquo;AI employee&rdquo; mean?</h2>
                            <p className="mt-4 text-slate-700">&ldquo;AI employee&rdquo; is a plain name for an AI agent with a job title. A chatbot waits for you to type. An AI employee has a routine. It knows its job, works on a schedule and hands you the result.</p>
                            <p className="mt-4 text-slate-700">Most AI employees do one of these:</p>
                            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                                <li><strong>Write:</strong> emails, replies, documents, posts.</li>
                                <li><strong>Sort:</strong> your inbox, your leads, your support tickets.</li>
                                <li><strong>Follow up:</strong> with leads, quotes or unpaid invoices.</li>
                                <li><strong>Answer:</strong> customer questions or the phone.</li>
                            </ul>
                            <p className="mt-4 text-slate-700">A Dooza AI employee gets the same kit as a new hire: <strong>its own email address, its own phone number</strong> (it makes and answers calls and speaks with customers), <strong>its own computer and browser</strong> to work in your websites and tools, and <strong>its own payment card</strong> for approved purchases.</p>
                            <p className="mt-4 text-slate-700">It is not a person. It does not make judgment calls on its own. Good setups make it ask before anything sensitive goes out.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-5xl px-4">
                            <div className="mx-auto max-w-3xl">
                                <h2 className={H2}>How much does an AI employee cost?</h2>
                                <p className="mt-4 text-slate-700"><strong>Short answer: $25 to $200 a month for most small businesses.</strong> A human assistant costs more, from $390 a month for 10 hours at a US VA service, or about $23 an hour for an in-house hire before taxes and benefits.</p>
                                <p className="mt-4 text-slate-700">The big difference is not the price. It is who does the setup and who fixes it when it goes wrong.</p>
                            </div>
                            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full min-w-[720px] text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-4 py-3">Option</th>
                                            <th className="px-4 py-3">Price (checked Oct 21, 2026)</th>
                                            <th className="px-4 py-3">What you get</th>
                                            <th className="px-4 py-3">Who sets it up and fixes it</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {ROWS.map((r) => (
                                            <tr key={r.who} className="border-t border-slate-100 align-top">
                                                <td className="px-4 py-3 font-semibold text-slate-900">
                                                    {r.src ? <a href={r.src} rel="noopener" target="_blank" className="underline">{r.who}</a> : <a href={r.href} className="text-primary-700 underline">{r.who}</a>}
                                                </td>
                                                <td className="px-4 py-3 text-slate-800">{r.price}</td>
                                                <td className="px-4 py-3 text-slate-600">{r.unit}</td>
                                                <td className="px-4 py-3 text-slate-600">{r.fixes}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="mx-auto mt-6 max-w-3xl">
                                <p className="text-slate-700">Two things to watch on DIY tools:</p>
                                <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-700">
                                    <li><strong>Credits.</strong> Lindy, Sintra and Teammates.ai all bill in credits. Bigger jobs use more. Check what one month of your real work would use.</li>
                                    <li><strong>Your time.</strong> A $25 tool is cheap if you build and fix it yourself. It is not cheap if it eats your Saturday.</li>
                                </ol>
                                <p className="mt-4 text-slate-700">Comparing Dooza with one tool in depth? See <a href="/dooza-vs-sintra" className={LINK}>Dooza vs Sintra</a> and <a href="/sintra-alternatives" className={LINK}>Sintra alternatives</a>.</p>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className={H2}>What can an AI employee do for a small business?</h2>
                            <p className="mt-4 text-slate-700">These are jobs AI employees handle well today. Each one repeats every week and follows clear rules.</p>
                            <ol className="mt-6 grid gap-4 sm:grid-cols-2">
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">1. Answer the phone when you can&rsquo;t</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It picks up, asks your questions and sends you the message. Dooza&rsquo;s <a href="/ai-answering-service-for-small-business" className={LINK}>AI answering service</a> costs $149/month for up to 500 minutes and emails you each message with the transcript. It does not book onto calendars or send texts.</p>
                                </li>
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">2. Inbox and admin</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It drafts replies, fills in documents and forms, and keeps spreadsheets up to date. This is what <a href="/ai-admin-assistant" className={LINK}>Dooza Managed</a> does, with a person checking each task.</p>
                                </li>
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">3. Lead follow-up</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It replies to new leads and keeps following up until they book or say no.</p>
                                </li>
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">4. Scheduling</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It sorts your email, drafts the replies and books meetings on your calendar (custom Dooza build).</p>
                                </li>
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">5. Customer support</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It answers customer questions by email and chat from your own help docs, and drafts the rest for you to approve.</p>
                                </li>
                                <li className="rounded-2xl border border-slate-200 bg-white p-5">
                                    <h3 className="font-bold text-slate-900">6. Invoice chasing</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-slate-600">It sends polite reminders on unpaid invoices and tells you who paid.</p>
                                </li>
                            </ol>
                            <p className="mt-4 text-slate-700">Not on the list: anything that needs a license, a signature or real judgment. Keep those with a person.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className={H2}>How to hire an AI employee</h2>
                            <h3 className="mt-6 text-lg font-bold text-slate-900">Step 1: Pick one job</h3>
                            <p className="mt-2 text-slate-700">Choose one task that eats your week and repeats. &ldquo;Follow up on quotes&rdquo; is a good first job. &ldquo;Run my marketing&rdquo; is not.</p>
                            <h3 className="mt-6 text-lg font-bold text-slate-900">Step 2: Write down how you do it today</h3>
                            <p className="mt-2 text-slate-700">List the steps, the tools you use and the answers you give most. This becomes the AI employee&rsquo;s instructions.</p>
                            <h3 className="mt-6 text-lg font-bold text-slate-900">Step 3: Choose DIY or done-for-you</h3>
                            <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                                <table className="w-full min-w-[560px] text-left text-sm">
                                    <thead className="bg-slate-50 text-slate-700">
                                        <tr>
                                            <th className="px-4 py-3"><span className="sr-only">Question</span></th>
                                            <th className="px-4 py-3">Do it yourself (Sintra, Lindy, Teammates.ai)</th>
                                            <th className="px-4 py-3">Done for you (Dooza)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {DIY_ROWS.map((r) => (
                                            <tr key={r.label} className="border-t border-slate-100 align-top">
                                                <th scope="row" className="px-4 py-3 font-semibold text-slate-900">{r.label}</th>
                                                <td className="px-4 py-3 text-slate-600">{r.diy}</td>
                                                <td className="px-4 py-3 text-slate-800">{r.dooza}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <h3 className="mt-6 text-lg font-bold text-slate-900">Step 4: Start small and check the work</h3>
                            <p className="mt-2 text-slate-700">Run it on real work for a week. Read what it sends. Make it ask before anything sensitive goes out. With Dooza Managed the first 7 days are free. Custom Dooza builds start with a refundable pilot: 100% refund within 14 days.</p>
                            <h3 className="mt-6 text-lg font-bold text-slate-900">Step 5: Add the next job</h3>
                            <p className="mt-2 text-slate-700">Once the first job runs without you, add a second. Most businesses grow one job at a time.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className={H2}>AI employee vs hiring a person</h2>
                            <p className="mt-4 text-slate-700">An AI employee is not a full replacement for a good hire. Here is the honest split.</p>
                            <div className="mt-6 grid gap-10 md:grid-cols-2">
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">An AI employee is better when:</h3>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                                        <li>The work repeats and follows rules: follow-ups, data entry, drafts, reminders.</li>
                                        <li>You need it done every day, including nights and weekends.</li>
                                        <li>The budget is a few hundred dollars a month, not a salary.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">A person is better when:</h3>
                                    <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-700">
                                        <li>The job needs judgment, a relationship or a phone call that goes off-script.</li>
                                        <li>Someone has to log in to your bank, move money or sign things.</li>
                                        <li>The task changes every time.</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-6 text-slate-700">Dooza Managed, for example, does not make phone calls or send texts for you, log in to your accounts, make payments, or give legal, tax or insurance advice. If you need those, a human virtual assistant is the better fit. Our full comparison: <a href="/blog/ai-employees-vs-virtual-assistants" className={LINK}>AI employees vs virtual assistants</a>.</p>
                            <p className="mt-4 text-slate-700">Many small businesses do both: the AI employee takes the repeat work, and a person handles the rest.</p>
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="mb-6 font-serif text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </div>
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white px-6 py-8">
                            <h2 className={H2}>Hire your first AI employee</h2>
                            <p className="mt-4 text-slate-700">Tell us the job that eats your week. On a free 30-minute call a Dooza engineer tells you what we would build and what it would do. Custom builds start with a refundable pilot: 100% refund within 14 days.</p>
                            <p className="mt-4 text-slate-700">Just need admin help? Dooza Managed: an AI admin assistant whose work is checked by a real person. First 7 days free, then $200/month. See <a href="/pricing" className={LINK}>pricing</a>.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                                <a href={book('closing')} data-source={`${SOURCE}_closing`} className="rounded-full bg-primary-700 px-7 py-3 text-center font-bold text-white hover:bg-primary-800">Book a free pilot call</a>
                                <a href={MANAGED_PAY_URL} data-offer="managed" data-source={`${SOURCE}_closing`} className="rounded-full border border-slate-300 bg-white px-7 py-3 text-center font-semibold text-slate-800 hover:border-slate-400">Start Managed, 7 days free</a>
                            </div>
                        </div>
                    </section>

                    <section className="pb-12 px-4">
                        <OfferCards source={SOURCE} only="managed" />
                    </section>

                    <section className="pb-12">
                        <div className="mx-auto max-w-3xl px-4">
                            <h2 className="font-serif text-xl font-bold text-slate-900">Sources</h2>
                            <p className="mt-3 text-sm text-slate-600">Competitor and benchmark prices, all read on the vendor&rsquo;s own page on October 21, 2026. Sale prices may change.</p>
                            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-slate-600">
                                {SOURCES.map((s) => (
                                    <li key={s.url}><a href={s.url} rel="noopener" target="_blank" className="underline">{s.label}</a></li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <TalkNowStrip source={SOURCE} />
                </main>
                <Footer />
            </div>
        </>
    );
}
