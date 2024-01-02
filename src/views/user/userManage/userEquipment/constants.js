// 列表
export const columns = [
  {
    label: '用户编号',
    prop: 'userCode',
    width: '150',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    width: '150',
  },
  {
    label: '系统',
    prop: 'system',
    hideInSearch: true,
    width: '150',
    type: 'tag',
    enum: [
      {
        label: 'Android',
        value: 1,
        type: 'success',
      },
      {
        label: 'IOS',
        value: 2,
        type: 'warning',
      },
    ],
  },
  {
    label: '设备编号',
    prop: 'machineCode',
    width: 'auto',
  },
  {
    label: '设备名称',
    prop: 'machineName',
    width: 'auto',
    hideInSearch: true,
  },
  {
    label: 'ip',
    prop: 'ip',
    width: 'auto',
  },
  {
    label: '上线时间',
    prop: 'loginDate',
    width: 'auto',
    hideInSearch: true,
  },
  {
    label: '设备状态',
    prop: 'frozen',
    width: 'auto',
    type: 'tag',
    enum: [
      {
        value: false,
        label: '正常',
        type: 'success',
      },
      {
        value: true,
        label: '封禁',
        type: 'warning',
      },
    ],
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '95' },
]
// 封禁、解封设备
export const formData = () => ({
  frozenType: '',
  reason: '',
  banReason: '',
})

export const formRule = {
  banReason: [{ required: true, message: '请输入封禁理由', trigger: 'blur' }],
  reason: [{ required: true, message: '请输入解封理由', trigger: 'blur' }],
}
