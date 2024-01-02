// 列表
export const columns = [
  { type: 'selection' },
  {
    label: '员工姓名',
    prop: 'deptName',
    hideInSearch: true,
  },
  {
    label: '手机号码',
    prop: 'configKey',
    hideInSearch: true,
  },
  {
    label: '员工角色',
    prop: 'configKey',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'configKey',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]

// 编辑
export const formData = () => ({
  deptId: '',
  nickName: '',
  userName: '',
  password: '',
  phonenumber: '',
  roleId: '',
  status: '0',
})

export const formRule = {
  deptId: [{ required: true, message: '请选择所属部门', trigger: 'change' }],
  nickName: [
    {
      required: true,
      message: '请输入员工昵称',
      trigger: 'blur',
    },
  ],
  userName: [
    {
      required: true,
      message: '请输入员工用户名',
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur',
    },
  ],
  phonenumber: [
    {
      required: true,
      message: '请输入手机号',
      trigger: 'blur',
    },
  ],
  roleId: [
    {
      required: true,
      message: '请选择角色',
      trigger: 'change',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择启用状态',
      trigger: 'change',
    },
  ],
}
