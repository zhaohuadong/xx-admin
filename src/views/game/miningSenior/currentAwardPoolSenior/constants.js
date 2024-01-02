// 列表
export const columns = [
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

export const formData = () => ({
  giftId: '',
  number: 0,
})

export const formRule = {
  giftId: [
    {
      required: true,
      message: '请选择礼物',
      trigger: 'blur',
    },
  ],
}

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
export const poolList = [
  {
    label: '多连奖池',
    value: 3,
  },
  {
    label: '单连奖池',
    value: 1,
  },
  {
    label: '新手奖池',
    value: 4,
  },
]
