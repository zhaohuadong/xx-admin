<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :dataCallback="dataCallback"
      selectionKey="wallId"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!--表格操作-->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="GiftWall">
import AddAndEdit from './components/addAndEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/gift/giftWall.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
}
// 编辑弹窗
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}
</script>
