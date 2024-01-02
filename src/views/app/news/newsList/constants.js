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
    label: '内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '发送次数',
    prop: 'sendNum',
    hideInSearch: true,
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
    hideInTable: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 151 },
]

export const sendFormData = () => ({
  id: '',
  userType: 1,
  userNo: '',
})

export const addAndEditFormData = () => ({
  userType: '',
  userNo: '',
  id: '',
})

export const formRule = {
  userType: [
    {
      required: true,
      message: '请选择用户类型',
      trigger: 'change',
    },
  ],
  userNo: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
}

export const addAndEditFormRule = {
  title: [
    {
      required: true,
      message: '请输入消息名称',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择消息类型',
      trigger: 'change',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入内容',
      trigger: 'blur',
    },
  ],
}

export const TYPE = [
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
]

export const MESSAGETYPE = [
  {
    label: '文字',
    value: 1,
  },
  {
    label: '图片',
    value: 2,
  },
]
