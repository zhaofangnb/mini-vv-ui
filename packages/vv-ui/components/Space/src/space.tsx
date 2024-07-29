import { defineComponent, computed, CSSProperties } from 'vue'
import { spaceProps, SpaceSize } from './space-type'
import { isNumber } from '../../../utils/type'
import { getAllElements } from '../../../utils/global-config'
import '../style/space.scss'

export default defineComponent({
  name: 'VSpace',
  props: spaceProps,
  setup(props, { slots }) {
    const prefixCls = 'v-space'
    // if space' direction is horizontal, the default align is center
    const mergedAlign = computed(() => props.align ?? (props.direction === 'horizontal' ? 'center' : ''))
    const sizeMap = {
      mini: '4px',
      small: '8px',
      medium: '16px',
      large: '28px'
    }
    const getMargin = (size: SpaceSize | number | string) => {
      if (isNumber(size)) return size + 'px'
      return sizeMap[size as unknown as SpaceSize] ?? size + 'px'
    }
    const getStyle = (isLast: boolean): CSSProperties => {
      const style: CSSProperties = {}
      const marginRight = getMargin(props.size)
      const marginBottom = getMargin(props.size)
      if (isLast) {
        return props.wrap ? { marginBottom } : {}
      }
      if (props.direction === 'horizontal') {
        style.marginRight = marginRight
      }
      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom
      }

      return style
    }

    const classes = computed(() => [
      prefixCls,
      `${prefixCls}-${props.direction}`,
      props.wrap && `${prefixCls}-wrap`,
      props.fill && `${prefixCls}-fill`,
      mergedAlign.value && `${prefixCls}-align-${mergedAlign.value}`
    ])
    return () => {
      // 得到插槽中的孩子组件数组
      const children = getAllElements(slots.default?.())
      return (
        <div class={classes.value}>
          {children.map((item, index) => (
            <div key={index} class={`${prefixCls}-item`} style={getStyle(children.length - 1 === index)}>
              {item}
            </div>
          ))}
        </div>
      )
    }
  }
})
