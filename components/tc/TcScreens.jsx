// /tc product screens v2 (Sibi 2026-11-12 21:05 'ui have to be better', Apollo spec n5axzfnm). HTML/CSS mockups of an EXAMPLE file
// (subhead says example; no client data). Real-app chrome: window bar, iMessage thread, file table, mail client.
const Window = ({ title, right, children }) => (
    <figure className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),0_24px_48px_-24px_rgba(15,23,42,0.35)]">
        <div className="flex items-center gap-2 border-b border-[#EEF2F6] bg-[#F8FAFC] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" /><span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" /><span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 truncate text-[12px] font-medium text-[#475569]">{title}</span>
            {right && <span className="ml-auto shrink-0">{right}</span>}
        </div>
        <div className="p-4">{children}</div>
    </figure>
);
const Pill = ({ tone, children }) => {
    const t = { green: 'bg-[#ECFDF5] text-[#047857] ring-[#A7F3D0]', amber: 'bg-[#FFFBEB] text-[#B45309] ring-[#FDE68A]', blue: 'bg-[#EFF6FF] text-[#1D4ED8] ring-[#BFDBFE]' }[tone];
    return <span className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1 ring-inset ${t}`}>{children}</span>;
};
const steps = (tx) => [['Executed contract', 'Nov 3', 'done'], ['Inspection', 'Nov 8', 'done'], [tx ? 'Option period ends' : 'Inspection contingency ends', 'Nov 10', 'done'], ['Appraisal', 'Mon Nov 17', 'now'], ['Financing approval', 'Nov 24', 'next'], ['Closing', 'Dec 2', 'next']];
const DOCS = [['Executed purchase contract', 'ok'], ['Earnest money receipt', 'ok'], ["Seller's disclosure", 'ok'], ['Third-party financing addendum', 'Chasing buyer lender'], ['HOA addendum', 'Requested from HOA'], ['Lead-based paint (pre-1978)', 'ok']];

export default function TcScreens({ tx = false }) {
    return (
        <section className="mt-14">
            <h2 className="text-2xl font-bold">What your file looks like with us</h2>
            <p className="mt-1 text-[15px] text-[#4B5567]">Example file: 1418 Oak Ridge Dr{tx ? ', Austin TX' : ''}.</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-2">
                <Window title="Closing tracker" right={<Pill tone="green">On track</Pill>}>
                    <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#334155]"><span className="rounded-md bg-[#F1F5F9] px-2 py-1 font-semibold">1418 Oak Ridge Dr</span><span>$485,000</span><span className="text-[#94A3B8]">·</span><span>Closes Dec 2</span></div>
                    <div className="mt-3 h-1.5 w-full rounded-full bg-[#EEF2F6]"><div className="h-1.5 w-1/2 rounded-full bg-[#10B981]" /></div>
                    <p className="mt-1 text-[11px] text-[#64748B]">3 of 6 milestones done</p>
                    <ol className="relative mt-4 space-y-3 border-l border-[#E2E8F0] pl-5">
                        {steps(tx).map(([s, d, st]) => (
                            <li key={s} className="relative">
                                <span className={`absolute -left-[27px] top-0.5 flex h-4 w-4 items-center justify-center rounded-full text-[9px] text-white ${st === 'done' ? 'bg-[#10B981]' : st === 'now' ? 'bg-white ring-4 ring-[#BFDBFE] border-2 border-[#2563EB]' : 'border-2 border-[#CBD5E1] bg-white'}`}>{st === 'done' ? '✓' : ''}</span>
                                <div className="flex items-center justify-between gap-2 text-[13px]"><span className={st === 'now' ? 'font-semibold text-[#1D4ED8]' : st === 'done' ? 'text-[#334155]' : 'text-[#64748B]'}>{s}</span><span className="text-[12px] text-[#64748B]">{d}</span></div>
                                {st === 'now' && <p className="mt-0.5 text-[12px] text-[#475569]">Appraiser visit confirmed Sat 10 AM</p>}
                            </li>))}
                    </ol>
                </Window>
                <figure className="overflow-hidden rounded-[28px] border border-[#E2E8F0] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.06),0_24px_48px_-24px_rgba(15,23,42,0.35)]">
                    <div className="flex flex-col items-center border-b border-[#EEF2F6] bg-[#F8FAFC] py-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-b from-[#94A3B8] to-[#64748B] text-[15px] font-semibold text-white">H</span>
                        <span className="mt-1 text-[12px] font-semibold text-[#0F172A]">Your TC team</span>
                        <span className="text-[11px] text-[#64748B]">Text updates</span>
                    </div>
                    <div className="space-y-2 p-4 text-[14px]">
                        <p className="text-center text-[11px] text-[#94A3B8]">Today 9:02 AM</p>
                        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#E9E9EB] px-3.5 py-2 text-[#0F172A]">Oak Ridge: appraisal Mon 11/17. Lender confirmed the appraiser for Sat 10 AM. Nothing needed from you.</div>
                        <div className="ml-auto max-w-[60%] rounded-2xl rounded-br-md bg-[#0A84FF] px-3.5 py-2 text-white">Got it, thanks!</div>
                        <div className="max-w-[85%] rounded-2xl rounded-bl-md bg-[#E9E9EB] px-3.5 py-2 text-[#0F172A]">Heads up: HOA addendum still missing. I&apos;ve asked the HOA and will update you Friday.</div>
                        <p className="pt-1 text-right text-[11px] text-[#94A3B8]">Delivered</p>
                    </div>
                </figure>
                <Window title="Documents · 1418 Oak Ridge Dr" right={<span className="text-[11px] text-[#64748B]">4 of 6 verified</span>}>
                    <table className="w-full text-[13px]">
                        <thead><tr className="border-b border-[#EEF2F6] text-left text-[11px] uppercase tracking-wide text-[#94A3B8]"><th className="pb-2 font-medium">Document</th><th className="pb-2 text-right font-medium">Status</th></tr></thead>
                        <tbody>{DOCS.map(([d, s]) => (
                            <tr key={d} className="border-b border-[#F1F5F9] last:border-0">
                                <td className="py-2.5"><span className="flex items-center gap-2 text-[#334155]"><span className="flex h-6 w-5 shrink-0 items-center justify-center rounded-sm bg-[#FEE2E2] text-[8px] font-bold text-[#B91C1C]">PDF</span>{d}</span></td>
                                <td className="py-2.5 text-right">{s === 'ok' ? <Pill tone="green">Verified</Pill> : <Pill tone="amber">{s}</Pill>}</td>
                            </tr>))}
                        </tbody>
                    </table>
                </Window>
                <Window title="Inbox">
                    <div className="space-y-1 border-b border-[#EEF2F6] pb-3 text-[12px] text-[#475569]">
                        <p><span className="text-[#94A3B8]">From</span> <span className="font-medium text-[#0F172A]">Your TC team</span> &lt;hercules@calls.dooza.org&gt;</p>
                        <p><span className="text-[#94A3B8]">To</span> You, Buyer</p>
                        <p className="pt-1 text-[14px] font-semibold text-[#0F172A]">1418 Oak Ridge Dr: week 2 closing update</p>
                        <p className="text-[11px] text-[#94A3B8]">Fri Nov 14, 4:00 PM</p>
                    </div>
                    <div className="mt-3 divide-y divide-[#F1F5F9] rounded-xl border border-[#EEF2F6] text-[13px]">
                        <div className="flex gap-3 p-3"><Pill tone="green">Done</Pill><span className="text-[#334155]">Earnest money receipted · Inspection complete · {tx ? 'Option period ended' : 'Inspection contingency ended'}</span></div>
                        <div className="flex gap-3 p-3"><Pill tone="blue">Up next</Pill><span className="text-[#334155]">Appraisal Mon 11/17 · Title commitment by Wed 11/19</span></div>
                        <div className="flex gap-3 p-3"><Pill tone="green">From you</Pill><span className="text-[#334155]">Nothing needed. Enjoy your weekend.</span></div>
                    </div>
                </Window>
            </div>
        </section>
    );
}
