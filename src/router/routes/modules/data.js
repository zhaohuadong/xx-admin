export default [
  {
    path: '/data',
    redirect: '/data/week',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '数据',
      icon: 'DataLine',
    },
    children: [
      {
        path: 'monthlyFocus',
        redirect: '/data/monthlyFocus/week',
        alwaysShow: true,
        meta: {
          title: '榜单管理',
        },
        children: [
          {
            name: 'Week',
            path: 'week',
            component: 'data/monthlyFocus/week/index',
            meta: {
              title: '周星礼物管理',
            },
          },
          {
            name: 'HistoryWeek',
            path: 'historyWeek',
            component: 'data/monthlyFocus/historyWeek/index',
            meta: {
              title: '历届周星管理',
            },
          },
          {
            name: 'UserListDetails',
            path: 'details',
            component: 'data/monthlyFocus/historyWeek/details',
            meta: {
              title: '用户排名详情',
              activeMenu: '/data/monthlyFocus/historyWeek',
            },
            hidden: true,
          },
        ],
      },
      {
        path: 'dataBoard',
        redirect: '/data/dataBoard/dataRetention',
        alwaysShow: true,
        meta: {
          title: '数据看板',
        },
        children: [
          {
            name: 'DataRetention',
            path: 'dataRetention',
            component: 'data/dataBoard/dataRetention/index',
            meta: {
              title: '数据留存',
            },
          },
          {
            name: 'GameData',
            path: 'gameData',
            component: 'data/dataBoard/gameData/index',
            meta: {
              title: '游戏数据',
            },
          },
          {
            name: 'StoreData',
            path: 'storeData',
            component: 'data/dataBoard/storeData/index',
            meta: {
              title: '商城数据',
            },
          },
          {
            name: 'FlowStatistics',
            path: 'flowStatistics',
            component: 'data/dataBoard/flowStatistics/index',
            meta: {
              title: '流水统计',
            },
          },
          {
            name: 'FinanceStatistics',
            path: 'financeStatistics',
            component: 'data/dataBoard/financeStatistics/index',
            meta: {
              title: '财务统计',
            },
          },
        ],
      },
    ],
  },
]
