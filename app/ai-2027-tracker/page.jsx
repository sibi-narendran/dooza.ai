import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { SITE_URL } from '@/lib/site';
import { ai2029 } from '@/lib/ai2029Data';
import { MilestoneChart, DueIn, NextDue } from '@/components/Ai2029Live';

const PATH = '/ai-2027-tracker';
const TITLE = 'AI 2027 Tracker: Predictions vs Reality, Live';
const DESC =
    'A live check of AI 2027 against what really happened in 2026: which warnings arrived early, which milestones run late, and 18 dated predictions for 2026-2028, graded as they come due. With the AI 2029 scenario by Sibi Narendran.';

export const metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESC, url: `${SITE_URL}${PATH}`, type: 'article' },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

const fmt = (d) =>
    new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const months = (a, b) => Math.round((Date.parse(b) - Date.parse(a)) / (864e5 * 30.44));

const STATUS = {
    pending: { label: 'Pending', cls: 'bg-slate-100 text-slate-700' },
    hit: { label: 'Hit', cls: 'bg-emerald-100 text-emerald-800' },
    partial: { label: 'Partly', cls: 'bg-amber-100 text-amber-800' },
    missed: { label: 'Missed', cls: 'bg-rose-100 text-rose-800' },
};

const { checked, published, sections, warning, predictions, milestones } = ai2029;
const graded = predictions.filter((p) => p.status !== 'pending');
const hits = predictions.filter((p) => p.status === 'hit').length;
const happened = milestones.filter((m) => m.real);
const story = sections.filter((s) => !['Predictions to grade', 'Sources'].includes(s.title));
const sources = sections.find((s) => s.title === 'Sources');
const predIntro = sections.find((s) => s.title === 'Predictions to grade');
const clean = (h) =>
    h
        .replace('<!--CHART-->', '')
        .replace('<!--TABLE0-->', '<p><a href="#warning-shots">See the warning-shots table in the tracker above.</a></p>')
        .replace(/<!--TABLE1-->/, '');

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI 2027 Tracker and the AI 2029 Scenario',
    description: DESC,
    url: `${SITE_URL}${PATH}`,
    datePublished: published,
    dateModified: checked,
    author: { '@type': 'Person', name: 'Sibi Narendran', url: 'https://www.sibinarendran.com' },
    publisher: { '@type': 'Organization', name: 'Dooza', url: SITE_URL },
    about: [{ '@type': 'CreativeWork', name: 'AI 2027', url: 'https://ai-2027.com/' }],
};

