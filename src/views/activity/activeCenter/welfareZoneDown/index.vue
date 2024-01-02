<template>
  <div class="app-container">
    <!-- <el-card> -->
    <!-- <el-tabs v-model="initParam.activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in poolList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <div class="flex gap-6 flex-wrap flex-shrink-0 mb-4">
        <el-card shadow="always"> {{ activePool }} </el-card>
        <el-card shadow="always"> 剩余礼物数量： esrhrhyrthrthrthrhth</el-card>
        <el-card shadow="always"> 剩余礼物总金额： gewherhrhrhr</el-card>
        <el-card shadow="always"> 今日消耗当前奖池数： hhewhwhtrehrwh</el-card>
      </div> -->
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :initParam="initParam"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <!-- <el-button type="primary" @click="setReplaceDialogPage()">替换新奖池</el-button> -->
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
        <el-button type="primary" plain @click="editBatch">一键修改</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <!-- </el-card> -->
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
    <!-- 替换新奖池-->
    <!-- <ReplaceDialog ref="replaceDialog" @queryTable="resetList" /> -->
    <!-- 一键修改-->
    <OneClickEditing ref="oneClickEditing" @queryTable="resetList" />
  </div>
</template>

<script setup name="WefareZoneDown">
import { columns } from './constants.js'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/activity/prize.js'
import { reactive, ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
// import ReplaceDialog from './components/replaceDialog.vue'
import OneClickEditing from '@/views/game/components/OneClickEditing'
const initParam = reactive({
  jackpotType: '2',
})

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  // result.rows = result.rows.map((item) => {
  //   item.status = `${item.status}`
  //   return item
  // })
  // return result
  result.rows = result.data
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

// 替换新奖池弹窗
// const replaceDialog = ref()
// const setReplaceDialogPage = (params) => {
//   replaceDialog.value.showDialog(params)
// }

// 一键修改弹窗
const oneClickEditing = ref()
function editBatch() {
  oneClickEditing.value.showDialog(initParam.jackpotType)
}
</script>

<style scoped></style>
