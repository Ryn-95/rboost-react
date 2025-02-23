import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "RBoost Digital - Agence Web & Marketing Digital",
  description = "Agence web spécialisée dans la création de sites web, le référencement SEO, la publicité en ligne et le marketing digital. Boostez votre présence en ligne !",
  keywords = "agence web, création site web, développement web, SEO, référencement naturel, marketing digital",
  image = "/og-image.jpg",
  url = "",
  type = "website"
}) => {
  const siteUrl = "https://rboost-react-ryns-projects-df7e5921.vercel.app";
  const fullUrl = `${siteUrl}${url}`;
  const fullImage = `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImage} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO; 