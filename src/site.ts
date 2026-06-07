/** Canonical site identity — single source for URLs and copy. */
export const SITE = {
  url: 'https://riphone.org',
  name: 'riphone',
  description:
    'Sharp takes on software, AI hype, and the tech industry — by Ripul Jain.',
  author: 'Ripul Jain',
  xHandle: '@bmbyslm',
  xUrl: 'https://x.com/bmbyslm',
  sponsorEmail: 'sponsor@riphone.org',
} as const;

export const SPONSOR_MAILTO = `mailto:${SITE.sponsorEmail}?subject=${encodeURIComponent('Sponsorship — week of …')}`;
