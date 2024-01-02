<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-full mb-3.5">封禁记录</div>
        <MyReturn :modelValue="{ name: 'UserAccountManage' }">
          <template #action>
            <el-button v-if="+newBanType === 0" type="primary" class="mr-2" @click="setBanUser()">封禁用户</el-button>
            <el-button v-else type="primary" class="mr-2" @click="setUnBanUser()">解封用户</el-button>
          </template>
        </MyReturn>
      </div>
    </el-card>
    <el-card>
      <div class="flex items-center h-20">
        <div class="mr-10">用户编号：{{ userInfo.userCode }}</div>
        <div class="mr-10">用户名：{{ userInfo.nickname }}</div>
        <div class="mr-10">账号状态:{{ +userInfo.disappear === 1 ? '正常' : '已注销' }}</div>
      </div>
      <MyProTable
        class="w-full"
        :columns="banUserTableLabel"
        :requestApi="getList"
        :isShowSearch="false"
        :otherHeight="80"
      >
        <template #frozenTime="{ row }">
          {{ frozenTime(row) }}
        </template>
      </MyProTable>
    </el-card>
    <!--封禁用户-->
    <BanUser ref="banUser" :userId="pageId" @queryBanType="editBantype" />
    <!-- 解封用户 -->
    <UnBanUser ref="unBanUser" :userId="pageId" @queryBanType="editBantype" />
  </div>
</template>
<script setup name="BanRecord">
import { banUserTableLabel } from './constants'
import { getBanRecordListApi, getListApi } from '@/api/user/manager.js'

import BanUser from './components/banUser.vue'
import UnBanUser from './components/unBanUser.vue'
import { useRoute } from 'vue-router'
const route = useRoute() // 获取路由参数
const pageId = ref()
// const banType = ref()
const userInfo = ref()
// const userCode = ref()
// userCode.value = route.query.userCode
userInfo.value = route.query
pageId.value = route.query.id
// banType.value = route.query.banType
// 封禁用户弹
const banUser = ref()
const setBanUser = (params) => {
  banUser.value.showDialog(params)
}
// 解封用户弹窗
const unBanUser = ref()
const setUnBanUser = (params) => {
  unBanUser.value.showDialog(params)
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

// 获取封禁状态
const gitBantype = async () => {
  const { rows } = await getListApi({ userCode: route.query.userCode, pageNum: 1, pageSize: 10 })
  newBanType.value = rows[0].frozen
}
gitBantype()

// 修改封禁状态
const newBanType = ref()
const editBantype = (params) => {
  newBanType.value = params
  console.log(newBanType.value)
}

// 处理获取列表接口
const getList = async (params) => {
  const newParams = params
  newParams.userId = pageId.value
  return await getBanRecordListApi(newParams)
}
</script>
