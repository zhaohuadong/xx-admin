export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '文章标题',
    prop: 'title',
  },
  {
    label: '类别',
    prop: 'configName',
    hideInSearch: true,
  },
  {
    label: '内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  title: '',
  configId: '',
  content: '',
  sort: '',
  id: '',
})

export const formRule = {
  title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
  configId: [
    {
      required: true,
      message: '请选择分类',
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
  content: [
    {
      required: true,
      message: '请输入内容',
      trigger: 'blur',
    },
  ],
}
