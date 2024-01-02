/**
 * 礼物
 */
export default [
  {
    sort: 3,
    path: '/gift',
    redirect: '/gift/giftManage',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '礼物',
      icon: 'Present',
    },
    children: [
      {
        path: 'giftManage',
        redirect: '/gift/giftManage/giftWall',
        alwaysShow: true,
        meta: {
          title: '礼物管理',
        },
        children: [
          {
            name: 'GiftWall',
            path: 'giftWall',
            component: 'gift/giftManage/giftWall/index',
            meta: {
              title: '礼物墙类别',
            },
          },
          {
            name: 'GiftAssort',
            path: 'giftAssort',
            component: 'gift/giftManage/giftAssort/index',
            meta: {
              title: '礼物分类',
            },
          },
          {
            name: 'GiftCategory',
            path: 'giftCategory',
            component: 'gift/giftManage/giftCategory/index',
            meta: {
              title: '礼物类别',
            },
          },
          {
            name: 'GiftList',
            path: 'giftList',
            component: 'gift/giftManage/giftList/index',
            meta: {
              title: '礼物列表',
              noCache: true,
            },
          },
        ],
      },
    ],
  },
]
