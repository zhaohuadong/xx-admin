// 关于我列表项
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '标签名称',
    prop: 'labelName',
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'hidden',
    type: 'select',
    enum: [
      {
        label: '显示',
        value: 0,
      },
      {
        label: '隐藏',
        value: 1,
      },
    ],
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '135' },
]

// 我想找列表项
export const Columns1 = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '标签名称',
    prop: 'labelName',
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'hidden',
    type: 'select',
    enum: [
      {
        label: '显示',
        value: 0,
      },
      {
        label: '隐藏',
        value: 1,
      },
    ],
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '135' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  labelName: '',
  sort: 0,
  select: '',
  type: 1,
  textarea: '',
  hidden: 1,
})
// 校验规则
export const formRule = {
  labelName: [
    {
      required: true,
      message: '请输入文字',
      trigger: 'blur',
    },
  ],
  inputNumber: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  select: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  hidden: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  textarea: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
  numberInput: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
}
