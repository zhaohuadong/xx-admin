// 日期快捷操作
export const shortcuts = [
  {
    text: '近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
  {
    text: '近半年',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 180)
      return [start, end]
    },
  },
]
// 列表
export const columns = [
  {
    label: '序号',
    prop: 'operId',
    hideInSearch: true,
  },
  {
    label: '操作模块',
    prop: 'title',
    hideInSearch: true,
  },

  {
    label: '操作结果',
    prop: 'jsonResult',

    hideInSearch: true,
  },
  {
    label: '操作人员',
    prop: 'operName',
  },
  {
    label: 'IP',
    prop: 'operIp',
    hideInSearch: true,
  },
  {
    label: '操作时间',
    prop: 'operTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    // shortcuts,
  },
  {
    label: '操作时间',
    prop: 'operTime',
    hideInSearch: true,
    // shortcuts,
  },
  {
    label: '操作内容',
    prop: 'title',
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '149' },
]
