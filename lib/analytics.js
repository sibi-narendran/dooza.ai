const ADS_CONVERSION_ID = 'AW-10872232955';

// ============================================
// Facebook Pixel Event Tracking
// Pixel ID: 677827290037883
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

/**
 * Track Facebook Pixel Schedule event
 * Use for: Booking demo, free setup calls
 */
export const trackFBSchedule = () => {
  if (typeof window === 'undefined' || !window.fbq) return;
  window.fbq('track', 'Schedule');
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
