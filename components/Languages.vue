<script setup lang="ts">
defineOptions({
  name: 'Languages',
});

const { t } = useI18n();
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('languages.title') }}
    </h2>
    <span class="inline-flex items-center gap-x-1 font-semibold leading-none">
      Inglés
      <UBadge color="primary" variant="soft"> B1</UBadge>
    </span>
    <span class="inline-flex items-center gap-x-1 font-semibold leading-none">
      Español
      <UBadge color="primary" variant="soft"> Nativo</UBadge>
    </span>
  </section>
</template>


