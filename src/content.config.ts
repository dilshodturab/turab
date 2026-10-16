// Content collection — the entire posts system lives in one file.
// Astro scans the /posts directory at the project ROOT at build time and
// generates /posts/ (index) and /posts/[slug]/ (per file) automatically.
// You write the .md file and git push; there is nothing else to do.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  // Every *.md file dropped into /posts/ becomes a post. No manual links.
  loader: glob({ pattern: '**/*.md', base: './posts' }),
  schema: z.object({
    // Title shown in the listing; if absent, the filename is used (fallback
    // is applied in posts/index.astro — frontmatter title is preferred).
    title: z.string().optional(),
    // Date drives sort order (newest first) and the date column.
    date: z.coerce.date(),
    // One-line description under the title row.
    description: z.string().optional(),
    // Optional: true hides the post from the /posts listing entirely.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
