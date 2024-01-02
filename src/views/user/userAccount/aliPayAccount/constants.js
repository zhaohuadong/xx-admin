// 列表项
export const columns = [
  { type: 'selection' },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '支付宝账号',
    prop: 'alipayAccount',
    hideInTable: true,
  },
  {
    label: '状态',
    prop: 'item2',
    hideInTable: true,
    type: 'select',
    enum: [
      { value: 1, label: '状态1' },
      { value: 2, label: '状态2' },
    ],
  },
  {
    label: '昵称',
    prop: 'nickname',
  },
  {
    label: '手机号',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '账号',
    prop: 'alipayAccount',
    hideInSearch: true,
  },
  {
    label: '身份证号',
    prop: 'certNo',
    hideInSearch: true,
  },
  {
    label: '姓名',
    prop: 'alipayName',
  },
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  username: '',
  alipayAccount: '',
  alipayName: '',
  cardNumber: '',
  mobile: '',
})
// 校验规则
export const formRule = {
  username: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
  alipayAccount: [
    {
      required: true,
      message: '请输入支付宝账号',
      trigger: 'blur',
    },
  ],
  alipayName: [
    {
      required: true,
      message: '请输入姓名',
      trigger: 'blur',
    },
  ],
  cardNumber: [
    {
      required: true,
      message: '请输入身份证号',
      trigger: 'blur',
    },
  ],
  mobile: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur',
    },
  ],
}
