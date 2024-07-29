import { defineComponent } from 'vue'
import { getAllElements } from '../../../utils/global-config'

export default defineComponent({
  name: 'VButtonGroup',
  setup(props, { slots }) {
    return () => {
      return <div class={`v-btn-group`}>{getAllElements(slots.default?.())}</div>
    }
  }
})
