<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList"></MyProTable>
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi } from '@/api/finance/getAdminSendGift.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = newParams.createTime?.[0] ?? ''
  newParams.endDate = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}
</script>
