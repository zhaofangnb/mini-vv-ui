import { mount } from '@vue/test-utils'
import VCheckbox from '../src/checkbox'
import VCheckboxGrounp from '../src/checkbox-group'
import VCheckboxButton from '../src/checkbox-button'
import { ref } from 'vue'

describe('VCheckbox', () => {
  it('VCheckbox should work', () => {
    const wrapper = mount({
      components: { VCheckbox },
      props: {
        label: {
          type: String,
          default: ''
        },
        modelValue: {
          type: Boolean,
          default: false
        }
      },
      template: `<VCheckbox label="Checked" v-model="modelValue" />`,
      setup(props) {
        const { modelValue } = props
        return {
          modelValue
        }
      }
    })
    expect(wrapper.html()).toContain('<div class="v-checkbox unchecked">')
  })
})

describe('VCheckboxGrounp', () => {
  it('VCheckboxGrounp should work', () => {
    const wrapper = mount({
      components: { VCheckboxGrounp },
      props: {},
      template: `<VCheckboxGrounp v-model="value" :options="options" direction="row"/>`,
      setup() {
        const value = ref([{ name: 'data1', value: '2', id: 2 }])
        const options = ref([
          { name: 'data1', disabled: true, value: '1', id: 1 },
          { name: 'data2', value: '2', id: 2 },
          { name: 'data3', value: '3', id: 3 }
        ])
        return {
          value,
          options
        }
      }
    })
    expect(wrapper.html()).toContain('<div class="v-checkbox__group is-row">')
  })
})

describe('VCheckboxButton', () => {
  test('VCheckboxButton should work', () => {
    const wrapper = mount({
      components: { VCheckboxGrounp, VCheckboxButton },
      props: {},
      template: `<VCheckboxGrounp v-model="buttonValues1" size="small" direction="">
                    <VCheckboxButton
                            v-for="item in buttonOptions1"
                            :label="item.label"
                            :value="item.value"
                            :key="item.value"
                            :disabled="item.disabled"
                            >
                    </VCheckboxButton>
                </VCheckboxGrounp>`,
      setup() {
        const buttonOptions1 = ref([
          { label: '选项1', value: 2, id: 1, title: '自定义title1' },
          { label: '选项2', value: 3, id: 2, title: '自定义title2' },
          { label: '选项3', value: 4, id: 3, title: '自定义title3' }
        ])
        const buttonValues1 = ref([2])
        return {
          buttonOptions1,
          buttonValues1
        }
      }
    })
    expect(wrapper.html()).toContain('<label title="选项1" class="v-checkbox-button active">')
  })
})
