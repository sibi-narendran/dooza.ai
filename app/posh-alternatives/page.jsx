import Link from 'next/link';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { recepPayUrl } from '@/lib/aiReceptionistData';

const PATH = '/posh-alternatives';
const PAY_URL = recepPayUrl('posh-alternatives');
const CHECKED = 'October 21, 2026';
const TITLE = 'Posh Receptionist Alternatives: 8 Options, 2026 Prices';
const DESCRIPTION = 'Posh Virtual Receptionist plans run from $65 a month plus $2.30 a minute to $975 for 500 minutes. Compare 8 alternatives, priced from each vendor’s page.';

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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Posh Virtual Receptionist alternatives compared' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// Every price below was read from the vendor's own pricing page on 2026-10-21 (quotes in the draft README).
// Units differ (calls, minutes, mixed minutes, Abby Minutes, unique customers): do not convert them into one per-minute figure.
const vendors = [
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
        name: 'Posh (AI + Live Receptionist)',
        url: 'https://posh.com/ai/',
        kind: 'AI with live receptionists',
        unit: 'Mixed minutes',
        entry: '$130/month for 50 mixed minutes',
        more: '$215 for 100; $420 for 200; $700 for 350; $975 for 500 mixed minutes',
        overage: '$2.20/live min + $1.10/AI min (50) down to $1.95/live min + $0.98/AI min (500)',
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
        name: 'Goodcall',
        url: 'https://www.goodcall.com/pricing',
        kind: 'AI',
        unit: 'Unique customers',
        entry: '$79/month for 100 unique customers',
        more: '$129 for 500; $299 for 2,000 unique customers',
        overage: '79¢ (Starter), 26¢ (Growth), 15¢ (Scale) per extra customer',
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
        name: 'Dooza AI answering service',
        href: '/ai-answering-service-for-small-business',
        internal: true,
        what: 'An AI that answers your calls when you can’t, asks the caller the questions you give it, and emails you the message with the transcript and a link to the recording. Run by us, the company that publishes this page.',
        price: '$149/month for up to 500 minutes, then $0.30/min. Month to month, no free trial. Full refund if you cancel within 14 days of your first charge.',
        bestFor: 'Owners who miss calls on the job and want each caller’s message in their inbox, without calendar booking, texting or a person to hand calls to.',
    },
    {
        name: 'Moneypenny',
        href: 'https://www.moneypenny.com/us/pricing',
        what: 'A receptionist service with two US plan families: People Answering, billed by minutes, which lists 24/7 service, bilingual answering, CRM integrations and a mobile app and dashboard; and AI Answering, billed by calls, which lists human escalation. Its page asks for 30 days’ notice to cancel.',
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
    },
    {
        name: 'Goodcall',
        href: 'https://www.goodcall.com/pricing',
        what: 'An AI answering service that bills by unique customer: one phone number, once a month, however often that person calls. You can start free with a demo agent and add a number later.',
        price: 'From $79/month for 100 unique customers, then 79¢ each; $129/month for 500.',
        bestFor: 'Businesses whose customers call back often, so unique-caller billing can cost less than per-call or per-minute billing.',
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
        question: 'How much does Posh Virtual Receptionist cost?',
        answer: `Posh’s pricing page lists seven live receptionist plans: Chïc at $65 a month with no minutes included and $2.30 per minute, Vogue at $130 for 50 minutes, Elegant at $215 for 100, Luxurious at $420 for 200, Prestigious at $700 for 350, Lavish at $975 for 500 and Exclusive at $1,900 for 1,000 minutes. Extra minutes run from $2.20 down to $1.90. The page marks these rates “Effective 1/1/26”. Checked ${CHECKED} on posh.com/pricing.`,
    },
    {
        question: 'Does Posh have AI plans?',
        answer: 'Yes. Posh’s AI page lists AI + Live Receptionist plans billed in mixed minutes: $130 a month for 50, $215 for 100, $420 for 200, $700 for 350 and $975 for 500. Overage is priced separately for live minutes ($2.20 down to $1.95) and AI minutes ($1.10 down to $0.98). The page says callers can pivot to a live receptionist at any time, and marks these rates “Effective 6/1/26”.',
    },
    {
        question: 'Does Posh have a free trial or a contract?',
        answer: 'Its pricing page says the free trial is good for seven days or 250 receptionist minutes, whichever comes first, with no credit card required. It says Posh operates on month-to-month agreements with a true monthly billing cycle and no other fees. We found no refund terms on that page.',
    },
    {
        question: 'Is this about Poshmark?',
        answer: 'No. This page is about Posh Virtual Receptionist (posh.com), a live answering and virtual receptionist service for businesses, not Poshmark, the resale marketplace.',
    },
    {
        question: 'Is Dooza cheaper than Posh?',
        answer: `For most call volumes, yes, but it is a different kind of service. Dooza costs $149 a month for up to 500 minutes, then $0.30 a minute, and it is AI only. Posh’s 500-minute live plan costs $975. If you use only a few receptionist minutes a month, Posh’s Chïc plan can cost less: $65 plus 36 minutes at $2.30 is $147.80. Posh gives you live receptionists; Dooza does not. Prices checked ${CHECKED}.`,
    },
    {
        question: 'Can I cancel Dooza any time?',
        answer: 'Yes. Dooza is month to month with no contract, and you pay the first month up front; there is no free trial. If you cancel within 14 days of your first charge, you get a full refund.',
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
            { '@type': 'ListItem', position: 3, name: 'Posh Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Posh Virtual Receptionist alternatives in 2026',
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
        name: 'Dooza AI Answering Service',
        serviceType: 'AI phone answering service for small businesses',
        url: `${SITE_URL}/ai-answering-service-for-small-business`,
        areaServed: 'US',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: {
            '@type': 'Offer',
            name: 'AI answering service, monthly',
            price: '149',
            priceCurrency: 'USD',
            description: 'Up to 500 minutes a month, then $0.30 per minute. Month to month, paid up front. Cancel within 14 days of your first charge for a full refund.',
            url: PAY_URL,
            availability: 'https://schema.org/InStock',
        },
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';
const link = 'text-primary-700 underline';

export default function PoshAlternativesPage() {
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
                            <span className="text-slate-700">Posh Alternatives</span>
                        </nav>

                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Posh Virtual Receptionist Alternatives (2026 Prices)</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>The best Posh alternative depends on whether callers must reach a live receptionist or you just need every call answered. Posh Virtual Receptionist’s pricing page lists live receptionist plans from $65 a month plus $2.30 a minute up to $975 for 500 minutes. Dooza’s AI answering service costs $149 a month for up to 500 minutes, then $0.30 a minute. Prices checked {CHECKED} on each vendor’s own page.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get Dooza: $149/month</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">We sell one of the services on this page (Dooza). Prices checked {CHECKED} on each vendor’s own pricing page; check the links yourself.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Posh alternatives compared</h2>
                            <p className="mt-3 text-slate-700">
                                This page is about Posh Virtual Receptionist (posh.com), the live answering service, not Poshmark. These services bill in different units: per call, per minute, per Abby Minute or per unique customer. Posh bills by receptionist minutes, which its page defines as the time a receptionist spends on the phone with your callers or completing an activity for your account; its AI + Live plans bill mixed minutes. A human service’s minute is receptionist time, so it is not directly comparable with an AI minute. The closest like-for-like line: Posh’s 500 receptionist minutes cost $975 a month and Dooza’s up to 500 minutes cost $149, but Posh’s are human minutes and Dooza is AI. Prices checked {CHECKED}.
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
                                            <td className="px-3 py-3 font-semibold text-slate-900">Dooza <span className="text-xs font-normal text-slate-500">(ours)</span></td>
                                            <td className="px-3 py-3">AI</td>
                                            <td className="px-3 py-3">Minutes</td>
                                            <td className="px-3 py-3 font-semibold">$149/month for 500 minutes</td>
                                            <td className="px-3 py-3">One plan</td>
                                            <td className="px-3 py-3">$0.30/min</td>
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
                                Monthly list prices; some vendors discount annual billing. Posh marks its live receptionist rates “Effective 1/1/26” and its AI + Live rates “Effective 6/1/26”; its page lists a free trial of seven days or 250 receptionist minutes and month-to-month agreements, and does not state a refund policy. For 20 services in one place, see our <Link href="/blog/best-ai-receptionist" className={link}>best AI receptionist comparison</Link>; to estimate your own bill, try the <Link href="/ai-receptionist-cost-calculator" className={link}>AI receptionist cost calculator</Link>.
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
                            <h2 className="text-2xl font-bold text-slate-900">Where Dooza fits, and what it does not do</h2>
                            <p className="mt-3 text-slate-700">
                                Dooza is one plan: $149 a month for up to 500 minutes, then $0.30 a minute, month to month. It answers when you can’t pick up, asks the caller your questions, and emails you the message with the transcript and a link to the recording. If you miss calls while you are on a job, see how it works for <Link href="/hvac-answering-service" className={link}>HVAC</Link>, <Link href="/plumbing-answering-service" className={link}>plumbing</Link> and <Link href="/garage-door-answering-service" className={link}>garage door</Link> businesses.
                            </p>
                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <div className="rounded-xl border border-primary-100 bg-primary-50 p-5">
                                    <h3 className="font-bold text-slate-900">Dooza does</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Answer your calls when you can’t</li>
                                        <li>Ask the questions you give it</li>
                                        <li>Email you the message, transcript and recording link</li>
                                        <li>Up to 500 minutes a month; $0.30/min after</li>
                                    </ul>
                                </div>
                                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                                    <h3 className="font-bold text-slate-900">Dooza does not</h3>
                                    <ul className="mt-2 list-disc space-y-1 pl-5 text-slate-700">
                                        <li>Book onto your calendar</li>
                                        <li>Send texts</li>
                                        <li>Give you a human receptionist</li>
                                        <li>Do live transfers</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mt-4 text-slate-700">
                                <strong>Where Posh does more:</strong> Posh puts live receptionists on your calls, available 24/7 including after hours, per its pricing page. The same page says it can transfer relevant calls to you based on the status you set in its app, offers bilingual English and Spanish receptionists, can integrate with your software for tasks like appointment scheduling and lead intake, and can make outbound calls on your behalf. Its app also lets you text or call from your business number. On its AI + Live plans, callers can pivot to a live receptionist at any time. Dooza has no person to hand a call to and does none of those things: it takes the message and emails it to you. If callers must be able to reach a person, Posh or another human service fits better.
                            </p>
                            <p className="mt-4 text-slate-700">
                                <strong>Cheaper on paper:</strong> Moneypenny’s AI plan ($99/month for 50 calls), Upfirst ($24.95/month for 30 calls), Dialzara ($29 for 60 minutes; $99 for 220), Rosie ($49/month for 250 minutes) and Goodcall ($79 for 100 unique customers) cost less than Dooza to start, and Smith.ai’s AI plan is free for 25 calls. Posh’s own Chïc plan ($65 a month plus $2.30 a minute) costs less than Dooza up to 36 receptionist minutes a month ($65 + 36 × $2.30 = $147.80). If your call volume is low or you need booking, start there. Dooza makes sense when you want one flat price that covers up to 500 minutes a month, a stated $0.30 overage, and each caller’s message in your inbox.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Human or AI answering?</h2>
                            <p className="mt-3 text-slate-700">
                                Posh, Moneypenny’s People Answering, Ruby, Smith.ai’s human-first plans and Abby put a trained person on the line. A person handles upset callers, judgment calls and sales conversations better than AI does, and you pay for it: Posh’s plans with minutes included start at $130 for 50, Moneypenny’s People plans at $165 for 50 minutes, Ruby at $250 for 50 minutes and Smith.ai’s human plans at $300 for 30 calls. If every caller needs a careful conversation with a person, a human service may suit you better than Dooza. Comparing against PATLive instead? See <Link href="/patlive-alternatives" className={link}>PATLive alternatives</Link>.
                            </p>
                            <p className="mt-3 text-slate-700">
                                AI services such as Dooza, Rosie, Upfirst and Goodcall cost a fraction of that. They are not a human receptionist. A common setup is a person for the office day and AI for overflow and after hours. More detail: <Link href="/ai-answering-service-for-small-business" className={link}>AI answering service for small business</Link> and <Link href="/ai-receptionist" className={link}>AI receptionist</Link>.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop sending callers to voicemail</h2>
                            <p className="mt-3 text-slate-300">$149/month for up to 500 minutes, then $0.30/min. Month to month. Cancel within 14 days of your first charge for a full refund.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get Dooza: $149/month</a>
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
