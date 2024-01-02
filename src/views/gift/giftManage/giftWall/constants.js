// 常用语列表
export const columns = [
  // { type: 'selection' },
  {
    label: '序号',
    prop: 'wallId',
    hideInSearch: true,
  },
  {
    label: '礼物墙类别名称',
    prop: 'wallName',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '礼物墙类别名称',
    prop: 'wallName',
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const AddAndEditformData = () => ({
  wallName: '',
  wallId: '',
})

export const formRule = {
  wallName: [{ required: true, message: '请输入礼物墙类别名称', trigger: 'blur' }],
}
