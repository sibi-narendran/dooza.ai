// Dooza Accountant: GST return filing, Rs 499 a month. 2026-11-15, Apollo brief india-gst-filing-page.md
// (Sibi 20:42 as relayed: "Design it very well yes", "Whatsapp click pre filled").
// Design: same tokens as /accountant/gst (paper, sage wash, ink, teal; amber = you, teal = us).
// Bold element: the drawn Sample receipt. Second: the month strip. Everything else stays quiet.
// All copy lives in lib/inGstFiling.js (also feeds JSON-LD and /accountant/gst-filing.md). Server HTML only.
import { Bricolage_Grotesque, Instrument_Sans } from 'next/font/google';
import GstWa from '@/components/in/GstWa';
import * as F from '@/lib/inGstFiling';

const display = Bricolage_Grotesque({ subsets: ['latin'], weight: ['600', '700', '800'], display: 'swap' });
const body = Instrument_Sans({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

const TITLE = 'Dooza Accountant: GST return filing for Rs 499 a month';
const DESC = 'GST return filing for Rs 499 a month, tax included. Rs 0 today. You pay only after we file. Send your bills on WhatsApp. No sales call.';
const OG = 'https://www.dooza.ai/og-accountant-gst-filing.png';
export const metadata = {
    title: { absolute: TITLE }, description: DESC,
    alternates: { canonical: F.FIL_URL, types: { 'text/markdown': `${F.FIL_URL}.md` } },
    openGraph: { title: TITLE, description: DESC, url: F.FIL_URL, siteName: 'Dooza Accountant', type: 'website', locale: 'en_IN', images: [{ url: OG, width: 1200, height: 630, alt: 'Dooza Accountant: GST return filing for Rs 499 a month. Pay only after we file.' }] },
    twitter: { card: 'summary_large_image', title: TITLE, description: DESC, images: [OG] },
};

const LD = [
    {
        '@context': 'https://schema.org', '@type': 'Service', name: 'GST return filing', serviceType: 'Monthly GST return filing (GSTR-1 and GSTR-3B)', url: F.FIL_URL,
        provider: { '@type': 'Organization', name: 'Dooza Accountant', url: F.FIL_URL, founder: { '@type': 'Person', name: 'Sibi Narendran' } }, areaServed: { '@type': 'Country', name: 'India' },
        description: `${F.FIL_H1} ${F.FIL_SUB}`,
        offers: {
            '@type': 'Offer', price: '499', priceCurrency: 'INR', url: F.FIL_WA_LINK,
            priceSpecification: { '@type': 'UnitPriceSpecification', price: '499', priceCurrency: 'INR', unitText: 'month', referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' } },
            description: 'Monthly GST return filing, GSTR-1 and GSTR-3B, up to 50 sales invoices, tax included. Paid each month after the return is filed.',
        },
        potentialAction: { '@type': 'CommunicateAction', name: 'Start on WhatsApp', target: F.FIL_WA_LINK },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: [...F.FIL_FAQ, [F.FIL_REG_Q, `${F.FIL_REG_A} ${F.FIL_REG_URL}`]].map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
];

const ink = 'text-[#14213D]';
const H2 = ({ children, light }) => <h2 className={`${display.className} text-[28px] font-bold leading-tight tracking-tight sm:text-4xl ${light ? '!text-white' : ink}`}>{children}</h2>;
const Tick = () => <svg aria-hidden="true" viewBox="0 0 20 20" className="mt-[3px] h-5 w-5 shrink-0 text-[#0F766E]" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.5l4 4 8-9" /></svg>;
const wrap = 'mx-auto max-w-5xl px-4 sm:px-6';
const ext = { target: '_blank', rel: 'noopener' };
const link = 'underline decoration-[#0F766E] underline-offset-2';
const rich = (t) => { const w = 'gst.gov.in'; const i = t.indexOf(w); return i < 0 ? t : <>{t.slice(0, i)}<a href={F.FIL_PORTAL} {...ext} className={link}>{w}</a>{t.slice(i + w.length)}</>; };

// Step icons: bills, numbers shown, filed.
const sv = { 'aria-hidden': true, viewBox: '0 0 32 32', className: 'h-9 w-9 text-[#0F766E]', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
const STEP_ICONS = [
    <svg key="a" {...sv}><path d="M8 4h16v24l-3-2-2.500 2-2.500-2-2.500 2-2.500-2-3 2z" /><path d="M12 11h8M12 16h8M12 21h5" /></svg>,
    <svg key="b" {...sv}><rect x="4" y="6" width="24" height="20" rx="3" /><path d="M9 20v-4M14 20v-7M19 20v-5M24 20v-9" /></svg>,
    <svg key="c" {...sv}><circle cx="16" cy="16" r="12" /><path d="M10.500 16.500l4 4 7-8.500" /></svg>,
];

const StartCard = () => (
    <div className="rounded-2xl border border-[#CBD8D3] bg-white p-4 shadow-[0_18px_40px_-22px_rgba(20,33,61,0.35)] sm:p-7">
        <p className={`${display.className} text-[20px] font-bold leading-tight sm:text-[22px] ${ink}`}>{F.FIL_CARD_TITLE}</p>
        <ul className="mb-4 mt-3 space-y-1.5 text-[15px] leading-snug text-[#334155] sm:mb-5 sm:mt-4 sm:space-y-2.5 sm:text-[16px] sm:leading-normal">{F.FIL_CARD.map((t) => <li key={t} className="flex gap-2.5"><Tick /><span>{t}</span></li>)}</ul>
        <GstWa kind="filing" />
    </div>
);

// The drawn receipt. Not a copy of any portal screen; stamped Sample.
const Receipt = () => (
    <figure className="mx-auto w-full max-w-[340px]">
        <div className="relative -rotate-2 rounded-xl bg-white px-6 pb-16 pt-5 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-dashed border-[#94A3B8] pb-3">
                <p className={`${display.className} text-[17px] font-bold ${ink}`}>Filed receipt</p>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E3F4F0] px-2.5 py-1 text-[13px] font-bold text-[#0B5D57]"><svg aria-hidden="true" viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10.500l4 4 8-9" /></svg>Filed</span>
            </div>
            <dl className="mt-3 text-[15px]">
                {F.FIL_SAMPLE.map(([a, b]) => <div key={a} className="flex justify-between gap-4 py-1.5"><dt className="text-[#475569]">{a}</dt><dd className={`font-semibold tabular-nums ${ink}`}>{b}</dd></div>)}
            </dl>
            <span className={`${display.className} absolute bottom-4 right-5 rotate-[-8deg] rounded-md border-[3px] border-[#B7791F] px-3 py-0.5 text-[22px] font-extrabold tracking-wide text-[#B7791F]`}>Sample</span>
        </div>
        <figcaption className="mt-5 text-center text-[14px] text-[#C6D2E0]">{F.FIL_SAMPLE_NOTE}</figcaption>
    </figure>
);

const DAYS = Array.from({ length: 30 }, (_, i) => i + 1);
const calOf = (d) => F.FIL_CAL.find(([day]) => day === d);

export default function Page() {
    return (
        <main className={`${body.className} min-h-screen bg-white pb-24 ${ink} sm:pb-0`}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
            <GstWa sticky kind="filing" />

            <header className="sticky top-0 z-40 border-b border-[#DDE5E2] bg-white/95 backdrop-blur">
                <div className={`${wrap} flex h-12 items-center justify-between sm:h-16`}>
                    <a href="/accountant/gst-filing" className={`${display.className} text-[19px] font-bold tracking-tight ${ink}`}>Dooza <span className="text-[#0F766E]">Accountant</span></a>
                    <div className="flex items-center gap-4">
                        <span className="text-[14px] font-medium text-[#475569]">GST return filing, India</span>
                        <GstWa bar kind="filing" />
                    </div>
                </div>
            </header>

            {/* 1 Hero + 2 Start card */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} grid gap-4 py-5 sm:gap-7 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12`}>
                    <div>
                        <h1 className={`${display.className} text-[27px] font-extrabold leading-[1.1] tracking-tight ${ink} sm:text-[46px]`}>{F.FIL_H1}</h1>
                        <p className="mt-2.5 max-w-xl text-[16px] leading-snug text-[#334155] sm:mt-4 sm:text-xl sm:leading-normal">{F.FIL_SUB}</p>
                        <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3 sm:mt-6">
                            <p className={`${display.className} hidden items-baseline gap-2 sm:flex`}><span className="text-[64px] font-extrabold leading-none tracking-tight text-[#0F766E]">Rs 499</span><span className="text-xl font-semibold text-[#334155]">a month</span></p>
                            <p className="inline-flex flex-wrap gap-x-2 rounded-xl border-2 border-[#0F766E] bg-white px-3 py-1.5 text-[15px] font-semibold sm:px-4 sm:py-2.5 sm:text-[17px]">{F.FIL_BANNER.map((t, i) => <span key={t} className={i === 0 ? 'text-[#0F766E]' : ''}>{t}</span>)}</p>
                        </div>
                    </div>
                    <StartCard />
                </div>
            </section>

            {/* 3 Guarantee + the bill */}
            <section className={`${wrap} grid gap-8 py-12 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-12`}>
                <div className="rounded-2xl border-2 border-[#14213D] p-5 sm:p-8">
                    <H2>{F.FIL_GUARANTEE_TITLE}</H2>
                    <ul className="mt-5 space-y-3 text-[17px] text-[#334155]">{F.FIL_GUARANTEE.map((t) => <li key={t} className="flex gap-3"><Tick />{t}</li>)}</ul>
                </div>
                <div className="mx-auto w-full max-w-sm">
                    <div className="rounded-t-2xl border border-b-0 border-[#DDE5E2] bg-[#EEF3F1] px-6 pb-6 pt-6">
                        <p className={`${display.className} text-lg font-bold`}>Your bill</p>
                        <dl className="mt-3 border-t border-dashed border-[#94A3B8] pt-3 text-[15px]">
                            {F.FIL_BILL.map(([a, b]) => <div key={a} className="flex justify-between gap-4 py-1.5"><dt className="text-[#334155]">{a}</dt><dd className="shrink-0 font-semibold tabular-nums">{b}</dd></div>)}
                        </dl>
                        <div className="mt-3 rounded-xl bg-[#0F766E] px-4 py-3 text-white">
                            <div className="flex items-baseline justify-between"><span className="font-semibold">You pay today</span><span className={`${display.className} text-2xl font-extrabold tabular-nums`}>Rs 0</span></div>
                        </div>
                    </div>
                    <div aria-hidden="true" className="h-3" style={{ background: 'linear-gradient(135deg,#EEF3F1 8px,transparent 0) 0 0/16px 12px repeat-x, linear-gradient(225deg,#EEF3F1 8px,transparent 0) 0 0/16px 12px repeat-x' }} />
                </div>
            </section>

            {/* 4 Check it yourself + the sample receipt */}
            <section className="bg-[#14213D]">
                <div className={`${wrap} grid gap-10 py-12 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-14`}>
                    <div>
                        <H2 light>Check it yourself</H2>
                        <ul className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
                            {F.FIL_CHECK.map(([a, b]) => <li key={a} className="border-t-2 border-[#2DD4BF] pt-3"><p className={`${display.className} text-[19px] font-bold leading-snug text-white`}>{a}</p><p className="mt-1 text-[15px] leading-snug text-[#C6D2E0] [&_a]:decoration-[#2DD4BF]">{rich(b)}</p></li>)}
                        </ul>
                    </div>
                    <Receipt />
                </div>
            </section>

            {/* 5 How it works */}
            <section className={`${wrap} py-12 sm:py-20`}>
                <H2>How it works</H2>
                <ol className="mt-7 grid gap-5 lg:grid-cols-3">
                    {F.FIL_STEPS.map((s, i) => (
                        <li key={s} className="flex gap-4 rounded-2xl bg-[#EEF3F1] p-5 lg:flex-col lg:gap-3 lg:p-6">
                            <div className="flex shrink-0 flex-col items-center gap-2 lg:flex-row lg:justify-between">{STEP_ICONS[i]}<span className={`${display.className} text-2xl font-extrabold text-[#14213D] lg:text-3xl`}>{i + 1}</span></div>
                            <p className="text-[17px] leading-snug text-[#334155]">{s}</p>
                        </li>
                    ))}
                </ol>
            </section>

            {/* 6 The month */}
            <section className="border-y border-[#DDE5E2] bg-[#EEF3F1]">
                <div className={`${wrap} py-12 sm:py-20`}>
                    <H2>{F.FIL_CAL_TITLE}</H2>
                    <div className="mt-7 max-w-3xl rounded-2xl border border-[#CBD8D3] bg-white p-4 sm:p-6">
                        <ol aria-hidden="true" className="grid grid-cols-10 gap-1.5 sm:gap-2">
                            {DAYS.map((d) => { const c = calOf(d); return <li key={d} className={`flex aspect-square items-center justify-center rounded-lg text-[13px] tabular-nums sm:text-[15px] ${c ? (c[1] === 'you' ? 'bg-[#F2B53A] font-extrabold text-[#14213D]' : 'bg-[#0F766E] font-extrabold text-white') : 'bg-[#F4F7F6] text-[#64748B]'}`}>{d}</li>; })}
                        </ol>
                        <ul className="mt-5 grid gap-3 sm:grid-cols-3">
                            {F.FIL_CAL.map(([d, who, when, what]) => (
                                <li key={d} className="flex items-center gap-3">
                                    <span aria-hidden="true" className={`h-4 w-4 shrink-0 rounded ${who === 'you' ? 'bg-[#F2B53A]' : 'bg-[#0F766E]'}`} />
                                    <p className="text-[16px] leading-snug"><span className="font-bold">{when}:</span> <span className="text-[#334155]">{what}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-4 max-w-3xl text-[15px] text-[#475569]">{F.FIL_CAL_NOTE}</p>
                </div>
            </section>

            {/* 7 Prices */}
            <section className={`${wrap} py-12 sm:py-20`}>
                <H2>Prices</H2>
                <ul className="mt-7 grid gap-4 lg:grid-cols-3">
                    {F.FIL_PRICES.map(([a, b, c], i) => (
                        <li key={a} className={`flex items-baseline justify-between gap-4 rounded-2xl p-5 lg:block lg:p-7 ${i === 0 ? 'bg-[#0F766E] text-white' : 'border border-[#CBD8D3] bg-white'}`}>
                            <p className={`text-[16px] font-semibold ${i === 0 ? 'text-[#D7F0EC]' : 'text-[#475569]'}`}>{a}</p>
                            <p className="shrink-0 lg:mt-3"><span className={`${display.className} text-[28px] font-extrabold tabular-nums tracking-tight lg:text-[40px]`}>{b}</span> <span className={`text-[15px] ${i === 0 ? 'text-[#D7F0EC]' : 'text-[#475569]'}`}>{c}</span></p>
                        </li>
                    ))}
                </ul>
                <p className="mt-5 max-w-3xl text-[17px] font-semibold">{F.FIL_PRICES_LINE}</p>
                <p className="mt-2 max-w-3xl text-[16px] text-[#334155]"><strong>Not included:</strong> {F.FIL_NOT}</p>
            </section>

            {/* 8 Who we are */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} py-12 sm:py-16`}>
                    <H2>Who we are</H2>
                    <div className="mt-6 max-w-3xl space-y-2 text-[17px] text-[#334155]">{F.FIL_WHO.map((l) => <p key={l}>{l}</p>)}</div>
                </div>
            </section>

            {/* 9 FAQ */}
            <section className={`${wrap} py-12 sm:py-20`}>
                <H2>Questions</H2>
                <div className="mt-6 max-w-3xl divide-y divide-[#DDE5E2] border-y border-[#DDE5E2]">
                    {F.FIL_FAQ.map(([q, a]) => <div key={q} className="py-5"><h3 className={`${body.className} text-[19px] font-bold ${ink}`}>{q}</h3><p className="mt-2 text-[16px] leading-relaxed text-[#334155]">{a}</p></div>)}
                    <div className="py-5"><h3 className={`${body.className} text-[19px] font-bold ${ink}`}>{F.FIL_REG_Q}</h3><p className="mt-2 text-[16px] leading-relaxed text-[#334155]"><a href={F.FIL_REG_PATH} className={link}>{F.FIL_REG_A}</a></p></div>
                </div>
            </section>

            {/* 10 Bottom CTA */}
            <section className="bg-[#EEF3F1]">
                <div className={`${wrap} py-12 sm:py-16`}>
                    <div className="mx-auto max-w-md"><StartCard /></div>
                    <p className="mt-6 text-center text-[15px] text-[#475569]"><a href={F.FIL_REG_PATH} className={link}>{F.FIL_REG_LINK}</a></p>
                </div>
            </section>

            <footer className={`${wrap} py-8 text-[13px] leading-relaxed text-[#64748B]`}>
                <p>You pay your GST to the government yourself. GST portal: <a href={F.FIL_PORTAL} {...ext} className="underline">gst.gov.in</a>.</p>
                <p className="mt-1"><a href="/accountant/gst-filing.md" className="underline">Plain-text version of this page (for AI assistants)</a> <span aria-hidden="true">|</span> <a href="/privacy" className="underline">Privacy</a></p>
            </footer>
        </main>
    );
}
