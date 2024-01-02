<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="UserChatRedBagList">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi } from '@/api/user/chatRedBag.js'

const myProTableRef = ref(null)
// 新增或编辑弹窗
const addOrEditRef = ref()
const showAddOrEditPage = (params) => {
  addOrEditRef.value.showDialog(params)
}

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.addDate?.[0] ?? ''
  newParams.endTime = newParams.addDate?.[1] ?? ''
  delete newParams.addDate
  return getListApi(newParams)
}

// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>

<style lang="scss" scoped></style>
