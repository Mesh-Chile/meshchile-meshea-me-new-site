import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { glob } from 'astro/loaders';

const operators = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/operators' }),
  schema: z.object({
    displayName: z.string(),
    alias: z.array(z.string()).optional(),

    location: z.object({
      region: z.string(),
      commune: z.string().optional(),
      precision: z.enum(['exact', 'approximate', 'commune', 'region']),
      coords: z.tuple([z.number(), z.number()]).optional(),
    }).refine(
      (l) => l.precision === 'region' || l.precision === 'commune' || l.coords !== undefined,
      { message: 'coords requerido si precision es exact o approximate' }
    ),

    frameworks: z.array(z.enum(['meshtastic', 'meshcore'])),

    role: z.array(z.enum(['operator', 'coordinator', 'contributor'])).default(['operator']),

    nodes: z.array(z.object({
      shortName: z.string().max(4),
      longName: z.string(),
      hardware: z.string(),
      role: z.enum(['client', 'router', 'repeater', 'router_late', 'tracker']),
      framework: z.enum(['meshtastic', 'meshcore']),
      active: z.boolean().default(true),
    })).optional(),

    contact: z.object({
      telegram: z.string().nullable().optional(),
      foro: z.string().nullable().optional(),
      email: z.string().email().nullable().optional(),
      website: z.string().url().nullable().optional(),
      discord: z.string().nullable().optional(),
    }).default({}),

    availability: z.object({
      dmOpen: z.boolean().default(false),
      helpsNewcomers: z.boolean().default(false),
      covers: z.array(z.string()).optional(),
    }).default({}),

    joinedAt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = {
  docs: defineCollection({ loader: docsLoader(), schema: docsSchema() }),
  operators,
};
