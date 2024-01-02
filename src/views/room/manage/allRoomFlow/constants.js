// 全部房间流水列表
export const columns = [
  {
    label: '日期',
    prop: 'date',
    hideInSearch: true,
  },
  {
    label: '房主编号',
    prop: 'ssId',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'crId',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '流水',
    prop: 'totalFlow',
    hideInSearch: true,
  },
  {
    label: '所属公会',
    prop: 'captain',
    hideInSearch: true,
  },
  {
    label: '公会会长编号',
    prop: 'captainNo',
    hideInSearch: true,
  },
  {
    label: '日期筛选',
    prop: 'date',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 85 },
]

// 房间详情列表
export const roomFlowInfoTableLabel = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '收入（金币）',
    prop: 'charmNum',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'addDate',
    hideInSearch: true,
  },
]
