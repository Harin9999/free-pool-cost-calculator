import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  canonical, 
  keywords = 'pool cost calculator, pool calculator, swimming pool cost, pool maintenance cost',
  ogImage = 'https://www.freepoolcostcalculator.com/og-image.jpg',
  schema
}: SEOProps) {
  const siteTitle = 'Free Pool Cost Calculator';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;
  const domain = 'https://www.freepoolcostcalculator.com';
  const canonicalUrl = canonical ? `${domain}${canonical}` : domain;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content="Free Pool Cost Calculator" />
      <link rel="home" href={domain} />
      
      {/* Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}