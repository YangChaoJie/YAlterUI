<template>
  <v-app>
    <y-top-header></y-top-header>
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
import YTopHeader from '@/components/home/head.vue'
import Clock from '@/components/home/Clock.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    Footer,
    Clock,
    YTopHeader
  },
  setup() {
    let text = ref('home 布局')
    return {
      text
    }
  }
})

</script>

<style lang="scss">
.clock {
  position: absolute;
  top: 80px;
  right: 20px;
  z-index: 10;
}

// .v-application__wrap {
//   height: 100vh !important;
//   overflow: auto !important;
// }

// .v-application__wrap:hover {
//   overflow-y: auto !important;
// }

// .v-application__wrap::-webkit-scrollbar {
//   width: 8px;
//   height: 1px;
//   position: absolute;
//   right: -40px;
//   top: 0;
//   background: white;
// }

// .v-application__wrap::-webkit-scrollbar-thumb {
//   background: rgba($color: #494848, $alpha: 0.4);
//   border-radius: 4px;
//   width: 2px;
//   height: 20px;
// }
// .v-application__wrap::-webkit-scrollbar-track {
//   box-shadow: inset 0 0 5px rgba($color:  #494848, $alpha: 0.4);
//   background: white;
//   display: none;
// }
// .v-application__wrap::-webkit-scrollbar-track-piece {
//   background: rgba($color: #000000, $alpha: 0.0);
// }
</style>
