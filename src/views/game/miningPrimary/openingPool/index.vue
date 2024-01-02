<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="column"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :otherHeight="0"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="OpeningPool">
import { column } from './constants.js'
import { getListApi, deleteApi } from '@/api/system/param.js'
import { ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
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
const addOrEdit = ref()
const setAddAndEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
</script>

<style scoped></style>
