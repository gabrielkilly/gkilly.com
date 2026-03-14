import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base:    './src/content/blog',
  }),
  schema: z.object({
    title:       z.string(),
    description: z.string(),
    date:        z.coerce.date(),
    category:    z.enum(['homelab', 'music', 'software-engineering', 'culture']),
    tags:        z.array(z.string()).default([]),
    draft:       z.boolean().default(false),
  }),
});

export const collections = { blog };
