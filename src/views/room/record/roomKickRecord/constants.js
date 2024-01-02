export const columns = [
  {
    label: '踢人者编号',
    prop: 'userCode',
    inputType: 'number',
  },
  {
    label: '踢人者名称',
    prop: 'nickname',
  },
  {
    label: '被踢者编号',
    prop: 'toUserCode',
    inputType: 'number',
  },
  {
    label: '被踢者名称',
    prop: 'toNickname',
  },
  {
    label: '房间编号',
    prop: 'crId',
    inputType: 'number',
  },
  {
    label: '房间名称',
    prop: 'roomTitle',
  },
  {
    label: '踢人时间',
    prop: 'addTime',
    hideInSearch: true,
  },
]
