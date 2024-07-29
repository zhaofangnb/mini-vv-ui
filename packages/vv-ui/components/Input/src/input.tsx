import { computed, defineComponent, ref, toRefs, nextTick } from 'vue'
import { inputProps, InputProps } from './input-type'
import '../style/input.scss'
import HoverIcon from './components/hover-icon'
import VIcon from '../../Icon/src/icon'

export default defineComponent({
  name: 'VInput',
  props: inputProps,
  setup(props: InputProps, { emit, slots }) {
    const inputRef = ref<HTMLInputElement>()
    const { size, modelValue, allowClear, disabled, placeholder } = toRefs(props)
    const prefixCls = 'v-input'
    const uncontrolledValue = ref(props.defaultValue)
    const getValue = computed(() => modelValue.value ?? uncontrolledValue.value)
    let preValue = getValue.value
    const focused = ref(false)

    const getShowClear = computed(() => allowClear.value && !disabled.value && getValue.value)

    const classes = computed(() => [prefixCls, `${prefixCls}-size-${size.value}`])
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, focused.value && `${prefixCls}-wrapper--focus`])
    const updateValue = (value: string) => {
      uncontrolledValue.value = value
      emit('update:modelValue', value)
    }
    const handleInput = (e: Event) => {
      const value = (e.target as HTMLInputElement).value
      updateValue(value)
      emit('input', value, e)

      nextTick(() => {
        if (inputRef.value && inputRef.value.value !== getValue.value) {
          inputRef.value.value = getValue.value
        }
      })
    }

    const handleClear = () => {
      updateValue('')
      emit('clear', '')
    }

    const handleFocus = (e: FocusEvent) => {
      focused.value = true
      emit('focus', e)
    }

    const handleChange = (currentValue: string, e: Event) => {
      if (currentValue !== preValue) {
        preValue = currentValue
        emit('change', currentValue, e)
      }
    }

    const handleBlur = (e: FocusEvent) => {
      focused.value = false
      handleChange(getValue.value, e)
      emit('blur', e)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const keyCode = e.key || e.code
      if (keyCode === 'Enter') {
        handleChange(getValue.value, e)
        emit('pressEnter', e)
      }
    }
    return () => {
      return (
        <span class={wrapperCls.value}>
          {slots.prefix && <span class={`${prefixCls}-prefix`}>{slots.prefix()}</span>}
          <input
            ref={inputRef}
            disabled={disabled.value}
            class={classes.value}
            placeholder={placeholder.value}
            value={getValue.value}
            onInput={handleInput}
            onFocus={handleFocus}
            onKeydown={handleKeyDown}
            onBlur={handleBlur}
          />
          {getShowClear.value && (
            <HoverIcon prefix={prefixCls} onClick={handleClear} class={`${prefixCls}-clear-btn`}>
              <VIcon name="close" size="15px" />
            </HoverIcon>
          )}
          {slots.suffix && <span class={`${prefixCls}-suffix`}> {slots.suffix()}</span>}
        </span>
      )
    }
  }
})
