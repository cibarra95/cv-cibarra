// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased font-display',
      },
    },
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/i18n',
    'nuxt-og-image',
    '@vueuse/nuxt',
    'nuxt-gtag',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    lazy: false,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        name: 'Español',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: 'i18n.config.ts',
    baseUrl: 'https://cibarra.dev',
  },
  gtag: {
    id: 'GTM-M7XTCK22',
    config: {
      page_title: 'César Ibarra CV',
    },
  },
  site: {
    url: 'https://cibarra.dev',
  },
  compatibilityDate: '2025-02-20',
});
