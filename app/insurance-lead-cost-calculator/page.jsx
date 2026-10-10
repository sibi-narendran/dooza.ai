import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import InsuranceLeadCalculator from '@/components/InsuranceLeadCalculator';
import { SITE_URL } from '@/lib/site';
import { leadEconomics, LEAD_PRICE_SOURCES, SOURCES_CHECKED, SOURCES_CHECKED_LABEL } from '@/lib/insuranceLeadMath';

const PATH = '/insurance-lead-cost-calculator';
const TITLE = 'Exclusive vs Shared Insurance Leads Calculator (2026)';
const DESCRIPTION = 'Free calculator for insurance agents: enter lead price, close rate and commission to see cost per sold policy for exclusive vs shared leads, plus 2026 lead prices with sources.';

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: 'Insurance Lead Cost per Policy Calculator | Dooza', description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'website' },
    twitter: { card: 'summary', title: 'Insurance Lead Cost per Policy Calculator | Dooza', description: DESCRIPTION },
};

// Example inputs (not benchmarks), rendered server-side so the worked answer is in the HTML.
const DEFAULTS = { sharedCost: 10, sharedClose: 3, exclusiveCost: 25, exclusiveClose: 8, commission: 400 };
const ex = {
    shared: leadEconomics({ costPerLead: DEFAULTS.sharedCost, closeRate: DEFAULTS.sharedClose, commission: DEFAULTS.commission }),
    exclusive: leadEconomics({ costPerLead: DEFAULTS.exclusiveCost, closeRate: DEFAULTS.exclusiveClose, commission: DEFAULTS.commission }),
};
const money = (n) => `$${Math.round(n).toLocaleString('en-US')}`;

