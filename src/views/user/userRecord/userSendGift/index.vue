<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="gitList" :exportApi="exportList" :selection="false">
      <!-- 表格 header 按钮 -->
    </MyProTable>
  </div>
</template>

<script setup name="UserSendGift">
import { columns } from './constants'
// 修改对应api路径
import { getSendListApi, exportSendApi } from '@/api/user/unsealUser.js'

// 处理时间筛选参数
const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = params.addDate?.[0] ?? ''
  newParams.endDate = params.addDate?.[1] ?? ''
  delete newParams.addDate
  exportParams.value = newParams
  return getSendListApi(newParams)
}
// 导出
const exportParams = ref()
const exportList = (params) => {
  if (exportParams.value.startDate) {
    return exportSendApi(exportParams.value)
  } else {
    return exportSendApi(params)
  }
}
</script>

<style lang="scss" scoped></style>
