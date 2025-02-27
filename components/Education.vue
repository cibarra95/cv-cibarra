<script setup lang="ts">
defineOptions({
  name: 'Education',
});

const { t } = useI18n();
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('education.title') }}
    </h2>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <ULink
            class="font-semibold leading-none"
            inactive-class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            active-class="text-primary"
            to="https://www.inesdi.com/"
            target="_blank"
          >
            {{ t('education.school') }}
          </ULink>
          <span class="text-sm tabular-nums text-gray-500">2024 -2025</span>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-sm text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ t('education.career') }}
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <ULink
              class="font-semibold leading-none"
              inactive-class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              active-class="text-primary"
              to="https://www.iberoleon.mx/"
              target="_blank"
          >
            {{ t('education.schoolTwo') }}
          </ULink>
          <span class="text-sm tabular-nums text-gray-500">2013 -2019</span>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-sm text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ t('education.careerTwo') }}
      </div>
    </div>
    <h2 class="text-xl font-bold">
      {{ t('education.course') }}
    </h2>
    <div class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <ULink
              class="font-semibold leading-none"
              inactive-class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
              active-class="text-primary"
              to="https://devf.la/"
              target="_blank"
          >
            {{ t('education.schoolThree') }}
          </ULink>
          <span class="text-sm tabular-nums text-gray-500">2020 -2021</span>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-sm text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ t('education.courseName') }}
      </div>
    </div>
  </section>
</template>


