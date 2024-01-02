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
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="NumberCategory">
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/niceNumberCategory.js'
import AddAndEdit from './components/addAndEdit.vue'

// 新增/编辑
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}
const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}

const dataCallback = (result) => {
  return result
}
</script>
