export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'roomId',
    inputType: 'number',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '封禁开始时间',
    prop: 'beginTime',
    hideInSearch: true,
  },
  {
    label: '封禁结束时间',
    prop: 'endTime',
    hideInSearch: true,
  },
  {
    label: '封禁时间',
    prop: 'beginTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '封禁理由',
    prop: 'reason',
    hideInSearch: true,
  },
]
