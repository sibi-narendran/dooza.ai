import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import StateRenewalCounter from '@/components/StateRenewalCounter';
import TruckingSampleForm from '@/components/TruckingSampleForm';
import { CLAIMED_STATES } from '@/lib/truckingClaimedStates';
import stateCounts from '@/lib/truckingStateCounts.json';

const PATH = '/trucking-insurance-leads';
const TITLE = 'Trucking Insurance Leads Near Renewal, Every Monday';
const DESCRIPTION = 'For agencies that write commercial trucking: every Monday, the trucking companies in your state renewing in 30-60 days, with current insurer, plus new authorities. One agency per state. First week free, then $129 per 4 weeks.';
const UPDATED = '2026-10-12';
const UPDATED_LABEL = 'October 12, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=trucking-insurance-leads';

// Rows in each state's Monday list on 2026-10-12 (FMCSA open data, Dooza's own run).
const STATE_COUNTS = stateCounts.states;
const US_RENEWALS = STATE_COUNTS.reduce((n, x) => n + x.renewals, 0);
const US_NEW = STATE_COUNTS.reduce((n, x) => n + x.newAuthorities, 0);

const COLUMNS = [
    ['Company, DOT and MC number', 'From the FMCSA registration.'],
    ['Owner or officer name', 'As filed with FMCSA.'],
    ['Phone and email', 'As filed with FMCSA. Rows with no phone are left out.'],
    ['City and power units', 'Renewals list only fleets with 3 or more power units.'],
    ['Current insurer and liability limit', 'From the insurer’s federal liability filing (BMC-91X).'],
    ['Estimated renewal date and days out', 'The next anniversary of the current filing’s effective date. Confirm it on the call.'],
];

// Real rows from the Pennsylvania list of 2026-10-12 (/home/hercules/data/feeds/PA_2026-10-12.csv); names and contacts hidden.
const SAMPLE_ROWS = [
    ['Renewal', 'Feasterville Trevose', '12', 'GEICO Marine Insurance Company', '$750,000', 'Nov 11, 2026 (30 days)'],
    ['Renewal', 'Hazleton', '4', 'GEICO General Insurance Company', '$750,000', 'Nov 11, 2026 (30 days)'],
    ['Renewal', 'Montoursville', '3', 'Selective Way Insurance Company', '$750,000', 'Nov 11, 2026 (30 days)'],
    ['Renewal', 'Montrose', '4', 'Travelers Indemnity Company', '$750,000', 'Nov 11, 2026 (30 days)'],
    ['New authority', 'Allentown', '2', 'None filed yet', 'Needs at least $750,000', 'Applied Oct 11, 2026'],
    ['New authority', 'McSherrystown', '1', 'None filed yet', 'Needs at least $750,000', 'Applied Oct 10, 2026'],
];

