<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const { active } = defineProps<{
  item: any
  active?: boolean
  compact?: boolean | undefined
}>()
const el = ref<HTMLDivElement>()
watchEffect(() => {
  if (active)
    el?.value?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
})
</script>
<template>
   <div
    ref="el"
    border="l-4 transparent" row gap3
    text-left items-center py2 px3
    cursor-pointer select-none
    :class="active ? 'bg-gray5:6' : 'op60 hover:bg-gray5:2 hover:op100'"
  >
    {{ item.searchName || item.name }}
  </div>
</template>
