import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';

const PATH = '/trucking-insurance-leads';
const TITLE = 'Trucking Insurance Leads Near Renewal, Every Monday';
const DESCRIPTION = 'For agencies that write commercial trucking: every Monday, the trucking companies in your state renewing in 30-60 days, with current insurer, plus new authorities. One agency per state. 4 weeks free, then $129 per 4 weeks.';
const UPDATED = '2026-10-12';
const UPDATED_LABEL = 'October 12, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=trucking-insurance-leads';

// Rows in each state's Monday list on 2026-10-12 (FMCSA open data, Dooza's own run).
const STATE_COUNTS = [
    { state: 'Illinois', renewals: 523, newAuthorities: 115 },
    { state: 'Pennsylvania', renewals: 383, newAuthorities: 119 },
    { state: 'Georgia', renewals: 202, newAuthorities: 102 },
    { state: 'New York', renewals: 152, newAuthorities: 52 },
];

const COLUMNS = [
    ['Company, DOT and MC number', 'From the FMCSA registration.'],
    ['Owner or officer name', 'As filed with FMCSA.'],
    ['Phone and email', 'As filed with FMCSA. Rows with no phone are left out.'],
    ['City and power units', 'Renewals list only fleets with 3 or more power units.'],
    ['Current insurer and liability limit', 'From the insurer’s federal liability filing (BMC-91X).'],
    ['Estimated renewal date and days out', 'The next anniversary of the current filing’s effective date. Confirm it on the call.'],
];

