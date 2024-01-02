// 常用语列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '文案内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '分类',
    prop: 'type',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '主播',
        value: 1,
      },
      {
        label: '用户',
        value: 2,
      },
    ],
  },
  {
    label: '分类',
    prop: 'type',
    type: 'tag',
    enum: [
      {
        label: '主播',
        value: 1,
        type: '',
      },
      {
        label: '用户',
        value: 2,
        type: '',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '默认排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        label: '隐藏',
        value: 0,
        type: '',
      },
      {
        label: '显示',
        value: 1,
        type: 'success',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '日期',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '日期',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const AddAndEditformData = () => ({
  content: '',
  type: '',
  sort: 1,
  status: '0',
  id: '',
})

export const formRule = {
  content: [{ required: true, message: '请输入常用文案内容', trigger: 'blur' }],
  type: [
    {
      required: true,
      message: '请选择分类',
      trigger: 'change',
    },
  ],
  sort: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'blur',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
}

export const TYPE = [
  {
    label: '主播',
    value: 1,
  },
  {
    label: '用户',
    value: 2,
  },
]
