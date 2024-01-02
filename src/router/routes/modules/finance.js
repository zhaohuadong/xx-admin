export default [
  {
    sort: 9,
    path: '/finance',
    redirect: '/finance/order',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '财务',
      icon: 'Money',
    },
    children: [
      {
        path: 'order',
        redirect: '/finance/order/pay',
        alwaysShow: true,
        meta: {
          title: '订单管理',
        },
        children: [
          {
            name: 'Pay',
            path: 'pay',
            component: 'finance/order/pay/index',
            meta: {
              title: '充值订单',
            },
          },
          {
            name: 'Withdraw',
            path: 'withdraw',
            component: 'finance/order/withdraw/index',
            meta: {
              title: '提现订单',
            },
          },
          {
            name: 'OfficialCode',
            path: 'officialCode',
            component: 'finance/order/officialCode/index',
            meta: {
              title: '官方账号',
            },
          },
        ],
      },
      {
        path: 'giveRecord',
        name: 'GiveRecord',
        component: 'finance/giveRecord/index',
        meta: {
          title: '管理员送礼记录',
        },
      },
      {
        path: 'payRecord',
        name: 'PayRecord',
        component: 'finance/payRecord/index',
        meta: {
          title: '管理员充值记录',
        },
      },
    ],
  },
]
