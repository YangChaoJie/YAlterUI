<template>
  <component
    :is="tag"
    :class="`text-${size} font-weight-${weight} text-${color}`"
  >
    {{ path }}
  </component>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'Headline',

    props: {
      color: String,
      size: {
        type: String,
        default: 'h6',
      },
      tag: {
        type: String,
        default: 'div',
      },
      weight: {
        type: String,
        default: 'medium',
      },
      path: {
        type: String,
        required: true,
      },
    },

    setup () {
    },
  })
</script>
