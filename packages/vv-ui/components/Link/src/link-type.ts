import { ExtractPropTypes, PropType } from 'vue'
// import { iconProps } from '../../Icon/src/icon-type'

export const linkProps = {
  type: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'info' | 'danger' | 'default'>,
    default: 'default'
  },
  href: {
    type: String,
    default: undefined
  },
  underline: {
    type: Boolean,
    default: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    default: ''
  }
} as const

export type LinkProps = ExtractPropTypes<typeof linkProps>
