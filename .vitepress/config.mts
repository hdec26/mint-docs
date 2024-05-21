import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mint",
  base:'/mint-docs/',
  lang:'zh-cn',
  description: "简易，高效，实用的前端开发脚手架",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: 'image/png', 
        sizes: '32x32',
        href: "/public/icon.ico",
      },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '常见问题', link: '/pages/common-problem.md' },
      { text: '更新日志', link: '/pages/update-log.md' }, {
        text:'v1.0.0',
        link:'/'
      }
    ],
    search:{
      provider:'local'
    },
    outline:{
      label:'页面导航',
    },
    footer: {
      message: 'MIT Licensed',
      copyright: 'Copyright © 2024-present hdec'
    },
    docFooter:{
      prev:'上一页',
      next:'下一页'
    },
    sidebar: [
      {
        items: [
          { text: '简述', link: '/pages/sketch.md' },
          { text: '快速上手', link: '/pages/quick-start.md' }
        ]
      },
      {
        text: '创作',
        items: [
          { text: '主题', link: '/pages/layout.md' },
          { text: '环境变量', link: '/pages/env.md' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'Mint配置', link: '/pages/config.md' },
          { text: 'global', link: '/pages/global.md' },
          { text: '路由', link: '/pages/router.md' },
        ]
      },
      {
        items: [
          { text: '常见问题', link: '/pages/common-problem.md' },
          { text: '更新日志', link: '/pages/update-log.md' },
        ]
      },
     
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hdec26/mint' }
    ],
    logo: '/public/leaf.png',
  }
})
