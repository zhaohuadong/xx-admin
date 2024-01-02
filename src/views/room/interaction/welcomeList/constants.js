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
    label: '文案内容',
    prop: 'welcomeMsg',
  },
  {
    label: '默认排序',
    prop: 'sort',
  },
  {
    label: '状态',
    prop: 'state',
    type: 'tag',
    enum: [
      {
        label: '显示',
        value: '1',
        type: 'success',
      },
      {
        label: '隐藏',
        value: '0',
        type: '',
      },
    ],
  },
  {
    label: '日期',
    prop: 'addDate',
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '120' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  welcomeMsg: '',
  state: 1,
  sort: 1,
  id: '',
})
// 校验规则
export const formRule = {
  welcomeMsg: [
    {
      required: true,
      message: '请输入欢迎语文案内容',
      trigger: 'blur',
    },
  ],
  state: [
    {
      required: true,
      message: '请选择状态',
      trigger: 'change',
    },
  ],
  sort: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'blur',
    },
  ],
}
