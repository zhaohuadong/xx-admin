<template>
  <div class="app-container">
    <MyProTable ref="myProTable" :columns="columns" :requestApi="getListApi">
      <!-- <MyProTable ref="myProTable" :columns="columns"> -->
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>

      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddOrEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <AddRole ref="addRole" @queryTable="resetList"></AddRole>
  </div>
</template>

<script setup name="Role">
import { columns } from './constant'
import { getListApi } from '@/api/systemManage/role'

import AddRole from './childComponents/AddRole.vue'

//
const addRole = ref()
const setAddOrEditPage = (row) => {
  addRole.value.showDialog(row)
}

const myProTable = ref(null)

const resetList = (row) => {
  myProTable.value.reset()
}
</script>

<style lang="scss" scoped></style>
