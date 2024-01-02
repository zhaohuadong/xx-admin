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
    inputType: 'number',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  {
    label: '操作内容',
    prop: 'type',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '余额冻结',
        value: 1,
        text: '余额冻结',
      },
      {
        label: '余额解冻',
        value: 2,
        text: '余额解冻',
      },
      {
        label: '收益冻结',
        value: 3,
        text: '收益冻结',
      },
      {
        label: '收益解冻',
        value: 4,
        text: '收益解冻',
      },
    ],
  },
  {
    label: '操作原因',
    prop: 'reason',
    hideInSearch: true,
    // api: editStatusApi,
  },
  {
    label: '操作人',
    prop: 'sysUserName',
    hideInSearch: true,
  },
  {
    label: '操作时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  {
    label: '操作时间',
    prop: 'createTime',
    hideInSearch: true,
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
