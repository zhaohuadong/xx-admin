export const columns = [
  { type: 'selection' },
  {
    label: '文章标题',
    prop: 'name',
    hideInTable: true,
  },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '分类名称',
    prop: 'name',
    hideInSearch: true,
  },
  {
    label: '图标',
    prop: 'imgUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  name: '',
  imgUrl: '',
  sort: '',
  id: '',
})

export const formRule = {
  name: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
  imgUrl: [
    {
      required: true,
      message: '图片不能为空',
      trigger: 'change',
    },
  ],
  sort: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'blur',
    },
  ],
}
