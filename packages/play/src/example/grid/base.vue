<template>
  <div>
    <y-row>
      <y-col :span="24">
        <div class="grid-content ep-bg-purple-dark" />
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="12">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="12">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="8">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="8">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
      <y-col :span="8">
        <div class="grid-content ep-bg-purple" />
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
      <y-col :span="6">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="6">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
    </y-row>
    <y-row>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple" />
      </y-col>
      <y-col :span="4">
        <div class="grid-content ep-bg-purple-light" />
      </y-col>
    </y-row>
  </div>
</template>
<script setup lang="ts">
// import { YRow, YCol } from 'yalert-ui'
import './index.scss'
</script>
<style scoped lang="scss">
// ::v-deep(.y-row) {
//   height: 100px;
//   background-color: burlywood;

//   div {
//     // flex: 1;
//     background-color: aqua;
//   }
// }

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
