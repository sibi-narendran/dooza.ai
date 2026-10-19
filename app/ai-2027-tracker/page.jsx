import BookingModalProvider from '@/components/BookingModalProvider';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SITE_URL } from '@/lib/site';
import { ai2027Tracker } from '@/lib/ai2027TrackerData';
import Ai2027Calls, { Sources } from '@/components/Ai2027Calls';

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
                    <div className="max-w-3xl mx-auto">
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
                                source. Calls whose date hasn&apos;t come yet show progress so far and the time left. (OpenBrain is AI 2027&apos;s name for the leading lab.)
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

                        <section className="mt-12" aria-labelledby="calls">
                            <h2 id="calls" className="text-2xl font-bold text-slate-900">Every call, in order</h2>
                            <Ai2027Calls rows={rows} labels={labels} checked={checked} />
                        </section>

                        <section className="mt-14" aria-labelledby="milestones">
                            <h2 id="milestones" className="text-2xl font-bold text-slate-900">The big milestones</h2>
                            <p className="mt-2 text-slate-600">
                                Two warnings arrived months early. The capability milestones are still inside AI 2027&apos;s window; the dotted line is the time left.
                            </p>
                            <div className="hidden sm:block mt-6 bg-white border border-slate-200 rounded-2xl p-4" dangerouslySetInnerHTML={{ __html: svg }} />
                            <ul className="mt-4 space-y-3">
                                {milestones.map((m) => (
                                    <li key={m.label} className="rounded-2xl border border-slate-200 bg-white p-4">
                                        <p className="font-semibold text-slate-900">{m.label}</p>
                                        <p className="mt-1 flex flex-wrap gap-x-3 text-sm">
                                            <span className="text-slate-500">AI 2027: {mon(m.a2027)}</span>
                                            <span className={m.real ? 'font-bold text-emerald-700' : 'font-bold text-primary-700'}>{m.status}</span>
                                        </p>
                                        <p className="mt-2 text-[15px] text-slate-700">{m.evidence}</p>
                                        <Sources list={m.sources} />
                                    </li>
                                ))}
                            </ul>
                        </section>

                        <section className="mt-14" aria-labelledby="warning-shots">
                            <h2 id="warning-shots" className="text-2xl font-bold text-slate-900">What happened that AI 2027 didn&apos;t date</h2>
                            <ul className="mt-4 space-y-3">
                                {warning.map((w) => (
                                    <li key={w.date} className="rounded-2xl border border-slate-200 bg-white p-4">
                                        <p className="text-xs font-bold text-slate-500">{w.date}</p>
                                        <p className="mt-1 text-[15px] text-slate-900 [&_a]:underline" dangerouslySetInnerHTML={{ __html: w.what }} />
                                        <p className="mt-2 text-xs text-slate-500">AI 2027: {w.ai2027}</p>
                                    </li>
                                ))}
                            </ul>
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
