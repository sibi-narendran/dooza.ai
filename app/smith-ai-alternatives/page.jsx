import Link from 'next/link';
import HearItFirst from '@/components/HearItFirst';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import { crewSignupUrl } from '@/lib/crewUrl';

const PATH = '/smith-ai-alternatives';
const PAY_URL = crewSignupUrl('smith-ai-alternatives-cta');
const CHECKED = 'October 21, 2026';
const TITLE = 'Smith.ai Alternatives: 8 Answering Services (2026)';
const DESCRIPTION = 'Smith.ai pricing and 8 alternatives (AI and human) compared on price and billing unit, checked Oct 21, 2026. Dooza Crew: $49/mo per organization after a 7-day free trial.';

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
        images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Smith.ai alternatives compared' }],
    },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: [`${SITE_URL}/logo.png`] },
};

// Every price below was read from the vendor's own pricing page on 2026-10-21 (quotes in the draft README).
// Units differ (calls, minutes, unique customers): do not convert them into one per-minute figure.
const vendors = [
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
        name: 'Ruby',
        url: 'https://www.ruby.com/pricing/',
        kind: 'Human',
        unit: 'Minutes',
        entry: '$250/month for 50 minutes',
        more: '$395 for 100; $720 for 200; $1,725 for 500 minutes',
        overage: 'Not listed on pricing page',
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
        href: 'https://www.ruby.com/pricing/',
        what: 'A live virtual receptionist service. Its pricing page describes “100% live, personalized communication” and 24/7 coverage.',
        price: 'From $250/month for 50 minutes; $1,725/month for 500 minutes. No overage rate on the pricing page.',
        bestFor: 'Businesses where every caller should reach a real person.',
    },
    {
        name: 'Abby Connect',
        href: 'https://www.abby.com/pricing/',
        what: 'A receptionist service where one plan covers both human and AI answering. Its page says your Abby Minutes double when you choose AI.',
        price: 'From $164/month for 50 Abby Minutes; $1,380/month for 500. Overage at your plan’s Abby Minute rate.',
        bestFor: 'Teams that want humans and AI under one plan.',
    },
    {
        name: 'Goodcall',
        href: 'https://www.goodcall.com/pricing',
        what: 'An AI answering service that bills by unique customer: one phone number, once a month, however often that person calls.',
        price: 'From $79/month for 100 unique customers, then 79¢ each; $129/month for 500.',
        bestFor: 'Businesses whose customers call back often, so unique-caller billing can cost less than per-call or per-minute billing.',
    },
    {
        name: 'Upfirst',
        href: 'https://upfirst.ai/pricing',
        what: 'An AI receptionist billed per call. Its page lists appointment scheduling into your calendar and call transfers.',
        price: 'From $24.95/month for 30 calls, then $1.50 per extra call; $159.95/month for 300 calls.',
        bestFor: 'Low call volumes on a tight budget, or anyone who needs calendar booking.',
    },
    {
        name: 'Dialzara',
        href: 'https://dialzara.com/pricing',
        what: 'An AI receptionist billed by minutes of talk time, with SMS and website chat sold as add-ons.',
        price: 'From $29/month for 60 minutes ($0.48/min after); $199/month for 500 minutes ($0.40/min after).',
        bestFor: 'Buyers who want to start small and add texting or chat later.',
    },
    {
        name: 'My AI Front Desk',
        href: 'https://www.myaifrontdesk.com/pricing',
        what: 'An AI front desk whose call-answering plan bundles 200 voice minutes with chat, SMS, CRM and automations, per its pricing page.',
        price: '$99/month ($79/month billed annually) for 200 voice minutes; extra minutes use 25 credits ($0.25) each.',
        bestFor: 'Businesses that want calls, chat and texting in one tool.',
    },
    {
        name: 'Rosie',
        href: 'https://heyrosie.com/pricing',
        what: 'An AI answering service. Its Scale plan adds appointment booking and routing calls to the right person.',
        price: 'From $49/month for 250 minutes; $149/month for 1,000 minutes. No overage rate on the pricing page.',
        bestFor: 'Price-sensitive owners who want the most minutes per dollar.',
    },
];

