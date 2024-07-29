import { demoBlockPlugin } from 'vitepress-theme-demoblock'
import sidebar from '../sidebar'
import nav from '../nav'

const config = {
  title: 'mini-vv-ui',
  description: 'A VitePress Site', // 渲染为<meta>标签
  lang: 'zh-CN',
  // Pages 路径配置
  base: '/mini-vv-ui/',
  head: [
    // 网站图标 <link rel="icon" href="" />
    ['link', { rel: 'icon', href: '/electron.ico' }]
  ],
  lastUpdated: true,
  appearance: true,
  themeConfig: {
    logo: '/electron.ico',
    outline: 'deep',
    outlineTitle: 'On this page',
    sidebar,
    // 启动页面丝滑滚动
    smoothScroll: true,
    // 导航栏配置
    nav,
    // 社交账户链接
    socialLinks: [
      {
        icon: {
          svg: '<svg t="1675837057998" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1407" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="1408"></path></svg>'
        },
        link: 'https://gitee.com/lucky-zhaofang'
      }
    ],
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>',
      // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
      appId: '<APP_ID>',
      placeholder: '关键字搜索',
      disableUserPersonalization: false,
      buttonText: '搜索'
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present lucky zhaofang'
    }
  },
  markdown: {
    config: md => {
      md.use(demoBlockPlugin)
    }
  }
}
export default config
