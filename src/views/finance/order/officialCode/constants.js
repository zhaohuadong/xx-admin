export const columns = [
  { type: 'selection' },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '手机号',
    prop: 'phoneNumber',
  },
  {
    label: '添加时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '操作者',
    prop: 'operator',
    hideInSearch: true,
  },
  {
    label: '备注',
    prop: 'remark',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

// 编辑
export const formData = () => ({
  userCode: '',
  phoneNumber: '',
  remark: '',
})

export const formRule = {
  userCode: [{ required: true, message: '请输入用户编号', trigger: 'blur' }],
  phoneNumber: [{ required: true, message: '请输入手机号', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
}
