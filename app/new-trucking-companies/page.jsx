import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import data from '@/lib/data/new-trucking-companies.json';
import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';

// Data comes from scripts/fmcsa-new-carriers.py (FMCSA open data). Refresh monthly, then build and push.

const pageUrl = `${SITE_URL}/new-trucking-companies`;
const fmt = (n) => n.toLocaleString('en-US');
const pct = (a, b) => (b ? `${a >= b ? '+' : ''}${(((a - b) / b) * 100).toFixed(1)}%` : 'n/a');
const monthName = (ym) => new Date(`${ym}-01T00:00:00Z`).toLocaleString('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' });

const months = data.monthly;
const lastMonth = months[months.length - 1];
const lastMonthPrevYear = months.find((m) => m.month === `${Number(lastMonth.month.slice(0, 4)) - 1}${lastMonth.month.slice(4)}`);
const ytdYear = lastMonth.month.slice(0, 4);
const ytdThrough = lastMonth.month.slice(5);
const ytd = (year) => months.filter((m) => m.month.startsWith(year) && m.month.slice(5) <= ytdThrough).reduce((s, m) => s + m.count, 0);
const ytdNow = ytd(ytdYear);
const ytdPrev = ytd(String(Number(ytdYear) - 1));
const q = data.quarter;
const fleetTotal = data.fleetSize.reduce((s, b) => s + b.count, 0);
const oneOrTwo = data.fleetSize.filter((b) => b.bucket === '1' || b.bucket === '2').reduce((s, b) => s + b.count, 0);
const singleTruck = data.fleetSize.find((b) => b.bucket === '1').count;
const cohortTotal = data.cohort.active + data.cohort.inactive + data.cohort.pending;
const inactiveShare = ((data.cohort.inactive / cohortTotal) * 100).toFixed(0);
const updated = new Date(`${data.generatedAt}T00:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });

const pageTitle = `New Trucking Companies Per Month (${ytdYear} Data, by State) | Dooza`;
const pageDescription = `${fmt(lastMonth.count)} new interstate for-hire trucking companies registered with FMCSA in ${monthName(lastMonth.month)}. Monthly counts since 2023, ${q.label} by state, fleet sizes and one-year survival, from FMCSA open data. Updated monthly.`;

export const metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    keywords: ['new trucking companies', 'new trucking companies per month', 'new carriers by state', 'new MC numbers', 'new USDOT numbers', 'FMCSA new carriers', 'trucking industry statistics', 'new authority trucking'],
    alternates: { canonical: pageUrl },
    openGraph: { title: pageTitle, description: pageDescription, url: pageUrl, siteName: 'Dooza', type: 'article', images: [{ url: `${SITE_URL}/logo.png`, width: 512, height: 512, alt: 'Dooza' }] },
    twitter: { card: 'summary', title: pageTitle, description: pageDescription, images: [`${SITE_URL}/logo.png`] },
};

const faqData = [
    {
        question: 'How many new trucking companies start each month?',
        answer: `In ${monthName(lastMonth.month)}, ${fmt(lastMonth.count)} new interstate, authorized-for-hire carriers were added to the FMCSA Company Census. From January to ${monthName(lastMonth.month)}, the total was ${fmt(ytdNow)}, ${pct(ytdNow, ytdPrev)} against the same months of ${Number(ytdYear) - 1} (${fmt(ytdPrev)}).`,
    },
    {
        question: 'Which states have the most new trucking companies?',
        answer: `In ${q.label}, the most new interstate for-hire carriers were based in ${q.states.slice(0, 5).map((s) => `${s.state} (${fmt(s.count)})`).join(', ')}.`,
    },
    {
        question: 'How big are new trucking companies?',
        answer: `Small. In ${q.label}, ${((singleTruck / fleetTotal) * 100).toFixed(0)}% of new interstate for-hire carriers reported one power unit, and ${((oneOrTwo / fleetTotal) * 100).toFixed(0)}% reported one or two.`,
    },
    {
        question: 'How many new trucking companies are still active after a year?',
        answer: `Of the carriers added in ${data.cohort.label}, ${inactiveShare}% have an inactive USDOT status in the census today (${fmt(data.cohort.inactive)} of ${fmt(cohortTotal)}). Inactive status can mean the carrier closed, was revoked or stopped updating its registration, so treat it as an upper-bound signal, not a failure rate.`,
    },
    {
        question: 'Where does this data come from?',
        answer: `The FMCSA Company Census File on data.transportation.gov (dataset ${data.source.dataset}), queried on ${updated}. We count carriers whose operation is interstate and whose classification includes Authorized For Hire, by the date their USDOT record was added. Private fleets and intrastate-only carriers are excluded.`,
    },
    {
        question: 'Can I use these numbers?',
        answer: 'Yes. Please cite "Dooza analysis of FMCSA Company Census data" and link to this page. The numbers are aggregates; the page does not publish any carrier names or contact details.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'New interstate for-hire trucking companies per month (US)',
        description: data.definition,
        url: pageUrl,
        creator: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        isBasedOn: data.source.url,
        license: 'https://creativecommons.org/licenses/by/4.0/',
        temporalCoverage: `${months[0].month}/${lastMonth.month}`,
        spatialCoverage: 'United States',
        dateModified: data.generatedAt,
        variableMeasured: 'Number of new USDOT registrations, interstate authorized-for-hire carriers',
    },
    {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqData.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
    },
    {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'New Trucking Companies', item: pageUrl },
        ],
    },
];

function MonthlyChart() {
    const W = 720;
    const H = 220;
    const pad = { l: 44, r: 8, t: 10, b: 28 };
    const max = Math.ceil(Math.max(...months.map((m) => m.count)) / 1000) * 1000;
    const bw = (W - pad.l - pad.r) / months.length;
    const y = (v) => pad.t + (H - pad.t - pad.b) * (1 - v / max);
    const ticks = [0, max / 2, max];
    return (
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label={`Bar chart of new interstate for-hire trucking companies per month, ${months[0].month} to ${lastMonth.month}`}>
            {ticks.map((t) => (
                <g key={t}>
                    <line x1={pad.l} x2={W - pad.r} y1={y(t)} y2={y(t)} stroke="#e2e8f0" />
                    <text x={pad.l - 6} y={y(t) + 4} textAnchor="end" fontSize="11" fill="#64748b">{fmt(t)}</text>
                </g>
            ))}
            {months.map((m, i) => (
                <g key={m.month}>
                    <rect x={pad.l + i * bw + 1} y={y(m.count)} width={bw - 2} height={y(0) - y(m.count)} fill={m.month.startsWith(ytdYear) ? '#4f46e5' : '#a5b4fc'}>
                        <title>{`${monthName(m.month)}: ${fmt(m.count)}`}</title>
                    </rect>
                    {m.month.endsWith('-01') && (
                        <text x={pad.l + i * bw} y={H - 8} fontSize="11" fill="#64748b">{m.month.slice(0, 4)}</text>
                    )}
                </g>
            ))}
        </svg>
    );
}

export default function NewTruckingCompaniesPage() {
    return (
        <BookingModalProvider>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-white font-sans text-slate-900">
                <Navbar />
                <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <p className="text-sm font-medium text-indigo-600">Trucking data · Updated {updated}</p>
                    <h1 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">New trucking companies per month</h1>
                    <p className="mt-4 text-lg text-slate-600">
                        How many new interstate, for-hire trucking companies register with FMCSA each month, where they are, and how big they are.
                        Counted from FMCSA&apos;s own open data, refreshed monthly.
                    </p>

                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="rounded-xl border border-slate-200 p-5">
                            <div className="text-sm text-slate-500">{monthName(lastMonth.month)}</div>
                            <div className="mt-1 text-3xl font-bold">{fmt(lastMonth.count)}</div>
                            <div className="mt-1 text-sm text-slate-500">{lastMonthPrevYear ? `${pct(lastMonth.count, lastMonthPrevYear.count)} vs a year earlier` : 'new carriers'}</div>
                        </div>
                        <div className="rounded-xl border border-slate-200 p-5">
                            <div className="text-sm text-slate-500">Jan to {monthName(lastMonth.month).split(' ')[0]} {ytdYear}</div>
                            <div className="mt-1 text-3xl font-bold">{fmt(ytdNow)}</div>
                            <div className="mt-1 text-sm text-slate-500">{pct(ytdNow, ytdPrev)} vs same months of {Number(ytdYear) - 1}</div>
                        </div>
                        <div className="rounded-xl border border-slate-200 p-5">
                            <div className="text-sm text-slate-500">One-truck operations, {q.label}</div>
                            <div className="mt-1 text-3xl font-bold">{((singleTruck / fleetTotal) * 100).toFixed(0)}%</div>
                            <div className="mt-1 text-sm text-slate-500">of new for-hire carriers</div>
                        </div>
                    </div>

                    <h2 className="mt-14 text-2xl font-bold">New interstate for-hire carriers per month</h2>
                    <p className="mt-2 text-slate-600">{monthName(months[0].month)} to {monthName(lastMonth.month)}. Darker bars are {ytdYear}.</p>
                    <div className="mt-4 rounded-xl border border-slate-200 p-4">
                        <MonthlyChart />
                    </div>

                    <h2 className="mt-14 text-2xl font-bold">New carriers by state, {q.label}</h2>
                    <p className="mt-2 text-slate-600">
                        {fmt(q.total)} new interstate for-hire carriers based in US states in {q.label}, {pct(q.total, q.prevTotal)} against {q.prevLabel} ({fmt(q.prevTotal)}). By physical address.
                    </p>
                    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
                        <table className="w-full text-sm">
                            <thead className="bg-slate-50 text-left text-slate-600">
                                <tr>
                                    <th className="px-4 py-2 font-medium">State</th>
                                    <th className="px-4 py-2 font-medium text-right">{q.label}</th>
                                    <th className="px-4 py-2 font-medium text-right">{q.prevLabel}</th>
                                    <th className="px-4 py-2 font-medium text-right">Change</th>
                                </tr>
                            </thead>
                            <tbody>
                                {q.states.map((s) => (
                                    <tr key={s.state} className="border-t border-slate-100">
                                        <td className="px-4 py-2">{s.state}</td>
                                        <td className="px-4 py-2 text-right tabular-nums">{fmt(s.count)}</td>
                                        <td className="px-4 py-2 text-right tabular-nums">{fmt(s.prevYear)}</td>
                                        <td className="px-4 py-2 text-right tabular-nums">{pct(s.count, s.prevYear)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h2 className="mt-14 text-2xl font-bold">How big new carriers are</h2>
                    <p className="mt-2 text-slate-600">Power units reported at registration, {q.label} ({fmt(fleetTotal)} carriers, including those based outside the US).</p>
                    <div className="mt-4 space-y-2">
                        {data.fleetSize.map((b) => (
                            <div key={b.bucket} className="flex items-center gap-3 text-sm">
                                <div className="w-24 shrink-0 text-slate-600">{b.bucket} {b.bucket === '1' ? 'truck' : 'trucks'}</div>
                                <div className="h-4 rounded bg-indigo-500" style={{ width: `${Math.max(0.5, (b.count / fleetTotal) * 100 * 0.8)}%` }} />
                                <div className="tabular-nums text-slate-700">{fmt(b.count)} ({((b.count / fleetTotal) * 100).toFixed(1)}%)</div>
                            </div>
                        ))}
                    </div>

                    <h2 className="mt-14 text-2xl font-bold">How many are still active a year later</h2>
                    <p className="mt-2 text-slate-600">
                        Of the {fmt(cohortTotal)} interstate for-hire carriers added in {data.cohort.label}, {fmt(data.cohort.inactive)} ({inactiveShare}%) show an inactive USDOT status today.
                        Inactive can mean closed, revoked or simply not updated, so read it as an upper bound on early exits.
                    </p>

                    <h2 className="mt-14 text-2xl font-bold">Method</h2>
                    <ul className="mt-3 list-disc pl-6 space-y-1 text-slate-600">
                        <li>Source: <a className="text-indigo-600 underline" href={data.source.url} rel="noopener">{data.source.name}</a> (data.transportation.gov, dataset {data.source.dataset}); latest record added {data.source.latestRecord}.</li>
                        <li>Counted: {data.definition}</li>
                        <li>Excluded: private fleets, intrastate-only carriers, brokers without a carrier operation.</li>
                        <li>The census is a current snapshot, so carriers whose records were later removed don&apos;t appear; older months can drift slightly between refreshes.</li>
                        <li>Monthly totals include carriers based outside the US; the state table covers the 50 states and DC only.</li>
                    </ul>

                    <div className="mt-14 rounded-xl bg-slate-50 p-6">
                        <h2 className="text-lg font-bold">Cite this data</h2>
                        <p className="mt-2 text-sm text-slate-600">Free to use with credit (CC BY 4.0):</p>
                        <p className="mt-2 text-sm font-mono bg-white border border-slate-200 rounded p-3">
                            Dooza analysis of FMCSA Company Census data, {updated}. {pageUrl}
                        </p>
                    </div>

                    <div className="mt-10 rounded-xl border border-indigo-200 bg-indigo-50 p-6">
                        <h2 className="text-lg font-bold">Want the new carriers in your state, every week?</h2>
                        <p className="mt-2 text-slate-700">
                            Insurance agents and dispatchers use Dooza for a weekly list of newly registered carriers in their states, filtered to the ones worth calling.
                        </p>
                        <Link href="/book" className="mt-4 inline-block rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
                            Book a 30-minute call
                        </Link>
                    </div>

                    <h2 className="mt-14 text-2xl font-bold">FAQ</h2>
                    <div className="mt-4">
                        <FAQAccordion items={faqData} />
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
