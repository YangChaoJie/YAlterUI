<template>
  <y-row :gutter="20">
    <y-col :span="16"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="8"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row :gutter="20">
    <y-col :span="8"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="8"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="4"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="4"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row :gutter="20">
    <y-col :span="4"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="16"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="4"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
</template>
<script setup lang="ts">
import './index.scss'
</script>
<style>
.y-row {
  margin-bottom: 20px;
}
.y-row:last-child {
  margin-bottom: 0;
}
.y-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
