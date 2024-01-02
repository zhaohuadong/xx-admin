// import Layout from '@/layout'

export default [
  {
    sort: 1,
    path: '/system',
    redirect: '/system/operation',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '系统',
      icon: 'Tools',
    },
    children: [
      {
        name: 'Operation',
        path: 'operation',
        component: 'system/operation/index',
        meta: {
          title: '操作日志',
        },
      },
      {
        name: 'Department',
        path: 'department',
        component: 'system/department/index',
        meta: {
          title: '员工部门',
        },
      },
      {
        name: 'Role',
        path: 'role',
        component: 'system/role/index',
        meta: {
          title: '角色管理',
        },
      },
      {
        name: 'Menu',
        path: 'menu',
        component: 'system/menu/index',
        meta: {
          title: '菜单管理',
        },
      },
    ],
  },
]
