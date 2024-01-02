<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in poolList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :key="poolActiveKey"
        :columns="columnsActive"
        :requestApi="getList"
        :deleteApi="deleteList"
        :otherHeight="55"
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
    </el-card>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="PoolTypeManagement">
import { columns, columnsSpecial, poolList } from './constants.js'
// import { getListApi, deleteApi } from '@/api/system/param.js'
import { getListPrimaryApi, deleteApi, getPersonListApi, deletePersonApi } from '@/api/game/superior.js'

import { reactive, ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
const initParam = reactive({
  activeName: '1',
})
// tab栏切换
const columnsActive = ref(columns)
const poolActiveKey = ref(1)
const handleClick = (e) => {
  initParam.activeName = e.props.name
  if (e.props.name === '1') {
    poolActiveKey.value = 1
    columnsActive.value = columns
  } else {
    poolActiveKey.value = 2
    columnsActive.value = columnsSpecial
  }
}
const myProTableRef = ref(null)

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

// 顶级tabs切换查询列表
const getList = (params) => {
  if (initParam.activeName === '1') {
    return getListPrimaryApi(params)
  } else {
    return getPersonListApi(params)
  }
}

// 顶级tabs切换删除列表
const deleteList = (params) => {
  console.log(params)
  if (initParam.activeName === '1') {
    return deleteApi(params)
  } else {
    return deletePersonApi(params)
  }
}

// 编辑弹窗
const addOrEdit = ref()
const setAddAndEditPage = (params) => {
  addOrEdit.value.showDialog(params, initParam.activeName)
}
</script>

<style scoped></style>
