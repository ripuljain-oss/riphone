import rss from '@astrojs/rss';
import { getAllPosts, postPath } from '../lib/posts';
import { postDescription } from '../lib/seo';
import { SITE } from '../site';

export async function GET(context: { site: string | undefined }) {
  const posts = (await getAllPosts()).slice(0, 10);
  const site = context.site ?? SITE.url;

  return rss({
    title: SITE.name,
    description: SITE.description,
    site,
    xmlns: { atom: 'http://www.w3.org/2005/Atom' },
    items: posts.map((entry) => ({
      title: entry.data.title,
      pubDate: entry.data.date,
      link: new URL(postPath(entry), site).href,
      description: postDescription(entry),
    })),
    customData: `<author><name>${SITE.author}</name></author>`,
  });
}
