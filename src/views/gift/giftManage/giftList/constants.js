import { getCategoryListApi } from '@/api/gift/giftList.js'
export const columns = [
  // { type: 'selection' },
  {
    label: '序号',
    prop: 'giftId',
    hideInSearch: true,
  },
  {
    label: '礼物名称',
    prop: 'giftName',
  },
  {
    label: '图片',
    prop: 'url',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '效果',
    prop: 'url2',
    // type: 'img',
    hideInSearch: true,
  },
  {
    label: '价格',
    prop: 'price',
    hideInSearch: true,
  },
  {
    label: '心动值',
    prop: 'charmNum',
    hideInSearch: true,
  },
  {
    label: '礼物墙类别',
    prop: 'wallConfigId',
    type: 'select',
    enum: async () => {
      // 组装select下拉列表数据
      const data = await getCategoryListApi()
      return data.data.wallConfigList.map((item) => ({
        label: item.name,
        value: item.id,
      }))
    },
    hideInTable: true,
  },
  {
    label: '礼物墙类别',
    prop: 'wallName',
    hideInSearch: true,
  },
  {
    label: '礼物类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '礼物类别',
    prop: 'categoryId',
    type: 'select',
    enum: async () => {
      // 组装select下拉列表数据
      const data = await getCategoryListApi()
      return data.data.categoryList.map((item) => ({
        label: item.name,
        value: item.id,
      }))
    },
    hideInTable: true,
  },
  {
    label: '礼物分类',
    prop: 'giftTag',
    type: 'select',
    enum: async () => {
      // 组装select下拉列表数据
      const data = await getCategoryListApi()
      return data.data.tabConfigList.map((item) => ({
        label: item.name,
        value: item.id,
      }))
    },
    hideInTable: true,
  },
  {
    label: '礼物分类',
    prop: 'giftTabName',
    hideInSearch: true,
  },
  {
    label: '等级要求',
    prop: 'nobleVip',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'select',
    enum: [
      {
        label: '下架',
        value: 1,
      },
      {
        label: '上架',
        value: 2,
      },
    ],
    hideInTable: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        label: '上架',
        value: 2,
        type: 'success',
      },
      {
        label: '下架',
        value: 1,
        type: 'danger',
      },
    ],
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'orderBy',
    hideInSearch: true,
  },

  { prop: 'action', label: '操作', fixed: 'right', width: 151 },
]

export const addAndEditFormData = () => ({
  giftName: '', // 礼物名称
  categoryId: '', // 所属类别
  wallConfigId: '', // 礼物墙分类
  giftTag: '', // 礼物分类
  url: '', // 礼物图片
  url2: '', // 礼物效果图
  orderBy: 0, // 排序
  price: 0, // 礼物价格
  charmNum: 0, // 礼物心动值
  giftId: '', // 礼物id
  nobleVip: '', // 礼物等级要求
})

export const addAndEditFormRule = {
  giftName: [
    {
      required: true,
      message: '礼物名称不能为空',
      trigger: 'blur',
    },
  ],
  categoryId: [
    {
      required: true,
      message: '请选择所属类别',
      trigger: 'change',
    },
  ],
  wallConfigId: [
    {
      required: true,
      message: '礼物墙分类',
      trigger: 'change',
    },
  ],
  giftTag: [
    {
      required: true,
      message: '礼物分类',
      trigger: 'change',
    },
  ],
  url: [
    {
      required: true,
      message: '礼物图片不能为空',
      trigger: 'change',
    },
  ],
  url2: [
    {
      required: true,
      message: '礼物效果图不能为空',
      trigger: 'change',
    },
  ],
  orderBy: [
    {
      required: true,
      message: '请输入排序',
      trigger: 'blur',
    },
  ],
  price: [
    {
      required: true,
      message: '请输入价格',
      trigger: 'blur',
    },
  ],
  charmNum: [
    {
      required: true,
      message: '请输入心动值',
      trigger: 'change',
    },
  ],
  nobleVip: [
    {
      required: true,
      message: '请输入礼物等级',
      trigger: 'blur',
    },
  ],
}
