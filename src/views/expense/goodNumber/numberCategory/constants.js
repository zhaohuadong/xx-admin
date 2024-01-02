// 靓号类别管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '分类ID',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '类别名称',
    prop: 'categoryName',
  },
  {
    label: '添加日期',
    prop: 'addDate',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 靓号类别管理 弹窗form表单
export const formData = () => ({
  categoryName: '',
  pageNum: 1,
  pageSize: 10,
})

// 靓号类别管理 弹窗form表单校验
export const formRule = {
  categoryName: [{ required: true, message: '请输入类别名称', trigger: 'blur' }],
}