export default function Ai2027TrackerPage() {
    return (
        <BookingModalProvider>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <div className="min-h-screen bg-slate-50">
                <Navbar />
                <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="inline-block rounded-full bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 mb-4">
                                Live tracker · last checked {fmt(checked)}
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                                AI 2027 vs reality: a live tracker
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                What <a className="underline" href="https://ai-2027.com/" target="_blank" rel="noopener">AI 2027</a> predicted,
                                what has really happened, and a new scenario to the end of 2029 with {predictions.length} dated
                                predictions we grade as they come due.
                            </p>
                            <p className="mt-3 text-sm text-slate-500">
                                By <a className="underline" href="https://www.sibinarendran.com" target="_blank" rel="noopener">Sibi Narendran</a>, founder of Dooza · {fmt(published)}
                            </p>
                        </div>

                        <section aria-label="Scoreboard" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                                { n: warning.length, t: 'warning shots already arrived in 2026' },
                                { n: `${happened.length}/${milestones.length}`, t: 'key milestones already happened' },
                                { n: `${hits}/${predictions.length}`, t: `predictions hit so far (${graded.length} graded)` },
                                { n: <NextDue predictions={predictions} checked={checked} />, t: 'days until the next prediction is due' },
                            ].map((s) => (
                                <div key={s.t} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-slate-900">{s.n}</p>
                                    <p className="mt-1 text-xs text-slate-600 leading-snug">{s.t}</p>
                                </div>
                            ))}
                        </section>

                        <section className="mt-14" aria-labelledby="milestones">
                            <h2 id="milestones" className="text-2xl font-bold text-slate-900">Warnings came early; capabilities come late</h2>
                            <p className="mt-2 text-slate-600">
                                Seven milestones: the date AI 2027 gave versus the date in the AI 2029 scenario. Withheld models, opaque
                                reasoning and stolen weights land 3 to 9 months earlier than AI 2027 said; the superhuman coder and
                                researcher land 8 to 14 months later.
                            </p>
                            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4 overflow-x-auto">
                                <div className="min-w-[640px]">
                                    <MilestoneChart rows={milestones} checked={checked} />
                                </div>
                            </div>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">Milestone</th><th className="p-3">AI 2027</th><th className="p-3">Scenario</th><th className="p-3">Shift</th><th className="p-3">Reality so far</th></tr>
                                    </thead>
                                    <tbody>
                                        {milestones.map((m) => {
                                            const s = months(m.a2027, m.here);
                                            return (
                                                <tr key={m.key} className="border-t border-slate-100 align-top">
                                                    <td className="p-3 font-medium text-slate-900">{m.label}</td>
                                                    <td className="p-3 text-slate-600 whitespace-nowrap">{fmt(m.a2027).replace(/ \d+,/, '')}</td>
                                                    <td className="p-3 text-slate-600 whitespace-nowrap">{fmt(m.here).replace(/ \d+,/, '')}</td>
                                                    <td className="p-3 whitespace-nowrap">{s < 0 ? `${-s} mo early` : `${s} mo late`}</td>
                                                    <td className="p-3 text-slate-600">
                                                        {m.real ? <span className="font-semibold text-emerald-700">Happened: </span> : null}
                                                        {m.evidence}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mt-14" aria-labelledby="warning-shots">
                            <h2 id="warning-shots" className="text-2xl font-bold text-slate-900">Warning shots that already arrived</h2>
                            <p className="mt-2 text-slate-600">Real events of 2026, and whether AI 2027 saw them coming.</p>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">Date</th><th className="p-3">What happened</th><th className="p-3">AI 2027 had it</th></tr>
                                    </thead>
                                    <tbody className="[&_a]:text-primary-700 [&_a]:underline">
                                        {warning.map((w) => (
                                            <tr key={w.date + w.ai2027} className="border-t border-slate-100 align-top">
                                                <td className="p-3 whitespace-nowrap text-slate-600">{w.date}</td>
                                                <td className="p-3 text-slate-800" dangerouslySetInnerHTML={{ __html: w.what }} />
                                                <td className="p-3 text-slate-600">{w.ai2027}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mt-14" aria-labelledby="tracker">
                            <h2 id="tracker" className="text-2xl font-bold text-slate-900">Prediction tracker: {predictions.length} dated calls</h2>
                            <div className="mt-2 text-slate-600" dangerouslySetInnerHTML={{ __html: clean(predIntro?.html || '').split('<!--TABLE1-->')[0] }} />
                            <p className="mt-2 text-sm text-slate-500">
                                Each call is graded Hit, Partly or Missed after its month ends, with the evidence linked. Last checked {fmt(checked)}.
                            </p>
                            <div className="mt-6 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">By</th><th className="p-3">Prediction</th><th className="p-3">How to check</th><th className="p-3">Status</th></tr>
                                    </thead>
                                    <tbody>
                                        {predictions.map((p) => {
                                            const st = STATUS[p.status] || STATUS.pending;
                                            return (
                                                <tr key={p.n} className="border-t border-slate-100 align-top">
                                                    <td className="p-3 whitespace-nowrap text-slate-600">{p.by}</td>
                                                    <td className="p-3 text-slate-800" dangerouslySetInnerHTML={{ __html: p.prediction }} />
                                                    <td className="p-3 text-slate-600">{p.check}</td>
                                                    <td className="p-3 whitespace-nowrap">
                                                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${st.cls}`}>{st.label}</span>
                                                        <span className="block mt-1 text-xs text-slate-500">
                                                            {p.note || <DueIn due={p.due} status={p.status} checked={checked} />}
                                                        </span>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mt-20" aria-labelledby="scenario">
                            <h2 id="scenario" className="text-3xl font-bold text-slate-900">The scenario: AI 2029, written in October 2026</h2>
                            <nav aria-label="Scenario contents" className="mt-4 text-sm">
                                <ol className="list-decimal pl-5 space-y-1 text-primary-700">
                                    {story.map((s) => (
                                        <li key={s.id}><a className="underline" href={`#${s.id}`}>{s.title}</a></li>
                                    ))}
                                </ol>
                            </nav>
                            <div className="mt-8 prose prose-slate max-w-none prose-a:text-primary-700">
                                {story.map((s) => (
                                    <div key={s.id}>
                                        <h2 id={s.id}>{s.title}</h2>
                                        <div dangerouslySetInnerHTML={{ __html: clean(s.html) }} />
                                    </div>
                                ))}
                                {sources ? (
                                    <div>
                                        <h2 id="sources">Sources</h2>
                                        <div dangerouslySetInnerHTML={{ __html: sources.html }} />
                                    </div>
                                ) : null}
                            </div>
                        </section>

                        <section className="mt-16 bg-white border border-slate-200 rounded-xl p-6 text-center">
                            <p className="font-semibold text-slate-900">Written by Sibi Narendran, founder of Dooza</p>
                            <p className="mt-2 text-sm text-slate-600 max-w-xl mx-auto">
                                Dooza builds AI employees that do real work for small businesses today: answering customers, chasing leads,
                                writing and publishing. Also on <a className="underline" href="https://www.sibinarendran.com/ai-2027-tracker">sibinarendran.com</a>.
                            </p>
                            <Link href="/book" className="mt-4 inline-block rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-primary-700">
                                Talk to us about an AI employee
                            </Link>
                        </section>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
