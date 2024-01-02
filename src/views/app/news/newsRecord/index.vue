<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- 表格 header 按钮 -->
      <template #tableHeader="{ isSelected }">
        <el-button type="danger" plain :disabled="!isSelected" @click="setBatchWithdrawStatus">批量撤回</el-button>
        <el-button type="primary" @click="setRefreshPage()">刷新</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" :disabled="`${row.status}` !== '1'" @click="setWithdrawStatus(row)">
          撤回
        </el-button>
      </template>

      <template #content="{ row }">
        {{ setContent(row) }}
      </template>
    </MyProTable>
  </div>
</template>
<script setup name="NewsRecord">
import { useConfirm } from '@/hooks/useConfirm.js'
import { columns } from './constants'
import { getListApi, withdrawApi, batchWithdrawApi } from '@/api/system/log.js'
import { timeToTimestamp } from '@/utils/date'

const withdrawDes = `撤回后用户客户端收到的系统消息将删除，确认撤回？`

const myProTableRef = ref(null)
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  console.log(params)
  newParams.startTime = timeToTimestamp(newParams.createTime?.[0]) || ''
  newParams.endTime = timeToTimestamp(newParams.createTime?.[1]) || ''
  delete newParams.createTime
  return getListApi(newParams)
}
// 刷新
const setRefreshPage = () => {
  myProTableRef.value.getTableList()
}
// 设置单条消息撤回状态
const setWithdrawStatus = (row) => {
  console.log(row)
  useConfirm({ api: () => withdrawApi({ id: row.id }), tip: withdrawDes, message: '撤回成功' }).then(() => {
    myProTableRef.value.changeCurrent(1)
  })
}

// 批量设置消息撤回状态
const setBatchWithdrawStatus = () => {
  useConfirm({
    api: () => batchWithdrawApi(JSON.stringify(myProTableRef.value.selectedListIds)),
    tip: withdrawDes,
    message: '撤回成功',
  }).then(() => {
    myProTableRef.value.changeCurrent(1)
  })
}

// 处理内容展示
const setContent = (row) => {
  return row.content.replace(/<.*?>/gi, '')
}
</script>
