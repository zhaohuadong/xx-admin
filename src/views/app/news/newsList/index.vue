<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :deleteApi="deleteApi" :selection="false">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
        <el-button link type="primary" @click="setSendMessagePage(row)">发送</el-button>
      </template>

      <template #content="{ row }">
        {{ setContent(row) }}
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
    <!-- 发送消息弹窗 -->
    <SendMessage ref="sendMessage" @queryTable="resetList" />
  </div>
</template>
<script setup name="NewsList">
import AddOrEdit from './components/addOrEdit.vue'
import SendMessage from './components/sendMessage.vue'
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/system/message.js'

const myProTableRef = ref(null)
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 新增和编辑弹窗
const addOrEdit = ref()
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}

// 发送消息弹窗
const sendMessage = ref()
const setSendMessagePage = (params) => {
  sendMessage.value.showDialog(params)
}

// 处理内容展示
const setContent = (row) => {
  return row.content.replace(/<.*?>/gi, '')
}
</script>
