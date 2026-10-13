import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_URL } from '@/lib/site';
import moves from '@/lib/insurerMoves.json';

// Weekly. Data: Argus's insurer_moves run (FMCSA BMC-91X filings); transform: /home/achilles/tools/insurer_report.py.
const PATH = '/trucking-insurance-market';
const UPDATED = '2026-10-13';
const fmt = (iso) => new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const FROM = fmt(moves.window[0]);
const TO = fmt(moves.window[1]);
const WEEK = `${FROM.replace(/, \d{4}$/, '')} to ${TO}`;
const US = moves.us;
const TOP = US.top[0];
const SECOND = US.top[1];
const TOP_RIVALS = [...US.top].sort((a, b) => b.wonFromRivals - a.wonFromRivals)[0];
const LEADS = '/trucking-insurance-leads?utm_source=website&utm_medium=internal&utm_campaign=trucking-insurance-market';
const n = (x) => x.toLocaleString('en-US');
const signed = (x) => (x > 0 ? `+${n(x)}` : n(x));

const TITLE = 'Trucking Insurance Market: Which Insurers Win Accounts';
const DESCRIPTION = `Weekly from public FMCSA liability filings: which insurers gained and lost US trucking companies, by state. Week of ${WEEK}: ${n(US.gained)} new filings, ${TOP.insurer} gained ${n(TOP.gained)}.`;

const faqItems = [
    {
        question: 'Which insurer writes the most new trucking companies?',
        answer: `${TOP.insurer}. In the week of ${WEEK}, ${n(TOP.gained)} US trucking companies filed new liability coverage with ${TOP.insurer} companies, ${n(TOP.newCarriers)} of them brand-new carriers buying their first policy. ${SECOND.insurer} was second with ${n(SECOND.gained)}. Source: FMCSA BMC-91X filings, Dooza's weekly count.`,
    },
    {
        question: 'Which insurer is winning trucking accounts from other insurers?',
        answer: `Counting only companies that moved from a different insurer group, ${TOP_RIVALS.insurer} won the most in the week of ${WEEK}: ${n(TOP_RIVALS.wonFromRivals)}. Renewals and swaps inside the same group are not counted.`,
    },
    {
        question: 'Where does this data come from?',
        answer: 'From the liability filings (form BMC-91X) that insurers make with FMCSA for every for-hire interstate trucking company. The data is public on data.transportation.gov. We count new filings, cancellations and replacements each week, group insurers by parent, and skip renewals within the same group.',
    },
    {
        question: 'How often is it updated?',
        answer: 'Every Monday. The week ends 2 days before the update because FMCSA filings post 1 to 3 days late.',
    },
    {
        question: 'Can I get the trucking companies behind these numbers?',
        answer: 'Yes, for insurance agencies: Dooza sends one agency per state a weekly list of trucking companies renewing in 30 to 60 days with their current insurer named, plus new authorities and cancellations. First week free, then $129 per 4 weeks.',
    },
];

const schemas = [
    {
        '@context': 'https://schema.org',
        '@type': 'Dataset',
        name: 'Weekly US trucking liability insurance filings by insurer and state',
        description: DESCRIPTION,
        url: `${SITE_URL}${PATH}`,
        creator: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
        temporalCoverage: `${moves.window[0]}/${moves.window[1]}`,
        spatialCoverage: 'United States',
        isBasedOn: 'https://data.transportation.gov/',
        license: 'https://creativecommons.org/licenses/by/4.0/',
        dateModified: UPDATED,
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
            { '@type': 'ListItem', position: 2, name: 'Trucking insurance market', item: `${SITE_URL}${PATH}` },
        ],
    },
];

export const metadata = {
    title: TITLE,
    description: DESCRIPTION,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESCRIPTION, url: `${SITE_URL}${PATH}`, type: 'article' },
    twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
};

const th = 'px-4 py-3 font-semibold';
const td = 'px-4 py-3 text-slate-700';

