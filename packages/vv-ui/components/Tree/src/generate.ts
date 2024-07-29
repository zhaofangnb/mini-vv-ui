import { InnerTreeNode, TreeNode } from './tree-type'

export function generateInnerTree(treeData: TreeNode[], level = 0, parentNode = {} as InnerTreeNode): InnerTreeNode[] {
  level++
  return treeData.reduce((prev, cur) => {
    const node = { ...cur } as InnerTreeNode
    node.level = level
    if (level > 1 && parentNode) {
      node.parentId = parentNode.id
    }
    if (node.children) {
      const children = generateInnerTree(node.children, level, node)
      delete node.children
      return prev.concat(node, children)
    } else if (node.isLeaf === false) {
      // 处理懒加载的叶子节点
      return prev.concat(node)
    } else {
      // 叶子节点
      node.isLeaf = true
      return prev.concat(node)
    }
  }, [] as InnerTreeNode[])
}
