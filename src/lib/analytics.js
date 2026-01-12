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
 * Track signup button click
 * Fires conversion + custom event for analytics
 */
export const trackSignupClick = (source = 'unknown') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Fire conversion event
  window.gtag('event', 'conversion', { 
    send_to: ADS_CONVERSION_ID,
    event_category: 'engagement',
    event_label: source
  });
  
  // Fire custom event for detailed tracking
  window.gtag('event', 'signup_click', {
    event_category: 'CTA',
    event_label: source,
    value: 1
  });
};

/**
 * Track book demo button click
 * Fires conversion + custom event for analytics
 */
export const trackDemoClick = (source = 'unknown') => {
  if (typeof window === 'undefined' || !window.gtag) return;
  
  // Fire conversion event
  window.gtag('event', 'conversion', { 
    send_to: ADS_CONVERSION_ID,
    event_category: 'engagement',
    event_label: source
  });
  
  // Fire custom event for detailed tracking
  window.gtag('event', 'demo_click', {
    event_category: 'CTA',
    event_label: source,
    value: 1
  });
};
