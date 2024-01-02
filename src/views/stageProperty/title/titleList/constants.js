export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '标题',
    prop: 'title',
  },
  {
    label: '图片',
    prop: 'img',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '来源',
    prop: 'source',
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '更新时间',
    prop: 'updateTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '160' },
]

export const addAndEditFormData = () => ({
  id: '',
  title: '',
  width: '',
  height: '',
  source: '',
  createTime: '',
  updateTime: '',
  status: 1,
  img: '',
})

export const addAndEditFormRule = {
  title: [
    {
      required: true,
      message: '请输入称号名称',
      trigger: 'blur',
    },
  ],
  img: [
    {
      required: true,
      message: '图片不能为空',
      trigger: 'change',
    },
  ],
}

export const giveFormData = () => ({
  userCode: '',
  title: '',
  id: '',
})

export const giveFormRule = {
  userCode: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
}
