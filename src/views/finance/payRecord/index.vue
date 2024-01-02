<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :exportApi="exportList"></MyProTable>
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi, exportAdminApi } from '@/api/finance/getAdminRecharge.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = newParams.createTime?.[0] ?? ''
  newParams.endDate = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  exportParams.value = newParams
  return getListApi(newParams)
}

// 导出
const exportParams = ref()
const exportList = (params) => {
  if (exportParams.value.startDate) {
    return exportAdminApi(exportParams.value)
  } else {
    return exportAdminApi(params)
  }
}
</script>
