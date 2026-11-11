// /hospital: India hospital software test (Apollo; Sibi approved the test 2026-11-11 18:56, approves every asset before ads).
// DRAFT 2026-11-11: noindex, unlinked, not in the sitemap. Left out until Sibi: 'ABHA-ready', Razorpay link, WhatsApp number.
import HospitalForm, { WhatsAppButton } from '@/components/hospital/HospitalForm';

export const metadata = {
    title: 'Hospital Software, Built for You in 7 Days',
    description: 'OPD billing, pharmacy and reports, with bills, reminders and daily reports on WhatsApp. Fixed price, no per-booking fees. Your hospital owns its data.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/hospital' },
};

const POINTS = [
    ['Built on your own forms', 'Free demo first.'],
    ['WhatsApp-first', 'Bills, reminders and daily reports on WhatsApp.'],
    ['One-time price, low monthly', 'No per-booking fees.'],
];

export default function HospitalPage() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0F766E]">For nursing homes, 10-30 bed hospitals and clinics with 3+ doctors</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Hospital software, built for you in 7 days</h1>
                <p className="mt-4 text-lg text-[#4B5567]">OPD billing, pharmacy and reports, with bills, reminders and daily reports on WhatsApp. Fixed price, no per-booking fees. Your hospital owns its data.</p>
                <div className="mt-6 flex flex-wrap gap-3">
                    <a href="#start" className="inline-block rounded-xl bg-[#0F766E] px-6 py-4 text-lg font-semibold text-white hover:bg-[#0B5D57]">Book a free demo</a>
                    <WhatsAppButton />
                </div>

                <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                    {POINTS.map(([t, d]) => <li key={t} className="rounded-2xl border border-[#CBD5E1] bg-white p-4"><p className="font-semibold">{t}</p><p className="mt-1 text-[15px] text-[#4B5567]">{d}</p></li>)}
                </ul>

                <div className="mt-10"><HospitalForm /></div>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Screens</h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                        {['OPD billing', 'Pharmacy', 'Daily report'].map((s) => <div key={s} className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-dashed border-[#94A3B8] bg-white text-[14px] text-[#64748B]">{s} (screenshot coming)</div>)}
                    </div>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]">
                            <tbody>
                                <tr className="border-b border-[#E2E8F0]"><td className="p-4">Clinic</td><td className="p-4 font-semibold">₹39,999 one-time</td></tr>
                                <tr className="border-b border-[#E2E8F0]"><td className="p-4">Hospital</td><td className="p-4 font-semibold">₹79,999 one-time</td></tr>
                                <tr><td className="p-4">Then</td><td className="p-4 font-semibold">₹2,999/mo</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza (Adam Laboratory Inc.) / <a href="/privacy" className="underline">Privacy</a> / <a href="/terms" className="underline">Terms</a> / support@dooza.ai</p>
            </div>
        </main>
    );
}
