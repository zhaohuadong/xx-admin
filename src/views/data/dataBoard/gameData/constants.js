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
    label: '盲盒礼物（金币）',
    content: [
      { label: '投入', prop: 'id' },
      { label: '产出', prop: 'id' },
      { label: '盈亏', prop: 'aa' },
      { label: '投产比', prop: 'id' },
    ],
  },

  {
    label: '深海寻宝（金币）',
    content: [
      { label: '投入', prop: 'id' },
      { label: '产出', prop: 'id' },
      { label: '盈亏', prop: 'aa' },
      { label: '投产比', prop: 'id' },
    ],
  },
  {
    label: '房间编号',
    prop: 'createTime',
    hideInTable: true,
  },
]
