import { editStatusApi } from '@/api/app/slideshow.js'

export const columns = [
  { type: 'selection' },
  {
    label: '名称',
    prop: 'name',
  },
  {
    label: 'banner图片',
    prop: 'imgUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '跳转类型',
    prop: 'linkType',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        value: 0,
        label: '无跳转',
      },
      {
        value: 1,
        label: '外部链接',
      },
      {
        value: 2,
        label: '页面跳转',
      },
      {
        value: 3,
        label: '指定房间',
      },
    ],
  },
  {
    label: '跳转链接',
    prop: 'linkTarget',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'sort',
    hideInSearch: true,
  },
  {
    label: '开始时间',
    prop: 'validDate',
    hideInSearch: true,
  },
  {
    label: '结束时间',
    prop: 'expireDate',
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
  {
    label: '状态',
    prop: 'status',
    type: 'select',
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
    hideInTable: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const sendformData = () => ({
  id: '',
  type: 0,
  name: '',
  imgUrl: '',
  fileUrl: '',
  linkType: 0,
  linkTarget: '',
  sort: 0,
  sendType: 0,
  date: [],
  expireDate: '',
  validDate: '',
  crIds: '',
})

export const formRule = {
  name: [{ required: true, message: '请输入轮播图名称', trigger: 'blur' }],
  imgUrl: [
    {
      required: true,
      message: '请上传轮播图图片',
    },
  ],
  fileUrl: [
    {
      required: true,
      message: '请上传文件',
    },
  ],
  linkType: [
    {
      required: true,
      message: '请选择跳转类型',
      trigger: 'change',
    },
  ],
  linkTarget: [
    {
      required: true,
      message: '请输入链接地址',
      trigger: 'change',
    },
  ],
  sort: [
    {
      required: true,
      message: '请选择输入排序',
      trigger: 'blur',
    },
  ],
  crIds: [
    {
      required: true,
      message: '请输入跳转房间',
      trigger: 'blur',
    },
  ],
  sendType: [
    {
      required: true,
      message: '请选择发送类型',
      trigger: 'change',
    },
  ],
  date: [
    {
      required: true,
      message: '请选择时间',
      trigger: 'change',
    },
  ],
}
