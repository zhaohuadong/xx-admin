// 人气榜
export const columns = [
  {
    label: '期数',
    prop: 'userCode',
    hideInSearch: true,
  },
  {
    label: '开始时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '结束时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '周星编号',
    prop: 'orderId',
  },
  {
    label: '周星昵称',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '周星值',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '所属公会',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '100' },
]

// 富豪榜
export const columns1 = [
  {
    label: '期数',
    prop: 'userCode',
    hideInSearch: true,
  },
  {
    label: '开始时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '结束时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'orderId',
  },
  {
    label: '用户昵称',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '财富值',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '所属公会',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'updateTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

// 房间榜
export const columns2 = [
  {
    label: '期数',
    prop: 'userCode',
    hideInSearch: true,
  },
  {
    label: '开始时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '结束时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'orderId',
  },
  {
    label: '房间名称',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '房间值',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '标签',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'updateTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]
