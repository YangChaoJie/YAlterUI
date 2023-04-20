<template>
  <div style="height: 100px;">
    <YRow :gutter="11" justify="center" tag="div" align="top">
      <div>-----</div>
      <div>dddddd</div>
      <div>sdfsdgsdgsdg </div>
    </YRow>

    <YRow :gutter="11" justify="space-between" tag="div" align="middle">
      <div>-----</div>
      <div>dddddd</div>
      <div>sdfsdgsdgsdg </div>
    </YRow>

    <YRow :gutter="11" justify="space-around" tag="div" align="bottom" :wrap="false">
      <div>-----</div>
      <div>dddddd</div>
      <div>sdfsdgsdgsdg </div>
    </YRow>
  </div>
</template>
<script setup lang="ts">
import { YRow } from 'yalert-ui'
</script>
<style scoped lang="scss">
  ::v-deep(.y-row) {
    height: 100px;
    background-color: burlywood;
    div {
      // flex: 1;
      background-color: aqua;
    }
  }
</style>
