import { defineConfig } from 'vitepress'
import demoblock from 'vitepress-demoblock'
export default defineConfig({
  title: '简易组件库',
  description: 'haha',
  themeConfig: {
    logo: '../../src/assets/vite.svg',
    nav: [
      {
        text: '快速开始',
        link: '/'
      },
      {
        text: '安装',
        link: '/install/first'
      },
      {
        text: '组件',
        link: '/component'
      }
    ],
    sidebar: {
      '/': [
        {
          text: '快速开始',
          items: [
            {
              text: '开始使用',
              link: '/quickstart'
            }
          ],
          collapsible: false
        },
        {
          text: '安装',
          items: [
            { text: '第一步', link: '/install/first/' },
            { text: '第二步', link: '/install/two/' },
            { text: '第三步', link: '/install/three/' }
          ]
        },
        { text: '导航', items: [] }
      ]
    }
  },
  markdown: {
    config(md) {
      md.use(demoblock)
    }
  }
})
