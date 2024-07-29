import { mount } from '@vue/test-utils'
import VTabs from '../src/tabs'
import VTab from '../src/tab'
import { ref } from 'vue'

describe('Tabs', () => {
  it('Tabs, Tab shold work', () => {
    const wrapper = mount({
      components: { VTabs, VTab },
      props: {},
      template: `<VTabs v-model="activeTab">
                    <VTab id="tab1" title="Tab1">Tab1</VTab>
                    <VTab id="tab2" title="Tab2">Tab2</VTab>
                </VTabs>`,
      setup(props) {
        const activeTab = ref('tab1')
        return { activeTab }
      }
    })
    expect(wrapper.html()).toContain('<ul class="v-tabs__nav">')
  })
})
