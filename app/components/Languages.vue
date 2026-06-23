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
    <span class="inline-flex items-center gap-x-2.5 font-semibold leading-none">
      {{ t('languages.spanish') }}
      <UBadge color="neutral" variant="soft">
        {{ t('languages.spanishLevel') }}
      </UBadge>
    </span>
    <span class="inline-flex items-center gap-x-2.5 font-semibold leading-none">
      {{ t('languages.english') }}
      <UBadge color="neutral" variant="soft">
        {{ t('languages.englishLevel') }}
      </UBadge>
    </span>
  </section>
</template>


