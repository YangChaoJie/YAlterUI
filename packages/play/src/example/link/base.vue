<template>
  <div>
    <y-link href="https://element-plus.org" target="_blank">default</y-link>
    <y-link type="primary">primary</y-link>
    <y-link type="success">success</y-link>
    <y-link type="warning">warning</y-link>
    <y-link type="error">danger</y-link>
    <y-link type="info">info</y-link>
  </div>

  <div style="margin-top: 30px">
    <div>----------disabled-------------</div>
    <y-link href="https://element-plus.org" target="_blank" disabled>default</y-link>
    <y-link type="primary" disabled>primary</y-link>
    <y-link type="success" disabled>success</y-link>
    <y-link type="warning" disabled>warning</y-link>
    <y-link type="error" disabled>danger</y-link>
    <y-link type="info" disabled>info</y-link>
  </div>

  <div style="margin-top: 30px">
    <div>----------underline-------------</div>
    <y-link :underline="false">Without Underline</y-link>
    <y-link>With Underline</y-link>
  </div>

  <div style="margin-top: 30px">
    <div>----------icon-------------</div>
    <y-link :icon="Edit">edit</y-link>
    <y-link>
      check
      <YIcon>
        <icon-view></icon-view>
      </YIcon>
    </y-link>
  </div>
</template>

<script setup lang="ts">
import { YLink, YIcon } from 'yalert-ui'
import { Edit, View as IconView } from '@yalert-ui/icons'
// import { ref } from 'vue';
</script>

<style scoped>
.y-link {
  margin-right: 8px;
}
</style>
