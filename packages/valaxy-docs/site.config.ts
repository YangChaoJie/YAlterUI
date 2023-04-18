import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  search: {
    enable: true,
    // 设置类型为 Fuse
    type: 'algolia',
  },
})
