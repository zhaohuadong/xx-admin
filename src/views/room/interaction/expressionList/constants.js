// 表情列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '表情名称',
    prop: 'name',
  },
  {
    label: '图片',
    prop: 'iconUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '动态图',
    prop: 'aniUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '发送效果',
    prop: 'type',
    type: 'tag',
    enum: [
      {
        label: '全麦',
        value: 1,
        type: '',
      },
      {
        label: '单人',
        value: 2,
        type: '',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'orderNum',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const AddAndEditformData = () => ({
  name: '',
  iconUrl: '',
  aniUrl: '',
  orderNum: 1,
  id: '',
  type: '',
})

export const formRule = {
  name: [{ required: true, message: '请输入表情名称', trigger: 'blur' }],
  iconUrl: [
    {
      required: true,
      message: '表情图片不能为空',
      trigger: 'change',
    },
  ],
  aniUrl: [
    {
      required: true,
      message: '表情动态图不能为空',
      trigger: 'change',
    },
  ],
  orderNum: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择类别',
      trigger: 'blur',
    },
  ],
}
