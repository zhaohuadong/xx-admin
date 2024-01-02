// 列表项
export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '100',
  },
  {
    label: '送礼用户id',
    prop: 'sendUserId',
  },
  {
    label: '送礼用户编号',
    prop: 'sendUserCode',
  },
  {
    label: '送礼用户昵称',
    prop: 'sendUserNickname',
    hideInSearch: true,
  },
  {
    label: '所在房间编号',
    prop: 'crId',
  },
  {
    label: '所在房间名称',
    prop: 'roomTitle',
    hideInSearch: true,
  },
  {
    label: '礼物类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '赠送礼物',
    prop: 'giftName',
    hideInSearch: true,
  },
  {
    label: '赠送数量',
    prop: 'giftNum',
    hideInSearch: true,
  },
  {
    label: '礼物价值',
    prop: 'giftPrice',
    hideInSearch: true,
  },
  {
    label: '收礼用户id',
    prop: 'toUserId',
  },
  {
    label: '收礼用户编号',
    prop: 'toUserCode',
  },
  {
    label: '收礼用户昵称',
    prop: 'toUserNickname',
    hideInSearch: true,
  },
  {
    label: '送礼时间',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '送礼时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
