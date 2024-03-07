import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  redirects: {
    '/': '/blog',
    '/blog/1': '/blog',
  },
  build: {
    inlineStylesheets: 'never',
  },
})
