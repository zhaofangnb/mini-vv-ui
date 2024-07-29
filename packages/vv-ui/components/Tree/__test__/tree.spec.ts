import { mount } from '@vue/test-utils'
import VTree from '../src/tree'
import { ref } from 'vue'

describe('VTree', () => {
  it('VTree should work', () => {
    const wrapper = mount({
      components: { VTree },
      props: {},
      template: `<VTree :data="data"></VTree>`,
      setup(props) {
        const data = ref([
          {
            label: '前端',
            id: '前端',
            children: [
              {
                label: 'html',
                id: 'html'
              },
              {
                label: 'js',
                id: 'js'
              },
              {
                label: 'css',
                id: 'css'
              }
            ]
          },
          {
            label: '后端',
            id: '后端',
            children: [
              {
                label: 'java',
                id: 'java'
              },
              {
                label: 'mysql',
                id: 'mysql'
              },
              {
                label: 'redis',
                id: 'redis'
              }
            ]
          }
        ])
        return {
          data
        }
      }
    })
    expect(wrapper.classes()).toContain('v-tree')
  })
})
