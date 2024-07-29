# VButton 按钮

## 基础按钮

使用 type、plain、round 和 circle 来定义样式 
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
  <VSpace size="medium">
    <VButton type="primary">普通按钮</VButton>
    <VButton type="success">成功按钮</VButton>
    <VButton type="info">信息按钮</VButton>
    <VButton type="warning">警告按钮</VButton>
    <VButton type="danger">危险按钮</VButton>
    </VSpace>
  </div>
  <div style="padding: 10px 0">
  <VSpace size="medium">
    <VButton type="primary" plain>普通按钮</VButton>
    <VButton type="success" plain>成功按钮</VButton>
    <VButton type="info" plain>信息按钮</VButton>
    <VButton type="warning" plain>警告按钮</VButton>
    <VButton type="danger" plain>危险按钮</VButton>
     </VSpace>
  </div>
  <div style="padding: 10px 0">
    <VSpace size="medium">
    <VButton type="primary" round>普通按钮</VButton>
    <VButton type="success" round>成功按钮</VButton>
    <VButton type="info" round>信息按钮</VButton>
    <VButton type="warning" round>警告按钮</VButton>
    <VButton type="danger" round>危险按钮</VButton>
     </VSpace>
  </div>
  <div style="padding: 10px 0; display:flex;">
    <VSpace size="medium">
    <VButton type="primary" icon="edit" circle></VButton>
    <VButton type="success" icon="collect" circle></VButton>
    <VButton type="info" icon="search" circle></VButton>
    <VButton type="warning" icon="envolop" circle></VButton>
    <VButton type="danger" icon="delete" circle></VButton>
     </VSpace>
  </div>
</template>
```
:::

## 块级按钮
:::demo
```vue
<template>
    <VButton type="primary" block>块级按钮</VButton>
</template>
```
:::

## 禁用状态

使用 disabled 属性来控制按钮是否为禁用状态。 该属性接受一个 Boolean 类型的值。

:::demo
```vue
<template>
  <div style="padding: 10px 0;">
    <VSpace size="medium">
    <VButton type="primary" disabled>普通按钮</VButton>
    <VButton type="success" disabled>成功按钮</VButton>
    <VButton type="info" disabled>信息按钮</VButton>
    <VButton type="warning" disabled>警告按钮</VButton>
    <VButton type="danger" disabled>危险按钮</VButton>
     </VSpace>
  </div>
</template>
```
:::

## 按钮大小

使用 size 属性来控制按钮大小,可使用 small、medium、large 三种值。
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
   <VSpace size="medium">
    <VButton type="primary" size="small">普通按钮</VButton>
    <VButton type="primary" size="medium">普通按钮</VButton>
    <VButton type="primary" size="large">普通按钮</VButton>
     </VSpace>
  </div>
</template>
```
:::

## 文本按钮
使用 type="text" 属性。
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
   <VSpace size="medium">
    <VButton type="text">文本按钮</VButton>
    <VButton type="text" disabled>文本按钮</VButton>
    </VSpace>
  </div>
</template>
```
:::

## 图标按钮

使用 icon 属性来为按钮添加图标。
:::demo
```vue
<template>
  <VSpace size="medium">
    <VButton type="primary" icon="edit"></VButton>
    <VButton type="primary" icon="collect"></VButton>
    <VButton type="primary" icon="envolop"></VButton>
    <VButton type="primary" icon="delete"></VButton>
    <VButton type="primary"><VIcon name="search" class="v-icon-left"></VIcon>Search</VButton>
    <VButton type="primary">Upload<i class="v-icon-upload v-icon-right"></i></VButton>
  </VSpace>
</template>
```
:::

## 加载状态按钮

使用 loading 属性来控制按钮的加载状态, 该属性接受一个 Boolean 类型的值。 
:::demo
```vue
<template>
  <div style="padding: 10px 0;">
    <VButton type="primary" size="small" loading>loading</VButton>
  </div>
</template>
```
:::

## 按钮组
:::demo
```vue
<template>
<VButtonGroup>
  <VButton type="primary">普通按钮</VButton>
  <VButton type="success">成功按钮</VButton>
  <VButton type="info">信息按钮</VButton>
</VButtonGroup>
</template>
```
:::


## VButton Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| type     | [VButtonType](#VButtonType)       | primary     | 按钮类型             | [基础按钮](#基础按钮)|
| size     | [VButtonSize](#VButtonSize)       | medium      | 按钮大小             | [按钮大小](#按钮大小)|
| plain    | `boolean`                         | false       | 朴素按钮             | [基础按钮](#基础按钮)|
| round    | `boolean`                         | false       | 圆角按钮             | [基础按钮](#基础按钮)|
| circle   | `boolean`                         | false       | 圆形按钮             | [基础按钮](#基础按钮)|
| block    | `boolean`                         | false       | 按钮块级显示)        | [块级按钮](#块级按钮)|
| disabled | `boolean`                         | false       | 是否禁用             | [禁用状态](#禁用状态)|
| loading  | `boolean`                         | false       | 设置加载中状态       | [加载状态按钮](#加载状态按钮)|
| icon     | `string`                          | --          | 自定义按钮图标       | [图标按钮](#图标按钮)|


#### VButtonType
```ts
type VButtonType = 'primary' | 'success' | 'info'| 'warning'| 'danger' | 'text'
```

#### VButtonSize
```ts
type VButtonSize = 'small' | 'medium' | 'large'

