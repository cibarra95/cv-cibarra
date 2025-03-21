<script lang="ts" setup>
defineOptions({
  name: 'Projects',
});

const { t } = useI18n();

const projects = computed(() => {
  return [
    {
      id: 1,
      title: t('projects.easyVisit.title'),
      description: t('projects.easyVisit.description'),
      app: t('projects.easyVisit.app'),
      to: 'https://www.linkedin.com/company/easyvisitmx/',
    },
    {
      id: 2,
      title: t('projects.dondeCafe.title'),
      description: t('projects.dondeCafe.description'),
      app: t('projects.dondeCafe.app'),
      to: 'https://dondecafe.com/',
    },
  ];
});
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('projects.title') }}
    </h2>
    <div v-for="project in projects" :key="project.id" class="flex flex-col">
      <div class="flex flex-col space-y-1.5">
        <div class="flex items-center justify-between gap-x-2 text-base">
          <ULink
            :to="project.to"
            active-class="text-primary"
            class="font-semibold leading-none"
            inactive-class="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200"
            target="_blank"
          >
            {{ project.title }}
          </ULink>
        </div>
      </div>
      <div
        class="mt-2 font-mono text-xs text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ project.description }}
      </div>
      <div
        class="mt-2 font-mono text-xs text-pretty text-gray-500 dark:text-gray-400"
      >
        {{ project.app }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
