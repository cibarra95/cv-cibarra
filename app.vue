<script lang="ts" setup>
import * as locales from '@nuxt/ui/locale';

defineOptions({
  name: 'App',
});

const { locale } = useI18n();
const { t } = useI18n();
const lang = computed(() => locales[locale.value].code);
const dir = computed(() => locales[locale.value].dir);
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
});

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  meta: [
    {
      name: 'google-site-verification',
      content: 'JoKrz9s2bSHW7isBrQVGqTd4P-uC8PXkjTsJwf0OxxU',
    },
    {
      name: 'description',
      content:
        'Online CV of Cesar Ibarra Jimenez, Frontend Developer specializing in Nuxt.js, Tailwind CSS, and modern web development.',
    },
    {
      name: 'keywords',
      content:
        'Cesar Ibarra Jimenez, cibarra, frontend developer, Nuxt, Tailwind, CV, web developer',
    },
    {
      property: 'og:title',
      content: 'Cesar Ibarra Jimenez | Frontend Developer',
    },
    {
      property: 'og:description',
      content: 'Explore the online CV and portfolio of Cesar Ibarra Jimenez.',
    },
    { property: 'og:url', content: 'https://www.cibarra.dev' },
  ],
});

useSeoMeta({
  title: t('seo.title'),
  ogTitle: t('seo.title'),
  description: t('seo.description'),
  ogDescription: t('seo.description'),
});

defineOgImageComponent('CustomTemplate', {
  title: t('seo.title'),
  description: t('seo.description'),
});
</script>

<template>
  <UApp>
    <Html>
      <Head>
        <!-- Google Tag Manager -->
        <script>
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js',
            });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-M7XTCK22');
        </script>
        <!-- End Google Tag Manager -->
        <meta
          content="JoKrz9s2bSHW7isBrQVGqTd4P-uC8PXkjTsJwf0OxxU"
          name="google-site-verification"
        />
        <Title>{{ t('seo.title') }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :href="link.href"
            :hreflang="link.hreflang"
            :rel="link.rel"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
            :id="meta.id"
            :content="meta.content"
            :property="meta.property"
          />
        </template>
      </Head>
      <Body>
        <Navbar />
        <main
          class="md:p-16 mx-auto overflow-auto p-4 print:p-12 relative scroll-my-12"
        >
          <UApp :locale="locales[locale]">
            <NuxtPage />
          </UApp>
        </main>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7XTCK22"
            style="display: none; visibility: hidden"
            width="0"
          ></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
      </Body>
    </Html>
  </UApp>
</template>
