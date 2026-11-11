// Sample product screens for /tc (Apollo 21:10, Sibi 21:08 'try to create screenshots'). HTML/CSS mockups, fake data, labelled.
const Card = ({ title, children }) => (
    <figure className="rounded-2xl border border-[#CBD5E1] bg-white p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
        <figcaption className="mb-3 flex items-center justify-between"><span className="font-semibold text-[#14213D]">{title}</span><span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[11px] text-[#64748B]">Sample screen</span></figcaption>
        {children}
    </figure>
);
const STEPS = [['Executed contract', 'Nov 3', 1], ['Option period ends', 'Nov 10', 1], ['Inspection', 'Nov 8', 1], ['Appraisal', 'Nov 17', 0], ['Financing approval', 'Nov 24', 0], ['Closing', 'Dec 2', 0]];
const DOCS = [['Executed TREC 1-4 contract', 1], ['Earnest money receipt', 1], ["Seller's disclosure", 1], ['Third-party financing addendum', 0], ['HOA addendum', 0], ['Lead-based paint (pre-1978)', 1]];
export default function TcScreens() {
    return (
        <section className="mt-14">
            <h2 className="text-2xl font-bold">What you see</h2>
            <p className="mt-1 text-[14px] text-[#64748B]">Sample screens with made-up data.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
                <Card title="File timeline · 1418 Oak Ridge Dr">
                    <ol className="space-y-2 text-[13px]">{STEPS.map(([s, d, ok]) => (
                        <li key={s} className="flex items-center gap-2"><span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] text-white ${ok ? 'bg-[#16A34A]' : 'bg-[#CBD5E1]'}`}>{ok ? '✓' : ''}</span><span className="flex-1 text-[#334155]">{s}</span><span className="text-[#64748B]">{d}</span></li>))}
                    </ol>
                </Card>
                <Card title="Alert to you">
                    <div className="rounded-xl bg-[#FEF3C7] p-3 text-[13px] text-[#78350F]"><p className="font-semibold">⏰ Deadline in 2 days</p><p className="mt-1">Appraisal due Mon Nov 17 for 1418 Oak Ridge Dr. Lender confirmed the appraiser visit for Sat 10am. Nothing needed from you yet.</p></div>
                    <div className="mt-3 rounded-xl bg-[#F1F5F9] p-3 text-[13px] text-[#334155]"><p className="text-[11px] text-[#64748B]">SMS · 9:02 AM</p><p className="mt-1">Oak Ridge: appraisal Mon 11/17. Lender on track. Reply STATUS for the full file.</p></div>
                </Card>
                <Card title="Document checklist">
                    <ul className="space-y-2 text-[13px]">{DOCS.map(([d, ok]) => (
                        <li key={d} className="flex items-center gap-2"><span className={ok ? 'text-[#16A34A]' : 'text-[#DC2626]'}>{ok ? '✓' : '!'}</span><span className={`flex-1 ${ok ? 'text-[#334155]' : 'font-semibold text-[#B91C1C]'}`}>{d}</span>{!ok && <span className="rounded bg-[#FEE2E2] px-1.5 text-[11px] text-[#B91C1C]">Missing</span>}</li>))}
                    </ul>
                </Card>
            </div>
        </section>
    );
}
