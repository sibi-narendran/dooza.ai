// Dooza Accountant: Rs 499 GST registration. v2 2026-11-15, Apollo brief india-gst-page-v2.md
// (Sibi 20:10: "no trust signal ... clone from what IndiaFilings uses and add better"). Section order follows the brief.
// Design: paper white, sage wash, ink, teal; Bricolage Grotesque + Instrument Sans (homepage v3 tokens). One bold element: the bill.
// All copy lives in lib/inGst.js (also feeds JSON-LD and /accountant/gst.md). Everything is in the server HTML.
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import GstWa from '@/components/in/GstWa';
import * as G from '@/lib/inGst';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const TITLE = 'Dooza Accountant: GST registration for Rs 499';
const DESC = 'GST registration for Rs 499, tax included. Rs 0 today. You pay only when your GSTIN arrives. No sales call. Start on WhatsApp.';
const OG = 'https://www.dooza.ai/og-accountant-gst.png';
export const metadata = {
    title: { absolute: TITLE }, description: DESC,
    alternates: { canonical: G.GST_URL, types: { 'text/markdown': `${G.GST_URL}.md` } },
    openGraph: { title: TITLE, description: DESC, url: G.GST_URL, siteName: 'Dooza Accountant', type: 'website', locale: 'en_IN', images: [{ url: OG, width: 1200, height: 630, alt: 'Dooza Accountant: GST registration for Rs 499. Final price.' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [OG] },
};

const LD = [
    {
        '@context': 'https://schema.org', '@type': 'Service', name: 'GST registration', serviceType: 'GST registration and GST return filing', url: G.GST_URL,
        provider: { '@type': 'Organization', name: 'Dooza Accountant', url: G.GST_URL }, areaServed: { '@type': 'Country', name: 'India' },
        description: `${G.GST_H1} ${G.GST_SUB}`,
        offers: { '@type': 'Offer', price: '499', priceCurrency: 'INR', url: G.GST_WA_LINK, description: 'GST registration and the first return filing, tax included. Paid only when the GSTIN arrives. Nothing is paid if the application is rejected.' },
        potentialAction: { '@type': 'CommunicateAction', name: 'Start on WhatsApp', target: G.GST_WA_LINK },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: G.GST_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
];

const ink = 'text-[#14213D]';
const H2 = ({ children, light }) => <h2 className={`${display.className} text-[28px] font-bold leading-tight tracking-tight sm:text-4xl ${light ? '!text-white' : ink}`}>{children}</h2>;
const Tick = () => <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-[3px] h-5 w-5 shrink-0 text-[#0F766E]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg>;
const wrap = 'mx-auto max-w-5xl px-4 sm:px-6';
const ext = { target: '_blank', rel: 'noopener' };
const link = 'underline decoration-[#0F766E] underline-offset-2';
// Link "gst.gov.in" and "By rule" / "CGST Rule 9" to the official sources wherever they appear in copy.
const SRC = [['gst.gov.in', G.GST_PORTAL], ['By rule', G.GST_RULE9], ['CGST Rule 9', G.GST_RULE9]];
const rich = (t) => { for (const [w, u] of SRC) { const i = t.indexOf(w); if (i >= 0) return <>{t.slice(0, i)}<a href={u} {...ext} className={link}>{w}</a>{t.slice(i + w.length)}</>; } return t; };

const StartCard = ({ id }) => (
    <div id={id} className="rounded-2xl border border-[#CBD8D3] bg-white p-5 shadow-[0_18px_40px_-22px_rgba(20,33,61,0.35)] sm:p-7">
        <p className={`${display.className} text-[22px] font-bold leading-tight ${ink}`}>{G.GST_CARD_TITLE}</p>
        <ul className="mb-5 mt-4 space-y-2.5 text-[16px] text-[#334155]">{G.GST_CARD.map((t) => <li key={t} className="flex gap-2.5"><Tick /><span>{rich(t)}</span></li>)}</ul>
        <GstWa />
    </div>
);

export default function Page() {
    return (
        <main className={`${body.className} min-h-screen bg-white pb-24 ${ink} sm:pb-0`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
            <GstWa sticky />

            <header className="sticky top-0 z-40 border-b border-[#DDE5E2] bg-white/95 backdrop-blur">
                <div className={`${wrap} flex h-14 items-center justify-between sm:h-16`}>
                    <a href="/accountant/gst" className={`${display.className} text-[19px] font-bold tracking-tight ${ink}`}>Dooza <span className="text-[#0F766E]">Accountant</span></a>
                    <div className="flex items-center gap-4">
                        <span className="text-[14px] font-medium text-[#475569]">GST registration, India</span>
                        <GstWa bar />
                    </div>
                </div>
            </header>

            {/* 1 Hero + 2 Start card */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} grid gap-7 py-8 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12`}>
                    <div>
                        <h1 className={`${display.className} text-[31px] font-extrabold leading-[1.1] tracking-tight ${ink} sm:text-[46px]`}>{G.GST_H1}</h1>
                        <p className="mt-4 max-w-xl text-[17px] text-[#334155] sm:text-xl">{G.GST_SUB}</p>
                        <p className="mt-5 inline-flex flex-wrap gap-x-2 rounded-xl border-2 border-[#0F766E] bg-white px-4 py-2.5 text-[16px] font-semibold sm:text-[17px]">{G.GST_BANNER.map((t, i) => <span key={t} className={i === 0 ? 'text-[#0F766E]' : ''}>{t}</span>)}</p>
                    </div>
                    <StartCard />
                </div>
            </section>

            {/* 3 Guarantee + the bill */}
            <section className={`${wrap} grid gap-8 py-10 sm:py-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12`}>
                <div className="rounded-2xl border-2 border-[#14213D] p-5 sm:p-8">
                    <H2>{G.GST_GUARANTEE_TITLE}</H2>
                    <ul className="mt-5 space-y-3 text-[17px] text-[#334155]">{G.GST_GUARANTEE.map((t) => <li key={t} className="flex gap-3"><Tick />{t}</li>)}</ul>
                </div>
                <div className="mx-auto w-full max-w-sm">
                    <div className="rounded-t-2xl border border-b-0 border-[#DDE5E2] bg-[#EEF3F1] px-6 pb-6 pt-6">
                        <p className={`${display.className} text-lg font-bold`}>Your bill</p>
                        <dl className="mt-3 border-t border-dashed border-[#94A3B8] pt-3 text-[15px]">
                            {G.GST_BILL.map(([a, b]) => <div key={a} className="flex justify-between gap-4 py-1.5"><dt className="text-[#334155]">{a}</dt><dd className="shrink-0 font-semibold tabular-nums">{b}</dd></div>)}
                        </dl>
                        <div className="mt-3 flex items-baseline justify-between border-t border-dashed border-[#94A3B8] pt-4">
                            <span className="font-semibold">Total</span><span className={`${display.className} text-3xl font-extrabold tabular-nums`}>Rs 499</span>
                        </div>
                        <div className="mt-4 rounded-xl bg-[#0F766E] px-4 py-3 text-white">
                            <div className="flex items-baseline justify-between"><span className="font-semibold">You pay today</span><span className={`${display.className} text-2xl font-extrabold tabular-nums`}>Rs 0</span></div>
                            <p className="mt-1 text-[14px] text-[#D7F0EC]">Rs 499 only after your GSTIN is issued.</p>
                        </div>
                    </div>
                    <div aria-hidden="true" className="h-3" style={{ background: 'linear-gradient(135deg,#EEF3F1 8px,transparent 0) 0 0/16px 12px repeat-x, linear-gradient(225deg,#EEF3F1 8px,transparent 0) 0 0/16px 12px repeat-x' }} />
                </div>
            </section>

            {/* 4 Check it yourself */}
            <section className="border-y border-[#DDE5E2] bg-white">
                <div className={`${wrap} py-10`}>
                    <H2>Check it yourself</H2>
                    <ul className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        {G.GST_CHECK.map(([a, b]) => <li key={a} className="border-t-2 border-[#0F766E] pt-3"><p className={`${display.className} text-[19px] font-bold leading-snug`}>{a}</p><p className="mt-1 text-[15px] leading-snug text-[#475569]">{rich(b)}</p></li>)}
                    </ul>
                </div>
            </section>

            {/* 5 Price compare + all prices */}
            <section className={`${wrap} py-10 sm:py-16`}>
                <H2>The price, compared</H2>
                <div className="mt-6 max-w-3xl overflow-hidden rounded-2xl border border-[#CBD8D3]">
                    <table className="w-full border-collapse text-left text-[15px] sm:text-[16px]">
                        <thead><tr className="bg-[#EEF3F1]">{G.GST_COMPARE_HEAD.map((h, i) => <th key={i} scope="col" className={`p-3 align-bottom font-semibold sm:p-4 ${i === 2 ? 'bg-[#0F766E] text-white' : 'text-[#475569]'}`}>{h}</th>)}</tr></thead>
                        <tbody>{G.GST_COMPARE.map(([a, b, c]) => <tr key={a} className="border-t border-[#DDE5E2]"><th scope="row" className="p-3 align-top font-semibold sm:p-4">{a}</th><td className="p-3 align-top text-[#475569] sm:p-4">{b}</td><td className="bg-[#F3FAF8] p-3 align-top font-bold sm:p-4">{c}</td></tr>)}</tbody>
                    </table>
                </div>
                <p className="mt-3 max-w-3xl text-[13px] text-[#64748B]">{G.GST_COMPARE_NOTE}</p>

                <h3 className={`${display.className} mt-12 text-[22px] font-bold ${ink}`}>All prices. Nothing else is charged.</h3>
                <div className="mt-4 max-w-3xl border-y border-[#14213D]">
                    {G.GST_PRICES.map(([a, b], i) => <div key={a} className={`flex flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6 ${i ? 'border-t border-[#DDE5E2]' : ''}`}><span className="text-[17px]">{a}</span><span className="text-[17px] font-bold sm:shrink-0 sm:text-right">{b}</span></div>)}
                </div>
                <p className="mt-5 max-w-3xl text-[16px] text-[#334155]">{G.GST_TERMS}</p>
                <p className="mt-2 max-w-3xl text-[16px] text-[#334155]"><strong>What we do not do:</strong> {G.GST_NOT}</p>
            </section>

            {/* 6 How it works + 7 How long */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} py-10 sm:py-16`}>
                    <H2>How it works</H2>
                    <ol className="mt-7 grid gap-7 lg:grid-cols-3">
                        {G.GST_STEPS.map((s, i) => <li key={s} className="border-t-2 border-[#14213D] pt-4"><span className={`${display.className} text-4xl font-extrabold text-[#0F766E]`}>{i + 1}</span><p className="mt-2 text-[17px] text-[#334155]">{s}</p></li>)}
                    </ol>

                    <div className="mt-14"><H2>How long it takes</H2></div>
                    <ol className="mt-6 max-w-3xl border-l-2 border-[#0F766E]">
                        {G.GST_TIMELINE.map(([a, b]) => <li key={a} className="relative py-3 pl-6"><span aria-hidden="true" className="absolute -left-[7px] top-[19px] h-3 w-3 rounded-full bg-[#0F766E]" /><p className="text-[17px] font-bold">{a}</p><p className="text-[16px] text-[#334155]">{rich(b)}</p></li>)}
                    </ol>
                    <p className="mt-4 max-w-3xl text-[16px] text-[#334155]">{G.GST_TIMELINE_NOTE}</p>
                    <p className="mt-2 max-w-3xl text-[14px] text-[#475569]">Source: <a href={G.GST_RULE9} {...ext} className={link}>CGST Rules 2017, Rule 9 (CBIC)</a></p>
                </div>
            </section>

            {/* 8 Papers */}
            <section className={`${wrap} py-10 sm:py-16`}>
                <H2>Papers needed</H2>
                <ul className="mt-6 max-w-3xl divide-y divide-[#DDE5E2] border-y border-[#DDE5E2]">{G.GST_PAPERS.map((t) => <li key={t} className="flex gap-3 py-3 text-[16px]"><Tick />{t}</li>)}</ul>
                <p className="mt-4 max-w-3xl text-[15px] text-[#475569]">{G.GST_PAPERS_NOTE}</p>
            </section>

            {/* 9 Do you need GST? */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} py-10 sm:py-16`}>
                    <H2>{G.GST_NEED_TITLE}</H2>
                    <dl className="mt-6 max-w-3xl divide-y divide-[#DDE5E2] rounded-2xl border border-[#DDE5E2] bg-white">
                        {G.GST_NEED.map(([a, b]) => (
                            <div key={a} className="grid gap-1 px-4 py-4 sm:grid-cols-2 sm:gap-6 sm:px-6">
                                <dt className={`text-[16px] font-semibold ${ink}`}>{a}</dt>
                                <dd className="text-[16px] text-[#334155]">{b}</dd>
                            </div>
                        ))}
                    </dl>
                    <p className="mt-4 max-w-3xl text-[15px] text-[#475569]">{G.GST_NEED_NOTE} Source: <a href={G.GST_NEED_SRC} {...ext} className={link}>{G.GST_NEED_SRC_LABEL}</a>.</p>
                </div>
            </section>

            {/* 10 Who we are */}
            <section className="bg-[#14213D]">
                <div className={`${wrap} py-10 sm:py-16`}>
                    <H2 light>Who we are</H2>
                    <div className="mt-6 max-w-3xl space-y-3 text-[17px] text-[#DCE4EE]">{G.GST_WHO.map((l) => <p key={l}>{l}</p>)}</div>
                </div>
            </section>

            {/* 11 FAQ */}
            <section className={`${wrap} py-10 sm:py-16`}>
                <H2>Questions</H2>
                <div className="mt-6 max-w-3xl divide-y divide-[#DDE5E2] border-y border-[#DDE5E2]">
                    {G.GST_FAQ.map(([q, a]) => <div key={q} className="py-5"><h3 className={`${body.className} text-[19px] font-bold ${ink}`}>{q}</h3><p className="mt-2 text-[16px] leading-relaxed text-[#334155]">{rich(a)}</p></div>)}
                </div>
            </section>

            {/* 12 Bottom CTA */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} py-10 sm:py-16`}><div className="mx-auto max-w-md"><StartCard /></div></div>
            </section>

            <footer className={`${wrap} py-8 text-[13px] leading-relaxed text-[#64748B]`}>
                <p>Approval is decided by the GST department. Sources: <a href={G.GST_RULE9} {...ext} className="underline">CGST Rules 2017, Rule 9</a>, <a href={G.GST_PORTAL} {...ext} className="underline">gst.gov.in</a>.</p>
                <p className="mt-1"><a href="/accountant/gst.md" className="underline">Plain-text version of this page (for AI assistants)</a> <span aria-hidden="true">|</span> <a href="/privacy" className="underline">Privacy</a></p>
            </footer>
        </main>
    );
}