export default function TruckingInsuranceMarketPage() {
    return (
        <>
            {schemas.map((s, i) => (
                <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
            ))}
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="px-4 pb-20 pt-28 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-5xl">
                        <span className="mb-4 inline-block rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                            Weekly from FMCSA filings · Week of {WEEK}
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Which insurers are winning US trucking accounts this week</h1>
                        <p className="mt-5 text-lg text-slate-700">
                            <strong>
                                In the week of {WEEK}, US trucking companies made {n(US.gained)} new liability filings ({n(US.newCarriers)} from brand-new carriers, the rest from companies changing insurer) and {n(US.lost)} filings ended.{' '}
                                {TOP.insurer} gained the most ({n(TOP.gained)}, {n(TOP.newCarriers)} of them brand-new carriers), ahead of {SECOND.insurer} ({n(SECOND.gained)}).
                                Counting only accounts taken from another insurer, {TOP_RIVALS.insurer} led with {n(TOP_RIVALS.wonFromRivals)}.
                            </strong>{' '}
                            Counts come from the liability filings (BMC-91X) insurers make with FMCSA, updated every Monday.
                        </p>

                        <h2 className="mt-12 text-2xl font-bold text-slate-900">US: insurers with the most new trucking filings</h2>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[720px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className={th}>Insurer group</th>
                                        <th className={th}>Gained</th>
                                        <th className={th}>of which brand-new carriers</th>
                                        <th className={th}>Won from another insurer</th>
                                        <th className={th}>Ended</th>
                                        <th className={th}>Net</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {US.top.map((r) => (
                                        <tr key={r.insurer} className="border-b border-slate-100">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{r.insurer}</td>
                                            <td className={td}>{n(r.gained)}</td>
                                            <td className={td}>{n(r.newCarriers)}</td>
                                            <td className={td}>{n(r.wonFromRivals)}</td>
                                            <td className={td}>{n(r.lost)}</td>
                                            <td className={td}>{signed(r.net)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-2 text-xs text-slate-500">Ended = cancelled, or replaced by a filing from a different insurer group. Week of {WEEK}.</p>

                        {US.losers.length > 0 && (
                            <section className="prose prose-slate mt-10 max-w-none">
                                <h2>More filings ended than started</h2>
                                <ul>
                                    {US.losers.map((r) => (
                                        <li key={r.insurer}><strong>{r.insurer}:</strong> {n(r.gained)} gained, {n(r.lost)} ended (net {signed(r.net)}).</li>
                                    ))}
                                </ul>
                                <p>A cancellation can mean the trucking company closed or stopped hauling, not only that it switched insurer.</p>
                            </section>
                        )}

                        <h2 className="mt-12 text-2xl font-bold text-slate-900">By state</h2>
                        <p className="mt-2 text-slate-700">Top insurer groups by new filings in each state, week of {WEEK}. State is the trucking company&rsquo;s registered address.</p>
                        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
                            <table className="w-full min-w-[760px] text-left text-sm">
                                <thead>
                                    <tr className="border-b border-slate-200 text-slate-600">
                                        <th className={th}>State</th>
                                        <th className={th}>Gained</th>
                                        <th className={th}>Ended</th>
                                        <th className={th}>Top insurer groups (gained / net)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {moves.states.map((s) => (
                                        <tr key={s.code} id={s.code.toLowerCase()} className="border-b border-slate-100 align-top">
                                            <td className="px-4 py-3 font-semibold text-slate-900">{s.name}</td>
                                            <td className={td}>{n(s.gained)}</td>
                                            <td className={td}>{n(s.lost)}</td>
                                            <td className={td}>{s.top.slice(0, 3).map((r) => `${r.insurer} ${n(r.gained)} / ${signed(r.net)}`).join(' · ')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <section className="prose prose-slate mt-12 max-w-none">
                            <h2>How we count</h2>
                            <ul>
                                {moves.caveats.map((c) => (
                                    <li key={c}>{c}</li>
                                ))}
                                <li>Not counted this week: {n(moves.stats.gain_skipped_renewal)} renewals and {n(moves.stats.loss_skipped_same_group)} policy swaps inside the same insurer group.</li>
                            </ul>
                            <p>You may quote these numbers with a link to this page. Questions or a different cut of the data: achilles@dooza.org.</p>
                        </section>

                        <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6">
                            <h2 className="text-2xl font-bold text-slate-900">Write trucking? Get the companies behind the numbers</h2>
                            <p className="mt-2 text-slate-700">Every Monday, one agency per state gets the trucking companies renewing in 30 to 60 days with their current insurer named, plus new authorities and cancellations. First week free, then $129 per 4 weeks.</p>
                            <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                                <Link href={`${LEADS}#sample`} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">Get 5 free rows from your state</Link>
                                <Link href={LEADS} className="font-semibold text-primary-700 underline">How the list works</Link>
                            </div>
                            <p className="mt-4 text-sm text-slate-600">Weighing other lead sources? See <Link href="/best-trucking-insurance-leads" className="font-semibold text-primary-700 underline">9 trucking insurance lead sources compared</Link>, with prices from their own sites.</p>
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
