// /tc: $99 transaction coordinator for Texas realtors (Apollo's Google Ads test; brief
// /home/apollo/learned/knowledge/campaigns/tc-landing-brief.md, copy v3). DRAFT 2026-11-11: noindex, unlinked, not in
// the sitemap; no ads until Sibi says yes. No reviews, "licensed" or logos until real. Cancellation terms unconfirmed: left out.
import TcForm from '@/components/tc/TcForm';

export const metadata = {
    title: 'Transaction Coordinator, $99 per File',
    description: 'Transaction coordination for Texas real estate agents: $99 per file, first file free. We track every deadline and a person checks every step.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/tc' },
};

const DO = [
    'Contract-to-close checklist: earnest money, inspection, appraisal, financing, title, HOA',
    'Closing date reminders to all parties',
    'We chase the lender, title and signatures',
    'Weekly status to you and your client',
    'Your file kept compliance-ready',
];

export default function TcPage() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0F766E]">For Texas real estate agents</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Your next transaction, coordinated. $99 per file. First one free.</h1>
                <p className="mt-4 text-lg text-[#4B5567]">Human TCs charge $350-500 a file. We track every deadline, chase lender, title and signatures, and keep your file compliance-ready. A person checks every step.</p>
                <a href="#start" className="mt-6 inline-block rounded-xl bg-[#0F766E] px-6 py-4 text-lg font-semibold text-white hover:bg-[#0B5D57]">Start my free file</a>

                <div className="mt-10"><TcForm /></div>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">What we do</h2>
                    <ul className="mt-4 space-y-2 text-[16px] text-[#334155]">{DO.map((d) => <li key={d} className="flex gap-2"><span aria-hidden="true" className="text-[#0F766E]">✓</span>{d}</li>)}</ul>
                    <h2 className="mt-10 text-2xl font-bold">What we don't do</h2>
                    <p className="mt-3 text-[16px] text-[#334155]">We don't sign, negotiate or give legal advice. You stay the agent of record.</p>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]">
                            <tbody>
                                <tr className="border-b border-[#E2E8F0]"><td className="p-4">First file</td><td className="p-4 font-semibold">Free</td></tr>
                                <tr className="border-b border-[#E2E8F0]"><td className="p-4">Each file after</td><td className="p-4 font-semibold">$99</td></tr>
                                <tr className="border-b border-[#E2E8F0]"><td className="p-4">5-file pack, prepaid</td><td className="p-4 font-semibold">$449</td></tr>
                                <tr><td className="p-4 text-[#4B5567]">A human TC, for comparison</td><td className="p-4 text-[#4B5567]">$350-500 a file</td></tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-3 text-[14px] text-[#4B5567]">Your card is only needed when you send file #2: "First file was free. This one is $99, charged when we open it."</p>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    <h3 className="mt-5 text-lg font-semibold">How do I send a file?</h3>
                    <p className="mt-1 text-[16px] text-[#334155]">Fill in the form above. We email you where to forward the contract, or you can upload it.</p>
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza (Adam Laboratory Inc.) / <a href="/privacy" className="underline">Privacy</a> / <a href="/terms" className="underline">Terms</a> / support@dooza.ai</p>
            </div>
        </main>
    );
}
