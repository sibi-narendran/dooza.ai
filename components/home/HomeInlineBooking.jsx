'use client';

import { useEffect, useRef } from 'react';
import { getBookingUrlWithUtm } from '@/lib/links';
import { getNavTrail } from '@/components/NavTrail';

// Inline Calendly on the homepage (trial home-inline-booking, 2026-10-13).
// Loads only when the section nears the viewport, so the first paint stays fast.
export default function HomeInlineBooking() {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;
        let interval;

        const init = () => {
            if (typeof window.Calendly?.initInlineWidget !== 'function') return false;
            const base = getBookingUrlWithUtm('website', 'cta', 'home-inline');
            const trail = getNavTrail();
            const url = trail ? `${base}&utm_term=${encodeURIComponent(trail)}` : base;
            container.innerHTML = '';
            window.Calendly.initInlineWidget({ url, parentElement: container });
            return true;
        };

        const start = () => {
            if (init()) return;
            let tries = 0;
            interval = window.setInterval(() => {
                tries += 1;
                if (init() || tries >= 100) window.clearInterval(interval);
            }, 100);
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries.some((e) => e.isIntersecting)) {
                observer.disconnect();
                start();
            }
        }, { rootMargin: '600px 0px' });
        observer.observe(container);

        return () => {
            observer.disconnect();
            if (interval) window.clearInterval(interval);
        };
    }, []);

    return (
        <section id="book-inline" className="px-4 py-20 md:px-8 md:py-24">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Pick a time to talk</h2>
                <p className="mt-4 text-lg text-slate-600">30 minutes with the Dooza team. Choose a slot below; you get a calendar invite right away.</p>
                <div
                    ref={ref}
                    className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white"
                    style={{ minWidth: 320, height: 720 }}
                >
                    <p className="p-8 text-slate-500">
                        Loading the calendar… If it does not appear, <a href="/book" className="underline">open the booking page</a>.
                    </p>
                </div>
            </div>
        </section>
    );
}
