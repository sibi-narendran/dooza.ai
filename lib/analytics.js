const ADS_CONVERSION_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-10872232955';
// Optional: set this to the conversion label from Google Ads.
// Accepts either just the label or the full AW-.../... send_to value.
const ADS_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL || '';

const getAdsSendTo = () => {
  if (!ADS_CONVERSION_LABEL) return ADS_CONVERSION_ID;
  if (ADS_CONVERSION_LABEL.startsWith('AW-')) return ADS_CONVERSION_LABEL;
  return `${ADS_CONVERSION_ID}/${ADS_CONVERSION_LABEL}`;
};

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

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID || '777622852092389';

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
export const trackAdsConversion = ({
  value,
  currency,
  transactionId,
} = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  const payload = { send_to: getAdsSendTo() };
  if (value !== undefined) payload.value = value;
  if (currency) payload.currency = currency;
  if (transactionId) payload.transaction_id = transactionId;
  window.gtag('event', 'conversion', payload);
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

// ============================================
// AI Receptionist pilot page (/ai-receptionist)
// ============================================

// Conversion label for the "AI receptionist pilot request" action in Google Ads.
// Accepts just the label or the full AW-.../... send_to value. Until it is set,
// only the generate_lead event fires (visible in GA4 and as a Google Ads event).
const RECEPTIONIST_CONVERSION_LABEL = process.env.NEXT_PUBLIC_GOOGLE_ADS_RECEPTIONIST_LABEL || '';

const getReceptionistSendTo = () => {
  if (!RECEPTIONIST_CONVERSION_LABEL) return null;
  if (RECEPTIONIST_CONVERSION_LABEL.startsWith('AW-')) return RECEPTIONIST_CONVERSION_LABEL;
  return `${ADS_CONVERSION_ID}/${RECEPTIONIST_CONVERSION_LABEL}`;
};

/**
 * Engagement events on the receptionist page (demo plays, form starts, sticky
 * bar taps). Not conversions.
 */
export const trackReceptionistEvent = (name, params = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', name, { event_category: 'ai_receptionist', ...params });
};

/**
 * Pilot form submitted. Sets Enhanced Conversions user data (phone only, the
 * form collects no email) before firing the Google Ads conversion.
 */
export const trackReceptionistPilotConversion = ({ phone, firstName, lastName, variant, industry } = {}) => {
  if (typeof window === 'undefined' || !window.gtag) return;

  const userData = {};
  if (phone) userData.phone_number = phone;
  if (firstName || lastName) {
    userData.address = {};
    if (firstName) userData.address.first_name = firstName;
    if (lastName) userData.address.last_name = lastName;
  }
  if (Object.keys(userData).length > 0) {
    window.gtag('set', 'user_data', userData);
  }

  const sendTo = getReceptionistSendTo();
  if (sendTo) {
    window.gtag('event', 'conversion', { send_to: sendTo });
  }
  window.gtag('event', 'generate_lead', {
    event_category: 'ai_receptionist',
    lead_type: 'pilot',
    variant,
    industry,
  });
};
