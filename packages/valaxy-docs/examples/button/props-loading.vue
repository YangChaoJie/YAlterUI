<template>
  <y-button type="primary" :loading-icon="Eleme" loading @click="copy()">Loading</y-button>
</template>

<script setup lang="ts">
import { Eleme } from '@yalert-ui/icons';
import { useClipboard } from '@vueuse/core'

const { copy } = useClipboard({ source: '12415135' })
</script>
