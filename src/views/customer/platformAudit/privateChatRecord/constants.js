// 常用语列表
export const columns = [
  {
    label: '用户编号',
    prop: 'senderUserNum',
  },
  {
    label: '用户昵称',
    prop: 'senderName',
    hideInSearch: true,
  },
  {
    label: '对方用户编号',
    prop: 'receiverUserNum',
  },
  {
    label: '对方用户昵称',
    prop: 'receiverName',
    hideInSearch: true,
  },
  {
    label: '消息内容',
    prop: 'content',
    hideInSearch: true,
    width: 350,
  },
  {
    label: '消息发送时间',
    prop: 'sendTime',
    hideInSearch: true,
  },
  {
    label: '消息发送时间',
    prop: 'sendTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
]
