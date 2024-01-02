export const columns = [
  // { type: 'selection' },
  {
    label: '用户编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '用户头像',
    prop: 'profilePath',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '充值类型',
    prop: 'type',
    type: 'tag',
    enum: [
      {
        label: '余额',
        value: 1,
      },
      {
        label: '收益',
        value: 2,
      },
    ],
    // hideInTable: true,
  },
  {
    label: '充值数量(金币)',
    prop: 'number',
    hideInSearch: true,
  },
  {
    label: '充值时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '充值时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '充值目的',
    prop: 'purposeType',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '测试费用',
        value: 1,
      },
      {
        label: '24小时奖励',
        value: 2,
      },
      {
        label: '公会周奖励',
        value: 3,
      },
      {
        label: '公会月奖励',
        value: 4,
      },
      {
        label: '账号冲正',
        value: 5,
      },
      {
        label: '其他',
        value: 6,
      },
    ],
  },
  {
    label: '操作者',
    prop: 'creator',
  },
]
