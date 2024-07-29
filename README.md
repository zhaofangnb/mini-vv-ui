# Vue 3 + TypeScript + Vite

## Gitee Pages 预览: 
- [npm 使用文档地址：https://www.npmjs.com/package/mini-vv-ui](https://www.npmjs.com/package/mini-vv-ui)
- [Github 使用文档地址：https://gitee.com/lucky-zhaofang/mini-vv-ui](https://gitee.com/lucky-zhaofang/mini-vv-ui)
- [Gitee 使用文档地址：https://gitee.com/lucky-zhaofang/mini-vv-ui](https://gitee.com/lucky-zhaofang/mini-vv-ui)


## 安装
使用npm:
```
npm install mini-vv-ui
```

使用yarn 
```
yarn add mini-vv-ui
```

使用pnpm:
```
pnpm add mini-vv-ui
```

## 全量引入

```ts
// main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// 引入组件库
import mvui from 'mini-vv-ui'
// 全量组件样式
import 'mini-vv-ui/style.css'

createApp(App).use(mvui).mount('#app')

```

## 部分组件引入
```ts
// main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {VButton, VIcon } from 'mini-vv-ui'
// 全量组件样式
// import 'mini-vv-ui/style.css'
// 单个组件样式
import 'mini-vv-ui/Button/style.css'
import 'mini-vv-ui/Icon/style.css'
const app = createApp(App)
app.component(VButton.name, VButton)
app.component(VIcon.name, VIcon)
app.mount('#app')
```
