'use client';

import { crewSignupUrl } from '@/lib/crewUrl';
import { useEffect, useRef, useState } from 'react';

// /truck-dispatchers hero animation (Sibi 2026-10-25 08:20, same build as /insurance-agents). A scripted night at a dispatch
// desk: a load delivers after hours, the agents get the invoice ready, the dispatcher approves in the morning. Only what Edison
// confirmed for Crew on 10-25 08:08 (browser, webmail, hourly wake-ups, Files, approval). Carrier and broker names are made up.
const PEOPLE = {
    you: { name: 'You', kind: 'human', initials: 'Y' },
    inbox: { name: 'Inbox agent', kind: 'agent', initials: 'I' },
    billing: { name: 'Billing agent', kind: 'agent', initials: 'B' },
    loads: { name: 'Load board agent', kind: 'agent', initials: 'L' },
};

const SCRIPT = [
    { who: 'inbox', time: '9:47 pm', text: 'POD for load 4471 just came in from your driver. Passing it to Billing.' },
    { who: 'billing', time: '9:49 pm', event: 'browser' },
    { who: 'billing', time: '9:53 pm', text: 'Invoice packet ready.', event: 'file', file: 'load-4471-invoice-packet.pdf', meta: 'rate con + POD' },
    { who: 'billing', time: '9:54 pm', text: 'Invoice email to Ridgeline Logistics drafted. Send it?', event: 'approve' },
    { who: 'you', time: '6:58 am', text: 'Approve.' },
    { who: 'loads', time: '7:00 am', text: 'Morning search done. 5 dry van loads out of Dallas over $2.50 a mile.', event: 'file', file: 'dallas-loads-7am.xlsx', meta: 'for your 2 empty trucks' },
];

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

const FIELDS = [
    ['Load', '#4471, Dallas to Atlanta'],
    ['Rate confirmation', '$2,350, matched'],
    ['Proof of delivery', 'signed, attached'],
];

function BrowserEvent({ live }) {
    return (
        <div className="mt-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="ml-2 truncate rounded-md bg-[#F8FAFC] px-2 py-0.5 text-xs text-[#64748B]">factoring-portal.example/invoices/new</span>
                <span className="ml-auto shrink-0 text-[11px] text-[#0F766E]">its browser</span>
            </div>
            <ul className="px-3 py-2">
                {FIELDS.map(([k, v], i) => (
                    <li key={k} className={`flex items-center justify-between gap-3 py-1 text-[13px] ${live ? 'ins-in' : ''}`} style={live ? { animationDelay: `${i * 260}ms` } : undefined}>
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

export default function DispatchRoom() {
    const [shown, setShown] = useState(SCRIPT.length);
    const [overflow, setOverflow] = useState(false);
    const listRef = useRef(null);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        let n = 1;
        setShown(1);
        let timer;
        const tick = () => {
            if (n < SCRIPT.length) {
                n += 1;
                setShown(n);
                timer = setTimeout(tick, STEP_MS);
            } else {
                timer = setTimeout(() => { n = 1; setShown(1); timer = setTimeout(tick, STEP_MS); }, HOLD_MS);
            }
        };
        timer = setTimeout(tick, STEP_MS);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const el = listRef.current;
        if (!el) return;
        setOverflow(el.scrollHeight > el.clientHeight + 1);
        if (shown <= 1) el.scrollTop = 0;
        else el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    }, [shown]);

    const visible = SCRIPT.slice(0, shown);
    const night = shown < 5;

    return (
        <figure className="relative rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
            <style>{`
                @keyframes ins-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
                .ins-in { animation: ins-in .35s ease-out both; }
                @media (prefers-reduced-motion: reduce) { .ins-in { animation: none; } }
            `}</style>
            <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <div className="min-w-0">
                    <p className="text-sm font-bold text-[#0F172A]">Dispatch desk</p>
                    <p className="text-xs text-[#64748B]">
                        <span className={`mr-1.5 inline-block h-2 w-2 rounded-full align-middle transition-colors duration-700 ${night ? 'bg-[#14213D]' : 'bg-[#F2B53A]'}`} aria-hidden="true" />
                        {night ? 'Office closed. Agents working.' : 'Office open. You are in.'}
                    </p>
                </div>
                <div className="flex -space-x-2">
                    {Object.values(PEOPLE).map((p) => (
                        <span key={p.name} className="rounded-full ring-2 ring-[#F8FAFC]"><Avatar person={p} /></span>
                    ))}
                </div>
            </div>
            <ol ref={listRef} className={`flex h-[460px] flex-col justify-start gap-3 overflow-hidden px-4 py-5 sm:px-5 ${overflow ? '[mask-image:linear-gradient(to_bottom,transparent,black_14%)]' : ''}`} aria-label="Example chat between a dispatcher and three AI agents">
                {visible.map((m, i) => {
                    const p = PEOPLE[m.who];
                    const mine = m.who === 'you';
                    return (
                        <li key={`${i}-${m.who}`} className={`ins-in flex gap-2.5 ${mine ? 'flex-row-reverse' : ''}`}>
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
                                {m.event === 'browser' ? <BrowserEvent live={i === shown - 1} /> : null}
                                {m.event === 'file' ? <FileEvent name={m.file} meta={m.meta} /> : null}
                                {m.event === 'approve' ? <ApproveEvent /> : null}
                            </div>
                        </li>
                    );
                })}
            </ol>
            <div className="border-t border-[#E2E8F0] px-5 py-4">
                <a
                    href={crewSignupUrl('dsp-demo', 'Every morning at 7, search my load boards for dry van loads out of Dallas over $2.50 a mile and list them in Files.')}
                    data-offer="crew"
                    data-source="dsp-demo"
                    className="text-[15px] font-semibold text-[#0F766E] after:absolute after:inset-0 after:rounded-[28px] after:content-[''] hover:underline"
                >
                    Hire your Load board agent, $5 to start
                </a>
            </div>
            <figcaption className="sr-only">An example night at a dispatch desk: the Inbox agent receives a proof of delivery at 9:47 pm, the Billing agent puts the rate con and POD together and drafts the invoice email, which waits for the dispatcher, who approves it at 6:58 am; the Load board agent then lists five loads that fit the empty trucks. Names are made up.</figcaption>
        </figure>
    );
}
