<script lang="ts" setup>
defineOptions({
  name: 'LenguageSelect',
});

type Locale = 'es' | 'en';

const { setLocale } = useI18n();
const items = ref([
  {
    value: 'es',
    icon: 'i-circle-flags:lang-es-mx',
  },
  {
    value: 'en',
    icon: 'i-circle-flags:lang-en-us',
  },
]);
const value = ref(items.value[0]?.value);

const icon = computed(
  () => items.value.find((item) => item.value === value.value)?.icon,
);

const setLanguage = (locale: string) => {
  console.log(locale);
  setLocale(locale as Locale);
};
</script>

<template>
  <USelect
    v-model="value"
    :icon="icon"
    :items="items"
    color="neutral"
    selected-icon="i-ph:dot-outline-duotone"
    variant="soft"
    @update:model-value="setLanguage"
  />
</template>
