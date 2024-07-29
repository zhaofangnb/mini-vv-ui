const sidebar = {
  '/guide/': sidebarGuide(),
  '/components/': compsGuide()
}

export default sidebar

function sidebarGuide() {
  return [
    {
      text: '开始使用',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: false, // 初始加载页面时关闭
      items: [
        { text: '指南', link: '/guide/' },
        { text: '快速开始', link: '/guide/quickly-started' }
      ]
    },
    {
      text: '组件',
      collapsible: true, // 开启可折叠侧边栏
      collapsed: false, // 初始加载页面时关闭
      items: [{ text: '组件预览', link: '/components/' }]
    }
  ]
}

function compsGuide() {
  return [
    {
      text: '通用',
      collapsible: true,
      collapsed: false,
      items: [
        { text: '按钮', link: '/components/button/' },
        { text: '图标', link: '/components/icon/' },
        { text: '间距', link: '/components/space/' },
        { text: '复选框', link: '/components/checkbox/' },
        { text: '链接', link: '/components/link/' },
        { text: '页签', link: '/components/tab/' },
        { text: '滑块', link: '/components/slider/' }
      ]
    },
    {
      text: '导航',
      collapsible: true,
      collapsed: false,
      items: []
    },
    {
      text: '反馈',
      collapsible: true,
      collapsed: false,
      items: [{ text: 'feedback', link: '' }]
    },
    {
      text: '数据录入',
      collapsible: true,
      collapsed: false,
      items: [{ text: '输入框', link: '/components/input/' }]
    },
    {
      text: '数据展示',
      collapsible: true,
      collapsed: false,
      items: [{ text: '树', link: '/components/tree/' }]
    }
  ]
}
