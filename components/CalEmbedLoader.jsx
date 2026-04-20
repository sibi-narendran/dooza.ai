'use client';

import { useEffect } from 'react';
import { trackFBSchedule, trackAdsConversion } from '@/lib/analytics';

const NAMESPACE = 'demo';
const CAL_LINK = 'sibinarendran/demo';
const CAL_HOST_PATTERN = /^https?:\/\/(app\.)?cal\.com\/sibinarendran/i;

export default function CalEmbedLoader() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

        // Intercept any <a href="cal.com/sibinarendran/..."> click and route
        // it through the Cal modal so tracking fires. Zero-touch for existing
        // hyperlinks scattered across blog posts, industry pages, etc.
        if (!window.__calLinkInterceptorRegistered) {
            window.__calLinkInterceptorRegistered = true;
            document.addEventListener('click', (e) => {
                if (e.defaultPrevented) return;
                if (e.button !== 0) return;
                if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
                const anchor = e.target.closest && e.target.closest('a[href]');
                if (!anchor) return;
                const href = anchor.getAttribute('href') || '';
                if (!CAL_HOST_PATTERN.test(href)) return;
                if (typeof window.Cal?.ns?.[NAMESPACE] !== 'function') return;
                e.preventDefault();
                window.Cal.ns[NAMESPACE]('modal', { calLink: CAL_LINK });
            }, true);
        }

        if (window.__calListenerRegistered) return;

        let tries = 0;
        const maxTries = 50;
        const interval = setInterval(() => {
            tries++;
            if (typeof window.Cal?.ns?.[NAMESPACE] === 'function') {
                clearInterval(interval);
                window.__calListenerRegistered = true;
                window.Cal.ns[NAMESPACE]('on', {
                    action: 'bookingSuccessful',
                    callback: (e) => {
                        const booking =
                            e?.detail?.data?.booking ||
                            e?.data?.booking ||
                            {};
                        const attendee = Array.isArray(booking.attendees) && booking.attendees.length > 0
                            ? booking.attendees[0]
                            : {};
                        const nameParts = String(attendee.name || '').trim().split(/\s+/);
                        const firstName = nameParts[0] || undefined;
                        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;

                        trackFBSchedule(booking.uid, {
                            email: attendee.email,
                            phone: attendee.phoneNumber,
                            firstName,
                            lastName,
                        });
                        trackAdsConversion();
                    },
                });
            } else if (tries >= maxTries) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return null;
}
