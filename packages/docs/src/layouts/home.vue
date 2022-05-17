<template>
<div>头部</div>
<div>
  {{ text }}
</div>
<router-view />
<Footer/>
<div>底部</div>
</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'

import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer
  },
  setup() {
    let text = ref('home 布局')
    return {
      text
    }
  }
})

</script>
