<template>
  <el-menu :default-active="activeMenu" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <template v-for="(item, index) in topMenus">
      <el-menu-item v-if="index < visibleNumber" :key="index" :style="{ '--theme': theme }" :index="item.path">
        <el-icon v-if="item.meta && item.meta.icon">
          <component :is="Icons[item.meta.icon]"></component>
        </el-icon>
        {{ item.meta.title }}
      </el-menu-item>
    </template>

    <!-- 顶部菜单超出数量折叠 -->
    <el-sub-menu v-if="topMenus.length > visibleNumber" class="more" :style="{ '--theme': theme }" index="more">
      <template #title>更多</template>
      <template v-for="(item, index) in topMenus">
        <el-menu-item v-if="index >= visibleNumber" :key="index" :index="item.path">
          <el-icon v-if="item.meta && item.meta.icon">
            <component :is="Icons[item.meta.icon]"></component>
          </el-icon>
          {{ item.meta.title }}
        </el-menu-item>
      </template>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { constantRoutes } from '@/router'
import { isHttp } from '@/utils/validate'
import useAppStore from '@/store/modules/app'
import useSettingsStore from '@/store/modules/settings'
import usePermissionStore from '@/store/modules/permission'
import * as Icons from '@element-plus/icons-vue'

// 顶部栏初始数
const visibleNumber = ref(null)
// 当前激活菜单的 index
const currentIndex = ref(null)
// 隐藏侧边栏路由
const hideList = ['/index', '/user/profile']

const appStore = useAppStore()
const settingsStore = useSettingsStore()
const permissionStore = usePermissionStore()
const route = useRoute()
const router = useRouter()

const toggleSidebar = computed(() => appStore.sidebar.opened)
const toggleSidebarHide = computed(() => appStore.sidebar.hide)
// 主题颜色
const theme = computed(() => settingsStore.theme)
// 所有的路由信息
const routers = computed(() => permissionStore.topbarRouters)

// 顶部显示菜单
const topMenus = computed(() => {
  const topMenus = []
  routers.value.forEach((menu) => {
    if (menu.hidden !== true) {
      // 兼容顶部栏一级菜单内部跳转
      if (menu.path === '/') {
        topMenus.push(menu.children[0])
      } else {
        topMenus.push(menu)
      }
    }
  })
  return topMenus
})

// 设置子路由
const childrenMenus = computed(() => {
  const childrenMenus = []
  routers.value.forEach((router) => {
    for (const item in router.children) {
      if (router.children[item].parentPath === undefined) {
        if (router.path === '/') {
          router.children[item].path = '/' + router.children[item].path
        } else {
          if (!isHttp(router.children[item].path)) {
            router.children[item].path = router.path + '/' + router.children[item].path
          }
        }
        router.children[item].parentPath = router.path
      }
      childrenMenus.push(router.children[item])
    }
  })
  return constantRoutes.concat(childrenMenus)
})

// 默认激活的菜单
const activeMenu = computed(() => {
  const path = route.path
  let activePath = path
  if (path !== undefined && path.lastIndexOf('/') > 0 && hideList.indexOf(path) === -1) {
    const tmpPath = path.substring(1, path.length)
    activePath = '/' + tmpPath.substring(0, tmpPath.indexOf('/'))
    if (!route.meta.link) {
      appStore.toggleSideBarHide(false)
    }
  } else if (!route.children) {
    activePath = path
    appStore.toggleSideBarHide(true)
  }
  activeRoutes(activePath)
  return activePath
})

function setVisibleNumber() {
  const width = document.getElementsByClassName('navbar')[0].clientWidth - 50 - 130
  visibleNumber.value = parseInt(width / 78)
}

function handleSelect(key, keyPath) {
  currentIndex.value = key
  const route = routers.value.find((item) => item.path === key)
  if (isHttp(key)) {
    // http(s):// 路径新窗口打开
    window.open(key, '_blank')
  } else if (!route || !route.children) {
    // 没有子路由路径内部打开
    router.push({ path: key })
    appStore.toggleSideBarHide(true)
  } else {
    // 显示左侧联动菜单
    activeRoutes(key, keyPath)
    appStore.toggleSideBarHide(false)
  }
}

function activeRoutes(key, keyPath) {
  const routes = []
  if (childrenMenus.value && childrenMenus.value.length > 0) {
    childrenMenus.value.forEach((item) => {
      if (key === item.parentPath || (key === 'index' && item.path === '')) {
        routes.push(item)
      }
    })
  }
  if (routes.length > 0) {
    permissionStore.setSidebarRouters(routes)
    if (keyPath) {
      router.push({ name: findLastChild(routes[0]).name })
    }
  } else {
    appStore.toggleSideBarHide(true)
  }
  return routes
}

function findLastChild(routerItem) {
  if (!routerItem.children) {
    return routerItem
  } else {
    return findLastChild(routerItem.children[0])
  }
}

onMounted(() => {
  window.addEventListener('resize', setVisibleNumber)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', setVisibleNumber)
})

onMounted(() => {
  setVisibleNumber()
})
watch([toggleSidebar, toggleSidebarHide], () => {
  setTimeout(() => setVisibleNumber(), 500)
})
</script>

<style lang="scss">
.topmenu-container.el-menu--horizontal > .el-menu-item {
  float: left;
  height: 50px !important;
  line-height: 50px !important;
  font-weight: 500;
  user-select: none;
}

.topmenu-container.el-menu--horizontal > .el-menu-item.is-active,
.el-menu--horizontal > .el-sub-menu.is-active .el-submenu__title {
  border-bottom: 2px solid #{'var(--theme)'} !important;
}

/* sub-menu item */
.topmenu-container.el-menu--horizontal > .el-sub-menu .el-sub-menu__title {
  float: left;
  height: 50px !important;
  line-height: 50px !important;
  padding: 0 5px;
  margin: 0 10px;
  font-weight: 500;
  user-select: none;
}
.topmenu-container.el-menu--horizontal > .el-sub-menu.more .el-sub-menu__title {
  padding: 0 10px !important;
  margin: 0 !important;
}
.topmenu-container.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-sub-menu .el-submenu__title {
  padding: 0 10px;
}
// .topmenu-container.el-menu--horizontal > .el-menu-item.is-active {
//   background-color: var(--el-menu-active-color);
//   color: #fff !important;

//   &:focus {
//     background-color: var(--el-menu-active-color);
//     color: #fff !important;
//   }
//   &:hover {
//     background-color: var(--el-menu-active-color);
//     color: #fff !important;
//   }
// }
</style>
