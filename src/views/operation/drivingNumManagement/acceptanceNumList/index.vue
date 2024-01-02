<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
        <el-button type="primary">导出</el-button>
      </template>
      <template #status="{ row }">
        <el-tag :type="getType(1, row)">封禁中</el-tag>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">收支详情</el-button>
        <el-button link type="primary" @click="setSendMessagePage(row)">
          <el-dropdown>
            <span class="el-dropdown-link">
              操作
              <el-icon><icon-ep-caret-bottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="accountDeduction">账户扣除</el-dropdown-item>
                <el-dropdown-item @click="deleteItem(row)">删除</el-dropdown-item>
                <el-dropdown-item @click="sealUser">封用户</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-button>
      </template>
    </MyProTable>
    // 新增弹窗
    <Add ref="addDialog" :type="2" @queryTable="resetList" />
    // 账户扣除
    <Account-Deduction ref="accountDeductionDialog" :type="2" @queryTable="resetList" />
    // 封用户
    <Seal-User ref="sealUserDialog" :type="2" @queryTable="resetList" />
  </div>
</template>
<script setup name="AcceptanceNumList">
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/system/message.js'
import { useConfirm } from '@/hooks/useConfirm.js'
import Add from '../components/add.vue'
import AccountDeduction from '../components/accountDeduction.vue'
import SealUser from '../components/sealUser.vue'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}
// 新增弹窗
const addDialog = ref()
const accountDeductionDialog = ref()
const sealUserDialog = ref()
// 新增
const setAddOrEditPage = () => {
  addDialog.value.showDialog()
}
// 扣除账户
const accountDeduction = () => {
  accountDeductionDialog.value.showDialog()
}
// 封用户
const sealUser = () => {
  sealUserDialog.value.showDialog()
}
// 删除
const deleteItem = (row) => {
  useConfirm({ api: () => deleteApi({ id: row.id }) }).then(() => {
    // changeCurrent(1)
  })
}
// 获取状态
const getType = (val) => {
  switch (Number(val)) {
    case 1:
      return ''
    case 2:
      return 'success'
    case 3:
      return 'danger'
  }
}
const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
