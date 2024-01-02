export const columns = [
  { type: 'selection' },
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
    label: '姓名',
    prop: 'cardholder',
  },
  {
    label: '手机号',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '申请时间',
    prop: 'addTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '业务审核时间',
    prop: 'auditTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '财务操作时间',
    prop: 'payTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '更新时间',
    prop: 'callbackTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '身份证号码',
    prop: 'cardNumber',
    hideInSearch: true,
  },
  // {
  //   label: '手机号',
  //   prop: 'mobile',
  //   hideInSearch: true,
  // },
  {
    label: '支付宝账号',
    prop: 'bankNum',
  },
  {
    label: '提现金额',
    prop: 'moneyTotal',
    hideInSearch: true,
  },
  {
    label: '平台手续费税率',
    prop: 'feeRate',
    hideInSearch: true,
  },
  {
    label: '税后金额',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '申请时间',
    prop: 'addTime',
    hideInSearch: true,
  },
  {
    label: '提现订单来源',
    prop: 'type',
    type: 'tag',
    enum: [
      {
        label: '从app提现',
        value: 1,
        text: '从app提现',
      },
      {
        label: '从h5提现',
        value: 2,
        text: '从h5提现',
      },
    ],
  },
  {
    label: '运营审核状态',
    prop: 'platformStatus',
    type: 'tag',
    enum: [
      {
        label: '待审核',
        value: 1,
      },
      {
        label: '通过',
        value: 2,
      },
      {
        label: '拒绝',
        value: 3,
      },
    ],
    // hideInTable: true,
  },
  // {
  //   label: '运营审核状态',
  //   prop: 'platformStatus',
  //   hideInSearch: true,
  // },
  {
    label: '业务审核时间',
    prop: 'auditTime',
    hideInSearch: true,
  },
  // {
  //   label: '操作打款状态',
  //   prop: 'status',
  //   hideInSearch: true,
  // },
  {
    label: '财务操作时间',
    prop: 'payTime',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'callbackTime',
    hideInSearch: true,
  },
  {
    label: '备注',
    prop: 'remark',
    hideInSearch: true,
  },
  {
    label: '财务打款状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        label: '待审核',
        value: 1,
        text: '待审核',
      },
      {
        label: '通过 ',
        value: 2,
        text: '通过',
      },
      {
        label: '拒绝',
        value: 3,
        text: '拒绝',
      },
    ],
    // hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '120' },
]

// 备注
export const formData = () => ({
  remark: '',
  ids: [],
  id: '',
})

export const formRule = {
  remark: [{ required: true, message: '请输入拒绝原因', trigger: 'blur' }],
}
