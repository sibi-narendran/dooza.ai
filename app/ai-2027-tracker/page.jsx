import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import { ai2027Tracker } from '@/lib/ai2027TrackerData';

const PATH = '/ai-2027-tracker';
const { checked, stats, rows, labels, svg, milestones, warning } = ai2027Tracker;

const fmt = (d) =>
    new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' });
const mon = (d) => new Date(`${d}T12:00:00Z`).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });

const TITLE = 'AI 2027 vs Reality: Live Tracker';
const DESC = `Every dated AI 2027 prediction next to what really happened, with sources. ${stats[0][0]} of the calls already due came true. Checked ${fmt(checked)}.`;

export const metadata = {
    title: TITLE,
    description: DESC,
    alternates: { canonical: `${SITE_URL}${PATH}` },
    openGraph: { title: TITLE, description: DESC, url: `${SITE_URL}${PATH}`, type: 'article' },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC },
};

const CHIP = {
    HAPPENED: 'bg-emerald-100 text-emerald-800',
    EARLY: 'bg-emerald-100 text-emerald-800',
    LATE: 'bg-amber-100 text-amber-800',
    PARTLY: 'bg-amber-100 text-amber-800',
    NOT_YET: 'bg-rose-100 text-rose-800',
    MISSED: 'bg-rose-100 text-rose-800',
    NOT_DUE: 'bg-slate-100 text-slate-700',
    UNKNOWN: 'bg-slate-100 text-slate-700',
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'AI 2027 vs reality: a live tracker',
    description: DESC,
    url: `${SITE_URL}${PATH}`,
    datePublished: '2026-10-18',
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
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <span className="inline-block rounded-full bg-primary-50 text-primary-700 text-xs font-semibold px-3 py-1 mb-4">
                                Live tracker · last checked {fmt(checked)}
                            </span>
                            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                                AI 2027 vs reality: a live tracker
                            </h1>
                            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                                <a className="underline" href="https://ai-2027.com/" target="_blank" rel="noopener">AI 2027</a> (April 2025)
                                made dated calls about AI from mid-2025 on. Here is each call next to what has really happened, with a
                                source. Calls whose date hasn&apos;t come yet are marked and checked when it does.
                            </p>
                            <p className="mt-3 text-sm text-slate-500">
                                By <a className="underline" href="https://www.sibinarendran.com" target="_blank" rel="noopener">Sibi Narendran</a>, founder of Dooza · updated {fmt(checked)}
                            </p>
                        </div>

                        <section aria-label="Scoreboard" className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {stats.map(([n, t]) => (
                                <div key={t} className="bg-white border border-slate-200 rounded-xl p-4 text-center">
                                    <p className="text-2xl font-bold text-slate-900">{n}</p>
                                    <p className="mt-1 text-xs text-slate-600 leading-snug">{t}</p>
                                </div>
                            ))}
                        </section>

                        <section className="mt-14" aria-labelledby="calls">
                            <h2 id="calls" className="text-2xl font-bold text-slate-900">Every AI 2027 call, and what really happened</h2>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">AI 2027 date</th><th className="p-3">AI 2027 said</th><th className="p-3">What really happened</th><th className="p-3">Verdict</th></tr>
                                    </thead>
                                    <tbody>
                                        {rows.map((r) => (
                                            <tr key={r.n} className="border-t border-slate-100 align-top">
                                                <td className="p-3 text-slate-600 whitespace-nowrap">{r.when}</td>
                                                <td className="p-3 text-slate-900">
                                                    {r.prediction}
                                                    {r.a2027_url ? (
                                                        <> <a className="text-xs underline text-slate-500" href={r.a2027_url} target="_blank" rel="noopener">AI 2027</a></>
                                                    ) : null}
                                                </td>
                                                <td className="p-3 text-slate-600">
                                                    {r.reality}
                                                    {r.source_url ? (
                                                        <> <a className="text-xs underline text-slate-500" href={r.source_url} target="_blank" rel="noopener">{r.source_name}</a></>
                                                    ) : null}
                                                </td>
                                                <td className="p-3 whitespace-nowrap">
                                                    <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${CHIP[r.status]}`}>{labels[r.status]}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mt-14" aria-labelledby="milestones">
                            <h2 id="milestones" className="text-2xl font-bold text-slate-900">The big milestones: AI 2027&apos;s date vs the real date</h2>
                            <p className="mt-2 text-slate-600">Warnings arrived early; the capability jumps have not arrived yet.</p>
                            <div className="mt-6 bg-white border border-slate-200 rounded-xl p-4 overflow-x-auto">
                                <div className="min-w-[640px]" dangerouslySetInnerHTML={{ __html: svg }} />
                            </div>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">Milestone</th><th className="p-3">AI 2027 said</th><th className="p-3">Reality</th><th className="p-3">Evidence</th></tr>
                                    </thead>
                                    <tbody>
                                        {milestones.map((m) => (
                                            <tr key={m.label} className="border-t border-slate-100 align-top">
                                                <td className="p-3 font-medium text-slate-900">{m.label}</td>
                                                <td className="p-3 text-slate-600 whitespace-nowrap">{mon(m.a2027)}</td>
                                                <td className="p-3 whitespace-nowrap">{m.status}</td>
                                                <td className="p-3 text-slate-600">{m.evidence}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <section className="mt-14" aria-labelledby="warning-shots">
                            <h2 id="warning-shots" className="text-2xl font-bold text-slate-900">What happened that AI 2027 didn&apos;t date</h2>
                            <p className="mt-2 text-slate-600">Real events of 2026, and where (if anywhere) AI 2027 had them.</p>
                            <div className="mt-4 overflow-x-auto">
                                <table className="w-full text-sm bg-white border border-slate-200 rounded-xl">
                                    <thead className="text-left text-slate-500">
                                        <tr><th className="p-3">Date</th><th className="p-3">What happened</th><th className="p-3">AI 2027 had it</th></tr>
                                    </thead>
                                    <tbody>
                                        {warning.map((w) => (
                                            <tr key={w.date} className="border-t border-slate-100 align-top">
                                                <td className="p-3 text-slate-600 whitespace-nowrap">{w.date}</td>
                                                <td className="p-3 text-slate-900 [&_a]:underline" dangerouslySetInnerHTML={{ __html: w.what }} />
                                                <td className="p-3 text-slate-600">{w.ai2027}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </section>

                        <p className="mt-14 text-sm text-slate-500">
                            Spot a wrong verdict? Email support@dooza.ai with a source and we&apos;ll fix it. Also on{' '}
                            <a className="underline" href="https://www.sibinarendran.com/ai-2027-tracker" target="_blank" rel="noopener">sibinarendran.com</a>.
                        </p>
                    </div>
                </main>
                <Footer />
            </div>
        </BookingModalProvider>
    );
}
