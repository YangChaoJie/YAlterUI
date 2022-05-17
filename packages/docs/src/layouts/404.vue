<template>
  <div class="rr-layout">
    <div>头部</div>
    <div>
      {{ text }}
    </div>
  </div>
</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer
  },
  setup() {
    let text = ref('404 布局')
    return {
      text
    }
  }
})

</script>

<style>
.rr-layout {
  background: rebeccapurple;
  color: azure;
}
</style>
