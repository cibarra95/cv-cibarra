<script setup lang="ts">
defineOptions({
  name: 'About',
});

const { t } = useI18n();
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">{{ t('about.title') }}</h2>
    <p class="font-mono text-xs lg:text-sm text-gray-500 text-pretty dark:text-gray-400 text-justify">
      {{ t('about.text') }}
    </p>
    <p class="font-mono text-xs lg:text-sm text-gray-500 text-pretty dark:text-gray-400 text-justify">
      {{ t('about.skills') }}
    </p>
  </section>
</template>


