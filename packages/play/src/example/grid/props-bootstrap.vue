<template>
  <y-row :gutter="10">
    <y-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple" />
    </y-col>
    <y-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple-light" />
    </y-col>
    <y-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
      <div class="grid-content ep-bg-purple" />
    </y-col>
    <y-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
      <div class="grid-content ep-bg-purple-light" />
    </y-col>
  </y-row>

  <YRow :gutter="20">
    <YCol ref="col" :sm="{ span: 4, offset: 2 }" :md="8" :lg="{ span: 6, offset: 3 }" >
      <div class="grid-content ep-bg-purple-light"></div>
    </YCol>
  </YRow>
</template>
<script setup lang="ts">
import './index.scss'
</script>
<style>
.y-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
