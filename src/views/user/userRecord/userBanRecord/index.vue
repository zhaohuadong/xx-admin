<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <!-- 账户封禁记录 -->
        <el-tab-pane label="账户封禁记录" name="0"></el-tab-pane>
        <!-- 实名封禁记录 -->
        <el-tab-pane label="实名封禁记录" name="1"></el-tab-pane>
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :key="initParam.type"
        :columns="upColumns"
        :requestApi="gitList"
        :selection="false"
        :otherHeight="55"
        :exportApi="exportList"
      >
        <template #frozenTime="{ row }">
          {{ frozenTime(row) }}
        </template>

        <!-- 表格 header 按钮 -->
        <!-- <template #tableHeader>
          <el-button type="primary" @click="exportList">导出</el-button>
        </template> -->
      </MyProTable>
    </el-card>
  </div>
</template>

<script setup name="UserBanRecord">
import { columns, Columns1 } from './constants'
// 修改对应api路径
import { getUserListApi, getUserIdAuthBanLogApi, exportUserApi, exportRealApi } from '@/api/user/unsealUser.js'
import { getAllListApi } from '@/api/systemManage/sysuser.js'

const myProTableRef = ref(null)

const upColumns = ref(columns)
// 此处可以放初始请求参数
const initParam = reactive({
  type: '0',
})

// 处理时间筛选参数

const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.banStartDate = params.addDate?.[0] ?? ''
  newParams.banEndDate = params.addDate?.[1] ?? ''
  newParams.unsealStartDate = params.lastFrozenTime?.[0] ?? ''
  newParams.unsealEndDate = params.lastFrozenTime?.[1] ?? ''
  delete newParams.lastFrozenTime
  delete newParams.addDate
  if (initParam.type === '0') {
    exportUserParams.value = newParams
    return getUserListApi(newParams)
  } else {
    newParams.banStartDate = params.addDate?.[0] ?? ''
    newParams.banEndDate = params.addDate?.[1] ?? ''
    delete newParams.unsealEndDate
    delete newParams.unsealStartDate
    exportRealParams.value = newParams
    return getUserIdAuthBanLogApi(newParams)
  }
}

// 封禁时长
const frozenTime = (params) => {
  if (params.frozenTimeType === 0) {
    return params.frozenTime + '小时'
  } else if (params.frozenTimeType === 1) {
    return params.frozenTime + '天'
  } else if (params.frozenTimeType === 2) {
    return params.frozenTime + '月'
  } else if (params.frozenTimeType === 3) {
    return '永久'
  }
}

// 获取操作人列表
const getUserList = async () => {
  const { data } = await getAllListApi()
  console.log(data)
  columns[3].enum = data.map((item) => {
    return {
      label: item.userName,
      value: item.sysUserId,
    }
  })
  Columns1[2].enum = data.map((item) => {
    return {
      label: item.userName,
      value: item.sysUserId,
    }
  })
}
getUserList()

// tab栏切换
const changeTab = (tab) => {
  switch (tab) {
    case '0':
      upColumns.value = columns
      break
    case '1':
      upColumns.value = Columns1
      break
  }
  initParam.type = tab
}

// 导出
const exportUserParams = ref()
const exportRealParams = ref()
const exportList = (params) => {
  // const newParams = JSON.parse(JSON.stringify(params))

  if (initParam.type === '0') {
    if (exportUserParams.value.banStartDate || exportUserParams.value.unsealStartDate) {
      return exportUserApi(exportUserParams.value)
    } else {
      return exportUserApi(params)
    }
  } else {
    if (exportRealParams.value.banStartDate) {
      return exportRealApi(exportRealParams.value)
    } else {
      return exportRealApi(params)
    }
  }
}
</script>

<style lang="scss" scoped></style>
