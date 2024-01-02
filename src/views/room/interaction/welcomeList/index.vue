<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :isShowSearch="false"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="showAddOrEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="WelcomeList">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi } from '@/api/room/welcomeList.js'

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
</script>

<style lang="scss" scoped></style>
