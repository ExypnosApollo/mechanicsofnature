import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const boek = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/boek' }),
  schema: z.object({
    titel: z.string(),
    deel: z.string(),
    volgorde: z.number(),
    vereist: z.array(z.string()).default([]),
  }),
});

export const collections = { boek };