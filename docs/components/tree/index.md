# VTree 树

## 基础用法
:::demo
```vue
<template>
<VTree :data="data" checkable></VTree>
</template>

<script>
import {ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
        {
          label: '一级1',
          id: '一级1'
        },
        {
          label: '一级2',
          id: '一级2',
          expanded: true,
          checked: true,
          children: [
            {
              label: '二级2-1',
              id: '二级2-1'
            },
            {
              label: '二级2-2',
              id: '二级2-2',
              expanded: true,
              children: [
                {
                  label: '三级2-2-1',
                  id: '三级2-2-1'
                },
                {
                  label: '三级2-2-2',
                  id: '三级2-2-2'
                }
              ]
            }
          ]
        },
        {
          label: '一级3',
          id: '一级3',
          children: [
            {
              label: '二级3-1',
              id: '二级3-1'
            },
            {
              label: '二级3-2',
              id: '二级3-2'
            }
          ]
        },
        {
          label: '一级4',
          id: '一级4'
        }
      ])
    return {
        data
    }
  }
})
     
</script>
```
:::

## 自定义图标以及label
:::demo
```vue
<template>
<VTree :data=data>
  <template #icon="{ nodeData, toggleNode}">
      <span v-if="nodeData.isLeaf" class="v-tree-node__indent"></span>
          <span v-else @click="(event) => {
              event.stopPropagation();
              toggleNode(nodeData);
            }"
          >
            <svg :style="{
                transform: nodeData.expanded ? 'rotate(90deg)': '',
                display: 'inline-block',
                margin: '0 5px',
                cursor: 'pointer'
              }" viewBox="0 0 1024 1024" width="12" height="12"
            >
              <path d="M857.70558 495.009024 397.943314 27.513634c-7.132444-7.251148-18.794042-7.350408-26.048259-0.216941-7.253194 7.132444-7.350408 18.795065-0.216941 26.048259l446.952518 454.470749L365.856525 960.591855c-7.192819 7.192819-7.192819 18.85544 0 26.048259 3.596921 3.596921 8.311293 5.39487 13.024641 5.39487s9.42772-1.798972 13.024641-5.39487L857.596086 520.949836C864.747973 513.797949 864.796068 502.219239 857.70558 495.009024z"></path>
            </svg>
          </span>
  </template>
  <template #content="treeNode">
          <svg style="margin-right: 8px;" v-if="treeNode.isLeaf" id="octicon_file_16" viewBox="0 0 16 16" width="16" height="16" fill="#57606a" style="display:inline-block"><path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path></svg>
          <svg v-else  id="octicon_file-directory-fill_16" viewBox="0 0 16 16" width="16" height="16" fill="#54aeff" style="display:inline-block; margin-right: 8px;"><path d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3H7.5a.25.25 0 01-.2-.1l-.9-1.2C6.07 1.26 5.55 1 5 1H1.75z"></path></svg>
          {{treeNode.label}}
          <svg v-if="treeNode.isLeaf" title="modified" viewBox="0 0 16 16" width="16" height="16" fill="#9a6700" style="position: absolute; right: 0; margin-right: 8px;">
            <path fill-rule="evenodd" d="M2.75 2.5h10.5a.25.25 0 01.25.25v10.5a.25.25 0 01-.25.25H2.75a.25.25 0 01-.25-.25V2.75a.25.25 0 01.25-.25zM13.25 1H2.75A1.75 1.75 0 001 2.75v10.5c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0015 13.25V2.75A1.75 1.75 0 0013.25 1zM8 10a2 2 0 100-4 2 2 0 000 4z"></path>
          </svg>
        </template>
</VTree>
</template>
<script>
import {ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const data = ref([
        {
          label: '一级1',
          id: '一级1'
        },
        {
          label: '一级2',
          id: '一级2',
          expanded: true,
          children: [
            {
              label: '二级2-1',
              id: '二级2-1'
            },
            {
              label: '二级2-2',
              id: '二级2-2',
              expanded: true,
              children: [
                {
                  label: '三级2-2-1',
                  id: '三级2-2-1'
                },
                {
                  label: '三级2-2-2',
                  id: '三级2-2-2'
                }
              ]
            }
          ]
        },
        {
          label: '一级3',
          id: '一级3',
          children: [
            {
              label: '二级3-1',
              id: '二级3-1'
            },
            {
              label: '二级3-2',
              id: '二级3-2'
            }
          ]
        },
        {
          label: '一级4',
          id: '一级4'
        }
      ])
    return {
        data
    }
  }
})
     
</script>
```
:::

## 节点懒加载
 isLeaf: false 非叶子节点可懒加载数据
:::demo
```vue
<template>
  <VTree :data="data" @lazy-load="lazyLoad"></VTree>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
     const data = ref([
      {
        id: 'node-1',
        label: 'node-1',
        children: [
          {
            id: 'node-1-1',
            label: 'node 1-1',
            isLeaf: false,
          },
          { 
            id: 'node 1-2',
            label: 'node 1-2',
          },
        ],
      },
      { 
        id: 'node-2',
        label: 'node 2',
        isLeaf: false
      },
    ]);

    const lazyLoad = (node, callback) => {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy node 1-1',
                label: 'lazy node 1-1',
              },
              {
                id: 'lazy node 1-2',
                label: 'lazy node 1-2',
              },
            ],
          },
          {
            id: 'lazy node 2',
            label: 'lazy node 2',
          },
        ];
        callback({
          treeItems: data,
          node,
        });
      }, 1000);
    };
    return {
      data,
      lazyLoad
    }
  }
})
</script>
```
:::


## VTree Attributes
| 属性名    | 类型                              | 默认        | 说明                       | 跳转 Demo                 |
| :------- | :-------------------------------- | :---------- | :------------------------ | :------------------------ |
| data     |  `array`                          |             |                           |   [数据](#基础用法)|
| checkable|  `boolean`                        |             | 是否可选                   |  [是否可选](#基础用法)|
| lineable | `boolean`                         |             | 显示连线                   |  [显示连线](#基础用法)|



