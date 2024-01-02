export default [
  {
    sort: 1,
    path: '/app',
    redirect: '/app/system',
    component: 'Layout',
    alwaysShow: true,
    meta: {
      title: 'APP',
      icon: 'Menu',
    },
    children: [
      {
        path: 'system',
        redirect: '/app/system/parameterConfig',
        alwaysShow: true,
        meta: {
          title: '系统配置',
        },
        children: [
          {
            name: 'ParameterConfig',
            path: 'parameterConfig',
            component: 'app/system/parameterConfig/index',
            meta: {
              title: '系统参数配置',
            },
          },
          {
            name: 'VersionConfig',
            path: 'versionConfig',
            component: 'app/system/versionConfig/index',
            meta: {
              title: 'App版本配置',
            },
          },
          {
            name: 'VersionManage',
            path: 'versionManage',
            component: 'app/system/versionManage/index',
            meta: {
              title: 'App版本管理',
            },
          },
        ],
      },
      {
        path: 'news',
        redirect: '/app/news/newsList',
        alwaysShow: true,
        meta: {
          title: '系统消息',
        },
        children: [
          {
            name: 'NewsList',
            path: 'newsList',
            component: 'app/news/newsList/index',
            meta: {
              title: '系统消息列表',
            },
          },
          {
            name: 'NewsRecord',
            path: 'newsRecord',
            component: 'app/news/newsRecord/index',
            meta: {
              title: '系统消息记录',
            },
          },
        ],
      },
      {
        path: 'agreement',
        redirect: '/app/agreement/agreementList',
        alwaysShow: true,
        meta: {
          title: '协议说明',
        },
        children: [
          {
            name: 'agreementList',
            path: 'agreementList',
            component: 'app/agreement/agreementList/index',
            meta: {
              title: '协议说明列表',
              noCache: true,
            },
          },
          {
            name: 'AgreementCategory',
            path: 'agreementCategory',
            component: 'app/agreement/agreementCategory/index',
            meta: {
              title: '协议说明分类',
            },
          },
        ],
      },
      {
        path: 'helpCenter',
        redirect: '/app/helpCenter/helpCenterList',
        alwaysShow: true,
        meta: {
          title: '帮助中心',
        },
        children: [
          {
            name: 'HelpCenterList',
            path: 'helpCenterList',
            component: 'app/helpCenter/helpCenterList/index',
            meta: {
              title: '帮助中心列表',
            },
          },
          {
            name: 'HelpCenterCategory',
            path: 'helpCenterCategory',
            component: 'app/helpCenter/helpCenterCategory/index',
            meta: {
              title: '帮助中心分类',
            },
          },
        ],
      },
      {
        path: 'openScreen',
        name: 'OpenScreen',
        meta: {
          title: '开屏页列表',
        },
        component: 'app/openScreen/index',
      },
      {
        path: 'banner',
        name: 'Banner',
        meta: {
          title: '轮播图管理',
        },
        component: 'app/banner/index',
      },
    ],
  },
]
