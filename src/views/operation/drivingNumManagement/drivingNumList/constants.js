export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '用户id',
    prop: 'userId',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'userName',
  },
  {
    label: '用户等级',
    prop: 'orderId',
    hideInSearch: true,
  },
  {
    label: '可用金币',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '可用收益',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'gold',
    hideInSearch: true,
  },
  {
    label: '添加人',
    prop: 'orderTime',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 150 },
]
// 充值数据
export const formData = () => ({
  amount: '',
  rechargeType: 3,
  purpose: 0,
  remark: '',
})
// 充值校验
export const formRule = {
  amount: [{ required: true, message: '请输入充值金额', trigger: 'blur' }],
  rechargeType: [{ required: true, message: '请选择充值类型', trigger: 'change' }],
  purpose: [{ required: true, message: '请选择充值目的', trigger: 'change' }],
  remark: [{ required: true, message: '请输入请输入备注', trigger: 'blur' }],
}
// 封禁用户数据
export const sealUserData = () => ({
  fileUrl: '',
  banningCause: '',
  banningDuration: 0,
  banningDurations: '',
  banningSource: '',
  banningReason: '',
  banningEvidence: '',
  banningAssociationAccount: 0,
})
// 封禁用户校验
export const sealUserRule = {
  banningCause: [{ required: true, message: '请选择充值类型', trigger: 'change' }],
  banningDuration: [{ required: true, message: '请输入扣除金额', trigger: 'blur' }],
}
// 新增数据
export const addData = () => ({
  userCode: '',
  userName: '',
})
// 新增校验
// export const addRule = {}
// 账户扣除数据
export const accountDeductionData = () => ({
  rechargeType: 3,
  goldBalance: 88888,
  deductBalance: '',
})
// 账户扣除校验
export const accountDeductionRule = {
  rechargeType: [{ required: true, message: '请选择充值类型', trigger: 'change' }],
  deductBalance: [{ required: true, message: '请输入扣除金额', trigger: 'blur' }],
  remark: [{ required: true, message: '请输入备注', trigger: 'blur' }],
}
// 清空背包数据
export const emptyBackpackData = () => ({
  goldBalance: 88888,
})

// 单选列表
export const radioLIst = () => [
  {
    label: '测试费用',
    value: 0,
  },
  {
    label: '24小时奖励',
    value: 1,
  },
  {
    label: '公会周奖励',
    value: 2,
  },
  {
    label: '公会月奖励',
    value: 3,
  },
  {
    label: '账号冲正',
    value: 4,
  },
  {
    label: '其他',
    value: 5,
  },
]
