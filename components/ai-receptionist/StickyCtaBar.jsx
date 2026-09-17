'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Headphones } from 'lucide-react';
import PlayDemoButton from './PlayDemoButton';
import { trackReceptionistEvent } from '@/lib/analytics';

// Mobile-only bar that keeps both actions one tap away once the hero scrolls
// away. Hides while the booking section is on screen.
export default function StickyCtaBar({ demoPhone = null, bookHref = '/ai-receptionist/book' }) {
    const [pastHero, setPastHero] = useState(false);
    const [pilotVisible, setPilotVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById('hero-actions');
        const pilot = document.getElementById('pilot');
        if (!hero || !pilot || typeof IntersectionObserver === 'undefined') return undefined;

        const heroObserver = new IntersectionObserver(([entry]) => setPastHero(!entry.isIntersecting), { threshold: 0 });
        const pilotObserver = new IntersectionObserver(([entry]) => setPilotVisible(entry.isIntersecting), { threshold: 0.15 });
        heroObserver.observe(hero);
        pilotObserver.observe(pilot);

        return () => {
            heroObserver.disconnect();
            pilotObserver.disconnect();
        };
    }, []);

    const visible = pastHero && !pilotVisible;

    return (
        <div
            aria-hidden={!visible}
            className={`fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+0.75rem)] pt-3 shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur transition-transform duration-300 md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}
        >
            <div className="flex gap-3">
                <PlayDemoButton
                    source="sticky"
                    demoPhone={demoPhone}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-primary-700 px-4 py-3 text-sm font-bold text-primary-800"
                >
                    <Headphones className="h-4 w-4" />
                    Hear It
                </PlayDemoButton>
                <Link
                    href={bookHref}
                    onClick={() => trackReceptionistEvent('sticky_book_click')}
                    className="flex flex-1 items-center justify-center rounded-xl bg-primary-700 px-4 py-3 text-sm font-bold text-white"
                >
                    Book Free Pilot
                </Link>
            </div>
        </div>
    );
}
