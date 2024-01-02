<template>
  <div class="app-container">
    <el-card>
      <div>
        <el-tabs v-model="initParam.formatType" @tab-change="changeTab">
          <el-tab-pane label="按天统计" :name="1" />
          <el-tab-pane label="按周统计" :name="3" />
          <el-tab-pane label="按月统计" :name="2" />
        </el-tabs>
      </div>
      <!-- <MySearchBar v-model="formData" :formLabel="formLabel" @queryTable="queryList" /> -->
      <!-- <el-space wrap :fill="true" class="w-full"> -->
      <!-- <div class="flex justify-end">
        <el-button type="primary">导出</el-button>
      </div> -->
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="gitList"
        :dataCallback="dataCallback"
        otherHeight="55"
        :exportApi="exportDate"
        :initParam="initParam"
      >
        <!-- 表格 header 按钮 -->
        <!-- <template #tableHeader>
          <el-button type="primary" @click="exportDate">导出</el-button>
        </template> -->
        <template #action="{ row }">
          <!-- <el-table-column prop="action" label="操作" width="120">
            <template #default="{ row }">
              <el-space spacer="|"> -->
          <router-link
            :to="{
              path: '/room/manage/allRoomFlowInfo',
              query: { id: row.crId, ssId: row.ssId, roomName: row.roomName, date: row.date },
            }"
          >
            <el-button text type="primary">详情</el-button>
          </router-link>
          <!-- </el-space>
            </template>
          </el-table-column> -->
        </template>
      </MyProTable>
      <!-- </el-space> -->
    </el-card>
  </div>
</template>
<script setup name="AllRoomFlow">
import { columns } from './constants'
import { getListApi, exportApi } from '@/api/room/allFlow.js'

const myProTableRef = ref(null)
const initParam = reactive({
  formatType: 1,
})
// tab栏切换
const changeTab = (tab) => {
  initParam.formatType = tab
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

// 处理时间查询参数
const gitList = (params) => {
  const nweParams = JSON.parse(JSON.stringify(params))
  nweParams.startTime = params.date?.[0] || ''
  nweParams.endTime = params.date?.[1] || ''
  delete nweParams.date
  exportParams.value = nweParams
  return getListApi(nweParams)
}

// 导出
const exportParams = ref()
const exportDate = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.formatType = initParam.formatType
  if (exportParams.value.startTime) {
    return exportApi(exportParams.value)
  }
  return exportApi(newParams)
}
</script>
<style lang="scss" scoped></style>
