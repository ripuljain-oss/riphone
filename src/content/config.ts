import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    type: z.enum(['essay', 'linked', 'notes', 'review']),
    tags: z.array(z.string()).default([]),
    star: z.boolean().default(false),
    linkUrl: z.string().url().optional(),
    linkAuthor: z.string().optional(),
  }),
});

export const collections = { posts };
