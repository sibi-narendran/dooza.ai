'use client';

import { useEffect } from 'react';
import { trackFBSchedule, trackAdsConversion } from '@/lib/analytics';
import { CALENDLY_URL } from '@/lib/links';

const CAL_HOST_PATTERN = /^https?:\/\/(app\.)?(cal\.com\/sibinarendran|calendly\.com\/sibi-dooza)/i;

export default function CalEmbedLoader() {
    useEffect(() => {
        if (typeof window === 'undefined') return;

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
                if (typeof window.Calendly?.initPopupWidget !== 'function') return;
                e.preventDefault();
                window.Calendly.initPopupWidget({ url: CALENDLY_URL });
            }, true);
        }

        if (window.__calListenerRegistered) return;
        window.__calListenerRegistered = true;

        const handleMessage = (e) => {
            if (e.origin !== 'https://calendly.com') return;
            if (!e.data?.event) return;

            if (e.data.event === 'calendly.event_scheduled') {
                const payload = e.data.payload || {};
                trackFBSchedule(payload.event?.uri);
                trackAdsConversion();
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return null;
}
