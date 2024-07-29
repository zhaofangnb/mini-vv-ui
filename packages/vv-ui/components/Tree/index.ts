import { App } from 'vue'
import VTree from './src/tree'

export { VTree }

export default {
  install(app: App) {
    app.component(VTree.name, VTree)
  }
}
