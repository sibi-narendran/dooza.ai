// "How did you hear about us?" one-tap answer (Odysseus yes 2026-11-11 18:20; Kevin Indig: AI discovery hides in
// Direct, referrers miss it). Kept for the visit in sessionStorage and sent to Crew on every sign-up link as
// heard=<key> + utm_term=heard-<key> (utm_term only when the visitor brought none), so it lands in Crew's sign-up utm record.
export const HEARD_OPTIONS = [
    { key: 'google', label: 'Google' },
    { key: 'ai', label: 'ChatGPT or other AI' },
    { key: 'reddit-quora', label: 'Reddit / Quora' },
    { key: 'friend', label: 'Friend' },
    { key: 'other', label: 'Other' },
];
const KEY = 'doozaHeard';

export function getHeard() {
    try {
        const v = sessionStorage.getItem(KEY);
        return HEARD_OPTIONS.some((o) => o.key === v) ? v : null;
    } catch (e) {
        return null;
    }
}

export function setHeard(v) {
    try { sessionStorage.setItem(KEY, v); } catch (e) {}
    // Also a Clarity custom tag, so answers are countable on our side even when Crew drops the param.
    try { if (window.clarity) window.clarity('set', 'heard', v); } catch (e) {}
}

// Adds the answer to a crew.dooza.ai URL object (or to the referrer of a Play link). Returns true if changed.
export function applyHeard(url, heard = getHeard()) {
    if (!heard) return false;
    if (url.hostname === 'play.google.com') {
        const ref = new URLSearchParams(url.searchParams.get('referrer') || '');
        if (ref.get('utm_term')) return false;
        ref.set('utm_term', `heard-${heard}`);
        url.searchParams.set('referrer', ref.toString());
        return true;
    }
    url.searchParams.set('heard', heard);
    if (!url.searchParams.get('utm_term')) url.searchParams.set('utm_term', `heard-${heard}`);
    return true;
}
