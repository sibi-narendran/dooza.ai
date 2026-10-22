'use client';

import { useEffect, useState } from 'react';

// Homepage hero animation (Sibi 2026-10-22 15:56: "Claude can make own animations in code"). A scripted group chat
// where staff and AI employees work together: a call from the business number, a card payment held for approval, a
// browser task. Illustrative only: names, numbers and the shop are made up (555-01xx is a fictional range).
const PEOPLE = {
    you: { name: 'You', kind: 'human', initials: 'Y' },
    priya: { name: 'Priya', kind: 'human', initials: 'P', role: 'Office manager' },
    master: { name: 'Master agent', kind: 'agent', initials: 'M' },
    ava: { name: 'Ava', kind: 'agent', initials: 'A', role: 'Sales' },
    ben: { name: 'Ben', kind: 'agent', initials: 'B', role: 'Operations' },
};

const SCRIPT = [
    { who: 'you', text: 'Three new leads came in overnight. Can someone get back to them?' },
    { who: 'master', text: 'On it. Ava is calling them now from the business number.' },
    { who: 'ava', event: 'call' },
    { who: 'ava', text: 'Booked two of three for Thursday. Notes are in the CRM.' },
    { who: 'ben', event: 'browser' },
    { who: 'ben', text: 'Same toner is $38.40 on the supplier site. Pay with the team card?', event: 'card' },
    { who: 'priya', text: 'Approved.' },
    { who: 'ben', text: 'Paid. Receipt saved to Files, receipts folder.' },
];

const STEP_MS = 1500;
const HOLD_MS = 5000;

function Avatar({ person }) {
    const agent = person.kind === 'agent';
    return (
        <span
            aria-hidden="true"
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold ${agent ? 'bg-[#0F766E] text-white' : 'bg-[#E2E8F0] text-[#0F172A]'}`}
        >
            {person.initials}
        </span>
    );
}

function CallEvent({ live }) {
    return (
        <div className="mt-1 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3">
            <span className="text-sm font-semibold text-[#0F172A]">Calling (555) 010-0182</span>
            <span className="crew-wave flex h-5 items-end gap-[3px]" aria-hidden="true">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <span key={i} className={`w-[3px] rounded-full bg-[#0F766E] ${live ? 'crew-bar' : ''}`} style={{ height: `${30 + ((i * 37) % 70)}%`, animationDelay: `${i * 90}ms` }} />
                ))}
            </span>
            <span className="ml-auto text-xs tabular-nums text-[#64748B]">0:42</span>
        </div>
    );
}

function BrowserEvent() {
    return (
        <div className="mt-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="ml-2 truncate rounded-md bg-[#FAF9F7] px-2 py-0.5 text-xs text-[#64748B]">supplier.example/toner-tn760</span>
            </div>
            <div className="relative px-3 py-3">
                <div className="h-2 w-2/3 rounded bg-[#E2E8F0]" />
                <div className="mt-2 h-2 w-1/2 rounded bg-[#E2E8F0]" />
                <div className="mt-3 inline-block rounded-md bg-[#0F172A] px-2 py-1 text-xs font-semibold text-white">$38.40</div>
                <span className="crew-cursor absolute left-1/2 top-3 h-3 w-3 rotate-45 border-l-2 border-t-2 border-[#0F172A]" aria-hidden="true" />
            </div>
        </div>
    );
}

function CardEvent({ approved }) {
    return (
        <div className="mt-1 flex flex-wrap items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3">
            <span className="flex h-7 w-10 items-end rounded-md bg-[#0F172A] p-1" aria-hidden="true">
                <span className="h-1 w-4 rounded-sm bg-white/60" />
            </span>
            <span className="text-sm text-[#0F172A]">
                <span className="font-semibold">Team card</span> ending 4417, $38.40
            </span>
            <span className={`ml-auto rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 ${approved ? 'bg-[#0F766E] text-white' : 'bg-[#FEF3C7] text-[#B45309]'}`}>
                {approved ? 'Approved' : 'Needs approval'}
            </span>
        </div>
    );
}

export default function CrewRoom() {
    const [shown, setShown] = useState(SCRIPT.length);

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

    const approved = shown >= 7;
    const visible = SCRIPT.slice(0, shown);

    return (
        <figure className="relative rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
            <style>{`
                @keyframes crew-bar { 0%,100% { transform: scaleY(.35) } 50% { transform: scaleY(1) } }
                .crew-bar { transform-origin: bottom; animation: crew-bar .8s ease-in-out infinite; }
                @keyframes crew-cursor { 0% { transform: translate(-40px, 14px) rotate(45deg) } 60%,100% { transform: translate(-70px, 34px) rotate(45deg) } }
                .crew-cursor { animation: crew-cursor 1.4s ease-out forwards; }
                @keyframes crew-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
                .crew-in { animation: crew-in .35s ease-out both; }
                @media (prefers-reduced-motion: reduce) { .crew-bar, .crew-cursor, .crew-in { animation: none; } }
            `}</style>
            <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <div>
                    <p className="text-sm font-bold text-[#0F172A]">Front office</p>
                    <p className="text-xs text-[#64748B]">2 people and 3 AI employees</p>
                </div>
                <div className="flex -space-x-2">
                    {Object.values(PEOPLE).map((p) => (
                        <span key={p.name} className="rounded-full ring-2 ring-[#F8FAFC]"><Avatar person={p} /></span>
                    ))}
                </div>
            </div>
            <ol className="flex h-[440px] flex-col justify-end gap-3 overflow-hidden px-4 py-5 [mask-image:linear-gradient(to_bottom,transparent,black_14%)] sm:px-5" aria-label="Example group chat between staff and AI employees">
                {visible.map((m, i) => {
                    const p = PEOPLE[m.who];
                    const mine = m.who === 'you';
                    return (
                        <li key={`${i}-${m.who}`} className={`crew-in flex gap-2.5 ${mine ? 'flex-row-reverse' : ''}`}>
                            <Avatar person={p} />
                            <div className={`max-w-[85%] ${mine ? 'text-right' : ''}`}>
                                <p className="mb-1 text-xs text-[#64748B]">
                                    <span className="font-semibold text-[#0F172A]">{p.name}</span>
                                    {p.kind === 'agent' ? <span className="ml-1.5 text-[#0F766E]">AI</span> : null}
                                </p>
                                {m.text ? (
                                    <p className={`inline-block rounded-2xl px-4 py-2.5 text-left text-[15px] leading-snug ${mine ? 'bg-primary-700 text-white' : 'bg-white text-[#0F172A] ring-1 ring-[#E2E8F0]'}`}>{m.text}</p>
                                ) : null}
                                {m.event === 'call' ? <CallEvent live={i === shown - 1} /> : null}
                                {m.event === 'browser' ? <BrowserEvent /> : null}
                                {m.event === 'card' ? <CardEvent approved={approved} /> : null}
                            </div>
                        </li>
                    );
                })}
            </ol>
            <figcaption className="sr-only">An example of a Dooza Crew group: you, your office manager and three AI employees handle leads and a purchase in one chat.</figcaption>
        </figure>
    );
}
