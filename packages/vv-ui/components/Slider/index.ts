import { App } from 'vue'

import VSlider from './src/slider'

export { VSlider }

export default {
  install(app: App) {
    app.component(VSlider.name, VSlider)
  }
}
