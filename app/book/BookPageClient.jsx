'use client';

import { useEffect } from 'react';
import { trackFBContact } from '@/lib/analytics';
import { CALENDLY_URL } from '@/lib/links';

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
                !window.__doozaBookSchedulerOpened &&
                typeof window.Calendly?.initInlineWidget === 'function'
            ) {
                window.__doozaBookSchedulerOpened = true;
                const container = document.getElementById('dooza-booking-loader');
                if (container) {
                    container.innerHTML = '';
                    container.classList.remove('dooza-booking-loader');
                    container.style.cssText = 'padding: 0; background: white;';

                    window.Calendly.initInlineWidget({
                        url: CALENDLY_URL,
                        parentElement: container,
                    });

                    const applyHeight = () => {
                        const widget = container.querySelector('.calendly-inline-widget');
                        if (widget) widget.style.cssText = 'min-width: 320px; width: 100%; height: calc(100vh - 72px); min-height: 700px;';
                        const iframe = container.querySelector('iframe');
                        if (iframe) iframe.style.cssText = 'width: 100%; height: 100%; min-height: 700px; border: none;';
                    };

                    applyHeight();

                    const observer = new MutationObserver(() => {
                        applyHeight();
                        const iframe = container.querySelector('iframe');
                        if (iframe) observer.disconnect();
                    });
                    observer.observe(container, { childList: true, subtree: true });
                }
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
