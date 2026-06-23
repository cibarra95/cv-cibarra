<script lang="ts" setup>
defineOptions({
  name: 'Intro',
});

const { t } = useI18n();

const socialLinks = [
  {
    id: 'email',
    icon: 'ph-envelope-simple-duotone',
    to: 'mailto:hello@cibarra.dev',
  },
  {
    id: 'phone',
    icon: 'ph-phone-duotone',
    to: 'tel:+524773677299',
  },
  {
    id: 'github',
    icon: 'ph-github-logo-duotone',
    to: 'https://github.com/cibarra95',
  },
  {
    id: 'linkedin',
    icon: 'ph-linkedin-logo-duotone',
    to: 'https://www.linkedin.com/in/cibarra95/',
  },
  {
    id: 'instagram',
    icon: 'ph-instagram-logo-duotone',
    to: 'https://www.instagram.com/pony_ibarra/',
  },
];
</script>

<template>
  <div class="flex items-center justify-between space-x-5">
    <div class="flex-1 space-y-2.5">
      <h1 class="text-2xl font-bold">César Ibarra Jiménez</h1>
      <p
        class="max-w-md font-mono text-xs lg:text-sm text-gray-500 text-pretty dark:text-gray-400 text-justify"
      >
        {{ t('intro.summary') }}
      </p>
      <p
        class="my-4 max-w-md items-center font-mono text-xs text-gray-500 text-pretty dark:text-gray-400"
      >
        <ULink
          class="inline-flex items-center leading-none hover:underline"
          target="_blank"
          to="https://maps.apple.com/place?q=Le%C3%B3n&ll=21.1222267%2C-101.6632405&auid=5521045738737275844&lsp=7618&address=Le%C3%B3n%2C%20Gto.%2C%20M%C3%A9xico"
        >
          <UIcon
            class="h-4 w-4 mr-1.5 print:hidden flex"
            name="ph:map-pin-duotone"
          />
          León, Gto. México, UTC-6
        </ULink>
      </p>
      <div
        class="flex print:hidden gap-x-2 pt-1 font-mono text-sm text-gray-500 dark:text-gray-400"
      >
        <UButton
          v-for="link in socialLinks"
          :key="link.id"
          :to="link.to"
          color="neutral"
          size="lg"
          target="_blank"
          variant="soft"
        >
          <template #leading>
            <UIcon
              :name="link.icon"
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
            />
          </template>
        </UButton>
      </div>
    </div>

    <div class="relative print:hidden flex overflow-hidden rounded-xl size-28">
      <NuxtImg alt="César Ibarra" src="cibarra.png" />
    </div>
  </div>
</template>
