import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://balazsfekete.github.io',
  base: '/astro-page',
  integrations: [mdx()],
  redirects: {
    '/': 'astro-page/blog',
    '/blog/1': 'astro-page/blog',
  },
  build: {
    inlineStylesheets: 'never',
  },
})
