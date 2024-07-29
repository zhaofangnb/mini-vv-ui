import { mount } from '@vue/test-utils'
import VSpace from '../src/space'
import VButton from '../../Button/src/button'

describe('VSpace', () => {
  it('VSpace 水平排列', () => {
    const wrapper = mount({
      components: { VSpace, VButton },
      props: {},
      template: `<VSpace>
                    <VButton type="primary">hello</VButton>
                    textNode
                    <VButton type="primary">world</VButton>
                </VSpace>`,
      setup(props) {
        return {}
      }
    })
    expect(wrapper.html()).toContain('<div class="v-space v-space-horizontal">')
  })

  it('VSpace 竖直排列', () => {
    const wrapper = mount({
      components: { VSpace, VButton },
      props: {
        direction: {
          type: String,
          default: 'vertical'
        }
      },
      template: `<VSpace :direction="direction">
                    <VButton type="primary">hello</VButton>
                    textNode
                    <VButton type="primary">world</VButton>
                </VSpace>`,
      setup(props) {
        const { direction } = props
        return { direction }
      }
    })
    expect(wrapper.html()).toContain('<div class="v-space v-space-vertical">')
  })

  it('VSpace 间距大小', () => {
    const wrapper = mount({
      components: { VSpace, VButton },
      props: {
        size: {
          type: [Number, String],
          default: 'mini'
        }
      },
      template: `<VSpace :size="size">
                    <VButton type="primary">hello</VButton>
                    textNode
                    <VButton type="primary">world</VButton>
                </VSpace>`,
      setup(props) {
        const { size } = props
        return { size }
      }
    })
    expect(wrapper.html()).toContain('<div class="v-space-item" style="margin-right: 4px;">')
  })
})
