<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center flex-wrap mb-3.5 w-4/5">
          <div class="mr-10 whitespace-nowrap">房间编号：{{ crId }}</div>
          <div class="mr-10 whitespace-nowrap">房间名称：{{ name }}</div>
          <div class="mr-10 whitespace-nowrap">日期：{{ date }}</div>
        </div>
        <MyReturn class="w-1/5" :modelValue="{ name: 'AllRoomFlow' }" />
      </div>
    </el-card>
    <MyProTable
      ref="myProTableRef"
      :columns="roomFlowInfoTableLabel"
      :requestApi="gitList"
      :dataCallback="dataCallback"
    ></MyProTable>
  </div>
</template>
<script setup>
import { roomFlowInfoTableLabel } from './constants'
import { getFlowApi } from '@/api/room/room.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const crId = ref()
const name = ref()
const date = ref()
crId.value = route.query.id
name.value = route.query.roomName
date.value = route.query.date
const myProTableRef = ref(null)
// 此处可以自定义表格返回值
const dataCallback = (result) => {
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
  return getFlowApi(newParams)
}
</script>
<style lang="scss" scoped></style>
