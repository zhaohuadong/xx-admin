/**
 * 活动
 */
export default [
  {
    sort: 6,
    path: '/activity',
    redirect: '/activity/taskManage',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '活动',
      icon: 'Flag',
    },
    children: [
      {
        path: 'taskManage',
        redirect: '/activity/taskManage/taskList',
        alwaysShow: true,
        meta: {
          title: '任务管理',
        },
        children: [
          {
            name: 'TaskList',
            path: 'taskList',
            component: 'activity/taskManage/taskList/index',
            meta: {
              title: '任务列表',
            },
          },
          // {
          //   name: 'TaskTypeManage',
          //   path: 'taskTypeManage',
          //   component: 'activity/taskManage/taskTypeManage/index',
          //   meta: {
          //     title: '任务类型管理',
          //   },
          // },
        ],
      },
      {
        path: 'activeCenter',
        redirect: '/activity/activeCenter/welfareZoneTop',
        alwaysShow: true,
        meta: {
          title: '福利中心',
        },
        children: [
          {
            name: 'WelfareZoneTop',
            path: 'welfareZoneTop',
            component: 'activity/activeCenter/welfareZoneTop/index',
            meta: {
              title: '福利专区-本期',
            },
          },
          {
            name: 'WelfareZoneDown',
            path: 'welfareZoneDown',
            component: 'activity/activeCenter/welfareZoneDown/index',
            meta: {
              title: '福利专区-下期',
            },
          },
        ],
      },
      {
        path: 'eventMessage',
        redirect: '/activity/eventMessage/smallEar',
        alwaysShow: true,
        meta: {
          title: '活动消息',
        },
        children: [
          {
            name: 'SmallEar',
            path: 'smallEar',
            component: 'activity/eventMessage/smallEar/index',
            meta: {
              title: '小耳朵管理',
            },
          },
        ],
      },
    ],
  },
]
