<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="text-lg w-full mb-3.5">用户{{ nickname }} （{{ userCode }}）特殊奖池</div>
        <MyReturn :modelValue="{ name: 'SpecialPoolUserListSenior' }" />
      </div>
    </el-card>
    <MyProTable
      ref="myProTableRef"
      :columns="columnsDetail"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :initParam="initParam"
      :otherHeight="0"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
        <el-button type="primary" plain @click="editBatch">一键修改</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEditDetail ref="addOrEditDetail" :userId="initParam.userId" @queryTable="resetList" />
    <!-- 一键修改-->
    <OneClickEditing
      ref="oneClickEditing"
      :getListApi="getListApi"
      :oneEdit="batchEditApi"
      :url="'url'"
      :name="'giftName'"
      :number="'number'"
      :typeName="'userId'"
      @queryTable="resetList"
    />
  </div>
</template>
<script setup name="SpecialPoolUserListDetailsSenior">
import { columnsDetail } from './constants.js'
import { getListApi, deleteApi, batchDeleteApi, batchEditApi } from '@/api/game/nextSpecialPoolUserDetails.js'

import { ref } from 'vue'
import OneClickEditing from './components/OneClickEditingComponents.vue'
import AddOrEditDetail from './components/addOrEditDetail.vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const initParam = reactive({
  userId: null,
})
const myProTableRef = ref(null)

// 获取用户昵称、编号
const nickname = ref('')
const userCode = ref('')
const id = ref()
nickname.value = route.query.name
userCode.value = route.query.userCode
id.value = route.query.id
initParam.userId = id

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
}
// 编辑弹窗
const addOrEditDetail = ref()
const setAddAndEditPage = (params) => {
  addOrEditDetail.value.showDialog(params)
}
// 一键修改弹窗
const oneClickEditing = ref()
function editBatch() {
  oneClickEditing.value.showDialog(initParam.userId)
}
</script>
