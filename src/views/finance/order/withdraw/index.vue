<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @tab-change="handleClick">
        <el-tab-pane label="支付宝提现" name="zfb" />
      </el-tabs>
      <MyProTable ref="myProTableRef" otherHeight="55" :columns="columns" :exportApi="exportList" :requestApi="getList">
        <template #state="{ row }">
          <el-tag>{{ row.id }}</el-tag>
        </template>
        <template #state2="{ row }">
          <el-tag>{{ row.id }}</el-tag>
        </template>
        <template #tableHeader="row">
          <el-button type="primary" plain :disabled="!row.isSelected" @click="consentBatch(row.selectedListIds)">
            批量同意
          </el-button>
          <el-button type="danger" plain :disabled="!row.isSelected" @click="refuseBatch(row.selectedListIds)">
            批量拒绝
          </el-button>
        </template>
        <template #action="{ row }">
          <el-button type="primary" :disabled="row.platformStatus !== 1" link @click="consent(row.id)">同意</el-button>
          <el-button type="danger" :disabled="row.platformStatus !== 1" link @click="refuse(row.id)">拒绝</el-button>
        </template>
      </MyProTable>
    </el-card>
    <refuseDialog ref="refuseDialogRef" @queryTable="resetList" />
  </div>
</template>
<script setup name="Withdraw">
import { columns } from './constants'
import { getListApi, oneAgree, someAgree, exportWithdrawUser } from '@/api/finance/withdraw.js'
import { useConfirm } from '@/hooks/useConfirm.js'
import refuseDialog from './components/refuseDialog.vue'
const activeName = ref('zfb')
const myProTableRef = ref(null)
const refuseDialogRef = ref(null)
// tab栏切换
const handleClick = (tab) => {
  console.log(tab.props)
}

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.applyStartDate = newParams.addTime?.[0] ?? ''
  newParams.applyEndDate = newParams.addTime?.[1] ?? ''
  delete newParams.addTime
  newParams.auditStartTime = newParams.auditTime?.[0] ?? ''
  newParams.auditEndTime = newParams.auditTime?.[1] ?? ''
  delete newParams.auditTime
  newParams.payStartTime = newParams.payTime?.[0] ?? ''
  newParams.payEndTime = newParams.payTime?.[1] ?? ''
  delete newParams.payTime
  newParams.callbackStartTime = newParams.callbackTime?.[0] ?? ''
  newParams.callbackEndTime = newParams.callbackTime?.[1] ?? ''
  delete newParams.callbackTime
  exportParams.value = newParams
  return getListApi(newParams)
}

// 同意弹窗
const consent = (id) => {
  useConfirm({
    api: () => oneAgree(id),
    tip: '确认通过这条提现申请吗？',
    message: '通过成功',
    title: '审核同意',
  }).then(() => {
    myProTableRef.value.changeCurrent(1)
  })
}
// 拒绝弹窗
const refuse = (id) => {
  refuseDialogRef.value.showDialog({ id })
}
// 批量同意
const consentBatch = (ids) => {
  useConfirm({
    api: () => someAgree(ids),
    tip: `批量操作${ids.length}条，确认通过这些提现申请吗？`,
    message: '通过成功',
    title: '批量审核同意',
  }).then(() => {
    myProTableRef.value.changeCurrent(1)
  })
}
// 批量拒绝
const refuseBatch = (ids) => {
  refuseDialogRef.value.showDialog(ids, '批量审核拒绝')
}

const resetList = () => {
  myProTableRef.value.reset()
}

// 导出
const exportParams = ref()
const exportList = (params) => {
  if (
    exportParams.value.applyStartDate ||
    exportParams.value.auditStartTime ||
    exportParams.value.callbackStartTime ||
    exportParams.value.payStartTime
  ) {
    return exportWithdrawUser(exportParams.value)
  } else {
    return exportWithdrawUser(params)
  }
}
</script>
