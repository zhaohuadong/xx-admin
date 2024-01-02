// import Layout from '@/layout'

export default [
  {
    path: '/operation',
    redirect: '/operation/drivingNumManagement',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '运营',
      icon: 'DataAnalysis',
    },
    children: [
      {
        path: 'drivingNumManagement',
        redirect: '/operation/drivingNumManagement/drivingNumList',
        alwaysShow: true,
        meta: {
          title: '带动账号管理',
        },
        children: [
          {
            name: 'DrivingNumList',
            path: 'drivingNumList',
            component: 'operation/drivingNumManagement/drivingNumList/index',
            meta: {
              title: '带动号列表',
            },
          },
          {
            name: 'AcceptanceNumList',
            path: 'acceptanceNumList',
            component: 'operation/drivingNumManagement/acceptanceNumList/index',
            meta: {
              title: '接收号列表',
            },
          },
          {
            name: 'DrivingNumBillLog',
            path: 'drivingNumBillLog',
            component: 'operation/drivingNumManagement/drivingNumBillLog/index',
            meta: {
              title: '带动号收支日志',
            },
          },
        ],
      },
      {
        name: 'OperationSetting',
        path: 'operationSetting',
        component: 'operation/operationSetting/index',
        meta: {
          title: '运营配置',
        },
      },
      {
        path: 'channelManagement',
        name: 'ChannelManagement',
        // component: 'finance/payRecord/index',
        meta: {
          title: '渠道管理',
        },
        children: [
          {
            name: 'ChannelPromotionSetting',
            path: 'channelPromotionSetting',
            component: 'operation/channelManagement/channelPromotionSetting/index',
            meta: {
              title: '渠道推广配置',
            },
          },
        ],
      },
    ],
  },
]
