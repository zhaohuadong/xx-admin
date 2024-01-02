// 商品类别管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '类别名称',
    prop: 'name',
  },
  {
    label: '状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        label: '显示',
        value: 0,
        type: 'success',
      },
      {
        label: '隐藏',
        value: 1,
        type: '',
      },
    ],
  },
  {
    label: '添加日期',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]
// 商品类别管理 弹窗form表单
export const formData = () => ({
  name: '',
  status: 0,
})
// 商品类别管理 表单校验规则
export const formRule = {
  name: [{ required: true, message: '请输入类别名称', trigger: 'blur' }],
}
