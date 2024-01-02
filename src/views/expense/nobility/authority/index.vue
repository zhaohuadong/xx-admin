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
      <template #status="{ row }">
        {{ row.status === '0' ? '显示' : '隐藏' }}
      </template>
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

<script setup name="Authority">
import { columns } from './constants'
import AddAndEdit from './components/addAndEdit.vue'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/knighthoodPower.js'

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
  const newResult = JSON.parse(JSON.stringify(result))
  newResult.rows = result.rows.map((item) => {
    item.id = item.powerId
    return item
  })
  return newResult
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = newParams.createTime?.[0] ?? ''
  newParams.endDate = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}
</script>
