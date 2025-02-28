<script lang="ts" setup>
defineOptions({
  name: 'Skills',
});

const skills = [
  'HTML',
  'CSS/SASS',
  'Figma',
  'TailwindCSS',
  'JavaScript',
  'TypeScript',
  'Vue/Nuxt',
  'Astro',
  'Webpack/Vite',
  'Cypress',
  'Jest/Vitest',
  'Eslint/Prettier',
  'NodeJs',
  'PHP/Laravel',
  'GraphQL/REST API',
  'Git',
  'Github',
  'Gitlab',
  'GitHub Actions/GitLab CI',
  'Vercel',
  'Docker',
  'Kubernetes',
];

const { t } = useI18n();
</script>

<template>
  <section class="flex flex-col gap-y-3">
    <h2 class="text-xl font-bold">
      {{ t('skills.title') }}
    </h2>
    <div class="flex flex-wrap gap-1">
      <UBadge
        v-for="(skill, index) in skills"
        :key="index"
        color="neutral"
        size="sm"
        variant="soft"
      >
        {{ skill }}
      </UBadge>
    </div>
  </section>
</template>
