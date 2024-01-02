<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :deleteApi="deleteApi">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action>
        <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
  </div>
  <!-- 新增和编辑弹窗 -->
  <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
</template>
<script setup name="Week">
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/system/message.js'
import AddOrEdit from './components/addOrEdit.vue'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}

const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}

// 新增和编辑弹窗
const addOrEdit = ref()
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
</script>
