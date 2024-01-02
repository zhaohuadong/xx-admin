<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center flex-wrap mb-3.5 w-4/5">
          <div class="mr-10 whitespace-nowrap">房间编号：{{ id }}</div>
          <div class="mr-10 whitespace-nowrap">房间名称: {{ name }}</div>
          <div class="mr-10 whitespace-nowrap">房间总收入：{{ totalIncome }} 金币</div>
        </div>
        <MyReturn class="w-1/5" :modelValue="{ name: 'RoomList' }" />
      </div>
    </el-card>
    <MyProTable
      ref="myProTableRef"
      :columns="roomFlowFormLabel"
      :requestApi="gitList"
      :dataCallback="dataCallback"
      otherHeight="45"
    ></MyProTable>
  </div>
</template>
<script setup>
import { roomFlowFormLabel } from './constants'
import { getFlowApi } from '@/api/room/room.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const id = ref()
const name = ref()
id.value = route.query.id
name.value = route.query.roomTitle
const myProTableRef = ref(null)
const totalIncome = ref()
// 此处可以自定义表格返回值
const dataCallback = (result) => {
  totalIncome.value = result.extraData.totalIncome
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}
// 添加请求参数
const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.crId = route.query.id
  newParams.startTime = params.addDate?.[0] ?? ''
  newParams.endTime = params.addDate?.[1] ?? ''
  delete newParams.addDate
  return getFlowApi(newParams)
}
</script>
