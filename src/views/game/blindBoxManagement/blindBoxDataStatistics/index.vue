<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in blindBoxList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <MyTagCard :data="poolCardList" :xl="6" />
      <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" noHeight :dataCallback="dataCallback">
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary">刷新</el-button>
          <el-button type="primary">导出</el-button>
        </template>
      </MyProTable>
    </el-card>
  </div>
</template>

<script setup name="BlindBoxCurrentPool">
import { columns, blindBoxList, poolCardList } from './constants.js'
import { getListApi } from '@/api/system/param.js'
import { useTime } from '@/hooks/useTime.js'
import { ref } from 'vue'
const activeName = ref('1')
// tab栏切换
const activeBlindBox = ref('铜盲盒')
const handleClick = (e) => {
  activeBlindBox.value = e.props.label
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
