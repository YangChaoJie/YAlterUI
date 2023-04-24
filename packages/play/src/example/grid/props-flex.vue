<template>
  <y-row class="row-bg">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row class="row-bg" justify="center">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row class="row-bg" justify="end">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row class="row-bg" justify="space-between">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row class="row-bg" justify="space-around">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
  </y-row>
  <y-row class="row-bg" justify="space-evenly">
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple-light" /></y-col>
    <y-col :span="6"><div class="grid-content ep-bg-purple" /></y-col>
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
