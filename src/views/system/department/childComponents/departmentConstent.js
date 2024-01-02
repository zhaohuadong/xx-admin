// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '部门名称',
    prop: 'deptName',
    hideInSearch: true,
  },
  {
    label: '部门人数',
    prop: 'userAmount',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

// 编辑
export const formData = () => ({
  deptName: '',
  parentId: '',
  orderNum: null,
})

export const formRule = {
  deptName: [{ required: true, message: '请输入部门名称', trigger: 'blur' }],
  orderNum: [{ required: true, message: '请输入排序', trigger: 'blur' }],
  parentId: [
    {
      required: true,
      message: '请选择上级部门',
      trigger: 'change',
    },
  ],
}
