import { editStatusApi } from '@/api/app/version.js'

export const columns = [
  { type: 'selection' },
  {
    label: '版本号',
    prop: 'version',
    hideInSearch: true,
  },
  {
    label: '应用名称',
    prop: 'appCode',
    hideInSearch: true,
    type: 'select',
    enum: [
      {
        label: '闲闲',
        value: 1,
      },
    ],
  },
  {
    label: '配置值',
    prop: 'settingContent',
    hideInSearch: true,
  },
  {
    label: '操作时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    type: 'switch',
    enum: [
      {
        value: '1',
        label: '开启',
      },
      {
        value: '2',
        label: '关闭',
      },
    ],
    api: editStatusApi,
    activeValue: '0',
    hideInSearch: true,
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  appType: 1,
  version: '',
  appCode: 1,
  settingContent: { '': '' },
  status: '1',
  settingValue: [{ key: '', value: '' }],
})

export const formRule = {
  appType: [{ required: true, message: '请选择发版类型', trigger: 'change' }],
  app: [
    {
      required: true,
      message: '请选择应用',
      trigger: 'change',
    },
  ],
  status: [
    {
      required: true,
      message: '请选择启用状态',
      trigger: 'change',
    },
  ],
}
