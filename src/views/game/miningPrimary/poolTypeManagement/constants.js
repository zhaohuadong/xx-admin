// 列表
export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '奖池名称',
    prop: 'name',
    hideInSearch: true,
  },
  {
    label: '奖池类型',
    prop: 'type',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

export const columnsSpecial = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '奖池名称',
    prop: 'name',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
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
export const poolList = [
  {
    label: '普通奖池',
    value: '1',
  },
  {
    label: '特殊奖池',
    value: '2',
  },
]
