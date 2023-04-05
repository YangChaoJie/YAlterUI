<template>
       <y-button type="primary" @click="btnToastClick">一般提示</y-button>
</template>
<script setup lang="ts">
import { YToast } from 'yalert-ui';
const btnToastClick = () => {
  // YToast.open('一些提示')
  YToast.loading('hello YToast', 1000)
}
</script>
