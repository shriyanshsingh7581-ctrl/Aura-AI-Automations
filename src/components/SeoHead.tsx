import React, { useEffect } from 'react';
import { BUSINESS_NAME, OG_IMAGE_URL } from '../data/seoPages';

interface SeoHeadProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogType?: string;
  ogImage?: string;
  jsonLd: Record<string, unknown>;
}

function upsertMetaTag(attrName: 'name' | 'property', attrValue: string, content: string) {
  let element = document.head.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attrName, attrValue);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function upsertCanonicalLink(href: string) {
  let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
}

export const SeoHead: React.FC<SeoHeadProps> = ({
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = OG_IMAGE_URL,
  jsonLd,
}) => {
  useEffect(() => {
    document.title = title;

    upsertMetaTag('name', 'description', description);
    upsertMetaTag(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    upsertCanonicalLink(canonicalUrl);

    // Open Graph
    upsertMetaTag('property', 'og:title', title);
    upsertMetaTag('property', 'og:description', description);
    upsertMetaTag('property', 'og:url', canonicalUrl);
    upsertMetaTag('property', 'og:type', ogType);
    upsertMetaTag('property', 'og:image', ogImage);
    upsertMetaTag('property', 'og:site_name', BUSINESS_NAME);
    upsertMetaTag('property', 'og:locale', 'en_IN');

    // Twitter Card
    upsertMetaTag('name', 'twitter:card', 'summary_large_image');
    upsertMetaTag('name', 'twitter:title', title);
    upsertMetaTag('name', 'twitter:description', description);
    upsertMetaTag('name', 'twitter:image', ogImage);

    // JSON-LD Structured Data
    let scriptEl = document.head.querySelector(
      'script[data-aura-seo="jsonld"]'
    ) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.type = 'application/ld+json';
      scriptEl.setAttribute('data-aura-seo', 'jsonld');
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLd);
  }, [title, description, canonicalUrl, ogType, ogImage, jsonLd]);

  return null;
};
