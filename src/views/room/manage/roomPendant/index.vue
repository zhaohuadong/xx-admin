<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="showAddOrEditPage(row)">编辑</el-button>
      </template>

      <template #playTime="{ row }">
        {{ row.playTime[0].start }}.00- {{ row.playTime[0].end }}.00 /
        {{ row.playTime[1]?.start ? row.playTime[1]?.start : '0' }}.00-
        {{ row.playTime[1]?.end ? row.playTime[1]?.end : '0' }}.00
      </template>
      <template #showTime="{ row }">
        {{ row.showTime[0].start }}.00- {{ row.showTime[0].end }}.00 /
        {{ row.showTime[1]?.start ? row.showTime[1]?.start : '0' }}.00-
        {{ row.showTime[1]?.end ? row.showTime[1]?.end : '0' }}.00
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="RoomPendant">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi } from '@/api/room/decoration.js'

const myProTableRef = ref(null)
// 新增或编辑弹窗
const addOrEditRef = ref()
const showAddOrEditPage = (params) => {
  addOrEditRef.value.showDialog(params)
}
// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>

<style lang="scss" scoped></style>
