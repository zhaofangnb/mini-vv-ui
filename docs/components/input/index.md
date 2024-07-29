# 输入框 VInput 

## 基本用法

:::demo
```vue
<template>
    <VSpace>
        <VInput v-model="value"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
</script>
```
:::

## 输入框禁用
:::demo
```vue
<template>
    <VSpace>
        <VInput v-model="value" disabled placeholder="请输入"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
</script>
```
:::

## 输入一键清空
:::demo
```vue
<template>
    <VSpace>
        <VInput v-model="value"  placeholder="请输入" allowClear></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
</script>
```
:::

## 输入框尺寸
:::demo
```vue
<template>
    <VSpace direction="vertical">
        <VInput v-model="value1" size="small" placeholder="请输入" :allowClear="true"></VInput>
        <VInput v-model="value2" size="medium" placeholder="请输入" :allowClear="true"></VInput>
        <VInput v-model="value3" size="large" placeholder="请输入" :allowClear="true"></VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value1 = ref('')
        const value2 = ref('')
        const value3 = ref('')
        return {
            value1,
            value2,
            value3
        }
    }
})
</script>
```
:::

## 带图标的输入框
:::demo
```vue
<template>
    <VSpace>
        <VInput v-model="value" placeholder="请输入">
            <template #suffix>
                <VIcon name="search" />
            </template>
        </VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        return {
            value
        }
    }
})
</script>
```
:::

## 输入响应事件

:::demo
```vue
<template>
    <VSpace>
        <VInput v-model="value" placeholder="请输入"   @clear="handleClear"  @focus="handleFocus" @blur="handleBlur" @pressEnter="pressEnter" allowClear>
        </VInput>
    </VSpace>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent ({
    setup () {
        const value = ref('')
        const handleInput = (value, e) => {
            console.log(value, e.target.value)
        }
        const handleClear = (value) => {
            console.log('清空')
        }
        const handleFocus = (e) => {
            e.target.focus()
            console.log('focus', e)
        }
        const handleBlur = (e) => {
            e.target.blur()
            console.log('blur', e)
        }
        const pressEnter = (e) => {
            console.log('pressEnter', e)
        }
        return {
            value,
            handleInput,
            handleClear,
            handleFocus,
            handleBlur,
            pressEnter
        }
    }
})
</script>
```
:::
