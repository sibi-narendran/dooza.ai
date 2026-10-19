'use client';

import { useState } from 'react';

const GROUP = { HAPPENED: 'true', EARLY: 'true', LATE: 'true', PARTLY: 'mixed', NOT_YET: 'mixed', MISSED: 'mixed', UNKNOWN: 'mixed', NOT_DUE: 'window' };
const CHIP = {
    true: 'bg-emerald-50 text-emerald-800',
    mixed: 'bg-amber-50 text-amber-800',
    window: 'bg-sky-50 text-sky-800',
};
const RED = { NOT_YET: 'bg-rose-50 text-rose-800', MISSED: 'bg-rose-50 text-rose-800' };

// Share of the AI 2027 window used up: from publication (Apr 2025) to the end of the predicted period.
function elapsed(due, checked) {
    const start = Date.parse('2025-04-03');
    const end = Date.parse(`${due}-28`);
    return Math.max(0.03, Math.min(1, (Date.parse(checked) - start) / Math.max(1, end - start)));
}

export function Sources({ list }) {
    if (!list?.length) return null;
    return (
        <p className="mt-2 text-xs text-slate-500 break-words">
            Source:{' '}
            {list.map((x, i) => (
                <span key={x.url}>
                    {i ? ' · ' : ''}
                    <a className="underline" href={x.url} target="_blank" rel="noopener">{x.name}</a>
                </span>
            ))}
        </p>
    );
}

export default function Ai2027Calls({ rows, labels, checked }) {
    const [f, setF] = useState('all');
    const n = (g) => rows.filter((r) => GROUP[r.status] === g).length;
    const shown = rows.filter((r) => f === 'all' || GROUP[r.status] === f);
    const filters = [
        ['all', `All ${rows.length}`],
        ['true', `Came true ${n('true')}`],
        ['mixed', `Partly, not yet or wrong ${n('mixed')}`],
        ['window', `Still in window ${n('window')}`],
    ];
    let last = null;
    return (
        <div>
            <div className="sticky top-16 z-10 -mx-4 px-4 py-3 bg-slate-50 flex gap-2 overflow-x-auto [scrollbar-width:none]" role="group" aria-label="Filter predictions">
                {filters.map(([k, t]) => (
                    <button
                        key={k}
                        type="button"
                        onClick={() => setF(k)}
                        className={`flex-none min-h-10 rounded-full border px-4 text-sm ${f === k ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-800 border-slate-200'}`}
                    >
                        {t}
                    </button>
                ))}
            </div>
            {shown.map((r) => {
                const head = r.when !== last ? r.when : null;
                last = r.when;
                const win = r.status === 'NOT_DUE';
                return (
                    <div key={r.n}>
                        {head ? <h3 className="mt-7 mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">{head}</h3> : null}
                        <article className="mb-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5">
                            <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${RED[r.status] || CHIP[GROUP[r.status]]}`}>{labels[r.status]}</span>
                            <p className="mt-3 text-xs font-bold text-slate-500">AI 2027 said</p>
                            <p className="text-base text-slate-900">{r.prediction}</p>
                            <p className="mt-3 text-xs font-bold text-slate-500">{win ? 'So far' : 'What happened'}</p>
                            <p className="text-[15px] text-slate-700">{r.reality.replace(/^So far: /, '')}</p>
                            <Sources list={r.sources} />
                            {win ? (
                                <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                                    <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                                        <div className="h-full rounded-full bg-primary-600" style={{ width: `${Math.round(elapsed(r.due, checked) * 100)}%` }} />
                                    </div>
                                    <span>{r.togo}</span>
                                </div>
                            ) : null}
                        </article>
                    </div>
                );
            })}
        </div>
    );
}