const faqItems = [
    {
        question: 'Are exclusive insurance leads worth the extra cost?',
        answer: `Only if they close enough more often to cover the price gap. Divide the exclusive price by the shared price: that is how many times more often an exclusive lead must close to cost the same per sold policy. At $${DEFAULTS.exclusiveCost} exclusive vs $${DEFAULTS.sharedCost} shared, exclusive leads must close at least 2.5 times as often. Use your own close rates from your CRM; they decide the answer.`,
    },
    {
        question: 'How do I calculate cost per sold policy?',
        answer: `Cost per policy = price per lead ÷ close rate. A $${DEFAULTS.sharedCost} lead that closes ${DEFAULTS.sharedClose}% of the time costs ${money(ex.shared.costPerPolicy)} per sold policy; a $${DEFAULTS.exclusiveCost} lead that closes ${DEFAULTS.exclusiveClose}% costs ${money(ex.exclusive.costPerPolicy)}.`,
    },
    {
        question: 'What close rate do I need to break even on purchased leads?',
        answer: `Break-even close rate = price per lead ÷ first-year commission per policy. With a $${DEFAULTS.commission} commission, a $${DEFAULTS.sharedCost} lead breaks even at ${ex.shared.breakEvenCloseRate}% and a $${DEFAULTS.exclusiveCost} lead at ${ex.exclusive.breakEvenCloseRate.toLocaleString('en-US', { maximumFractionDigits: 2 })}%. Renewals add to this, so year one is the conservative view.`,
    },
    {
        question: 'How do I calculate ROI on insurance leads?',
        answer: `ROI = (close rate × commission − price per lead) ÷ price per lead. A $${DEFAULTS.sharedCost} lead closing ${DEFAULTS.sharedClose}% with a $${DEFAULTS.commission} commission returns ${Math.round(ex.shared.roi)}% on lead spend; a $${DEFAULTS.exclusiveCost} lead closing ${DEFAULTS.exclusiveClose}% returns ${Math.round(ex.exclusive.roi)}%. This counts lead cost only: the time you spend calling each lead is extra.`,
    },
    {
        question: 'How much do insurance leads cost in 2026?',
        answer: 'It depends on the line and how the lead is sold. One 2026 review of 27 vendors (Insifter, reported by ActiveProspect) found most insurance leads cost $5 to $50, from under $1 for aged shared leads to $200+ for exclusive commercial ones. Elevarus puts Medicare leads at $5 to $15 shared, $15 to $40 real-time exclusive and $25 to $60 per live transfer (July 2026). Sources and dates are in the table on this page.',
    },
    {
        question: 'What does a Facebook or Google lead cost for insurance?',
        answer: 'Focus Digital measured a $58.70 average cost per lead for financial services on Facebook/Meta (August 2026). WordStream’s 2025 Google Ads benchmarks show $83.93 per lead for finance and insurance advertisers. Leads you generate yourself are exclusive to you, so compare them with exclusive purchased leads, not shared ones.',
    },
    {
        question: 'Does this calculator include renewals or chargebacks?',
        answer: 'No. It uses first-year commission only and ignores renewals, chargebacks and the time you spend working each lead. Add your typical renewal value to the commission field if you want a lifetime view.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: 'Insurance Lead Cost per Policy Calculator',
        url: `${SITE_URL}${PATH}`,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        description: DESCRIPTION,
        dateModified: SOURCES_CHECKED,
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
        creator: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
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
            { '@type': 'ListItem', position: 2, name: 'Insurance Lead Cost Calculator', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export default function InsuranceLeadCostCalculatorPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="mb-8 text-center">
                            <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                                Free tool for insurance agents · Sources checked {SOURCES_CHECKED_LABEL}
                            </span>
                            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Exclusive vs Shared Insurance Leads: Cost per Policy Calculator</h1>
                            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-700">
                                <strong>An exclusive lead is worth its price only if it closes more often than a shared lead by at least the price ratio: at ${DEFAULTS.exclusiveCost} vs ${DEFAULTS.sharedCost}, it must close 2.5 times as often.</strong>{' '}
                                Enter your own prices, close rates and commission to see your cost per sold policy.
                            </p>
                        </div>

                        <InsuranceLeadCalculator defaults={DEFAULTS} />

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>The two formulas</h2>
                            <ul>
                                <li><strong>Cost per sold policy</strong> = price per lead ÷ close rate.</li>
                                <li><strong>Break-even close rate</strong> = price per lead ÷ first-year commission per policy.</li>
                            </ul>
                            <p>
                                Worked example with the starting numbers (examples, not benchmarks): a ${DEFAULTS.sharedCost} shared lead closing {DEFAULTS.sharedClose}% costs {money(ex.shared.costPerPolicy)} per policy. A ${DEFAULTS.exclusiveCost} exclusive lead closing {DEFAULTS.exclusiveClose}% costs {money(ex.exclusive.costPerPolicy)} per policy. Exclusive wins here, but only just: at a 7% close rate it would cost {money(DEFAULTS.exclusiveCost / 0.07)} per policy and lose.
                            </p>

                            <h2>What insurance leads cost in 2026</h2>
                            <p>Published ranges, each linked to its source. Prices vary by state, line, filters and volume, so treat them as a starting point for your own quotes.</p>
                        </section>

                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Lead type</th>
                                        <th className="px-4 py-3 font-semibold">Price</th>
                                        <th className="px-4 py-3 font-semibold">Source</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {LEAD_PRICE_SOURCES.map((r) => (
                                        <tr key={r.what} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 text-slate-800">{r.what}</td>
                                            <td className="px-4 py-3 font-semibold text-slate-900">{r.range}</td>
                                            <td className="px-4 py-3 text-slate-700">
                                                <a href={r.url} rel="noopener" target="_blank" className="text-primary-700 underline">{r.source}</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">Sources checked {SOURCES_CHECKED_LABEL}. We re-check them monthly.</p>

                        <section className="prose prose-slate mt-10 max-w-none">
                            <h2>Before you buy more leads</h2>
                            <ul>
                                <li><strong>Measure your real close rate per source.</strong> Without it, every lead looks cheap or expensive by feel.</li>
                                <li><strong>Ask if &ldquo;exclusive&rdquo; is exclusive.</strong> Ask the vendor how many buyers see each lead and what happens to leads you return.</li>
                                <li><strong>Count leads you can&rsquo;t reach as cost.</strong> Duplicates, wrong numbers and leads with no consent record raise your real price per lead.</li>
                                <li><strong>Compare like with like.</strong> Leads from your own ads are exclusive to you; compare them with exclusive purchased leads, not shared ones.</li>
                            </ul>
                        </section>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
