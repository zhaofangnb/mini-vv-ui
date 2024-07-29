# Tabs 页签

## 基础使用

:::demo
```vue
<template>
    <VTabs v-model="activeTab">
        <VTab id="tab1" title="Tab1">Tab1</VTab>
        <VTab id="tab2" title="Tab2">Tab2</VTab>
    </VTabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const activeTab = ref('tab1')
        return {
            activeTab
        }
    }
})

</script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
```
:::

## 新增和关闭标签
 
:::demo
```vue
<template>
    <VTabs v-model="activeTab" closable addable>
        <VTab id="tab1" title="Tab1">Tab1</VTab>
        <VTab id="tab2" title="Tab2">Tab2</VTab>
    </VTabs>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const activeTab = ref('tab1')
        return {
            activeTab
        }
    }
})

</script>
<style>
.vp-doc li + li {
  margin-top: 0;
}
</style>
```
:::