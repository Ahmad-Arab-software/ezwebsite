import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.ezwebsite.nl';
const DEFAULT_IMAGE = '/og-image.png';

type StructuredData = Record<string, unknown> | Array<Record<string, unknown>>;

interface SEOOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: string;
  lang?: 'nl' | 'en';
  structuredData?: StructuredData;
}

const upsertMeta = (attribute: 'name' | 'property', value: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${value}"]`) as HTMLMetaElement | null;

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
};

const upsertCanonical = (href: string) => {
  let element = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
};

const removeManagedStructuredData = () => {
  document
    .querySelectorAll("script[data-managed-seo='true']")
    .forEach((element) => element.remove());
};

export const useSEO = ({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  type = 'website',
  lang,
  structuredData,
}: SEOOptions) => {
  const location = useLocation();
  const structuredDataString = structuredData ? JSON.stringify(structuredData) : '';

  useEffect(() => {
    const resolvedPath = path ?? `${location.pathname}${location.search}`;
    const absoluteUrl = new URL(resolvedPath, SITE_URL).toString();
    const absoluteImage = new URL(image, SITE_URL).toString();
    const locale = lang === 'en' ? 'en_GB' : 'nl_NL';
    const altLocale = lang === 'en' ? 'nl_NL' : 'en_GB';

    document.title = title;
    if (lang) document.documentElement.lang = lang;

    upsertMeta('name', 'description', description);
    upsertMeta('name', 'robots', 'index,follow');
    upsertMeta('property', 'og:site_name', 'ezwebsite');
    upsertMeta('property', 'og:type', type);
    upsertMeta('property', 'og:title', title);
    upsertMeta('property', 'og:description', description);
    upsertMeta('property', 'og:url', absoluteUrl);
    upsertMeta('property', 'og:image', absoluteImage);
    upsertMeta('property', 'og:image:alt', `${title} preview`);
    upsertMeta('property', 'og:locale', locale);
    upsertMeta('property', 'og:locale:alternate', altLocale);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', title);
    upsertMeta('name', 'twitter:description', description);
    upsertMeta('name', 'twitter:image', absoluteImage);
    upsertCanonical(absoluteUrl);

    removeManagedStructuredData();

    if (!structuredDataString) {
      return;
    }

    const entries = Array.isArray(structuredData) ? structuredData : [structuredData];
    entries.forEach((entry, index) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-managed-seo', 'true');
      script.setAttribute('data-seo-index', String(index));
      script.text = JSON.stringify(entry);
      document.head.appendChild(script);
    });

    return () => {
      removeManagedStructuredData();
    };
  }, [description, image, location.pathname, location.search, path, structuredData, structuredDataString, title, type]);
};