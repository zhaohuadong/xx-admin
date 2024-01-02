<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @tab-change="handleClick">
        <el-tab-pane label="基础设置" :name="1" />
        <el-tab-pane label="短信接口" :name="2" />
        <el-tab-pane label="APP消息推送" :name="3" />
        <el-tab-pane label="系统参数" :name="4" />
        <el-tab-pane label="程序员设置" :name="5" />
        <el-tab-pane label="项目设置" :name="6" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :key="initParam.configGroup"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        :deleteBatchApi="batchDeleteApi"
        :initParam="initParam"
        otherHeight="55"
        :dataCallback="dataCallback"
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
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="ParameterConfig">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/system/param.js'

const initParam = reactive({
  configGroup: 1,
})
const activeName = ref(1)
// tab栏切换
const handleClick = (tab) => {
  initParam.configGroup = tab
  activeName.value = tab
  // myProTableRef.value.changeCurrent(1)
  console.log(tab)
}

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
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
</script>