const faqItems = [
    {
        question: 'How does $129 compare with paying $35 a lead?',
        answer: '$129 every 4 weeks is about $32 a week, flat, however many rows your state has. A per-lead vendor at $35 charges that for a single lead, often a trucker who asked for a quote and may be sold to several agents. Our rows have not asked for a quote: you make the first call, timed to their renewal, and nobody else in your state gets the list from us.',
    },
    {
        question: 'Who is Dooza and where do the leads come from?',
        answer: 'Dooza is a small US company (Adam Laboratory Inc., Delaware) founded by Sibi Narendran. We are not an insurance agency. The rows come from public FMCSA filings, joined every week by our software: you can check any company on FMCSA SAFER by its DOT number.',
    },
    {
        question: 'Is there an X-date list for trucking insurance?',
        answer: 'Not an official one: FMCSA does not publish when a trucking policy expires. Our Monday renewals list is the closest thing. It lists the trucking companies in your state with 3 or more power units whose liability filing (BMC-91X) is estimated to renew in the next 30 to 60 days, with the current insurer and limit named. The X-date is the next anniversary of the filing\'s effective date, so confirm it on the call.',
    },
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
        answer: 'Any US state where no other agency has claimed the list. Each state goes to one agency only. On October 12, 2026 there were 6,808 such renewals and 2,057 new authorities across the 50 states and DC; the counter on this page shows your state.',
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
        offers: { '@type': 'Offer', price: '129', priceCurrency: 'USD', description: 'Per 4 weeks, after a free first week. One agency per state.' },
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
            <span className="text-sm text-slate-600">Free 30-minute call. First week free, then $129 per 4 weeks.</span>
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
                            One agency per state. The first week is free, then $129 every 4 weeks.
                        </p>
                        <div className="mt-8">
                            <Cta />
                            <p className="mt-3 text-sm text-slate-700">
                                Not ready for a call? <a href="#sample" className="font-semibold text-primary-700 underline">Get 5 free rows from your state</a> by email first.
                            </p>
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>What is in each Monday list</h2>
                            <p>Three lists for your state, as a spreadsheet:</p>
                            <ul>
                                <li><strong>Renewals:</strong> fleets with 3 or more power units whose liability renews in roughly 30 to 60 days.</li>
                                <li><strong>New authorities:</strong> trucking companies that applied for operating authority in the last 7 days and have no liability filing yet. FMCSA won’t activate their authority until one is filed.</li>
                                <li><strong>Cancelled, nothing new on file:</strong> trucking companies whose liability policy was cancelled and that have no new policy on file with FMCSA yet. Without one they lose their authority, so they need a quote now. Most states have only a few each week.</li>
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
                            <h2>What the rows look like</h2>
                            <p>Six real rows from the Pennsylvania list of October 12, 2026. In this public sample we hide the company name, DOT and MC number, owner, phone and email; your list has them all.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[640px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">List</th>
                                        <th className="px-4 py-3 font-semibold">City</th>
                                        <th className="px-4 py-3 font-semibold">Power units</th>
                                        <th className="px-4 py-3 font-semibold">Current insurer</th>
                                        <th className="px-4 py-3 font-semibold">Liability limit</th>
                                        <th className="px-4 py-3 font-semibold">Estimated renewal / applied</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {SAMPLE_ROWS.map((r) => (
                                        <tr key={r.join('|')} className="border-b border-slate-100 align-top">
                                            {r.map((c, i) => (
                                                <td key={i} className={`px-4 py-3 ${i === 0 ? 'font-semibold text-slate-900' : 'text-slate-700'}`}>{c}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How big is a list?</h2>
                            <p>It depends on the state. Across the US on {UPDATED_LABEL}: {US_RENEWALS.toLocaleString('en-US')} fleets with 3 or more power units renewing in 30 to 60 days, and {US_NEW.toLocaleString('en-US')} new authorities from the last 7 days. Pick your state:</p>
                        </section>
                        <StateRenewalCounter states={STATE_COUNTS} runLabel={UPDATED_LABEL} />
                        <details className="mt-4 rounded-2xl border border-slate-200 bg-white">
                            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-slate-900">All states, {UPDATED_LABEL}</summary>
                            <div className="overflow-x-auto">
                                <table className="w-full min-w-[640px] text-left text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 text-slate-600">
                                            <th className="px-4 py-3 font-semibold">State</th>
                                            <th className="px-4 py-3 font-semibold">Renewals (30-60 days)</th>
                                            <th className="px-4 py-3 font-semibold">New authorities (last 7 days)</th>
                                            <th className="px-4 py-3 font-semibold">Most common current insurer</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {STATE_COUNTS.map((r) => (
                                            <tr key={r.code} className="border-b border-slate-100">
                                                <td className="px-4 py-3 font-semibold text-slate-900">{r.name}</td>
                                                <td className="px-4 py-3 text-slate-800">{r.renewals}</td>
                                                <td className="px-4 py-3 text-slate-800">{r.newAuthorities}</td>
                                                <td className="px-4 py-3 text-slate-700">{r.topInsurers[0] ? `${r.topInsurers[0].name} (${r.topInsurers[0].count})` : '-'}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </details>
                        <p className="mt-2 text-xs text-slate-500">Source: FMCSA open data, Dooza’s weekly run of {UPDATED_LABEL}. Numbers change every week.</p>

                        <section id="sample" className="mt-12 scroll-mt-28">
                            <h2 className="text-2xl font-bold text-slate-900">See real rows before you decide</h2>
                            <TruckingSampleForm states={STATE_COUNTS} claimed={CLAIMED_STATES} />
                        </section>

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

                            <h2>Who it fits, and who it doesn&rsquo;t</h2>
                            <ul>
                                <li><strong>Fits:</strong> an agency that already quotes trucking or commercial auto in its state and has someone who will phone owners every week. The list gives you the names and the timing; the calls are yours (or ours, see below).</li>
                                <li><strong>Doesn&rsquo;t fit:</strong> an agency that doesn&rsquo;t write trucking yet, wants inbound leads who have already asked for a quote, or wants software. It is a weekly spreadsheet, not a CRM.</li>
                            </ul>

                            <h2>What it costs</h2>
                            <ul>
                                <li>First week free.</li>
                                <li>Then $129 every 4 weeks, billed by card through Stripe.</li>
                                <li>One agency per state: once your state is claimed, nobody else gets that list from us.</li>
                            </ul>
                            <p>
                                Comparing it with bought leads? Our <Link href="/insurance-lead-cost-calculator">insurance lead cost calculator</Link> shows cost per sold policy from price per lead and close rate. Comparing vendors? See <Link href="/best-trucking-insurance-leads">9 trucking lead sources compared</Link>, with prices from their own sites, and <Link href="/trucking-insurance-market">which insurers are winning trucking accounts this week</Link>. Want carriers before their first policy? See <Link href="/trucking-new-authority-leads">new trucking authority leads</Link>.
                            </p>

                            <h2>Rather not dial yourself?</h2>
                            <p>
                                We can phone the truckers on your list and book the owners onto your calendar as quote calls. It costs $299 for 4 booked quote calls, and the first one is free. We are starting with a few agencies, so it is not offered in every state yet. In Pennsylvania and North Carolina it comes as a flat 4-week package of booked calls instead, with no per-call fee; ask about it on the call.
                            </p>

                            <h2>Who is behind this list?</h2>
                            <p>
                                Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We are not an insurance agency or carrier and we never sell insurance or contact truckers about insurance for ourselves. We build the list every week with software, including AI, from public FMCSA filings: the carrier census, operating authority history and the BMC-91X liability filings insurers make for each carrier. You can check any row against the carrier&rsquo;s public record on FMCSA&rsquo;s SAFER site using its DOT number.
                            </p>

                            <h2>Calling rules</h2>
                            <p>Many owner numbers are cell phones. Dial by hand and check the Do Not Call list before you call; the script is written for a first call by a licensed agent.</p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Is your state still open?</h2>
                            <p className="mt-2 text-slate-700">Book a free 30-minute call. We check that your state is still open, answer your questions and start your free week.</p>
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
