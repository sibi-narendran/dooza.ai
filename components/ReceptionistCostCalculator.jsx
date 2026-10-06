'use client';

import { useMemo, useState } from 'react';
import { compareReceptionistCosts, unitLabel, PRICES_CHECKED_LABEL } from '@/lib/receptionistPricing';
import { useBookingModal } from '@/components/BookingModalProvider';

const fmt = (n) => `$${n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;

function NumberField({ id, label, hint, value, onChange, min, max, step }) {
    return (
        <label htmlFor={id} className="block">
            <span className="block text-sm font-semibold text-slate-800">{label}</span>
            <input
                id={id}
                type="number"
                inputMode="decimal"
                min={min}
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

export default function ReceptionistCostCalculator({ defaultCalls = 100, defaultMinutes = 3, defaultUnique = 100 }) {
    const [calls, setCalls] = useState(String(defaultCalls));
    const [minutes, setMinutes] = useState(String(defaultMinutes));
    const [unique, setUnique] = useState(String(defaultUnique));
    const { openModal } = useBookingModal();

    const input = {
        calls: Math.max(0, Math.min(5000, Number(calls) || 0)),
        avgMinutes: Math.max(0.5, Math.min(30, Number(minutes) || 0.5)),
        uniqueShare: Math.max(0, Math.min(100, Number(unique) || 0)) / 100,
    };
    const rows = useMemo(() => compareReceptionistCosts(input), [input.calls, input.avgMinutes, input.uniqueShare]);
    const ai = rows.filter((r) => r.kind === 'ai' && r.result);
    const human = rows.filter((r) => r.kind === 'human' && r.result);

    return (
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="grid gap-5 sm:grid-cols-3">
                <NumberField id="calls" label="Calls per month" value={calls} onChange={setCalls} min={0} max={5000} step={10} hint="Inbound calls the receptionist answers" />
                <NumberField id="minutes" label="Average minutes per call" value={minutes} onChange={setMinutes} min={0.5} max={30} step={0.5} hint="Most small-business calls run 2–4 min" />
                <NumberField id="unique" label="% from different callers" value={unique} onChange={setUnique} min={0} max={100} step={5} hint="Only matters for per-caller pricing (Goodcall)" />
            </div>

            {ai.length > 0 && (
                <p className="mt-6 rounded-2xl bg-primary-50 px-5 py-4 text-slate-800">
                    For <strong>{input.calls} calls</strong> a month at about <strong>{input.avgMinutes} minutes</strong> each, AI receptionists cost{' '}
                    <strong>{fmt(ai[0].result.cost)} to {fmt(ai[ai.length - 1].result.cost)}</strong> a month
                    {human.length > 0 && <> against <strong>{fmt(human[0].result.cost)}{human.length > 1 ? ` to ${fmt(human[human.length - 1].result.cost)}` : ''}</strong> for a human answering service</>}.
                </p>
            )}

            <div className="mt-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                    <caption className="sr-only">Estimated monthly cost by AI receptionist and answering service</caption>
                    <thead>
                        <tr className="border-b-2 border-slate-200 text-left text-slate-900">
                            <th className="py-3 pr-4">Service</th>
                            <th className="py-3 pr-4">Est. monthly cost</th>
                            <th className="py-3 pr-4">Cheapest plan that fits</th>
                            <th className="py-3">Billed</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map((r) => (
                            <tr key={r.name} className={`border-b border-slate-100 ${r.kind === 'human' ? 'bg-slate-50' : ''}`}>
                                <td className="py-3 pr-4">
                                    <a href={r.url} target="_blank" rel="noopener noreferrer" className="font-medium text-slate-900 underline decoration-slate-300 hover:decoration-primary-500">{r.name}</a>
                                    {r.kind === 'human' && <span className="ml-2 rounded bg-slate-200 px-1.5 py-0.5 text-xs text-slate-700">human</span>}
                                </td>
                                <td className="py-3 pr-4 font-semibold text-slate-900">{r.result ? fmt(r.result.cost) : 'Not published at this volume'}</td>
                                <td className="py-3 pr-4 text-slate-700">{r.result ? r.result.plan : 'Contact vendor'}{r.extraNote ? ` (${r.extraNote})` : ''}</td>
                                <td className="py-3 text-slate-600">{unitLabel[r.unit]}{r.note ? `; ${r.note}` : ''}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <p className="mt-4 text-xs text-slate-500">
                List prices from each vendor’s pricing page, checked {PRICES_CHECKED_LABEL}. Estimates use the cheapest published plan that covers your usage plus published overage; taxes, phone numbers and add-ons are excluded. Confirm on the vendor’s site before buying.
            </p>

            <div className="mt-6 flex flex-col items-start gap-3 rounded-2xl border border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-slate-800">
                    Rather not set up and tune one yourself? Dooza builds a done-for-you AI receptionist on your existing number.
                </p>
                <button type="button" onClick={openModal} className="shrink-0 rounded-xl bg-primary-600 px-5 py-3 font-semibold text-white hover:bg-primary-700">
                    Book a free 30-minute call
                </button>
            </div>
        </div>
    );
}
