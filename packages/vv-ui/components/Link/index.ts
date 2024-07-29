import { App } from 'vue'
import VLink from './src/link'

export { VLink }

export default {
  install: (app: App) => {
    app.component(VLink.name, VLink)
  }
}
