<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="handleClick">
        <el-tab-pane label="每日任务" :name="1" />
        <el-tab-pane label="新手任务" :name="2" />
        <el-tab-pane label="成就任务" :name="3" />
        <el-tab-pane label="勋章任务" :name="4" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getList"
        :deleteApi="deleteApi"
        :deleteBatchApi="batchDeleteApi"
        otherHeight="55"
        :initParam="initParam"
      >
        <!-- :dataCallback="dataCallback" -->
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!-- 新增和编辑弹窗 -->
    <Add ref="addDialog" :type="initParam.type" @queryTable="resetList" />
  </div>
</template>
<script setup name="AcceptanceNumList">
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/activity/task.js'
import Add from './components/add.vue'

const initParam = reactive({
  type: 1,
})
// tab栏切换
const handleClick = (tab) => {
  initParam.type = tab
  myProTableRef.value.changeCurrent(1)
}
// 此处可以自定义表格返回值
// const dataCallback = (result) => {
//   result.rows = result.rows.map((item) => {
//     item.status = `${item.status}`
//     return item
//   })
//   return result
// }
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.createTime?.[0] ?? ''
  newParams.endTime = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}
// 新增和编辑弹窗
const addDialog = ref()
// 新增or编辑方法
const setAddOrEditPage = (val) => {
  addDialog.value.showDialog(val)
}
const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
