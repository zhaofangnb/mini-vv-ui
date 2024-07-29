import { defineComponent, SetupContext } from 'vue'
import { checkboxGroupProps, CheckboxGroupProps } from './checkbox-type'
import VCheckbox from './checkbox'
import { useNamespace } from '../../../utils/use-namespace'
import { useCheckboxGroup } from './composables/use-checkbox'
import '../style/checkbox-group.scss'

export default defineComponent({
  name: 'VCheckboxGroup',
  props: checkboxGroupProps,
  setup(props: CheckboxGroupProps, ctx: SetupContext) {
    const ns = useNamespace('checkbox')
    const { defaultOpt } = useCheckboxGroup(props, ctx)
    return () => {
      let children: any = ctx.slots.default?.()

      const getContent = () => {
        if (children) {
          return children
        } else {
          if (props.options?.length > 0) {
            children = props.options.map(opt => {
              let mergedOpt = null
              if (typeof opt === 'string') {
                mergedOpt = Object.assign({}, defaultOpt, {
                  label: opt,
                  value: opt
                })
              } else if (typeof opt === 'object') {
                mergedOpt = Object.assign({}, defaultOpt, {
                  ...opt,
                  label: opt.name
                })
              }
              return <VCheckbox {...mergedOpt}></VCheckbox>
            })
          }
          return children
        }
      }
      return (
        <div
          class={[
            ns.e('group'),
            {
              'is-row': props.direction === 'row',
              'is-column': props.direction === 'column'
            }
          ]}
        >
          {getContent()}
        </div>
      )
    }
  }
})
