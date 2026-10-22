import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import stateCounts from '@/lib/truckingStateCounts.json';
import { ICP1_A_PAY_URL } from '@/lib/offers';

const PATH = '/exclusive-trucking-insurance-leads';
const TITLE = 'Exclusive Trucking Insurance Leads: One Agency Per State';
const DESCRIPTION = 'Weekly list of trucking companies in your state renewing in 30-60 days, sold to one agency per state: $399/month, full refund if we resell your state.';
const UPDATED = '2026-10-21';
const UPDATED_LABEL = 'October 21, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=exclusive-trucking-leads';
const PAY_A = `${ICP1_A_PAY_URL}?client_reference_id=icp1-A-site`;
const CHECK_STATE = 'mailto:achilles@dooza.org?subject=Check%20my%20state%20(exclusive%20trucking%20list)&body=State%3A%20%0AAgency%3A%20%0APlan%20(B%20or%20C)%3A%20';

// States already sold or promised to one agency (Odysseus ledger work/ledger/exclusive_states.md, 2026-10-21).
// TX: only the South TX counties are taken; PA and FL are on hold for open offers.
const TAKEN = [
    ['TX', 'Taken: the South Texas counties. The rest of Texas: ask'],
    ['IL', 'Taken'],
    ['NY', 'Taken'],
    ['IA', 'Taken'],
    ['PA', 'On hold, may open'],
    ['FL', 'On hold, may open'],
    ['GA', 'Has a shared-list buyer, who gets first refusal on Georgia only for them'],
];
const TAKEN_CODES = TAKEN.map(([c]) => c);

// Renewals (3+ power units, 30-60 days out) per state in the run of 2026-10-19 (FMCSA open data).
const TOP_OPEN = stateCounts.states
    .filter((s) => !TAKEN_CODES.includes(s.code))
    .sort((a, b) => b.renewals - a.renewals)
    .slice(0, 10);

// Real rows from the Arizona list of 2026-10-21 (96 renewals; Odysseus data/feeds/AZ_icp1_2026-10-21.csv); names and contacts hidden.
const SAMPLE_ROWS = [
    ['Tucson', '8', 'Berkley Casualty Company', '$750,000', 'Nov 20, 2026 (30 days)'],
    ['Prescott', '5', 'Federated Mutual Insurance Co.', '$1,000,000', 'Nov 21, 2026 (31 days)'],
    ['Avondale', '11', 'Sentry Select Insurance Company', '$750,000', 'Nov 21, 2026 (31 days)'],
    ['Scottsdale', '44', 'Old Republic Insurance Company', '$1,000,000', 'Nov 22, 2026 (32 days)'],
    ['Peoria', '4', 'Berkley Casualty Company', '$750,000', 'Nov 22, 2026 (32 days)'],
];

const PLANS = [
    ['A. Shared state list', '$129 every 4 weeks', 'The weekly list for one state. Other agencies can buy the same state.'],
    ['B. Your state only', '$399 a month', 'The same list, sold to one agency in your state. We stop selling the shared list there. If we ever sell your state to another agent, you get all your money back.'],
    ['C. Two states only', '$699 a month', 'Plan B for two open states. If we ever sell your state to another agent, you get all your money back.'],
];

