<script setup lang="ts">
import type { LocaleObject } from '@nuxtjs/i18n';
import { Translation } from 'vue-i18n';

defineOptions({
  name: 'KeyboardManager',
});

defineShortcuts({
  meta_k: () => {
    isOpen.value = !isOpen.value
  }
})

const { locales, setLocale, t } = useI18n();

const commandPaletteRef = ref();
const isOpen = ref(false);

const modalUi = {
  overlay: 'flex min-h-full items-center justify-center text-center',
};

const languages = locales.value.map((locale: LocaleObject) => ({
  id: locale.code,
  label: locale.name,
  icon: 'i-heroicons-language-20-solid',
  click: () => setLanguage(locale),
}));

const groups = computed(() => {
  return [
    {
      id: 'actions',
      label: t('keyboardManager.commandPalette.groups.actions.title'),
      items: [
        {
          id: 'print',
          label: t('keyboardManager.commandPalette.groups.actions.print'),
          icon: 'i-heroicons-printer',
          click: () => printPage(),
        },
      ],
      ignoreFilters: true,
    },
    {
      id: 'languages',
      label: t('keyboardManager.commandPalette.groups.language.title'),
      items: languages,
      ignoreFilters: true,
    },
  ];
});

function onSelect(option: any) {
  option.click();
}

function printPage() {
  isOpen.value = false;
  setTimeout(() => {
    window.print();
  }, 300);
}

function setLanguage(locale: LocaleObject) {
  setLocale(locale.code);
  isOpen.value = false;
}

function onOpenCommandPalette() {
  isOpen.value = true;
}

defineShortcuts({
  meta_k: {
    handler: () => {
      console.log('meta_k');
     onOpenCommandPalette();
    },
  },
  escape: {
    usingInput: true,
    handler: () => {
      isOpen.value = false;
    },
  },
});
</script>

<template>
  <div>
    <div
      class="fixed right-0 bottom-0 left-0 hidden print:hidden border-t border-t-gray-200 bg-gray-50 p-1 text-center dark:border-t-neutral-700 dark:bg-neutral-800 lg:block"
    >
      <Translation
        class="text-sm text-gray-500 dark:text-gray-400"
        keypath="keyboardManager.text"
        tag="p"
        scope="global"
      >
        <UKbd value="meta"/>
      </Translation>
    </div>
<!--    <UModal v-model="isOpen" :ui="modalUi">-->
<!--      <UCommandPalette-->
<!--        ref="commandPaletteRef"-->
<!--        :groups="groups"-->
<!--        :autoselect="false"-->
<!--        :placeholder="t('keyboardManager.commandPalette.placeholder')"-->
<!--        :autofocus="false"-->
<!--        @update:model-value="onSelect"-->
<!--      />-->
<!--    </UModal>-->


    <UModal v-model="isOpen">
      <UButton
          color="primary"
          variant="solid"
          size="lg"
          class="fixed right-4 bottom-4 flex lg:hidden rounded-full print:hidden"
          @click="onOpenCommandPalette"
      >
        <template #leading>
          <UIcon
              class="h-5 w-5 text-gray-500 dark:text-gray-400"
              name="i-ph-command-duotone"
          />
        </template>
      </UButton>
      <template #content>
        <UCommandPalette
            ref="commandPaletteRef"
            :groups="groups"
            placeholder="Search users..."
            @update:model-value="onSelect"
        />
      </template>
    </UModal>
  </div>
</template>


