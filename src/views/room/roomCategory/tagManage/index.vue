<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.tagType" lazy="true" @tab-change="changeTab">
        <el-tab-pane label="官方标签" name="1" />
        <el-tab-pane label="个人标签" name="2" />
      </el-tabs>

      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        otherHeight="55"
        :initParam="initParam"
        selectionKey="roomTagId"
      >
        <!-- :deleteBatchApi="batchDeleteApi" -->
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button link type="primary" @click="setAddAndEditPage(undefined, checkTabValue)">新增</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button link type="primary" @click="setAddAndEditPage(row, checkTabValue)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!--新增和编辑弹窗-->
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="TagManage">
import AddAndEdit from './components/addAndEdit.vue'

import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/room/tag.js'

const myProTableRef = ref(null)
const checkTabValue = ref(1)
const initParam = reactive({
  tagType: '1',
})
// tab栏切换
const changeTab = (tab) => {
  initParam.tagType = tab
  checkTabValue.value = tab
  myProTableRef.value.changeCurrent(1)
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 新增和编辑弹窗
const addAndEdit = ref()
const setAddAndEditPage = (params, tabVal) => {
  addAndEdit.value.showDialog(params, tabVal)
}
</script>
