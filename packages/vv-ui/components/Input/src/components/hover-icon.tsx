import { defineComponent, computed, PropType } from 'vue'
import { call } from '../../../../utils/call'

export default defineComponent({
  name: 'HoverIcon',
  props: {
    prefix: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function as PropType<(e: MouseEvent) => void>
    }
  },
  setup(props, { slots }) {
    const prefixCls = 'v-input'
    const classes = computed(() => [`${props.prefix}-hover-icon`, props.disabled && `${prefixCls}-disabled`])
    const handleClick = (e: MouseEvent) => {
      if (props.onClick) call(props.onClick, e)
    }
    return () => {
      return (
        <span class={classes.value} onClick={handleClick}>
          {slots.default?.()}
        </span>
      )
    }
  }
})
