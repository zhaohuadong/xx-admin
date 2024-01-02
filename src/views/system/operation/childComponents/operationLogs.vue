<template>
  <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" otherHeight="55">
    <template #action="{ row }">
      <el-button link type="primary" @click="handleDesc(row.operId)">详情</el-button>
    </template>
  </MyProTable>
  <OperationDesc ref="dialogRef" :desc="operationDesc"></OperationDesc>

  <!-- 首页 -->
</template>

<script setup>
import { getListApi } from '@/api/systemManage/operate.js'
import { columns, shortcuts } from './operationLogs'
import OperationDesc from './operationDesc.vue'
const myProTableRef = ref(null)
const dialogRef = ref()
const operationDesc = ref({})
const dateTime = ref()
dateTime.value = shortcuts
const handleDesc = (id) => {
  operationDesc.value = {
    name: 'louis',
    content: 'neirong',
  }
  // console.log(shortcuts[0].value())
  dialogRef.value.dialogVisible = true
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.beginTime = newParams.operTime?.[0] ?? ''
  newParams.endTime = newParams.operTime?.[1] ?? ''
  delete newParams.operTime
  return getListApi(newParams)
}
</script>

<style lang="scss" scoped></style>
