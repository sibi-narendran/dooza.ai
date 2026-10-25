'use client';

import { crewSignupUrl } from '@/lib/crewUrl';
import { useEffect, useRef, useState } from 'react';

// Hero chat animation for the config-driven industry pages (/ai-agents-for-*), same motion as InsuranceRoom: a scripted night,
// agents hand work to each other, the owner approves in the morning. `room` comes from lib/industryCrews.js.
const STEP_MS = 1700;
const HOLD_MS = 5200;

function Avatar({ person }) {
    const agent = person.kind === 'agent';
    return (
        <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${agent ? 'bg-[#0F766E] text-white' : 'bg-[#F2B53A] text-[#14213D]'}`}
        >
            {person.initials}
        </span>
    );
}

function BrowserEvent({ live, url, fields }) {
    return (
        <div className="mt-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="ml-2 truncate rounded-md bg-[#F8FAFC] px-2 py-0.5 text-xs text-[#64748B]">{url}</span>
                <span className="ml-auto shrink-0 text-[11px] text-[#0F766E]">its browser</span>
            </div>
            <ul className="px-3 py-2">
                {fields.map(([k, v], i) => (
                    <li key={k} className={`flex items-center justify-between gap-3 py-1 text-[13px] ${live ? 'ind-in' : ''}`} style={live ? { animationDelay: `${i * 260}ms` } : undefined}>
                        <span className="text-[#64748B]">{k}</span>
                        <span className="truncate font-medium text-[#14213D]">{v}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FileEvent({ name, meta }) {
    return (
        <div className="mt-1 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3">
            <span className="flex h-8 w-7 shrink-0 items-start justify-end rounded-[4px] border border-[#CBD5E1] bg-[#EEF3F1]" aria-hidden="true">
                <span className="h-2 w-2 rounded-bl-[3px] bg-[#CBD5E1]" />
            </span>
            <span className="min-w-0 text-sm text-[#14213D]">
                <span className="block truncate font-semibold">{name}</span>
                <span className="text-xs text-[#64748B]">{meta}</span>
            </span>
            <span className="ml-auto text-xs font-semibold text-[#0F766E]">Files</span>
        </div>
    );
}

function ApproveEvent() {
    return (
        <div className="mt-2 flex gap-2" aria-hidden="true">
            <span className="rounded-full bg-[#0F766E] px-3.5 py-1.5 text-xs font-semibold text-white">Approve</span>
            <span className="rounded-full border border-[#CBD5E1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#14213D]">Edit</span>
            <span className="rounded-full border border-[#CBD5E1] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#14213D]">Reject</span>
        </div>
    );
}

export default function IndustryRoom({ room, prefix }) {
    const { people, script } = room;
    const [shown, setShown] = useState(script.length);
    const [overflow, setOverflow] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        let n = 1;
        setShown(1);
        let timer;
        const tick = () => {
            if (n < script.length) {
                n += 1;
                setShown(n);
                timer = setTimeout(tick, STEP_MS);
            } else {
                timer = setTimeout(() => { n = 1; setShown(1); timer = setTimeout(tick, STEP_MS); }, HOLD_MS);
            }
        };
        timer = setTimeout(tick, STEP_MS);
        return () => clearTimeout(timer);
    }, [script.length]);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;
        setOverflow(el.scrollHeight > el.clientHeight + 1);
        if (shown <= 1) el.scrollTop = 0;
        else el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }, [shown]);

    const visible = script.slice(0, shown);
    const night = shown < room.dayFrom;

    return (
        <figure className="relative rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
            <style>{`
                @keyframes ind-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
                .ind-in { animation: ind-in .35s ease-out both; }
                @media (prefers-reduced-motion: reduce) { .ind-in { animation: none; } }
            `}</style>
            <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0F172A]">{room.title}</p>
                    <p className="text-xs text-[#64748B]">
                        <span className={`mr-1.5 inline-block h-2 w-2 rounded-full align-middle transition-colors duration-700 ${night ? 'bg-[#14213D]' : 'bg-[#F2B53A]'}`} aria-hidden="true" />
                        {night ? 'Office closed. Agents working.' : 'Office open. You are in.'}
                    </p>
                </div>
                <div className="flex -space-x-2">
                    {Object.values(people).map((p) => (
                        <span key={p.name} className="rounded-full ring-2 ring-[#F8FAFC]"><Avatar person={p} /></span>
                    ))}
                </div>
            </div>
            <ol ref={listRef} className={`flex h-[460px] flex-col justify-start gap-3 overflow-hidden px-4 py-5 sm:px-5 ${overflow ? '[mask-image:linear-gradient(to_bottom,transparent,black_14%)]' : ''}`} aria-label={room.label}>
                {visible.map((m, i) => {
                    const p = people[m.who];
                    const mine = m.who === 'you';
                    return (
                        <li key={`${i}-${m.who}`} className={`ind-in flex gap-2.5 ${mine ? 'flex-row-reverse' : ''}`}>
                            <Avatar person={p} />
                            <div className={`max-w-[85%] ${mine ? 'text-right' : ''}`}>
                                <p className="mb-1 text-xs text-[#64748B]">
                                    <span className="font-semibold text-[#0F172A]">{p.name}</span>
                                    {p.kind === 'agent' ? <span className="ml-1.5 text-[#0F766E]">AI</span> : null}
                                    <span className="ml-1.5">{m.time}</span>
                                </p>
                                {m.text ? (
                                    <p className={`inline-block rounded-2xl px-4 py-2.5 text-left text-[15px] leading-snug ${mine ? 'bg-[#14213D] text-white' : 'bg-white text-[#0F172A] ring-1 ring-[#E2E8F0]'}`}>{m.text}</p>
                                ) : null}
                                {m.event === 'browser' ? <BrowserEvent live={i === shown - 1} url={room.url} fields={room.fields} /> : null}
                                {m.event === 'file' ? <FileEvent name={m.file} meta={m.meta} /> : null}
                                {m.event === 'approve' ? <ApproveEvent /> : null}
                            </div>
                        </li>
                    );
                })}
            </ol>
            <div className="border-t border-[#E2E8F0] px-5 py-4">
                <a
                    href={crewSignupUrl(`${prefix}-demo`, room.demoTask)}
                    data-offer="crew"
                    data-source={`${prefix}-demo`}
                    className="text-[15px] font-semibold text-[#0F766E] after:absolute after:inset-0 after:rounded-[28px] after:content-[''] hover:underline"
                >
                    {room.demoLabel}
                </a>
            </div>
            <figcaption className="sr-only">{room.caption}</figcaption>
        </figure>
    );
}
