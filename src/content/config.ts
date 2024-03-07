import { z, defineCollection } from 'astro:content';

// const blog = defineCollection({
//     type: 'content',
//     schema: z.object({
//         title: z.string(),
//         excerpt: z.string(),
//         pubDate: z.coerce.date(),
//         updatedDate: z.coerce.date().optional(),
//         image: z.object({
//             src: z.string(),
//             alt: z.string(),
//         }),
//         tags: z.array(z.string()).optional(),
//     }),
// });

const blog = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        excerpt: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        thumbnail: z.object({
            src: image(),
            alt: z.string(),
        }),
        tags: z.array(z.string()).optional(),
    }),
});

export const collections = { blog };