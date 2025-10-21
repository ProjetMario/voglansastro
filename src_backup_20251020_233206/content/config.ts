import { defineCollection, z } from 'astro:content';

const properties = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    type: z.enum(['maison', 'appartement', 'terrain', 'local-commercial']),
    ville: z.string(),
    surface: z.number(),
    pieces: z.number().optional(),
    prix: z.number(),
    etat: z.enum(['neuf', 'excellent', 'bon', 'a-renover']),
    images: z.array(z.string()),
    energie: z.enum(['A', 'B', 'C', 'D', 'E', 'F', 'G']).optional(),
    description: z.string(),
    mapUrl: z.string().optional(),
    badges: z.array(z.enum(['nouveau', 'exclusivite', 'vendu', 'sous-offre'])).default([]),
    featured: z.boolean().default(false),
    publishedAt: z.date(),
  }),
});

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.date(),
    updatedAt: z.date().optional(),
    author: z.string().default('L\'Agence de Voglans'),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    location: z.string(),
    rating: z.number().min(1).max(5),
    date: z.date(),
    type: z.enum(['vente', 'achat', 'estimation']),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  properties,
  blog,
  testimonials,
};
