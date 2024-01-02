export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '任务名称',
    prop: 'title',
    hideInSearch: true,
  },
  {
    label: '任务图标',
    prop: 'iconUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '时间',
    prop: 'createTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
    hideInTable: true,
  },

  {
    label: '任务类型',
    prop: 'categoryTitle',
    hideInSearch: true,
  },
  {
    label: '任务内容',
    prop: 'content',
    hideInSearch: true,
  },
  {
    label: '条件值',
    prop: 'target',
    hideInSearch: true,
  },
  {
    label: '奖励类型',
    prop: 'prizeType',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '个性商品',
        value: 1,
      },
      {
        label: '勋章',
        value: 2,
      },
      {
        label: '积分(虾米币)',
        value: 3,
      },
      {
        label: '礼包',
        value: 4,
      },
    ],
  },
  {
    label: '任务奖励',
    prop: 'prizeName',
    hideInSearch: true,
  },
  {
    label: '数量',
    prop: 'prizeNumber',
    hideInSearch: true,
  },
  {
    label: '跳转状态',
    prop: 'skipSwitch',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '开启',
        value: 0,
      },
      {
        label: '关闭',
        value: 1,
      },
    ],
  },
  {
    label: '跳转类型',
    prop: 'skipType',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '无跳转',
        value: 0,
      },
      {
        label: '任意房间',
        value: 1,
      },
      {
        label: '实名认证',
        value: 2,
      },
      {
        label: '充值界面',
        value: 3,
      },
      {
        label: '福利专区',
        value: 4,
      },
      {
        label: '个性商城',
        value: 5,
      },
    ],
  },
  // {
  //   label: '任务状态',
  //   prop: 'orderTime',
  //   hideInSearch: true,
  // },
  {
    label: '任务状态',
    // hideInTable: true,
    prop: 'hidden',
    type: 'tag',
    enum: [
      {
        label: '上架',
        value: 0,
      },
      {
        label: '下架',
        value: 1,
      },
    ],
  },
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]
export const formData = () => ({
  title: '',
  categoryId: '',
  content: '',
  target: '',
  prizeType: 1,
  prizeId: '',
  prizeNumber: '',
  hidden: 0,
  skipSwitch: 0,
  skipType: null,
  iconUrl: '',
})
export const options = [
  {
    value: 0,
    label: 'Option1',
  },
  {
    value: 1,
    label: 'Option2',
  },
  {
    value: 2,
    label: 'Option3',
  },
]

export const formRule = {
  iconUrl: [{ required: true, message: '请上传', trigger: 'blur' }],
  title: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
  categoryId: [{ required: true, message: '请选择任务类型', trigger: 'change' }],
  condition: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
  target: [{ required: true, message: '请输入条件值', trigger: 'blur' }],
  prizeType: [{ required: true, message: '奖品类型', trigger: 'change' }],
  prizeId: [{ required: true, message: '请选择奖品', trigger: 'change' }],
  prizeNumber: [{ required: true, message: '请输入', trigger: 'blur' }],
  status: [{ required: true, message: '请选择', trigger: 'change' }],
  skipSwitch: [{ required: true, message: '请选择', trigger: 'change' }],
  skipType: [{ required: true, message: '请选择跳转类型', trigger: 'change' }],
}
