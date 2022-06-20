<template>
  <v-navigation-drawer
    v-model="app.drawer"
    width="300"
  >
    <app-list :items="items" nav />
  </v-navigation-drawer>
</template>

<script lang="ts">
  // Components
  import AppList from '@/components/app/List.vue'

  // Composables
  import { useAppStore } from '@/store/app'

  // Utilities
  import { defineComponent } from 'vue'

  // Data
  import nav from '@/data/nav.json'

  export default defineComponent({
    name: 'AppDrawer',

    components: {
      AppList,
    },

    setup () {
      const app = useAppStore()

      return { app, items: nav }
    },
  })
</script>

