// 常用语列表
export const columns = [
  {
    label: '举报用户编号',
    prop: 'sourceUserNum',
  },
  {
    label: '举报用户昵称',
    prop: 'sourceUserName',
    hideInSearch: true,
  },
  {
    label: '被举报用户编号',
    prop: 'targetUserNum',
  },
  {
    label: '被举报用户昵称',
    prop: 'targetName',
    hideInSearch: true,
  },
  {
    label: '举报类型',
    prop: 'violationName',
    hideInSearch: true,
  },
  {
    label: '举报理由',
    prop: 'reason',
    hideInSearch: true,
  },
  {
    label: '举报图片',
    prop: 'imageUrls',
    // type: 'img',
    hideInSearch: true,
  },
  {
    label: '举报时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '举报时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]
