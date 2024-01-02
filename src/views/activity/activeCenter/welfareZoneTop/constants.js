// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '奖励类型',
    prop: 'prizeType',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '积分(虾米币)',
        value: 1,
      },
      {
        label: '个性装扮',
        value: 2,
      },
      {
        label: '勋章',
        value: 3,
      },
      {
        label: '靓号',
        value: 4,
      },
      {
        label: '礼物',
        value: 5,
      },
    ],
  },
  {
    label: '奖励名称',
    prop: 'prizeTitle',
    hideInSearch: true,
  },
  {
    label: '数量',
    prop: 'prizeNumber',
    hideInSearch: true,
  },
  {
    label: '图片',
    prop: 'prizePicture',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '库存',
    prop: 'stockNumber',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  prizeType: '',
  stockNumber: 1,
  prizeId: '',
  prizeNumber: '',
})

export const formRule = {
  prizeType: [
    {
      required: true,
      message: '请选择分类',
      trigger: 'blur',
    },
  ],
  prizeNumber: [
    {
      required: true,
      message: '请输入数量',
      trigger: 'blur',
    },
  ],
  prizeId: [
    {
      required: true,
      message: '请选择装扮',
      trigger: 'change',
    },
  ],
}

export const TYPE = [
  {
    label: '积分(虾米币)',
    value: 1,
  },
  {
    label: '个性装扮',
    value: 2,
  },
  {
    label: '勋章',
    value: 3,
  },
  {
    label: '靓号',
    value: 4,
  },
  {
    label: '礼物',
    value: 5,
  },
]
export const poolList = [
  {
    label: '初级多连奖池',
    value: '1',
  },
  {
    label: '初级单连奖池',
    value: '2',
  },
  {
    label: '高级多连奖池',
    value: '3',
  },
  {
    label: '高级单连奖池',
    value: '4',
  },
  {
    label: '初级新手奖池',
    value: '5',
  },
  {
    label: '高级新手奖池',
    value: '6',
  },
]
