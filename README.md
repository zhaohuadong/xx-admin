# 闲闲后台管理系统

## 项目简介

vue3 + element-plus + pinia + tailwind + vite  

## 环境配置及启动

```bash
# 安装依赖
pnpm install
# 开发模式：开发环境
pnpm run dev
# 开发模式：测试环境
pnpm run dev:test
# 开发模式：预发环境
pnpm run dev:pre
# 开发模式：正式环境
pnpm run dev:prod
# 项目构建：测试环境
pnpm run build:test
# 项目构建：预发环境
pnpm run build:pre
# 项目构建：生产环境
pnpm run build:prod
# eslint格式化项目
pnpm run lint:fix
# prettier格式化项目
pnpm run prettier
# 使用plop快速构建文件
pnpm run new
```

## 目录结构

```tree
├── README.md
├── html
│   └── ie.html
├── index.html
├── package.json
├── public
│   └── favicon.ico
├── src
│   ├── App.vue         // 页面入口
│   ├── api             // 接口
│   ├── assets          // 静态文件：图片、图标、样式
│   ├── components      // 全局组件
│   ├── directive       // 自定义指令：权限、复制
│   ├── layout          // 主布局
│   ├── main.js         // 主入口
│   ├── permission.js   // 权限
│   ├── plugins         // 自定义插件：通过proxy.调用
│   ├── router          // 路由
│   ├── settings.js     // 布局设置项
│   ├── store           // 全局变量
│   ├── utils           // 工具
│   └── views           // 页面
├── vite
│   └── plugins             // vite插件
│       ├── auto-import.js  // 自动引入
│       ├── compression.js  // 压缩
│       ├── icons.js        // 项目图标
│       ├── setup-extend.js // 在script标签上定义组件的name值
│       ├── visualizer.js   // 项目打包大小分析
│       └── vue-components.js // 按需引入组件
└── vite.config.js      // 打包配置
```

## 项目依赖

```js
{
  "@element-plus/icons-vue": "2.0.10", // icon图标
  "@soybeanjs/vue-admin-tab": "1.0.5", // 页签样式
  "@vueuse/core": "9.5.0",    // vueuse
  "axios": "0.27.2",          // 网络请求
  "element-plus": "2.2.21",   // UI库
  "js-cookie": "3.0.1",       // cookie缓存库
  "nprogress": "0.2.0",       // 进度条
  "pinia": "2.0.22",          // 全局变量
  "pinia-plugin-persist": "^1.0.0", // pinia数据持久化
  "vue": "3.2.45",            // vue框架
  "vue-router": "4.1.4",      // 路由
  "fuse.js": "6.6.2",         // 模糊搜索
  "md5": "^2.3.0",            // md5加密
  "dayjs": "^1.10.7",         // 时间库
  "@wangeditor/editor": "^5.1.23",  // 富文本编辑器
  "@wangeditor/editor-for-vue": "^5.1.12",    // 富文本编辑器
  "lodash": "^4.17.21",       // js工具库
}
```

## 开发规范

## 其他注意事项

1. 项目通过`unplugin-auto-import/vite`和`unplugin-vue-components/vite`配置了`element`组件和`@/components`下的全局组件按需引入，以及`vue`、`vue-router`、`pinia`、`vueuse`的自动引入，无需在页面中`import`即可直接使用。

2. 项目图标使用 icones 图标, 在[icones](https://icones.netlify.app/)网站上挑选想要使用的图标，复制图标名称，加上前缀`icon-`：`<icon-ep-arrow-down />`即可使用。

3. 路由文件统一放在 `@/router/modules` 中，只需新建路由文件即可以批量导入的形式注入路由。

4. 通过`vite-plugin-compression`配置了 gzip 压缩。

5. 通过`vite-plugin-vue-setup-extend`允许在页面 script 标签上直接定义组件的 name 属性。

6. 通过`rollup-plugin-visualizer`在打包后可查看当前项目及依赖的大小，初始框架打包大小：2.19MB（gzip 后 640KB）。

7. 项目提测需把代码合并到`dev`分支，并通知组长打测试包。

8. 项目上线需把代码合并到`main`分支，并在 gitlab 上新建合并请求，通知组长合并后在 Jenkins 打正式包。
