# VLink 链接

## 基本用法
:::demo
```vue
<template>
    <v-space>
    <v-link href="http://www.baidu.com">跳转</v-link>
    <v-link :underline="false">不跳转,无下划</v-link>
    <v-link icon="edit">带图标</v-link>
    <v-link type="primary">普通</v-link>
    <v-link type="success">成功</v-link>
    <v-link type="warning">警告</v-link>
    <v-link type="info">信息</v-link>
    <v-link type="danger">危险</v-link>
    <v-link type="default">默认</v-link>
    <v-link disabled>禁用</v-link>
    <v-link :underline="false" disabled>禁用</v-link>
    </v-space>
</template>
```
:::


## VLink Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| type     | [VLinkType](#VLinkType)           | default     | 类型                 | [基本用法](#基本用法)|
| href      | `string`                         | undefied    | 原生属性href             
| underline | `boolean`                        | true        | 下划线            
| disabled  | `boolean`                        | false       | 是否禁用            
| icon      | `string`                         |             | 系统自带图标      

#### VLinkType
```ts
type VLinkType = 'primary' | 'success' | 'info'| 'warning'| 'danger' | 'default'
