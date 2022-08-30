<template>
  <v-app>
    <y-top-header></y-top-header>
    <app-drawer v-if="showDrawer" />
    <!-- <div class="content">
      {{ text }}
    </div> -->
    <v-main>
      <!-- <router-view /> -->

      <!-- <Footer /> -->
      <v-container class="pa-4 pa-sm-6 pa-md-8" fluid tag="section">
        This is <b>BETA</b> documentation for Vuetify 3, examples and information may be broken or outdated.
        <br>
        Components not listed in the sidebar are not available yet.
        <br>
        Vuetify 2 documentation can be found on <app-link href="https://vuetifyjs.com/">vuetifyjs.com</app-link>


        <router-view />
      </v-container>
    </v-main>
    <app-toc />
  </v-app>

</template>

<script lang="ts">
import Footer from '@/components/home/Footer.vue'
import YTopHeader from '@/components/home/head.vue'
import AppDrawer from '@/components/nav/Drawer.vue'
import { defineComponent, ref, watchEffect, onMounted } from 'vue'
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
    watchEffect(() => {
      showDrawer.value = route.path !== '/zh/home'
    }
    )
    onMounted(() => {
      // const makbody = document.getElementsByClassName('v-application__wrap')[0];
      // console.log('makbody---', makbody);

      // makbody.addEventListener('scroll', onScroll1)
    })

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

