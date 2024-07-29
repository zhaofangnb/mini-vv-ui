# VSpace 间距

## 基本用法

默认水平排列 
:::demo
```vue
<template>
  <VSpace>
    <VButton type="primary">hello</VButton>
    textNode
    <VButton type="primary">world</VButton>
  </VSpace>
</template>
```
:::

## 垂直间距

可以设置垂直方向排列的间距
:::demo
```vue
<template>
  <VSpace direction="vertical">
    <VButton type="primary">按钮一</VButton>
    <VButton type="primary">按钮二</VButton>
  </VSpace>
</template>
```
:::

## 间距大小

包含 4 个间距大小，mini-4px, small-8px(默认), medium-16px, large-24px, 也支持传数字来自定义间距大小
:::demo
```vue
<template>
  <VSpace size="medium">
    <VButton type="primary">按钮一</VButton>
    <VButton type="primary">按钮二</VButton>
  </VSpace>
</template>
```
:::

## VSpace Attributes
## VIcon Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| direction|  [direction](#direction)          |             |                           |   [使用方法](#使用方法)|
| size     |  [size](#size)                    |             | 间距大小                   |  [间距大小](#间距大小)|
| align    |  [align](#align)                  |             | 排列方式                   |  [排列方式](#排列方式)|
| wrap     |  `boolean`                        |             | 是否换行                   |  [排列方式](#排列方式)|
| fill     |  `boolean`                        |             | flex填充                   |  [flex填充](#flex填充)|

### direction
```ts
type  direction = 'horizontal' | 'vertical'
```

### size
```ts
type  size = 'mini' | 'small' | 'medium' | 'large'
```

### align
```ts
type align = 'start' | 'end' | 'center' | 'baseline'
```
