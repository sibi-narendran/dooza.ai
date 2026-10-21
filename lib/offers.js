// Self-serve offers with live Stripe links (Odysseus 2026-10-14 09:31/09:32; Sibi 10-14: "I need clients ... money").
// Wording limits come from Hercules' delivery scope: written admin only, no calls/texts for clients, no logins, payments or legal/tax/insurance advice.
export const MANAGED_PAY_URL = 'https://buy.stripe.com/eVq14n94vbAx95abff3AY0s';
// ICP1 plan A: shared state list, $129 per 4 weeks, no trial (Odysseus 2026-10-21, plink_1USw5A). Add ?client_reference_id=<arm>.
export const ICP1_A_PAY_URL = 'https://buy.stripe.com/dRm3cv3Kb5c94OUerr3AY16';
export const TRUCKER_FEED_PAY_URL = 'https://buy.stripe.com/cNi4gz3KbeMJ5SY6YZ3AY0p';
export const NOTARY_RENEWAL_PAY_URL = 'https://buy.stripe.com/4gM00j0xZbAx4OUcjj3AY0M';
// CT new-business feed: $129 every 4 weeks, 7-day trial, card at start (Odysseus 2026-10-17, plink_1URcBOFSiMMcXftcLsZiL1U6).
export const NEWBIZ_CT_PAY_URL = 'https://buy.stripe.com/bJebJ11C3eMJ1CIerr3AY10';
// CA WARN short-notice sheet: $299/month, no trial; first sheet free by email (Odysseus 2026-10-17 18:36).
export const LAW_WARN_CA_PAY_URL = 'https://buy.stripe.com/5kQbJ16Wn0VT3KQ5UV3AY11';
export const CERT_PACK_PAY_URL = 'https://buy.stripe.com/cNi8wPa8zgUR95adnn3AY0Y';
// Dooza Support: $300/month up to 250 customer messages, 14-day trial, card at signup (Odysseus 2026-10-21, plink_1UT5oRFSiMMcXftcbNERax62; Sibi 10-21 20:06).
export const SUPPORT_PAY_URL = 'https://buy.stripe.com/aFafZh6WnbAxftygzz3AY1b';
export function supportPay(source) {
    const id = `support-${source || 'page'}`.replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 200);
    return `${SUPPORT_PAY_URL}?client_reference_id=${id}`;
}
export function trackSupportPay(source) {
    if (typeof window === 'undefined') return;
    if (typeof window.clarity === 'function') window.clarity('event', 'support_pay_click');
    if (typeof window.gtag === 'function') window.gtag('event', 'support_pay_click', { source });
}

// Stripe tag per page (Odysseus 2026-10-18 page-link test): client_reference_id=page-<slug> stays on the Checkout Session,
// so tools/stripe_sessions.py can tell page clicks from bare links. Keeps any tag already on the link.
export function tagPay(href, slug) {
    if (!href || !href.startsWith('https://buy.stripe.com/') || href.includes('client_reference_id=') || !slug) return href;
    const id = `page-${slug}`.replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 200);
    return `${href}${href.includes('?') ? '&' : '?'}client_reference_id=${id}`;
}
