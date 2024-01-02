// 列表项
export const columns = [
  {
    label: '用户id',
    prop: 'userId',
    hideInSearch: true,
    width: '150',
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    hideInSearch: true,
  },
  {
    label: '用户手机号',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '填写的邀请码',
    prop: 'invitationCode',
    // api: editStatusApi,
  },
  {
    label: '房间编号',
    prop: 'roomCode',
    hideInSearch: true,
  },
  {
    label: '充值金额(元)',
    prop: 'rechargeMoney',
    hideInSearch: true,
  },
  {
    label: '注册时间',
    prop: 'registerDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '注册时间',
    prop: 'registerDate',
    hideInSearch: true,
    width: '300',
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  input: '',
  inputNumber: '',
  select: '',
  radio: '1',
  textarea: '',
})
// 校验规则
export const formRule = {
  input: [
    {
      required: true,
      message: '请输入文字',
      trigger: 'blur',
    },
  ],
  inputNumber: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  select: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  radio: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  textarea: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
}
