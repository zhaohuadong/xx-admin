// 常用语列表
export const columns = [
  {
    label: '用户编号',
    prop: 'senderUserNum',
  },
  {
    label: '用户昵称',
    prop: 'senderName',
  },
  {
    label: '用户头像',
    prop: 'senderProfilePath',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'roomId',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '消息内容',
    prop: 'content',
    width: 330,
    hideInSearch: true,
  },
  {
    label: '消息发送时间',
    prop: 'sendTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '消息发送时间',
    prop: 'sendTime',
    hideInSearch: true,
  },
]

export const AddAndEditformData = () => ({
  contentName: '',
  category: '',
  sort: 1,
  type: '',
  id: '',
})

export const formRule = {
  contentName: [{ required: true, message: '请输入常用文案内容', trigger: 'blur' }],
  category: [
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
  type: [
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
