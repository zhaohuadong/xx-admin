// 列表
export const columns = [
  {
    label: '',
    prop: 'timeType',
    type: 'selectTime',
    defaultValue: '今日',
    enum: [
      {
        label: '今日',
        value: '今日',
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
        label: '自定义',
        value: '自定义',
      },
    ],
    dateType: 'daterange',
    selectTime: [],
  },
  {
    label: 'ID',
    prop: 'configTitle',
    hideInSearch: true,
  },
  {
    label: '用户昵称',
    prop: 'configKey',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'configKey',
  },
  {
    label: '用户投入',
    prop: 'configValue',
    hideInSearch: true,
  },
  {
    label: '用户产出',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '盈利',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '最后寻宝时间',
    prop: 'sort',
    hideInSearch: true,
  },
]
export const blindBoxList = [
  {
    label: '初级奖池',
    value: '1',
  },
  {
    label: '高级奖池',
    value: '2',
  },
]
export const profitLossList = [
  {
    label: '盈利用户',
    value: '1',
  },
  {
    label: '亏损用户',
    value: '2',
  },
]

export const poolCardList = [
  {
    name: '龙窟探宝总投入',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝总产出',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台盈亏',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台亏/亏人数',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝投入（日）',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝产出（日）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台盈亏（日）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台亏/亏人数（日）',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝投入（周）',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝产出（周）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台盈亏（周）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台亏/亏人数（周）',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝投入（月）',
    count: '654,745,746,767,474,',
  },
  {
    name: '龙窟探宝产出（月）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台盈亏（月）',
    count: '654,745,746,767,474,',
  },
  {
    name: '平台亏/亏人数（月）',
    count: '654,745,746,767,474,',
  },
]
