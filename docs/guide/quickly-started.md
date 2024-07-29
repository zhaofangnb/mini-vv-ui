# 快速开始页

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