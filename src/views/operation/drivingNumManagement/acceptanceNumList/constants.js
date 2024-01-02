export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '用户id',
    prop: 'userId',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '请选择状态',
    hideInTable: true,
    prop: 'userCode2',
    type: 'select',
    enum: [
      {
        label: '正常',
        value: 1,
      },
      {
        label: '封禁中',
        value: 2,
      },
      {
        label: '已注销',
        value: 0,
      },
    ],
  },
  {
    label: '会员等级',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '账户金币',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '账户收益',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '带动号来源金币',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '已核销金币',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'orderTime',
    hideInSearch: true,
  },
  {
    label: '添加人',
    prop: 'orderTime',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 150 },
]
