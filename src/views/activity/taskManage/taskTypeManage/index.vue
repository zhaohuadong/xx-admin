<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    // 新增弹窗
    <Add ref="addDialog" @queryTable="resetList" />
  </div>
</template>
<script setup name="AcceptanceNumList">
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/activity/task.js'
import { batchDeleteApi } from '@/api/system/param.js'
import Add from './components/add.vue'
// import { useConfirm } from '@/hooks/useConfirm.js'
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}
// 新增弹窗
const addDialog = ref()
// 新增or编辑
const setAddOrEditPage = (val) => {
  addDialog.value.showDialog(val)
}
const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
