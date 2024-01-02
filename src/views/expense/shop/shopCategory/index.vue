<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :dataCallback="dataCallback"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <template #action="{ row }">
        <el-button text type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <AddAndEdit ref="addAndEdit" @queryTable="resetList"></AddAndEdit>
  </div>
</template>

<script setup name="ShopCategory">
import AddAndEdit from './components/addAndEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/shopCategory.js'

// 编辑事件
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}
const dataCallback = (result) => {
  return result
}

const myProTableRef = ref()
// 刷新表单
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
