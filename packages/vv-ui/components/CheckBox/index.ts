import { App } from 'vue'
import VCheckbox from './src/checkbox'
import VCheckboxGroup from './src/checkbox-group'
import VCheckboxButton from './src/checkbox-button'

export { VCheckbox, VCheckboxGroup, VCheckboxButton }

export default {
  install(app: App) {
    app.component(VCheckbox.name, VCheckbox)
    app.component(VCheckboxGroup.name, VCheckboxGroup)
    app.component(VCheckboxButton.name, VCheckboxButton)
  }
}
