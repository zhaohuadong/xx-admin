<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- <template #tableHeader>
        <el-button type="primary">导出</el-button>
      </template> -->
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>
      <template #status="{ row }">
        <el-tag :type="getType(1, row)">封禁中</el-tag>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">收支日志</el-button>
        <el-button link type="primary" @click="setSendMessagePage(row)">
          <el-dropdown>
            <span class="el-dropdown-link">
              操作
              <el-icon><icon-ep-caret-bottom /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="recharge">充值</el-dropdown-item>
                <el-dropdown-item @click="accountDeduction">账户扣除</el-dropdown-item>
                <el-dropdown-item @click="emptyBackpack(row)">清空背包</el-dropdown-item>
                <el-dropdown-item @click="deleteItem(row)">删除</el-dropdown-item>
                <el-dropdown-item @click="sealUser">封用户</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </el-button>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <Add ref="addDialog" :type="1" @queryTable="resetList" />
    <Recharge ref="rechargeDialog" @queryTable="resetList" />
    <Account-Deduction ref="accountDeductionDialog" :type="1" @queryTable="resetList" />
    <Seal-User ref="sealUserDialog" :type="1" @queryTable="resetList" />
  </div>
</template>
<script setup name="DrivingNumList">
import Add from '../components/add.vue'
import Recharge from '../components/recharge.vue'
import AccountDeduction from '../components/accountDeduction.vue'
import SealUser from '../components/sealUser.vue'
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/system/message.js'
import { useConfirm } from '@/hooks/useConfirm.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}
// 新增弹窗
const addDialog = ref()
const rechargeDialog = ref()
const accountDeductionDialog = ref()
const sealUserDialog = ref()
// 新增
const setAddOrEditPage = () => {
  addDialog.value.showDialog()
}
// 充值
const recharge = () => {
  rechargeDialog.value.showDialog()
}
// 扣除账户
const accountDeduction = () => {
  accountDeductionDialog.value.showDialog()
}
// 清空
const emptyBackpack = (row) => {
  useConfirm({
    api: () => deleteApi({ id: row.id }),
    tip: `背包总价值${888888}, 是否清空该用户背包礼物？`,
    message: '清空成功',
    title: '清空背包',
  })
    .then(() => {
      // changeCurrent(1)
    })
    .catch(() => {})
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
