// Sample product screens for /hospital (Apollo 21:10, Sibi 21:08). HTML/CSS mockups, made-up names and amounts, labelled.
const Card = ({ title, children }) => (
    <figure className="rounded-2xl border border-[#CBD5E1] bg-white p-4 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.5)]">
        <figcaption className="mb-3 flex items-center justify-between"><span className="font-semibold text-[#14213D]">{title}</span><span className="rounded-full bg-[#F1F5F9] px-2 py-0.5 text-[11px] text-[#64748B]">Sample screen</span></figcaption>
        {children}
    </figure>
);
const Row = ({ l, r, b }) => <div className={`flex justify-between py-1 text-[13px] ${b ? 'border-t border-[#E2E8F0] font-semibold text-[#14213D]' : 'text-[#334155]'}`}><span>{l}</span><span>{r}</span></div>;
export default function HospitalScreens() {
    return (
        <section className="mt-14">
            <h2 className="text-2xl font-bold">What you get</h2>
            <p className="mt-1 text-[14px] text-[#64748B]">Sample screens with made-up patients and amounts.</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Card title="OPD bill · Sample Clinic, Coimbatore">
                    <p className="text-[12px] text-[#64748B]">Bill OP-24117 · 11 Nov 2026 · Patient: Sample Patient A · GSTIN 33ABCDE1234F1Z5</p>
                    <div className="mt-2"><Row l="Consultation (Dr. Sample)" r="₹500" /><Row l="CBC blood test" r="₹350" /><Row l="Paracetamol 650 x10" r="₹30" /><Row l="Pantoprazole 40 x10" r="₹110" /><Row l="GST on medicines (12%)" r="₹16.80" /><Row l="Total" r="₹1,006.80" b /></div>
                </Card>
                <Card title="IPD discharge bill · Ward B, Bed 7">
                    <p className="text-[12px] text-[#64748B]">IP-0932 · Admitted 6 Nov · Discharged 10 Nov · Sample Patient B</p>
                    <div className="mt-2"><Row l="Room, general ward (4 days x ₹1,500)" r="₹6,000" /><Row l="Medicines and consumables" r="₹4,820" /><Row l="Procedure: appendectomy" r="₹18,000" /><Row l="Doctor visits (8)" r="₹2,400" /><Row l="Less advance paid" r="−₹10,000" /><Row l="Balance due" r="₹21,220" b /></div>
                </Card>
                <Card title="WhatsApp to the patient">
                    <div className="space-y-2 rounded-xl bg-[#E7F3E8] p-3 text-[13px]">
                        <div className="max-w-[85%] rounded-lg bg-white p-2 text-[#14213D] shadow-sm">Vanakkam! Your bill OP-24117 for ₹1,006.80 is attached. Thank you for visiting Sample Clinic. 📄 bill.pdf<p className="mt-1 text-right text-[10px] text-[#64748B]">10:42 AM ✓✓</p></div>
                        <div className="max-w-[85%] rounded-lg bg-white p-2 text-[#14213D] shadow-sm">Reminder: follow-up with Dr. Sample tomorrow, 12 Nov, 5:30 PM. Reply 1 to confirm, 2 to reschedule.<p className="mt-1 text-right text-[10px] text-[#64748B]">6:00 PM ✓✓</p></div>
                        <div className="ml-auto max-w-[40%] rounded-lg bg-[#D9FDD3] p-2 text-[#14213D] shadow-sm">1<p className="mt-1 text-right text-[10px] text-[#64748B]">6:04 PM</p></div>
                    </div>
                </Card>
                <Card title="Daily report on your WhatsApp, 9 PM">
                    <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="rounded-xl bg-[#F1F5F9] p-2"><p className="text-[20px] font-bold text-[#14213D]">64</p><p className="text-[11px] text-[#64748B]">OPD patients</p></div>
                        <div className="rounded-xl bg-[#F1F5F9] p-2"><p className="text-[20px] font-bold text-[#14213D]">9</p><p className="text-[11px] text-[#64748B]">IPD beds used</p></div>
                        <div className="rounded-xl bg-[#F1F5F9] p-2"><p className="text-[20px] font-bold text-[#14213D]">₹48,350</p><p className="text-[11px] text-[#64748B]">Collections</p></div>
                    </div>
                    <div className="mt-3 rounded-xl bg-[#FEE2E2] p-2 text-[13px] text-[#991B1B]"><p className="font-semibold">Pharmacy stock low</p><p>Amoxicillin 500: 18 left · Insulin glargine: 4 left · ORS: 22 left</p></div>
                </Card>
            </div>
        </section>
    );
}
