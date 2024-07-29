import { ExtractDefaultPropTypes, PropType } from 'vue'

export type VButtonType = 'primary' | 'success' | 'info' | 'warning' | 'danger' | 'text'
export type VButtonSize = 'small' | 'medium' | 'large'
export type EmitType<T> = T | T[]

// 按钮属性props定义
export const buttonProps = {
  type: {
    type: String as PropType<VButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<VButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  plain: {
    type: Boolean,
    default: false
  },
  round: {
    type: Boolean,
    default: false
  },
  circle: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  attrType: {
    type: String as PropType<'button' | 'submit' | 'reset'>
  },
  icon: {
    type: String,
    default: ''
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>
  },
  onClick: {
    type: [Function, Array] as PropType<EmitType<(e: MouseEvent) => void>>
  }
}

// 利用值反推初Button 属性类型

export type ButtonProps = ExtractDefaultPropTypes<typeof buttonProps>
