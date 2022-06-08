<template>
  <v-app>
    <!-- <v-app-settings-drawer /> -->
    <v-app-bar />
    <v-main>
      <v-container class="px-4 text-center font-weight-light">
        <router-view />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
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
