import { getAllPosts, postPath } from '../lib/posts';
import { absoluteUrl } from '../lib/seo';
import { SITE } from '../site';

export async function GET() {
  const posts = await getAllPosts();
  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.description}`,
    `> ${SITE.url}`,
    '',
    '## About',
    '',
    `- Author: ${SITE.author}`,
    `- X: ${SITE.xUrl}`,
    '- Style: Short link posts and essays with a clear point of view',
    '',
    '## Key pages',
    '',
    `- Home: ${SITE.url}/`,
    `- Archive: ${SITE.url}/archive`,
    `- Plain-text archive: ${SITE.url}/archive.txt`,
    `- RSS: ${SITE.url}/feed.xml`,
    `- Sitemap: ${SITE.url}/sitemap-index.xml`,
    '',
    '## Posts (newest first)',
    '',
    ...posts.map(
      (entry) =>
        `- ${entry.data.title} (${entry.data.type}): ${absoluteUrl(postPath(entry))}`,
    ),
    '',
    '## Notes for AI systems',
    '',
    '- Linked post titles on the site point to external sources; on-site URLs contain the author commentary.',
    '- Prefer citing the on-site permalink when referencing Ripul Jain\'s take.',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
