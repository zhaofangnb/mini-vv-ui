import { computed, defineComponent, SetupContext } from 'vue'
import { useNamespace } from '../../../utils/use-namespace'
import { sliderProps, SliderProps } from './slider-type'
import { useSliderEvent } from './composables/user-slider'
import { isFunction } from '../../../utils/type'
import '../style/slider.scss'

export default defineComponent({
  name: 'VSlider',
  props: sliderProps,
  setup(props: SliderProps, ctx: SetupContext) {
    const ns = useNamespace('slider')
    const { sliderRunway, popoverShow, percentDisplay, currentValue, handleButtonMousedown, handleRunwayMousedown } =
      useSliderEvent(props, ctx)
    const disableClass = computed(() => {
      return props.disabled ? 'disabled' : ''
    })
    const tipsContent = computed(
      () => (isFunction(props.tipRenderer) ? props.tipRenderer(currentValue.value) : '') as string
    )
    return () => {
      return (
        <div class={ns.b()}>
          <div
            ref={sliderRunway}
            class={[ns.e('runway'), disableClass.value]}
            onMousedown={handleRunwayMousedown}
            onMouseout={() => (popoverShow.value = false)}
          >
            <div class={[ns.e('bar'), disableClass.value]} style={{ width: percentDisplay.value }}></div>
            <div
              class={[ns.e('button'), disableClass.value]}
              style={{ width: percentDisplay.value }}
              onMousedown={handleButtonMousedown}
              onMouseenter={() => (popoverShow.value = true)}
              onMouseout={() => (popoverShow.value = false)}
            ></div>
            {props.tipRenderer === null ? null : popoverShow.value ? (
              <div class={ns.e('popover')} style={{ left: percentDisplay.value }}>
                <div class={ns.e('popover-arrow')}></div>
                <div cass={ns.e('popover-content')}>{tipsContent.value}</div>
              </div>
            ) : null}
          </div>
        </div>
      )
    }
  }
})
