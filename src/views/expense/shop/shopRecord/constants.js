// 商品购买记录 搜索formTag
export const columns = [
  { type: 'selection' },
  {
    label: '商品编号',
    prop: 'commodityId',
  },
  {
    label: '购买人编号',
    prop: 'buyUserCode',
  },
  {
    label: '拥有人编号',
    prop: 'holdUserCode',
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
      // {
      //   label: '头像框',
      //   value: '1',
      // },
      // {
      //   label: '座驾',
      //   value: '2',
      // },
      // {
      //   label: '入场特效',
      //   value: '3',
      // },
      // {
      //   label: '昵称挂件',
      //   value: '4',
      // },
    ],
  },
  {
    label: '商品图片',
    prop: 'previewUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '购买天数',
    prop: 'day',
  },
  {
    label: '购买价格',
    prop: 'price',
  },
  {
    label: '续费次数',
    prop: 'buyNum',
  },
  {
    label: '购买日期',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'addDate',
  },
  {
    label: '购买日期',
    prop: 'addDate',
    hideInSearch: true,
  },
  {
    label: '开始使用时间',
    prop: 'useDate',
    hideInSearch: true,
  },
  {
    label: '过期时间',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'expireDate',
  },
  {
    label: '过期时间',
    prop: 'expireDate',
    hideInSearch: true,
  },
  {
    label: '使用状态',
    prop: 'state',
    type: 'select',
    enum: [
      {
        label: '已使用',
        value: 1,
      },
      {
        label: '已过期',
        value: 2,
      },
    ],
  },
  {
    label: '是否免费',
    prop: 'isFree',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '是',
        value: 2,
      },
      {
        label: '否',
        value: 1,
      },
    ],
  },
  {
    label: '是否永久',
    prop: 'isForever',
    type: 'select',
    hideInTable: true,
    enum: [
      {
        label: '是',
        value: 1,
      },
      {
        label: '否',
        value: 0,
      },
    ],
  },
]
