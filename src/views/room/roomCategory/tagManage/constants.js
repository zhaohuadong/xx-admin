// 标签管理列表
export const columns = [
  {
    label: '序号',
    prop: 'roomTagId',
    hideInSearch: true,
  },
  {
    label: '标签名称',
    prop: 'roomTag',
  },
  {
    label: '标签图片',
    prop: 'roomTagUrl',
    type: 'img',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const addAndEditformData = () => ({
  roomTag: '',
  roomTagUrl: '',
})

export const formRule = {
  roomTag: [{ required: true, message: '请输入标签名称', trigger: 'blur' }],
  roomTagUrl: [
    {
      required: true,
      message: '请上传标签图片',
      trigger: 'change',
    },
  ],
}
