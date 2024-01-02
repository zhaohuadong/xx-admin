<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getListApi" :deleteApi="deleteApi">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="givePage(row)">赠送</el-button>
        <el-button link type="primary" @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />

    <!-- 赠送弹窗 -->
    <Give ref="give" />
  </div>
</template>
<script setup name="TitleList">
import AddAndEdit from './components/addAndEdit.vue'
import Give from './components/give.vue'
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/app/deal.js'

// 新增和编辑弹窗
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}

// 赠送弹窗
const give = ref()
const givePage = (params) => {
  give.value.showDialog(params)
}

const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
