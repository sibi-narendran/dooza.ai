'use client';

import { useEffect, useRef, useState } from 'react';

// "After you lock up": an example night shift. The line fills and each entry lights up as the section scrolls into view
// (one motion that follows the reader; off under reduced motion). Agents wake every hour on their own (Edison 10-25 08:08).
const NIGHT = [
    { time: '6:10 pm', who: 'Inbox agent', text: 'Sorted 23 emails. 4 replies waiting for your OK.' },
    { time: '9:47 pm', who: 'Service agent', text: 'Certificate for a contractor\'s new job site saved to Files, reply drafted.' },
    { time: '1:00 am', who: 'Portal agent', text: 'Pulled 3 renewal offers from the carrier portals.' },
    { time: '6:00 am', who: 'Renewals agent', text: '6 policies renew in 45 days. Remarket list and client emails drafted.' },
    { time: '7:30 am', who: 'Follow-up agent', text: 'Answered 2 overnight quote requests, follow-ups scheduled.' },
    { time: '7:58 am', who: 'You', text: 'Approved 7 drafts from your phone before the office opened.', human: true },
];

export default function NightShift({ displayClass = '' }) {
    const ref = useRef(null);
    const [lit, setLit] = useState(NIGHT.length);

    useEffect(() => {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
        const el = ref.current;
        if (!el) return undefined;
        const onScroll = () => {
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const p = Math.min(1, Math.max(0, (vh * 0.75 - r.top) / (r.height * 0.85)));
            setLit(Math.round(p * NIGHT.length));
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <section aria-labelledby="night-title" className="bg-[#14213D] px-4 py-20 text-white md:px-8 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[5fr_7fr]">
                <div className="lg:sticky lg:top-28 lg:self-start">
                    <h2 id="night-title" className={`${displayClass} text-white text-[34px] font-bold leading-[1.05] tracking-[-0.03em] md:text-[52px]`}>
                        After you lock up, they keep working.
                    </h2>
                    <p className="mt-5 max-w-md text-lg leading-relaxed text-white/75">
                        Your agents wake up every hour on their own and do whatever is due. You come in to a short list of things to approve.
                    </p>
                    <p className="mt-4 text-sm text-white/60">An example night. Numbers are illustrative.</p>
                </div>
                <ol ref={ref} className="relative border-l-2 border-white/15 pl-8">
                    <span aria-hidden="true" className="absolute -left-[2px] top-0 w-[2px] bg-[#F2B53A] transition-[height] duration-500 ease-out" style={{ height: `${(lit / NIGHT.length) * 100}%` }} />
                    {NIGHT.map((n, i) => {
                        const on = i < lit;
                        return (
                            <li key={n.time} className={`relative pb-10 transition-opacity duration-500 last:pb-0 ${on ? 'opacity-100' : 'opacity-35'}`}>
                                <span aria-hidden="true" className={`absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-2 border-[#14213D] transition-colors duration-500 ${on ? (n.human ? 'bg-[#F2B53A]' : 'bg-[#2DD4BF]') : 'bg-white/25'}`} />
                                <p className="text-sm font-semibold text-white/70">{n.time} · <span className={n.human ? 'text-[#F2B53A]' : 'text-[#5EEAD4]'}>{n.who}</span></p>
                                <p className="mt-1 text-xl leading-snug md:text-2xl">{n.text}</p>
                            </li>
                        );
                    })}
                </ol>
            </div>
        </section>
    );
}
