import { App } from 'vue'
import VTab from './src/tab'
import VTabs from './src/tabs'

export { VTab, VTabs }

export default {
  install(app: App) {
    app.component(VTab.name, VTab)
    app.component(VTabs.name, VTabs)
  }
}
