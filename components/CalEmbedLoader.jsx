'use client';

import { useEffect } from 'react';
import { trackFBSchedule, trackAdsConversion } from '@/lib/analytics';

const NAMESPACE = 'demo';

export default function CalEmbedLoader() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.__calEmbedInitialized) return;
        window.__calEmbedInitialized = true;

        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement('script')).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === L) {
                    const api = function () { p(api, arguments); };
                    const namespace = ar[1];
                    api.q = api.q || [];
                    if (typeof namespace === 'string') {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], ar);
                        p(cal, ['initNamespace', namespace]);
                    } else {
                        p(cal, ar);
                    }
                    return;
                }
                p(cal, ar);
            };
        })(window, 'https://app.cal.com/embed/embed.js', 'init');

        window.Cal('init', NAMESPACE, { origin: 'https://cal.com' });

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
    }, []);

    return null;
}
