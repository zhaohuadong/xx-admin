<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="gitList"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <!--表格操作-->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddAndEditPage(row)">编辑</el-button>
        <el-button link type="primary" @click="setGiveThemePage(row)">赠送</el-button>
      </template>
      <!-- 价格 -->
      <template #priceGap="{ row }">
        {{ setPrice(row.priceGap) }}
      </template>
    </MyProTable>
    <!--赠送主题弹窗-->
    <GiveTheme ref="giveTheme" @queryTable="resetList" />
    <!--新增和编辑弹窗-->
    <AddAndEditVue ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>
<script setup name="RoomTheme">
import GiveTheme from './components/giveTheme.vue'
import AddAndEditVue from './components/addAndEdit.vue'
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/room/bg.js'

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

// 处理价格展示
const setPrice = (row) => {
  const newMap = row.map((item) => {
    if (item.days >= 99999999) {
      return '免费'
    } else {
      return item.days + '天' + item.price
    }
  })
  return newMap.join(',')
}

// 处理时间筛选请求字段
const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = params.addDate?.[0] ?? ''
  newParams.endTime = params.addDate?.[1] ?? ''
  delete newParams.addDate
  return getListApi(newParams)
}
// 新增和编辑弹窗
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}

// 赠送主题弹窗
const giveTheme = ref()
const setGiveThemePage = (params) => {
  giveTheme.value.showDialog(params)
}
</script>
