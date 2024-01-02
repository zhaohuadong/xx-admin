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
    label: '用户昵称',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '订单编号',
    prop: 'orderId',
  },
  {
    label: '交易单号',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '充值金额',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '金币数量',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '订单生成时间',
    prop: 'orderTime',
    hideInSearch: true,
  },
  {
    label: '订单生成时间',
    prop: 'orderTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '支付时间',
    prop: 'payTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '支付时间',
    prop: 'payTime',
    hideInSearch: true,
  },
  {
    label: '订单状态',
    prop: 'state',
    type: 'select',
    enum: [
      {
        label: '全部',
        value: '',
      },
      {
        label: '未完成',
        value: 1,
      },
      {
        label: '待支付',
        value: 2,
      },
      {
        label: '已支付',
        value: 3,
      },
    ],
  },
  {
    label: '支付方式',
    prop: 'payment',
    type: 'select',
    enum: [
      {
        label: '全部',
        value: '',
      },
      {
        label: '支付宝',
        value: 1,
      },
      {
        label: '微信',
        value: 2,
      },
    ],
  },
  {
    label: '收款商户',
    prop: 'commercial',
    hideInSearch: true,
  },
]
