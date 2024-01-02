<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList"></MyProTable>
  </div>
</template>

<script setup name="UsageRecord">
import { columns } from './constants'
import { getListApi } from '@/api/expense/niceUseNumber.js'
import { getListApi as gitNumberApi } from '@/api/expense/niceNumberCategory.js'

// 获取靓号类别
// const options = reactive([])
const gitNumberList = async () => {
  const { rows } = await gitNumberApi()
  columns[5].enum = rows.map((item) => {
    return {
      label: item.categoryName,
      value: item.id,
    }
  })
}
gitNumberList()

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.useStartDate = newParams.useDate?.[0] ?? ''
  newParams.useEndDate = newParams.useDate?.[1] ?? ''
  delete newParams.useDate
  newParams.startDate = newParams.expireDate?.[0] ?? ''
  newParams.endDate = newParams.expireDate?.[1] ?? ''
  delete newParams.expireDate
  return getListApi(newParams)
}
</script>
