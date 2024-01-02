// 靓号使用记录 搜索formTag
export const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '靓号编号',
    prop: 'number',
  },
  {
    label: '用户原编号',
    prop: 'userCode',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
  },
  // {
  //   label: '靓号价格',
  //   prop: 'price',
  //   hideInTable: true,
  // },
  {
    label: '靓号类别',
    prop: 'categoryName',
    hideInSearch: true,
  },
  {
    label: '靓号类别',
    type: 'select',
    prop: 'categoryId',
    enum: [
      {
        label: 'S',
        value: '0',
      },
      {
        label: 'SS',
        value: '1',
      },
      {
        label: 'SSS',
        value: '2',
      },
    ],
    hideInTable: true,
  },
  {
    label: '使用时间',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'useDate',
  },
  {
    label: '使用时间',
    prop: 'useDate',
    hideInSearch: true,
  },
  {
    label: '到期时间',
    type: 'datetimerange',
    dateType: 'datetimerange',
    prop: 'expireDate',
  },
  {
    label: '到期时间',
    prop: 'expireDate',
    hideInSearch: true,
  },
]

// 靓号使用记录 搜索form表单
export const tabelForm = () => ({
  goodNumber: '',
  numberCategory: '',
  nickname: '',
  time: '0',
  dataTime: '',
  pageNum: 1,
  pageSize: 10,
})
