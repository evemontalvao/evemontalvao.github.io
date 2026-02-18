import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			pubDate: z.coerce.date(),
			updatedDate: z.coerce.date().optional(),
			heroImage: z.object({
				source: image().optional(),
				url: z.string().optional(),
				width: z.number(),
				height: z.number(),
				medium: z.string(),
				alt: z.string()
			}),
			images: z.array(
				z.object({
					source: image().optional(),
					url: z.string().optional(),
					width: z.number(),
    			height: z.number(),
					medium: z.string(),
					description: z.string(),
					alt: z.string()
				})
			).optional(),
			notes: z.array(z.string()).optional(),
		}),
});

export const collections = { blog };
