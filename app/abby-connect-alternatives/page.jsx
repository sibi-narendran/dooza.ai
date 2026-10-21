import Link from 'next/link';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { recepPayUrl } from '@/lib/aiReceptionistData';

const PATH = '/abby-connect-alternatives';
const PAY_URL = recepPayUrl('abby-connect-alternatives');
const CHECKED = 'October 21, 2026';
const TITLE = 'Abby Connect Alternatives: 9 Options, 2026 Prices';
const DESCRIPTION = 'Abby Connect starts at $164 a month for 50 Abby Minutes. Compare 9 AI and human answering services, with prices read from each vendor’s own page.';

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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Abby Connect alternatives compared' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// Every price below was read from the vendor's own pricing page on 2026-10-21 (quotes in the draft README).
// Units differ (calls, minutes, Abby Minutes, unique customers): do not convert them into one per-minute figure.
// Abby counts one minute of AI answering as half an Abby Minute (abby.com/pricing): say so wherever Abby Minutes appear.
const vendors = [
    {
        name: 'Abby Connect',
        url: 'https://www.abby.com/pricing/',
        kind: 'Human or AI',
        unit: 'Abby Minutes',
        entry: '$164/month for 50 Abby Minutes',
        more: '$329 for 100; $599 for 200; $1,380 for 500. 1 Abby Minute = 1 human minute or 2 AI minutes',
        overage: 'Billed at your plan’s Abby Minute rate',
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
        name: 'PATLive',
        url: 'https://www.patlive.com/pricing/',
        kind: 'Human',
        unit: 'Minutes',
        entry: '$99/month for 50 minutes',
        more: '$189 for 100; $349 for 200; $479 for 300; $759 for 500; $1,499 for 1,000 minutes. Pay as you go: $49/month, $2.99/min',
        overage: '$2.29/min (50 minutes) down to $1.69/min (1,000 minutes)',
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
        name: 'My AI Front Desk',
        url: 'https://www.myaifrontdesk.com/pricing',
        kind: 'AI',
        unit: 'Minutes',
        entry: '$99/month for 200 voice minutes',
        more: '$79/month if billed annually',
        overage: '25 credits ($0.25) per extra minute',
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
        bestFor: 'Owners who miss calls on the job and want each caller’s message in their inbox, without calendar booking or texting.',
    },
    {
        name: 'Ruby',
        href: 'https://www.ruby.com/plans-and-pricing/',
        what: 'A live virtual receptionist service priced by minutes per month, with live website chat sold separately. Its pricing page describes 24/7 coverage and says there are no extra fees for activation, onboarding, setup or customization.',
        price: 'From $250/month for 50 minutes; $1,725/month for 500 minutes. No overage rate, free trial or contract terms on the pricing page.',
        bestFor: 'Businesses that want every call answered by a person and can pay for it.',
        extra: '/ruby-alternatives',
        extraLabel: 'Ruby Receptionist alternatives compared',
    },
    {
        name: 'PATLive',
        href: 'https://www.patlive.com/pricing/',
        what: 'A live answering service with US-based receptionists, 24/7. Its pricing page says “PATLive does not use AI to answer calls”, that you can try any plan free for 14 days, and that it has no contracts.',
        price: 'From $99/month for 50 minutes ($2.29 per extra minute); $759/month for 500 minutes ($1.79 per extra minute). Pay as you go: $49/month plus $2.99 a minute.',
        bestFor: 'Businesses that want human-only answering billed by the minute.',
        extra: '/patlive-alternatives',
        extraLabel: 'PATLive alternatives compared',
    },
    {
        name: 'Smith.ai',
        href: 'https://smith.ai/pricing/receptionists',
        what: 'A receptionist service with human-first plans and a separately priced AI receptionist. Its human plans include transfer destinations, and its pricing page says it is a month-to-month service.',
        price: 'Human-first from $300/month for 30 calls ($11.50 per extra call). AI receptionist: free for 25 calls a month, Pro from $150/month at $2.00 per call.',
        bestFor: 'Businesses that want live people on the phone, or a low-volume AI plan from the same vendor.',
        extra: '/smith-ai-alternatives',
        extraLabel: 'Smith.ai alternatives compared',
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
        name: 'My AI Front Desk',
        href: 'https://www.myaifrontdesk.com/pricing',
        what: 'An AI front desk whose call-answering plan bundles 200 voice minutes with chat, SMS, CRM and automations, per its pricing page, with a 7-day free trial.',
        price: '$99/month ($79/month billed annually) for 200 voice minutes; extra minutes use 25 credits ($0.25) each.',
        bestFor: 'Businesses that want calls, chat and texting in one tool.',
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
        question: 'How much does Abby Connect cost?',
        answer: `Abby’s pricing page lists four plans: $164 a month for 50 Abby Minutes, $329 for 100, $599 for 200 and $1,380 for 500, plus a custom Enterprise plan. Overage is billed at your plan’s Abby Minute rate. The page also says there is no setup fee, every plan comes with a free trial, and Abby is month to month. It does not state the length of the trial or a refund policy. Checked ${CHECKED} on abby.com/pricing.`,
    },
    {
        question: 'What are Abby Minutes?',
        answer: 'Abby’s unit of usage. Per its pricing page, one minute of human answering uses one Abby Minute, and one minute of AI answering uses half an Abby Minute. So 500 Abby Minutes cover 500 minutes of human answering or up to 1,000 minutes of AI answering. On a call that mixes both, the AI portion bills at the AI rate and the human portion at the human rate.',
    },
    {
        question: 'Does Abby Connect use AI?',
        answer: 'Yes, as an option. Abby’s pricing page says “Just human, just AI, or both”: you choose how each call is handled and can switch the mix at any time. AI answering uses half an Abby Minute per minute, so a plan stretches up to twice as far if all your calls go to AI.',
    },
    {
        question: 'Is there a free Abby Connect alternative?',
        answer: `Smith.ai’s AI receptionist has a free plan for 25 calls a month ($3.00 per call after that), and Goodcall lets you start free with a demo agent. Others offer free trials: Upfirst and PATLive for 14 days, Dialzara, My AI Front Desk and Rosie for 7 days. Dooza has no free trial; you get a full refund if you cancel within 14 days of your first charge. Checked ${CHECKED}.`,
    },
    {
        question: 'What is a cheaper alternative to Abby Connect?',
        answer: `An AI answering service. Abby’s plans start at $164 a month for 50 Abby Minutes. Dooza costs $149 a month for up to 500 minutes, then $0.30 a minute. Upfirst ($24.95 for 30 calls), Dialzara ($29 for 60 minutes), Rosie ($49 for 250 minutes) and Goodcall ($79 for 100 unique customers) start lower still. AI is not a person: it does not handle upset callers or judgment calls the way a trained receptionist does. Prices checked ${CHECKED}.`,
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
            { '@type': 'ListItem', position: 3, name: 'Abby Connect Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Abby Connect alternatives in 2026',
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

export default function AbbyConnectAlternativesPage() {
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
                            <span className="text-slate-700">Abby Connect Alternatives</span>
                        </nav>

                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Abby Connect Alternatives for Small Businesses (2026 Prices)</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>The best Abby Connect alternative depends on whether you need a person on the line or just need every call answered. Abby’s pricing page lists $164 a month for 50 Abby Minutes and $1,380 for 500; an AI minute counts as half an Abby Minute. Dooza’s AI answering service costs $149 a month for up to 500 minutes, then $0.30 a minute. Prices checked {CHECKED} on each vendor’s own page.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} className={primaryButton}>Get Dooza: $149/month</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">We sell one of the services on this page (Dooza). Prices checked {CHECKED} on each vendor’s own pricing page; check the links yourself.</p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Abby Connect alternatives compared</h2>
                            <p className="mt-3 text-slate-700">
                                These services bill in different units: per call, per minute, per Abby Minute or per unique customer. A 10-minute call costs one call on Upfirst but 10 minutes on Rosie, so compare on your own call pattern. A human service’s minute is receptionist time, so it is not directly comparable with an AI minute. Abby Minutes need care: Abby counts one minute of human answering as one Abby Minute and one minute of AI answering as half, so 500 Abby Minutes are not 500 call minutes unless every call goes to a person. The closest like-for-like line: Abby’s Growth plan costs $1,380 a month for 500 Abby Minutes (500 human minutes, or up to 1,000 AI minutes); Dooza costs $149 for up to 500 AI minutes, so 1,000 minutes on Dooza would come to $299 with the $0.30 overage. Prices checked {CHECKED}.
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
                                Monthly list prices; some vendors discount annual billing. Abby’s page lists a free trial on every plan, no setup fee and month-to-month terms, but not the trial length or a refund policy. For 20 services in one place, see our <Link href="/blog/best-ai-receptionist" className={link}>best AI receptionist comparison</Link>; to estimate your own bill, try the <Link href="/ai-receptionist-cost-calculator" className={link}>AI receptionist cost calculator</Link>.
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
                                            <p className="mt-2 text-slate-700"><Link href={a.extra} className={link}>{a.extraLabel}</Link></p>
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
                                <strong>Cheaper on paper:</strong> Upfirst ($24.95/month for 30 calls), Dialzara ($29 for 60 minutes; $99 for 220), Rosie ($49/month for 250 minutes), Goodcall ($79 for 100 unique customers) and My AI Front Desk ($99 for 200 minutes) cost less than Dooza to start, and Smith.ai’s AI plan is free for 25 calls. If your call volume is low or you need booking, start there. Abby is not cheaper to start ($164 for 50 Abby Minutes), but if you want both humans and AI under one plan, Dooza cannot do that. Dooza makes sense when you want one flat price that covers up to 500 minutes a month, a stated $0.30 overage, and each caller’s message in your inbox.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Human or AI answering?</h2>
                            <p className="mt-3 text-slate-700">
                                Abby’s human receptionists, Ruby, PATLive and Smith.ai’s human-first plans put a trained person on the line. A person handles upset callers, judgment calls and sales conversations better than AI does, and you pay for it: Abby starts at $164 for 50 Abby Minutes, PATLive at $99 for 50 minutes, Ruby at $250 for 50 minutes and Smith.ai’s human plans at $300 for 30 calls. If you run a law firm and every caller needs a careful intake conversation, a human service like Abby, Ruby or PATLive may suit you better than Dooza. Weighing Ambs Call Center instead? See <Link href="/ambs-call-center-alternatives" className={link}>Ambs Call Center alternatives</Link>.
                            </p>
                            <p className="mt-3 text-slate-700">
                                AI services such as Dooza, Rosie, Upfirst and Goodcall cost a fraction of that. They are not a human receptionist. Abby sells both: its AI answering uses half an Abby Minute per minute, so the same plan covers more AI time than human time. A common setup is a person for the office day and AI for overflow and after hours. More detail: <Link href="/ai-answering-service-for-small-business" className={link}>AI answering service for small business</Link> and <Link href="/ai-receptionist" className={link}>AI receptionist</Link>.
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
