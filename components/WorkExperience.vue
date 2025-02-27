<script setup lang="ts">
import { computed } from 'vue';
import type { ExperienceItem } from '~/types/ExperienceItem.types';

defineOptions({
  name: 'WorkExperience',
});

const { t } = useI18n();

const experiences = computed((): ExperienceItem[] => {
  return [
    {
      company: 'Topfluenz',
      website: 'https://www.toplfuenz.com/',
      location: t('common.label.remote'),
      position: 'Senior FrontEnd Developer',
      time: t('workExperience.time.topfluenz.lapse'),
      description: t('workExperience.works.topfluenz.description'),
    },
    {
      company: 'Premo',
      website: 'https://www.premo.com/',
      location: t('common.label.office'),
      position: 'Senior FrontEnd Lead Developer',
      time: '09/2022 - 11/2023',
      description: t('workExperience.works.premo.description'),
    },
    {
      company: 'Devsalsa',
      website: 'https://www.devsalsa.com/',
      location: t('common.label.remote'),
      position: 'FrontEnd Developer',
      time: '08/2021 - 09/2022',
      description: t('workExperience.works.devsalsa.description'),
    },
  ];
});
</script>

<template>
  <section class="flex flex-col gap-y-5">
    <h2 class="text-xl font-bold ">
      {{ t('workExperience.title') }}
    </h2>
    <WorkExperienceItem
      v-for="item in experiences"
      :key="item.company"
      :item="item"
    />
  </section>
</template>


