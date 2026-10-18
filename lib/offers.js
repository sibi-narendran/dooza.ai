// Self-serve offers with live Stripe links (Odysseus 2026-10-14 09:31/09:32; Sibi 10-14: "I need clients ... money").
// Wording limits come from Hercules' delivery scope: written admin only, no calls/texts for clients, no logins, payments or legal/tax/insurance advice.
export const MANAGED_PAY_URL = 'https://buy.stripe.com/eVq14n94vbAx95abff3AY0s';
export const TRUCKER_FEED_PAY_URL = 'https://buy.stripe.com/cNi4gz3KbeMJ5SY6YZ3AY0p';
export const NOTARY_RENEWAL_PAY_URL = 'https://buy.stripe.com/4gM00j0xZbAx4OUcjj3AY0M';
// CT new-business feed: $129 every 4 weeks, 7-day trial, card at start (Odysseus 2026-10-17, plink_1URcBOFSiMMcXftcLsZiL1U6).
export const NEWBIZ_CT_PAY_URL = 'https://buy.stripe.com/bJebJ11C3eMJ1CIerr3AY10';
// CA WARN short-notice sheet: $299/month, no trial; first sheet free by email (Odysseus 2026-10-17 18:36).
export const LAW_WARN_CA_PAY_URL = 'https://buy.stripe.com/5kQbJ16Wn0VT3KQ5UV3AY11';
export const CERT_PACK_PAY_URL = 'https://buy.stripe.com/cNi8wPa8zgUR95adnn3AY0Y';

// Stripe tag per page (Odysseus 2026-10-18 page-link test): client_reference_id=page-<slug> stays on the Checkout Session,
// so tools/stripe_sessions.py can tell page clicks from bare links. Keeps any tag already on the link.
export function tagPay(href, slug) {
    if (!href || !href.startsWith('https://buy.stripe.com/') || href.includes('client_reference_id=') || !slug) return href;
    const id = `page-${slug}`.replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 200);
    return `${href}${href.includes('?') ? '&' : '?'}client_reference_id=${id}`;
}
