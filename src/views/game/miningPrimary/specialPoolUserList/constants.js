// 列表
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
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'addTime',
    hideInSearch: true,
  },
  {
    label: '过期时间',
    prop: 'expiredTime',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '有效',
        value: 1,
      },
      {
        label: '无效',
        value: 0,
      },
    ],
  },
  {
    label: '特殊奖池累计投入',
    prop: 'totalCost',
    hideInSearch: true,
  },
  {
    label: '特殊奖池累计产出',
    prop: 'totalIncome',
    hideInSearch: true,
  },
  {
    label: '奖池配置',
    prop: 'poolList',
    hideInSearch: true,
  },
  { prop: 'pool', label: '当前奖池', fixed: 'right', hideInSearch: true, width: 105 },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  userCode: '',
  types: [],
  expiredTime: '',
})

export const formRule = {
  userCode: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
  expiredTime: [
    {
      required: true,
      message: '请选择过期时间',
      trigger: 'blur',
    },
  ],
}

export const formDataDetail = () => ({
  giftId: '',
  number: 0,
})

export const formRuleDetail = {
  giftId: [
    {
      required: true,
      message: '请选择礼物',
      trigger: 'blur',
    },
  ],
}

// 列表详情
export const columnsDetail = [
  { type: 'selection' },
  {
    label: '礼物名称',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '价格',
    prop: 'price',
    hideInSearch: true,
  },
  {
    label: '图片',
    prop: 'url',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '数量',
    prop: 'number',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]
export const poolListRadio = [
  {
    label: '奖池1（32）',
    value: 1,
  },
  {
    label: '奖池2（32）',
    value: 2,
  },
  {
    label: '奖池3（32）',
    value: 3,
  },
  {
    label: '奖池41（32）',
    value: 4,
  },
  {
    label: '奖池51（32）',
    value: 5,
  },
]

export const TYPE = [
  {
    label: '数字',
    value: 1,
  },
  {
    label: '字符',
    value: 2,
  },
  {
    label: '文本',
    value: 3,
  },
  {
    label: '枚举',
    value: 4,
  },
  {
    label: '数组',
    value: 5,
  },
]
