<template>
  <div>----icon-----</div>
  <y-icon color="red" size="16px">
    <Edit />
  </y-icon>
  <div>----icon--property---</div>
  <y-icon :icon="Loading" class="is-loading"></y-icon>
  <y-icon color="red" size="16px" class="is-loading">
    <Loading />
  </y-icon>
</template>
<script setup lang="ts">
import { Edit, Loading } from '@yalert-ui/icons'
</script>
