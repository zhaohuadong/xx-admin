export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '协议标题',
    prop: 'title',
    hideInSearch: true,
  },
  {
    label: '协议类别',
    prop: 'dealType',
    hideInSearch: true,
  },
  {
    label: '文章内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  title: '',
  configId: '',
  content: '',
  id: '',
})

export const formRule = {
  title: [{ required: true, message: '请输入协议标题', trigger: 'blur' }],
  configId: [
    {
      required: true,
      message: '请选择协议分类',
      trigger: 'change',
    },
  ],
  content: [
    {
      required: true,
      message: '请输入协议内容',
      trigger: 'blur',
    },
  ],
}
