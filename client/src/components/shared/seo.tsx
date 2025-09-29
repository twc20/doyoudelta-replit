import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = "website",
  ogImage = "https://deltatire.com/og-image.jpg",
  structuredData
}: SEOProps) {
  useEffect(() => {
    // Set page title
    document.title = title;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', 'Delta Tire', true);
    
    if (canonical) {
      setMetaTag('og:url', canonical, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // Canonical link
    if (canonical) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', canonical);
    }

    // Structured data
    if (structuredData) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(structuredData);
    }
  }, [title, description, keywords, canonical, ogType, ogImage, structuredData]);

  return null;
}

// Local Business Structured Data
export const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  "name": "Delta Tire",
  "description": "Professional tire service, auto repair, and automotive care across the Four Corners region. ASE certified technicians serving New Mexico and Arizona.",
  "url": "https://deltatire.com",
  "logo": "https://deltatire.com/delta-tire-logo.png",
  "image": "https://deltatire.com/og-image.jpg",
  "telephone": "+1-505-287-7946",
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Debit Card, Financing",
  "areaServed": [
    {
      "@type": "City",
      "name": "Grants",
      "containedInPlace": {
        "@type": "State",
        "name": "New Mexico"
      }
    },
    {
      "@type": "City",
      "name": "Gallup",
      "containedInPlace": {
        "@type": "State",
        "name": "New Mexico"
      }
    },
    {
      "@type": "City",
      "name": "Farmington",
      "containedInPlace": {
        "@type": "State",
        "name": "New Mexico"
      }
    },
    {
      "@type": "City",
      "name": "Eagar",
      "containedInPlace": {
        "@type": "State",
        "name": "Arizona"
      }
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Automotive Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tire Sales & Service"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Auto Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Oil Change & Maintenance"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Brake Repair"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Wheel Alignment"
        }
      }
    ]
  },
  "location": [
    {
      "@type": "Place",
      "name": "Delta Tire - Grants",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "833 E Sante Fe Ave",
        "addressLocality": "Grants",
        "addressRegion": "NM",
        "postalCode": "87020",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.1478,
        "longitude": -107.8528
      },
      "telephone": "+1-505-287-7946",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "07:00",
          "closes": "17:00"
        }
      ]
    },
    {
      "@type": "Place",
      "name": "Delta Tire - Gallup",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "501 US-491",
        "addressLocality": "Gallup",
        "addressRegion": "NM",
        "postalCode": "87301",
        "addressCountry": "US"
      },
      "telephone": "+1-505-722-2945",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    },
    {
      "@type": "Place",
      "name": "Delta Tire - Farmington",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4650 E Main St",
        "addressLocality": "Farmington",
        "addressRegion": "NM",
        "postalCode": "87402",
        "addressCountry": "US"
      },
      "telephone": "+1-505-325-4500",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    },
    {
      "@type": "Place",
      "name": "Delta Tire - Eagar",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "50 W Central Ave",
        "addressLocality": "Eagar",
        "addressRegion": "AZ",
        "postalCode": "85925",
        "addressCountry": "US"
      },
      "telephone": "+1-928-333-3730",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "08:00",
          "closes": "17:00"
        }
      ]
    }
  ]
};
