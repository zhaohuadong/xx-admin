// 魅力等级管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '等级名称',
    prop: 'charmName',
  },
  {
    label: '等级',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '所需魅力值',
    prop: 'consumeMoney',
    hideInSearch: true,
  },
  {
    label: '小图标',
    prop: 'charmTxtIconUrl',
    hideInSearch: true,
  },
  {
    label: '大图标',
    prop: 'charmIconUrl',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '105' },
]

// 魅力等级管理 弹窗form表单
export const formData = () => ({
  id: 0,
  charmName: '',
  consumeMoney: 0,
  charmTxtIconUrl: '',
  charmIconUrl: '',
})

// 魅力等级管理 表单校验规则
export const formRule = {
  id: [{ required: true, message: '请填写等级', trigger: 'blur' }],
  charmName: [{ required: true, message: '请填写等级名称', trigger: 'blur' }],
  consumeMoney: [{ required: true, message: '请填写所需财富值', trigger: 'blur' }],
}
