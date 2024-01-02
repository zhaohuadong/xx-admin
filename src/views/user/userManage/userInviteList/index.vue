<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :selection="false"
      :dataCallback="dataCallback"
    >
      <template #other>
        <div class="sum">已累计邀请用户数量：{{ inviteNum }}</div>
      </template>
    </MyProTable>
  </div>
</template>

<script setup name="UserInviteList">
import { columns } from './constants'
// 修改对应api路径
import { getListApi } from '@/api/user/invite.js'
const inviteNum = ref()
// 处理返回数据
const dataCallback = (params) => {
  const { data } = params
  inviteNum.value = data.inviteTotal
  return data.pageResult
}

// 处理请求数据
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = params.registerDate?.[0] ?? ''
  newParams.endTime = params.registerDate?.[1] ?? ''
  delete newParams.registerDate
  return getListApi(newParams)
}
</script>

<style lang="scss" scoped>
.sum {
  margin-top: 3px;
  margin-right: 50px;
}
</style>
