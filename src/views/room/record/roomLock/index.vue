<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :dataCallback="dataCallback"></MyProTable>
  </div>
</template>
<script setup name="RoomLock">
import { columns } from './constants'
import { getLockRoomListApi } from '@/api/room/record.js'
const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.lockStartTime = newParams.lockTime?.[0] || ''
  newParams.lockEndTime = newParams.lockTime?.[1] || ''
  delete newParams.lockTime
  newParams.unLockStartTime = newParams.unlockTime?.[0] || ''
  newParams.unLockEndTime = newParams.unlockTime?.[1] || ''
  delete newParams.unlockTime
  return getLockRoomListApi(newParams)
}
</script>
<style lang="scss" scoped></style>
