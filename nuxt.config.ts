export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'id' },
      title: 'Ahmad Daniyal — Portofolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Portofolio Ahmad Daniyal — front-end developer & programmer IoT dari Soreang, Bandung. Neo-brutalism, kode, dan IoT.',
        },
        { name: 'theme-color', content: '#F3EDD9' },
        { name: 'og:type', content: 'website' },
        { name: 'og:site_name', content: 'Ahmad Daniyal' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Space+Grotesk:wght@400;500;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/tentang', '/keahlian', '/proyek', '/game', '/kontak'],
    },
  },
})