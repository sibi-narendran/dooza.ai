'use client';

import { useEffect } from 'react';
import { trackFBSchedule, trackAdsConversion } from '@/lib/analytics';

const NAMESPACE = 'demo';

export default function CalEmbedLoader() {
    useEffect(() => {
        if (typeof window === 'undefined') return;
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
