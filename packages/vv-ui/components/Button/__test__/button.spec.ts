import { mount } from '@vue/test-utils'
import VButton from '../src/button'

describe('按钮', () => {
  it('VButton shold work', () => {
    const wrapper = mount({
      components: { VButton },
      props: {
        type: {
          type: String,
          default: 'primary'
        },
        size: {
          type: String,
          default: 'small'
        }
      },
      template: `<v-button :type="type" :size="size">测试按钮</v-button>`,
      setup(props) {
        const { type, size } = props
        return {
          type,
          size
        }
      }
    })

    // console.log(wrapper.classes(), wrapper.props(), '111')
    expect(wrapper.classes()).toContain('v-btn-small')
  })
})
