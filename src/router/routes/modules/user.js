/**
 * 房间
 */
export default [
  {
    sort: 2,
    path: '/user',
    redirect: '/user/userManage',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '用户',
      icon: 'User',
    },
    children: [
      {
        path: 'userManage',
        redirect: '/user/userManage/userAccountManage',
        alwaysShow: true,
        meta: {
          title: '用户管理',
        },
        children: [
          {
            name: 'UserAccountManage',
            path: 'userAccountManage',
            component: 'user/userManage/userAccountManage/index',
            meta: {
              title: '用户账号管理',
            },
          },
          {
            name: 'BanRecord',
            path: 'banRecord',
            component: 'user/userManage/userAccountManage/banRecord',
            meta: {
              title: '封禁记录',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'UserAccountInfo',
            path: 'userAccountInfo',
            component: 'user/userManage/userAccountManage/userAccountInfo',
            meta: {
              title: '用户账号详情',
              noCache: true,
              activeMenu: '/user/userManage/userAccountManage',
            },
            hidden: true,
          },
          {
            name: 'UserEquipment',
            path: 'userEquipment',
            component: 'user/userManage/userEquipment/index',
            meta: {
              title: '用户设备管理',
            },
          },
          {
            name: 'UserChatRedBagList',
            path: 'userChatRedBagList',
            component: 'user/userManage/userChatRedBagList/index',
            meta: {
              title: '私聊红包白名单',
            },
          },
          {
            name: 'userRealName',
            path: 'userRealName',
            component: 'user/userManage/userRealName/index',
            meta: {
              title: '用户实名认证',
              noCache: true,
            },
          },
          {
            name: 'UserInviteList',
            path: 'userInviteList',
            component: 'user/userManage/userInviteList/index',
            meta: {
              title: '用户邀请列表',
            },
          },
          {
            name: 'UserLabelConfiguration',
            path: 'userLabelConfiguration',
            component: 'user/userManage/userLabelConfiguration/index',
            meta: {
              title: '用户标签配置',
            },
          },
        ],
      },
      {
        path: 'userData',
        redirect: '/user/userData/userDataList',
        alwaysShow: true,
        meta: {
          title: '用户数据',
        },
        children: [
          {
            name: 'UserDataList',
            path: 'userDataList',
            component: 'user/userData/userDataList/index',
            meta: {
              title: '用户数据列表',
            },
          },
          {
            name: 'UserPackGift',
            path: 'userPackGift',
            component: 'user/userData/userPackGift/index',
            meta: {
              title: '用户背包礼物',
            },
          },
          {
            name: 'UserGiftBagList',
            path: 'userGiftBag',
            component: 'user/userData/userGiftBagList/index',
            meta: {
              title: '用户礼包列表',
            },
          },
        ],
      },
      {
        path: 'userAccount',
        redirect: '/user/userAccount/userPayAndIncomeLog',
        alwaysShow: true,
        meta: {
          title: '用户账户',
        },
        children: [
          {
            name: 'UserPayAndIncomeLog',
            path: 'userPayAndIncomeLog',
            component: 'user/userAccount/userPayAndIncomeLog/index',
            meta: {
              title: '用户收支日志',
            },
          },
          {
            name: 'UserFrozenLog',
            path: 'userFrozenLog',
            component: 'user/userAccount/userFrozenLog/index',
            meta: {
              title: '冻结账户日志',
            },
          },
          {
            name: 'AliPayAccount',
            path: 'aliPayAccount',
            component: 'user/userAccount/aliPayAccount/index',
            meta: {
              title: '支付宝账号列表',
            },
          },
        ],
      },
      {
        path: 'userRecord',
        redirect: '/user/userRecord/userBanRecord',
        alwaysShow: true,
        meta: {
          title: '用户记录',
        },
        children: [
          {
            name: 'UserBanRecord',
            path: 'userBanRecord',
            component: 'user/userRecord/userBanRecord/index',
            meta: {
              title: '用户封禁记录',
            },
          },
          {
            name: 'UserUnsealRecord',
            path: 'userUnsealRecord',
            component: 'user/userRecord/userUnsealRecord/index',
            meta: {
              title: '管理员解封记录',
            },
          },
          {
            name: 'UserGiftBag',
            path: 'userGiftBag',
            component: 'user/userRecord/userGiftBag/index',
            meta: {
              title: '用户礼包记录',
            },
          },
          {
            name: 'UserSendGift',
            path: 'userSendGift',
            component: 'user/userRecord/userSendGift/index',
            meta: {
              title: '用户送礼记录',
            },
          },
        ],
      },
    ],
  },
]
