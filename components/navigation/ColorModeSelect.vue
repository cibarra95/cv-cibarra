<script setup>
defineOptions({ name: 'ColorModeSelect' });

const colorMode = useColorMode();

const isDark = computed({
  get() {
    return colorMode.value === 'dark';
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark';
  },
});

const favicon = computed(() => {
  return colorMode.value === 'dark'
    ? '/favicon-dark.png'
    : '/favicon-light.png';
});

useFavicon(favicon);
</script>

<template>
  <ClientOnly v-if="!colorMode?.forced">
    <UButton
      :icon="isDark ? 'i-ph:moon-duotone' : 'i-ph:sun-duotone'"
      color="neutral"
      variant="soft"
      @click="isDark = !isDark"
    />

    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>

<style lang="scss" scoped></style>
