<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :dataCallback="dataCallback"
      selectionKey="menuId"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage('add')">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddOrEditPage('add', row)">新增</el-button>
        <el-button type="primary" link @click="setAddOrEditPage('edit', row)">编辑</el-button>
      </template>
    </MyProTable>
    <AddDialog ref="addDialog" @queryTable="resetList"></AddDialog>
  </div>
</template>

<script setup name="Menu">
import { handleTree } from '@/utils'
import { columns } from './constant'
import { getListApi, deleteApi } from '@/api/systemManage/menu'
import AddDialog from './childComponents/AddDialog.vue'

const myProTableRef = ref(null)

const dataCallback = (result) => {
  result.rows = handleTree(result.data, 'menuId')
  console.log(result.rows)
  return result
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 编辑弹窗
const addDialog = ref()
const setAddOrEditPage = (type, params) => {
  addDialog.value.showDialog(type, params)
}
</script>

<style lang="scss" scoped></style>
