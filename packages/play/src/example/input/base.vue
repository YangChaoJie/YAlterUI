<template>
  <div>
    <y-input v-model="inputValue"></y-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { YInput } from 'yalert-ui'
const inputValue = ref('test')
</script>
