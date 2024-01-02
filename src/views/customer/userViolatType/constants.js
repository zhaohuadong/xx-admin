//  一级分类列表
export const firstLevelColumns = [
  // { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '一级分类名称',
    prop: 'typeName',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'showStatus',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '显示',
        value: 1,
        type: 'success',
      },
      {
        label: '隐藏',
        value: 0,
        type: 'danger',
      },
    ],
  },
  {
    label: '名称添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

//  二级分类列表
export const secondLevelColumns = [
  // { type: 'selection' },
  {
    label: '序号',
    prop: 'version',
    hideInSearch: true,
  },
  {
    label: '一级分类名称',
    prop: 'key',
    hideInSearch: true,
  },
  {
    label: '二级分类名称',
    prop: 'key',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'type',
    hideInSearch: true,
  },
  {
    label: '名称添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

//  一级分类 表单
export const firstLevelFormData = () => ({
  typeName: '',
  showStatus: 1,
})
// 一级分类表单验证
export const firstLevelFormRule = {
  typeName: [{ required: true, message: '请输入类型名称', trigger: 'blur' }],
  showStatus: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
}

//  二级分类 表单
export const secondLevelFormData = () => ({
  version: '',
  status: '1',
  configType: '',
})
// 二级分类表单验证
export const secondLevelFormRule = {
  version: [{ required: true, message: '请输二级分类名称', trigger: 'blur' }],
  status: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
  configType: [
    {
      required: true,
      message: '请选择一级分类',
      trigger: 'change',
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
