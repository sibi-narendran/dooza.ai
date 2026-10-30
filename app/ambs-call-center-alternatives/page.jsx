import Link from 'next/link';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { crewSignupUrl } from '@/lib/crewUrl';

const PATH = '/ambs-call-center-alternatives';
const PAY_URL = crewSignupUrl('ambs-call-center-alternatives-cta');
const CHECKED = 'October 21, 2026';
const TITLE = 'Ambs Call Center Alternatives: 8 Options, 2026';
const DESCRIPTION = 'Ambs Call Center lists live answering from $149 for 100 minutes to $600 for 500, and AI from $19 a month. Compare 8 alternatives at listed prices.';

export const metadata = {
    title: { absolute: TITLE },
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' } },
    openGraph: {
        title: TITLE,
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        siteName: 'Dooza',
        type: 'article',
        modifiedTime: '2026-10-21T00:00:00.000Z',
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Ambs Call Center alternatives compared' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// Every price below was read from the vendor's own pricing page on 2026-10-21 (quotes in the draft README).
// Ambs prices are from its pricing table (Real People, AI Receptionist, Real People + AI columns).
// Units differ (calls, minutes, Abby Minutes): do not convert them into one per-minute figure.
const vendors = [
    {
        name: 'Ambs Call Center (Real People)',
        url: 'https://www.ambscallcenter.com/pricing',
        kind: 'Human',
        unit: 'Minutes (work time)',
        entry: '$149/month for 100 minutes',
        more: '$330 for 250; $600 for 500; $1,195 for 1,000; $2,945 for 2,500+ minutes',
        overage: '$1.29/min (100 minutes) down to $1.20/min (2,500+ minutes)',
    },
    {
        name: 'Ambs Call Center (AI Receptionist)',
        url: 'https://www.ambscallcenter.com/pricing',
        kind: 'AI',
        unit: 'AI minutes',
        entry: 'Starter $19/month, AI minutes $0.79 each',
        more: '$75 for 100; $185 for 250; $350 for 500; $650 for 1,000 minutes',
        overage: '$0.77/min (100 minutes) down to $0.70/min (1,000 minutes)',
    },
    {
        name: 'Ambs Call Center (Real People + AI)',
        url: 'https://www.ambscallcenter.com/pricing',
        kind: 'Human and AI',
        unit: 'Minutes',
        entry: '$168/month for 100 minutes',
        more: '$349 for 250; $619 for 500; $1,214 for 1,000; $2,964 for 2,500+ minutes',
        overage: '$1.29/min (100 minutes) down to $1.20/min (2,500+ minutes)',
    },
    {
        name: 'Posh (Virtual Receptionist)',
        url: 'https://posh.com/pricing/',
        kind: 'Human',
        unit: 'Receptionist minutes',
        entry: '$65/month with 0 minutes included, plus $2.30/min',
        more: '$130 for 50; $215 for 100; $420 for 200; $700 for 350; $975 for 500; $1,900 for 1,000 minutes',
        overage: '$2.20/min (50 minutes) down to $1.90/min (1,000 minutes)',
    },
    {
        name: 'Moneypenny (People Answering)',
        url: 'https://www.moneypenny.com/us/pricing',
        kind: 'Human',
        unit: 'Minutes',
        entry: '$165/month for 50 minutes',
        more: '$265 for 100; $422 for 200; $985 for 500 minutes',
        overage: '$2.85/min (50 minutes) down to $2.09/min (500 minutes)',
    },
    {
        name: 'Moneypenny (AI Answering)',
        url: 'https://www.moneypenny.com/us/pricing',
        kind: 'AI with human escalation',
        unit: 'Calls',
        entry: '$99/month for 50 calls',
        more: '$199 for 100; $435 for 250; $775 for 500 calls',
        overage: '$2.39/call (50 calls) down to $1.69/call (500 calls)',
    },
    {
        name: 'Ruby (virtual receptionist)',
        url: 'https://www.ruby.com/plans-and-pricing/',
        kind: 'Human',
        unit: 'Minutes',
        entry: '$250/month for 50 minutes',
        more: '$395 for 100; $720 for 200; $1,725 for 500 minutes',
        overage: 'Not listed on pricing page',
    },
    {
        name: 'Smith.ai (human-first)',
        url: 'https://smith.ai/pricing/receptionists',
        kind: 'Human',
        unit: 'Calls',
        entry: '$300/month for 30 calls',
        more: '$810 for 90 calls; $2,100 for 300 calls',
        overage: '$11.50/call over 30 (Starter)',
    },
    {
        name: 'Smith.ai (AI receptionist)',
        url: 'https://smith.ai/pricing/ai-receptionist',
        kind: 'AI',
        unit: 'Calls',
        entry: '$0/month for 25 calls (Free); Pro $150/month',
        more: 'Pro: $2.00/call (about 2–3 calls a day)',
        overage: '$3.00/call after 25 (Free)',
    },
    {
        name: 'Abby Connect',
        url: 'https://www.abby.com/pricing/',
        kind: 'Human or AI',
        unit: 'Abby Minutes',
        entry: '$164/month for 50 Abby Minutes',
        more: '$329 for 100; $599 for 200; $1,380 for 500. Minutes double if you choose AI',
        overage: 'Billed at your plan’s Abby Minute rate',
    },
    {
        name: 'Upfirst',
        url: 'https://upfirst.ai/pricing',
        kind: 'AI',
        unit: 'Calls',
        entry: '$24.95/month for 30 calls',
        more: '$59.95 for 90; $159.95 for 300; $299 for 600 calls',
        overage: '$1.50/call (Starter) down to $.70/call (Scale)',
    },
    {
        name: 'Dialzara',
        url: 'https://dialzara.com/pricing',
        kind: 'AI',
        unit: 'Minutes',
        entry: '$29/month for 60 minutes',
        more: '$99 for 220; $199 for 500; $349 for 1,000 minutes',
        overage: '$0.48/min (Lite) down to $0.35/min (Elite)',
    },
    {
        name: 'Rosie',
        url: 'https://heyrosie.com/pricing',
        kind: 'AI',
        unit: 'Minutes',
        entry: '$49/month for 250 minutes',
        more: '$149 for 1,000; $299 for 2,000 minutes',
        overage: 'Not listed on pricing page',
    },
];

const sourceUrls = [...new Set(vendors.map((v) => v.url))];

const alternatives = [
    {
        name: 'Dooza Crew',
        href: '/ai-receptionist',
        internal: true,
        what: 'AI agents (a lead agent plus helper agents) you chat with on web or phone. They browse the web, write files in their own workspace and take phone calls, and they ask you in chat before they send or pay. Run by us, the company that publishes this page.',
        price: 'Start for $5. Phone calls are included in your Crew plan.',
        bestFor: 'Teams that want AI agents that do more than answer calls, with the phone included in one plan.',
    },
    {
        name: 'Posh',
        href: 'https://posh.com/pricing/',
        what: 'A live virtual receptionist service billed by receptionist minutes. Its pricing page lists 24/7 live answering, bilingual receptionists who speak English and Spanish, a free trial of seven days or 250 receptionist minutes, and month-to-month agreements.',
        price: 'From $65/month with no minutes included, plus $2.30/min; $975/month for 500 minutes.',
        bestFor: 'Businesses that use few receptionist minutes and want a live person on every call.',
        extra: { href: '/posh-alternatives', label: 'Posh alternatives compared' },
    },
    {
        name: 'Moneypenny',
        href: 'https://www.moneypenny.com/us/pricing',
        what: 'A receptionist service with two US plan families: People Answering, billed by minutes, which lists bilingual answering, CRM integrations and a mobile app and dashboard; and AI Answering, billed by calls, which lists human escalation. Its page asks for 30 days’ notice to cancel.',
        price: 'People Answering from $165/month for 50 minutes; $985/month for 500 minutes. AI Answering from $99/month for 50 calls; $775/month for 500 calls.',
        bestFor: 'Businesses that want live people on the phone, or AI calls with a person behind them.',
        extra: { href: '/moneypenny-alternatives', label: 'Moneypenny alternatives compared' },
    },
    {
        name: 'Ruby',
        href: 'https://www.ruby.com/plans-and-pricing/',
        what: 'A live virtual receptionist service priced by minutes per month. Its pricing page describes 24/7 phone and website coverage and “100% live, personalized communication”, and says there are no additional fees for activation, onboarding, setup or customization.',
        price: 'From $250/month for 50 minutes; $1,725/month for 500 minutes. No overage rate on the pricing page.',
        bestFor: 'Businesses that want every call handled by a person.',
        extra: { href: '/ruby-alternatives', label: 'Ruby Receptionist alternatives compared' },
    },
    {
        name: 'Smith.ai',
        href: 'https://smith.ai/pricing/receptionists',
        what: 'A receptionist service with human-first plans and a separately priced AI receptionist. Its human plans include transfer destinations, and its pricing page says it is a month-to-month service.',
        price: 'Human-first from $300/month for 30 calls ($11.50 per extra call). AI receptionist: free for 25 calls a month, Pro from $150/month at $2.00 per call.',
        bestFor: 'Businesses that want live people on the phone, or a low-volume AI plan from the same vendor.',
        extra: { href: '/smith-ai-alternatives', label: 'Smith.ai alternatives compared' },
    },
    {
        name: 'Abby Connect',
        href: 'https://www.abby.com/pricing/',
        what: 'A receptionist service where one plan covers both human and AI answering. Its page says your Abby Minutes double when you choose AI, that every plan comes with a free trial, and that Abby is month to month.',
        price: 'From $164/month for 50 Abby Minutes; $1,380/month for 500. Overage at your plan’s Abby Minute rate.',
        bestFor: 'Teams that want humans and AI under one plan.',
        extra: { href: '/abby-connect-alternatives', label: 'Abby Connect alternatives compared' },
    },
    {
        name: 'Upfirst',
        href: 'https://upfirst.ai/pricing',
        what: 'An AI receptionist billed per call. Its page lists appointment scheduling into your calendar, call transfers and a 14-day free trial with no credit card, and says you can cancel anytime.',
        price: 'From $24.95/month for 30 calls, then $1.50 per extra call; $159.95/month for 300 calls.',
        bestFor: 'Low call volumes on a tight budget, or anyone who needs calendar booking.',
    },
    {
        name: 'Dialzara',
        href: 'https://dialzara.com/pricing',
        what: 'An AI receptionist billed by minutes of talk time, with outbound voice, SMS and website chat sold as add-ons. Its page lists a 7-day free trial and no contract.',
        price: 'From $29/month for 60 minutes ($0.48/min after); $199/month for 500 minutes ($0.40/min after).',
        bestFor: 'Buyers who want to start small and add texting or chat later.',
    },
    {
        name: 'Rosie',
        href: 'https://heyrosie.com/pricing',
        what: 'An AI answering service with a 7-day free trial. Its Scale plan adds booking appointments on your calendar, warm transfers and texts to callers during the call.',
        price: 'From $49/month for 250 minutes; $149/month for 1,000 minutes. No overage rate on the pricing page.',
        bestFor: 'Price-sensitive owners who want the most minutes per dollar.',
    },
];

const faqItems = [
    {
        question: 'How much does Ambs Call Center cost?',
        answer: `Ambs Call Center’s pricing page lists five Real People plans: $149 a month for 100 minutes, $330 for 250, $600 for 500, $1,195 for 1,000 and $2,945 for 2,500+ minutes. Excess minutes cost $1.29, $1.23, $1.22, $1.21 and $1.20 each on those plans. Those are listed prices, checked ${CHECKED} on ambscallcenter.com/pricing.`,
    },
    {
        question: 'Does Ambs Call Center offer AI answering?',
        answer: 'Yes. Its pricing table has an AI Receptionist column: a Starter plan at $19 a month with AI minutes at $0.79 each, then $75 for 100 minutes, $185 for 250, $350 for 500 and $650 for 1,000, with excess AI minutes from $0.77 down to $0.70. A Real People + AI column runs from $168 for 100 minutes to $2,964 for 2,500+ minutes.',
    },
    {
        question: 'Does Ambs Call Center charge any other fees?',
        answer: 'Its pricing page says all plans incur a flat $85 one-time set-up fee, that work time is calculated in 30-second increments and rounded up, that direct connect call patching is billed at 6¢ per minute, and that extra locations cost $5 a month per location plus an $85 set-up charge per location. Work time includes answering, taking messages, transfers and sending emails and texts.',
    },
    {
        question: 'How does Dooza Crew pricing compare with Ambs Call Center?',
        answer: `Dooza Crew is $5 to start, with phone calls included in your Crew plan. It is not billed per call or per minute, so it does not map onto Ambs Call Center’s units. Competitor prices on this page are listed prices checked ${CHECKED}.`,
    },
    {
        question: 'What is the cheapest Ambs Call Center alternative?',
        answer: 'On list price, Smith.ai’s AI receptionist is free for 25 calls a month, Upfirst starts at $24.95 a month for 30 calls, Dialzara at $29 for 60 minutes and Rosie at $49 for 250 minutes. All four are AI services, and Ambs’ own AI Starter plan is $19 a month plus $0.79 a minute. Among live services on this page, Posh’s $65 plan has the lowest entry price, billed per minute on top; Ambs’ Real People plans start at $149 for 100 minutes.',
    },
    {
        question: 'How much does Dooza Crew cost?',
        answer: 'Dooza Crew is $5 to start. Crew agents take phone calls too, and it is included in your Crew plan.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: TITLE,
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        dateModified: '2026-10-21',
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
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
            { '@type': 'ListItem', position: 2, name: 'Alternatives', item: `${SITE_URL}/alternatives` },
            { '@type': 'ListItem', position: 3, name: 'Ambs Call Center Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Ambs Call Center alternatives in 2026',
        itemListElement: alternatives.map((a, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: a.name,
            url: a.internal ? `${SITE_URL}${a.href}` : a.href,
        })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Dooza Crew',
        serviceType: 'AI agents that take phone calls and do web work for small businesses',
        url: `${SITE_URL}/ai-receptionist`,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            name: 'Dooza Crew, $5 to start',
            price: '5',
            priceCurrency: 'USD',
            description: 'Start for $5. Phone calls are included.',
            url: PAY_URL,
            availability: 'https://schema.org/InStock',
        },
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';
const link = 'text-primary-700 underline';

export default function AmbsCallCenterAlternativesPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl">
                        <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
                            <Link href="/" className="hover:underline">Home</Link>
                            <span className="mx-2">/</span>
                            <Link href="/alternatives" className="hover:underline">Alternatives</Link>
                            <span className="mx-2">/</span>
                            <span className="text-slate-700">Ambs Call Center Alternatives</span>
                        </nav>

                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Ambs Call Center Alternatives (2026 Prices)</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>The best Ambs Call Center alternative depends on whether callers must reach a live agent or you just need every call answered. Ambs’ pricing page lists live answering from $149 a month for 100 minutes to $600 for 500 minutes, and an AI Receptionist from $19 a month plus $0.79 a minute. Dooza Crew is $5 to start, and Crew agents take phone calls too. Listed prices, checked {CHECKED} on each vendor’s own page.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Start Dooza Crew for $5</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">We sell one of the services on this page (Dooza). Prices checked {CHECKED} on each vendor’s own pricing page; check the links yourself.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Ambs Call Center alternatives compared</h2>
                            <p className="mt-3 text-slate-700">
                                These services bill in different units: per call, per minute or per Abby Minute. Ambs bills by work time, and a human service’s minute is agent time, so it is not directly comparable with an AI minute. The closest like-for-like lines: Ambs’ 500 Real People minutes have a listed price of $600 a month and its 500 AI minutes $350. Dooza Crew is priced per organization (start for $5), not per minute or per call. Prices checked {CHECKED}.
                            </p>
                            <div className="mt-6 overflow-x-auto rounded-xl border border-slate-200">
                                <table className="w-full text-sm">
                                    <thead className="bg-slate-50">
                                        <tr>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Service</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Type</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Billed by</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Entry plan</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Other plans</th>
                                            <th className="px-3 py-3 text-left font-bold text-slate-900">Overage</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-slate-200 bg-primary-50">
                                            <td className="px-3 py-3 font-semibold text-slate-900">Dooza Crew <span className="text-xs font-normal text-slate-500">(ours)</span></td>
                                            <td className="px-3 py-3">AI</td>
                                            <td className="px-3 py-3">Per organization</td>
                                            <td className="px-3 py-3 font-semibold">Start for $5</td>
                                            <td className="px-3 py-3">Takes calls: included in Crew</td>
                                            <td className="px-3 py-3">Start for $5</td>
                                        </tr>
                                        {vendors.map((v) => (
                                            <tr key={v.name} className="border-t border-slate-200">
                                                <td className="px-3 py-3 font-medium text-slate-900"><a href={v.url} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{v.name}</a></td>
                                                <td className="px-3 py-3">{v.kind}</td>
                                                <td className="px-3 py-3">{v.unit}</td>
                                                <td className="px-3 py-3">{v.entry}</td>
                                                <td className="px-3 py-3">{v.more}</td>
                                                <td className="px-3 py-3">{v.overage}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-3 text-sm text-slate-600">
                                Sources (checked {CHECKED}):{' '}
                                {sourceUrls.map((u, i) => (
                                    <span key={u}>
                                        <a href={u} target="_blank" rel="noopener noreferrer nofollow" className={link}>{u.replace(/^https:\/\/(www\.)?/, '')}</a>
                                        {i < sourceUrls.length - 1 ? ', ' : '.'}
                                    </span>
                                ))}{' '}
                                Monthly list prices; some vendors discount annual billing. Ambs’ page says all plans incur a flat $85 one-time set-up fee and that work time is calculated in 30-second increments, rounded up. For 20 services in one place, see our <Link href="/blog/best-ai-receptionist" className={link}>best AI receptionist comparison</Link>; to estimate your own bill, try the <Link href="/ai-receptionist-cost-calculator" className={link}>AI receptionist cost calculator</Link>.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">The alternatives, one by one</h2>
                            <div className="mt-6 space-y-6">
                                {alternatives.map((a) => (
                                    <div key={a.name} className="rounded-xl border border-slate-200 p-5">
                                        <h3 className="text-lg font-bold text-slate-900">
                                            {a.internal ? (
                                                <Link href={a.href} className="hover:underline">{a.name}</Link>
                                            ) : (
                                                <a href={a.href} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">{a.name}</a>
                                            )}
                                        </h3>
                                        <p className="mt-2 text-slate-700">{a.what}</p>
                                        <p className="mt-2 text-slate-700"><strong>Price:</strong> {a.price}</p>
                                        <p className="mt-2 text-slate-700"><strong>Best for:</strong> {a.bestFor}</p>
                                        {a.extra ? (
                                            <p className="mt-2 text-slate-700"><Link href={a.extra.href} className={link}>{a.extra.label}</Link></p>
                                        ) : null}
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Where Dooza Crew fits</h2>
                            <p className="mt-3 text-slate-700">
                                Dooza Crew is $5 to start. Crew agents take phone calls too, and it is included in your Crew plan, so there is no separate phone service to buy. If you miss calls while you are on a job, see how it works for <Link href="/hvac-answering-service" className={link}>HVAC</Link>, <Link href="/plumbing-answering-service" className={link}>plumbing</Link> and <Link href="/garage-door-answering-service" className={link}>garage door</Link> businesses.
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
                                    <h3 className="font-bold text-slate-900">Dooza Crew does</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Take phone calls (included in your Crew plan)</li>
                                        <li>Chat with you on web or phone</li>
                                        <li>Browse the web and write files in its own workspace</li>
                                        <li>Ask you to Approve, Edit or Reject before it sends or pays</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <h3 className="font-bold text-slate-900">Dooza Crew does not</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Give you a human receptionist</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-700">
                                <strong>Where Ambs Call Center does more:</strong> Ambs puts real people on your calls, or real people plus AI on one plan. Its pricing page lists 24/7/365 coverage, 100% U.S.-based agents, bilingual answering in English and Spanish, dispatching, emergency line coverage, no holiday charges, local phone numbers, and real-time message delivery by email, text (SMS) or live transfer. It also lists data sent directly into your software, the MyAmbs web portal and integrations with Zapier and more. Dooza Crew agents are AI, not a person on the line. If callers must be able to reach a person, Ambs or another human service fits better.
                            </p>
                            <p className="mt-4 text-slate-700">
                                <strong>Other entry prices:</strong> Ambs’ own AI Receptionist has a Starter plan at $19 a month plus $0.79 per AI minute, and a 100-minute AI plan at $75, then $0.77 a minute. Those are listed prices before Ambs’ $85 one-time set-up fee. Upfirst ($24.95/month for 30 calls), Dialzara ($29 for 60 minutes; $99 for 220), Rosie ($49/month for 250 minutes) and Moneypenny’s AI plan ($99/month for 50 calls). Smith.ai’s AI plan is free for 25 calls. If your call volume is low or you need booking, start there. Dooza Crew is $5 to start, with phone calls included in your Crew plan, for teams that want agents that do more than answer calls.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Human or AI answering?</h2>
                            <p className="mt-3 text-slate-700">
                                Ambs’ Real People plans, Posh, Moneypenny’s People Answering, Ruby, Smith.ai’s human-first plans and Abby put a trained person on the line. A person handles upset callers, judgment calls and sales conversations better than AI does, and you pay for it: Ambs’ Real People plans start at $149 for 100 minutes, Posh’s plans with minutes included at $130 for 50, Moneypenny’s People plans at $165 for 50 minutes, Ruby at $250 for 50 minutes and Smith.ai’s human plans at $300 for 30 calls. If every caller needs a careful conversation with a person, a human service may suit you better than Dooza. Comparing against PATLive instead? See <Link href="/patlive-alternatives" className={link}>PATLive alternatives</Link>.
                            </p>
                            <p className="mt-3 text-slate-700">
                                AI services such as Dooza Crew, Ambs’ AI Receptionist, Rosie, Upfirst and Dialzara cost a fraction of that. They are not a human receptionist. A common setup is a person for the office day and AI for overflow and after hours. More detail: <Link href="/ai-receptionist" className={link}>AI answering service for small business</Link> and <Link href="/ai-receptionist" className={link}>AI receptionist</Link>.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop sending callers to voicemail</h2>
                            <p className="mt-3 text-slate-300">Start for $5. Phone calls are included in your Crew plan.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Start Dooza Crew for $5</a>
                                <a href="/book" className="inline-flex w-full items-center justify-center rounded-xl border-2 border-white px-6 py-4 font-bold text-white sm:w-auto">Book a free call</a>
                            </div>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
