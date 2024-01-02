<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getKickPeopleListApi"
      :dataCallback="dataCallback"
    ></MyProTable>
  </div>
</template>
<script setup name="RoomKickRecord">
import { columns } from './constants'
import { getKickPeopleListApi } from '@/api/room/record.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}
</script>
<style lang="scss" scoped></style>
