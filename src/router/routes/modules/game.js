/**
 * 游戏
 */
export default [
  {
    sort: 8,
    path: '/game',
    redirect: '/game/miningPrimary',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: '游戏',
      icon: 'SwitchFilled',
    },
    children: [
      {
        path: 'miningPrimary',
        redirect: '/game/miningPrimary/currentAwardPool',
        alwaysShow: true,
        meta: {
          title: '闲闲挖矿（初级）',
        },
        children: [
          {
            name: 'CurrentAwardPool',
            path: 'currentAwardPool',
            component: 'game/miningPrimary/currentAwardPool/index',
            meta: {
              title: '本期奖池',
            },
          },
          {
            name: 'NextPrizePool',
            path: 'nextPrizePool',
            component: 'game/miningPrimary/nextPrizePool/index',
            meta: {
              title: '下期奖池',
            },
          },
          {
            name: 'PoolConfiguration',
            path: 'poolConfiguration',
            component: 'game/miningPrimary/poolConfiguration/index',
            meta: {
              title: '补池配置',
            },
          },
          {
            name: 'SpecialPoolConfiguration',
            path: 'specialPoolConfiguration',
            component: 'game/miningPrimary/specialPoolConfiguration/index',
            meta: {
              title: '特殊奖池配置',
            },
          },
          {
            name: 'SpecialPoolUserList',
            path: 'specialPoolUserList',
            component: 'game/miningPrimary/specialPoolUserList/index',
            meta: {
              title: '特殊奖池用户列表',
            },
          },
          {
            name: 'SpecialPoolUserListDetails',
            path: 'details',
            component: 'game/miningPrimary/specialPoolUserList/details',
            meta: {
              title: '特殊奖池用户列表详情',
              noCache: true,
            },
            hidden: true,
          },
          {
            name: 'PoolTypeManagement',
            path: 'poolTypeManagement',
            component: 'game/miningPrimary/poolTypeManagement/index',
            meta: {
              title: '奖池类型管理',
            },
          },
          {
            name: 'ProportionUserOutput',
            path: 'proportionUserOutput',
            component: 'game/miningPrimary/proportionUserOutput/index',
            meta: {
              title: '用户产出占比',
            },
          },
          {
            name: 'PrizePoolDataStatistics',
            path: 'prizePoolDataStatistics',
            component: 'game/miningPrimary/prizePoolDataStatistics/index',
            meta: {
              title: '奖池数据统计',
            },
          },
          {
            name: 'WinningRecord',
            path: 'winningRecord',
            component: 'game/miningPrimary/winningRecord/index',
            meta: {
              title: '中奖记录',
            },
          },
        ],
      },
      {
        path: 'miningSenior',
        redirect: '/game/miningSenior/currentAwardPoolSenior',
        alwaysShow: true,
        meta: {
          title: '闲闲挖矿（高级）',
        },
        children: [
          {
            name: 'CurrentAwardPoolSenior',
            path: 'currentAwardPoolSenior',
            component: 'game/miningSenior/currentAwardPoolSenior/index',
            meta: {
              title: '本期奖池',
            },
          },
          {
            name: 'NextPrizePoolSenior',
            path: 'nextPrizePoolSenior',
            component: 'game/miningSenior/nextPrizePoolSenior/index',
            meta: {
              title: '下期奖池',
            },
          },
          {
            name: 'PoolConfigurationSenior',
            path: 'poolConfigurationSenior',
            component: 'game/miningSenior/poolConfigurationSenior/index',
            meta: {
              title: '补池配置',
            },
          },
          {
            name: 'SpecialPoolConfigurationSenior',
            path: 'specialPoolConfigurationSenior',
            component: 'game/miningSenior/specialPoolConfigurationSenior/index',
            meta: {
              title: '特殊奖池配置',
            },
          },
          {
            name: 'SpecialPoolUserListSenior',
            path: 'specialPoolUserListSenior',
            component: 'game/miningSenior/specialPoolUserListSenior/index',
            meta: {
              title: '特殊奖池用户列表',
            },
          },
          {
            name: 'SpecialPoolUserListDetailsSenior',
            path: 'details',
            component: 'game/miningSenior/specialPoolUserListSenior/details',
            meta: {
              title: '特殊奖池用户列表详情',
            },
            hidden: true,
          },
          {
            name: 'PoolTypeManagementSenior',
            path: 'poolTypeManagementSenior',
            component: 'game/miningSenior/poolTypeManagementSenior/index',
            meta: {
              title: '奖池类型管理',
            },
          },
          {
            name: 'ProportionUserOutputSenior',
            path: 'proportionUserOutputSenior',
            component: 'game/miningSenior/proportionUserOutputSenior/index',
            meta: {
              title: '用户产出占比',
            },
          },
          {
            name: 'PrizePoolDataStatisticsSenior',
            path: 'prizePoolDataStatisticsSenior',
            component: 'game/miningSenior/prizePoolDataStatisticsSenior/index',
            meta: {
              title: '奖池数据统计',
            },
          },
          {
            name: 'WinningRecordSenior',
            path: 'winningRecordSenior',
            component: 'game/miningSenior/winningRecordSenior/index',
            meta: {
              title: '中奖记录',
            },
          },
        ],
      },
      {
        name: 'OpeningPool',
        path: 'openingPool',
        component: 'game/miningPrimary/openingPool/index',
        meta: {
          title: '奖池开启设置',
        },
      },
      {
        path: 'blindBoxManagement',
        redirect: '/game/blindBoxManagement/blindBoxDataStatistics',
        alwaysShow: true,
        meta: {
          title: '盲盒管理',
        },
        children: [
          {
            name: 'BlindBoxDataStatistics',
            path: 'blindBoxDataStatistics',
            component: 'game/blindBoxManagement/blindBoxDataStatistics/index',
            meta: {
              title: '盲盒数据统计',
            },
          },
          {
            name: 'BlindBoxCurrentPool',
            path: 'blindBoxCurrentPool',
            component: 'game/blindBoxManagement/blindBoxCurrentPool/index',
            meta: {
              title: '盲盒本期奖池',
            },
          },
          {
            name: 'BlindBoxNextPool',
            path: 'blindBoxNextPool',
            component: 'game/blindBoxManagement/blindBoxNextPool/index',
            meta: {
              title: '盲盒下期奖池',
            },
          },
          {
            name: 'BlindBoxWinningRecord',
            path: 'blindBoxWinningRecord',
            component: 'game/blindBoxManagement/blindBoxWinningRecord/index',
            meta: {
              title: '盲盒中奖记录',
            },
          },
          {
            name: 'BlindBoxUserList',
            path: 'blindBoxUserList',
            component: 'game/blindBoxManagement/blindBoxUserList/index',
            meta: {
              title: '盲盒用户列表',
            },
          },
        ],
      },
    ],
  },
]
