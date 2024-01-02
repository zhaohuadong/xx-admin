// 列表
export const column = [
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
    label: '中奖名称',
    prop: 'giftId',
    hideInTable: true,
    type: 'tag',
    enum: [
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
    ],
  },
  {
    label: '中奖名称',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '所属类型',
    prop: 'type',
    hideInSearch: true,
    type: 'select',
    enum: [
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
    ],
  },
  {
    label: '数量',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '更新时间',
    prop: 'createTime',
    hideInSearch: true,
  },
]
