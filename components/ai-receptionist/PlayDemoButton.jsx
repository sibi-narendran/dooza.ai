'use client';

import { PLAY_DEMO_EVENT } from './DemoCallPlayer';
import { trackReceptionistEvent } from '@/lib/analytics';

// Primary demo action. When a live demo line exists and the visitor is on a
// touch device, it dials the line. Otherwise it scrolls to the player and
// starts the sample recording.
export default function PlayDemoButton({ children, className = '', source = 'hero', demoPhone = null }) {
    const handleClick = (event) => {
        const coarse = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(pointer: coarse)').matches;
        if (demoPhone && coarse) {
            trackReceptionistEvent('demo_call_tap', { source });
            window.location.href = `tel:${demoPhone}`;
            return;
        }
        event.preventDefault();
        trackReceptionistEvent('demo_button_click', { source });
        const target = document.getElementById('demo');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        window.dispatchEvent(new Event(PLAY_DEMO_EVENT));
    };

    return (
        <a href="#demo" onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
