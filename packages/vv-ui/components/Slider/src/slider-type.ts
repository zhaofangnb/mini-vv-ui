import type { ExtractPropTypes, PropType, Ref } from 'vue'

export const sliderProps = {
  modelValue: {
    type: Number,
    default: 0
  },
  min: {
    type: Number,
    default: 0
  },
  max: {
    type: Number,
    default: 100
  },
  step: {
    //滑动输入条的步长，取值必须大于等于 1，且必须可被(max-min)整除
    type: Number,
    default: 1
  },
  disabled: {
    type: Boolean,
    default: false
  },
  tipRenderer: {
    type: [Function, null] as PropType<(val: number) => string | null>,
    default: () => (value: number) => `${value}`
  }
} as const

export type SliderProps = ExtractPropTypes<typeof sliderProps>

export interface UseSliderEvent {
  sliderRunway: Ref<HTMLDivElement | undefined>
  popoverShow: Ref<boolean>
  percentDisplay: Ref<string>
  currentValue: Ref<number>
  handleRunwayMousedown: (e: MouseEvent) => void
  handleButtonMousedown: (e: MouseEvent) => void
}
