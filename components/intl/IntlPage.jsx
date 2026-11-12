// Shared layout for /za-tax and /ie-accounts (staging, noindex). No mention of software on these pages (Apollo/Pythia P-20261112-71..73).
import LeadForm3 from '@/components/intl/LeadForm3';

export const intlMeta = (title, description, path) => ({
    title, description, keywords: [],
    robots: { index: false, follow: false },
    alternates: { canonical: `https://www.dooza.ai/${path}` },
    openGraph: { title, description, url: `https://www.dooza.ai/${path}`, siteName: 'Dooza', type: 'website' },
    twitter: { card: 'summary', title, description },
});

export default function IntlPage({ p }) {
    return (
        <main className="min-h-screen bg-[#F8FAFC] text-[#14213D]">
            <div className="mx-auto max-w-5xl px-4 py-10 sm:py-16">
                <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
                    <div>
                        <h1 className="text-3xl font-bold leading-tight sm:text-4xl">{p.h1}</h1>
                        <p className="mt-4 text-[18px] text-[#334155]"><strong>{p.subLead}</strong> {p.sub}</p>
                        <ul className="mt-6 space-y-3">{p.bullets.map(([b, t]) => <li key={b} className="flex gap-3 text-[16px] text-[#334155]"><span className="mt-1 text-[#0F766E]">✓</span><span><strong>{b}</strong> {t}</span></li>)}</ul>
                    </div>
                    <div><LeadForm3 slug={p.slug} fields={p.fields} cta={p.cta} done={p.done} /></div>
                </div>
                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]"><tbody>{p.prices.map(([a, b, c]) => <tr key={a} className="border-b border-[#E2E8F0] last:border-0"><td className="p-4"><strong>{a}</strong><p className="text-[14px] text-[#4B5567]">{c}</p></td><td className="p-4 text-right font-semibold whitespace-nowrap">{b}</td></tr>)}</tbody></table>
                    </div>
                </section>
                <p className="mt-16 text-[13px] text-[#64748B]">Dooza, a brand of Adam Laboratory Inc. · 1111b S Governors Ave Ste 34259, Dover, DE 19904 · <a href="mailto:support@dooza.ai" className="underline">support@dooza.ai</a> · <a href="/privacy" className="underline">Privacy</a></p>
            </div>
        </main>
    );
}
