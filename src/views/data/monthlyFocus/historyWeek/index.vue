<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <el-tab-pane label="人气榜" name="1" />
        <el-tab-pane label="富豪榜" name="2" />
        <el-tab-pane label="房间榜" name="3" />
        <MyProTable
          :key="initParam.type"
          ref="myProTableRef"
          :otherHeight="55"
          :columns="upColumns"
          :requestApi="getList"
        >
          <!-- 表格操作 -->
          <template #action="{ row }">
            <el-button link type="primary" @click="goToDetails(row)">详情</el-button>
          </template>
        </MyProTable>
      </el-tabs>
    </el-card>
  </div>
</template>
<script setup name="UserListDetails">
import { columns, columns1, columns2 } from './constants'
import { getListApi } from '@/api/system/message.js'
const router = useRouter()

const initParam = reactive({
  type: '1',
})

const upColumns = ref(columns)

const myProTableRef = ref(null)
// tab栏切换
const changeTab = (tab) => {
  switch (tab) {
    case '1':
      upColumns.value = columns
      break
    case '2':
      upColumns.value = columns1
      break
    case '3':
      upColumns.value = columns2
      break
  }
  initParam.type = tab
  myProTableRef.value.changeCurrent(1)
}

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}

const goToDetails = (row) => {
  router.push({ name: 'UserListDetails', query: { id: row.id } })
}
</script>
