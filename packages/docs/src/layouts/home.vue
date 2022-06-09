<template>
  <v-app>
    <!-- <v-app-settings-drawer /> -->
    <v-app-bar />
    <Clock class="clock"></Clock>
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
import Clock from '@/components/home/Clock.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer,
    Clock
  },
  setup() {
    let text = ref('home 布局')
    return {
      text
    }
  }
})

</script>

<style lang="scss" scoped>
.clock {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
}
</style>
