// 用户账号管理列表 搜索formTag
// export const formLabel = [
//   {
//     label: '用户ID',
//     prop: 'title',
//   },
//   {
//     label: '用户编号',
//     prop: 'type',
//   },
//   {
//     label: '手机号',
//     prop: 'type',
//   },
// ]

// 用户账号管理列表 搜索form表单
// export const tableForm = () => ({
//   title: '',
//   type: '',
//   pageNum: 1,
//   pageSize: 10,
// })

// 用户账号管理 table表头
export const tableLabel = [
  {
    label: '用户id',
    prop: 'userId',
    width: '80',
  },
  {
    label: '用户编号',
    prop: 'userCode',
    width: '90',
  },
  {
    label: '用户性别',
    prop: 'sex',
    width: '90',
    type: 'select',
    enum: [
      { value: 1, label: '男' },
      { value: 0, label: '女' },
      { value: 2, label: '保密' },
    ],
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    width: '90',
  },
  {
    label: '用户手机号',
    prop: 'phoneNo',
    width: '150',
  },
  {
    label: '房间编号',
    prop: 'roomId',
    width: '90',
  },
  {
    label: '邀请码',
    prop: 'invitationCode',
    width: '80',
    hideInSearch: true,
  },
  {
    label: '会员等级',
    prop: 'vipId',
    width: '90',
    hideInSearch: true,
  },
  {
    label: '余额',
    prop: 'coin',
    width: '70',
    hideInSearch: true,
  },
  {
    label: '收益',
    prop: 'charmNum',
    width: '70',
    hideInSearch: true,
  },
  {
    label: '封禁状态',
    prop: 'frozen',
    width: '90',
    type: 'tag',
    enum: [
      {
        label: '正常',
        value: 0,
        type: 'success',
      },
      {
        label: '封禁',
        value: 1,
        type: 'warning',
      },
    ],
  },
  {
    label: '封禁结束时间',
    prop: 'frozenEndDate',
    width: 'auto',
    hideInSearch: true,
  },
  {
    label: '账号状态',
    prop: 'disappear',
    width: '90',
    type: 'tag',
    enum: [
      {
        label: '正常',
        value: 1,
        type: '',
      },
      {
        label: '已注销',
        value: 2,
        type: '',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '注册时间',
    prop: 'registerDate',
    width: 'auto',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '149' },
]

// 用户编辑form表单
export const editFormData = () => ({
  profilePath: '', // 头像
  job: '', // 职业
  userCode: '',
  cityAll: '',
  city: '', // 市
  location: '', // 省
  nickname: '', // 昵称
  ImagePhoto: [],
  info: '', // 个性签名
  audioInfo: '', // 语音标签
  photoWallPaths: [
    'https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1',
    'https://tse4-mm.cn.bing.net/th/id/OIP-C.qfpktgG_X_qVhHhKRp50AQHaE1?pid=ImgDet&rs=1',
  ], // 照片墙
  tagIds: [],
  tags: [],
  deletedNickName: '',
  deletedProfile: '',
  deletedAudioInfo: '',
  deletedInfo: '',
  deletedPhotoWall: '',
  birthday: '',
  sex: 1,
  // roomName: '',
  // roomNum: '',
  // roomPass: '',
  // roomWelcom: '',
  // roomTheme: '',
  // roomTalkContent: '',
  // publicCategory: '',
  // singleCategory: '',
  // roomTag: '',
  // roomVoice: '',
  // hotSortType: '',
  // hotSort: '',
  // coverImage: '',
  // backImage: '',
  // bossMai: '',
  // type: '',
  // roomZhu: '',
})

// 用户编辑 表单验证
export const editFormRule = {
  roomName: [
    {
      required: true,
      message: '请输入房间名称',
      trigger: 'blur',
    },
  ],
  roomNum: [
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
  nickname: [
    {
      required: true,
      message: '请输入用户昵称',
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
  sex: [
    {
      required: true,
      message: '请选择性别',
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
  bossMai: [
    {
      required: true,
      message: '请选择老板麦',
      trigger: 'change',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
  roomZhu: [
    {
      required: true,
      message: '请选择放逐模式',
      trigger: 'change',
    },
  ],
}

// 封禁用户 table表头
export const banUserTableLabel = [
  {
    label: '序号',
    prop: 'id',
  },
  {
    label: '封禁原因',
    prop: 'frozenDes',
  },
  {
    label: '封禁理由',
    prop: 'des',
  },
  {
    label: '封禁证据',
    prop: 'urls',
  },
  {
    label: '封禁时长',
    prop: 'frozenTime',
  },
  {
    label: '封禁来源',
    prop: 'frozenSource',
  },
  {
    label: '封禁开始时间',
    prop: 'addDate',
  },
  {
    label: '封禁结束时间',
    prop: 'bannedDate',
  },
  {
    label: '封禁关联账号',
    prop: 'item',
  },
  {
    label: '操作人',
    prop: 'operatorName',
  },
]

// 充值 form表单
export const reachargeTableForm = () => ({
  number: null,
  type: 1,
  purposeType: 1,
  remark: '',
})

// 充值 表单验证
export const rechargeFormRule = {
  number: [
    {
      required: true,
      message: '请输入充值金额',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择充值类型',
      trigger: 'change',
    },
  ],
  purposeType: [
    {
      required: true,
      message: '请选择充值目的',
      trigger: 'change',
    },
  ],
  remark: [
    {
      required: true,
      message: '请输入备注',
      trigger: 'change',
    },
  ],
}

// 赠送礼物 form表单
export const sendGifTableForm = () => ({
  giftId: '',
  number: 0,
})

// 赠送礼物 表单验证
export const sendGiftFormRule = {
  giftId: [
    {
      required: true,
      message: '请选择礼物',
      trigger: 'change',
    },
  ],
  number: [
    {
      required: true,
      message: '请输入数量',
      trigger: 'blur',
    },
  ],
}

// 封禁用户 form表单
export const banUserTableForm = () => ({
  frozenDesArray: '',
  frozenDes: '',
  frozenTimeType: 0,
  frozenTime: null,
  frozenSource: '',
  des: '',
  urls: [],
  queryFileDel: '',
  banIdAuth: 0,
})

// 封禁用户原因选项
export const banOptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: '浙江',
        label: '浙江',
        children: [
          {
            value: '杭州',
            label: '杭州',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]

// 解封用户 form表单
export const unbanUserTableForm = () => ({
  frozenDes: '',
  frozenSource: '',
  urls: [],
})

// 解封用户 表单校验
export const unbanUserFormRule = {
  frozenTimeType: [
    {
      required: true,
      message: '请选择封禁时长',
      trigger: 'change',
    },
  ],
  banDate: [
    {
      required: true,
      message: '请输入封禁时间',
      trigger: 'blur',
    },
  ],
  frozenSource: [
    {
      required: true,
      message: '请输入解封来源方',
      trigger: 'blur',
    },
  ],
  frozenDes: [
    {
      required: true,
      message: '请输入解封理由',
      trigger: 'blur',
    },
  ],
  urls: [
    {
      required: true,
      message: '请上传封禁证据',
      trigger: 'change',
    },
  ],
  banRelationAccount: [
    {
      required: true,
      message: '请选择是否封禁关联账号',
      trigger: 'change',
    },
  ],
}

// 封禁用户 表单验证
export const banUserFormRule = {
  frozenDesArray: [
    {
      required: true,
      message: '请选择封禁原因',
      trigger: 'change',
    },
  ],
  frozenDes: [
    {
      required: true,
      message: '请选择封禁原因',
      trigger: 'change',
    },
  ],
  frozenTimeType: [
    {
      required: true,
      message: '请选择封禁时长',
      trigger: 'change',
    },
  ],
  frozenTime: [
    {
      required: true,
      message: '请输入封禁时间',
      trigger: 'blur',
    },
  ],
  frozenSource: [
    {
      required: true,
      message: '请输入封禁来源方',
      trigger: 'blur',
    },
  ],
  des: [
    {
      required: true,
      message: '请输入封禁理由',
      trigger: 'blur',
    },
  ],
  urls: [
    {
      required: true,
      message: '请上传封禁证据',
      trigger: 'change',
    },
  ],
  banIdAuth: [
    {
      required: true,
      message: '请选择是否封禁关联账号',
      trigger: 'change',
    },
  ],
}

// 冻结解冻账户 form表单
export const freezeAndThawTableForm = () => ({
  types: '1',
  newTypes: [],
  thawType: [],
  reason: '',
  unreason: '',
})

// 冻结解冻账户 表单验证
export const freezeAndThawFormRule = {
  newTypes: [
    {
      required: true,
      message: '请选择冻结类型',
      trigger: 'change',
    },
  ],
  thawType: [
    {
      required: true,
      message: '请选择解冻类型',
      trigger: 'change',
    },
  ],
  reason: [
    {
      required: true,
      message: '请输入冻结原因',
      trigger: 'blur',
    },
  ],
  unreason: [
    {
      required: true,
      message: '请输入解冻原因',
      trigger: 'blur',
    },
  ],
}

// 支付宝数量上限 form表单
export const aliPayTableForm = () => ({
  alipayAccountNum: 0,
})

// 支付宝数量上限 表单验证
export const aliPayFormRule = {
  alipayAccountNum: [
    {
      required: true,
      message: '请输入支付宝数量上限',
      trigger: 'change',
    },
  ],
}

// 赠送经验 form表单
export const sendExperienceTableForm = () => ({
  expNumber: 0,
})

// 赠送经验 表单验证
export const sendExperienceFormRule = {
  expNumber: [
    {
      required: true,
      message: '请输入财富值',
      trigger: 'change',
    },
  ],
}

// 礼物列表
export const giftList = [
  {
    label: '礼物1',
    value: 1,
  },
]
export const cityOptions = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: '浙江',
        label: '浙江',
        children: [
          {
            value: '杭州',
            label: '杭州',
          },
          {
            value: 'feedback',
            label: 'Feedback',
          },
          {
            value: 'efficiency',
            label: 'Efficiency',
          },
          {
            value: 'controllability',
            label: 'Controllability',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation',
          },
          {
            value: 'top nav',
            label: 'Top Navigation',
          },
        ],
      },
    ],
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout',
          },
          {
            value: 'color',
            label: 'Color',
          },
          {
            value: 'typography',
            label: 'Typography',
          },
          {
            value: 'icon',
            label: 'Icon',
          },
          {
            value: 'button',
            label: 'Button',
          },
        ],
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio',
          },
          {
            value: 'checkbox',
            label: 'Checkbox',
          },
          {
            value: 'input',
            label: 'Input',
          },
          {
            value: 'input-number',
            label: 'InputNumber',
          },
          {
            value: 'select',
            label: 'Select',
          },
          {
            value: 'cascader',
            label: 'Cascader',
          },
          {
            value: 'switch',
            label: 'Switch',
          },
          {
            value: 'slider',
            label: 'Slider',
          },
          {
            value: 'time-picker',
            label: 'TimePicker',
          },
          {
            value: 'date-picker',
            label: 'DatePicker',
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker',
          },
          {
            value: 'upload',
            label: 'Upload',
          },
          {
            value: 'rate',
            label: 'Rate',
          },
          {
            value: 'form',
            label: 'Form',
          },
        ],
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table',
          },
          {
            value: 'tag',
            label: 'Tag',
          },
          {
            value: 'progress',
            label: 'Progress',
          },
          {
            value: 'tree',
            label: 'Tree',
          },
          {
            value: 'pagination',
            label: 'Pagination',
          },
          {
            value: 'badge',
            label: 'Badge',
          },
        ],
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert',
          },
          {
            value: 'loading',
            label: 'Loading',
          },
          {
            value: 'message',
            label: 'Message',
          },
          {
            value: 'message-box',
            label: 'MessageBox',
          },
          {
            value: 'notification',
            label: 'Notification',
          },
        ],
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu',
          },
          {
            value: 'tabs',
            label: 'Tabs',
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb',
          },
          {
            value: 'dropdown',
            label: 'Dropdown',
          },
          {
            value: 'steps',
            label: 'Steps',
          },
        ],
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog',
          },
          {
            value: 'tooltip',
            label: 'Tooltip',
          },
          {
            value: 'popover',
            label: 'Popover',
          },
          {
            value: 'card',
            label: 'Card',
          },
          {
            value: 'carousel',
            label: 'Carousel',
          },
          {
            value: 'collapse',
            label: 'Collapse',
          },
        ],
      },
    ],
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components',
      },
      {
        value: 'sketch',
        label: 'Sketch Templates',
      },
      {
        value: 'docs',
        label: 'Design Documentation',
      },
    ],
  },
]
