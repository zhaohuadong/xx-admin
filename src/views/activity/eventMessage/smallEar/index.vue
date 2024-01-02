<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :deleteApi="deleteApi" :selection="false">
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

<script setup name="SmallEar">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi } from '@/api/activity/ears.js'

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

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.beginStartTime = newParams.startTime?.[0] ?? ''
  newParams.endStartTime = newParams.startTime?.[1] ?? ''
  delete newParams.startTime
  newParams.beginEndTime = params.endTime?.[0] ?? ''
  newParams.endEndTime = params.endTime?.[1] ?? ''
  delete newParams.endTime
  return getListApi(newParams)
}
</script>

<style lang="scss" scoped></style>
