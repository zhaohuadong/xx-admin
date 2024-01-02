export const columns = [
  {
    label: '房间编号',
    prop: 'crId',
    inputType: 'number',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '房主编号',
    prop: 'userCode',
    hideInSearch: true,
  },
  {
    label: '锁房总时长',
    prop: 'totalLockTime',
    hideInSearch: true,
  },
  {
    label: '平均锁房总时长',
    prop: 'aveLockTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 60 },
]

export const roomLockStatisticInfoTableLabel = [
  {
    label: '日期',
    prop: 'day',
    hideInSearch: true,
  },
  {
    label: '累计时长',
    prop: 'totalTime',
    hideInSearch: true,
  },
]
