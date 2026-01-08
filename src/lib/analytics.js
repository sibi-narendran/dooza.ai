const ADS_CONVERSION_ID = 'AW-10872232955';

export const trackAdsConversion = () => {
  if (typeof window === 'undefined' || !window.gtag) return;
  window.gtag('event', 'conversion', { send_to: ADS_CONVERSION_ID });
};
