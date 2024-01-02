<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action></template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <Add ref="add" @queryTable="resetList" />
  </div>
</template>
<script setup name="OfficialCode">
import Add from './components/add.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/finance/officialAccount.js'

const myProTableRef = ref(null)

// 新增弹窗
const add = ref()
const setAddOrEditPage = (params) => {
  add.value.showDialog(params)
}

const resetList = () => {
  myProTableRef.value.reset()
}
</script>
