// 房间主题列表
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '主题名称',
    prop: 'name',
  },
  {
    label: '图片',
    prop: 'pcCover',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '效果',
    prop: 'pcCoverFull',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '价格',
    prop: 'priceGap',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'state',
    type: 'tag',
    enum: [
      {
        label: '上架',
        value: 1,
        type: 'success',
      },
      {
        label: '下架',
        value: 2,
        type: 'warning',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sortNum',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 155 },
]

// 新增和编辑 form表单
export const addAndEditFormData = () => ({
  name: '',
  pcCover: '',
  pcCoverFull: '',
  price: 0,
  priceGap: [{ price: '', days: '' }],
  state: 1,
  id: '',
})
// 新增和编辑 form表单验证
export const addAndEditFormRule = {
  name: [
    {
      required: true,
      message: '请输入主题名称',
      trigger: 'blur',
    },
  ],
  pcCover: [
    {
      required: true,
      message: '主题图片不能为空',
      trigger: 'change',
    },
  ],
  pcCoverFull: [
    {
      required: true,
      message: '主题效果图不能为空',
      trigger: 'blur',
    },
  ],
  price: [
    {
      required: true,
      message: '请选择是否免费状态',
      trigger: 'change',
    },
  ],
  state: [
    {
      required: true,
      message: '请选择出售状态',
      trigger: 'change',
    },
  ],
}

// 赠送主题 form表单
export const giveThemeFormData = () => ({
  name: '',
  toUserId: '',
  id: '',
  giveDay: 1,
  dayNum: '',
})

// 赠送主题 form表单验证
export const giveThemeFormRule = {
  name: [
    {
      required: true,
      message: '主题名称不能为空',
      trigger: 'blur',
    },
  ],
  toUserId: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'change',
    },
  ],
  giveDay: [
    {
      required: true,
      message: '请选择赠送天数',
      trigger: 'change',
    },
  ],
  dayNum: [
    {
      required: true,
      message: '请输入自定义天数',
      trigger: 'blur',
    },
  ],
}
