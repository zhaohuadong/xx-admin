// 列表
export const columns = [
  {
    label: '昵称',
    prop: 'configTitle',
  },
  {
    label: '主属部门',
    prop: 'configKey',
    hideInSearch: true,
  },
  {
    label: '登录终端型号',
    prop: 'configValue',
    hideInSearch: true,
  },
  {
    label: 'IP',
    prop: 'ip',
  },
  {
    label: '登录状态',
    prop: 'status',
    type: 'select',
    enum: [
      { value: 1, label: '成功' },
      { value: 2, label: '失败' },
    ],
  },
  {
    label: '操作信息',
    prop: 'item3',
    hideInSearch: true,
  },
  {
    label: '登录时间',
    prop: 'item4',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '登录时间',
    prop: 'item4',
    hideInSearch: true,
  },
]
