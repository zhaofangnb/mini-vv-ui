import { defineComponent, toRefs, SetupContext } from 'vue'
import { useTree } from './composables/use-tree'
import { treeProps, TreeProps } from './tree-type'
import '../style/tree.scss'
import { VIcon } from '../../Icon'

export default defineComponent({
  name: 'VTree',
  props: treeProps,
  setup(props: TreeProps, ctx: SetupContext) {
    const { data, checkable, lineable, operable, dragable } = toRefs(props)
    const { slots } = ctx
    // 每个节点宽度
    const NODE_INDENT = 24
    // 每个节点高度
    const NODE_HEIGHT = 28

    const { expanedTree, toggleNode, getChildrenExpanded, toggleCheckNode } = useTree(data.value, ctx)
    return () => {
      return (
        <div class="v-tree">
          {expanedTree.value.map(treeNode => {
            const { level, isLeaf, expanded, loading, childNodeCount } = treeNode
            return (
              <div class="v-tree-node" style={{ paddingLeft: `${NODE_INDENT * (level - 1)}px` }}>
                {/* 对应展开节点的连接线 */}
                {!isLeaf && expanded && lineable && (
                  <span
                    class="v-tree-node-line"
                    style={{
                      height: `${NODE_HEIGHT * getChildrenExpanded(treeNode).length}px`,
                      left: `${NODE_INDENT * (level - 1) + 8}px`,
                      top: `${NODE_HEIGHT}px`
                    }}
                  ></span>
                )}

                {/* 前面的图标负责展开收起 */}
                {isLeaf ? (
                  <span style={{ display: 'inline-block', width: '18px' }}></span>
                ) : slots.icon ? (
                  slots.icon({ nodeData: treeNode, toggleNode })
                ) : (
                  <svg
                    onClick={() => toggleNode(treeNode)}
                    style={{
                      width: '18px',
                      height: '18px',
                      display: 'inline-block',
                      transform: expanded ? 'rotate(90deg)' : ''
                    }}
                    viewBox="0 0 1024 1024"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="currentColor" d="M384 192v640l384-320.064z"></path>
                  </svg>
                )}

                {/* 复选框勾选/待选中/未勾选状态 */}
                {checkable.value && (
                  <span
                    class={`v-tree-check
                          ${treeNode.inChecked ? 'v-tree-node__inChecked' : ''}`}
                  >
                    {treeNode.inChecked && (
                      <span class="v-tree-check__inner" onClick={() => toggleCheckNode(treeNode)}>
                        -
                      </span>
                    )}
                    {/* 此处等后面checkBox组件再替换 */}
                    <input
                      type="checkbox"
                      style={{ marginRight: '8px' }}
                      v-model={treeNode.checked}
                      onClick={() => toggleCheckNode(treeNode)}
                    ></input>
                  </span>
                )}

                {/* 标签文字 */}
                {slots.content ? slots.content(treeNode) : treeNode.label}

                {/* 懒加载节点 */}
                {loading && <VIcon name="loading" size={20} loading={loading}></VIcon>}
              </div>
            )
          })}
        </div>
      )
    }
  }
})
