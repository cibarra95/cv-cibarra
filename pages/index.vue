<script lang="ts" setup>
defineOptions({
  name: 'Index',
});
</script>

<template>
  <section class="mx-auto w-full max-w-2xl space-y-8 print:space-y-6">
    <Intro />
    <About />
    <WorkExperience />
    <Education />
    <Skills />
    <div class="grid sm:grid-cols-2 gap-8 print:gap-8 print:grid-cols-2">
      <Strengths />
      <Languages />
    </div>
  </section>
</template>

<style lang="scss" scoped></style>
