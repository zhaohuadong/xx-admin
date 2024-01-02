// 列表
export const columns = [
  // { type: 'selection' },
  {
    label: '菜单编号',
    prop: 'menuId',
    hideInSearch: true,
  },
  {
    label: '菜单名称',
    prop: 'menuName',
  },
  {
    label: '路由',
    prop: 'path',
    hideInSearch: true,
  },
  {
    label: '权限名称',
    prop: 'perms',
    hideInSearch: true,
  },
  {
    label: '排序',
    prop: 'orderNum',
    hideInSearch: true,
  },
  {
    label: '添加时间',
    prop: 'createTime',
    hideInSearch: true,
  },
  {
    label: '状态',
    prop: 'status',
    hideInSearch: true,
    type: 'select',
    enum: [
      { value: 0, label: '正常' },
      { value: 1, label: '停用' },
    ],
  },
  { prop: 'action', label: '操作', fixed: 'right', width: 151 },
]

// 编辑
export const formData = () => ({
  parentId: '',
  menuName: '',
  menuType: 'M',
  orderNum: '',
  isCache: '1',
  perms: '',
  path: '',
})
