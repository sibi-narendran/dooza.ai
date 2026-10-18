'use client';

import { useEffect, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const day = (d) => Date.parse(d) / 864e5;
const mon = (d) => `${MONTHS[Number(d.slice(5, 7)) - 1]} '${d.slice(2, 4)}`;

// Today's date, starting from the last-checked date so the server HTML is stable.
function useToday(fallback) {
    const [today, setToday] = useState(fallback);
    useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);
    return today;
}

export function MilestoneChart({ rows, checked }) {
    const today = useToday(checked);
    const lo = day('2026-01-01');
    const hi = day('2029-01-01');
    const X = (d) => 250 + ((day(d) - lo) / (hi - lo)) * 480;
    const Y = (i) => 120 + 40 * i;
    const ticks = ['2026-01-01', '2026-07-01', '2027-01-01', '2027-07-01', '2028-01-01', '2028-07-01', '2029-01-01'];
    const bottom = Y(rows.length - 1) + 24;
    return (
        <svg viewBox={`0 0 760 ${bottom + 34}`} role="img" aria-label="AI 2027's milestone dates versus this scenario's" className="w-full h-auto" fontSize="13">
            <g>
                <circle cx="30" cy="40" r="5" fill="none" stroke="#64748b" strokeWidth="1.5" />
                <text x="42" y="44" fontSize="12" fill="#475569">AI 2027 date</text>
                <circle cx="150" cy="40" r="5" fill="#4f46e5" />
                <text x="162" y="44" fontSize="12" fill="#475569">AI 2029 scenario</text>
                <circle cx="290" cy="40" r="5" fill="#059669" />
                <text x="302" y="44" fontSize="12" fill="#475569">Already happened</text>
            </g>
            {ticks.map((d) => (
                <g key={d}>
                    <line x1={X(d)} x2={X(d)} y1="94" y2={bottom} stroke="#e2e8f0" />
                    <text x={X(d)} y="86" textAnchor="middle" fontSize="11.5" fill="#64748b">{mon(d)}</text>
                </g>
            ))}
            <line x1={X(today)} x2={X(today)} y1="94" y2={bottom + 2} stroke="#4f46e5" strokeWidth="1.25" strokeDasharray="4 4" />
            <text x={X(today)} y={bottom + 20} textAnchor="middle" fontSize="11.5" fontWeight="600" fill="#0f172a">
                Today, {mon(today)}
            </text>
            {rows.map((r, i) => {
                const y = Y(i);
                const done = Boolean(r.real);
                const left = day(r.here) < day(r.a2027);
                return (
                    <g key={r.key}>
                        <text x="20" y={y + 4} fill="#0f172a" fontWeight={r.major ? 600 : 400}>{r.label}</text>
                        <line x1={X(r.a2027)} x2={X(r.here)} y1={y} y2={y} stroke="#cbd5e1" strokeWidth="3" />
                        <circle cx={X(r.a2027)} cy={y} r="5.5" fill="#fff" stroke="#64748b" strokeWidth="1.5" />
                        <circle cx={X(r.here)} cy={y} r="5.5" fill={done ? '#059669' : '#4f46e5'} />
                        <text x={X(r.here) + (left ? 4 : -4)} y={y - 10} textAnchor={left ? 'end' : 'start'} fontSize="10.5" fontWeight="600" fill="#0f172a">{mon(r.here)}</text>
                        <text x={X(r.a2027)} y={y + 19} textAnchor="middle" fontSize="10.5" fill="#64748b">{mon(r.a2027)}</text>
                    </g>
                );
            })}
        </svg>
    );
}

export function DueIn({ due, status, checked }) {
    const today = useToday(checked);
    if (status !== 'pending') return null;
    // A prediction is due by the end of its month.
    const [y, m] = due.split('-').map(Number);
    const end = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
    const days = Math.round(day(end) - day(today));
    if (days < 0) return <span className="text-amber-700">due, grading</span>;
    return <span>{days} days left</span>;
}

export function NextDue({ predictions, checked }) {
    const today = useToday(checked);
    const next = predictions.find((p) => p.status === 'pending');
    if (!next) return null;
    const [y, m] = next.due.split('-').map(Number);
    const end = new Date(Date.UTC(y, m, 0)).toISOString().slice(0, 10);
    return <>{Math.max(0, Math.round(day(end) - day(today)))}</>;
}
