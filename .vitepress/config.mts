import { defineConfig } from 'vitepress'
import { fileURLToPath, URL } from 'node:url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Mint",
  base:'/mint-docs/',
  description: "A VitePress Site",
  head: [
    // 其他head配置...
    [
      "link",
      {
        rel: "icon",
        href: "/img/leaf.png",
      },
    ],
  ],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('../../src', import.meta.url))
      }
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/index' },
      { text: '常见问题', link: '/pages/common-problem.md' }
    ],

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
          { text: '主题', link: '/markdown-examples' },
          { text: '环境变量', link: '/pages/env.md' }
        ]
      },
      {
        text: 'API',
        items: [
          { text: 'mint配置', link: '/markdown-examples' },
          { text: 'global', link: '/pages/global.md' },
          { text: '路由', link: '/api-examples' },
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
    logo: '/img/leaf.png',
  }
})
