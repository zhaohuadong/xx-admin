import { editStatusApi } from '@/api/app/openPage.js'

export const columns = [
  { type: 'selection' },
  {
    label: 'id',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '名称',
    prop: 'pageName',
    hideInSearch: true,
  },
  {
    label: '图片',
    prop: 'imgUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '展示时间',
    prop: 'validDate',
    hideInSearch: true,
  },
  {
    label: '跳转链接',
    prop: 'addressUrl',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'switch',
    enum: [
      {
        value: '0',
        label: '开启',
      },
      {
        value: '1',
        label: '关闭',
      },
    ],
    api: editStatusApi,
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  id: '',
  pageName: '',
  imgUrl: '',
  date: [],
  addressUrl: '',
})

export const formRule = {
  pageName: [{ required: true, message: '请输入开屏页名称', trigger: 'blur' }],
  imgUrl: [
    {
      required: true,
      message: '图片不能为空',
      trigger: 'change',
    },
  ],
  date: [
    {
      required: true,
      message: '请选择日期',
      trigger: 'change',
    },
  ],
  addressUrl: [
    {
      required: true,
      message: '请输入跳转链接',
      trigger: 'change',
    },
  ],
}
