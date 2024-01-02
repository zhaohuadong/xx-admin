// 列表
export const column = [
  {
    label: '奖池类型',
    prop: 'configTitle',
    hideInSearch: true,
  },
  {
    label: '用户经验等级',
    prop: 'configKey',
    hideInSearch: true,
  },
  {
    label: '开启日期',
    prop: 'configValue',
    hideInSearch: true,
  },
  {
    label: '结束日期',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '开启时间段',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'sort',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

export const formData = () => ({
  poolType: '',
  userOpeningLevel: '',
  startDate: '',
  endDate: '',
  startupStatus: 1,
  timeSlotList: [
    {
      startTime: 0,
      endTime: 0,
    },
  ],
})

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
