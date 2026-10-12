'use client';

import { useState } from 'react';
import Link from 'next/link';

// Free "renewals in your state this week" counter (counts only; data from Argus's weekly FMCSA run).
export default function StateRenewalCounter({ states, runLabel }) {
    const [code, setCode] = useState('');
    const s = states.find((x) => x.code === code);
    const book = `/book?utm_source=website&utm_medium=cta&utm_campaign=booking&utm_content=state-counter-${(code || 'none').toLowerCase()}`;

    return (
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6">
            <label htmlFor="state-pick" className="block text-sm font-semibold text-slate-900">
                Trucking renewals in your state this week
            </label>
            <select
                id="state-pick"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 sm:w-80"
            >
                <option value="">Pick your state</option>
                {states.map((x) => (
                    <option key={x.code} value={x.code}>{x.name}</option>
                ))}
            </select>

            {s && (
                <div className="mt-5" aria-live="polite">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">{s.renewals.toLocaleString('en-US')}</p>
                            <p className="mt-1 text-sm text-slate-600">fleets with 3+ power units renewing in 30 to 60 days (estimated)</p>
                        </div>
                        <div className="rounded-xl bg-slate-50 p-4">
                            <p className="text-3xl font-bold text-slate-900">{s.newAuthorities.toLocaleString('en-US')}</p>
                            <p className="mt-1 text-sm text-slate-600">new trucking authorities in the last 7 days, no liability filing yet</p>
                        </div>
                    </div>
                    {s.topInsurers.length > 0 && (
                        <p className="mt-4 text-sm text-slate-700">
                            Most common current insurers on the {s.name} renewals: {s.topInsurers.map((i) => `${i.name} (${i.count})`).join(', ')}.
                        </p>
                    )}
                    <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-4">
                        <Link href={book} className="rounded-xl bg-primary-600 px-6 py-3 font-semibold text-white hover:bg-primary-700">
                            Claim {s.name}
                        </Link>
                        <span className="text-sm text-slate-600">One agency per state. First week free, then $129 per 4 weeks.</span>
                    </div>
                </div>
            )}
            <p className="mt-4 text-xs text-slate-500">Counts from FMCSA open data, Dooza’s weekly run of {runLabel}. Renewal dates are estimates (anniversary of the current liability filing).</p>
        </div>
    );
}
