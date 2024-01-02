<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :exportApi="exportList">
      <!-- <template #tableHeader>
        <el-button type="primary">导出</el-button>
      </template> -->
      <template #totalFee="{ row }">
        <!-- {{ row.totalFee.toLocaleString() }} -->
        {{ handleNumber(row.totalFee) }}
      </template>
      <template #gold="{ row }">
        {{ handleNumber(row.gold) }}
      </template>
    </MyProTable>
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi, exportPayApi } from '@/api/finance/pay.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.addStartDate = newParams.addDate?.[0] ?? ''
  newParams.addEndDate = newParams.addDate?.[1] ?? ''
  delete newParams.addDate
  newParams.payStartDate = newParams.payDate?.[0] ?? ''
  newParams.payEndDate = newParams.payDate?.[1] ?? ''
  delete newParams.payDate
  exportNewParams.value = newParams
  return getListApi(newParams)
}

// 导出
const exportNewParams = ref()
const exportList = (params) => {
  if (exportNewParams.value.addStartDate || exportNewParams.value.payStartDate) {
    return exportPayApi(exportNewParams.value)
  } else {
    return exportPayApi(params)
  }
}

// 处理数据格式
const handleNumber = (value) => {
  const res = Number(value)
    .toFixed(2)
    .toString()
    .replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ','
      })
    })
  return res
}
</script>
