<template>
  <div class="hover-effect" @click.stop="openSearch">
    <el-icon :size="18"><icon-ep-search /></el-icon>
    <el-dialog v-model="isShowSearch" class="searchDialog" append-to-body :show-close="false" @click="closeSearch">
      <el-select
        ref="headerSearchSelectRef"
        v-model="search"
        :remote-method="querySearch"
        filterable
        default-first-option
        remote
        placeholder="菜单搜索 ：支持菜单名称、路径"
        class="header-search-select"
        @change="change"
      >
        <el-option
          v-for="option in options"
          :key="option.item.path"
          :value="option.item"
          :label="option.item.title.join(' > ')"
        />
      </el-select>
    </el-dialog>
  </div>
</template>

<script setup>
import Fuse from 'fuse.js'
import { getNormalPath } from '@/utils/common'
import { isHttp } from '@/utils/validate'
import usePermissionStore from '@/store/modules/permission'
const router = useRouter()
const routes = computed(() => usePermissionStore().routes)

// 是否显示搜索菜单
const isShowSearch = ref(false)
// 搜索框
const headerSearchSelectRef = ref(null)
// 打开搜索窗
const openSearch = () => {
  isShowSearch.value = true
  nextTick(() => {
    setTimeout(() => {
      headerSearchSelectRef.value && headerSearchSelectRef.value.focus()
    }, 200)
  })
}
// 搜索窗关闭
const closeSearch = () => {
  isShowSearch.value = false
}
// 搜索内容
const search = ref('')
// 搜索项
const options = ref([])
// 搜索池
const searchPool = ref([])
// 模糊搜索
const fuse = ref(undefined)

function initFuse(list) {
  fuse.value = new Fuse(list, {
    shouldSort: true,
    threshold: 0.4,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'title',
        weight: 0.7,
      },
      {
        name: 'path',
        weight: 0.3,
      },
    ],
  })
}
// 筛选可以被搜索的路由
function generateRoutes(routes, basePath = '', prefixTitle = []) {
  let res = []

  for (const r of routes) {
    // skip hidden router
    if (r.hidden) {
      continue
    }
    const p = r.path.length > 0 && r.path[0] === '/' ? r.path : '/' + r.path
    const data = {
      path: !isHttp(r.path) ? getNormalPath(basePath + p) : r.path,
      title: [...prefixTitle],
    }

    if (r.meta && r.meta.title) {
      data.title = [...data.title, r.meta.title]

      if (r.redirect !== 'noRedirect') {
        // only push the routes with title
        // special case: need to exclude parent router without redirect
        res.push(data)
      }
    }

    // recursive child routes
    if (r.children) {
      const tempRoutes = generateRoutes(r.children, data.path, data.title)
      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes]
      }
    }
  }
  return res
}
// 传入select组件
function querySearch(query) {
  if (query !== '') {
    options.value = fuse.value.search(query)
  } else {
    options.value = searchPool.value.map((route) => {
      const item = JSON.parse(JSON.stringify(route))
      route.item = item
      return route
    })
  }
}
// 搜索项改变
function change(val) {
  const path = val.path
  if (isHttp(path)) {
    // http(s):// 路径新窗口打开
    const pindex = path.indexOf('http')
    window.open(path.substr(pindex, path.length), '_blank')
  } else {
    router.push(path)
  }

  search.value = ''
  options.value = []
  nextTick(() => {
    isShowSearch.value = false
  })
}
onMounted(() => {
  searchPool.value = generateRoutes(routes.value)
  options.value = searchPool.value.map((route) => {
    const item = JSON.parse(JSON.stringify(route))
    route.item = item
    return route
  })
})

watchEffect(() => {
  searchPool.value = generateRoutes(routes.value)
  options.value = searchPool.value.map((route) => {
    const item = JSON.parse(JSON.stringify(route))
    route.item = item
    return route
  })
})

watch(searchPool, (list) => {
  initFuse(list)
})
</script>

<style lang="scss">
.searchDialog {
  background: rgb(0 0 0 / 0%) !important;
  border-radius: 0 !important;
  box-shadow: unset !important;
  .el-dialog__header {
    border-bottom: none !important;
  }
  .el-dialog__body {
    border-top: none !important;
  }
  .header-search-select {
    position: absolute;
    top: 100px;
    left: 50%;
    width: 550px;
    transform: translateX(-50%);
    .el-input__wrapper {
      background-color: var(--el-bg-color);
    }
  }
}
</style>
