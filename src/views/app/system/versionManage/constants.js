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
    label: '更新方式',
    prop: 'updateType',
    hideInSearch: true,
  },
  {
    label: '更新文案',
    prop: 'updateContent',
    hideInSearch: true,
  },
  {
    label: '上线时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  // {
  //   label: '排序',
  //   prop: 'sort',
  //   hideInSearch: true,
  // },
  { prop: 'action', label: '操作', fixed: 'right', width: 105 },
]

export const formData = () => ({
  /**
   * app类型 1 安卓  2 ios
   */
  appType: '1',
  /**
   * 安装方式 1 上传安装包 2填写下载链接 3iOS安装地
   */
  installType: '3',
  /**
   * 安装包位置或下载地址
   */
  installUrl: '',
  /**
   * 弹窗方式 1 每次启动应用弹窗  2每天仅第一次启动弹出一次  3每周仅第一次启动弹出一次  4本次更新仅第一次启动弹出一次
   */
  popType: '1',
  /**
   * 版本状态 1 启用  2 禁用
   */
  status: '1',
  /**
   * 更新文案
   */
  updateContent: '',
  /**
   * 更新方式 1 强制更新  2自主更新
   */
  updateType: '1',
  /**
   * 版本号
   */
  version: '',
  appCode: 1, // 应用
})

export const formRule = {
  appType: [{ required: true, message: '请选择发版类型', trigger: 'change' }],
  version: [{ required: true, message: '请输入版本号', trigger: 'blur' }],
  updateContent: [{ required: true, message: '请输入更新文案', trigger: 'blur' }],
  installType: [{ required: true, message: '请选择安装包方式', trigger: 'change' }],
  installUrl: [{ required: true, message: '请输入安装地址', trigger: 'blur' }],
  updateType: [{ required: true, message: '请选择更新方式', trigger: 'change' }],
  popType: [{ required: true, message: '请选择弹出方式', trigger: 'change' }],
  status: [{ required: true, message: '请选择版本状态', trigger: 'change' }],
}
