// import { resolve } from 'path';
// import { defineConfig, UserConfig } from 'vite';
// import vue from '@vitejs/plugin-vue';
// // import Markdown from 'vite-plugin-md';
// import Markdown from 'vite-plugin-vue-markdown'
// import vueJsx from '@vitejs/plugin-vue-jsx'
// import Pages from 'vite-plugin-pages'
// import prism from 'markdown-it-prism'
// import Layouts from 'vite-plugin-vue-layouts'
// import { Examples } from './build/examples-plugin'
// import generateSitemap from 'vite-ssg-sitemap'
// import { configureMarkdown, parseMeta } from './build/markdown-it'
// // import vuetify from 'vite-plugin-vuetify'
// // 文档: https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: [
//       // {
//       //   find: /^@\/(.*)$/,
//       //   replacement: `${resolve('..')}/yAlterUI/src/$1`,
//       // },
//       { find: /^@\/(.*)/, replacement: resolve('./src/$1') },
//       // { find: /^yalert-ui$/, replacement:  `${path.resolve('..')}/yAlterUI/src/index.ts` }, // 与下面效果是相同的
//       { find: /^yalert-ui$/, replacement: `yalert-ui/components` }, // node_modules
//     ],
//     dedupe: ['vue']
//   },
//   optimizeDeps: {
//     exclude: ['yalert-ui', 'vuetify'],
//   },
//   build: {
//     sourcemap: true,
//     rollupOptions: {
//       output: {
//         inlineDynamicImports: true,
//       },
//     }
//   },
//   ssr: {
//     noExternal: ["vuetify", "p5i"]
//   },
//   // https://github.com/antfu/vite-ssg
//   ssgOptions: {
//     script: 'async',
//     formatting: 'minify',
//     crittersOptions: {
//       reduceInlineStyles: false,
//     },
//     onFinished() { generateSitemap() },
//   },
//   plugins: [
//     vue({
//       include: [/\.vue$/, /\.md$/],
//     }),
//     // https://github.com/hannoeru/vite-plugin-pages
//     Pages({
//       extensions: ['vue', 'md'],
//       dirs: [
//         // { dir: 'src/pages', baseRoute: '' },
//         { dir: 'src/pages/test', baseRoute: '' },
//       ],
//       exclude: ['**/components/*.vue', '**/zh/*.md', '**/zh/**/*.md'],
//       // extendRoute(route) {
//       //   if (route.path === '/' || route.path === '') {
//       //     return { ...route, redirect: '/zh' }
//       //   }

//       //   if (['index', 'all'].includes(route.name)) {
//       //     return route
//       //   }

//       //   const currentPath = route.path.split('/')
//       //   const layout = currentPath.length === 2 ? 'home' : 'default'
//       //   const meta = parseMeta(route.component)
//       //   let path = route.path

//       //   if (path.startsWith('/api')) {
//       //     const parts = path.split('/')
//       //     path = ['', parts[2], parts[1], parts.slice(3)].join('/')
//       //   }

//       //   return {
//       //     ...route,
//       //     path,
//       //     meta: {
//       //       ...meta,
//       //       layout,
//       //     },
//       //   }
//       // }
//     }),
//     // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
//     // Layouts(),
//     Markdown({
//       headEnabled: true,
//       // default options passed to markdown-it
//       // see: https://markdown-it.github.io/markdown-it/
//       // markdownItOptions: {
//       //   html: true,
//       //   linkify: true,
//       //   typographer: true,
//       // },
//       // A function providing the Markdown It instance gets the ability to apply custom settings/plugins
//       // markdownItSetup(md) {
//       //   // for example
//       //   md.use(require('markdown-it-anchor'))
//       //   md.use(require('markdown-it-prism'))
//       // },
//       // // Class names for the wrapper div
//       // wrapperClasses: 'markdown-body'
//     }),
//     // {
//     //   headEnabled: true,
//     //   markdownItUses: [
//     //     prism,
//     //   ],
//     //   markdownItSetup: configureMarkdown
//     // }
//     Examples(),
//     vueJsx(),
//     // https://github.com/vuetifyjs/vuetify-loader/
//     // vuetify({ autoImport: true })
//   ]
// });
import type { UserConfig } from 'vite'
import Markdown from 'vite-plugin-vue-markdown'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'

const config: UserConfig = {
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ['vue', 'md'],
      dirs: [
        // { dir: 'src/pages', baseRoute: '' },
        { dir: 'src/pages/test', baseRoute: '' },
      ],
    }),
    Components({
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),
    Markdown({
      headEnabled: true,
    }),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'prettify',
  },
}

export default config
