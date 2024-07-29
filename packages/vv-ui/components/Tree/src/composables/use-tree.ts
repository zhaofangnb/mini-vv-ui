import { computed, ref, Ref, unref, SetupContext } from 'vue'
import { InnerTreeNode, TreeNode, LazyNodeResult, UseTree } from '../tree-type'
import { generateInnerTree } from '../generate'

export function useTree(treeData: Ref<TreeNode[]> | TreeNode[], ctx: SetupContext): UseTree {
  // unref() 是 val = isRef(val) ? val.value : val 的语法糖, 如果参数是一个ref，则返回它的value,否则返回它本身
  const innerData = ref(generateInnerTree(unref(treeData)))

  // 展开、收起节点
  const toggleNode = (node: InnerTreeNode) => {
    const cur = innerData.value.find(item => item.id === node.id)
    if (cur) {
      cur.expanded = !cur.expanded
      //判断节点是否需要懒加载
      const innerNode = getNode(node)
      if (innerNode && innerNode.isLeaf === false && innerNode.expanded === true && !innerNode.childNodeCount) {
        innerNode.loading = true
        ctx.emit('lazy-load', node, dealChildNodesCallback)
      }
    }
  }

  const expanedTree = computed(() => {
    let exludedNodes: InnerTreeNode[] = []
    const result: InnerTreeNode[] = []

    for (const item of innerData.value) {
      if (exludedNodes.map(item => item.id).includes(item.id)) {
        continue
      }
      if (item.expanded !== true) {
        exludedNodes = getChildren(item)
      }
      result.push(item)
    }

    return result
  })

  // 获取指定节点的子节点
  const getChildren = (node: InnerTreeNode, recursive = true) => {
    const result: InnerTreeNode[] = []
    // 找到node 在列表中的索引
    const startIndex = innerData.value.findIndex(item => item.id === node.id)
    // 找到它后面所有子节点（level 比当前节点大）
    for (let i = startIndex + 1; i < innerData.value.length && node.level < innerData.value[i].level; i++) {
      if (recursive) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        // 直接子节点
        result.push(innerData.value[i])
      }
    }
    return result
  }

  const getParent = (node: InnerTreeNode) => {
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    return parentNode as InnerTreeNode
  }

  const setChecked = (node: InnerTreeNode) => {
    const parentNode = getParent(node)
    if (!parentNode) return
    // 兄弟节点
    const siblingNodes = getChildren(parentNode, true)
    const siblingCheckStatus = siblingNodes.every(sibling => sibling.checked)
    parentNode.checked = siblingCheckStatus
    const siblingIncheckedStatus = siblingNodes.some(item => item.checked)
    if (siblingCheckStatus) {
      // 全部选中
      parentNode.inChecked = false
    } else if (siblingIncheckedStatus) {
      // 兄弟节点中存在选中的节点
      parentNode.inChecked = true
    } else {
      // 都未选中
      parentNode.inChecked = false
    }
    // 向上级节点递归
    if (parentNode.parentId) setChecked(parentNode)
  }

  const toggleCheckNode = (node: InnerTreeNode) => {
    // 初始化待选中状态
    node.checked = !node.checked
    node.inChecked = false
    getChildren(node).forEach(child => {
      child.checked = node.checked
    })
    setChecked(node)
  }
  // 展开节点数组，计算展开线高度
  const getChildrenExpanded = (node: InnerTreeNode) => {
    const result: InnerTreeNode[] = []
    const startIndex = expanedTree.value.findIndex(item => item.id === node.id)
    // 获取展开节点数组，找到它后面所有的展开节点 && level比当前节点大
    for (let i = startIndex + 1; i < expanedTree.value.length && node.level < expanedTree.value[i].level; i++) {
      result.push(expanedTree.value[i])
    }
    return result
  }

  const getNode = (node: InnerTreeNode) => {
    const curNode = innerData.value.find(item => item.id === node.id)
    return curNode as InnerTreeNode
  }

  const getIndex = (node: InnerTreeNode) => {
    if (!node) return -1
    return innerData.value.findIndex(item => item.id === node.id) as number
  }

  // 获取子节点数据后，调用该函数
  const dealChildNodesCallback = (result: LazyNodeResult) => {
    // 获取懒加载的父级节点
    const node = getNode(result.node)
    // 结束加载状态
    node.loading = false
    // 拍平要懒加载的数据
    const childNodes = ref<InnerTreeNode[]>(generateInnerTree(result.treeItems, node.level, node))
    childNodes.value.forEach(child => {
      if (child.level - 1 === node.level) {
        child.parentId = node.id
      }
    })
    // 追加异步获取的数据到原始节点中
    const parentIndex = getIndex(node)
    if (parentIndex) {
      innerData.value.splice(parentIndex + 1, 0, ...childNodes.value)
    }

    const children = getChildren(node)
    node.childNodeCount = children.length
  }
  return {
    innerData,
    expanedTree,
    toggleNode,
    getChildren,
    getParent,
    toggleCheckNode,
    getChildrenExpanded,
    getNode,
    getIndex
  }
}
