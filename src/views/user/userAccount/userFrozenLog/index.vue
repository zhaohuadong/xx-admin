<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :exportApi="exportList" :selection="false">
      <!-- 表格 header 按钮 -->
    </MyProTable>
  </div>
</template>

<script setup name="UserFrozenLog">
import { columns } from './constants'
// 修改对应api路径
import { getListApi, exportListApi } from '@/api/user/frozenlogs.js'

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.createTime?.[0] ?? ''
  newParams.endTime = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  exportParams.value = newParams
  return getListApi(newParams)
}

// 导出
const exportParams = ref()
const exportList = (params) => {
  if (exportParams.value.startTime) {
    return exportListApi(exportParams.value)
  } else {
    return exportListApi(params)
  }
}
</script>

<style lang="scss" scoped></style>
