export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '名称',
    prop: 'dealType',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  dealType: '',
  id: '',
})

export const formRule = {
  dealType: [{ required: true, message: '请输入协议分类', trigger: 'blur' }],
}
