// import { editStatusApi } from '@/api/activity/ears.js'

// 列表项
export const columns = [
  {
    label: '开始时段',
    prop: 'startTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '开始时段',
    prop: 'startTime',
    hideInSearch: true,
  },
  {
    label: '结束时段',
    prop: 'endTime',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '结束时段',
    prop: 'endTime',
    hideInSearch: true,
  },
  {
    label: '名称',
    prop: 'title',
  },
  {
    label: '跳转类型',
    prop: 'type',
    type: 'select',
    enum: [
      {
        label: '不跳转',
        value: 0,
      },
      {
        label: '外部链接',
        value: 1,
      },
    ],
    hideInSearch: true,
  },
  {
    label: '跳转链接',
    prop: 'linkUrl',
    hideInSearch: true,
  },
  {
    label: 'banner图片',
    prop: 'bannerUrl',
    type: 'img',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'tag',
    enum: [
      {
        value: 1,
        label: '展示',
        text: '展示',
      },
      {
        value: 0,
        label: '隐藏',
        text: '隐藏',
      },
    ],
    // api: editStatusApi,
  },
  { prop: 'action', label: '操作', fixed: 'right' },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  startTime: '',
  endTime: '',
  linkUrl: '',
  bannerUrl: '',
  title: '',
  type: 0,
  status: 0,
})
// 校验规则
export const formRule = {
  startTime: [
    {
      required: true,
      message: '请选择开始时间',
      trigger: 'change',
    },
  ],
  endTime: [
    {
      required: true,
      message: '请选择结束时间',
      trigger: 'change',
    },
  ],
  linkUrl: [
    {
      required: true,
      message: '请输入活动地址链接',
      trigger: 'blur',
    },
  ],
  title: [
    {
      required: true,
      message: '请输入标题',
      trigger: 'blur',
    },
  ],
  inputNumber: [
    {
      required: true,
      message: '请输入数字',
      trigger: 'blur',
    },
  ],
  bannerUrl: [
    {
      required: true,
      message: '请选择',
      trigger: 'blur',
    },
  ],
  type: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
}
