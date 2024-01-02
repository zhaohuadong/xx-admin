// 列表
export const columns = [
  {
    label: '用户编号',
    prop: 'userId',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    hideInSearch: true,
  },
  {
    label: '用户手机号',
    prop: 'phone',
    hideInSearch: true,
  },
  {
    label: '反馈内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '反馈时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '反馈时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]
