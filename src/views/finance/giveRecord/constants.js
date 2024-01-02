export const columns = [
  // { type: 'selection' },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '用户头像',
    prop: 'profilePath',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '礼物名称',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '送礼数量',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '礼物价值(金币)',
    prop: 'price',
    hideInSearch: true,
  },
  {
    label: '送礼时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '送礼时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '操作者',
    prop: 'creator',
  },
]
