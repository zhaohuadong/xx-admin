<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="gitList" :selection="false"></MyProTable>
  </div>
</template>

<script setup name="UserUnsealRecord">
import { columns } from './constants'
// 修改对应api路径
import { getListApi } from '@/api/user/unsealUser.js'

// 处理时间筛选参数
const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.banStartDate = params.lastFrozenTime?.[0] ?? ''
  newParams.banEndDate = params.lastFrozenTime?.[1] ?? ''
  newParams.unsealStartDate = params.addDate?.[0] ?? ''
  newParams.unsealEndDate = params.addDate?.[1] ?? ''
  delete newParams.lastFrozenTime
  delete newParams.addDate
  return getListApi(newParams)
}
</script>

<style lang="scss" scoped></style>
