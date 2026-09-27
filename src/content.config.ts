import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // dorsalia / dorsalfin / ioby
    brand: z.enum(['dorsalia', 'dorsalfin', 'ioby']).default('dorsalia'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
