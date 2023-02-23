import { defineConfig } from 'astro/config'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import mdx from '@astrojs/mdx'

// https://astro.build/config
export default defineConfig({
  markdown: {
    drafts: true,
    gfm: true
  },
  integrations: [preact(), tailwind(), mdx()],
  vite: {
    ssr: {
      noExternal: ['path-to-regexp', 'tinacms']
    }
  },
  site: process.env.SITE_URL || process.env.CF_PAGES_URL || 'http://localhost:3000'
})
