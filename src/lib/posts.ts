import { getCollection, type CollectionEntry } from 'astro:content';

export type PostEntry = CollectionEntry<'posts'>;

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function postSlug(entry: PostEntry): string {
  return slugify(entry.data.title);
}

export function postDate(entry: PostEntry): Date {
  return entry.data.date;
}

export function postPath(entry: PostEntry): string {
  const d = postDate(entry);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, '0');
  const day = String(d.getUTCDate()).padStart(2, '0');
  return `/${y}/${m}/${day}/${postSlug(entry)}`;
}

/** Linked posts: title points at the source; everything else uses the permalink. */
export function postTitleHref(entry: PostEntry): string {
  if (entry.data.type === 'linked' && entry.data.linkUrl) {
    return entry.data.linkUrl;
  }
  return postPath(entry);
}

export function formatDateline(date: Date): string {
  const months = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
  ];
  const m = months[date.getUTCMonth()];
  const d = String(date.getUTCDate()).padStart(2, '0');
  const y = date.getUTCFullYear();
  return `${m} ${d} ${y}`;
}

export function formatArchiveDate(date: Date): string {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  return `${months[date.getUTCMonth()]} ${String(date.getUTCDate()).padStart(2, '0')}`;
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function typeLabel(type: PostEntry['data']['type']): string {
  const labels: Record<PostEntry['data']['type'], string> = {
    essay: 'Essay',
    linked: 'Linked',
    notes: 'Notes',
    review: 'Review',
  };
  return labels[type];
}

export async function getAllPosts(): Promise<PostEntry[]> {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => {
    const diff = postDate(b).getTime() - postDate(a).getTime();
    if (diff !== 0) return diff;
    // Same date? Keep it deterministic: newer filename/id first.
    return b.id.localeCompare(a.id);
  });
}

export async function getPostsFiltered(
  type?: PostEntry['data']['type'] | 'all',
): Promise<PostEntry[]> {
  const posts = await getAllPosts();
  if (!type || type === 'all') return posts;
  return posts.filter((p) => p.data.type === type);
}

export function tagCounts(posts: PostEntry[]): { tag: string; count: number }[] {
  const map = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.data.tags) {
      map.set(t, (map.get(t) ?? 0) + 1);
    }
  }
  return [...map.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count);
}

export function postsByYear(posts: PostEntry[]): Map<number, PostEntry[]> {
  const map = new Map<number, PostEntry[]>();
  for (const p of posts) {
    const y = postDate(p).getUTCFullYear();
    const list = map.get(y) ?? [];
    list.push(p);
    map.set(y, list);
  }
  const sorted = new Map(
    [...map.entries()].sort((a, b) => b[0] - a[0]),
  );
  return sorted;
}
