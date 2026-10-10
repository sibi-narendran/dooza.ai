'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getBookingUrlFromPath } from '@/lib/links';

// Remembers the visitor's path through the site for this tab (sessionStorage only: page paths
// and the external referrer's hostname, nothing personal). /book sends it to Calendly as utm_term,
// so each booking shows which page brought the visitor there. Added by Alive-Web 2026-10-07.
export default function NavTrail() {
    const pathname = usePathname();
    useEffect(() => {
        try {
            const s = window.sessionStorage;
            const cur = s.getItem('dz_cur');
            if (cur && cur !== pathname) s.setItem('dz_prev', cur);
            s.setItem('dz_cur', pathname);
            if (!s.getItem('dz_land')) {
                s.setItem('dz_land', pathname);
                let ref = '';
                try {
                    const host = document.referrer ? new URL(document.referrer).hostname : '';
                    if (host && host !== window.location.hostname) ref = host.replace(/^www\./, '');
                } catch {}
                s.setItem('dz_ref', ref || 'direct');
            }
        } catch {
            // Storage blocked: bookings keep their normal UTM tags.
        }
    }, [pathname]);
    // Plain <a href={CAL_BOOKING_URL}> links (~40 pages) skipped the UTM tags and the trail, so their
    // bookings showed no source. Tag them at click time, once per link (2026-10-10).
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target.closest?.('a[href*="calendly.com/sibi-dooza/book-a-meeting"]');
            if (!a || a.href.includes('utm_term=')) return;
            let url = a.href.includes('utm_source=') ? a.href : getBookingUrlFromPath(window.location.pathname);
            const trail = getNavTrail();
            if (trail) url += `&utm_term=${encodeURIComponent(trail)}`;
            a.href = url;
        };
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);
    return null;
}

export function getNavTrail() {
    try {
        const s = window.sessionStorage;
        const parts = [`prev:${s.getItem('dz_prev') || '-'}`, `land:${s.getItem('dz_land') || '-'}`, `ref:${s.getItem('dz_ref') || '-'}`];
        return parts.join('|').slice(0, 200);
    } catch {
        return '';
    }
}
