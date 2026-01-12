const ADS_CONVERSION_ID = 'AW-10872232955';

/**
 * Track Google Ads conversion event
 * Use this for successful completions (booking confirmed, signup completed)
 */
export const trackAdsConversion = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', { send_to: ADS_CONVERSION_ID });
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
 * Track book demo button click (engagement only, NOT a conversion)
 * Conversion should only fire when demo is actually booked (handled in BookingModal)
 */
export const trackDemoClick = (source = 'unknown') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  window.gtag('event', 'demo_click', {
    event_category: 'CTA',
    event_label: source
  });
};
