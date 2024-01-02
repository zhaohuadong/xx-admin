export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '标题',
    prop: 'title',
  },
  {
    label: '消息类型',
    prop: 'type',
    type: 'select',
    enum: [
      {
        label: '全部',
        value: '',
      },
      {
        label: '文字',
        value: 1,
      },
      {
        label: '图片',
        value: 2,
      },
    ],
  },
  {
    label: '内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '发送用户',
    prop: 'userType',
    type: 'select',
    hideInSearch: true,
    enum: [
      {
        label: '全部',
        value: 1,
      },
      {
        label: '指定',
        value: 2,
      },
      {
        label: '男性',
        value: 3,
      },
      {
        label: '女性',
        value: 4,
      },
    ],
  },
  {
    label: '发送人（操作者）',
    prop: 'createBy',
    hideInSearch: true,
  },
  {
    label: '发送时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '发送时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '消息状态',
    prop: 'status',
    type: 'select',
    hideInSearch: true,
    enum: [
      {
        label: '已撤回',
        value: 0,
      },
      {
        label: '已发送',
        value: 1,
      },
    ],
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

export const formData = () => ({
  configTitle: '',
  configKey: '',
  configType: '',
  configValue: '',
  sort: 1,
  status: '1',
  id: '',
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
