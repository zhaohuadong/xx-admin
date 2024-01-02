import { editApi } from '@/api/user/chatRedBag.js'
// 列表项
export const columns = [
  {
    label: '序号',
    prop: 'id',
    width: '150',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'userCode',
    width: 'auto',
  },
  {
    label: '用户昵称',
    prop: 'nickname',
    hideInSearch: true,
    width: 'auto',
  },
  {
    label: '发送金额',
    prop: 'total',
    hideInSearch: true,
    width: 'auto',
  },
  {
    label: '添加人',
    prop: 'creator',
    hideInSearch: true,
    width: 'auto',
  },
  {
    label: '状态',
    prop: 'disabled',
    type: 'switch',
    hideInSearch: true,
    width: 'auto',
    enum: [
      {
        value: '0',
        label: '禁用',
      },
      {
        value: '1',
        label: '启用',
      },
    ],
    api: editApi,
  },
  {
    label: '添加时间',
    prop: 'addDate',
    type: 'datetimerange',
    dateType: 'datetimerange',
  },
  {
    label: '添加时间',
    prop: 'addDate',
    hideInSearch: true,
  },
]
// 新增或编辑相关
// 表单值
export const formData = () => ({
  userCodes: '',
  disabled: 0,
})
// 校验规则
export const formRule = {
  input: [
    {
      required: true,
      message: '请输入用户编号',
      trigger: 'blur',
    },
  ],
  disabled: [
    {
      required: true,
      message: '请选择',
      trigger: 'change',
    },
  ],
}
