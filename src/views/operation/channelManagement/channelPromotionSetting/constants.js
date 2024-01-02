export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '顶级渠道',
    prop: 'userId',
  },

  {
    label: '二级渠道',
    prop: 'userCode',
  },
  {
    label: '二级渠道标识',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '入场特效',
    prop: 'orderId',
    hideInSearch: true,
    type: 'img',
    animation: true,
  },
  {
    label: '渠道厅',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '渠道状态',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '配置时间',
    prop: 'orderTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]
// 编辑
export const formData = () => ({
  top: '小刘',
  second: '小王',
  secondId: '250',
  channelHall: '',
})

export const formRule = {
  top: [{ required: true }],
  second: [{ required: true }],
  secondId: [{ required: true }],
  channelHall: [{ required: false }],
}
