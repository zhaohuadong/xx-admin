<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :initParam="initParam"
      :requestApi="getList"
      :dataCallback="dataCallback"
    >
      <!-- <template #imageUrls="{ row }">
        <div style="display: flex; justify-content: space-evenly">
          <div v-for="(fit, index) in row.imageUrls" :key="index" class="block">
            <el-image style="width: 50px; height: 50px" :src="fit" previewSrcList :hide-on-click-modal="true" />
          </div>
        </div>
      </template> -->
    </MyProTable>
  </div>
</template>
<script setup name="RoomReport">
import { columns } from './constants'
import { getRoomListApi } from '@/api/customer/record.js'

const myProTableRef = ref(null)
const initParam = reactive({
  type: 2,
})
// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.beginTime = newParams.createTime?.[0] ?? ''
  newParams.endTime = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getRoomListApi(newParams)
}
</script>
