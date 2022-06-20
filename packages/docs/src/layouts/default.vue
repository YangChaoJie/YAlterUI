<template>
  <v-app>
    <y-top-header></y-top-header>
    <div class="content">
      {{ text }}
    </div>
    <router-view />
    <Footer />
  </v-app>

</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'
import YTopHeader from '@/components/home/head.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer,
    YTopHeader
  },
  setup() {
    let text = ref('')
    return {
      text
    }
  }
})
</script>

<style lang="scss">
.content {
  padding: 20px;
}
.v-application__wrap {
  height: 100vh !important;
  overflow: auto !important;
}
.markdown-body {
  margin-top: 30px;
}
</style>