const faqItems = [
    {
        question: 'Where does the trucking renewal data come from?',
        answer: 'Public FMCSA data on data.transportation.gov: the Company Census (contact details, fleet size), the insurance and authority history files, and the BMC-91X liability filings that insurers make for each carrier. We join them every week and keep the companies in your state.',
    },
    {
        question: 'How accurate are the renewal dates?',
        answer: 'They are estimates. FMCSA does not publish policy expiry dates, so we use the next anniversary of the current liability filing’s effective date. Some policies run 6 months or are cancelled mid-term, so treat each date as a reason to call and confirm it on the call.',
    },
    {
        question: 'Which states can I get?',
        answer: 'Any US state where no other agency has claimed the list. Each state goes to one agency only. On October 12, 2026, the Monday lists ranged from 152 renewals (New York) to 523 (Illinois).',
    },
    {
        question: 'How is this different from buying trucking insurance leads?',
        answer: 'Bought leads are usually truckers who asked for a quote, sold per lead and often to several agents. This list is contacts from public filings, timed to renewal, for a flat $129 per 4 weeks and only for your agency in your state. Nobody on it has asked for a quote yet: you make the first call.',
    },
    {
        question: 'What if a number is wrong?',
        answer: 'Reply “SWAP” with the DOT number and a replacement company comes in the next Monday list.',
    },
    {
        question: 'Does Dooza sell insurance or give coverage advice?',
        answer: 'No. Dooza is not an insurance agency. We find and organise the trucking companies; your agency quotes and writes the policies.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: 'Weekly trucking insurance renewal list',
        serviceType: 'Trucking insurance lead list for insurance agencies',
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        areaServed: 'US',
        audience: { '@type': 'BusinessAudience', audienceType: 'Independent insurance agencies that write commercial trucking' },
        provider: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        offers: { '@type': 'Offer', price: '129', priceCurrency: 'USD', description: 'Per 4 weeks, after 4 free weeks. One agency per state.' },
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
            { '@type': 'ListItem', position: 2, name: 'Trucking Insurance Leads', item: `${SITE_URL}${PATH}` },
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

function Cta({ label = 'Claim your state' }) {
    return (
        <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
            <Link href={BOOK} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                {label}
            </Link>
            <span className="text-sm text-slate-600">Free 30-minute call. First 4 weeks free, then $129 per 4 weeks.</span>
        </div>
    );
}

export default function TruckingInsuranceLeadsPage() {
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
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Trucking insurance leads near renewal, every Monday</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>Every Monday you get the trucking companies in your state whose liability insurance renews in the next 30 to 60 days, with their current insurer named, plus the new trucking authorities from the past week that still need coverage.</strong>{' '}
                            One agency per state. The first 4 weeks are free, then $129 every 4 weeks.
                        </p>
                        <div className="mt-8">
                            <Cta />
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>What is in each Monday list</h2>
                            <p>Two lists for your state, as a spreadsheet:</p>
                            <ul>
                                <li><strong>Renewals:</strong> fleets with 3 or more power units whose liability renews in roughly 30 to 60 days.</li>
                                <li><strong>New authorities:</strong> trucking companies that applied for operating authority in the last 7 days and have no liability filing yet. FMCSA won’t activate their authority until one is filed.</li>
                            </ul>
                        </section>

                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">Column</th>
                                        <th className="px-4 py-3 font-semibold">Where it comes from</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {COLUMNS.map(([col, src]) => (
                                        <tr key={col} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{col}</td>
                                            <td className="px-4 py-3 text-slate-700">{src}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How big is a list?</h2>
                            <p>It depends on the state. Rows in the Monday lists on {UPDATED_LABEL}:</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[480px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">State</th>
                                        <th className="px-4 py-3 font-semibold">Renewals (30-60 days)</th>
                                        <th className="px-4 py-3 font-semibold">New authorities (last 7 days)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {STATE_COUNTS.map((r) => (
                                        <tr key={r.state} className="border-b border-slate-100">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{r.state}</td>
                                            <td className="px-4 py-3 text-slate-800">{r.renewals}</td>
                                            <td className="px-4 py-3 text-slate-800">{r.newAuthorities}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">Source: FMCSA open data, Dooza’s weekly run of {UPDATED_LABEL}. Numbers change every week.</p>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>Also in your first week</h2>
                            <ul>
                                <li><strong>A 90-day renewal calendar</strong> for your state, so you can plan the next three months of calls.</li>
                                <li><strong>A first-call script</strong> for both lists. For renewals it opens with the insurer and date from the public filing and offers a second quote; for new authorities it starts with the liability filing they need before they can haul.</li>
                            </ul>

                            <h2>How the renewal date is estimated</h2>
                            <p>
                                FMCSA does not publish when a trucking policy expires. Insurers do file each carrier’s liability policy (form BMC-91X) with its effective date, so we take the next anniversary of that date. Policies that run 6 months or were cancelled mid-term will show the wrong month, which is why the script asks the owner to confirm the date. Wrong number or dead lead? Reply “SWAP” with the DOT number and you get a replacement the next Monday.
                            </p>

                            <h2>What it costs</h2>
                            <ul>
                                <li>First 4 weeks free.</li>
                                <li>Then $129 every 4 weeks, billed by card through Stripe.</li>
                                <li>One agency per state: once your state is claimed, nobody else gets that list from us.</li>
                            </ul>
                            <p>
                                Comparing it with bought leads? Our <Link href="/insurance-lead-cost-calculator">insurance lead cost calculator</Link> shows cost per sold policy from price per lead and close rate.
                            </p>

                            <h2>Rather not dial yourself?</h2>
                            <p>
                                We can phone the truckers on your list and book the owners onto your calendar as quote calls. The first held appointment is free; after that it is $150, charged only when the owner shows up and asks for a quote. We are starting with a few agencies; ask about it on the call.
                            </p>

                            <h2>Calling rules</h2>
                            <p>Many owner numbers are cell phones. Dial by hand and check the Do Not Call list before you call; the script is written for a first call by a licensed agent.</p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Is your state still open?</h2>
                            <p className="mt-2 text-slate-700">Book a free 30-minute call. We check that your state is still open, answer your questions and start your 4 free weeks.</p>
                            <div className="mt-5">
                                <Cta label="Check my state" />
                            </div>
                        </div>

                        <section className="mt-12">
                            <h2 className="mb-6 text-2xl font-bold text-slate-900">Frequently asked questions</h2>
                            <FAQAccordion items={faqItems} />
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
