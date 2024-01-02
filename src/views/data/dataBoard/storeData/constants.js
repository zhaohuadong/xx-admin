export const columns = [
  {
    label: '',
    prop: 'timeType',
    type: 'selectTime',
    defaultValue: '全部',
    enum: [
      {
        label: '全部',
        value: '全部',
      },
      {
        label: '本周',
        value: '本周',
      },
      {
        label: '本月',
        value: '本月',
      },
      {
        label: '本年',
        value: '本年',
      },
      {
        label: '自定义',
        value: '自定义',
      },
    ],
    dateType: 'daterange',
    selectTime: [],
  },
  {
    label: '时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '头像框（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '昵称挂件（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '昵称特效（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '入场特效（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '座驾（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '聊天室气泡（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '麦位光波（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '聊天气泡（金币）',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '总计（金币）',
    prop: 'id',
    hideInSearch: true,
  },
]
