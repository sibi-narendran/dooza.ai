'use client';

import { crewSignupUrl } from '@/lib/crewUrl';
import { useEffect, useRef, useState } from 'react';

// /insurance-agents hero animation (Sibi 2026-10-25 08:05: "a lot of animations", one agent per pain point). A scripted night
// at an independent agency: a certificate request arrives after hours, the agents handle it, the owner approves in the morning.
// Only what Edison confirmed for Crew on 10-25 08:08: webmail via its own browser, web portals after the user signs in once,
// hourly wake-ups, Files, approval before sending. Phone calls included (Sibi 10-25 20:00), no SMS claim, no PDF form filling. Client and carrier names are made up.
const PEOPLE = {
    you: { name: 'You', kind: 'human', initials: 'Y' },
    inbox: { name: 'Inbox agent', kind: 'agent', initials: 'I' },
    service: { name: 'Service agent', kind: 'agent', initials: 'S' },
    renew: { name: 'Renewals agent', kind: 'agent', initials: 'R' },
};

const SCRIPT = [
    { who: 'inbox', time: '9:47 pm', text: 'Coastal Builders needs a certificate for a new job site, holder Metro GC. Passing it to Service.' },
    { who: 'service', time: '9:49 pm', event: 'browser' },
    { who: 'service', time: '9:53 pm', text: 'Certificate saved.', event: 'file', file: 'coastal-builders-cert.pdf', meta: 'holder: Metro GC' },
    { who: 'inbox', time: '9:54 pm', text: 'Reply drafted with the certificate attached. Send it?', event: 'approve' },
    { who: 'you', time: '7:58 am', text: 'Approve.' },
    { who: 'renew', time: '8:00 am', text: 'Morning check done. 6 policies renew in the next 45 days, 2 are up more than 15%.', event: 'file', file: 'renewals-45-days.xlsx', meta: 'remarket list' },
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
    ['Named insured', 'Coastal Builders LLC'],
    ['Certificate holder', 'Metro GC'],
    ['Policies', 'GL, Auto, WC'],
];

function BrowserEvent({ live }) {
    return (
        <div className="mt-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="ml-2 truncate rounded-md bg-[#F8FAFC] px-2 py-0.5 text-xs text-[#64748B]">agency-portal.example/certificates/new</span>
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

export default function InsuranceRoom() {
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
                    <p className="text-sm font-bold text-[#0F172A]">Agency service desk</p>
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
            <ol ref={listRef} className={`flex h-[460px] flex-col justify-start gap-3 overflow-hidden px-4 py-5 sm:px-5 ${overflow ? '[mask-image:linear-gradient(to_bottom,transparent,black_14%)]' : ''}`} aria-label="Example chat between an agency owner and three AI agents">
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
                    href={crewSignupUrl('ins-demo', 'Every morning, check which policies renew in the next 45 days and flag any increase over 15%.')}
                    data-offer="crew"
                    data-source="ins-demo"
                    className="text-[15px] font-semibold text-[#0F766E] after:absolute after:inset-0 after:rounded-[28px] after:content-[''] hover:underline"
                >
                    Hire your Renewals agent, free
                </a>
            </div>
            <figcaption className="sr-only">An example night at an independent insurance agency: the Inbox agent spots a certificate request at 9:47 pm, the Service agent prepares it in a web portal and saves it to Files, the reply waits for the owner, who approves it at 7:58 am; the Renewals agent then reports which policies renew in the next 45 days. Names are made up.</figcaption>
        </figure>
    );
}
