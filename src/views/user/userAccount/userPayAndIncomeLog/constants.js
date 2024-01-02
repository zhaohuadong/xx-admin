// 列表项
export const columns = [
  {
    label: '序号',
    prop: 'item1',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '用户编号',
    prop: 'userName',
  },
  {
    label: '昵称',
    prop: 'nickName',
  },
  {
    label: '用户手机',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '金币数量',
    prop: 'num',
    hideInSearch: true,
  },
  {
    label: '类别',
    prop: 'title',
    hideInSearch: true,
  },
  {
    label: '类别',
    prop: 'type',
    type: 'select',
    enum: [
      { value: 1, label: '类别1' },
      { value: 2, label: '类别2' },
    ],
    hideInTable: true,
  },
  {
    label: '备注',
    prop: 'remark',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'happenedTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '时间',
    prop: 'happenedTime',
    hideInSearch: true,
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
