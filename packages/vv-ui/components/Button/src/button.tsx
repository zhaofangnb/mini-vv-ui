import { defineComponent, toRefs, SetupContext } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
import '../style/button.scss'

export default defineComponent({
  name: 'VButton',
  props: buttonProps,
  setup(props: ButtonProps, ctx: SetupContext) {
    const { type, size, disabled, block, plain, round, circle, loading, icon } = toRefs(props)
    return () => {
      // 定义插槽, 类型断言
      const defaultSlot = ctx.slots.default ? ctx.slots.default() : ''
      const blockCls = block.value ? 'v-btn-block' : ''
      const isRound = round.value ? 'v-btn-round' : ''
      // 适配圆角按钮大小
      const isCircle = (circle: boolean, size: string) => {
        if (circle) {
          if (size === 'small') {
            return 'v-btn-circle-sm'
          } else if (size === 'medium') {
            return 'v-btn-circle-md'
          } else if (size === 'large') {
            return 'v-btn-circle-lg'
          }
        } else {
          return ''
        }
      }
      const isPlain = (plain: boolean, type: string) => {
        if (plain) {
          if (type === 'primary') {
            return 'v-btn-palin-primary'
          } else if (type === 'success') {
            return 'v-btn-palin-success'
          } else if (type === 'info') {
            return 'v-btn-palin-info'
          } else if (type === 'warning') {
            return 'v-btn-palin-warning'
          } else if (type === 'danger') {
            return 'v-btn-palin-danger'
          }
        } else {
          return ''
        }
      }

      return (
        <button
          disabled={disabled.value}
          class={`v-btn
                        v-btn-${type.value} 
                        v-btn-${size.value} 
                        ${isRound}
                        ${isCircle(circle.value, size.value)}
                        ${blockCls}
                        ${isPlain(plain.value, type.value)}
                        `}
        >
          {loading.value && <i class={`v-icon-loading v-icon-left`}></i>}
          {icon.value && !loading.value && <i class={`v-icon-${icon.value}`}></i>}
          {defaultSlot}
        </button>
      )
    }
  }
})
