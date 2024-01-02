<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :exportApi="exportList"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <!-- <template #tableHeader>
        <el-button type="primary" @click="exportBanRecord">导出</el-button>
      </template> -->
    </MyProTable>
  </div>
</template>
<script setup name="RoomInterdiction">
import { columns } from './constants'
import { getBlockRecordListApi, exportBanRecordApi } from '@/api/room/record.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  return result
}

// 时间筛选
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.banBeginTime = params.beginTime?.[0] || ''
  newParams.banEndTime = params.beginTime?.[1] || ''
  delete newParams.beginTime
  exportParmas.value = newParams
  return getBlockRecordListApi(newParams)
}

// 导出
const exportParmas = ref()
const exportList = (params) => {
  if (exportParmas.value.banBeginTime) {
    return exportBanRecordApi(exportParmas.value)
  } else {
    return exportBanRecordApi(params)
  }
}
</script>
<style lang="scss" scoped></style>
