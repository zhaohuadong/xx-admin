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
    label: '礼包',
    prop: 'title',
    hideInSearch: true,

    // type: 'select',
    // enum: [
    //   {
    //     value: '0',
    //     label: '礼包1',
    //   },
    //   {
    //     value: '1',
    //     label: '礼包2',
    //   },
    // ],
  },
  {
    label: '礼包内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '接收时间',
    prop: 'createTime',
    hideInSearch: true,
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({})
// 校验规则
export const formRule = {}
