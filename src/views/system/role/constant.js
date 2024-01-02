// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '角色名称',
    prop: 'roleName',
    hideInSearch: true,
  },
  {
    label: '使用人数',
    prop: 'sysUserNum',
    hideInSearch: true,
  },
  {
    label: '权限数量',
    prop: 'menuNum',
    hideInSearch: true,
  },
  {
    label: '角色描述',
    prop: 'remark',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'tag',
    enum: [
      { value: '0', label: '启用' },
      { value: '1', label: '禁用' },
    ],
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

// 编辑
export const formData = () => ({
  roleName: '',
  roleId: '',
  status: '0',
  roleDesc: '',
  roleSort: 1,
  roleKey: '',
})

export const formRule = {
  roleName: [{ required: true, message: '请输入角色名称', trigger: 'blur' }],
  status: [{ required: true, message: '请选择状态', trigger: 'blur' }],
  roleDesc: [{ required: true, message: '请输入角色描述', trigger: 'blur' }],
  roleKey: [{ required: true, message: '请输入角色权限', trigger: 'blur' }],
}
