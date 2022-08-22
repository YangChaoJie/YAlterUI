<template>
  <v-app>
    <y-top-header></y-top-header>
    <app-drawer v-if="showDrawer"/>
    <!-- <div class="content">
      {{ text }}
    </div> -->
    <v-main>
      <router-view />
        <v-icon
      large
      color="green darken-2"
    >
      mdi-domain
    </v-icon>
      <Footer />
    </v-main>
    <app-toc />
  </v-app>

</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'
import YTopHeader from '@/components/home/head.vue'
import AppDrawer from '@/components/nav/Drawer.vue'
import { defineComponent, ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import AppToc from '@/components/app/Toc.vue'
export default defineComponent({
  components: {
    Footer,
    YTopHeader,
    AppDrawer,
    AppToc
  },
  setup() {
    let text = ref('')
    const route = useRoute();
    const showDrawer = ref(false);
    // showDrawer.value = route.path !== '/zh/home'
    watchEffect(() =>{
      showDrawer.value = route.path !== '/zh/home'
      }
    )
    return {
      text,
      showDrawer
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

