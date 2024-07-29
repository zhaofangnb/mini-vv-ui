import { App } from 'vue'
import VButton from './src/button'
import VButtonGroup from './src/button-group'

export { VButton, VButtonGroup }

export default {
  install(app: App) {
    app.component(VButton.name, VButton)
    app.component(VButtonGroup.name, VButtonGroup)
  }
}
