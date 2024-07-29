import { defineComponent, SetupContext, toRefs } from 'vue'
import { linkProps, LinkProps } from './link-type'
import { useNamespace } from '../../../utils/use-namespace'
import { VIcon } from '../../Icon'
import '../style/link.scss'

export default defineComponent({
  name: 'VLink',
  props: linkProps,
  setup(props: LinkProps, ctx: SetupContext) {
    const { type, href, icon, underline, disabled } = toRefs(props)
    const ns = useNamespace('link')
    const linkCls = {
      [ns.b()]: true,
      [ns.e(type.value)]: true,
      [ns.m('disabled')]: disabled.value,
      [ns.m('underline')]: underline.value
    }

    return () => {
      return (
        <a class={linkCls} href={href?.value ? href?.value : undefined}>
          {icon.value && <VIcon name={icon.value} />}
          <span class={ns.e('inner')}>{ctx.slots.default?.()}</span>
        </a>
      )
    }
  }
})
