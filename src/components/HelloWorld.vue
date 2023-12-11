<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps<{ msg: string }>()

const { availableLocales, locale } = useI18n()

function toggleLanguage() {
  const currentIndex = availableLocales.indexOf(locale.value)
  const newIndex = (currentIndex + 1) % availableLocales.length
  locale.value = availableLocales[newIndex]
}
</script>

<template>
  <button type="button" @click="toggleLanguage">
    {{ $t('Change language') }}
  </button>
  <h3>{{ $t(msg) }}</h3>
</template>
