// 列表
export const columns = [
  {
    label: '序号',
    prop: 'roomId',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'roomId',
  },
  {
    label: '房间名',
    prop: 'roomTitle',
  },
  {
    label: '房主编号',
    prop: 'userId',
    hideInSearch: true,
  },
  {
    label: '房间类别',
    prop: 'roomCategory',
    hideInSearch: true,
  },
  {
    label: '房型类型',
    prop: 'showType',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '普通房',
        value: 'common',
      },
      {
        label: '电台房',
        value: 'radio_station',
      },
    ],
  },
  {
    label: '房间标签',
    prop: 'roomTag',
    hideInSearch: true,
  },
  // {
  //   label: '个人类别',
  //   prop: 'configKey',
  //   hideInSearch: true,
  // },
  // {
  //   label: '个人标签',
  //   prop: 'configValue',
  //   hideInSearch: true,
  // },
  {
    label: '封禁时间',
    prop: 'banBeginTime',
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 149 },
]

// 房间编辑form表单
export const editFormData = () => ({
  roomTitle: '',
  roomId: '',
  roomPwd: '',
  welcomeMsg: '',
  roomTopicTitle: '',
  roomTopic: '',
  roomCover: '',
  showStatus: 1,
  customBackground: '',
  singleCategory: '',
  roomVoice: '',
  coverImage: '',
  backImage: '',
  bossMicrophone: 1,
  personType: '',
  roomOwnerModel: 0,
  roomCategoryId: '',
  roomTagId: '',
  showType: '',
})

// 房间编辑 表单验证
export const editFormRule = {
  roomTitle: [
    {
      required: true,
      message: '请输入房间名称',
      trigger: 'blur',
    },
  ],
  roomId: [
    {
      required: true,
      message: '请输入房间号',
      trigger: 'blur',
    },
  ],

  roomPass: [
    {
      required: true,
      message: '请输入房间密码',
      trigger: 'blur',
    },
  ],
  roomWelcom: [
    {
      required: true,
      message: '请输入房间欢迎语',
      trigger: 'blur',
    },
  ],
  roomTheme: [
    {
      required: true,
      message: '请输入房间话题主题',
      trigger: 'blur',
    },
  ],
  roomTalkContent: [
    {
      required: true,
      message: '请输入话题内容',
      trigger: 'blur',
    },
  ],
  publicCategory: [
    {
      required: true,
      message: '请选择官方分类',
      trigger: 'change',
    },
  ],
  singleCategory: [
    {
      required: true,
      message: '请选择个人分类',
      trigger: 'change',
    },
  ],
  roomTag: [
    {
      required: true,
      message: '请选择房间标签',
      trigger: 'change',
    },
  ],
  roomVoice: [
    {
      required: true,
      message: '请选择房间音效',
      trigger: 'change',
    },
  ],
  hotSortType: [
    {
      required: true,
      message: '请选择热门排序方式',
      trigger: 'change',
    },
  ],
  hotSort: [
    {
      required: true,
      message: '请选择热门排序',
      trigger: 'change',
    },
  ],
  coverImage: [
    {
      required: true,
      message: '封面图不能为空',
      trigger: 'change',
    },
  ],
  backImage: [
    {
      required: true,
      message: '背景图不能为空',
      trigger: 'change',
    },
  ],
  bossMicrophone: [
    {
      required: true,
      message: '请选择老板麦',
      trigger: 'change',
    },
  ],
  showStatus: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
  roomOwnerModel: [
    {
      required: true,
      message: '请选择放逐模式',
      trigger: 'change',
    },
  ],
}

// 房间流水搜索formTag
export const roomFlowFormLabel = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '收入（金币）',
    prop: 'charmNum',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '日期选择',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]

// 房间流水table表头
export const roomFlowTableLabel = [
  {
    label: '序号',
    property: 'id',
  },
  {
    label: '收入（金币）',
    property: 'title',
  },
  {
    label: '时间',
    property: 'content',
  },
]

// 房间赠送人气 form表单
export const givePopularitytableForm = () => ({
  expirationDate: '',
  num: 0,
})

// 房间赠送人气 表单验证
export const givePopularityFormRule = {
  roomTitle: [
    {
      required: true,
      message: '请输入房间名称',
      trigger: 'blur',
    },
  ],
  num: [
    {
      required: true,
      message: '请输入人气值',
      trigger: 'blur',
    },
  ],
  expirationDate: [
    {
      required: true,
      message: '请选择过期时间',
      trigger: 'change',
    },
  ],
}

// 房间封禁 form表单
export const roomForbiddentableForm = () => ({
  banType: 1,
  banDuration: 1,
  reason: '',
})

// 封禁房间 表单验证
export const roomForbiddenFormRule = {
  banType: [
    {
      required: true,
      message: '请选择封禁类型',
      trigger: 'blur',
    },
  ],
  banDuration: [
    {
      required: true,
      message: '请输入封禁时长',
      trigger: 'blur',
    },
  ],
  reason: [
    {
      required: true,
      message: '请输入封禁原因',
      trigger: 'change',
    },
  ],
}

// 房间类型
export const optionsPersonType = [
  {
    name: '普通房',
    value: 'common',
  },
  {
    name: '电台房',
    value: 'radio_station',
  },
]
