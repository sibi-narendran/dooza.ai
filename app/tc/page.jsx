// /tc: $99 transaction coordinator for US realtors (US-wide Sibi 11-13 20:28 via Apollo; /tc/texas keeps Texas copy via tx prop) (Apollo's Google Ads test). Copy v4 2026-11-11 20:0x from
// /home/apollo/learned/knowledge/sources/2026-11-11-landing-copy-research.md + Apollo's CONFIRM answers (Sibi 19:01/19:51).
// DRAFT: noindex, unlinked, not in the sitemap; no ads until Sibi says yes. No reviews or logos until real.
import TcForm from '@/components/tc/TcForm';
import TcCta from '@/components/tc/TcCta';

import TcScreens from '@/components/tc/TcScreens';

export const metadata = {
    title: 'Transaction Coordinator for Realtors, $99 a File',
    description: 'Contract to close, every deadline tracked and every step checked by a person. First file free. No card, no contract, no subscription.',
    robots: { index: false, follow: false },
    alternates: { canonical: 'https://www.dooza.ai/tc' },
};

const BULLETS = [
    'No more "did the earnest money go in?" We track every deadline from contract to funding.',
    'We chase the lender, title and signatures so you don\'t.',
    'Weekly status to you and your client, no surprises.',
    '$99 a file. Most TCs charge $300-500 a file.',
    'Pay per file only. Skip a month, pay nothing.',
];
const FAQ = [
    ['Is a real person checking my file?', "Yes. Sibi Narendran, Dooza's founder, checks your timeline against the signed contract within 1 business day, before anything goes to your lender, title or client. Software then tracks every date."],
    ['How fast do you answer?', 'The same business day, US hours. Text (737) 390-1099 or reply to any email and Sibi answers that day. Prefer to talk? Call that number or book a call; if we miss you, we call back the same business day.'],
    ['What does it cost?', 'First file free, no card. Then $99 a file, or $449 for a 5-file pack. No subscription, no contract.'],
    ['When do you charge me?', 'Only when we open your second file, and we tell you first. Skip a month, pay nothing.'],
    ['How do I send a file?', 'Fill the form with your name, email and closing date. Send the contract now or later; we reply with where to forward it.'],
    ['What exactly do you handle?', 'Contract to close: the timeline, every deadline, earnest money, inspection, appraisal, financing, title, HOA and closing. We email the lender, title and your client, and send you weekly status.'],
    ['What if a deadline is missed?', 'You get a reminder before every date, and Sibi checks the timeline on day 1, so nothing gets missed. If something slips on the other side, we tell you the same day.'],
    ["Do you work in Dotloop, SkySlope or my broker's system?", 'Yes. Add us to your file, or just email the PDFs.'],
    ['Do you take rush files?', 'Yes. Put the closing date in the form and we start right away.'],
    ['Which states?', "All 50 US states. We work from your contract and your state's forms."],
    ['Listing-only files?', 'Yes. Tell us in the form and we track your listing dates and paperwork too.'],
    ["Who sees my client's data?", 'Only the documents you send, used only for your file. Encrypted, and deleted when you ask.'],
    ["Will my clients know you're not in my office?", 'We send updates in your name or as "your TC team", your choice. You stay agent of record.'],
    ["What don't you do?", "We don't sign, negotiate or give legal advice. That stays with you and your broker."],
];
const PERSON = { name: 'Sibi Narendran', role: 'Founder, Dooza', photo: '/founder-sibi.jpeg' };
const ck = <span aria-hidden="true" className="mt-[3px] text-[#0F766E]">✓</span>;
const TOP_BULLETS = [
    'Every deadline tracked, contract to funding. Reminders before each date.',
    'We chase the lender, title and signatures. Weekly status to you and your client.',
    'First file free. Then $99 a file. Most TCs charge $300-500.',
];

