export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '任务类型',
    prop: 'userId',
    hideInSearch: true,
  },
  {
    label: '跳转状态',
    prop: 'userCode',
    hideInSearch: true,
  },
  {
    label: '类型名称',
    hideInTable: true,
    prop: 'title',
  },
  {
    label: '跳转类型',
    prop: 'userName',
    hideInSearch: true,
  },
  {
    label: '任务类型说明',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '任务形式',
    prop: 'dealCode',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]
export const formData = () => ({
  taskType: '',
  remark: '',
  condition: '',
  jumpType: '',
  status: 0,
})
export const options = [
  {
    value: 'Option1',
    label: '任意房间',
  },
  {
    value: 'Option2',
    label: '实名认证',
  },
  {
    value: 'Option3',
    label: '充值界面',
  },
  {
    value: 'Option4',
    label: '福利专区',
  },
  {
    value: 'Option5',
    label: '个性商城',
  },
]

export const formRule = {
  taskType: [{ required: true, message: '请选择任务类型', trigger: 'change' }],
  condition: [{ required: true, message: '请选择任务形式', trigger: 'change' }],
  remark: [{ required: true, message: '请输入任务类型描述', trigger: 'change' }],
  jumpType: [{ required: true, message: '请选择', trigger: 'change' }],
  status: [{ required: true, message: '请选择', trigger: 'change' }],
}
