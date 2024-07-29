import { App } from 'vue'
import VInput from './src/input'

export { VInput }

export default {
  install(app: App) {
    app.component(VInput.name, VInput)
  }
}
