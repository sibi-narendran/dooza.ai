'use client';

// 2026-10-29 (Achilles): every sign-up link that starts on dooza.ai goes to crew.dooza.ai with
// utm_source=dooza&utm_medium=page baked in at render time. That made paid Facebook visitors and
// organic visitors look identical in Crew's sign-up report (Odysseus 10-28: 56 paid FB visitors,
// 0 trials, unattributable). This copies the visitor's own campaign parameters onto those links
// when they exist. No campaign parameters = nothing changes.
import { useEffect } from 'react';

const CREW_HOST = 'crew.dooza.ai';
const KEEP = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid', 'gclid', 'msclkid'];

function incoming() {
    const found = {};
    try {
        const p = new URLSearchParams(window.location.search);
        for (const k of KEEP) {
            const v = p.get(k);
            if (v) found[k] = v;
        }
    } catch (e) {}
    return Object.keys(found).length ? found : null;
}

export default function CrewUtmPassthrough() {
    useEffect(() => {
        const inc = incoming();
        if (!inc) return;

        const rewrite = () => {
            document.querySelectorAll(`a[href*="${CREW_HOST}"]`).forEach((anchor) => {
                const href = anchor.getAttribute('href');
                if (!href) return;
                let url;
                try {
                    url = new URL(href, window.location.origin);
                } catch (e) {
                    return;
                }
                if (url.hostname !== CREW_HOST) return;
                let changed = false;
                for (const [k, v] of Object.entries(inc)) {
                    if (url.searchParams.get(k) !== v) {
                        url.searchParams.set(k, v);
                        changed = true;
                    }
                }
                if (changed) anchor.setAttribute('href', url.toString());
            });
        };

        rewrite();
        const observer = new MutationObserver(rewrite);
        observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });
        return () => observer.disconnect();
    }, []);

    return null;
}
