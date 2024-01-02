// 类别管理
export const columns = [
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
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'state',
    type: 'tag',
    enum: [
      {
        label: '隐藏',
        value: 0,
        type: '',
      },
      {
        label: '隐藏',
        value: 2,
        type: '',
      },
      {
        label: '显示',
        value: 1,
        type: 'success',
      },
    ],
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const addAndEditformData = () => ({
  id: '',
  name: '',
  sort: null,
  state: 1,
})

export const formRule = {
  name: [{ required: true, message: '请输入类别名称', trigger: 'blur' }],
  sort: [
    {
      required: true,
      message: '请选择输入排序',
      trigger: 'blur',
    },
  ],
  state: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
}
