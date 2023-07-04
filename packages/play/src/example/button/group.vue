<template>
  <div>
    <y-button-group>
      <y-button type="primary" :icon="ArrowLeft">Previous Page</y-button>
      <y-button type="primary">
        Next Page<y-icon class="el-icon--right">
          <ArrowRight />
        </y-icon>
      </y-button>
    </y-button-group>
    <y-button-group size="large"  class="ml-4">
      <y-button type="primary" :icon="Edit" />
      <y-button type="primary" :icon="Share" />
      <y-button type="primary" :icon="Delete" />
    </y-button-group>

    <y-button-group type="success" class="ml-4">
      <y-button :icon="Edit" />
      <y-button :icon="Share" />
      <y-button :icon="Delete" />
    </y-button-group>
  </div>
</template>

<script setup lang="ts">
import { YButton, YButtonGroup, YIcon } from 'yalert-ui'
import { ArrowLeft, ArrowRight, Delete, Edit, Share } from '@yalert-ui/icons'
</script>
