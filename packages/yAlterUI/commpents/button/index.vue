<template>
  <button class="my-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
defineEmits(['click']);
</script>

<style scoped>
.my-button {}
</style>
