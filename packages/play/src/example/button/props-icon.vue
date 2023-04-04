<template>
  <y-button type="primary" :loading-icon="Eleme" loading>Loading</y-button>
  <y-button type="default" :icon="Search" shape="circle"></y-button>
</template>

<script setup lang="ts">
import { Eleme, Search } from '@yalert-ui/icons';
</script>
