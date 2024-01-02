export const columns = [
  { type: 'selection' },
  {
    label: '添加时间',
    prop: 'orderTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '请选择类别',
    hideInTable: true,
    prop: 'payment',
    type: 'select',
    enum: [
      {
        label: '充值',
        value: 0,
      },
      {
        label: '深海寻宝',
        value: 1,
      },
      {
        label: '赠送礼物',
        value: 2,
      },
      {
        label: '收到礼物',
        value: 3,
      },
      {
        label: '兑换收益',
        value: 4,
      },
    ],
  },
  {
    label: '请选择账号类别',
    hideInTable: true,
    prop: 'payment',
    type: 'select',
    enum: [
      {
        label: '带动号',
        value: 1,
      },
      {
        label: '接受号',
        value: 2,
      },
    ],
  },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '账户类别',
    prop: 'userId',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'userName',
  },
  {
    label: '用户手机号',
    prop: 'orderId',
  },
  {
    label: '金币数量',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '类别',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '备注',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'orderTime',
    hideInSearch: true,
  },
]
