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
      </Body>
    </Html>
  </UApp>
</template>
