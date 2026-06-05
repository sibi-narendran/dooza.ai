'use client';

import { useEffect } from 'react';

const COLD_AD_FLOW = 'cold_ad';
const ACCOUNTS_HOST = 'accounts.dooza.ai';

function shouldUseColdSignup() {
    const params = new URLSearchParams(window.location.search);
    const flow = params.get('signup_flow') || params.get('flow');
    return (
        flow === COLD_AD_FLOW ||
        flow === 'no_google_signup' ||
        params.get('no_google_signup') === 'true'
    );
}

function rewriteSignupLinks() {
    if (!shouldUseColdSignup()) return;

    document.querySelectorAll('a[href]').forEach((anchor) => {
        const href = anchor.getAttribute('href');
        if (!href) return;

        let url;
        try {
            url = new URL(href, window.location.origin);
        } catch {
            return;
        }

        if (url.hostname !== ACCOUNTS_HOST || url.pathname !== '/signup') return;
        if (url.searchParams.get('product') !== 'workforce') return;

        url.pathname = '/cold-signup';
        url.searchParams.set('signup_flow', COLD_AD_FLOW);
        anchor.setAttribute('href', url.toString());
    });
}

export default function ColdAdSignupLinkRewriter() {
    useEffect(() => {
        rewriteSignupLinks();

        const observer = new MutationObserver(() => rewriteSignupLinks());
        observer.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['href'],
        });

        return () => observer.disconnect();
    }, []);

    return null;
}
