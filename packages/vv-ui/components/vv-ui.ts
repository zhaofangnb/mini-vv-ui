// 组件库打包的入口文件
import type { App } from 'vue'

// 引入组件并批量导出去
import ButtonInstall, { VButton } from './Button'
import IconInstall, { VIcon } from './Icon'

export { VButton, VIcon }

const installs = [ButtonInstall, IconInstall]

export default {
  // 导出一个vue3插件
  // 将来接受一个App实例，createApp()
  install(app: App): void {
    installs.forEach(p => app.use(p as any))
  }
}
