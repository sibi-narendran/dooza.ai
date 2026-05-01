'use client';

import { useEffect } from 'react';
import { trackFBContact } from '@/lib/analytics';

const CAL_LINK = 'sibinarendran/demo';
const NAMESPACE = 'demo';

export default function BookPageClient() {
    useEffect(() => {
        let tries = 0;
        const maxTries = 40;

        const sendContact = () => {
            if (typeof window !== 'undefined' && window.fbq && !window.__doozaBookContactTracked) {
                window.__doozaBookContactTracked = true;
                trackFBContact();
                return true;
            }
            return false;
        };

        if (sendContact()) return;

        const interval = window.setInterval(() => {
            tries += 1;
            if (sendContact() || tries >= maxTries) {
                window.clearInterval(interval);
            }
        }, 250);

        return () => window.clearInterval(interval);
    }, []);

    useEffect(() => {
        let tries = 0;
        const maxTries = 80;

        const openScheduler = () => {
            if (
                typeof window !== 'undefined' &&
                window.__calListenerRegistered &&
                !window.__doozaBookSchedulerOpened &&
                typeof window.Cal?.ns?.[NAMESPACE] === 'function'
            ) {
                window.__doozaBookSchedulerOpened = true;
                window.Cal.ns[NAMESPACE]('modal', { calLink: CAL_LINK });
                return true;
            }
            return false;
        };

        if (openScheduler()) return;

        const interval = window.setInterval(() => {
            tries += 1;
            if (openScheduler() || tries >= maxTries) {
                window.clearInterval(interval);
            }
        }, 100);

        return () => window.clearInterval(interval);
    }, []);

    return null;
}
