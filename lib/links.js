export const CAL_BOOKING_URL = 'https://cal.com/sibinarendran/demo?embed=true&theme=light';
export const ACCOUNT_SIGNUP_URL = 'https://accounts.dooza.ai/signup';
export const ACCOUNT_SIGNIN_URL = 'https://accounts.dooza.ai/signin';
export const SITE_URL = 'https://dooza.ai';

function getReferralCode() {
    if (typeof document === 'undefined') return null;
    const match = document.cookie.match(/(?:^|;\s*)dooza_ref=([^;]+)/);
    return match ? decodeURIComponent(match[1]) : null;
}

export const getProductSignupUrl = (product) => {
    const params = new URLSearchParams();
    if (product) params.set('product', String(product).trim());
    const ref = getReferralCode();
    if (ref) params.set('ref', ref);
    const qs = params.toString();
    return qs ? `${ACCOUNT_SIGNUP_URL}?${qs}` : ACCOUNT_SIGNUP_URL;
};

export const getProductSigninUrl = (product) => {
    const params = new URLSearchParams();
    if (product) params.set('product', String(product).trim());
    const ref = getReferralCode();
    if (ref) params.set('ref', ref);
    const qs = params.toString();
    return qs ? `${ACCOUNT_SIGNIN_URL}?${qs}` : ACCOUNT_SIGNIN_URL;
};
