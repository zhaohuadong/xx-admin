<template>
  <div class="app-container">
    <el-card>
      <MyTagCard :data="poolCardList" :xl="6" />
      <el-tabs v-model="initParam.activeProfitLoss" @tab-click="handleClickProfitLoss">
        <el-tab-pane v-for="(item, index) in profitLossList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getList"
        :initParam="initParam"
        noHeight
        :dataCallback="dataCallback"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary">导出</el-button>
        </template>
      </MyProTable>
    </el-card>
  </div>
</template>

<script setup name="BlindBoxCurrentPool">
import { poolCardList, profitLossList, columns } from './constants.js'
import { getListApi } from '@/api/system/param.js'
import { reactive, ref } from 'vue'
import { useTime } from '@/hooks/useTime.js'
const myProTableRef = ref(null)

const initParam = reactive({
  activeName: '1',
  activeProfitLoss: '1',
})
// tab栏切换
const handleClickProfitLoss = (e) => {
  initParam.activeProfitLoss = e.props.name
  myProTableRef.value.changeCurrent(1)
}

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    item.status = `${item.status}`
    return item
  })
  return result
}
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.timeType !== '自定义' ? useTime(params.timeType)[0] : newParams.selectTime?.[0] ?? ''
  newParams.endTime = newParams.timeType !== '自定义' ? useTime(params.timeType)[1] : newParams.selectTime?.[1] ?? ''
  delete newParams.timeType
  delete newParams.selectTime
  return getListApi(newParams)
}
</script>

<style scoped></style>
