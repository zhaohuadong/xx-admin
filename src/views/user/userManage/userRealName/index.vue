<template>
  <div class="app-container">
    <!-- <el-tabs v-model="initParam.type" lazy="true" @tab-change="changeTab">
        <el-tab-pane label="人工审核" name="1" />
        <el-tab-pane label="支付宝快捷" name="2" />
      </el-tabs> -->

    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="gitList" :selection="false">
      <!-- 表格操作 -->
      <template #action="{ row }">
        <template v-if="row.state !== 3">
          <el-button v-if="row.state === 0" type="primary" link @click="showAddOrEditPage(row)">审核</el-button>
          <template v-else>
            <el-button v-if="row.state === 1 || 2" type="primary" link @click="showRevokeApproval(row)">
              撤销审核
            </el-button>
          </template>
          <el-button v-if="row.state !== 4" type="primary" link @click="showRealBlockade(row)">实名封禁</el-button>
          <el-button v-else type="primary" link @click="showRealUnseal(row)">实名解封</el-button>
        </template>
      </template>
    </MyProTable>

    <!-- 审核 -->
    <Examine ref="examine" @queryTable="resetList" />
    <!-- 实名封禁 -->
    <realBlockade ref="realBlockadeRef" @queryTable="resetList" />
    <!-- 实名解封 -->
    <realUnseal ref="realUnsealRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="userRealName">
import Examine from './components/examine.vue'
import realBlockade from './components/realBlockade.vue'
import realUnseal from './components/realUnseal.vue'
import { useConfirm } from '@/hooks/useConfirm.js'
import { columns } from './constants'
import { useRoute } from 'vue-router'
// 修改对应api路径
import { getListApi, revokeAuthApi } from '@/api/user/realNameAuth.js'
const route = useRoute()

const gitList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  // 监听路由信息
  watch(
    () => route.query.certNo,
    (val) => {
      if (val) {
        newParams.certNo = val
        // initParam.certNo = val
        // myProTableRef.value.reset()
        // myProTableRef.value.changeCurrent(1)
      }
    },
    { immediate: true }
  )
  return getListApi(newParams)
}

// tab栏切换
// const changeTab = (tab) => {
//   initParam.type = tab
//   myProTableRef.value.changeCurrent(1)
// }

const myProTableRef = ref(null)
// 审核弹窗
const examine = ref()
const showAddOrEditPage = (params) => {
  examine.value.showDialog(params)
}
// 撤销审核弹窗
const showRevokeApproval = (row) => {
  useConfirm({
    api: () => revokeAuthApi({ id: row.id }),
    tip: '此操作不可退回，确定撤销该实名审核嘛？',
    message: '撤销成功',
  }).then(() => {
    myProTableRef.value.reset()
  })
}
// 实名封禁弹窗
const realBlockadeRef = ref()
const showRealBlockade = (params) => {
  realBlockadeRef.value.showDialog(params)
}
// 实名解封弹窗
const realUnsealRef = ref()
const showRealUnseal = (params) => {
  realUnsealRef.value.showDialog(params)
}
// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>

<style lang="scss" scoped></style>
