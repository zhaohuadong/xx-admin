<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :initParam="initParam"
      :requestApi="getList"
      :dataCallback="dataCallback"
    >
      <template #imageUrls="{ row }">
        <div style="display: flex; flex-wrap: wrap">
          <div v-for="(item, index) in row.imageUrls" :key="index">
            <el-image
              class="w-10 h-10"
              :src="item"
              :preview-src-list="[item]"
              fit="fill"
              :preview-teleported="true"
            ></el-image>
          </div>
        </div>
      </template>
    </MyProTable>
  </div>
</template>
<script setup name="UserReport">
import { columns } from './constants'
import { getUserListApi } from '@/api/customer/record.js'

const myProTableRef = ref(null)
const initParam = reactive({
  type: 1,
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
  return getUserListApi(newParams)
}
</script>
