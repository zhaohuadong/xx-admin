// 列表项
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
    label: '用户手机号',
    prop: 'mobile',
    hideInSearch: true,
  },
  {
    label: '封禁时间',
    prop: 'lastFrozenTime',
    hideInSearch: true,
    width: '300',
  },
  {
    label: '解封时间',
    prop: 'addDate',
    hideInSearch: true,
    width: '300',
  },
  {
    label: '解封理由',
    prop: 'frozenDes',
    hideInSearch: true,
  },
  {
    label: '解封凭证',
    prop: 'urls',
    hideInSearch: true,
  },

  {
    label: '解封来源',
    prop: 'frozenSource',
    hideInSearch: true,
  },
  {
    label: '封禁时间',
    prop: 'lastFrozenTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '解封时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '操作人',
    prop: 'operatorName',
    hideInSearch: true,
  },
  {
    label: '操作人',
    prop: 'operator',
    type: 'select',
    enum: [
      {
        value: '0',
        label: '操作人1',
      },
      {
        value: '1',
        label: '天渺',
      },
    ],
    hideInTable: true,
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
