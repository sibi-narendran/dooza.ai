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
const PERSON = { name: 'Sibi Narendran', role: 'Founder, Dooza · the person on your file', photo: '/founder-sibi.jpeg' };
const Person = () => PERSON ? <div className="mt-4 flex items-center gap-3"><img src={PERSON.photo} alt={PERSON.name} width="48" height="48" className="h-12 w-12 rounded-full object-cover" /><p className="text-[15px] text-[#334155]"><strong>{PERSON.name}</strong>, {PERSON.role}<br />Sibi reviews your file&apos;s timeline against the signed contract within 1 business day, and answers you the same business day. Software sends reminders before every deadline.</p></div> : null;
const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;

export default function TcPage({ h1 = 'Transaction Coordinator for Realtors. $99 a File.', tx = false }) {
    return (
        <main className="min-h-screen bg-[#F7F5F0] pb-20 text-[#14213D] sm:pb-0">
            <TcCta sticky />
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{h1}</h1>
                <p className="mt-4 text-lg text-[#4B5567]">Contract to close, every deadline tracked and every step checked by a person. Your first file is free. No card, no contract, no subscription.</p>
                <TcCta />
                <ul className="mt-6 space-y-2 text-[16px] text-[#334155]">{(tx ? BULLETS.map((d) => d.replace('from contract to funding', 'from option period to funding')) : BULLETS).map((d) => <li key={d} className="flex gap-2">{ck}{d}</li>)}</ul>

                <div className="mt-8"><TcForm /></div>
                <div id="book" className="scroll-mt-4"><TcCta /></div>
                <ul className="mt-3 space-y-1 text-[14px] text-[#334155]"><li>A person checks every file. Same-day answers.</li><li>{tx ? 'Works on TREC forms (1-4 Family Resale). Rush files OK.' : 'Any state, rush files OK.'}</li><li>Only the docs you send, encrypted, deleted on request.</li></ul>
                <p className="mt-3 text-[14px] text-[#334155]"><strong>First file free.</strong> No card until file #2. No contract. Cancel by not sending another file.</p>
                <Person />


                <div id="example" className="scroll-mt-4"><TcScreens tx={tx} /></div>

                <section id="pricing" className="mt-14 scroll-mt-4">
                    <h2 className="text-2xl font-bold">Price</h2>
                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white">
                        <table className="w-full text-left text-[16px]"><tbody>
                            <tr className="border-b border-[#E2E8F0]"><td className="p-4">First file</td><td className="p-4 font-semibold">Free</td></tr>
                            <tr className="border-b border-[#E2E8F0]"><td className="p-4">Each file after</td><td className="p-4 font-semibold">$99</td></tr>
                            <tr className="border-b border-[#E2E8F0]"><td className="p-4">5-file pack, prepaid</td><td className="p-4 font-semibold">$449</td></tr>
                            <tr><td className="p-4 text-[#4B5567]">Most TCs, for comparison</td><td className="p-4 text-[#4B5567]">$300-500 a file</td></tr>
                        </tbody></table>
                    </div>
                    <p className="mt-3 text-[15px] text-[#334155]">The checklist: earnest money, {tx ? 'option period' : 'contingency deadlines'}, inspection, appraisal, financing, title, HOA, closing.</p>
                </section>

                <section id="faq" className="mt-14 scroll-mt-4">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {(tx ? FAQ.map(([q, a]) => (q === 'Which states?' ? ['Do you work with TREC and TXR forms?', 'Yes. We work on TREC forms (1-4 Family Resale) and TXR forms, and in all 50 US states.'] : [q, a])) : FAQ).map(([q, a], i) => (
                            <details key={q} open={i < 3} className="group self-start rounded-2xl border border-[#CBD5E1] bg-white p-4">
                                <summary className="flex cursor-pointer list-none items-start justify-between gap-3 font-semibold"><span>{q}</span><span aria-hidden="true" className="text-[#0F766E] transition group-open:rotate-45">+</span></summary>
                                <p className="mt-2 text-[15px] leading-relaxed text-[#334155]">{a}</p>
                            </details>
                        ))}
                    </div>
                    <TcCta />
                    <a href="#start" className="mt-3 block rounded-xl bg-[#14213D] px-4 py-3 text-center font-semibold text-white">Start my free file</a>
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza is a brand of Adam Laboratory Inc. · 1111b S Governors Ave Ste 34259, Dover, DE 19904 · <a href="mailto:support@dooza.ai" className="underline">support@dooza.ai</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/terms" className="underline">Terms</a></p>
            </div>
        </main>
    );
}