export default function TcPage({ h1 = 'Transaction Coordinator for Realtors. $99 a File.', tx = false }) {
    const faq = tx ? FAQ.map(([q, a]) => (q === 'Which states?' ? ['Do you work with TREC and TXR forms?', 'Yes. We work on TREC forms (1-4 Family Resale) and TXR forms, and in all 50 US states.'] : [q, a])) : FAQ;
    const Q = ([q, a], open) => (
        <details key={q} open={open} className="group border-b border-[#E2E8F0]">
            <summary className="flex min-h-[52px] cursor-pointer list-none items-center justify-between gap-4 py-3 text-[17px] font-semibold"><span>{q}</span><span aria-hidden="true" className="text-xl text-[#0F766E] transition group-open:rotate-45">+</span></summary>
            <p className="pb-4 pr-8 text-[16px] leading-relaxed text-[#334155]">{a}</p>
        </details>
    );
    return (
        <main className="min-h-screen bg-white pb-24 text-[#14213D] sm:pb-0">
            <TcCta sticky />
            <section className="bg-[#EEF3F1]">
                <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 sm:py-14 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    <div>
                        <h1 className="text-[34px] font-bold leading-[1.1] tracking-tight sm:text-5xl">{h1}</h1>
                        <p className="mt-4 text-[18px] leading-relaxed text-[#4B5567]">Contract to close for {tx ? 'Texas agents' : 'agents in every US state'}. A person checks every file; software tracks every date. No card, no contract.</p>
                        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white p-3 shadow-[0_1px_2px_rgba(15,23,42,0.06)]">
                            <img src={PERSON.photo} alt={PERSON.name} width="56" height="56" className="h-14 w-14 shrink-0 rounded-full object-cover" />
                            <p className="text-[15px] leading-snug text-[#334155]"><strong className="text-[#14213D]">{PERSON.name}</strong>, {PERSON.role}, checks your timeline against the signed contract within 1 business day and answers you the same day.</p>
                        </div>
                        <ul className="mt-5 hidden space-y-2 text-[16px] text-[#334155] lg:block">{TOP_BULLETS.map((d) => <li key={d} className="flex gap-2">{ck}<span>{d}</span></li>)}</ul>
                        {tx && <p className="mt-3 hidden text-[15px] text-[#334155] lg:block">Works on TREC forms (1-4 Family Resale). Rush files OK.</p>}
                    </div>
                    <div><TcForm /><div id="book" className="scroll-mt-4"><TcCta /></div></div>
                </div>
            </section>

            <div className="mx-auto max-w-6xl px-4">
                <ul className="mt-8 space-y-2 text-[16px] text-[#334155] lg:hidden">{TOP_BULLETS.map((d) => <li key={d} className="flex gap-2">{ck}<span>{d}</span></li>)}{tx && <li className="flex gap-2">{ck}<span>Works on TREC forms (1-4 Family Resale). Rush files OK.</span></li>}</ul>

                <div id="example" className="scroll-mt-4"><TcScreens tx={tx} /></div>

                <section id="pricing" className="mt-16 scroll-mt-4">
                    <h2 className="text-3xl font-bold tracking-tight">Price</h2>
                    <div className="mt-6 grid gap-3 sm:grid-cols-3">
                        {[['First file', 'Free', 'No card'], ['Each file after', '$99', 'Pay per file, skip a month, pay nothing'], ['5-file pack', '$449', 'Prepaid, $89.80 a file']].map(([a, b, c], i) => (
                            <div key={a} className={`rounded-2xl border p-5 ${i === 0 ? 'border-[#0F766E] bg-[#EEF3F1]' : 'border-[#E2E8F0]'}`}><p className="text-[15px] text-[#4B5567]">{a}</p><p className="mt-1 text-4xl font-bold">{b}</p><p className="mt-2 text-[14px] text-[#4B5567]">{c}</p></div>
                        ))}
                    </div>
                    <p className="mt-4 text-[15px] text-[#4B5567]">Most TCs charge $300-500 a file. The checklist: earnest money, {tx ? 'option period' : 'contingency deadlines'}, inspection, appraisal, financing, title, HOA, closing.</p>
                </section>

                <section id="faq" className="mt-16 scroll-mt-4">
                    <h2 className="text-3xl font-bold tracking-tight">Questions</h2>
                    <div className="mt-4 grid gap-x-12 lg:grid-cols-2">
                        <div>{faq.slice(0, Math.ceil(faq.length / 2)).map((x, i) => Q(x, i < 2))}</div>
                        <div>{faq.slice(Math.ceil(faq.length / 2)).map((x, i) => Q(x, false))}</div>
                    </div>
                </section>

                <section className="mt-16 rounded-3xl bg-[#14213D] p-6 text-white sm:p-10">
                    <p className="text-2xl font-bold sm:text-3xl">Send your next file. The first one is free.</p>
                    <div className="mt-5 flex flex-wrap gap-3">
                        <a href="#start" className="flex min-h-[48px] items-center rounded-xl bg-[#F2B53A] px-6 font-semibold text-[#14213D]">Start my free file</a>
                        <a href="tel:+17373901099" className="flex min-h-[48px] items-center rounded-xl border border-white/40 px-6 font-semibold">Call (737) 390-1099</a>
                    </div>
                </section>

                <p className="mt-10 pb-6 text-[13px] text-[#64748B]">Dooza is a brand of Adam Laboratory Inc., 1111b S Governors Ave Ste 34259, Dover, DE 19904. <a href="mailto:support@dooza.ai" className="inline-block py-3 underline">support@dooza.ai</a> · <a href="/privacy" className="inline-block py-3 underline">Privacy</a> · <a href="/terms" className="inline-block py-3 underline">Terms</a></p>
            </div>
        </main>
    );
}
