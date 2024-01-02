// 账户封禁记录列表项
export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '操作人',
    prop: 'operator',
    type: 'select',
    hideInTable: true,
    enum: [
      { value: 1, label: '操作人1' },
      { value: 2, label: '操作人2' },
    ],
  },
  {
    label: '用户手机号',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '封禁原因',
    prop: 'des',
    hideInSearch: true,
  },
  {
    label: '封禁理由',
    prop: 'frozenDes',
    hideInSearch: true,
  },
  {
    label: '封禁证据',
    prop: 'urls',
    hideInSearch: true,
  },
  {
    label: '封禁时长',
    prop: 'frozenTime',
    hideInSearch: true,
  },
  {
    label: '封禁来源',
    prop: 'frozenSource',
    hideInSearch: true,
  },
  {
    label: '封禁关联账号',
    prop: 'item3',
    hideInSearch: true,
  },
  {
    label: '封禁时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '解封时间',
    prop: 'lastFrozenTime',
    hideInSearch: true,
  },

  {
    label: '操作人',
    prop: 'operatorName',
    hideInSearch: true,
  },
  {
    label: '操作时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '封禁时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '解封时间',
    prop: 'lastFrozenTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
]

// 实名封禁记录列表项
export const Columns1 = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '身份证号',
    prop: 'certNo',
  },
  {
    label: '操作人',
    prop: 'operator',
    type: 'select',
    enum: [
      { value: 1, label: '操作管理员' },
      { value: 2, label: '操作人2' },
    ],
    hideInTable: true,
  },
  {
    label: '实名封禁理由',
    prop: 'frozenDes',
    hideInSearch: true,
  },
  {
    label: '实名封禁证据',
    prop: 'urls',
    hideInSearch: true,
  },
  {
    label: '实名封禁来源',
    prop: 'frozenSource',
    hideInSearch: true,
  },
  {
    label: '操作人',
    prop: 'operatorName',
    hideInSearch: true,
  },

  {
    label: '操作时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '操作时间',
    prop: 'addDate',
    type: 'datetimerange',
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
