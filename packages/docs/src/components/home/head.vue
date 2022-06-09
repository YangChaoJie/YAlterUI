<template>
  <v-app-bar id="app-bar" app class="border-b" flat>
    <div class="ui-logo">
      <v-img :height="size" :src="logo" :width="size" class="mx-auto" max-width="100%" />
      <span>YJ-UI</span>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
// Utilities
import { computed, defineComponent, ref } from 'vue'
// import { useTheme } from 'vuetify'

export default defineComponent({
  name: 'YHeader',

  setup() {
    // const theme = useTheme()
    // console.log('theme', theme);
    const size = ref(30)
    const logo = computed(() => {
      return 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg'
      // `vuetify-logo-v3-${theme.name.value}.svg`
    })

    return { logo, size }
  },
})
</script>

<style lang="scss" scoped>
  .ui-logo {
    cursor: pointer;
    display: flex;
    font-size: 18px;
  }
</style>
