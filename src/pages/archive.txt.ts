import { getAllPosts, formatArchiveDate, postPath, typeLabel } from '../lib/posts';
import { SITE } from '../site';

export async function GET() {
  const posts = await getAllPosts();
  const lines = [
    `${SITE.name} archive — ${SITE.url}`,
    '',
    ...posts.map((entry) => {
      const d = formatArchiveDate(entry.data.date);
      const tag = typeLabel(entry.data.type);
      return `${d} — ${entry.data.title} (${tag}) ${postPath(entry)}`;
    }),
    '',
  ];

  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
