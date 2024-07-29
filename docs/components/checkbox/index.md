# VCheckbox 复选框


## 基本用法

:::demo
```vue
<template>
    <v-space direction="vertical">
        <v-checkbox label="Checked"  :isShowTitle="false" v-model="checked" @change="handleChange" />
        <v-checkbox label="Custom title" :isShowTitle="true" title="my title" v-model="checked2" />
        <v-checkbox label="No Animation" :isShowTitle="false"  :showAnimation="false" v-model="checked3" />
        <v-checkbox label="Disabled"  :isShowTitle="false" v-model="checked4"  disabled />
        <v-checkbox label="Half-checked" :isShowTitle="false" :half-checked="halfCheck" v-model="allCheck"  />
        <v-checkbox label="Custom color" :isShowTitle="false" v-model="customCheck" color="RGB(255, 193, 7)" />
    </v-space>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup () {
        const checked = ref(false)
        const checked2 = ref(false)
        const checked3 = ref(true)
        const checked4 = ref(true)
        const halfCheck = ref(true)
        const allCheck = ref(false)
        const customCheck = ref(true)
        const handleChange = (val) => {
            console.log(checked.value , val)
        }
        return {
            checked,
            checked2,
            checked3,
            checked4,
            halfCheck,
            allCheck,
            customCheck,
            handleChange
        }
    }
})
</script>
```
:::

## CheckGroup

:::demo
```vue
<template>
    <v-space direction="vertical">
        <v-checkbox-group v-model="value1" :options="options1" direction="row" />
        <v-checkbox-group v-model="value2" :options="options2" direction="row" />
    </v-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const value1 = ref([{name: 'data1', value: '2', id: 2}])
        const options1 = ref([
            { name: 'data1', disabled: true, value: '1', id: 1 },
            { name: 'data2', value: '2', id: 2 },
            { name: 'data3', value: '3', id: 3 }
        ])
        const value2 = ref(['data1', 'data2'])
        const options2 = ref(['data1', 'data2', 'data3', 'data4', 'data5'])
        return {
            value1,
            options1,
            value2,
            options2
        }
    }
})
</script>
```
:::

## 按钮样式

:::demo
```vue
<template>
    <v-space>
        <v-checkbox-group v-model="buttonValues1" size="small" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions1"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
        <v-checkbox-group v-model="buttonValues2" size="medium" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions2"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
        <v-checkbox-group v-model="buttonValues3" size="large" direction="column">
            <v-checkbox-button
                v-for="item in buttonOptions3"
                :label="item.label"
                :value="item.value"
                :key="item.value"
                :disabled="item.disabled"
                >
            </v-checkbox-button>
        </v-checkbox-group>
    </v-space>
</template>
<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
    setup () {
        const buttonOptions1 = ref([
            { label: '选项1', value: 2, id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
        const buttonOptions2 = ref([
            { label: '选项1', value: 2, disabled: true,  id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
        const buttonOptions3 = ref([
            { label: '选项1', value: 2, id: 1, title: '自定义title1' },
            { label: '选项2', value: 3, id: 2, title: '自定义title2' },
            { label: '选项3', value: 4, id: 3, title: '自定义title3' },
        ]);
         const buttonValues1 = ref([]);
         const buttonValues2 = ref([2]);
         const buttonValues3 = ref([4]);
        return {
            buttonOptions1,
            buttonOptions2,
            buttonOptions3,
            buttonValues1,
            buttonValues2,
            buttonValues3
        }
    }
})
</script>
```
:::


## Common Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| name     |  `string`                         |             | 原生属性                    |   [基本用法](#基本用法)|
| size     |  [size](#size)                    |             | 复选框大小                  |  [复选框大小](#按钮样式)|
| isShowTitle | `boolean`                      |             | 是否显示title提示           |  [是否显示title提示](#基本用法)|
| title     |  `string`                        |             | 自定义title提示内容         |  [title提示](#基本用法)|
| color     |  `string`                        |             | 复选框颜色                  |  [复选框颜色](#基本用法)|
| showAnimation | `boolean`                    |             | 展示动画                    | [展示动画](#基本用法)|
| disabled   | `boolean`                       |             | 禁用                        |  [禁用](#基本用法)|
| halfChecked | `boolean`                      |             | 半选中状态                   |  [半选中状态](#基本用法)|

## VCheckbox 
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| checked  |  `boolean`                        |             |   选择状态                 |
| value    |   `string/number`                 |             |   选中状态的值             |
| label    |   `string`                        |             |   显示标签                 |
| border   | `boolean`                         |             |   是否有边框               |
## VCheckboxGroup
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| direction|  [direction](#direction)           |             | 显示方向            
| itemWidth | `number`                          |             | 每一项 checkbox 的宽度(px)
| options   | `array`                           |             | 复选框选项数组
| max       | `number`                          |             | 可被勾选的最大数量
| textColor | `string`                          |             | 按钮形态被选中的字体样式

## VCheckboxButton
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |

### size
```ts
type  size =  'small' | 'medium' | 'large'
```

### direction
```ts
type  direction = 'row' | 'column'
```

## 事件

|   事件     |               说明                 |    跳转Demo   |
| :-------  | :-------------------------------- |   :---------- |
| change    |         checkbox改变的事件         |


