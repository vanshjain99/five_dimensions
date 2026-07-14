import { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogType?: string;
  ogImage?: string;
  ogImageAlt?: string;
  jsonLd?: object | object[];
}

/**
 * Reusable SEO Engine component.
 * Synchronizes HTML document head elements (title, meta tags, links, Open Graph, Twitter Cards, and JSON-LD structured data)
 * dynamically on client-side navigation.
 */
export default function SEO({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=1200&h=675&fit=crop&auto=format&q=60',
  ogImageAlt = 'Five Dimensions Luxury Real Estate Advisory',
  jsonLd,
}: SeoProps) {
  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | Five Dimensions`;

    // Helpers to easily fetch or append meta elements
    const getOrCreateMetaTag = (attrName: string, attrValue: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      return element;
    };

    const getOrCreateLinkTag = (rel: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      return element;
    };

    // 2. Update Description
    const metaDescription = getOrCreateMetaTag('name', 'description');
    metaDescription.setAttribute('content', description);

    // 3. Update Canonical Link
    const canonicalLink = getOrCreateLinkTag('canonical');
    const resolvedCanonical = canonicalUrl || window.location.href;
    canonicalLink.setAttribute('href', resolvedCanonical);

    // 4. Update Open Graph Tags
    const ogTitle = getOrCreateMetaTag('property', 'og:title');
    ogTitle.setAttribute('content', title);

    const ogDesc = getOrCreateMetaTag('property', 'og:description');
    ogDesc.setAttribute('content', description);

    const ogUrl = getOrCreateMetaTag('property', 'og:url');
    ogUrl.setAttribute('content', resolvedCanonical);

    const ogTypeTag = getOrCreateMetaTag('property', 'og:type');
    ogTypeTag.setAttribute('content', ogType);

    const ogImageTag = getOrCreateMetaTag('property', 'og:image');
    ogImageTag.setAttribute('content', ogImage);

    const ogImageAltTag = getOrCreateMetaTag('property', 'og:image:alt');
    ogImageAltTag.setAttribute('content', ogImageAlt);

    // 5. Update Twitter Cards
    const twitterCard = getOrCreateMetaTag('name', 'twitter:card');
    twitterCard.setAttribute('content', 'summary_large_image');

    const twitterTitle = getOrCreateMetaTag('name', 'twitter:title');
    twitterTitle.setAttribute('content', title);

    const twitterDesc = getOrCreateMetaTag('name', 'twitter:description');
    twitterDesc.setAttribute('content', description);

    const twitterImage = getOrCreateMetaTag('name', 'twitter:image');
    twitterImage.setAttribute('content', ogImage);

    // 6. Update JSON-LD Script
    if (jsonLd) {
      let ldScript = document.getElementById('json-ld-seo') as HTMLScriptElement;
      if (!ldScript) {
        ldScript = document.createElement('script');
        ldScript.id = 'json-ld-seo';
        ldScript.type = 'application/ld+json';
        document.head.appendChild(ldScript);
      }
      ldScript.textContent = JSON.stringify(jsonLd);
    } else {
      const ldScript = document.getElementById('json-ld-seo');
      if (ldScript) {
        ldScript.remove();
      }
    }
  }, [title, description, canonicalUrl, ogType, ogImage, ogImageAlt, jsonLd]);

  return null;
}
