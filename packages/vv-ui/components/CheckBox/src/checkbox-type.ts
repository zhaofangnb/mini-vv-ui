import { PropType, InjectionKey, Ref, ExtractPropTypes, ComputedRef } from 'vue'

type Direction = 'row' | 'column'
type Size = 'small' | 'medium' | 'large'

const commonProps = {
  // 原生属性
  name: {
    type: String,
    default: undefined
  },
  // 半选中状态
  halfChecked: {
    type: Boolean,
    default: false
  },
  // 是否显示title提示
  isShowTitle: {
    type: Boolean,
    default: true
  },
  // 显示自定义title提示内容
  title: {
    type: String
  },
  color: {
    type: String,
    default: undefined
  },
  // 控制是否显示动画
  showAnimation: {
    type: Boolean,
    default: true
  },
  // 是否禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 切换前的回调函数，返回 boolean 类型，返回 false 可以阻止 checkbox 切换
  beforeChange: {
    type: Function as PropType<(isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>>,
    default: undefined
  },
  // 尺寸,只有在border属性存在时生效
  size: {
    type: String as PropType<Size>
  }
} as const

export const checkboxProps = {
  ...commonProps,
  checked: {
    type: Boolean,
    default: false
  },
  value: {
    type: [Number, String] as PropType<string | number>
  },
  label: {
    type: String,
    default: ''
  },
  'onUpdate:checked': {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined
  },
  onChange: {
    type: Function as PropType<(v: boolean) => void>,
    default: undefined
  },
  modelValue: {
    type: Boolean
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(v: boolean) => void>
  },
  border: {
    type: Boolean,
    default: false
  }
} as const

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>

export const checkboxGroupProps = {
  ...commonProps,
  modelValue: {
    type: Array as PropType<(string | number)[]>,
    required: true
  },
  direction: {
    type: String as PropType<Direction>,
    default: 'column'
  },
  // 每一项 checkbox 的宽度(px)
  itemWidth: {
    type: Number,
    default: undefined
  },
  // 复选框选项数组
  options: {
    type: Array as PropType<({ value: string } & Partial<CheckboxProps>)[]>,
    default: () => []
  },
  onChange: {
    type: Function as PropType<(v: string[]) => void>,
    default: undefined
  },
  'onUpdate:modelValue': {
    type: Function as PropType<(v: string[]) => void>,
    default: undefined
  },
  border: {
    type: Boolean,
    default: false
  },
  // 可被勾选的 checkbox 的最大数量
  max: {
    type: Number,
    default: undefined
  },
  textColor: {
    type: String,
    default: ''
  }
} as const

export type CheckboxGroupProps = ExtractPropTypes<typeof checkboxGroupProps>

interface checkboxGroupInjection {
  disabled: Ref<boolean>
  isShowTitle: Ref<boolean>
  color: Ref<string | undefined>
  showAnimation: Ref<boolean>
  beforeChange: undefined | ((isChecked: boolean, v: string | undefined) => boolean | Promise<boolean>)
  toggleGroupVal: (v: string | number | undefined) => void
  isItemChecked: (v: string | number | undefined) => boolean | undefined
  itemWidth: Ref<number | undefined>
  direction: Ref<Direction>
  size: Ref<string>
  border: Ref<boolean>
  max: Ref<number | undefined>
  modelValue: Ref<(string | number)[]>
  textColor: Ref<string>
}

export const checkboxGroupInjectionKey: InjectionKey<checkboxGroupInjection> = Symbol('v-checkbox-group')

export type UseCheckboxFn = {
  mergedChecked: ComputedRef<boolean>
  mergedDisabled: ComputedRef<boolean>
  mergedIsShowTitle: ComputedRef<boolean | undefined>
  mergedShowAnimation: ComputedRef<boolean | Ref<boolean>>
  mergedColor: ComputedRef<string | Ref<string | undefined> | undefined>
  itemWidth: number | undefined
  direction: string | undefined
  size: ComputedRef<string>
  border: ComputedRef<boolean>
  handleClick: (event: Event) => void
}

export interface GroupDefaultOpt {
  checked: boolean
  isShowTitle: boolean
  halfChecked: boolean
  showAnimation: boolean
  disabled: boolean
}

export type UseCheckboxGroupFn = {
  defaultOpt: GroupDefaultOpt
}

export type UseCheckboxButtonFn = {
  mergedTextColor: ComputedRef<string | undefined>
}
