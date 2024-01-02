// 列表项
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '礼物',
    prop: 'giftId',
    hideInTable: true,
    type: 'select',
    enum: [
      { value: 1, label: '礼物1' },
      { value: 2, label: '礼物2' },
    ],
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '昵称',
    prop: 'nickname',
  },
  {
    label: '名称',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '价格',
    prop: 'giftPrice',
    hideInSearch: true,
    // api: editStatusApi,
  },
  {
    label: '数量',
    prop: 'num',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '135' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
