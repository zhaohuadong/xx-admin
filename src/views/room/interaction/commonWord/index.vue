<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!--表格操作-->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="CommonWord">
import AddAndEdit from './components/addAndEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/room/commonWord.js'

const myProTableRef = ref(null)

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.createTime?.[0] ?? ''
  newParams.endTime = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
}
// 编辑弹窗
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}
</script>
