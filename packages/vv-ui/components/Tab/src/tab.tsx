import { defineComponent, inject, Ref } from 'vue'
import { tabProps, TabProps } from './tab-type'

export default defineComponent({
  name: 'VTab',
  props: tabProps,
  setup(props: TabProps, { slots }) {
    // 当前激活项
    const activeTab = inject('active-tab') as Ref<string>
    // 获取tabsData并将自身数据加入
    const tabsData = inject('tabs-data') as Ref<Array<{ id: string; title: string; type?: 'random'; content?: string }>>
    tabsData.value.push({
      id: props.id,
      title: props.title
    })
    return () => <>{props.id === activeTab.value && <div class={'v-tab'}> {slots.default?.()}</div>}</>
  }
})
