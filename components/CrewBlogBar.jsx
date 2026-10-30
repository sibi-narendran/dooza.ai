'use client';
import { useEffect, useState } from 'react';
import { crewSignupUrl } from '@/lib/crewUrl';

// Slim Crew bar on blog posts (2026-10-23): Clarity showed ~20 blog sessions in 3 days with 1 page, 0 clicks and
// 13-66% scroll, so the TalkNowStrip at the end is rarely seen. Shows after a short scroll; dismiss is remembered per browser.
const KEY = 'crewBlogBarClosed';

export default function CrewBlogBar({ source = 'blog' }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        let closed = false;
        try { closed = localStorage.getItem(KEY) === '1'; } catch {}
        if (closed) return;
        const onScroll = () => { if (window.scrollY > 400) { setShow(true); window.removeEventListener('scroll', onScroll); } };
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    if (!show) return null;
    const close = () => { setShow(false); try { localStorage.setItem(KEY, '1'); } catch {} };
    return (
        <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur">
            <div className="mx-auto flex max-w-4xl items-center gap-3">
                <p className="flex-1 text-sm text-slate-700 sm:text-[15px]">
                    <span className="font-semibold text-[#14213D]">Dooza Crew:</span> AI employees you chat with, each with its own computer and browser. Start for $5, your whole team included.
                </p>
                <a href={crewSignupUrl(`bar-${source}`)} data-offer="crew" data-source={`bar-${source}`} className="shrink-0 rounded-full bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white hover:bg-[#14213D]">Start for $5</a>
                <button type="button" onClick={close} aria-label="Close" className="shrink-0 px-1 text-xl leading-none text-slate-400 hover:text-slate-700">&times;</button>
            </div>
        </div>
    );
}
