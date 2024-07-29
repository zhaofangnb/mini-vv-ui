import { ExtractPropTypes, PropType } from 'vue'
export const emits = ['update:modelValue', 'input', 'change', 'clear', 'focus']

export const inputProps = {
  modelValue: {
    type: String as PropType<string>,
    default: '',
    required: true
  },
  defaultValue: {
    type: String as PropType<string>,
    defaullt: '',
    required: false
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium'
  },
  allowClear: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false
  },
  placeholder: {
    type: String as PropType<string>,
    default: ''
  },
  onInput: {
    type: Function as PropType<(value: string, e: Event) => void>
  },
  onChange: {
    type: Function as PropType<(value: string, e: Event) => void>
  },
  onClear: {
    type: Function as PropType<(e: Event) => void>
  }
} as const

export type InputProps = ExtractPropTypes<typeof inputProps>
