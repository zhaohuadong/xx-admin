/**
 * 请求列表数据
 * @param {Function} getListApi 获取表格数据 api 方法(必传)
 * @param {Object} initParam 获取数据初始化参数(非必传，默认为{})
 * @param {Function} dataCallBack 对后台返回的数据进行处理的方法(非必传)
 */
export const useTable = (getListApi, initParam = {}, dataCallBack) => {
  const state = reactive({
    // 表格数据
    tableData: [],
    total: 0,
    loading: false,
    // 分页数据
    pageData: {
      pageNum: 1,
      pageSize: 10,
    },
    // 查询参数(只包括查询)
    searchParam: {},
    // 初始化默认的查询参数
    searchInitParam: {},
    // 总参数(包含分页和查询参数)
    allParam: {},
  })
  onMounted(() => {
    reset()
  })
  // 获取表格数据
  const getTableList = async () => {
    state.loading = true
    try {
      Object.assign(state.allParam, initParam, state.pageData)
      let data = await getListApi(state.allParam)
      dataCallBack && (data = dataCallBack(data))
      state.tableData = data.rows
      state.total = data.total
      // const { pageNum, pageSize } = data
      // state.pageData = {
      //   pageNum,
      //   pageSize,
      // }
    } catch (error) {
      console.log(error)
    } finally {
      state.loading = false
    }
  }
  // 更新查询参数
  const updatedAllParam = () => {
    state.allParam = {}
    const nowSearchParam = {}
    for (const key in state.searchParam) {
      if (state.searchParam[key] || state.searchParam[key] === false || state.searchParam[key] === 0) {
        nowSearchParam[key] = state.searchParam[key]
      }
    }
    Object.assign(state.allParam, nowSearchParam, state.pageData)
  }
  // 表格数据查询
  const search = () => {
    state.pageData.pageNum = 1
    updatedAllParam()
    getTableList()
  }

  // 表格数据重置
  const reset = () => {
    state.pageData.pageNum = 1
    state.searchParam = {}
    // 重置搜索表单的时，如果有默认搜索参数，则重置默认的搜索参数
    Object.keys(state.searchInitParam).forEach((key) => {
      state.searchParam[key] = state.searchInitParam[key]
    })
    updatedAllParam()
    getTableList()
  }

  // 改变页数
  const changeCurrent = (pageNum) => {
    state.pageData.pageNum = pageNum
    getTableList()
  }

  return {
    // why 响应式失效？
    ...toRefs(state),
    state,
    getTableList,
    search,
    reset,
    changeCurrent,
  }
}

/**
 * 表格多选数据操作
 * @param {String} selectionKey 当表格可以多选时，所指定的 id
 * */
export const useSelection = (selectionKey = 'id') => {
  // 是否选中数据
  const isSelected = ref(false)
  // 选中的数据列表
  const selectedList = ref([])

  // 当前选中的所有ids数组
  const selectedListIds = computed(() => {
    const ids = []
    selectedList.value.forEach((item) => {
      ids.push(item[selectionKey])
    })
    return ids
  })

  // 获取行数据的 Key,用来优化 Table 的渲染;在使用跨页多选时,该属性是必填的
  const getRowKeys = (row) => {
    return row[selectionKey]
  }

  // 多选操作
  const selectionChange = (rowArr) => {
    rowArr.length === 0 ? (isSelected.value = false) : (isSelected.value = true)
    selectedList.value = rowArr
  }

  return {
    isSelected,
    selectedList,
    selectedListIds,
    getRowKeys,
    selectionChange,
  }
}

/**
 * 表格样式
 * @param {Number|String} otherHeight 其他元素的高度
 * */
export const useLayOut = (props, searchRef) => {
  const { otherHeight = 0, noHeight = false } = props
  const { width } = useWindowSize()
  // 分页组件展示项
  const pageLayout = ref('total, sizes, prev, pager, next, jumper')
  // 表格高度
  const tableHeight = ref(0)
  onMounted(() => {
    pageLayout.value = width.value < 700 ? 'total, prev, next, jumper' : 'total, sizes, prev, pager, next, jumper'
    window.setTimeout(() => {
      tableHeight.value = computedHeight()
    }, 0)
  })
  watch([width, () => searchRef?.value?.collapsed], (newValue) => {
    pageLayout.value = newValue[0] < 700 ? 'total, prev, next, jumper' : 'total, sizes, prev, pager, next, jumper'
    window.setTimeout(() => {
      tableHeight.value = computedHeight()
    }, 0)
  })
  // TODO：待优化，flex布局
  // 表格高度：app-container高度 - 20外边距 - 2border - 40内边距 - searchBarHeight - 2border - 10上边距 - 20内边距 - 8下边距 - tableHeader - 44分页组件 - 其他高度
  function computedHeight() {
    if (noHeight) {
      return undefined
    }
    // 内容高度
    const containerHeight = document.getElementsByClassName('app-container')?.[0]?.clientHeight || 0
    // 表格查询栏高度
    const searchBarHeight = document.getElementsByClassName('mySearchBar')?.[0]?.clientHeight ?? 0
    const tableHeader = document.getElementsByClassName('tableHeader')?.[0]?.clientHeight ?? 0
    return (
      containerHeight -
      20 -
      2 -
      (otherHeight ? 40 : 0) -
      searchBarHeight -
      2 -
      (searchBarHeight ? 10 : 0) -
      20 -
      8 -
      tableHeader -
      44 -
      otherHeight
    )
  }

  return {
    pageLayout,
    tableHeight,
  }
}
