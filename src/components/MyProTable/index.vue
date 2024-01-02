<template>
  <div>
    <!-- 查询表单 -->
    <el-card
      v-show="isShowSearch && searchColumns.length"
      :shadow="otherHeight ? 'hover' : 'always'"
      :body-style="{ paddingBottom: 0 }"
      class="mySearchBar mb-2"
    >
      <SearchForm
        ref="searchRef"
        v-model="searchParam"
        :searchColumns="searchColumns"
        :search="search"
        :reset="reset"
        :loading="loading"
      >
        <template v-for="(item, name, index) in $slots" :key="index" #[name]>
          <slot :name="name"></slot>
        </template>
      </SearchForm>
    </el-card>
    <!-- 表格 -->
    <el-card :shadow="otherHeight ? 'hover' : 'always'" :body-style="{ padding: '10px' }">
      <el-space wrap :fill="true" class="w-full">
        <!-- 表格头部 操作按钮 -->
        <div class="flex justify-end tableHeader">
          <slot
            name="tableHeader"
            :selectedListIds="selectedListIds"
            :selectedList="selectedList"
            :isSelected="isSelected"
          />
          <!-- TODO：导出按钮 -->
          <template v-if="exportApi">
            <el-button type="primary" @click="exportTable">导出</el-button>
          </template>
          <!-- 批量删除操作按钮 -->
          <template v-if="deleteBatchApi">
            <el-button type="danger" plain :disabled="!isSelected" @click="deleteBatch">批量删除</el-button>
          </template>
        </div>
        <!-- 表格主体 -->
        <el-table
          v-bind="$attrs"
          ref="tableRef"
          v-loading="loading"
          :height="tableHeight || undefined"
          :data="tableData"
          stripe
          :border="true"
          :row-key="getRowKeys"
          @selection-change="selectionChange"
        >
          <!-- 默认插槽，可直接使用el-table-column -->
          <slot></slot>
          <template v-for="item in tableColumns" :key="item">
            <TableColumn v-if="item.prop !== 'action'" :column="item" :selectionKey="selectionKey">
              <template v-for="slot in Object.keys($slots)" #[slot]="scope">
                <slot :name="slot" :row="scope.row" />
              </template>
            </TableColumn>
            <el-table-column v-if="item.prop === 'action'" v-slot="scope" v-bind="item">
              <slot name="action" :row="scope.row" />
              <!-- 删除操作按钮 -->
              <el-button v-if="deleteApi" type="danger" link @click="deleteSingle(scope.row)">删除</el-button>
            </el-table-column>
          </template>
          <template #append>
            <slot name="append" />
          </template>
        </el-table>
        <!-- 分页组件 -->
        <MyPagination
          v-if="isShowPagination"
          v-bind="$attrs"
          v-model:page="pageData.pageNum"
          v-model:limit="pageData.pageSize"
          :total="total || tableData.length"
          :layout="pageLayout"
          @pagination="getTableList"
        />
      </el-space>
    </el-card>
  </div>
</template>

<script setup name="MyProTable">
import SearchForm from './components/SearchForm.vue'
import TableColumn from './components/TableColumn.vue'
import { useTable, useSelection, useLayOut } from '@/hooks/useTable.js'
import { useConfirm } from '@/hooks/useConfirm.js'

const props = defineProps({
  // 是否显示搜索
  isShowSearch: {
    type: Boolean,
    default: true,
  },
  // 是否显示分页
  isShowPagination: {
    type: Boolean,
    default: true,
  },
  // 搜索项
  columns: {
    type: Array,
    default: () => [],
  },
  // 请求表格数据的接口，必传
  requestApi: {
    type: Function,
    required: true,
  },
  // 初始化请求参数
  initParam: {
    type: Object,
    default: undefined,
  },
  // 返回数据的回调函数
  dataCallback: {
    type: Function,
    default: undefined,
  },
  // 删除单条数据的接口
  deleteApi: {
    type: Function,
    default: undefined,
  },
  // 批量删除数据的接口
  deleteBatchApi: {
    type: Function,
    default: undefined,
  },
  // 表格项唯一字段名
  selectionKey: {
    type: String,
    default: 'id',
  },
  // 其他高度
  otherHeight: {
    type: [Number, String],
    default: 0,
  },
  // 表格是否不需要自适应高度（true：窗口会有滚动条）
  noHeight: {
    type: [Boolean, String],
    default: false,
  },
  // 导出接口
  exportApi: {
    type: Function,
    default: undefined,
  },
})

const searchRef = ref(null)
const tableRef = ref(null)
// 表格样式 Hooks
const { pageLayout, tableHeight } = useLayOut(props, searchRef)
// 表格多选 Hooks
const { selectionChange, getRowKeys, selectedList, selectedListIds, isSelected } = useSelection(props.selectionKey)
// 表格操作 Hooks
const { state, tableData, total, loading, pageData, searchParam, getTableList, search, reset, changeCurrent } =
  useTable(props.requestApi, props.initParam, props.dataCallback)
const columns = ref(props.columns)
const setEnumMap = async (item) => {
  if (!item.enum || typeof item.enum !== 'function') return item
  try {
    const data = await item.enum()
    item.enum = data || []
  } catch (error) {
    item.enum = []
  }
  return item
}
// 处理异步enum
columns.value.forEach((item) => {
  item = setEnumMap(item)
})
// 搜索columns
const searchColumns = ref(
  columns.value.filter((item) => !item.hideInSearch && item.prop && !['action'].includes(item.prop))
)
// 表格columns
const tableColumns = ref(columns.value.filter((item) => !item.hideInTable))
// 设置默认查询项searchInitParam
searchColumns.value.forEach((item) => {
  switch (item.type) {
    case 'daterange':
      state.searchInitParam[item.prop] = item.defaultValue || []
      break
    default:
      state.searchInitParam[item.prop] = item.defaultValue || ''
      break
  }
})
// 删除单条
function deleteSingle(row) {
  useConfirm({ api: () => props.deleteApi({ id: row[props.selectionKey] }) }).then(() => {
    changeCurrent(1)
  })
}
// 批量删除
function deleteBatch() {
  useConfirm({ api: () => props.deleteBatchApi(JSON.stringify(selectedListIds.value)) }).then(() => {
    changeCurrent(1)
  })
}

// 导出
async function exportTable() {
  const { data } = await props.exportApi(searchParam.value)
  window.location.href = data
}
// 对外暴露属性/方法
defineExpose({
  table: tableRef,
  tableData,
  pageData,
  searchParam,
  getTableList,
  reset,
  changeCurrent,
  isSelected,
  selectedList,
  selectedListIds,
})
</script>
