export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'medalId',
    hideInSearch: true,
  },
  {
    label: '名称',
    prop: 'medalName',
  },
  {
    label: '图片',
    prop: 'iconUrl',
    type: 'img',
    hideInSearch: true,
  },
  // {
  //   label: '状态',
  //   prop: 'delFlag',
  //   type: 'select',
  //   enum: [
  //     {
  //       label: '显示',
  //       value: 1,
  //     },
  //     {
  //       label: '隐藏',
  //       value: 0,
  //     },
  //   ],
  //   hideInTable: true,
  // },
  // {
  //   label: '状态',
  //   prop: 'delFlag',
  //   hideInSearch: true,
  // },
  {
    label: '排序',
    prop: 'sortNum',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '160' },
]

export const addAndEditFormData = () => ({
  medalId: '',
  medalName: '',
  iconUrl: '',
  sortNum: '',
  delFlag: 1,
})

export const addAndEditFormRule = {
  medalName: [
    {
      required: true,
      message: '请输入名称',
      trigger: 'blur',
    },
    { min: 1, max: 30, message: '长度在 1 到 30 个字符', trigger: 'blur' },
  ],
  iconUrl: [
    {
      required: true,
      message: '图片不能为空',
      trigger: 'change',
    },
  ],
  sortNum: [
    {
      required: true,
      message: '请输入排序数字',
      trigger: 'blur',
    },
    { pattern: /^[1-9]\d*$/, message: '排序必须是0以上的正整数', trigger: 'blur' },
  ],
  delFlag: [
    {
      required: true,
      message: '请输入选择状态',
      trigger: 'blur',
    },
  ],
}

export const formRule = {
  userType: [
    {
      required: true,
      message: '请选择用户类型',
      trigger: 'change',
    },
  ],
  userNo: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
}

export const giveFormData = () => ({
  userCode: '',
  medalName: '',
  medalId: '',
  iconUrl: '',
})

export const giveFormRule = {
  userCode: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
}
