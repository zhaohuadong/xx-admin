<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <el-tab-pane label="全部" :name="0">
          <MyProTable
            ref="myAllRef"
            :columns="columns"
            :requestApi="getAll"
            :selection="false"
            :exportApi="exportList"
            :otherHeight="55"
          ></MyProTable>
        </el-tab-pane>
        <el-tab-pane label="余额" :name="1">
          <MyProTable
            ref="myCoinRef"
            :columns="columns"
            :requestApi="getCoin"
            :exportApi="exportCoin"
            :selection="false"
            :otherHeight="55"
          ></MyProTable>
        </el-tab-pane>
        <el-tab-pane label="收益" :name="2">
          <MyProTable
            ref="myDiamondRef"
            :columns="columns"
            :requestApi="getDiamond"
            :exportApi="exportDiamond"
            :selection="false"
            :otherHeight="55"
          ></MyProTable>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script setup name="UserPayAndIncomeLog">
import { columns } from './constants'
// 修改对应api路径
// import { getListApi } from '@/api/system/param.js'
import {
  getDiamondApi,
  getCoinApi,
  exportDiamondApi,
  exportCoinApi,
  getAllApi,
  exportAllApi,
} from '@/api/user/capital.js'

const myAllRef = ref(null)
const myCoinRef = ref(null)
const myDiamondRef = ref(null)
// 此处可以放初始请求参数
const initParam = reactive({
  type: 0,
})
// tab栏切换
const changeTab = (tab) => {
  // initParam.type = tab
  if (tab === 0) myAllRef.value.changeCurrent(1)
  if (tab === 1) myCoinRef.value.changeCurrent(1)
  if (tab === 2) myDiamondRef.value.changeCurrent(1)
}

// 时间筛选
const exportDate = ref()
const getAll = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.happenedTime?.[0] ?? ''
  newParams.endTime = newParams.happenedTime?.[1] ?? ''
  delete newParams.happenedTime
  exportDate.value = newParams
  return getAllApi(newParams)
}

// 导出
const exportList = (params) => {
  if (exportDate.value.startTime) {
    return exportAllApi(exportDate.value)
  } else {
    return exportAllApi(params)
  }
}

// 时间筛选
const exportCoinDate = ref()
const getCoin = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.happenedTime?.[0] ?? ''
  newParams.endTime = newParams.happenedTime?.[1] ?? ''
  delete newParams.happenedTime
  exportCoinDate.value = newParams
  return getCoinApi(newParams)
}

// 导出
const exportCoin = (params) => {
  if (exportCoinDate.value.startTime) {
    return exportCoinApi(exportCoinDate.value)
  } else {
    return exportCoinApi(params)
  }
}

// 时间筛选
const exportDiamondDate = ref()
const getDiamond = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.happenedTime?.[0] ?? ''
  newParams.endTime = newParams.happenedTime?.[1] ?? ''
  delete newParams.happenedTime
  exportDiamondDate.value = newParams
  return getDiamondApi(newParams)
}

// 导出
const exportDiamond = (params) => {
  if (exportDiamondDate.value.startTime) {
    return exportDiamondApi(exportDiamondDate.value)
  } else {
    return exportDiamondApi(params)
  }
}
</script>

<style lang="scss" scoped></style>
