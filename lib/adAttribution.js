// Captures ad click attribution from the landing URL into a first-party cookie
// so the pilot form can send it to Close even if the visitor returns later.
// Browser only. Every function is a no-op on the server.

const COOKIE_NAME = 'dz_ad_attr';
const MAX_AGE_SECONDS = 90 * 24 * 60 * 60;
const PARAM_KEYS = [
    'gclid',
    'gbraid',
    'wbraid',
    'gad_source',
    'gad_campaignid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_term',
    'utm_content',
    'campaign',
    'adgroup',
    'keyword',
    'matchtype',
    'device',
    'network',
    'creative',
    'placement',
];

export const AD_CLICK_KEYS = ['gclid', 'gbraid', 'wbraid', 'gad_source'];

export function readAttribution() {
    if (typeof document === 'undefined') return {};
    try {
        const match = document.cookie
            .split('; ')
            .find((row) => row.startsWith(`${COOKIE_NAME}=`));
        if (!match) return {};
        const parsed = JSON.parse(decodeURIComponent(match.slice(COOKIE_NAME.length + 1)));
        return parsed && typeof parsed === 'object' ? parsed : {};
    } catch {
        return {};
    }
}

export function captureAttribution() {
    if (typeof window === 'undefined') return {};
    const params = new URLSearchParams(window.location.search);
    const found = {};
    PARAM_KEYS.forEach((key) => {
        const value = params.get(key);
        if (value) found[key] = value.slice(0, 200);
    });

    const existing = readAttribution();
    if (Object.keys(found).length === 0) {
        if (!existing.landing) {
            // First visit with no ad params: remember where they landed and came from.
            return writeAttribution({
                landing: `${window.location.pathname}${window.location.search}`.slice(0, 300),
                referrer: (document.referrer || '').slice(0, 300),
                captured_at: new Date().toISOString(),
            });
        }
        return existing;
    }

    return writeAttribution({
        ...found,
        landing: `${window.location.pathname}${window.location.search}`.slice(0, 300),
        referrer: (document.referrer || '').slice(0, 300),
        captured_at: new Date().toISOString(),
    });
}

function writeAttribution(data) {
    try {
        const secure = window.location.protocol === 'https:' ? '; Secure' : '';
        document.cookie = `${COOKIE_NAME}=${encodeURIComponent(JSON.stringify(data))}; Max-Age=${MAX_AGE_SECONDS}; Path=/; SameSite=Lax${secure}`;
    } catch {
        // Cookies blocked. The form still sends whatever is in the current URL.
    }
    return data;
}

export function isAdClick(attribution) {
    if (!attribution) return false;
    return AD_CLICK_KEYS.some((key) => Boolean(attribution[key])) || attribution.utm_source === 'google';
}
