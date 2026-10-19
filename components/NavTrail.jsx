'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { getBookingUrlFromPath } from '@/lib/links';

// Remembers the visitor's path through the site for this tab (sessionStorage only: page paths
// and the external referrer's hostname; plus a reply link's ?ref/&email, only to prefill Stripe). /book sends it to Calendly as utm_term,
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
            // Reply-stage links (Orion) carry ?ref=<lead id>&email=; keep them for this tab so the
            // Stripe button can say who paid (2026-10-18).
            const q = new URLSearchParams(window.location.search);
            const rid = (q.get('ref') || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 200);
            const em = q.get('email') || '';
            if (rid) s.setItem('dz_rid', rid);
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em)) s.setItem('dz_em', em);
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
    // Stripe payment links: add client_reference_id + prefilled_email from the reply link, at click.
    useEffect(() => {
        const onPay = (e) => {
            const a = e.target.closest?.('a[href^="https://buy.stripe.com/"]');
            if (!a) return;
            try {
                const s = window.sessionStorage;
                const u = new URL(a.href);
                // No reply link: tag organic site checkouts site-<button source> so Stripe shows which page sold (10-19).
                const rid = s.getItem('dz_rid') || (a.dataset.source ? `site-${a.dataset.source}` : '');
                const em = s.getItem('dz_em');
                if (rid && !u.searchParams.get('client_reference_id')) u.searchParams.set('client_reference_id', rid);
                if (em && !u.searchParams.get('prefilled_email')) u.searchParams.set('prefilled_email', em);
                a.href = u.toString();
            } catch {}
        };
        document.addEventListener('click', onPay, true);
        // Same tags on every pay link at load, so each button's href already carries them (Orion 10-18: 2nd button looked bare).
        const tagAll = () => document.querySelectorAll('a[href^="https://buy.stripe.com/"]').forEach((a) => onPay({ target: a }));
        tagAll();
        const t = setTimeout(tagAll, 1500);
        return () => {
            clearTimeout(t);
            document.removeEventListener('click', onPay, true);
        };
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
