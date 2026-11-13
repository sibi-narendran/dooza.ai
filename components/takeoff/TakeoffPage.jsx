import TakeoffForm from '@/components/takeoff/TakeoffForm';
import { TAKEOFF_PAGES, TAKEOFF_PRICE } from '@/lib/takeoffPages';

const URL = 'https://www.dooza.ai';
const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;

export function takeoffMetadata(key) {
    const p = TAKEOFF_PAGES[key];
    return { title: p.title, description: p.description, alternates: { canonical: `${URL}${p.path}` }, openGraph: { title: p.title, description: p.description, url: `${URL}${p.path}`, type: 'website' } };
}

export default function TakeoffPage({ pageKey }) {
    const p = TAKEOFF_PAGES[pageKey];
    const schema = [
        { '@context': 'https://schema.org', '@type': 'Service', name: p.h1.replace(/\. First Plan Free\./, ''), serviceType: 'Construction quantity takeoff', url: `${URL}${p.path}`, description: p.description, areaServed: { '@type': 'Country', name: 'United States' },
            provider: { '@type': 'Organization', name: 'Dooza', url: URL },
            offers: [{ '@type': 'Offer', name: 'First plan', price: '0', priceCurrency: 'USD' }, { '@type': 'Offer', name: 'Per plan', price: '100', priceCurrency: 'USD' }, { '@type': 'Offer', name: 'Monthly, up to 10 plans', price: '399', priceCurrency: 'USD' }] },
        { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: p.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
    ];
    const others = Object.entries(TAKEOFF_PAGES).filter(([k]) => k !== pageKey);
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{p.h1}</h1>
                <p className="mt-4 text-lg text-[#4B5567]">{p.lead}</p>
                <ul className="mt-6 space-y-2 text-[16px] text-[#334155]">{p.bullets.map((d) => <li key={d} className="flex gap-2">{ck}{d}</li>)}</ul>
                <div className="mt-8"><TakeoffForm trade={p.trade} /></div>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">How it works</h2>
                    <ol className="mt-4 space-y-3 text-[16px] text-[#334155]">
                        <li><strong>1. Upload your plan.</strong> PDF or a link to the set. Say what you need counted and when the bid is due.</li>
                        <li><strong>2. We do the takeoff.</strong> Every quantity is measured from the drawings and tied to a marked area on the plan.</li>
                        <li><strong>3. Get it back within 48 hours.</strong> Excel quantities + marked-up PDF by email. Price it your way and send the bid.</li>
                    </ol>
                </section>


                {p.trade === 'drywall' && (
                    <section className="mt-14">
                        <h2 className="text-2xl font-bold">Sample drywall takeoff</h2>
                        <p className="mt-3 text-[16px] leading-relaxed text-[#334155]">A real takeoff we did from a public plan set: Highline College Building 23 tenant improvement, Level 3 (sheet A3.01, design development set, 1/8&quot; = 1&apos;-0&quot;). Blue = new A1 partitions, green = F4 exterior furring.</p>
                        <a href="/takeoff/sample-drywall-takeoff-markup.pdf" className="mt-4 block overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white"><img src="/takeoff/sample-drywall-takeoff.jpg" alt="Sample drywall takeoff: marked-up Level 3 floor plan with partitions in blue and furring in green" width="1600" height="1035" loading="lazy" className="h-auto w-full" /></a>
                        <ul className="mt-4 space-y-1 text-[15px] text-[#334155]">
                            <li>A1 partitions: 522 LF, 5/8&quot; Type X both sides, 13&apos;-1&quot; to deck = 13,653 SF board</li>
                            <li>F4 exterior furring: 144 LF = 1,887 SF board</li>
                            <li>About 357 sheets of 4x12 incl. 10% waste, about 700 studs, 1,332 LF track</li>
                            <li>Openings not deducted (noted on the sheet)</li>
                        </ul>
                        <p className="mt-3 text-[15px]"><a href="/takeoff/sample-drywall-takeoff-markup.pdf" className="underline">Marked-up plan (PDF)</a> · <a href="/takeoff/sample-drywall-takeoff.xlsx" className="underline">Quantity sheet (Excel)</a></p>
                        <p className="mt-2 text-[13px] text-[#64748B]">Sample. Not an accuracy claim. Check any takeoff against your bid set before pricing.</p>
                    </section>
                )}
                {p.sections.map(([h, t]) => <section key={h} className="mt-12"><h2 className="text-2xl font-bold">{h}</h2><p className="mt-3 text-[16px] leading-relaxed text-[#334155]">{t}</p></section>)}

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]"><tbody>
                            {TAKEOFF_PRICE.map(([a, b], i) => <tr key={a} className={i < TAKEOFF_PRICE.length - 1 ? 'border-b border-[#E2E8F0]' : ''}><td className="p-4">{a}</td><td className="p-4 font-semibold">{b}</td></tr>)}
                        </tbody></table>
                    </div>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    {p.faq.map(([q, a]) => <div key={q}><h3 className="mt-5 text-lg font-semibold">{q}</h3><p className="mt-1 text-[16px] text-[#334155]">{a}</p></div>)}
                </section>

                <section className="mt-14 rounded-2xl border border-[#CBD5E1] bg-white p-5">
                    <p className="font-semibold">Ready to stop measuring?</p>
                    <a href="#upload" className="mt-3 inline-block rounded-xl bg-[#0F766E] px-5 py-3 font-semibold text-white hover:bg-[#0B5D57]">Upload your plan, get your first takeoff free</a>
                    <p className="mt-4 text-[14px] text-[#4B5567]">More: {others.map(([k, o], i) => <span key={k}>{i ? ' · ' : ''}<a href={o.path} className="underline">{o.h1.replace(/\. First Plan Free\./, '')}</a></span>)}</p>
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza is a brand of Adam Laboratory Inc. · 1111b S Governors Ave Ste 34259, Dover, DE 19904 · <a href="mailto:odysseus@dooza.org" className="underline">odysseus@dooza.org</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/terms" className="underline">Terms</a></p>
            </div>
        </main>
    );
}
