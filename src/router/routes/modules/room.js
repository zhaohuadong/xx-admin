/**
 * 房间
 */
export default [
  {
    sort: 2,
    path: '/room',
    redirect: '/room/manage',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '房间',
      icon: 'HomeFilled',
    },
    children: [
      {
        path: 'manage',
        redirect: '/room/manage/roomList',
        alwaysShow: true,
        meta: {
          title: '房间管理',
        },
        children: [
          {
            name: 'RoomList',
            path: 'roomList',
            component: 'room/manage/roomList/index',
            meta: {
              title: '房间列表',
              noCache: true,
            },
          },
          {
            name: 'RoomInfo',
            path: 'roomInfo',
            component: 'room/manage/roomList/roomInfo',
            meta: {
              title: '房间详情',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'RoomEdit',
            path: 'roomEdit',
            component: 'room/manage/roomList/roomEdit',
            meta: {
              title: '编辑房间',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'RoomFlow',
            path: 'roomFlow',
            component: 'room/manage/roomList/roomFlow',
            meta: {
              title: '房间流水',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'AllRoomFlow',
            path: 'allRoomFlow',
            component: 'room/manage/allRoomFlow/index',
            meta: {
              title: '所有房间流水',
            },
          },
          {
            name: 'AllRoomFlowInfo',
            path: 'allRoomFlowInfo',
            component: 'room/manage/allRoomFlow/allRoomFlowInfo',
            meta: {
              title: '房间流水详情',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'RoomTheme',
            path: 'roomTheme',
            component: 'room/manage/roomTheme/index',
            meta: {
              title: '房间主题列表',
            },
          },
          {
            name: 'RoomPendant',
            path: 'roomPendant',
            component: 'room/manage/roomPendant/index',
            meta: {
              title: '房间挂件',
            },
          },
          {
            name: 'RoomRecommend',
            path: 'roomRecommend',
            component: 'room/manage/roomRecommend/index',
            meta: {
              title: '推荐房间列表',
            },
          },
        ],
      },
      {
        path: 'record',
        redirect: 'room/record/roomInterdiction',
        alwaysShow: true,
        meta: {
          title: '房间记录',
        },
        children: [
          {
            name: 'roomInterdiction',
            path: 'roomInterdiction',
            component: 'room/record/roomInterdiction/index',
            meta: {
              title: '房间封禁记录',
            },
          },
          {
            name: 'RoomLock',
            path: 'roomLock',
            component: 'room/record/roomLock/index',
            meta: {
              title: '锁房记录',
            },
          },
          {
            name: 'RoomLockStatistic',
            path: 'roomLockStatistic',
            component: 'room/record/roomLockStatistic/index',
            meta: {
              title: '锁房时间统计',
            },
          },
          {
            name: 'RoomLockStatisticInfo',
            path: 'roomLockStatisticInfo',
            component: 'room/record/roomLockStatistic/roomLockStatisticInfo',
            meta: {
              title: '锁房时间统计详情',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'RoomEditRecord',
            path: 'roomEditRecord',
            component: 'room/record/roomEditRecord/index',
            meta: {
              title: '房间修改记录',
            },
          },
          {
            name: 'RoomKickRecord',
            path: 'roomKickRecord',
            component: 'room/record/roomKickRecord/index',
            meta: {
              title: '踢人记录',
            },
          },
        ],
      },
      {
        path: 'interaction',
        redirect: 'room/interaction/expressionList',
        alwaysShow: true,
        meta: {
          title: '互动管理',
        },
        children: [
          {
            name: 'ExpressionList',
            path: 'expressionList',
            component: 'room/interaction/expressionList/index',
            meta: {
              title: '表情列表',
            },
          },
          {
            name: 'CommonWord',
            path: 'commonWord',
            component: 'room/interaction/commonWord/index',
            meta: {
              title: '常用语列表',
            },
          },
          {
            name: 'WelcomeList',
            path: 'welcomeList',
            component: 'room/interaction/welcomeList/index',
            meta: {
              title: '欢迎语列表',
            },
          },
        ],
      },
      {
        path: 'roomCategory',
        redirect: 'room/roomCategory/categoryManage',
        alwaysShow: true,
        meta: {
          title: '房间分类',
        },
        children: [
          {
            name: 'CategoryManage',
            path: 'categoryManage',
            component: 'room/roomCategory/categoryManage/index',
            meta: {
              title: '类别管理',
            },
          },
          {
            name: 'TagManage',
            path: 'tagManage',
            component: 'room/roomCategory/tagManage/index',
            meta: {
              title: '标签管理',
            },
          },
        ],
      },
    ],
  },
]
