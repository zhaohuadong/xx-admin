export const columns = [
  {
    label: '房间编号',
    prop: 'crId',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '房主编号',
    prop: 'ssId',
  },
  {
    label: '房主昵称',
    prop: 'nickname',
  },
  {
    label: '锁房状态',
    prop: 'state',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '已解锁',
        value: 0,
      },
      {
        label: '锁房中',
        value: 1,
      },
    ],
  },
  {
    label: '锁房状态',
    prop: 'state',
    type: 'tag',
    hideInSearch: true,
    enum: [
      {
        label: '已解锁',
        value: '0',
        type: 'success',
      },
      {
        label: '锁房中',
        value: '1',
        type: 'danger',
      },
    ],
  },
  {
    label: '锁房时间',
    prop: 'lockTime',
    hideInSearch: true,
  },
  {
    label: '解锁时间',
    prop: 'unlockTime',
    hideInSearch: true,
  },
  {
    label: '锁房时间',
    prop: 'lockTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '解锁时间',
    prop: 'unlockTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]
