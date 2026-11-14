import InForm from '@/components/in/InForm';
import InCta from '@/components/in/InCta';
import { IN_PAGES, IN_PRO, IN_TRUST, IN_TRUST_BIS } from '@/lib/inPages';

const URL = 'https://www.dooza.ai';
const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;

export function inMetadata(key) {
    const p = IN_PAGES[key];
    return { title: p.title, description: p.description, robots: { index: false, follow: false }, alternates: { canonical: `${URL}${p.path}` }, openGraph: { title: p.title, description: p.description, url: `${URL}${p.path}`, type: 'website' } };
}

export default function InPage({ pageKey }) {
    const p = IN_PAGES[pageKey];
    const hub = pageKey === 'hub';
    const services = Object.entries(IN_PAGES).filter(([k]) => k !== 'hub');
    return (
        <main className="min-h-screen bg-[#F7F5F0] pb-20 text-[#14213D] sm:pb-0">
            <InCta service={p.service} sticky />
            <div className="mx-auto max-w-3xl px-4 py-8 sm:py-14">
                <a href="/in" className="text-[15px] font-bold tracking-tight">Dooza Compliance India</a>
                <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">{p.h1}</h1>
                <p className="mt-4 text-lg text-[#4B5567]">{p.lead}</p>
                {p.sub2 && <p className="mt-3 text-[16px] text-[#334155]">{p.sub2}</p>}
                <InCta service={p.service} />
                <p className="mt-4 text-[16px] font-semibold">{p.price} <span className="font-normal text-[#4B5567]">· government fees at actuals</span></p>
                <div className="mt-5 flex flex-wrap gap-3">
                    <a href="#start" className="rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white hover:bg-[#0B5D57]">Get started</a>
                </div>
                <ul className="mt-6 grid gap-2 text-[15px] text-[#334155] sm:grid-cols-2">{(p.service === 'bis' ? IN_TRUST_BIS : IN_TRUST).map((t) => <li key={t} className="flex gap-2">{ck}{t}</li>)}</ul>
                {IN_PRO && <div className="mt-5 flex items-center gap-3 rounded-2xl border border-[#CBD5E1] bg-white p-4 text-[14px]">{IN_PRO.photo && <img src={IN_PRO.photo} alt={IN_PRO.name} width="56" height="56" className="h-14 w-14 rounded-full object-cover" />}<div><p className="font-semibold">{IN_PRO.name} · {IN_PRO.reg}</p><p className="text-[#4B5567]">{IN_PRO.address} · GSTIN {IN_PRO.gstin}</p></div></div>}

                {hub && (
                    <section className="mt-10 grid gap-4 sm:grid-cols-2">
                        {services.map(([k, s]) => (
                            <a key={k} href={s.path} className="block rounded-2xl border border-[#CBD5E1] bg-white p-5 hover:border-[#14213D]">
                                <p className="text-lg font-bold">{s.h1.split('.')[0]}</p>
                                <p className="mt-1 text-[15px] text-[#4B5567]">{s.card}</p>
                                <p className="mt-2 text-[15px] font-semibold">{s.price}</p>
                            </a>
                        ))}
                    </section>
                )}

                <div className="mt-10"><InForm service={p.service} /></div>
                <InCta service={p.service} />

                {!hub && (
                    <>
                        <section className="mt-14">
                            <h2 className="text-2xl font-bold">How it works</h2>
                            <ol className="mt-4 space-y-3 text-[16px] text-[#334155]">{p.steps.map((s, i) => <li key={s}><strong>{i + 1}.</strong> {s}</li>)}</ol>
                            {p.note && <p className="mt-4 text-[15px] text-[#4B5567]">{p.note}</p>}
                            {p.extras && <ul className="mt-4 space-y-2 text-[16px] text-[#334155]">{p.extras.map((t) => <li key={t} className="flex gap-2">{ck}{t}</li>)}</ul>}
                            {p.included && <div className="mt-6 grid gap-4 sm:grid-cols-2"><div className="rounded-2xl border border-[#CBD5E1] bg-white p-4"><p className="font-semibold">Included</p><ul className="mt-2 space-y-1 text-[15px]">{p.included.map((t) => <li key={t} className="flex gap-2">{ck}{t}</li>)}</ul></div><div className="rounded-2xl border border-[#CBD5E1] bg-white p-4"><p className="font-semibold">Not included</p><ul className="mt-2 space-y-1 text-[15px] text-[#4B5567]">{p.notIncluded.map((t) => <li key={t}>– {t}</li>)}</ul></div></div>}
                        </section>
                        <section className="mt-14">
                            <h2 className="text-2xl font-bold">Price</h2>
                            <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                                <table className="w-full text-left text-[16px]"><tbody>
                                    {p.prices.map(([a, b], i) => <tr key={a} className={i < p.prices.length - 1 ? 'border-b border-[#E2E8F0]' : ''}><td className="p-4">{a}</td><td className="p-4 font-semibold">{b}</td></tr>)}
                                </tbody></table>
                            </div>
                        </section>
                        <section className="mt-14">
                            <h2 className="text-2xl font-bold">Questions</h2>
                            {p.faq.map(([q, a]) => <div key={q}><h3 className="mt-5 text-lg font-semibold">{q}</h3><p className="mt-1 text-[16px] text-[#334155]">{a}</p></div>)}
                        </section>
                        <section className="mt-14 rounded-2xl border border-[#CBD5E1] bg-white p-5">
                            <p className="font-semibold">Ready to file?</p>
                            <a href="#start" className="mt-3 inline-block rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white hover:bg-[#0B5D57]">Get started</a>
                        </section>
                    </>
                )}

                <p className="mt-16 text-[13px] leading-relaxed text-[#64748B]">Dooza files on your behalf with a qualified professional partner where the law requires a signature. Approval is decided by the government authority. · <a href="/privacy" className="underline">Privacy</a></p>
            </div>
        </main>
    );
}
