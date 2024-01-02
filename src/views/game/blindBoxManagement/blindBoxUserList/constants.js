// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '用户ID',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    hideInSearch: true,
  },

  {
    label: '头像',
    prop: 'giftName',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '累计投入',
    prop: 'type',
    hideInSearch: true,
  },
  {
    label: '累计产出',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '投产比',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'createTime',
    hideInSearch: true,
  },
]
export const blindBoxList = [
  {
    label: '铜盲盒',
    value: 1,
  },
  {
    label: '银盲盒',
    value: 2,
  },
  {
    label: '金盲盒',
    value: 3,
  },
]
