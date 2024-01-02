<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :otherHeight="0"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #pool="{ row }">
        <el-button type="primary" link @click="goToDetails(row)">查看详情</el-button>
      </template>
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
      <!-- 奖池配置 -->
      <template #poolList="{ row }">
        {{ handleRow(row) }}
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="SpecialPoolUserListSenior">
import { columns } from './constants.js'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/game/nextSpecialPoolUserList.js'

import { ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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

// 查看详情
const goToDetails = (row) => {
  router.push({
    name: 'SpecialPoolUserListDetailsSenior',
    query: { id: row.userId, name: row.nickname, userCode: row.userCode },
  })
}

// 奖池配置列表项处理
const handleRow = (params) => {
  const newParams = params.poolList.map((item) => {
    return ' ' + item.name
  })
  return newParams.join(',')
}
</script>

<style scoped></style>
