<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="tableLabel" :requestApi="getListApi">
      <!-- 表格操作 -->
      <template #action="{ row }">
        <router-link :to="{ path: '/user/userManage/userAccountInfo', query: { id: row.userId, type: false } }">
          <el-button type="primary" link>详情</el-button>
        </router-link>
        <router-link :to="{ path: '/user/userManage/userAccountInfo', query: { id: row.userId, type: true } }">
          <el-button type="primary" link>编辑</el-button>
        </router-link>

        <el-dropdown>
          <span class="el-dropdown-link">
            <el-button type="primary" link>更多</el-button>
            <el-icon class="el-icon--right">
              <icon-ep-caret-bottom />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="setRecharge(row)">充值</el-dropdown-item>
              <el-dropdown-item @click="setSendGift(row)">赠送礼物</el-dropdown-item>
              <router-link
                :to="{
                  path: '/user/userManage/banRecord',
                  query: {
                    id: row.userId,

                    nickname: row.nickname,
                    userCode: row.userCode,
                    disappear: row.disappear,
                  },
                }"
              >
                <el-dropdown-item>封禁记录</el-dropdown-item>
              </router-link>
              <el-dropdown-item @click="setFreezeAndThaw(row, true)">冻结账户</el-dropdown-item>
              <el-dropdown-item
                :disabled="!row.coinFrozen && !row.charmNumFrozen"
                @click="setFreezeAndThaw(row, false)"
              >
                解冻账户
              </el-dropdown-item>
              <el-dropdown-item @click="setAliPayLimit(row)">设置支付宝上限</el-dropdown-item>
              <el-dropdown-item @click="setSendExperience(row)">赠送经验</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </template>
    </MyProTable>

    <!--充值-->
    <Recharge ref="recharge" @queryTable="resetList" />
    <!--赠送礼物-->
    <SendGift ref="sendGift" @queryTable="resetList" />
    <!--冻结解冻-->
    <FreezeAndThaw ref="freezeAndThaw" @queryTable="resetList" />
    <!--设置支付宝账号上限-->
    <AliPayLimit ref="aliPayLimit" @queryTable="resetList" />
    <!--赠送经验-->
    <SendExperience ref="sendExperience" @queryTable="resetList" />
  </div>
</template>

<script setup name="UserAccountManage">
import { tableLabel } from './constants'
import { getListApi } from '@/api/user/manager.js'

// import useList from '@/hooks/useList.js'
import Recharge from './components/recharge.vue'
import SendGift from './components/sendGift.vue'

import FreezeAndThaw from './components/freezeAndThaw.vue'
import AliPayLimit from './components/aliPayLimit.vue'
import SendExperience from './components/sendExperience.vue'
const myProTableRef = ref(null)

// 充值弹窗
const recharge = ref()
const setRecharge = (params) => {
  recharge.value.showDialog(params)
}

// 赠送礼物弹窗
const sendGift = ref()
const setSendGift = (params) => {
  sendGift.value.showDialog(params)
}

// 冻结解冻弹窗
const freezeAndThaw = ref()
const setFreezeAndThaw = (params, status) => {
  freezeAndThaw.value.showDialog(params, status)
}
// 支付宝上限弹窗
const aliPayLimit = ref()
const setAliPayLimit = (params) => {
  aliPayLimit.value.showDialog(params)
}
// 赠送经验
const sendExperience = ref()
const setSendExperience = (params) => {
  sendExperience.value.showDialog(params)
}

// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>

<style lang="scss" scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.el-dropdown {
  margin-top: 1.6px;
  .el-icon.el-icon--right {
    transform: translate(-7px, 4px);
  }
}
</style>
