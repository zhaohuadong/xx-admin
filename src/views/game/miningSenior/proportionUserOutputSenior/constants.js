// 列表
export const column = [
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
    label: '累计投入',
    prop: 'incoinTotal',
    hideInSearch: true,
  },
  {
    label: '累计产出',
    prop: 'outcoinTotal',
    hideInSearch: true,
  },
  {
    label: '实际产出比',
    prop: 'ratio',
    hideInSearch: true,
  },
  {
    label: '当前投入',
    prop: 'currentIncoin',
    hideInSearch: true,
  },
  {
    label: '当前产出',
    prop: 'currentOutcoin',
    hideInSearch: true,
  },
  {
    label: '计算后产出比',
    prop: 'currentRatio',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
]

export const formData = () => ({
  name: '',
  type: '',
  sort: 0,
})

export const formRule = {
  name: [
    {
      required: true,
      message: '请输入奖池名称',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择奖池类别',
      trigger: 'blur',
    },
  ],
  sort: [
    {
      required: true,
      message: '请选择排序',
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

export const formOperation = () => ({
  userIncoin: '',
  userOutcoin: '',
  ratio: '',
})
