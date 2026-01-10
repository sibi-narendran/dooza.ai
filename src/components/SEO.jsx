import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, image, type = 'website', noindex = false }) => {
  const siteName = 'Dooza';
  const siteUrl = 'https://dooza.ai';
  
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullImage = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/images/dashboard.webp`;
    
  const resolvedCanonical = canonicalUrl || siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={resolvedCanonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={resolvedCanonical} />
      
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
    </Helmet>
  );
};

export default SEO;
