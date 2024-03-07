import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  site: 'https://balazsfekete.github.io',
  base: '/astro-site',
  integrations: [mdx()],
  redirects: {
    '/': '/blog',
    '/blog/1': '/blog',
  },
  build: {
    inlineStylesheets: 'never',
  },
})
