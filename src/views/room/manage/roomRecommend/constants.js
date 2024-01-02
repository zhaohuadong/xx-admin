// 列表项
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
    width: '70',
  },
  {
    label: '房间编号',
    prop: 'crId',
  },
  {
    label: '房间名',
    prop: 'roomName',
  },
  {
    label: '房主编号',
    prop: 'ssId',
    hideInSearch: true,
  },
  {
    label: '官方类别',
    prop: 'roomCategory',
    // type: 'tag',
    // enum: [
    //   {
    //     label: '红颜',
    //     value: 1,
    //     type: 'success',
    //   },
    //   {
    //     label: '蓝颜',
    //     value: 2,
    //     type: 'warning',
    //   },
    // ],
    hideInSearch: true,
  },
  {
    label: '创建时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '70' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  crId: '',
  roomName: '',
  type: '',
  ssId: '',
  inputNumber: '',
  select: '',
  radio: '1',
  textarea: '',
})
// 校验规则
export const formRule = {
  crId: [
    {
      required: true,
      message: '请输入房间编号',
      trigger: 'blur',
    },
  ],
  inputNumber: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  select: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  radio: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  textarea: [
    {
      required: true,
      message: '请输入',
      trigger: 'blur',
    },
  ],
}
