// 列表项
export const columns = [
  {
    label: '序号',
    prop: 'ssId',
    hideInSearch: true,
    width: '90',
  },
  {
    label: '用户编号',
    prop: 'username',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '用户收益',
    prop: 'charmNum',
    hideInSearch: true,
    sortable: true,
  },
  {
    label: '用户余额',
    prop: 'coin',
    hideInSearch: true,
    sortable: true,
    // api: editStatusApi,
  },
  {
    label: '初级抽奖道具数量',
    prop: 'primaryLotteryPropNum',
    hideInSearch: true,
    sortable: true,
  },
  {
    label: '高级抽奖道具数量',
    prop: 'seniorLotteryPropNum',
    hideInSearch: true,
    sortable: true,
  },
  {
    label: '背包礼物价值',
    prop: 'giftBagTotal',
    hideInSearch: true,
  },
  {
    label: '注册时间',
    prop: 'registerDate',
    hideInSearch: true,
    sortable: true,
  },
  {
    label: '最后登录时间',
    prop: 'lastLoginDate',
    hideInSearch: true,
    sortable: true,
  },
  {
    label: '最后登录时间',
    prop: 'lastLoginDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
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
