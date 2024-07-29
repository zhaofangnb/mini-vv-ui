import { App } from 'vue'
import VSpace from './src/space'

export { VSpace }

export default {
  install(app: App) {
    app.component(VSpace.name, VSpace)
  }
}
