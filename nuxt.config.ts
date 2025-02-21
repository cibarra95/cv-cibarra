// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      bodyAttrs: {
        class: 'antialiased font-display ',
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
    // https://nuxt.com/modules/ui
    '@nuxt/ui',
    // https://nuxt.com/modules/image
    '@nuxt/image',
    // https://nuxt.com/modules/i18n
    '@nuxtjs/i18n',
    // https://nuxt.com/modules/og-image
    'nuxt-og-image',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English',
        file: 'en.json',
      },
      {
        code: 'es',
        iso: 'es-MX',
        name: 'Español',
        file: 'es.json',
      },
    ],
    defaultLocale: 'en',
    vueI18n: './i18n.config.ts',
    baseUrl: 'https://cibarra.dev',
  },
  site: {
    url: 'https://cibarra.dev',
  },
  compatibilityDate: '2025-02-20',
});