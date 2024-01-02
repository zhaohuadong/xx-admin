/**
 * v-tooltipAutoShow 超出宽度显示tooltip
 */
import { getStyle } from 'element-plus/lib/utils/dom/index'
// 指令名
const tooltipAutoShow = {
  // 生命周期
  // el 指令绑定到的DOM元素
  // binding 一个对象包含一堆属性，详细的去看官网https://cn.vuejs.org/guide/reusability/custom-directives.html#directive-hooks
  // vnode 代表绑定元素的底层 VNode
  created(el, binding, vnode) {
    // 找到ElTooltip 的节点
    const tooltipNode = vnode.children.find((childrenCmpt) => childrenCmpt.component?.type.name === 'ElTooltip')
    if (tooltipNode) {
      // 获取ElTooltip 的节点的props
      const { content } = tooltipNode.props
      // 如果内容名称是添加、编辑、删除、查看 则直接全部展示
      if (content && ['添加', '编辑', '删除', '查看'].includes(content)) {
        el.addEventListener('click', function (e) {
          const defaultDisabled = tooltipNode.component.props.disabled
          console.log(defaultDisabled)
          if (!defaultDisabled) {
            tooltipNode.component.props.disabled = true
            setTimeout(() => {
              tooltipNode.component.props.disabled = defaultDisabled
            }, 200)
          }
        })
      } else {
        // 其他的则监听 鼠标指针穿过事件
        el.addEventListener('mouseenter', (e) => {
          tooltipNode.component.props.disabled = true
          const range = document.createRange()
          range.setStart(el, 0)
          range.setEnd(el, el.childNodes.length)
          const rangeWidth = Math.round(range.getBoundingClientRect().width)
          const padding =
            (parseInt(getStyle(el, 'paddingLeft'), 10) || 0) + (parseInt(getStyle(el, 'paddingRight'), 10) || 0)
          if (rangeWidth + padding > el.offsetWidth || el.scrollWidth > el.offsetWidth) {
            tooltipNode.component.props.disabled = false
          }
        })
      }
    }
  },
}
export default tooltipAutoShow
