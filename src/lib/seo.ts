import type { CollectionEntry } from 'astro:content';
import { SITE } from '../site';
import { isoDate, postPath } from './posts';

export type PostEntry = CollectionEntry<'posts'>;

const MAX_DESCRIPTION = 160;

/** Strip common Markdown for plain-text meta descriptions. */
export function stripMarkdown(text: string): string {
  return text
    .replace(/^#+\s+/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[*_`]/g, '')
    .replace(/^>\s?/gm, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncate(text: string, max = MAX_DESCRIPTION): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max - 1).replace(/\s+\S*$/, '');
  return `${cut}…`;
}

export function postDescription(entry: PostEntry): string {
  if (entry.data.description) return entry.data.description;
  return truncate(stripMarkdown(entry.body));
}

export function absoluteUrl(path: string): string {
  return new URL(path, SITE.url).href;
}

export function blogPostingJsonLd(
  entry: PostEntry,
  description: string,
): Record<string, unknown> {
  const url = absoluteUrl(postPath(entry));
  const published = entry.data.date.toISOString();

  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: entry.data.title,
    description,
    datePublished: published,
    dateModified: published,
    url,
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: {
      '@type': 'Person',
      name: SITE.author,
      url: SITE.xUrl,
      sameAs: [SITE.xUrl],
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
    inLanguage: 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      name: SITE.name,
      url: SITE.url,
    },
  };

  if (entry.data.linkUrl) {
    schema.citation = entry.data.linkUrl;
  }

  return schema;
}

export function webSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
    inLanguage: 'en-US',
    author: {
      '@type': 'Person',
      name: SITE.author,
      url: SITE.xUrl,
    },
  };
}

export function collectionPageJsonLd(
  name: string,
  path: string,
  description: string,
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.url },
  };
}
