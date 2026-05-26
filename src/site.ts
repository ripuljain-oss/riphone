/** Canonical site identity — single source for URLs and copy. */
export const SITE = {
  url: 'https://riphone.org',
  name: 'riphone',
  description:
    'A quiet log of notes about software, tools, and reading on screens.',
  author: 'Ripul Jain',
  xHandle: '@bmbyslm',
  xUrl: 'https://x.com/bmbyslm',
  sponsorEmail: 'sponsor@riphone.org',
} as const;

export const SPONSOR_MAILTO = `mailto:${SITE.sponsorEmail}?subject=${encodeURIComponent('Sponsorship — week of …')}`;
