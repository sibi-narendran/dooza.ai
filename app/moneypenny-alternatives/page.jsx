import Link from 'next/link';
import HearItFirst from '@/components/HearItFirst';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { crewSignupUrl } from '@/lib/crewUrl';

const PATH = '/moneypenny-alternatives';
const PAY_URL = crewSignupUrl('moneypenny-alternatives-cta');
const CHECKED = 'October 21, 2026';
const TITLE = 'Moneypenny Alternatives: 8 Options, 2026 US Prices';
const DESCRIPTION = 'Moneypenny’s US plans start at $99 a month for 50 AI calls or $165 for 50 people minutes. Compare 8 alternatives, priced from each vendor’s own page.';

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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Moneypenny alternatives compared' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// Every price below was read from the vendor's own pricing page on 2026-10-21 (quotes in the draft README).
// Units differ (calls, minutes, Abby Minutes, unique customers): do not convert them into one per-minute figure.
const vendors = [
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
        name: 'Moneypenny (People Answering)',
        url: 'https://www.moneypenny.com/us/pricing',
        kind: 'Human',
        unit: 'Minutes',
        entry: '$165/month for 50 minutes',
        more: '$265 for 100; $422 for 200; $985 for 500 minutes',
        overage: '$2.85/min (50 minutes) down to $2.09/min (500 minutes)',
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
        name: 'Dooza Crew',
        href: '/ai-receptionist',
        internal: true,
        what: 'AI agents (a lead agent plus helper agents) you chat with on web or phone. They browse the web, write files in their own workspace and take phone calls, and they ask you in chat before they send or pay. Run by us, the company that publishes this page.',
        price: '$49/month per organization after a 7-day free trial (no card needed). Phone calls are included in your Crew plan.',
        bestFor: 'Teams that want AI agents that do more than answer calls, with the phone included in one plan.',
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
        question: 'How much does Moneypenny cost in the US?',
        answer: `Moneypenny’s US pricing page lists AI Answering at $99 a month for 50 calls, $199 for 100, $435 for 250 and $775 for 500 calls, with extra calls from $2.39 down to $1.69. People Answering costs $165 a month for 50 minutes, $265 for 100, $422 for 200 and $985 for 500 minutes, with extra minutes from $2.85 down to $2.09. Checked ${CHECKED} on moneypenny.com/us/pricing.`,
    },
    {
        question: 'Does Moneypenny have a contract or cancellation notice?',
        answer: 'Its pricing page says no long-term commitment is required and there are no hidden fees, and that you need to give 30 days’ notice to cancel, effective from your next billing date. We found no free trial or refund terms on that page.',
    },
    {
        question: 'What is the difference between Moneypenny’s AI and People plans?',
        answer: 'Per its pricing page, AI Answering is billed by calls and lists 24/7 service, a reporting dashboard and human escalation. People Answering is billed by minutes and lists 24/7 service, bilingual answering, CRM integrations and a mobile app and dashboard.',
    },
    {
        question: 'How does Dooza Crew pricing compare with Moneypenny?',
        answer: `Dooza Crew is $49 per organization per month after a 7-day free trial (no card needed), with phone calls included in your Crew plan. It is priced per organization, not per call or per minute, so it does not map onto Moneypenny’s units. Competitor prices on this page are listed prices checked ${CHECKED}.`,
    },
    {
        question: 'Do AI answering services replace a human receptionist?',
        answer: 'Not fully. AI is good at answering every call, asking set questions and passing on the message. A person is better with upset callers, judgment calls and sales conversations. A common setup is a person for the office day and AI for overflow and after hours.',
    },
    {
        question: 'How much does Dooza Crew cost?',
        answer: 'Dooza Crew is $49 per organization per month after a 7-day free trial (no card needed). Users and agents are unlimited, and AI usage is included with a hard spending cap. Crew agents take phone calls too, and it is included in your Crew plan.',
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
            { '@type': 'ListItem', position: 3, name: 'Moneypenny Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Moneypenny alternatives in 2026',
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
            name: 'Dooza Crew, monthly per organization',
            price: '49',
            priceCurrency: 'USD',
            description: '$49 per organization per month after a 7-day free trial (no card needed). Phone calls are included in your Crew plan.',
            url: PAY_URL,
            availability: 'https://schema.org/InStock',
        },
    },
];

const primaryButton = 'inline-flex w-full items-center justify-center rounded-xl bg-primary-700 px-6 py-4 text-base font-bold text-white shadow-lg transition hover:bg-primary-800 sm:w-auto';
const secondaryButton = 'inline-flex w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-6 py-4 text-base font-bold text-slate-900 transition hover:border-primary-600 hover:text-primary-800 sm:w-auto';
const link = 'text-primary-700 underline';

