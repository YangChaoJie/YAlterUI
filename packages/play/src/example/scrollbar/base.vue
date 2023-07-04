<template>
  <y-scrollbar height="400px">
    <p v-for="item in 20" :key="item" class="scrollbar-demo-item">{{ item }}</p>
  </y-scrollbar>
  
  <div>
    <y-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in 50" :key="item" class="scrollbar-demo-item1">
        {{ item }}
      </p>
    </div>
  </y-scrollbar>
  </div>
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

.scrollbar-flex-content {
  display: flex;
}
.scrollbar-demo-item1 {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--y-color-danger-light-9);
  color: var(--y-color-danger);
}
</style>
