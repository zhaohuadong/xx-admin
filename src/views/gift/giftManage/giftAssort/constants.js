export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '分类名称',
    prop: 'giftTabName',
    hideInSearch: true,
  },
  {
    label: '分类状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        label: '启用',
        value: 1,
        text: '启用',
      },
      {
        label: '禁用',
        value: 2,
        text: '禁用',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '背景图片（关联说明背景表）',
    prop: 'backPic',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '分类排序',
    prop: 'sortNum',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  id: '',
  giftTabName: '',
  sortNum: '',
  backPic: '',
  status: 1,
})

export const formRule = {
  giftTabName: [{ required: true, message: '请输入分类名称', trigger: 'blur' }],
  backPic: [
    {
      required: true,
      message: '图片不能为空',
      trigger: 'change',
    },
  ],
  sortNum: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'change',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
}
