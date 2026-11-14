'use client';
// Click-to-play YouTube Short (vertical). No YouTube JS until click (keeps LCP clean).
import { useState } from 'react';

export default function ShortEmbed({ id, title }) {
    const [on, setOn] = useState(false);
    return (
        <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900">
            {on ? (
                <iframe src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen className="absolute inset-0 h-full w-full" />
            ) : (
                <button type="button" onClick={() => setOn(true)} aria-label={`Play: ${title}`} className="group absolute inset-0 h-full w-full">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`} alt="" loading="lazy" className="h-full w-full object-cover opacity-90" />
                    <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 group-hover:bg-white">▶</span>
                </button>
            )}
        </div>
    );
}
