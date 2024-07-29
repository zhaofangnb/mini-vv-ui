import { mount } from '@vue/test-utils'
import VLink from '../src/link'

describe('链接测试', () => {
  it('VLink should work', () => {
    const wrapper = mount({
      components: { VLink },
      props: {
        type: {
          type: String,
          default: 'default'
        },
        underline: {
          type: Boolean,
          default: false
        },
        disabled: {
          type: Boolean,
          default: false
        }
      },
      template: `<VLink type="info" disabled underline />`
    })
    expect(wrapper.classes()).toEqual(['v-link', 'v-link__info', 'v-link--disabled', 'v-link--underline'])
  })
})
