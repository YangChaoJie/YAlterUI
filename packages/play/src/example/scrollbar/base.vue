<template>
  <y-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </y-scrollbar>
</template>

<script setup lang="ts">
import { YScrollbar } from 'yalert-ui'
</script>
<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--y-color-primary-light-9);
  color: var(--y-color-primary);
}
</style>
