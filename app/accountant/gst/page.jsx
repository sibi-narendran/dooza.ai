import GstWa from '@/components/in/GstWa';
import { GST_URL, GST_WA_LINK, GST_H1, GST_SUB, GST_STEPS, GST_COVERS, GST_PRICES, GST_TERMS, GST_NOT, GST_WHO, GST_FAQ } from '@/lib/inGst';

const TITLE = 'GST Registration for Rs 499. Final Price. | Dooza Accountant';
const DESC = 'GST registration for Rs 499, tax included. Rs 0 today. You pay only when your GST number (GSTIN) arrives. Start on WhatsApp. No sales call.';
export const metadata = { title: { absolute: TITLE }, description: DESC, alternates: { canonical: GST_URL, types: { 'text/markdown': `${GST_URL}.md` } }, openGraph: { title: TITLE, description: DESC, url: GST_URL, type: 'website' } };

const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;
const LD = [
    {
        '@context': 'https://schema.org', '@type': 'Service', name: 'GST registration', serviceType: 'GST registration and GST return filing', url: GST_URL,
        provider: { '@type': 'Organization', name: 'Dooza Accountant', url: GST_URL }, areaServed: { '@type': 'Country', name: 'India' },
        description: `${GST_H1} ${GST_SUB}`,
        offers: { '@type': 'Offer', price: '499', priceCurrency: 'INR', url: GST_WA_LINK, description: 'GST registration and the first return filing, tax included. Paid only when the GSTIN arrives. Nothing is paid if the application is rejected.' },
        potentialAction: { '@type': 'CommunicateAction', name: 'Start on WhatsApp', target: GST_WA_LINK },
    },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: GST_FAQ.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })) },
];

export default function Page() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] pb-24 text-[#14213D] sm:pb-0">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />
            <GstWa sticky />
            <div className="mx-auto max-w-3xl px-4 py-6 sm:py-14">
                <a href="/accountant/gst" className="text-[15px] font-bold tracking-tight">Dooza Accountant</a>
                <h1 className="mt-4 text-[34px] font-bold leading-tight sm:mt-6 sm:text-5xl">{GST_H1}</h1>
                <p className="mt-3 text-lg text-[#334155]">{GST_SUB}</p>
                <GstWa />

                <section className="mt-12">
                    <h2 className="text-2xl font-bold">How it works</h2>
                    <ol className="mt-4 space-y-3 text-[16px] text-[#334155]">{GST_STEPS.map((s, i) => <li key={s}><strong>{i + 1}.</strong> {s}</li>)}</ol>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold">What Rs 499 covers</h2>
                    <ul className="mt-4 space-y-2 text-[16px] text-[#334155]">{GST_COVERS.map((t) => <li key={t} className="flex gap-2">{ck}{t}</li>)}</ul>
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold">All prices (nothing else is charged)</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]"><tbody>
                            {GST_PRICES.map(([a, b], i) => <tr key={a} className={i < GST_PRICES.length - 1 ? 'border-b border-[#E2E8F0]' : ''}><td className="p-4">{a}</td><td className="p-4 font-semibold">{b}</td></tr>)}
                        </tbody></table>
                    </div>
                    <p className="mt-4 text-[16px] text-[#334155]">{GST_TERMS}</p>
                    <p className="mt-2 text-[16px] text-[#334155]"><strong>What we do not do:</strong> {GST_NOT}</p>
                </section>

                <section className="mt-12 rounded-2xl border border-[#CBD5E1] bg-white p-5">
                    <h2 className="text-2xl font-bold">Who we are</h2>
                    {GST_WHO.map((l) => <p key={l} className="mt-2 text-[16px] text-[#334155]">{l}</p>)}
                </section>

                <section className="mt-12">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    {GST_FAQ.map(([q, a]) => <div key={q}><h3 className="mt-5 text-lg font-semibold">{q}</h3><p className="mt-1 text-[16px] text-[#334155]">{a}</p></div>)}
                </section>

                <section className="mt-12 rounded-2xl border border-[#CBD5E1] bg-white p-5">
                    <p className="text-lg font-semibold">GST registration for Rs 499. Rs 0 today.</p>
                    <GstWa />
                </section>

                <p className="mt-14 text-[13px] leading-relaxed text-[#64748B]">Approval is decided by the GST department. · <a href="/accountant/gst.md" className="underline">Plain-text version of this page (for AI assistants)</a> · <a href="/privacy" className="underline">Privacy</a></p>
            </div>
        </main>
    );
}
