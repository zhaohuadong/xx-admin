export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '房间编号',
    prop: 'crId',
    inputType: 'number',
  },
  {
    label: '房间名称',
    prop: 'roomName',
  },
  {
    label: '操作人',
    prop: 'ssId',
    hideInSearch: true,
  },
  {
    label: '修改前',
    prop: 'beforeEdit',
    hideInSearch: true,
  },
  {
    label: '修改后',
    prop: 'afterEdit',
    hideInSearch: true,
  },
  {
    label: '修改类型',
    prop: 'type',
    type: 'tag',
    hideInSearch: true,
    enum: [
      {
        label: '房间名称',
        value: 1,
        type: '',
      },
      {
        label: '话题主题',
        value: 25,
        type: '',
      },
      {
        label: '话题内容',
        value: 28,
        type: '',
      },
      {
        label: '房间欢迎语',
        value: 36,
        type: '',
      },
      {
        label: '',
        value: 39,
        text: '房间封面',
      },
    ],
  },
  {
    label: '修改时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '修改时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]
