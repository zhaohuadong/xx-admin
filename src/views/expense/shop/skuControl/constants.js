// 商城单品管理 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '商品名称',
    prop: 'commodityName',
  },
  {
    label: '类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '类别',
    prop: 'categoryId',
    hideInTable: true,
    type: 'select',
    enum: [
      {
        label: '头像框',
        value: 1,
      },
      {
        label: '座驾',
        value: 2,
      },
      {
        label: '聊天室气泡',
        value: 3,
      },
      {
        label: '麦位光波',
        value: 4,
      },
      {
        label: '昵称特效',
        value: 5,
      },
      {
        label: '昵称挂件',
        value: 6,
      },
      {
        label: '入场特效',
        value: 7,
      },
    ],
  },
  {
    label: '价格',
    prop: 'price',
  },
  {
    label: '图片',
    prop: 'previewUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '效果展示',
    prop: 'dynamicUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'commodityState',
    // scopedSlots: 'status',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '上架',
        value: 1,
        type: 'success',
      },
      {
        label: '下架',
        value: 0,
        type: '',
      },
    ],
  },
  {
    label: '排序',
    prop: 'sortNum',
    hideInSearch: true,
  },
  {
    label: '出售状态',
    prop: 'commodityState',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '上架',
        value: 1,
      },
      {
        label: '下架',
        value: 0,
      },
    ],
  },
  // {
  //   label: '商城类型',
  //   prop: 'shopType',
  //   type: 'select',
  //   hideInTable: true,
  //   enum: [
  //     {
  //       label: '个性商城',
  //       value: '0',
  //     },
  //     {
  //       label: '贵族商城',
  //       value: '1',
  //     },
  //   ],
  // },
  {
    label: '添加日期',
    dateType: 'datetimerange',
    type: 'datetimerange',
    prop: 'addDate',
  },
  {
    label: '添加日期',
    prop: 'addDate',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '150' },
]

// 贵族商城列表
export const columns1 = [
  { type: 'selection' },
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '商品名称',
    prop: 'commodityName',
  },
  {
    label: '类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '类别',
    prop: 'categoryId',
    hideInTable: true,
    type: 'select',
    enum: [
      {
        label: '头像框',
        value: 1,
      },
      {
        label: '座驾',
        value: 2,
      },
      {
        label: '聊天室气泡',
        value: 3,
      },
      {
        label: '麦位光波',
        value: 4,
      },
      {
        label: '昵称特效',
        value: 5,
      },
      {
        label: '昵称挂件',
        value: 6,
      },
      {
        label: '入场特效',
        value: 7,
      },
    ],
  },
  {
    label: '价格',
    prop: 'price',
  },
  {
    label: '图片',
    prop: 'previewUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '效果展示',
    prop: 'dynamicUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '爵位等级',
    prop: 'knighthoodLevel',
    type: 'select',
    enum: [
      {
        label: '等级一',
        value: 1,
      },
      {
        label: '等级二',
        value: 2,
      },
      {
        label: '等级三',
        value: 3,
      },
    ],
  },
  {
    label: '状态',
    prop: 'commodityState',
    // scopedSlots: 'status',
    hideInSearch: true,
    type: 'tag',
    enum: [
      {
        label: '上架',
        value: 1,
      },
      {
        label: '下架',
        value: 0,
      },
    ],
  },
  {
    label: '排序',
    prop: 'sortNum',
    hideInSearch: true,
  },
  {
    label: '出售状态',
    prop: 'commodityState',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '上架',
        value: 1,
      },
      {
        label: '下架',
        value: 0,
      },
    ],
  },
  // {
  //   label: '商城类型',
  //   prop: 'shopType',
  //   type: 'select',
  //   hideInTable: true,
  //   enum: [
  //     {
  //       label: '个性商城',
  //       value: '0',
  //     },
  //     {
  //       label: '贵族商城',
  //       value: '1',
  //     },
  //   ],
  // },
  {
    label: '添加日期',
    dateType: 'datetimerange',
    type: 'datetimerange',
    prop: 'addDate',
  },
  {
    label: '添加日期',
    prop: 'addDate',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: '150' },
]
// 商城单品管理 弹窗选择框
export const formSelect = () => [
  {
    label: '头像框',
    value: '1',
  },
  {
    label: '坐骑',
    value: '2',
  },
  {
    label: '聊天室气泡',
    value: '3',
  },
  {
    label: '麦位光波',
    value: '4',
  },
  {
    label: '昵称特效',
    value: '5',
  },
  {
    label: '昵称挂件',
    value: '6',
  },
  {
    label: '入场特效',
    value: '7',
  },
]

// 商城单品管理 弹窗form表单
export const formData = () => ({
  categoryId: '',

  commodityName: '',
  skuList: [{ days: null, price: null, discountPrice: null }],
  position: 1,
  commodityState: 0,
  sortNum: null,
  previewUrl: '',
  dynamicUrl: '',
  fontColor: '',
})
// 商城单品管理 赠送弹窗form表单
export const giveData = () => ({
  name: '',
  img: '',
  pic: '',
  userCode: '',
  days: null,
  isForever: 0,
})
// 贵族商城赠送 form表单
export const giveNobleData = () => ({
  name: '',
  img: '',
  pic: '',
  userCode: '',
  days: null,
  isForever: 0,
})

// 爵位等级列表
export const rankSelect = {
  knightList: [],
}

// 贵族商城弹窗
export const formNobleData = () => ({
  categoryId: '',

  commodityName: '',
  skuList: [{ days: null, price: null, discountPrice: null }],
  position: 1,
  commodityState: 0,
  sortNum: null,
  previewUrl: '',
  dynamicUrl: '',
  knighthoodLevel: '',
  fontColor: '',
})

export const giveRule = {
  userCode: [{ required: true, message: '请输入用户id', trigger: 'blur' }],
  days: [{ required: true, message: '请输入使用天数', trigger: 'blur' }],
}
// 商城单品管理 表单校验规则
export const formRule = {
  categoryId: [{ required: true, message: '请选择类别', trigger: 'blur' }],
  commodityName: [{ required: true, message: '请输入商品名称', trigger: 'blur' }],
  price: [{ required: true, message: '请输入', trigger: 'blur' }],
  position: [{ required: true, message: '请选择', trigger: 'change' }],
  previewUrl: [{ required: true, message: '图片不能为空', trigger: 'change' }],
  dynamicUrl: [{ required: true, message: '效果图不能为空', trigger: 'change' }],
  knighthoodLevel: [{ required: true, message: '请选择类别', trigger: 'blur' }],
  fontColor: [{ required: true, message: '请输入字体颜色', trigger: 'blur' }],
}
