<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- <template #id="{ row }"> -->
      <!-- 修改类型：房间名称、话题主题、话题内容、房间欢迎语、房间封面（图片内容） -->
      <!-- <el-tag type="primary" plain>{{ setText(row.id) }}</el-tag>
      </template> -->
    </MyProTable>
  </div>
</template>
<script setup name="RoomEditFRecord">
import { columns } from './constants'

import { getRoomEditApi } from '@/api/room/record.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startEditTime = params.createTime?.[0] || ''
  newParams.endEditTime = params.createTime?.[1] || ''
  delete newParams.createTime
  return getRoomEditApi(newParams)
}
const myProTableRef = ref(null)
</script>
<style lang="scss" scoped></style>
