// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '配置名称',
    prop: 'configTitle',
  },
  {
    label: '配置标识',
    prop: 'configKey',
  },
  {
    label: '配置值',
    prop: 'configValue',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]
// 编辑
export const formData = () => ({
  configTitle: '',
  configKey: '',
  configType: '',
  configValue: '',
  sort: 1,
  status: '1',
  id: '',
  configGroup: '',
})

export const formRule = {
  configTitle: [{ required: true, message: '请输入配置名称', trigger: 'blur' }],
  configKey: [
    {
      required: true,
      message: '请输入配置标识',
      trigger: 'blur',
    },
  ],
  configGroup: [
    {
      required: true,
      message: '请选择配置分组',
      trigger: 'change',
    },
  ],
  configType: [
    {
      required: true,
      message: '请选择配置类型',
      trigger: 'change',
    },
  ],
  configValue: [
    {
      required: true,
      message: '请输入配置值',
      trigger: 'blur',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择启用状态',
      trigger: 'change',
    },
  ],
  sort: [{ required: true, message: '请输入排序', trigger: 'blur' }],
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
