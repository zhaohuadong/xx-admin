export const columns = [
  {
    label: '记录时间',
    prop: 'userCode',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '留存类型',
    prop: 'status',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '正常用户',
        value: 0,
      },
      {
        label: '带动号用户',
        value: 1,
      },
    ],
  },
  {
    label: '送礼时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '总余额',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '总收益',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '背包礼物价值',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '公会余额',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '公会收益',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '普通钩子价值',
    prop: 'gold',
    hideInSearch: true,
  },
]
