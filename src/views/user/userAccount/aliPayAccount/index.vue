<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :exportApi="exportListApi"
      :deleteBatchApi="batchDelete"
    >
      <!-- :deleteApi="deleteApi"
        :deleteBatchApi="batchDeleteApi" -->
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="AliPayAccount">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi, exportListApi } from '@/api/user/accounts.js'

const myProTableRef = ref(null)
// 新增或编辑弹窗
const addOrEditRef = ref()
const showAddOrEditPage = (params) => {
  addOrEditRef.value.showDialog(params)
}
// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}

// 批量删除参数处理
const batchDelete = (params) => {
  const newParams = params.toString().replace(/\[|]/g, '')
  return batchDeleteApi(newParams)
}
</script>

<style lang="scss" scoped></style>
