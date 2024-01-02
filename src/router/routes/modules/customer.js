/** 客服 */
export default [
  {
    sort: 7,
    path: '/customer',
    redirect: '/customer/platformAudit',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '客服',
      icon: 'Headset',
    },
    children: [
      {
        path: 'platformAudit',
        redirect: '/customer/platformAudit/privateChatRecord',
        alwaysShow: true,
        meta: {
          title: '平台审核',
        },
        children: [
          {
            name: 'PrivateChatRecord',
            path: 'privateChatRecord',
            component: 'customer/platformAudit/privateChatRecord/index',
            meta: {
              title: '私聊记录',
            },
          },
          {
            name: 'ChatRoomRecord',
            path: 'chatRoomRecord',
            component: 'customer/platformAudit/chatRoomRecord/index',
            meta: {
              title: '聊天室记录',
            },
          },
        ],
      },
      {
        path: 'reportManage',
        redirect: '/customer/reportManage/userReport',
        alwaysShow: true,
        meta: {
          title: '举报管理',
        },
        children: [
          {
            name: 'UserReport',
            path: 'userReport',
            component: 'customer/reportManage/userReport/index',
            meta: {
              title: '用户举报列表',
            },
          },
          {
            name: 'RoomReport',
            path: 'roomReport',
            component: 'customer/reportManage/roomReport/index',
            meta: {
              title: '房间举报列表',
            },
          },
        ],
      },
      {
        path: 'feedBack',
        name: 'FeedBack',
        meta: {
          title: '意见反馈',
        },
        component: 'customer/feedBack/index',
      },
      {
        path: 'userViolatType',
        name: 'UserViolatType',
        meta: {
          title: '用户违规类型',
        },
        component: 'customer/userViolatType/index',
      },
    ],
  },
]
