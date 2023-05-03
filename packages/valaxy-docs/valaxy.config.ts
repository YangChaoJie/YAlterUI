import { defineValaxyConfig } from 'valaxy'
import type { PressTheme } from 'valaxy-theme-press'
import { addonAlgolia } from 'valaxy-addon-algolia'
import path from 'node:path'
import { resolve } from 'path'
// import Components from 'unplugin-vue-components/vite'
// import AutoImport from 'unplugin-auto-import/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// import Icons from 'unplugin-icons/vite'
// import IconsResolver from 'unplugin-icons/resolver'
import { mdPlugin } from './config/plugins'
const COMMIT_ID = process.env.CF_PAGES_COMMIT_SHA || process.env.COMMIT_REF
const commitRef = COMMIT_ID?.slice(0, 8) || 'dev'

const safelist = [
  'i-ri-home-line',
  'i-ri-github-line',
]

export default defineValaxyConfig<PressTheme.Config>({
  siteConfig: {
    title: 'YJ_UI',
    url: 'https://valaxy.site',
    description: 'vue3 ui library',

    search: {
      enable: true,
      type: 'algolia',
    },
  },

  addons: [
    addonAlgolia({
      appId: 'Z3S6CQZ0GM',
      apiKey: 'b899c6cc400fa8557bd487bf7bcf4d00',
      indexName: 'glowing-centaur-5bcf8a',
    }),
  ],

  theme: 'press',
  themeConfig: {
    logo: '/favicon.svg',
    sidebar: ['Getting Started', 'Components', 'FAQ'],
    socialLinks: [
      { icon: 'i-ri-github-line', link: 'https://github.com/YangChaoJie/YAlterUI' },
    ],
    nav: [
      {
        text: '指南',
        link: '/guide/getting-started',
        items: [
          {
            text: 'Getting Started',
            link: '/guide/getting-started',
          },
          {
            text: 'Components',
            link: '/migration/hexo',
          },
        ],
      },
      {
        text: ' 组件 ',
        link: '/components/icon'
      },
      {
        text: '关于',
        link: '/about/about',
        items: [
          {
            text: 'Components',
            link: '/about/index',
          }
        ]
      }
    ],

    footer: {
      message: `Released under the MIT License. (<a href="https://github.com/YangChaoJie/YAlterUI/commit/${commitRef}" target="_blank" alt=${commitRef}>${commitRef}</a>)`,
      copyright:
        'Copyright © 2023-present <a href="https://github.com/YangChaoJie" target="_blank">YangChaoJie</a> & <a href="https://github.com/YangChaoJie/YAlterUI" target="_blank">YJ-UI</a>',
    },
  },

  vite: {
    // base: '.',
    resolve: {
      alias: [
        {
          find: /^@\/(.*)$/,
          replacement: `${path.resolve('..')}/yAlterUI/src/$1`,
        },
        { find: /^~\/(.*)/, replacement: resolve('./src/$1') },
        { find: /^@yalert-ui\/((?!icons).+)/, replacement: resolve(__dirname, '../common/$1/src') },
        // { find: /^yalert-ui$/, replacement: `${path.resolve('..')}/yAlterUI/src/components/index.ts` }, // 与下面效果是相同的
      ]
    },
    plugins: [
      // Icons({
      //   autoInstall: true,
      // }),
      // AutoImport({
      //   dirs: ['valaxy-theme-press/components', 'components'],
      //   resolvers: [],
      // }),
      // Components({
      //   dirs: ['valaxy-theme-press/components', 'components'],
      //   allowOverrides: true,
      //   resolvers: [IconsResolver()],
      // })
    ]
  },
  unocss: {
    safelist,
  },

  markdown: {
    config: (md) => mdPlugin(md),
    blocks: {
      tip: {
        icon: 'i-carbon-thumbs-up',
      },
      warning: {
        icon: 'i-carbon-warning-alt',
      },
      danger: {
        icon: 'i-carbon-warning',
      },
      info: {
        text: 'i-carbon-information',
      },
    },
  },
})
