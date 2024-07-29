import { mount } from '@vue/test-utils'
import VInput from '../src/input'

describe('输入框', () => {
  it('VInput should work', () => {
    const wrapper = mount({
      components: { VInput },
      props: {
        modelValue: {
          type: String,
          default: '初始值'
        }
      },
      template: `<VInput v-model="modelValue" />`,
      setup(props) {
        const { modelValue } = props
        return {
          modelValue
        }
      }
    })

    expect(wrapper.classes()).toContain('v-input-wrapper')
    expect(wrapper.find('input').exists()).toBe(true)
  })
})
