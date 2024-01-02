// 财富等级管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '财富等级名称',
    prop: 'vipName',
  },
  {
    label: '等级',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '所需财富值',
    prop: 'consumeMoney',
    hideInSearch: true,
  },
  {
    label: '图标',
    prop: 'vipIcoUrl',
    type: 'img',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 财富等级管理 弹窗form表单
export const formData = () => ({
  id: 0,
  vipName: '',
  consumeMoney: 0,
  vipIcoUrl: '',
})

// 财富等级管理 表单校验规则
export const formRule = {
  id: [{ required: true, message: '请填写等级', trigger: 'blur' }],
  vipName: [{ required: true, message: '请填写等级名称', trigger: 'blur' }],
  consumeMoney: [{ required: true, message: '请填写所需财富值', trigger: 'blur' }],
}
