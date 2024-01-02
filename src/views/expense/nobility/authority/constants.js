// 爵位权限 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '名称',
    prop: 'name',
    hideInTable: true,
  },
  {
    label: '名称',
    prop: 'powerName',
    hideInSearch: true,
  },
  {
    label: '高亮图标',
    type: 'img',
    prop: 'url',
    hideInSearch: true,
  },
  {
    label: '灰色图标',
    type: 'img',
    prop: 'grayUrl',
    hideInSearch: true,
  },
  {
    label: '详情',
    type: 'img',
    prop: 'detailUrl',
    hideInSearch: true,
  },
  {
    label: '权限说明',
    prop: 'remark',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'state',
    type: 'select',
    enum: [
      {
        label: '显示',
        value: 0,
      },
      {
        label: '隐藏',
        value: 1,
      },
    ],
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
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 靓号使用记录 弹窗form表单
export const formData = () => ({
  powerName: '',
  remark: '',
  url: '',
  grayUrl: '',
  detailUrl: '',
  sort: 0,
  state: 0,
})

// 靓号使用记录 表单校验规则
export const formRule = {
  powerName: [{ required: true, message: '请填写权限名称', trigger: 'blur' }],
  remark: [{ required: true, message: '请填写权限说明', trigger: 'blur' }],
  sort: [{ required: true, message: '请填写排序号码', trigger: 'blur' }],
}
