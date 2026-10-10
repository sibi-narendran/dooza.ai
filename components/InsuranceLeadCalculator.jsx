'use client';

import { useState } from 'react';
import { leadEconomics, requiredCloseMultiple } from '@/lib/insuranceLeadMath';
import { useBookingModal } from '@/components/BookingModalProvider';

const fmt = (n) => (n === null || !isFinite(n) ? '–' : `${n < 0 ? '-' : ''}$${Math.abs(n).toLocaleString('en-US', { maximumFractionDigits: n % 1 && Math.abs(n) < 100 ? 2 : 0 })}`);
const pct = (n) => (n === null || !isFinite(n) ? '–' : `${n.toLocaleString('en-US', { maximumFractionDigits: 1 })}%`);
const num = (v, max) => Math.max(0, Math.min(max, Number(v) || 0));

function Field({ id, label, value, onChange, step, max, hint }) {
    return (
        <label htmlFor={id} className="block">
            <span className="block text-sm font-semibold text-slate-800">{label}</span>
            <input
                id={id}
                type="number"
                inputMode="decimal"
                min={0}
                max={max}
                step={step}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-lg text-slate-900 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200"
            />
            {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
        </label>
    );
}

export default function InsuranceLeadCalculator({ defaults }) {
    const [sharedCost, setSharedCost] = useState(String(defaults.sharedCost));
    const [sharedClose, setSharedClose] = useState(String(defaults.sharedClose));
    const [exclusiveCost, setExclusiveCost] = useState(String(defaults.exclusiveCost));
    const [exclusiveClose, setExclusiveClose] = useState(String(defaults.exclusiveClose));
    const [commission, setCommission] = useState(String(defaults.commission));
    const { openModal } = useBookingModal();

    const c = num(commission, 100000);
    const shared = leadEconomics({ costPerLead: num(sharedCost, 10000), closeRate: num(sharedClose, 100), commission: c });
    const exclusive = leadEconomics({ costPerLead: num(exclusiveCost, 10000), closeRate: num(exclusiveClose, 100), commission: c });
    const multiple = requiredCloseMultiple(num(sharedCost, 10000), num(exclusiveCost, 10000));
    const both = shared.costPerPolicy !== null && exclusive.costPerPolicy !== null;
    const winner = both ? (exclusive.costPerPolicy < shared.costPerPolicy ? 'Exclusive' : exclusive.costPerPolicy > shared.costPerPolicy ? 'Shared' : null) : null;

    const rows = [
        ['Cost per sold policy', fmt(shared.costPerPolicy), fmt(exclusive.costPerPolicy)],
        ['Profit per lead (first-year commission minus lead cost)', fmt(shared.profitPerLead), fmt(exclusive.profitPerLead)],
        ['Profit per 100 leads', fmt(shared.profitPer100), fmt(exclusive.profitPer100)],
        ['Break-even close rate', pct(shared.breakEvenCloseRate), pct(exclusive.breakEvenCloseRate)],
    ];

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-6 sm:grid-cols-2">
                <fieldset className="space-y-4 rounded-2xl border border-slate-200 p-4">
                    <legend className="px-1 text-sm font-bold uppercase tracking-wide text-slate-600">Shared lead</legend>
                    <Field id="shared-cost" label="Price per lead ($)" value={sharedCost} onChange={setSharedCost} step={1} max={10000} />
                    <Field id="shared-close" label="Close rate (%)" value={sharedClose} onChange={setSharedClose} step={0.5} max={100} hint="Leads that become a sold policy" />
                </fieldset>
                <fieldset className="space-y-4 rounded-2xl border border-slate-200 p-4">
                    <legend className="px-1 text-sm font-bold uppercase tracking-wide text-slate-600">Exclusive lead</legend>
                    <Field id="exclusive-cost" label="Price per lead ($)" value={exclusiveCost} onChange={setExclusiveCost} step={1} max={10000} />
                    <Field id="exclusive-close" label="Close rate (%)" value={exclusiveClose} onChange={setExclusiveClose} step={0.5} max={100} hint="Use your own numbers from your CRM" />
                </fieldset>
            </div>
            <div className="mt-4 max-w-sm">
                <Field id="commission" label="First-year commission per policy ($)" value={commission} onChange={setCommission} step={10} max={100000} hint="What you keep after any split with your agency or upline" />
            </div>

            <p className="mt-6 rounded-2xl bg-primary-50 px-5 py-4 text-slate-800">
                {winner ? (
                    <>
                        <strong>{winner} leads are cheaper per sold policy</strong> at these numbers: {fmt(winner === 'Exclusive' ? exclusive.costPerPolicy : shared.costPerPolicy)} vs{' '}
                        {fmt(winner === 'Exclusive' ? shared.costPerPolicy : exclusive.costPerPolicy)}.{' '}
                    </>
                ) : both ? (
                    <><strong>Both cost the same per sold policy</strong> at these numbers. </>
                ) : (
                    <>Enter a close rate above 0% for both lead types. </>
                )}
                {multiple !== null && (
                    <>Exclusive leads at this price need to close at least <strong>{multiple.toLocaleString('en-US', { maximumFractionDigits: 2 })}×</strong> as often as shared leads to break even with them.</>
                )}
            </p>

            <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[420px] text-left text-sm">
                    <thead>
                        <tr className="border-b border-slate-200 text-slate-600">
                            <th className="py-2 pr-4 font-semibold"></th>
                            <th className="py-2 pr-4 font-semibold">Shared</th>
                            <th className="py-2 font-semibold">Exclusive</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(([label, s, e]) => (
                            <tr key={label} className="border-b border-slate-100">
                                <td className="py-2 pr-4 text-slate-700">{label}</td>
                                <td className="py-2 pr-4 font-semibold text-slate-900">{s}</td>
                                <td className="py-2 font-semibold text-slate-900">{e}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
                The starting numbers are examples, not benchmarks. Close rates vary widely by line, lead source and how fast you call, so use your own. First-year commission only; renewals make every lead worth more.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-slate-800">Want a lower cost per policy from the same lead budget? A Dooza engineer looks at your lead sources and follow-up, and scopes a pilot.</p>
                <button type="button" onClick={openModal} className="shrink-0 rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white hover:bg-primary-700">
                    Book a free 30-minute call
                </button>
            </div>
        </div>
    );
}
