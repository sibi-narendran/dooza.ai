'use client';

import { useEffect, useState } from 'react';

// Homepage hero animation (Sibi 2026-10-22 15:56: "Claude can make own animations in code"; redone 20:30 "Front office ...
// i want this part redone"). A scripted chat between you and your AI crew: the master agent splits a job, helpers work in
// their own browser and files, nothing is sent without you. Only product facts Daedalus confirmed 2026-10-22 20:13 (no
// phone line, no card). Illustrative: the clinics, files and spend figure are made up.
const PEOPLE = {
    you: { name: 'You', kind: 'human', initials: 'Y' },
    master: { name: 'Master agent', kind: 'agent', initials: 'M' },
    ava: { name: 'Ava', kind: 'agent', initials: 'A', role: 'Research' },
    ben: { name: 'Ben', kind: 'agent', initials: 'B', role: 'Writing' },
};

const SCRIPT = [
    { who: 'you', text: 'Find 20 dental clinics in Austin without online booking, and draft a short intro email for each.' },
    { who: 'master', text: 'On it. Ava takes the research, Ben writes the drafts.' },
    { who: 'ava', event: 'browser' },
    { who: 'ava', text: 'Found 20. Saved to Files.', event: 'file', file: 'austin-clinics.csv', meta: '20 rows' },
    { who: 'ben', text: '20 drafts ready for you to check. Nothing sent.', event: 'file', file: 'intro-drafts.docx', meta: '20 emails' },
    { who: 'you', text: 'Great. Send me the top 5 here.' },
    { who: 'master', text: 'Sent. Today\'s AI use so far:', event: 'spend' },
];

const STEP_MS = 1600;
const HOLD_MS = 5000;

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

const RESULTS = ['Lakeside Family Dental', 'Barton Creek Smiles', 'South Congress Dental', 'Mueller Dental Studio'];

function BrowserEvent({ live }) {
    return (
        <div className="mt-1 overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white">
            <div className="flex items-center gap-2 border-b border-[#E2E8F0] px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="h-2 w-2 rounded-full bg-[#E2E8F0]" />
                <span className="ml-2 truncate rounded-md bg-[#F8FAFC] px-2 py-0.5 text-xs text-[#64748B]">maps.example/search?q=dentist+austin</span>
                <span className="ml-auto text-[11px] text-[#0F766E]">Ava&apos;s browser</span>
            </div>
            <ul className="px-3 py-2">
                {RESULTS.map((r, i) => (
                    <li key={r} className={`flex items-center justify-between py-1 text-[13px] text-[#14213D] ${live ? 'crew-in' : ''}`} style={live ? { animationDelay: `${i * 220}ms` } : undefined}>
                        <span className="truncate">{r}</span>
                        <span className="ml-3 shrink-0 text-[11px] text-[#64748B]">no booking</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function FileEvent({ name, meta }) {
    return (
        <div className="mt-1 flex items-center gap-3 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3">
            <span className="flex h-8 w-7 items-start justify-end rounded-[4px] border border-[#CBD5E1] bg-[#EEF3F1]" aria-hidden="true">
                <span className="h-2 w-2 rounded-bl-[3px] bg-[#CBD5E1]" />
            </span>
            <span className="text-sm text-[#14213D]">
                <span className="font-semibold">{name}</span>
                <span className="ml-2 text-xs text-[#64748B]">{meta}</span>
            </span>
            <span className="ml-auto text-xs font-semibold text-[#0F766E]">Files</span>
        </div>
    );
}

function SpendEvent() {
    return (
        <div className="mt-1 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3">
            <div className="flex items-baseline justify-between text-sm text-[#14213D]">
                <span className="font-semibold">$0.84 of $20 this month</span>
                <span className="text-xs text-[#64748B]">hard cap</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[#EEF3F1]">
                <div className="crew-meter h-full rounded-full bg-[#0F766E]" style={{ width: '4.2%' }} />
            </div>
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

        const visible = SCRIPT.slice(0, shown);

    return (
        <figure className="relative rounded-[28px] border border-[#E2E8F0] bg-[#F8FAFC] shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
            <style>{`
                @keyframes crew-meter { from { transform: scaleX(0) } to { transform: none } }
                .crew-meter { transform-origin: left; animation: crew-meter .9s ease-out both; }
                @keyframes crew-in { from { opacity: 0; transform: translateY(8px) } to { opacity: 1; transform: none } }
                .crew-in { animation: crew-in .35s ease-out both; }
                @media (prefers-reduced-motion: reduce) { .crew-meter, .crew-in { animation: none; } }
            `}</style>
            <div className="flex items-center justify-between gap-3 border-b border-[#E2E8F0] px-5 py-4">
                <div>
                    <p className="text-sm font-bold text-[#0F172A]">Your crew</p>
                    <p className="text-xs text-[#64748B]">You and 3 AI employees, each with its own computer</p>
                </div>
                <div className="flex -space-x-2">
                    {Object.values(PEOPLE).map((p) => (
                        <span key={p.name} className="rounded-full ring-2 ring-[#F8FAFC]"><Avatar person={p} /></span>
                    ))}
                </div>
            </div>
            <ol className="flex h-[440px] flex-col justify-end gap-3 overflow-hidden px-4 py-5 [mask-image:linear-gradient(to_bottom,transparent,black_14%)] sm:px-5" aria-label="Example chat between you and your AI crew">
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
                                {m.event === 'browser' ? <BrowserEvent live={i === shown - 1} /> : null}
                                {m.event === 'file' ? <FileEvent name={m.file} meta={m.meta} /> : null}
                                {m.event === 'spend' ? <SpendEvent /> : null}
                            </div>
                        </li>
                    );
                })}
            </ol>
            <figcaption className="sr-only">An example Dooza Crew chat: you give one job, the master agent splits it between two AI helpers who research in their own browser and save results to Files, with AI spend capped.</figcaption>
        </figure>
    );
}
