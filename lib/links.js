export const CAL_BOOKING_URL = 'https://calendly.com/sibi-dooza/30min?hide_gdpr_banner=1';
export const CALENDLY_URL = 'https://calendly.com/sibi-dooza/30min?hide_gdpr_banner=1';
export const CAL_WEEKLY_UPDATES_URL = 'https://calendly.com/sibi-dooza/weekly-updates?hide_gdpr_banner=1';

function buildCalendlyUrlWithUtm(base, campaign, source, medium, content) {
    const params = new URLSearchParams();
    params.set('utm_source', source || 'website');
    params.set('utm_medium', medium || 'cta');
    params.set('utm_campaign', campaign);
    if (content) params.set('utm_content', content);
    return `${base}&${params.toString()}`;
}

export function getBookingUrlWithUtm(source, medium, content) {
    return buildCalendlyUrlWithUtm(CAL_BOOKING_URL, 'booking', source, medium, content);
}

export function getWeeklyUpdatesUrlWithUtm(source, medium, content) {
    return buildCalendlyUrlWithUtm(CAL_WEEKLY_UPDATES_URL, 'weekly_updates', source, medium, content);
}

export function getBookingUrlFromPath(pathname) {
    if (!pathname || pathname === '/') return getBookingUrlWithUtm('website', 'cta', 'homepage');
    const slug = pathname.replace(/^\/+|\/+$/g, '').replace(/\//g, '_');
    const source = pathname.startsWith('/blog') ? 'blog' : 'website';
    return getBookingUrlWithUtm(source, 'cta', slug);
}
export const ACCOUNT_SIGNUP_URL = 'https://accounts.dooza.ai/signup';
export const ACCOUNT_COLD_SIGNUP_URL = 'https://accounts.dooza.ai/cold-signup';
export const ACCOUNT_SIGNIN_URL = 'https://accounts.dooza.ai/signin';
export const WORKFLOW_SIGNUP_URL = 'https://workflow.dooza.ai/signup';
export const WORKFLOW_SIGNIN_URL = 'https://workflow.dooza.ai/signin';
export const SITE_URL = 'https://dooza.ai';

const COLD_AD_FLOW = 'cold_ad';

function getReferralCode() {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|;\s*)dooza_ref=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
}

function getSignupFlow(explicitFlow) {
    if (explicitFlow) return explicitFlow;
    if (typeof window === 'undefined') return null;

    const params = new URLSearchParams(window.location.search);
    const flow = params.get('signup_flow') || params.get('flow');
    if (flow === COLD_AD_FLOW || flow === 'no_google_signup') return COLD_AD_FLOW;
    if (params.get('no_google_signup') === 'true') return COLD_AD_FLOW;

    return null;
}

export const getProductSignupUrl = (product, options = {}) => {
    const signupFlow = getSignupFlow(options.flow || options.signupFlow);
    const signupBaseUrl = signupFlow === COLD_AD_FLOW
        ? ACCOUNT_COLD_SIGNUP_URL
        : ACCOUNT_SIGNUP_URL;

    const params = new URLSearchParams();
    if (product) params.set('product', String(product).trim());
    if (signupFlow) params.set('signup_flow', signupFlow);
    const ref = getReferralCode();
    if (ref) params.set('ref', ref);
    const qs = params.toString();
    return qs ? `${signupBaseUrl}?${qs}` : signupBaseUrl;
};

export const getProductSigninUrl = (product) => {
    const params = new URLSearchParams();
    if (product) params.set('product', String(product).trim());
    const ref = getReferralCode();
    if (ref) params.set('ref', ref);
    const qs = params.toString();
    return qs ? `${ACCOUNT_SIGNIN_URL}?${qs}` : ACCOUNT_SIGNIN_URL;
};
