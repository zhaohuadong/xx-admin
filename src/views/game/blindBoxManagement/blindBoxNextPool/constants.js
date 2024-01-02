// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '名称',
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
    prop: 'giftUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '数量',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
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

export const blindBoxList = [
  {
    label: '铜盲盒',
    value: 1,
  },
  {
    label: '银盲盒',
    value: 2,
  },
  {
    label: '金盲盒',
    value: 3,
  },
  // {
  //   label: '铜（背包）',
  //   value: '4',
  // },
  // {
  //   label: '银（背包）',
  //   value: '5',
  // },
  // {
  //   label: '金（背包）',
  //   value: '6',
  // },
]
