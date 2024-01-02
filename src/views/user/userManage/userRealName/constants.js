// 列表项
export const columns = [
  {
    label: '用户编号',
    prop: 'userCode',
    width: '100',
  },
  {
    label: '昵称',
    prop: 'nickname',
    width: '100',
  },
  {
    label: '姓名',
    prop: 'name',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '性别',
    prop: 'sex',
    hideInSearch: true,
    width: '80',
  },
  {
    label: '认证类型',
    prop: 'authType',
    hideInSearch: true,
    width: '130',
    type: 'tag',
    enum: [
      {
        label: '人工审核',
        value: 1,
        text: '人工审核',
      },
      {
        label: '支付宝快捷',
        value: 2,
        text: '支付宝快捷',
      },
    ],
  },
  {
    label: '身份证号',
    prop: 'certNo',
    width: '250',
  },
  {
    label: '审核图片',
    prop: 'picUrl',
    hideInSearch: true,
  },
  {
    label: '提交时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '账号状态',
    prop: 'accountStatus',
    width: '100',
    type: 'tag',
    enum: [
      {
        label: '正常',
        value: 0,
        type: '',
      },
      {
        label: '封禁中',
        value: 1,
        type: '',
      },
      // {
      //   label: '已注销',
      //   value: 2,
      //   type: '',
      // },
    ],
  },
  {
    label: '实名状态',
    prop: 'state',
    width: '100',
    type: 'tag',
    enum: [
      {
        label: '审核中',
        value: 0,
        type: '',
      },
      {
        label: '审核拒绝',
        value: 1,
        type: '',
      },
      {
        label: '审核通过',
        value: 2,
        type: '',
      },
      {
        label: '取消认证状态',
        value: 3,
        type: '',
      },
      {
        label: '封禁中',
        value: 4,
        type: '',
      },
      {
        label: '账号注销解绑',
        value: 5,
        type: '',
      },
    ],
  },
  {
    label: '审核理由',
    prop: 'reviewReason',
    hideInSearch: true,
  },
  {
    label: '操作人',
    prop: 'operator',
    hideInSearch: true,
    width: '100',
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '170' },
]

// 表单值
export const formData = () => ({
  authReason: '',
  realBanSource: '',
  urls: [],
  state: 2,
})
// 校验规则
export const formRule = {
  state: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  authReason: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
  realBanSource: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
  urls: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
}
