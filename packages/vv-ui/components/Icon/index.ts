import { App } from 'vue'
import VIcon from './src/icon'

export { VIcon }

export default {
  install(app: App) {
    app.component(VIcon.name, VIcon)
  }
}
