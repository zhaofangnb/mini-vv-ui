import type { ExtractPropTypes } from 'vue'

export const tabProps = {
  id: {
    type: String,
    default: '',
    required: true
  },
  title: {
    type: String,
    default: '',
    required: true
  }
}

export type TabProps = ExtractPropTypes<typeof tabProps>

export const tabsProps = {
  modelValue: {
    type: String,
    default: '',
    required: true
  },
  closable: {
    type: Boolean,
    default: false,
    required: false
  },
  addable: {
    type: Boolean,
    default: false,
    required: false
  }
}

export type TabsProps = ExtractPropTypes<typeof tabsProps>