export default function MoneypennyAlternativesPage() {
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
                            <span className="text-slate-700">Moneypenny Alternatives</span>
                        </nav>

                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Moneypenny Alternatives for Small Businesses (2026 US Prices)</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>The best Moneypenny alternative depends on whether callers must be able to reach a person or you just need every call answered. Moneypenny’s US pricing page lists AI Answering from $99 a month for 50 calls and People Answering from $165 for 50 minutes. Dooza Crew costs $49 a month per organization after a 7-day free trial, and Crew agents take phone calls too. Prices checked {CHECKED} on each vendor’s own page.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Try Dooza Crew free for 7 days</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">We sell one of the services on this page (Dooza). Prices checked {CHECKED} on each vendor’s own pricing page; check the links yourself.</p>
                            <HearItFirst source="moneypenny-alternatives" />
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Moneypenny alternatives compared</h2>
                            <p className="mt-3 text-slate-700">
                                These services bill in different units: per call, per minute, per Abby Minute or per unique customer. Moneypenny’s AI plans count calls and its People plans count minutes. A 10-minute call costs one call on Moneypenny AI or Upfirst but 10 minutes on Rosie, so compare on your own call pattern. A human service’s minute is receptionist time, so it is not directly comparable with an AI minute. The closest like-for-like line: Moneypenny’s 500 People minutes cost $985 a month. Dooza Crew is priced per organization ($49 a month after a 7-day free trial), not per minute or per call. Moneypenny’s 500 AI calls cost $775. Prices checked {CHECKED}.
                            </p>
                            <p className="mt-3 text-slate-700">
                                Prices move: <a href="https://fitsmallbusiness.com/best-answering-service/" className={link} target="_blank" rel="noopener noreferrer">FitSmallBusiness’s answering service guide</a> (updated October 8, 2026) is a good overview of the human services, but it lists Moneypenny’s AI answering from $69 for 25 calls; on {CHECKED} Moneypenny’s US pricing page started its AI plans at $99 for 50 calls, and its 50-minute People plan at $165 with extra minutes at $2.85. Check the vendor’s own page before you buy.
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
                                            <td className="px-3 py-3 font-semibold">$49/month per organization, 7-day free trial</td>
                                            <td className="px-3 py-3">Takes calls: included in Crew</td>
                                            <td className="px-3 py-3">AI usage included, hard spending cap</td>
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
                                Monthly list prices; some vendors discount annual billing. Moneypenny’s page asks for 30 days’ notice to cancel and does not state a free trial or refund policy. For 20 services in one place, see our <Link href="/blog/best-ai-receptionist" className={link}>best AI receptionist comparison</Link>; to estimate your own bill, try the <Link href="/ai-receptionist-cost-calculator" className={link}>AI receptionist cost calculator</Link>.
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
                                Dooza Crew is $49 a month per organization after a 7-day free trial. Crew agents take phone calls too, and it is included in your Crew plan, so there is no separate phone service to buy. If you miss calls while you are on a job, see how it works for <Link href="/hvac-answering-service" className={link}>HVAC</Link>, <Link href="/plumbing-answering-service" className={link}>plumbing</Link> and <Link href="/garage-door-answering-service" className={link}>garage door</Link> businesses.
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
                                <strong>Where Moneypenny does more:</strong> every Moneypenny AI Answering plan on its pricing page lists human escalation. Dooza Crew agents are AI, not a person on the line. If callers must be able to reach a person, Moneypenny or another human service fits better. Comparing against MAP Communications instead? See <Link href="/map-communications-alternatives" className={link}>MAP Communications alternatives</Link>.
                            </p>
                            <p className="mt-4 text-slate-700">
                                <strong>Other entry prices:</strong> Moneypenny’s AI plan ($99/month for 50 calls), Upfirst ($24.95/month for 30 calls), Dialzara ($29 for 60 minutes; $99 for 220), Rosie ($49/month for 250 minutes) and My AI Front Desk ($99 for 200 minutes). Smith.ai’s AI plan is free for 25 calls. If your call volume is low or you need booking, start there. Dooza Crew is $49 a month per organization after a 7-day free trial, with phone calls included in your Crew plan, for teams that want agents that do more than answer calls.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Human or AI answering?</h2>
                            <p className="mt-3 text-slate-700">
                                Moneypenny’s People Answering, Ruby, Smith.ai’s human-first plans and Abby put a trained person on the line. A person handles upset callers, judgment calls and sales conversations better than AI does, and you pay for it: Moneypenny’s People plans start at $165 for 50 minutes, Ruby at $250 for 50 minutes and Smith.ai’s human plans at $300 for 30 calls. If every caller needs a careful conversation with a person, a human service may suit you better than Dooza. Comparing against PATLive instead? See <Link href="/patlive-alternatives" className={link}>PATLive alternatives</Link>.
                            </p>
                            <p className="mt-3 text-slate-700">
                                AI services such as Dooza Crew, Rosie, Upfirst and Goodcall cost a fraction of that. They are not a human receptionist. A common setup is a person for the office day and AI for overflow and after hours. More detail: <Link href="/ai-receptionist" className={link}>AI answering service for small business</Link> and <Link href="/ai-receptionist" className={link}>AI receptionist</Link>.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>

                        <section className="mt-14 rounded-2xl bg-slate-950 p-8 text-center text-white">
                            <h2 className="text-2xl font-bold">Stop sending callers to voicemail</h2>
                            <p className="mt-3 text-slate-300">$49/month per organization after a 7-day free trial (no card needed). Phone calls are included in your Crew plan.</p>
                            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Try Dooza Crew free for 7 days</a>
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
