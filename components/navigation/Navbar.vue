<script lang="ts" setup>
defineOptions({
  name: 'Navbar',
});
</script>

<template>
  <header
    class="print:hidden sticky top-0 z-10 bg-transparent py-2 sm:py-3 backdrop-blur-md h-[61px]"
  >
    <div class="m-[0_auto] max-w-4xl px-6 sm:px-4">
      <nav class="flex items-center justify-end space-x-3">
        <LenguageSelect />
        <ColorModeSelect />
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
