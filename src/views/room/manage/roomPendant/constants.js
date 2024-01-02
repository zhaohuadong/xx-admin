// 列表项
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '70',
  },
  {
    label: '挂件名称',
    prop: 'name',
  },
  {
    label: '状态',
    prop: 'state',
    type: 'select',
    enum: [
      {
        label: '显示',
        value: 1,
        text: '显示',
      },
      {
        label: '隐藏',
        value: 2,
        text: '隐藏',
      },
    ],
  },
  {
    label: '上线时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '关闭时间',
    prop: 'closeDate',
    hideInSearch: true,
  },
  {
    label: '挂件图标',
    prop: 'picUrl',
    hideInSearch: true,
  },
  {
    label: '操作类型',
    prop: 'type',
    hideInSearch: true,
  },
  {
    label: '链接',
    prop: 'linkUrl',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '展示位',
    prop: 'showType',
    hideInSearch: true,
  },
  {
    label: '可玩时间段',
    prop: 'playTime',
    hideInSearch: true,
    width: '130',
  },
  {
    label: '显示时间段',
    prop: 'showTime',
    hideInSearch: true,
    width: '130',
  },
  {
    label: '房间类型',
    prop: 'roomType',
    hideInSearch: true,
  },
  {
    label: '显示等级',
    prop: 'showLevel',
    hideInSearch: true,
  },
  {
    label: '可见用户',
    prop: 'showUsers',
    hideInSearch: true,
  },
  {
    label: '可见房间',
    prop: 'showRooms',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '110' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  name: '',
  sort: 0,
  showTime: [
    {
      start: null,
      end: null,
    },
  ],
  playTime: [
    {
      start: null,
      end: null,
    },
  ],
  type: '',
  picUrl: '',
  linkUrl: '',
  roomType: '',
  showLevel: 0,
  showUsers: '',
  showRooms: '',
  state: 1,
  location: 1,
  addDate: '',
  closeDate: '',
})
// 操作类型
export const selectOptions = [
  {
    label: '跳转链接',
    value: 1,
  },
  {
    label: '深海寻宝',
    value: 2,
  },
]

// 校验规则
export const formRule = {
  name: [
    {
      required: true,
      message: '请输入文字',
      trigger: 'blur',
    },
  ],
  showTime: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  playTime: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  linkUrl: [
    {
      required: true,
      message: '请输入链接',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  state: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  location: [
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
  addDate: [
    {
      required: true,
      message: '请选择',
      trigger: 'blur',
    },
  ],
  closeDate: [
    {
      required: true,
      message: '请选择',
      trigger: 'blur',
    },
  ],
  picUrl: [
    {
      required: true,
      message: '请选择',
      trigger: 'blur',
    },
  ],
  numberInput: [
    {
      required: true,
      message: '请选择',
      trigger: 'blur',
    },
  ],
}
