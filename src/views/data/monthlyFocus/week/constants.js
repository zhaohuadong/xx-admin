export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '期数',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '周星礼物',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '房间类型',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'type',
    type: 'select',
    enum: [
      {
        label: '未开始',
        value: 1,
      },
      {
        label: '进行中',
        value: 2,
      },
      {
        label: '已结束',
        value: 3,
      },
    ],
  },
  {
    label: '开始时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '结束时间',
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
  { prop: 'action', label: '操作', fixed: 'right', width: '120' },
]

export const sendFormData = () => ({
  id: '',
  userType: 1,
  userNo: '',
  date: '',
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
  date: [
    {
      required: true,
      message: '请选择时间',
      trigger: 'change',
    },
  ],
  periods: [
    {
      required: true,
      message: '请输入期数',
      trigger: 'blur',
    },
  ],
  giftA: [
    {
      required: true,
      message: '请选择礼物A',
      trigger: 'change',
    },
  ],
  giftB: [
    {
      required: true,
      message: '请选择礼物B',
      trigger: 'change',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择房间类型',
      trigger: 'change',
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
