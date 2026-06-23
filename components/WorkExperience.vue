<script lang="ts" setup>
import { computed } from 'vue';
import type { ExperienceItem } from '~/types/ExperienceItem.types';

defineOptions({
  name: 'WorkExperience',
});

const { t } = useI18n();

const experiences = computed((): ExperienceItem[] => {
  return [
    {
      company: 'Ditech',
      website: 'https://it.ditech.es/',
      location: t('common.label.remote'),
      position: 'FullStack Developer',
      time: '05/2025 - 05/2026',
      description: t('workExperience.works.ditech.description'),
    },
    {
      company: 'Topfluenz',
      website: '',
      location: t('common.label.remote'),
      position: 'FrontEnd Developer',
      time: '01/2024 - 02/2025',
      description: t('workExperience.works.topfluenz.description'),
    },
    {
      company: 'Premo',
      website: 'https://www.premo.com/',
      location: t('common.label.office'),
      position: 'Fullstack Developer',
      time: '09/2022 - 11/2023',
      description: t('workExperience.works.premo.description'),
    },
    {
      company: 'Joinbrands',
      website: 'https://joinbrands.com/',
      location: t('common.label.remote'),
      position: 'Junior FrontEnd Developer',
      time: '08/2021 - 09/2022',
      description: t('workExperience.works.devsalsa.description'),
    },
  ];
});
</script>

<template>
  <section class="flex flex-col gap-y-5">
    <h2 class="text-xl font-bold">
      {{ t('workExperience.title') }}
    </h2>
    <WorkExperienceItem
      v-for="item in experiences"
      :key="item.company"
      :item="item"
    />
  </section>
</template>
