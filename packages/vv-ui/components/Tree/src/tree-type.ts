import { ExtractPropTypes, PropType, Ref, ComputedRef } from 'vue'

export interface TreeNode {
  label: string
  id?: string
  children?: TreeNode[]

  selected?: boolean // 点击选中
  checked?: boolean // 勾选
  expanded?: boolean // 展开
  inChecked?: boolean // 待选中

  disableSelect?: boolean
  disableCheck?: boolean
  disableToggle?: boolean
}

export interface InnerTreeNode extends TreeNode {
  parentId?: string // 父节点ID
  level: number // 父节点层级
  isLeaf?: boolean // 是否叶子节点
  loading?: boolean // 节点是否显示加载中
  childNodeCount?: number //该节点子节点的数量
}

export const treeProps = {
  data: {
    type: Object as PropType<Array<TreeNode>>,
    required: true
  },
  // 是否显示 checkbox
  checkable: {
    type: Boolean,
    default: false
  },
  // 是否显示参考线
  lineable: {
    type: Boolean,
    default: false
  },
  // 节点增删操作
  operable: {
    type: Boolean,
    default: false
  },
  // 节点可拖拽
  dragable: {
    type: Boolean,
    default: false
  }
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>

export type LazyNodeResult = {
  node: InnerTreeNode
  treeItems: TreeNode[]
}

export type UseTree = {
  innerData: Ref<InnerTreeNode[]>
  expanedTree: ComputedRef<InnerTreeNode[]>
  toggleNode: (treeNode: InnerTreeNode) => void
  toggleCheckNode: (treeNode: InnerTreeNode) => void
  getChildren: (treeNode: InnerTreeNode, recursive?: boolean) => InnerTreeNode[]
  getChildrenExpanded: (treeNode: InnerTreeNode) => InnerTreeNode[]
  getNode: (treeNode: InnerTreeNode) => InnerTreeNode | undefined
  getIndex: (treeNode: InnerTreeNode) => number
  getParent: (treeNode: InnerTreeNode) => InnerTreeNode | undefined
}
