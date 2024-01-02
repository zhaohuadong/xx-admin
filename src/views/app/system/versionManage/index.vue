<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.appType" @tab-change="changeTab">
        <el-tab-pane label="Android" name="1" />
        <el-tab-pane label="Ios" name="2" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        :deleteBatchApi="batchDeleteApi"
        otherHeight="55"
        :initParam="initParam"
        selectionKey="manageId"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button type="primary" link @click="setAddOrEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!--新增和编辑弹窗-->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="VersionManage">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/app/manage.js'

const myProTableRef = ref(null)
const initParam = reactive({
  appType: '1',
})
// tab栏切换
const changeTab = (tab) => {
  initParam.appType = tab
  myProTableRef.value.changeCurrent(1)
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 新增和编辑弹窗
const addOrEdit = ref()
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
</script>
