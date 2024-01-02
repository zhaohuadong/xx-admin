export default [
  {
    sort: 3,
    path: '/stageProperty',
    redirect: '/stageProperty/title',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '道具',
      icon: 'Box',
    },
    children: [
      // {
      //   path: 'title',
      //   redirect: '/stageProperty/title/titleList',
      //   alwaysShow: true,
      //   meta: {
      //     title: '称号管理',
      //   },
      //   children: [
      //     {
      //       name: 'TitleList',
      //       path: 'titleList',
      //       component: 'stageProperty/title/titleList/index',
      //       meta: {
      //         title: '称号列表',
      //       },
      //     },
      //   ],
      // },
      {
        path: 'medal',
        redirect: '/stageProperty/medal/medalList',
        alwaysShow: true,
        meta: {
          title: '勋章管理',
        },
        children: [
          {
            name: 'MedalList',
            path: 'medalList',
            component: 'stageProperty/medal/medalList/index',
            meta: {
              title: '勋章列表',
            },
          },
          {
            name: 'MedalRecord',
            path: 'medalRecord',
            component: 'stageProperty/medal/medalRecord/index',
            meta: {
              title: '勋章领取记录',
            },
          },
        ],
      },
    ],
  },
]
