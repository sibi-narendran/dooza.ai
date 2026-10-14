import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import StateRenewalCounter from '@/components/StateRenewalCounter';
import TruckingSampleForm from '@/components/TruckingSampleForm';
import { CLAIMED_STATES } from '@/lib/truckingClaimedStates';
import stateCounts from '@/lib/truckingStateCounts.json';
import carriers from '@/lib/data/new-trucking-companies.json';

const PATH = '/trucking-new-authority-leads';
const TITLE = 'New Trucking Authority Leads for Insurance Agents';
const UPDATED = '2026-10-13';
const UPDATED_LABEL = 'October 13, 2026';
const BOOK = '/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=trucking-new-authority-leads';
const FMCSA_INSURANCE = 'https://www.fmcsa.dot.gov/registration/insurance-filing-requirements';
const CFR_387_9 = 'https://www.ecfr.gov/current/title-49/subtitle-B/chapter-III/subchapter-B/part-387/subpart-A/section-387.9';

const fmt = (n) => n.toLocaleString('en-US');

// Weekly run (FMCSA open data, Dooza's own run): new authorities = applied in the last 7 days, no liability filing yet.
const STATE_COUNTS = stateCounts.states;
const RUN_LABEL = new Date(`${stateCounts.runDate}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const US_NEW = STATE_COUNTS.reduce((n, x) => n + x.newAuthorities, 0);
const TOP_NEW = [...STATE_COUNTS].sort((a, b) => b.newAuthorities - a.newAuthorities).slice(0, 5);

// FMCSA Company Census (lib/data/new-trucking-companies.json, also behind /new-trucking-companies).
const q = carriers.quarter;
const fleetTotal = carriers.fleetSize.reduce((s, b) => s + b.count, 0);
const singleTruck = carriers.fleetSize.find((b) => b.bucket === '1').count;
const oneOrTwo = carriers.fleetSize.filter((b) => b.bucket === '1' || b.bucket === '2').reduce((s, b) => s + b.count, 0);
const singlePct = Math.round((singleTruck / fleetTotal) * 100);
const oneOrTwoPct = Math.round((oneOrTwo / fleetTotal) * 100);
const cohortTotal = (c) => c.active + c.inactive + c.pending;
const oneYear = carriers.cohorts[carriers.cohorts.length - 5]; // the quarter a year before the latest one
const oneYearInactivePct = Math.round((oneYear.inactive / cohortTotal(oneYear)) * 100);

const DESCRIPTION = `How insurance agents reach new MC authorities before another agent does: ${fmt(US_NEW)} US trucking companies applied for authority in the week to ${RUN_LABEL} with no liability filing yet. FMCSA deadlines, who they are, and a weekly list per state.`;

// Real new-authority rows from the Pennsylvania list of 2026-10-12 (same rows as /trucking-insurance-leads); names and contacts hidden.
const SAMPLE_ROWS = [
    ['Allentown', '2', 'None filed yet', 'Needs at least $750,000', 'Applied Oct 11, 2026'],
    ['McSherrystown', '1', 'None filed yet', 'Needs at least $750,000', 'Applied Oct 10, 2026'],
];

const faqItems = [
    {
        question: 'How long does a new trucking authority have to get insurance on file?',
        answer: 'FMCSA says an insurer must file the liability form for the applicant. If nothing is filed within 20 days of the application being published in the FMCSA Register, FMCSA serves a decision saying the application will be dismissed unless the carrier complies within 60 days. So the window is about 80 days, not the 90 often quoted, and the authority is not active until the filing is in.',
    },
    {
        question: 'How do I find new MC authorities in my state?',
        answer: `FMCSA publishes new applications in its open data and in the FMCSA Register. Dooza joins those files every week and sends the new authorities in your state that have no liability filing yet, with owner, phone and email as filed. In the week to ${RUN_LABEL} there were ${fmt(US_NEW)} across the 50 states and DC.`,
    },
    {
        question: 'Are new authorities worth calling?',
        answer: `They need a liability filing before they can haul, so they are buying now. But most are small: in ${q.label}, ${singlePct}% of new interstate for-hire carriers reported one power unit, and ${oneYearInactivePct}% of the ${oneYear.cohort} class is already inactive. Many agencies call them as a second list next to renewals of established fleets.`,
    },
    {
        question: 'What do new authorities cost from Dooza?',
        answer: 'They come in the same weekly list as renewals: first week free, then $129 per 4 weeks; exclusive states on request. You can get 5 free rows from your state by email first. If you would rather not dial, we can book quote calls: $499 every 4 weeks for up to 4 booked quote calls, or $150 for a single booked call (the first one is free).',
    },
    {
        question: 'Does Dooza sell insurance?',
        answer: 'No. Dooza is not an insurance agency. We find and organise the trucking companies from public FMCSA filings; your agency quotes and writes the policies.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: TITLE,
        url: `${SITE_URL}${PATH}`,
        description: DESCRIPTION,
        datePublished: UPDATED,
        dateModified: UPDATED,
        publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        about: 'New FMCSA operating authorities (MC numbers) as prospects for trucking insurance agents',
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
            { '@type': 'ListItem', position: 2, name: 'Trucking Insurance Leads', item: `${SITE_URL}/trucking-insurance-leads` },
            { '@type': 'ListItem', position: 3, name: 'New Authority Leads', item: `${SITE_URL}${PATH}` },
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

export default function TruckingNewAuthorityLeadsPage() {
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
                            For insurance agents who write trucking · Updated <time dateTime={UPDATED}>{UPDATED_LABEL}</time>
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">How to reach new trucking authorities before their insurance is filed</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>In the week to {RUN_LABEL}, {fmt(US_NEW)} US trucking companies applied for operating authority and still had no liability insurance on file with FMCSA (Dooza&rsquo;s weekly run of FMCSA open data).</strong>{' '}
                            Each one needs an insurer to file for it before its authority goes active, and{' '}
                            <a href={FMCSA_INSURANCE} rel="noopener" className="font-semibold text-primary-700 underline">FMCSA</a> starts the dismissal clock 20 days after the application is published. The way to reach them first is to get them every week, with phone and owner name, while they are still shopping.
                        </p>
                        <div className="mt-8">
                            <Cta />
                            <p className="mt-3 text-sm text-slate-700">
                                Not ready for a call? <a href="#sample" className="font-semibold text-primary-700 underline">Get 5 free rows from your state</a> by email first.
                            </p>
                        </div>

                        <section className="prose prose-slate mt-14 max-w-none">
                            <h2>The real window: about 80 days, not 90</h2>
                            <p>
                                Vendor copy often talks about a new authority&rsquo;s &ldquo;first 90 days&rdquo;. FMCSA&rsquo;s own{' '}
                                <a href={FMCSA_INSURANCE} rel="noopener">insurance filing page</a> (last updated March 26, 2026) sets it out like this:
                            </p>
                            <ul>
                                <li>Once a carrier applies for operating authority (MC number), its insurer must file the insurance form for it. The carrier cannot file its own.</li>
                                <li>If nothing is filed within <strong>20 days</strong> of the application being published in the FMCSA Register, FMCSA serves a decision: comply within <strong>60 days</strong> or the application is dismissed.</li>
                                <li>Until the filing is in, the authority is not active and the carrier cannot haul for hire across state lines.</li>
                            </ul>
                            <p>
                                For most new for-hire freight carriers running trucks over 10,001 lbs, the federal minimum is $750,000 of liability (<a href={CFR_387_9} rel="noopener">49 CFR 387.9</a>). So a new authority with no filing on record still needs a policy, and the earlier you call, the more likely it has not bought one yet.
                            </p>

                            <h2>Who the new authorities are</h2>
                            <p>
                                From the FMCSA Company Census (our <Link href="/new-trucking-companies">new trucking companies per month</Link> page has the full method):
                            </p>
                            <ul>
                                <li>{fmt(q.total)} new interstate for-hire carriers based in US states registered in {q.label}, about {fmt(Math.round(q.total / 3))} a month.</li>
                                <li>{singlePct}% reported one power unit and {oneOrTwoPct}% one or two.</li>
                                <li>{oneYearInactivePct}% of the {oneYear.cohort} class is already inactive, so plan for churn and confirm the business is real on the first call.</li>
                            </ul>
                            <p>
                                The most new authorities in the week to {RUN_LABEL} were in {TOP_NEW.map((s) => `${s.name} (${s.newAuthorities})`).join(', ')}. Pick your state:
                            </p>
                        </section>
                        <StateRenewalCounter states={STATE_COUNTS} runLabel={RUN_LABEL} />
                        <p className="mt-2 text-xs text-slate-500">Source: FMCSA open data, Dooza&rsquo;s weekly run of {RUN_LABEL}. Numbers change every week.</p>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>What a new-authority row looks like</h2>
                            <p>Two real rows from the Pennsylvania list of October 12, 2026. In this public sample we hide the company name, DOT and MC number, owner, phone and email; your list has them all.</p>
                        </section>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[560px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className="px-4 py-3 font-semibold">City</th>
                                        <th className="px-4 py-3 font-semibold">Power units</th>
                                        <th className="px-4 py-3 font-semibold">Current insurer</th>
                                        <th className="px-4 py-3 font-semibold">Liability limit</th>
                                        <th className="px-4 py-3 font-semibold">Applied</th>
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

                        <section id="sample" className="mt-12 scroll-mt-28">
                            <h2 className="text-2xl font-bold text-slate-900">See real rows before you decide</h2>
                            <TruckingSampleForm states={STATE_COUNTS} claimed={CLAIMED_STATES} />
                        </section>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How to work the list</h2>
                            <ul>
                                <li><strong>Call in the first week.</strong> Our Monday list has the companies that applied in the last 7 days and have no liability filing yet.</li>
                                <li><strong>Open with the filing they need.</strong> They cannot haul until an insurer files for them; ask whether anyone has quoted them yet.</li>
                                <li><strong>Check the record.</strong> Look up the DOT number on FMCSA&rsquo;s SAFER site before you call.</li>
                                <li><strong>Dial by hand.</strong> Many owner numbers are cell phones; check the Do Not Call list first.</li>
                            </ul>

                            <h2>What it costs</h2>
                            <p>
                                New authorities come in the same Monday list as <Link href="/trucking-insurance-leads">trucking renewals in 30 to 60 days</Link>, with the current insurer named. First week free, then $129 every 4 weeks. Want your state to yourself? Exclusive states are available: book a call.
                            </p>
                            <p>
                                Rather not dial yourself? We can phone the truckers on your list and book the owners onto your calendar as quote calls. It costs $499 every 4 weeks for up to 4 booked quote calls, or $150 for a single booked call, and the first one is free. We take one agency per state for booked calls; ask about your state on the call.
                            </p>
                            <p>
                                Comparing sources? See <Link href="/best-trucking-insurance-leads">9 trucking insurance lead sources compared</Link>, with prices from their own sites.
                            </p>

                            <h2>Who is behind this list?</h2>
                            <p>
                                Dooza, a small US company (Adam Laboratory Inc., a Delaware corporation) founded by Sibi Narendran. We are not an insurance agency. We build the list every week with software from public FMCSA filings.
                            </p>
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
