'use client';

// 2026-10-29 (Achilles): every sign-up link that starts on dooza.ai goes to crew.dooza.ai with
// utm_source=dooza&utm_medium=page baked in at render time. That made paid Facebook visitors and
// organic visitors look identical in Crew's sign-up report (Odysseus 10-28: 56 paid FB visitors,
// 0 trials, unattributable). This copies the visitor's own campaign parameters onto those links
// when they exist. No campaign parameters = nothing changes.
import { useEffect } from 'react';
import { applyHeard } from '@/lib/heard';

// 2026-11-10 (Achilles): Crew is live on Google Play (Edison 11-10). On Android, app sign-up links
// (crew.dooza.ai root, not /login, /mac or the API) go straight to the Play listing, with the link's
// utm_* carried in Play's referrer so per-link attribution survives the store hop.
const CREW_HOST = 'crew.dooza.ai';
const PLAY = 'https://play.google.com/store/apps/details?id=ai.dooza.app';
const SKIP_PATHS = ['/login', '/mac', '/v1'];

function isAndroid() {
    try {
        return /Android/i.test(navigator.userAgent || '');
    } catch (e) {
        return false;
    }
}

function toPlay(url) {
    const ref = new URLSearchParams();
    url.searchParams.forEach((v, k) => {
        if (k.startsWith('utm_')) ref.set(k, v);
    });
    const r = ref.toString();
    return r ? `${PLAY}&referrer=${encodeURIComponent(r)}` : PLAY;
}
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
    // Click time: add the visitor's "How did you hear about us?" answer (lib/heard.js) to any Crew/Play link.
    useEffect(() => {
        const onClick = (e) => {
            const a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
            if (!a) return;
            let url;
            try { url = new URL(a.getAttribute('href'), window.location.origin); } catch (err) { return; }
            if (url.hostname !== CREW_HOST && !(url.hostname === 'play.google.com' && a.getAttribute('data-play'))) return;
            if (applyHeard(url)) a.setAttribute('href', url.toString());
        };
        document.addEventListener('click', onClick, true);
        return () => document.removeEventListener('click', onClick, true);
    }, []);

    useEffect(() => {
        const inc = incoming();
        const android = isAndroid();
        if (!inc && !android) return;

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
                if (android && !SKIP_PATHS.some((sp) => url.pathname.startsWith(sp))) {
                    for (const [k, v] of Object.entries(inc || {})) url.searchParams.set(k, v);
                    anchor.setAttribute('href', toPlay(url));
                    anchor.setAttribute('data-play', '1');
                    return;
                }
                if (!inc) return;
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
