// 常用语列表
export const columns = [
  {
    label: '举报用户编号',
    prop: 'sourceUserNum',
    hideInSearch: true,
  },
  {
    label: '举报用户编号',
    prop: 'sourceUserId',
    hideInTable: true,
  },
  {
    label: '举报用户昵称',
    prop: 'sourceUserName',
    hideInSearch: true,
  },
  {
    label: '被举报房间编号',
    prop: 'targetId',
  },
  {
    label: '被举报房间昵称',
    prop: 'targetName',
    hideInSearch: true,
  },
  // {
  //   label: '举报类型',
  //   prop: 'status',
  //   hideInSearch: true,
  // },
  {
    label: '举报理由',
    prop: 'reason',
    hideInSearch: true,
  },
  {
    label: '举报图片',
    prop: 'imageUrls',
    type: 'img',
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
