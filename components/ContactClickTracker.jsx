'use client';

import { useEffect } from 'react';

// Counts phone, text and support-email clicks as a conversion next to /book.
// Clarity: custom event 'contact_click' (+ tag contact_channel); Meta: Contact.
export default function ContactClickTracker() {
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target?.closest?.('a[href^="tel:"], a[href^="sms:"], a[href^="mailto:support@dooza.ai"]');
            if (!a) return;
            const href = a.getAttribute('href') || '';
            const channel = href.startsWith('tel:') ? 'call' : href.startsWith('sms:') ? 'text' : 'email';
            try {
                if (typeof window.clarity === 'function') {
                    window.clarity('set', 'contact_channel', channel);
                    window.clarity('event', 'contact_click');
                }
                if (typeof window.fbq === 'function') window.fbq('track', 'Contact', { content_name: channel });
            } catch (err) { /* tracking must never block the click */ }
        };
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);
    return null;
}