const faqItems = [
    {
        question: 'What are exclusive trucking insurance leads?',
        answer: 'Leads sold to one agency only, so no other agent calls the same trucker. Shared leads cost less but several agents race to the same owner. Dooza sells a whole state as exclusive: one agency gets that state’s weekly renewal list, and we stop selling it to anyone else.',
    },
    {
        question: 'How much do exclusive trucking insurance leads cost?',
        answer: 'Per lead, Get Insure Leads lists exclusive commercial truck web leads at $110 each and aged shared leads from $12 (their page, checked October 21, 2026). Dooza’s exclusive plan is $399 a month for a whole state’s weekly renewal list, or $699 a month for two states. Arizona’s list on October 21, 2026 had 96 fleets renewing in 30 to 60 days.',
    },
    {
        question: 'What happens if you sell my state to someone else?',
        answer: 'On plans B and C: if we ever sell your state to another agent, you get all your money back. One agency per state, first paid wins. If your state is taken we offer the next open state.',
    },
    {
        question: 'Which states are open?',
        answer: 'Every state except those listed as taken or on hold on this page (updated October 21, 2026). Email us your state and we reply the same day with the payment link if it is open.',
    },
    {
        question: 'Where does the data come from?',
        answer: 'FMCSA open data: the company’s registration (owner, phone, email, city, power units) and its insurer’s federal liability filing (BMC-91X: insurer and limit). The renewal date is an estimate, the next anniversary of the current filing, so confirm it on the call.',
    },
    {
        question: 'Is there a contract or a free trial?',
        answer: 'Month to month, cancel any time. Paid first, no free trial. Plan A has a direct payment link on this page; for B and C we confirm your state first, then send the link.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Exclusive trucking insurance renewal list',
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        description: DESCRIPTION,
        areaServed: 'US',
        offers: [
            { '@type': 'Offer', name: 'Shared state list', price: '129', priceCurrency: 'USD', description: 'Per 4 weeks.' },
            { '@type': 'Offer', name: 'One state, exclusive', price: '399', priceCurrency: 'USD', description: 'Per month.' },
            { '@type': 'Offer', name: 'Two states, exclusive', price: '699', priceCurrency: 'USD', description: 'Per month.' },
        ],
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: TITLE,
        url: `${SITE_URL}${PATH}`,
        dateModified: UPDATED,
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Trucking Insurance Leads', item: `${SITE_URL}/trucking-insurance-leads` },
            { '@type': 'ListItem', position: 3, name: 'Exclusive Trucking Insurance Leads', item: `${SITE_URL}${PATH}` },
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

function Cta() {
    return (
        <div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                <a href={CHECK_STATE} data-offer="icp1-bc" className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                    Check my state (plans B and C)
                </a>
                <a href={PAY_A} data-offer="icp1-a" className="rounded-xl border border-primary-300 px-6 py-3 font-semibold text-primary-700 hover:bg-primary-50">
                    Buy the shared list (plan A, $129)
                </a>
            </div>
            <p className="mt-3 text-sm text-slate-600">
                Email us your state; we reply the same day with the payment link if it is open. Paid first, month to month, cancel any time. Rather talk? <Link href={BOOK} className="font-semibold text-primary-700 underline">Book a free 30-minute call</Link>.
            </p>
        </div>
    );
}

export default function ExclusiveTruckingInsuranceLeadsPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                            For insurance agencies that write trucking · Updated {UPDATED_LABEL}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Exclusive trucking insurance leads: your state, only you</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Each week you get the trucking companies in your state whose liability insurance renews in about 30 to 60 days, with phone, current insurer and limit. With the exclusive plan no other agency gets your state: $399 a month. If we ever sell your state to another agent, you get all your money back.</strong>{' '}
                            One exclusive truck lead costs about $110 from one large lead seller; this is the whole state.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>Three plans</h2>
                            <p>Month to month, paid first, no free trial.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Plan</th>
                                        <th className="px-4 py-3 font-semibold">Price</th>
                                        <th className="px-4 py-3 font-semibold">What you get</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {PLANS.map(([plan, price, what]) => (
                                        <tr key={plan} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{plan}</td>
                                            <td className="px-4 py-3 text-slate-900">{price}</td>
                                            <td className="px-4 py-3 text-slate-700">{what}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>Shared or exclusive: what you pay elsewhere</h2>
                            <ul>
                                <li><strong>Aged shared leads:</strong> from $12 a lead; already sent to another agent (Get Insure Leads, checked October 21, 2026).</li>
                                <li><strong>Exclusive web leads:</strong> $110 a lead, one agent only (same page).</li>
                                <li><strong>Data subscriptions:</strong> from $49 a month (TruckerDB, checked October 21, 2026).</li>
                                <li><strong>Dooza exclusive state:</strong> $399 a month for every renewal-timed fleet in your state, and nobody else gets the list.</li>
                            </ul>
                            <p>More vendors and prices: <Link href="/best-trucking-insurance-leads">trucking insurance lead sources compared</Link>.</p>
                        </section>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>What one week looks like: Arizona, October 21, 2026</h2>
                            <p>96 fleets with 3 or more power units renewing in 30 to 60 days; 96 with a phone, 93 with an email. Five real rows below; in this public sample we hide the company, DOT and MC number, owner, phone and email. Your list has them all.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[640px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">City</th>
                                        <th className="px-4 py-3 font-semibold">Power units</th>
                                        <th className="px-4 py-3 font-semibold">Current insurer</th>
                                        <th className="px-4 py-3 font-semibold">Liability limit</th>
                                        <th className="px-4 py-3 font-semibold">Estimated renewal</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SAMPLE_ROWS.map((r, i) => (
                                        <tr key={i} className="border-b border-slate-100">
                                            {r.map((c, j) => (
                                                <td key={j} className="px-4 py-3 text-slate-700">{c}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>Which states are open</h2>
                            <p>One agency per state, first paid wins. Every state not listed here is open (October 21, 2026):</p>
                            <ul>
                                {TAKEN.map(([code, note]) => (
                                    <li key={code}><strong>{code}:</strong> {note}</li>
                                ))}
                            </ul>
                            <p>Open states with the most renewals in the 30 to 60 day window (run of October 19, 2026, fleets with 3+ power units):</p>
                            <ul>
                                {TOP_OPEN.map((s) => (
                                    <li key={s.code}>{s.name}: {s.renewals} renewals, {s.newAuthorities} new authorities that week</li>
                                ))}
                            </ul>
                        </section>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="mt-14">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
