<template>
  <div>{{ props.direction }}</div>
</template>

<script lang="ts" setup>
// vue 3.3 可以从外部导入 props 类型 
// withDefaults defineProps 智能在set up使用
import { SpaceProps } from './props';
defineOptions({
  name: 'YSpace'
})

const props = withDefaults(defineProps<SpaceProps>(), {
  direction: 'horizontal'
})
</script>
