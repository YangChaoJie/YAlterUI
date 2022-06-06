<template>
  <v-img
    :height="size"
    :src="logo"
    :width="size"
    class="mx-auto"
    max-width="100%"
  />
</template>

<script lang="ts">
  // Utilities
  import { computed, defineComponent } from 'vue'
  // import { useTheme } from 'vuetify'

  export default defineComponent({
    name: 'Logo',

    props: {
      size: String,
    },

    setup () {
      // const theme = useTheme()
      // console.log('theme', theme);
      
      const logo = computed(() => {
        return 'https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-light.svg'
        // `vuetify-logo-v3-${theme.name.value}.svg`
      })

      return { logo }
    },
  })
</script>
