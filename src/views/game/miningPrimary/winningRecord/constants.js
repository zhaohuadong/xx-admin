// 列表
export const column = [
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '序号',
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
  },

  {
    label: '中奖礼物',
    prop: 'giftId',
    type: 'tag',
    enum: [{ value: 1, label: 'fdfsed' }],
    hideInTable: true,
  },
  {
    label: '所属类型',
    prop: 'type',
    hideInSearch: true,
    type: 'select',
    enum: [
      { value: 1, label: '单独' },
      { value: 2, label: '十连' },
      { value: 3, label: '多连' },
      { value: 4, label: '新手' },
      { value: 5, label: '独立' },
      { value: 30, label: '特殊奖池' },
      { value: 40, label: '特殊个人奖池' },
      { value: 50, label: '特殊独立奖池' },
    ],
  },
  {
    label: '中奖礼物',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '数量',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '中奖时间',
    prop: 'createTime',
    hideInSearch: true,
  },
]
