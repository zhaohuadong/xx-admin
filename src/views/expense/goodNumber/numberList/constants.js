export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '靓号编号',
    prop: 'number',
  },
  {
    label: '类别',
    prop: 'categoryId',
    hideInTable: true,
    type: 'tag',
    enum: [
      {
        label: '未发放',
        value: 1,
        text: '未发放',
      },
      {
        label: '使用中',
        value: 2,
        txet: '使用中',
      },
    ],
  },
  {
    label: '原始编号',
    prop: 'userCode',
  },
  {
    label: '使用状态',
    prop: 'state',
    // hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '未发放',
        value: 1,
        text: '未发放',
      },
      {
        label: '使用中',
        value: 2,
        txet: '使用中',
      },
    ],
  },
  {
    label: '靓号类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'addDate',
  },
  {
    label: '添加时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '使用截止时间',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'expireDate',
  },
  {
    label: '使用截止时间',
    prop: 'expireDate',
    hideInSearch: true,
  },
  {
    label: '操作人',
    prop: 'operatorName',
    hideInSearch: true,
  },
  {
    label: '备注',
    prop: 'remark',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 商品类别管理 弹窗form表单
export const formData = () => ({
  number: null,
  isForever: 1,
  initialId: '',
  ownNumber: '',
  nowNumber: '',
  userCode: '',
  categoryId: '',
  expireDate: '2023-01-01 00:00:00',
  selsectData: '',
  remark: '',
})
// 商城单品管理 表单校验规则
export const formRule = {
  number: [{ required: true, message: '请填写靓号', trigger: 'blur' }],
  initialId: [{ required: true, message: '请填写原始编号', trigger: 'blur' }],
  ownNumber: [{ required: true, message: '请填写拥有的编号', trigger: 'blur' }],
  nowNumber: [{ required: true, message: '请填写当前靓号', trigger: 'blur' }],
  categoryId: [{ required: true, message: '请选择类别', trigger: 'change' }],
  expireDate: [{ required: true, message: '请填写过期时间', trigger: 'blur' }],
  userCode: [{ required: true, message: '请填写用户编号', trigger: 'blur' }],
}