const faqItems = [
    {
        question: 'How much does Smith.ai cost?',
        answer: `Smith.ai’s human-first receptionists cost $300 a month for 30 calls ($11.50 per extra call), $810 for 90 calls and $2,100 for 300 calls. Its AI receptionist has a free plan with 25 calls a month ($3.00 per call after that) and a Pro plan from $150 a month at $2.00 per call. Prices checked ${CHECKED} on smith.ai.`,
    },
    {
        question: 'What is the cheapest Smith.ai alternative?',
        answer: `On list price, Upfirst starts at $24.95 a month for 30 calls, Dialzara at $29 a month for 60 minutes and Rosie at $49 a month for 250 minutes (checked ${CHECKED}). Smith.ai’s own AI plan is free for 25 calls. The cheapest plan is not always the best fit: check the billing unit and whether it books, texts or transfers.`,
    },
    {
        question: 'How does Dooza Crew pricing compare with Smith.ai?',
        answer: 'Dooza Crew costs $49 per organization per month after a 7-day free trial (no card needed), with phone calls included in your Crew plan. Smith.ai’s human-first plans start at $300 a month for 30 calls. Smith.ai’s AI receptionist is free for 25 calls a month and its Pro plan starts at $150 a month at $2.00 per call. Dooza Crew agents are AI, not a human receptionist.',
    },
    {
        question: 'Does Dooza Crew take phone calls?',
        answer: 'Yes. Crew agents take phone calls too. It is included in your Crew plan, so there is no separate phone service to buy. Upfirst and Rosie list booking on their pricing pages, and Smith.ai includes transfer destinations.',
    },
    {
        question: 'Is there a free trial?',
        answer: 'Dooza Crew has a 7-day free trial (no card needed), then $49 per organization per month. Check each other vendor’s terms on its own site.',
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
            { '@type': 'ListItem', position: 3, name: 'Smith.ai Alternatives', item: `${SITE_URL}${PATH}` },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Smith.ai alternatives in 2026',
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

export default function SmithAiAlternativesPage() {
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
                            <span className="text-slate-700">Smith.ai Alternatives</span>
                        </nav>

                        <section className="text-center">
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Smith.ai Alternatives for Small Businesses (2026 Prices)</h1>
                            <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-700">
                                <strong>The best Smith.ai alternative depends on who should answer. If you want AI agents that take your calls and do web work for you, Dooza Crew costs $49 a month per organization after a 7-day free trial. Smith.ai’s human receptionists start at $300 for 30 calls; its AI plan is free for 25 calls.</strong>
                            </p>
                            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                                <a href={PAY_URL} data-offer="crew" className={primaryButton}>Try Dooza Crew free for 7 days</a>
                                <a href="/book" className={secondaryButton}>Book a free call first</a>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">We sell one of the services on this page. Prices checked {CHECKED} on each vendor’s own pricing page; check the links yourself.</p>
                            <HearItFirst source="smith-ai-alternatives" />
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Smith.ai alternatives compared</h2>
                            <p className="mt-3 text-slate-700">
                                These services bill in different units: per call, per minute, or per unique customer. A 10-minute call costs one call on Upfirst but 10 minutes on Rosie, so compare on your own call pattern. Prices checked {CHECKED}.
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
                                {vendors.map((v, i) => (
                                    <span key={v.url}>
                                        <a href={v.url} target="_blank" rel="noopener noreferrer nofollow" className={link}>{v.url.replace(/^https:\/\/(www\.)?/, '')}</a>
                                        {i < vendors.length - 1 ? ', ' : '.'}
                                    </span>
                                ))}{' '}
                                Monthly list prices; some vendors discount annual billing. For 20 services in one place, see our <Link href="/blog/best-ai-receptionist" className={link}>best AI receptionist comparison</Link>.
                                {' '}An independent check: <a href="https://contractorguidepro.com/ai-voice-agents-contractors-2026" target="_blank" rel="noopener noreferrer" className={link}>Contractor Guide Pro’s AI voice agents comparison for contractors</a> (updated July 24, 2026) also lists Smith.ai’s hybrid plan at $300 a month for 30 calls.
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
                                <strong>Other entry prices:</strong> Rosie ($49/month for 250 minutes) and Upfirst ($24.95/month for 30 calls). Dialzara’s $29 plan and Smith.ai’s free AI plan are also listed. If your call volume is low or you need booking, start there. Dooza Crew is $49 a month per organization after a 7-day free trial, with phone calls included in your Crew plan, for teams that want agents that do more than answer calls.
                            </p>
                        </section>

                        <section className="mt-14">
                            <h2 className="text-2xl font-bold text-slate-900">Human or AI answering?</h2>
                            <p className="mt-3 text-slate-700">
                                Smith.ai’s human-first plan, Ruby and Abby put a trained person on the line. A person handles upset callers, judgment calls and sales conversations better than AI does, and you pay for it: Smith.ai’s human plans start at $300 for 30 calls and Ruby at $250 for 50 minutes. Comparing against Ruby instead? See <Link href="/ruby-alternatives" className={link}>Ruby Receptionist alternatives</Link>.
                            </p>
                            <p className="mt-3 text-slate-700">
                                AI services such as Dooza Crew, Rosie, Upfirst and Goodcall cost a fraction of that. They are not a human receptionist. A common setup is a person for the office day and AI for overflow and after hours. More detail: <Link href="/ai-receptionist" className={link}>AI answering service for small business</Link>.
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
