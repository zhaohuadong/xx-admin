<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-full mb-3.5">
          <div class="mr-20">房间编号：{{ infoId }}</div>
          <div class="mr-20">房间名称：{{ roomName }}</div>
          <div class="mr-20">日期：{{ dayStart }} -- {{ dayEnd }}</div>
        </div>
        <MyReturn :modelValue="{ name: 'RoomLockStatistic' }" />
      </div>
    </el-card>
    <MyProTable
      ref="myProTableRef"
      :columns="roomLockStatisticInfoTableLabel"
      :requestApi="gitList"
      :dataCallback="dataCallback"
    ></MyProTable>
  </div>
</template>
<script setup name="RoomLockStatisticInfo">
import { roomLockStatisticInfoTableLabel } from './constants'
import { getRoomLockDetailApi } from '@/api/room/record.js'
import { useRoute } from 'vue-router'
const route = useRoute()
const crId = ref()
const roomInfo = reactive({
  infoId: '',
  roomName: '',
  dayStart: '',
  dayEnd: '',
})
const { infoId, roomName, dayStart, dayEnd } = toRefs(roomInfo)
crId.value = route.query.id
const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  roomInfo.infoId = result.data.crId
  roomInfo.roomName = result.data.roomName
  roomInfo.dayStart = result.data.dayStart
  roomInfo.dayEnd = result.data.dayEnd
  const newData = JSON.parse(JSON.stringify(result.data).replace(/details/g, 'rows'))
  return newData
}
// 添加请求参数
const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  delete newParams.pageNum
  delete newParams.pageSize
  newParams.crId = crId.value
  return getRoomLockDetailApi(newParams)
}
</script>
<style lang="scss" scoped></style>
