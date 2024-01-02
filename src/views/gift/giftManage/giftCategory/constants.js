// 常用语列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '礼物类别名称',
    prop: 'categoryName',
  },
  {
    label: '添加时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const AddAndEditformData = () => ({
  categoryName: '',
  id: '',
})

export const formRule = {
  categoryName: [{ required: true, message: '请输入礼物类别名称', trigger: 'blur' }],
}
