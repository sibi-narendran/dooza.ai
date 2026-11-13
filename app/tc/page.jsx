// /tc: $99 transaction coordinator for US realtors (US-wide Sibi 11-13 20:28 via Apollo; /tc/texas keeps Texas copy via tx prop) (Apollo's Google Ads test). Copy v4 2026-11-11 20:0x from
// /home/apollo/learned/knowledge/sources/2026-11-11-landing-copy-research.md + Apollo's CONFIRM answers (Sibi 19:01/19:51).
// DRAFT: noindex, unlinked, not in the sitemap; no ads until Sibi says yes. No reviews or logos until real.
import TcForm from '@/components/tc/TcForm';

import TcScreens from '@/components/tc/TcScreens';

export const metadata = {
    title: 'Transaction Coordinator for Realtors, $99 a File',
    description: 'Contract to close, software builds your timeline and reminds you before every deadline. First file free. No card, no contract, no subscription.',
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
const FEARS = [
    ['What if a deadline gets missed?', 'Software builds your timeline and sends reminders before every deadline, not after. Reply to any email and we answer within 1 business day.'],
    ['Who sees my client\'s data?', 'Only the contract documents you send, used only for your file. We keep your files encrypted and delete them on request.'],
    ['Is it software or a person?', 'AI-run: software builds your timeline and sends reminders before every deadline. Human review on request. Reply to any email and we answer within 1 business day. We never sign, negotiate or give legal advice; you stay agent of record.'],
];
const FAQ = [
    ['How do I send a file?', 'Fill the form; we reply with where to forward the contract.'],
    ['What does a file cost?', 'First file free, then $99. 5-file pack $449 prepaid.'],
    ['When do you charge?', 'Only when we open file #2, and we tell you first.'],
    ['Which states do you cover?', 'All US states. We work from the contract and forms you send.'],
    ['Can you take rush files?', 'Yes. Tell us the closing date in the form.'],
    ['Listing-only files?', 'Not yet. We take transaction files, contract to close.'],
    ['What do you not do?', 'Sign, negotiate or give legal advice.'],
];
const PERSON = { name: 'Sibi Narendran', role: 'Founder, Dooza', photo: '/founder-sibi.jpeg' };
const Person = () => PERSON ? <div className="mt-4 flex items-center gap-3"><img src={PERSON.photo} alt={PERSON.name} width="48" height="48" className="h-12 w-12 rounded-full object-cover" /><p className="text-[15px] text-[#334155]"><strong>{PERSON.name}</strong>, {PERSON.role}</p></div> : null;
const ck = <span aria-hidden="true" className="text-[#0F766E]">✓</span>;

export default function TcPage({ h1 = 'Transaction Coordinator for Realtors. $99 a File.', tx = false }) {
    return (
        <main className="min-h-screen bg-[#F7F5F0] text-[#14213D]">
            <div className="mx-auto max-w-3xl px-4 py-10 sm:py-16">
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">{h1}</h1>
                <p className="mt-4 text-lg text-[#4B5567]">Contract to close, software builds your timeline and reminds you before every deadline. Your first file is free. No card, no contract, no subscription.</p>
                <ul className="mt-6 space-y-2 text-[16px] text-[#334155]">{(tx ? BULLETS.map((d) => d.replace('from contract to funding', 'from option period to funding')) : BULLETS).map((d) => <li key={d} className="flex gap-2">{ck}{d}</li>)}</ul>

                <div className="mt-8"><TcForm /></div>
                <ul className="mt-3 space-y-1 text-[14px] text-[#334155]"><li>AI-run. Human review on request. Email answers within 1 business day.</li><li>{tx ? 'Works on TREC forms (1-4 Family Resale). Rush files OK.' : 'Any state, rush files OK.'}</li><li>Only the docs you send, encrypted, deleted on request.</li></ul>
                <p className="mt-3 text-[14px] text-[#334155]"><strong>First file free.</strong> No card until file #2. No contract. Cancel by not sending another file.</p>
                <Person />

                <section className="mt-8 grid gap-3 sm:grid-cols-3">
                    {FEARS.map(([q, a]) => <div key={q} className="rounded-2xl border border-[#CBD5E1] bg-white p-4"><p className="font-semibold">{q}</p><p className="mt-1 text-[15px] text-[#4B5567]">{a}</p></div>)}
                </section>

                <TcScreens tx={tx} />

                <section className="mt-14">
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

                <section className="mt-14">
                    <h2 className="text-2xl font-bold">Questions</h2>
                    {(tx ? FAQ.map(([q, a]) => (q === 'Which states do you cover?' ? ['Do you work with TREC and TXR forms?', 'Yes.'] : [q, a])) : FAQ).map(([q, a]) => <div key={q}><h3 className="mt-5 text-lg font-semibold">{q}</h3><p className="mt-1 text-[16px] text-[#334155]">{a}</p></div>)}
                </section>

                <p className="mt-16 text-[13px] text-[#64748B]">Dooza is a brand of Adam Laboratory Inc. · 1111b S Governors Ave Ste 34259, Dover, DE 19904 · <a href="mailto:support@dooza.ai" className="underline">support@dooza.ai</a> · <a href="/privacy" className="underline">Privacy</a> · <a href="/terms" className="underline">Terms</a></p>
            </div>
        </main>
    );
}
