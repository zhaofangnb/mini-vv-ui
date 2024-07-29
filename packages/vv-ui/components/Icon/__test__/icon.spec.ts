import { mount } from '@vue/test-utils'
import VIcon from '../src/icon'

describe('图标', () => {
  test('VIcon shold work', () => {
    const wrapper = mount({
      components: { VIcon },
      props: {
        name: {
          type: String,
          default: 'edit'
        }
      },
      template: `<VIcon name="edit"></VIcon>`,
      setup(props) {
        const iconName = props.name
        return {
          iconName
        }
      }
    })

    expect(wrapper.classes()).toContain('v-icon-edit')
    expect(wrapper.props().name).toBe('edit')
  })
})
