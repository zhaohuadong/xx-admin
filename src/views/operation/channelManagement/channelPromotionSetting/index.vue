<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- <template #tableHeader>
        <el-button type="primary">导出</el-button>
      </template> -->
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <Add ref="addDialog" @queryTable="resetList" />
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi } from '@/api/system/message.js'
import Add from './components/add.vue'
// 新增弹窗
const addDialog = ref()
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}

// 新增
const setAddOrEditPage = () => {
  addDialog.value.showDialog()
}
const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
