// /hospital: India hospital software test (Apollo; Sibi approved 18:56, approves every asset). Copy v2 2026-11-11 20:0x from
// /home/apollo/learned/knowledge/sources/2026-11-11-landing-copy-research.md + Apollo's CONFIRM answers (Sibi 19:01/19:51).
// DRAFT: noindex, unlinked, not in the sitemap. Left out: ABHA/NHA, Razorpay. Screenshot placeholders dropped (Apollo 19:53).
import HospitalForm, { WhatsAppButton, BookButton } from '@/components/hospital/HospitalForm';

import HospitalScreens from '@/components/hospital/HospitalScreens';

export const metadata = {
    title: 'Hospital Software for Your Nursing Home, Live in 7 Days',
    description: 'OPD and IPD admission/discharge billing, pharmacy and daily reports, with bills and reminders on WhatsApp. From ₹39,999 one-time. No per-patient fees. You own your data.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/hospital' },
};

const BULLETS = [
    'OPD + IPD admission/discharge billing, with GST bills.',
    'Bills and daily collection report land on your WhatsApp.',
    'Built on your bill and prescription formats, not a template.',
    'Pharmacy stock and OPD billing in one place.',
    'Clinic ₹39,999 / Hospital ₹79,999 once, then ₹2,999/mo. No per-patient or per-bill charges.',
    'Live in 7 days.',
];
const FEARS = [
    ['Will I be stuck with the vendor?', 'No. You own your data. Export it to Excel/CSV any time; it is yours to keep.'],
    ['Will staff cope? Will OPD be disrupted?', 'We build on your existing forms and show you a demo first. Free staff training at go-live, and WhatsApp support with same-day replies.'],
    ['Hidden costs?', 'None. One-time price + ₹2,999/mo, which covers hosting, daily backups, support and updates. No per-patient fees.'],
];
const FAQ = [
    ['What does the monthly ₹2,999 cover?', 'Hosting, daily backups, support and updates.'],
    ['Where is our data stored?', 'Set up on Indian servers at go-live.'],
    ['Can it handle 10-30 beds?', 'Yes. IPD admission/discharge billing is built in for your beds, alongside OPD and pharmacy.'],
    ['Does WhatsApp use the official API?', 'Yes. We connect the official WhatsApp Business API.'],
    ['What if I leave?', 'You keep your data. Export everything to Excel/CSV.'],
    ['Who builds it?', 'Dooza, founded by Sibi Narendran. You talk to the team building your software, not a reseller.'],
];
const PERSON = { name: 'Sibi Narendran', role: 'Founder, Dooza', photo: '/founder-sibi.jpeg' };
const Person = () => PERSON ? <div className="mt-4 flex items-center gap-3"><img src={PERSON.photo} alt={PERSON.name} width="48" height="48" className="h-12 w-12 rounded-full object-cover" /><p className="text-[15px] text-[#334155]"><strong>{PERSON.name}</strong>, {PERSON.role}</p></div> : null;
const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;

export default function HospitalPage() {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <p className="text-sm font-semibold uppercase tracking-wide text-[#0F766E]">For nursing homes, 10-30 bed hospitals and clinics with 3+ doctors</p>
                <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">Hospital Software Built for Your Nursing Home. Live in 7 Days.</h1>
                <p className="mt-4 text-lg text-[#4B5567]">OPD and IPD admission/discharge billing, pharmacy and daily reports, with bills and reminders on WhatsApp. From ₹39,999 one-time. No per-patient fees. You own your data.</p>
                <ul className="mt-6 space-y-2 text-[16px] text-[#334155]">{BULLETS.map((d) => <li key={d} className="flex gap-2">{ck}{d}</li>)}</ul>

                <div className="mt-8"><HospitalForm /></div>
                <p className="mt-3 text-[14px] text-[#334155]"><strong>Free demo on your own forms</strong> before you pay anything. Excel/CSV export any time, yours to keep.</p>
                <Person />
                <div className="mt-3 flex flex-wrap items-center gap-3 text-[15px] text-[#4B5567]"><span>Prefer to pick a time or chat?</span><BookButton /><WhatsAppButton /><span>Built and supported by the Dooza team. WhatsApp: <a href="https://wa.me/918344242526" className="underline">+91 83442 42526</a></span></div>

                <section className="mt-8 grid gap-3 sm:grid-cols-3">
                    {FEARS.map(([q, a]) => <div key={q} className="rounded-2xl border border-[#CBD5E1] bg-white p-4"><p className="font-semibold">{q}</p><p className="mt-1 text-[15px] text-[#4B5567]">{a}</p></div>)}
                </section>

                <HospitalScreens />

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]"><tbody>
                            <tr className="border-b border-[#E2E8F0]"><td className="p-4">Clinic</td><td className="p-4 font-semibold">₹39,999 one-time</td></tr>
                            <tr className="border-b border-[#E2E8F0]"><td className="p-4">Hospital (10-30 beds)</td><td className="p-4 font-semibold">₹79,999 one-time</td></tr>
                            <tr><td className="p-4">Then</td><td className="p-4 font-semibold">₹2,999/mo</td></tr>
                        </tbody></table>
                    </div>
                </section>

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    {FAQ.map(([q, a]) => <div key={q}><h3 className="mt-5 text-lg font-semibold">{q}</h3><p className="mt-1 text-[16px] text-[#334155]">{a}</p></div>)}
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza is a brand of Adam Laboratory Inc. · 1111b S Governors Ave Ste 34259, Dover, DE 19904 · <a href="mailto:support@dooza.ai" className="underline">support@dooza.ai</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/terms" className="underline">Terms</a></p>
            </div>
        </main>
    );
}
