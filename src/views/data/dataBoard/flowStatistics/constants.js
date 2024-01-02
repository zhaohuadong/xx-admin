export const columns = [
  {
    label: '',
    prop: 'timeType',
    type: 'selectTime',
    defaultValue: '今日',
    enum: [
      {
        label: '今日',
        value: '今日',
      },
      {
        label: '本周',
        value: '本周',
      },
      {
        label: '本月',
        value: '本月',
      },
      {
        label: '自定义',
        value: '自定义',
      },
    ],
    dateType: 'daterange',
    selectTime: [],
  },
  {
    label: '房间编号',
    prop: 'userCode',
  },
  {
    label: '房间名称',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '房间标签',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '房间礼物流水（金币）',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '盲盒流水（金币）',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '深海寻宝（金币）',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '其他数据（金币）',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '总流水（金币）',
    prop: 'orderTime',
    hideInSearch: true,
  },
]
