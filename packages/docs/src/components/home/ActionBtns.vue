<template>
  <v-container>
    <v-row justify="center">
      <v-col
        v-for="({ icon, text, ...attrs }, i) in buttons"
        :key="`home-btn-${i}`"
        cols="auto"
      >
        <v-btn
          :min-width="btnWidth"
          v-bind="attrs"
          size="x-large"
        >
          <!-- <v-icon :icon="icon" start /> -->
          {{ text }}
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
  // Utilities
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ActionBtns',

    setup () {
      // data
      const buttons = [
        {
          color: 'primary',
          flat: true,
          icon: 'mdi-speedometer',
          text: '开始使用',
          textColor: '#fffff'
        },
        {
          color: '#212121',
          theme: 'dark',
          flat: true,
          href: 'https://github.com/vuetifyjs/vuetify',
          icon: 'mdi-github',
          rel: 'noopener',
          target: '_blank',
          text: 'github',
        },
      ] as const
      const btnWidth = 228

      return {
        buttons,
        btnWidth
      }
    },

  })
</script>
