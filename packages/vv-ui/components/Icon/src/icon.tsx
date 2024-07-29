import { computed, defineComponent, toRef } from 'vue'
import { iconProps, IconProps } from './icon-type'
import '../style/icon.scss'

export default defineComponent({
  name: 'VIcon',
  props: iconProps,
  setup(props: IconProps, { attrs }) {
    const iconName = toRef(props, 'name')
    const iconSize = computed(() => {
      return typeof props.size === 'number' ? `${props.size}px` : props.size
    })
    // 在线资源，使用图标显示
    const onlineIcon = (
      <img
        src={props.name}
        style={{
          width: iconSize.value,
          verticalAlign: 'middle',
          color: props.color
        }}
        {...attrs}
      ></img>
    )
    const fontIcon = <i class={`v-icon-${iconName.value}`} style={{ fontSize: iconSize.value, color: props.color }}></i>

    return () => (/http|https/.test(props.name) ? onlineIcon : fontIcon)
  }
})
