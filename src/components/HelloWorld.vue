<script setup lang="ts">
defineProps<{ msg: string }>()

const { availableLocales, locale } = useI18n()

function toggleLanguage() {
  const currentIndex = availableLocales.indexOf(locale.value)
  const newLocale = availableLocales[(currentIndex + 1) % availableLocales.length]

  if (newLocale) locale.value = newLocale
}
</script>

<template>
  <button type="button" @click="toggleLanguage">
    {{ $t('Switch language') }}
  </button>
  <h3>{{ $t(msg) }}</h3>
</template>
