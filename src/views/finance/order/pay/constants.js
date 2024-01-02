export const columns = [
  // { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '用户id',
    prop: 'ssId',
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
    label: '订单编号',
    prop: 'orderNo',
  },
  {
    label: '交易单号',
    prop: 'tradeNo',
    hideInSearch: true,
  },
  {
    label: '充值金额',
    prop: 'totalFee',
    hideInSearch: true,
  },
  {
    label: '金币数量',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '订单生成时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '订单生成时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '支付时间',
    prop: 'payDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '支付时间',
    prop: 'payDate',
    hideInSearch: true,
  },
  {
    label: '订单状态',
    prop: 'orderState',
    type: 'tag',
    enum: [
      {
        label: '未付款',
        value: 1,
        text: '未付款',
      },
      {
        label: '正在处理',
        value: 2,
        text: '正在处理',
      },
      {
        label: '已付款',
        value: 3,
        text: '已付款',
      },
    ],
  },
  {
    label: '支付方式',
    prop: 'payStyle',
    type: 'tag',
    enum: [
      {
        label: '支付宝',
        value: 'zfb',
        text: '支付宝',
      },
      {
        label: '微信支付',
        value: 'wx',
        text: '微信支付',
      },
      {
        label: '苹果',
        value: 'applePay',
        text: '苹果',
      },
      {
        label: 'H5支付宝',
        value: 'sand_h5_zfb',
        text: 'H5支付宝',
      },
      {
        label: 'H5微信',
        value: 'sand_h5_wx',
        text: 'H5微信',
      },
    ],
  },
  {
    label: '收款商户',
    prop: 'merchantName',
    hideInSearch: true,
  },
]
