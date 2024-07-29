# VIcon 图标

## 使用方法

1.使用 name 属性来显示系统自定义图标。

:::demo
```vue
<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" :size="20"></VIcon>
    <VIcon name="edit" :size="25"></VIcon>
    </VSpace>
  </div>
</template>
```
:::

2.使用在线资源来显示图标。
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
    <VIcon name="https://vitejs.dev/logo.svg" :size="20"></VIcon>
  </div>
</template>
```
:::

## 图标大小

:::demo
```vue
<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" size="20px"></VIcon>
    <VIcon name="upload" :size="20"></VIcon>
    </VSpace>
  </div>
</template>
```
:::

## 图标颜色
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
   <VSpace size="small">
    <VIcon name="search" size="20px" color="#5e7ce0"></VIcon>
    <VIcon name="delete" :size="20" color="red"></VIcon>
    </VSpace>
  </div>
</template>
```
:::


## VIcon Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| name     |  `string`                         |             | 系统自定义图标             |   [使用方法](#使用方法)|
| size     |  `string`                         |             | 图标大小                   |  [图标大小](#图标大小)|
| color    |  `string`                         |             | 图标颜色                   |  [图标颜色](#图标颜色)|
