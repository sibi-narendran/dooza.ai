export const CAL_BOOKING_URL = 'https://cal.com/sibinarendran/demo';
export const ACCOUNT_SIGNUP_URL = 'https://accounts.dooza.ai/signup';
export const ACCOUNT_SIGNIN_URL = 'https://accounts.dooza.ai/signin';

export const getProductSignupUrl = (product) => {
    if (!product) return ACCOUNT_SIGNUP_URL;
    const params = new URLSearchParams({ product: String(product).trim() });
    return `${ACCOUNT_SIGNUP_URL}?${params.toString()}`;
};

export const getProductSigninUrl = (product) => {
    if (!product) return ACCOUNT_SIGNIN_URL;
    const params = new URLSearchParams({ product: String(product).trim() });
    return `${ACCOUNT_SIGNIN_URL}?${params.toString()}`;
};
