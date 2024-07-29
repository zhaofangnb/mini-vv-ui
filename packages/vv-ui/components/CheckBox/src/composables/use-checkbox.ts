import { computed, toRef, provide, inject, SetupContext, Ref } from 'vue'
import {
  CheckboxProps,
  UseCheckboxFn,
  checkboxGroupInjectionKey,
  CheckboxGroupProps,
  UseCheckboxGroupFn,
  UseCheckboxButtonFn
} from '../checkbox-type'

export function useCheckbox(props: CheckboxProps, ctx: SetupContext): UseCheckboxFn {
  const checkboxGroupConf = inject(checkboxGroupInjectionKey, null)
  // 待改造， Form
  const isChecked = computed(() => props.checked || props.modelValue)

  const mergedChecked = computed(() => {
    // ??(空值合并操作符) 当左侧值为null或undefined时， 返回?? 右边的值
    return checkboxGroupConf?.isItemChecked?.(props.value) ?? isChecked.value
  })

  const isLimitDisabled = computed(() => {
    const max = checkboxGroupConf?.max.value
    return !!max && checkboxGroupConf.modelValue.value.length >= max && !mergedChecked.value
  })

  const mergedDisabled = computed(() => {
    return checkboxGroupConf?.disabled.value || props.disabled || isLimitDisabled.value
  })

  const mergedIsShowTitle = computed(() => {
    return checkboxGroupConf?.isShowTitle.value ?? props.isShowTitle
  })

  const mergedShowAnimation = computed(() => {
    return checkboxGroupConf?.showAnimation ?? props.showAnimation
  })

  const mergedColor = computed(() => {
    return checkboxGroupConf?.color ?? props.color
  })
  const itemWidth = checkboxGroupConf?.itemWidth.value
  const direction = checkboxGroupConf?.direction.value
  const size = computed(() => props.size || checkboxGroupConf?.size.value || 'medium')
  const border = computed(() => checkboxGroupConf?.border.value ?? props.border)

  const canChange = (checked: boolean, val: string | undefined) => {
    if (mergedDisabled.value) {
      return Promise.resolve(false)
    }
    const beforeChange = props.beforeChange ?? checkboxGroupConf?.beforeChange
    if (beforeChange) {
      const res = beforeChange(checked, val)
      if (typeof res === 'boolean') {
        return Promise.resolve(res)
      }
      return res
    }
    return Promise.resolve(true)
  }
  const toggle = () => {
    const current = !isChecked.value
    checkboxGroupConf?.toggleGroupVal(props.value)
    ctx.emit('update:checked', current)
    ctx.emit('update:modelValue', current)
    ctx.emit('change', current)
  }

  const handleClick = (event: Event) => {
    event.stopPropagation()
    canChange(!isChecked.value, props.label).then(res => res && toggle())
  }
  return {
    mergedChecked,
    mergedDisabled,
    mergedIsShowTitle,
    mergedShowAnimation,
    mergedColor,
    itemWidth,
    direction,
    size,
    border,
    handleClick
  }
}

type IModelValue = Ref<(string | number | { value: string })[]>

export function useCheckboxGroup(props: CheckboxGroupProps, ctx: SetupContext): UseCheckboxGroupFn {
  const valueList = toRef(props, 'modelValue') as IModelValue
  const defaultOpt = {
    checked: false,
    isShowTitle: true,
    halfChecked: false,
    showAnimation: true,
    disabled: false
  }

  const toggleGroupVal = (val: string | number | undefined) => {
    let index = -1
    if (['string', 'number'].includes(typeof valueList.value[0])) {
      index = valueList.value.findIndex(item => item === val)
    } else if (typeof valueList.value[0] === 'object') {
      index = (valueList.value as { value: string }[]).findIndex(item => item.value === val)
    }

    if (index === -1) {
      if (typeof props.options[0] === 'object') {
        const newOne = props.options.find(item => item.value === val)
        const res = [...valueList.value, newOne]
        ctx.emit('update:modelValue', res)
        ctx.emit('change', res)
        return
      }
      const res = [...valueList.value, val]
      ctx.emit('update:modelValue', res)
      ctx.emit('change', res)
      return
    }

    valueList.value.splice(index, 1)
    ctx.emit('update:modelValue', valueList.value)
    ctx.emit('change', valueList.value)
  }

  const isItemChecked = (itemVal: string | number | undefined) => {
    if (['string', 'number'].includes(typeof valueList.value[0])) {
      return valueList.value.includes(itemVal as never)
    } else if (typeof valueList.value[0] === 'object') {
      return (valueList.value as { value: string }[]).some(item => item.value === itemVal)
    }
  }

  const checkboxGroupSize = computed(() => props.size || '')

  provide(checkboxGroupInjectionKey, {
    disabled: toRef(props, 'disabled'),
    isShowTitle: toRef(props, 'isShowTitle'),
    color: toRef(props, 'color'),
    showAnimation: toRef(props, 'showAnimation'),
    beforeChange: props.beforeChange,
    isItemChecked,
    toggleGroupVal,
    itemWidth: toRef(props, 'itemWidth'),
    direction: toRef(props, 'direction'),
    size: checkboxGroupSize,
    border: toRef(props, 'border'),
    max: toRef(props, 'max'),
    modelValue: toRef(props, 'modelValue'),
    textColor: toRef(props, 'textColor')
  })

  return {
    defaultOpt
  }
}

export function useCheckboxButton(): UseCheckboxButtonFn {
  const checkboxGroupConf = inject(checkboxGroupInjectionKey, null)
  const mergedTextColor = computed(() => {
    return checkboxGroupConf?.textColor.value ?? undefined
  })

  return {
    mergedTextColor
  }
}
