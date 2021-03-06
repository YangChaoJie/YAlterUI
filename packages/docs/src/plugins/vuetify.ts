// import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import { md } from 'vuetify/iconsets/md'
import { mdi as mdiSvg } from 'vuetify/iconsets/mdi-svg'
import { VuetifyPlugin } from '../types';

export const useVuetify: VuetifyPlugin = ({ app }) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      sets: {
        fa,
        mdi,
        md,
        mdiSvg,
      }
    },
    theme: {
      themes: {
        light: {
          colors: {
            primary: '#1867c0',
            secondary: '#5CBBF6',
            tertiary: '#E57373',
            accent: '#005CAF',
          },
        }
      }
    },
  })
  app.use(vuetify)
}
