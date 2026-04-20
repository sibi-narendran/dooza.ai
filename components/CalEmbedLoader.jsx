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
                const bookingUid =
                    e?.detail?.data?.booking?.uid ||
                    e?.data?.booking?.uid ||
                    undefined;
                trackFBSchedule(bookingUid);
                trackAdsConversion();
            },
        });
    }, []);

    return null;
}
