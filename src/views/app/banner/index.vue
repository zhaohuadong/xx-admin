<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <el-tab-pane label="首页速配" name="0" />
        <el-tab-pane label="礼物盒" name="1" />
        <el-tab-pane label="正能量" name="2" />
        <el-tab-pane label="我的" name="3" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        :initParam="initParam"
        otherHeight="55"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!--新增和编辑弹窗-->
    <AddOrEdit ref="addOrEdit" :type="initParam.type" @queryTable="resetList" />
  </div>
</template>
<script setup name="Banner">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/app/slideshow.js'

const myProTableRef = ref(null)
const initParam = reactive({
  type: '0',
})
// tab栏切换
const changeTab = (tab) => {
  initParam.appType = tab
  myProTableRef.value.changeCurrent(1)
}

// 新增和编辑弹窗
const addOrEdit = ref()
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
