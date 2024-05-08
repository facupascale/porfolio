import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt(), react(), sitemap()],
  site: 'https://facundopascale.dev/',
  i18n: {
    locales: ['en', 'es', 'it'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      es: 'en',
    },
  },
})
