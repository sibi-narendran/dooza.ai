const ADS_CONVERSION_ID = 'AW-10872232955';
// TODO: Add your conversion label from Google Ads → Tools → Conversions → Tag setup
// Format should be: 'AW-10872232955/AbCdEfGhIjKlMnOp'
const ADS_CONVERSION_LABEL = '';

// ============================================
// Facebook Pixel Event Tracking
// Pixel ID: 777622852092389
// ============================================

/**
 * Track Facebook Pixel Lead event
 * Use for: Get Started clicks, signup initiations
 */
export const trackFBLead = (contentName = 'signup') => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Lead', {
    content_name: contentName,
  });
};

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

const normalizeText = (v) => (v ? String(v).trim().toLowerCase() : undefined);
const normalizePhone = (v) => {
  if (!v) return undefined;
  const digits = String(v).replace(/\D/g, '');
  return digits || undefined;
};

/**
 * Track Facebook Pixel Schedule event.
 * Pass eventID (Cal booking UID) so CAPI + pixel dedupe to one conversion.
 * userData enables Advanced Matching — improves match quality ~20%.
 */
export const trackFBSchedule = (eventID, userData = {}) => {
  if (typeof window === 'undefined' || !window.fbq) return;

  const match = {};
  const em = normalizeText(userData.email);
  const ph = normalizePhone(userData.phone);
  const fn = normalizeText(userData.firstName);
  const ln = normalizeText(userData.lastName);
  if (em) match.em = em;
  if (ph) match.ph = ph;
  if (fn) match.fn = fn;
  if (ln) match.ln = ln;

  if (FB_PIXEL_ID && Object.keys(match).length > 0) {
    window.fbq('init', FB_PIXEL_ID, match);
  }

  if (eventID) {
    window.fbq('track', 'Schedule', {}, { eventID });
  } else {
    window.fbq('track', 'Schedule');
  }
};

/**
 * Track Facebook Pixel CompleteRegistration event
 * Use for: Partner signup completion, form submissions
 */
export const trackFBCompleteRegistration = (contentName = 'partner') => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'CompleteRegistration', {
    content_name: contentName,
  });
};

/**
 * Track Facebook Pixel ViewContent event
 * Use for: Blog posts, product pages (Studio)
 */
export const trackFBViewContent = (contentName, contentType = 'page') => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'ViewContent', {
    content_name: contentName,
    content_type: contentType,
  });
};

/**
 * Track Facebook Pixel Contact event
 * Use for: Email clicks, contact form submissions
 */
export const trackFBContact = () => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Contact');
};

// ============================================
// Google Analytics Event Tracking
// ============================================

/**
 * Track Google Ads conversion event
 * Use this for successful completions (booking confirmed, signup completed)
 */
export const trackAdsConversion = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  const sendTo = ADS_CONVERSION_LABEL
    ? `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}`
    : ADS_CONVERSION_ID;
  window.gtag('event', 'conversion', { send_to: sendTo });
};

/**
 * Track signup button click (engagement only, NOT a conversion)
 * Conversion should only fire when signup is actually completed
 */
export const trackSignupClick = (source = 'unknown') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'signup_click', {
    event_category: 'CTA',
    event_label: source
  });
};

/**
 * Track Book Free Setup button click (engagement only, NOT a conversion)
 * Conversion should only fire when demo is actually booked (handled in BookingModal)
 */
export const trackDemoClick = (source = 'unknown') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'demo_click', {
    event_category: 'CTA',
    event_label: source
  });
};
