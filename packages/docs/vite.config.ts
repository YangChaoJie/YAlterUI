import { resolve } from 'path';
import { defineConfig, UserConfig  } from 'vite';
import vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-md';
import vueJsx from '@vitejs/plugin-vue-jsx'
import Pages from 'vite-plugin-pages'
import prism from 'markdown-it-prism'
import Layouts from 'vite-plugin-vue-layouts'
import { Examples } from './build/examples-plugin'
import { configureMarkdown, parseMeta } from './build/markdown-it'
// import vuetify from 'vite-plugin-vuetify'
// 文档: https://vitejs.dev/config/
export default defineConfig(({mode}) =>{
  const config: UserConfig = {
    resolve: {
      // alias: {
      //   '@': resolve(__dirname, './src'),
      //   packages: resolve(__dirname, '../packages'),
      //   // components: resolve(__dirname, '../yAlterUI/src/components/index.ts'),
      //   'yalert-ui': 'yalert-ui/components'
      //   // components: resolve(__dirname, '../yAlterUI/lib/yalter-ui.es.js'),
      // },
      alias: [
        // {
        //   find: /^@\/(.*)$/,
        //   replacement: `${resolve('..')}/yAlterUI/src/$1`,
        // },
        { find: /^@\/(.*)/, replacement: resolve('./src/$1') },
        // { find: /^yalert-ui$/, replacement:  `${path.resolve('..')}/yAlterUI/src/index.ts` }, // 与下面效果是相同的
        { find: /^yalert-ui$/, replacement: `yalert-ui/components` }, // node_modules
      ],
      dedupe: ['vue']
    },
    optimizeDeps: {
      exclude: ['yalert-ui'],
    },
    build: {
      sourcemap: true,
      rollupOptions: {
        output: {
          inlineDynamicImports: true,
        },
      },
    },
    plugins: [
      vue({
        include: [/\.vue$/, /\.md$/],
      }),
      // https://github.com/hannoeru/vite-plugin-pages
      Pages({
        extensions: ['md', 'vue'],
        pagesDir: [
          { dir: 'src/pages', baseRoute: '' },
        ],
        extendRoute (route) {
          if (route.path === '/' || route.path === '') {
            return {...route, redirect: '/zh'}
          }

          if (['index', 'all'].includes(route.name)) {
            return route
          }

          const currentPath = route.path.split('/')
          const layout = currentPath.length === 2 ? 'home' : 'default'
          const meta = parseMeta(route.component)
          let path = route.path

          if (path.startsWith('/api')) {
            const parts = path.split('/')
            path = ['', parts[2], parts[1], parts.slice(3)].join('/')
          }
  
          return {
            ...route,
            path,
            meta: {
              ...meta,
              layout,
            },
          }
        }
      }),
      // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
      Layouts(),
      Markdown({
        headEnabled: true,
        markdownItUses: [
          prism,
        ],
        markdownItSetup: configureMarkdown
      }),
      Examples(),
      vueJsx(),
      // https://github.com/vuetifyjs/vuetify-loader/
      // vuetify({ autoImport: true })
    ],
  }
  return config;
});
