export default [
  {
    sort: 5,
    path: '/expense',
    redirect: '/expense/shop',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '消费',
      icon: 'Coin',
    },
    children: [
      {
        path: 'shop',
        redirect: '/expense/shop/shopCategory',
        alwaysShow: true,
        meta: {
          title: '个性商城',
        },
        children: [
          {
            name: 'ShopCategory',
            path: 'shopCategory',
            component: 'expense/shop/shopCategory/index',
            meta: {
              title: '商品类别管理',
            },
          },
          {
            name: 'SkuControl',
            path: 'skuControl',
            component: 'expense/shop/skuControl/index',
            meta: {
              title: '商城单品管理',
              noCache: true,
            },
          },
          {
            name: 'ShopRecord',
            path: 'shopRecord',
            component: 'expense/shop/shopRecord/index',
            meta: {
              title: '商品购买记录',
              noCache: true,
            },
          },
        ],
      },
      {
        path: 'goodNumber',
        redirect: '/expense/goodNumber/accountList',
        alwaysShow: true,
        meta: {
          title: '靓号管理',
        },
        children: [
          {
            name: 'numberList',
            path: 'numberList',
            component: 'expense/goodNumber/numberList/index',
            meta: {
              title: '靓号列表',
              noCache: true,
            },
          },
          {
            name: 'NumberCategory',
            path: 'numberCategory',
            component: 'expense/goodNumber/numberCategory/index',
            meta: {
              title: '靓号类别管理',
            },
          },
          {
            name: 'usageRecord',
            path: 'usageRecord',
            component: 'expense/goodNumber/usageRecord/index',
            meta: {
              title: '靓号使用记录',
              noCache: true,
            },
          },
        ],
      },
      {
        path: 'nobility',
        redirect: '/expense/nobility/peerageGradeManagement',
        alwaysShow: true,
        meta: {
          title: '爵位管理',
        },
        children: [
          {
            name: 'NobilityLevel',
            path: 'nobilityLevel',
            component: 'expense/nobility/nobilityLevel/index',
            meta: {
              title: '爵位等级管理',
            },
          },
          {
            name: 'Authority',
            path: 'authority',
            component: 'expense/nobility/authority/index',
            meta: {
              title: '爵位权限',
            },
          },
        ],
      },
      {
        path: 'level',
        redirect: '/expense/level/wealthGrade',
        alwaysShow: true,
        meta: {
          title: '等级管理',
        },
        children: [
          {
            name: 'WealthLevel',
            path: 'wealthLevel',
            component: 'expense/level/wealthLevel/index',
            meta: {
              title: '财富等级管理',
            },
          },
          {
            name: 'CharmLevel',
            path: 'charmLevel',
            component: 'expense/level/charmLevel/index',
            meta: {
              title: '魅力等级管理',
            },
          },
        ],
      },
    ],
  },
]
