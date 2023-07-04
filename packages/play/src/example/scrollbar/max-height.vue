<template>
  <y-button @click="add">Add Item</y-button>
  <y-button @click="onDelete">Delete Item</y-button>
  <y-scrollbar max-height="400px">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </y-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { YScrollbar } from 'yalert-ui'
const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
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
