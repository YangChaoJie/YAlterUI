<template>
  <v-app>
    <y-top-header></y-top-header>
    <app-drawer />
    <!-- <div class="content">
      {{ text }}
    </div> -->
    <v-main>
      <router-view />
      <Footer />
    </v-main>
  </v-app>

</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'
import YTopHeader from '@/components/home/head.vue'
import AppDrawer from '@/components/nav/Drawer.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer,
    YTopHeader,
    AppDrawer
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
$header-height: 65px;
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
.markdown-body {
  min-height: calc(100vh - $header-height - 307px);
}
</style>

