<template>
  <div class="app-container">
    <div class="header">
      <!-- 刷新数据按钮 -->
      <div class="btn">
        <el-button type="primary" @click="gitTotal">刷新数据</el-button>
      </div>
      <!-- 展示卡片 -->
      <div class="show">
        <el-card v-for="(item, index) in data" :key="index">
          <div class="info">
            <div class="title">{{ item.name }}</div>
            <div class="desc">{{ item.key }}</div>
          </div>
        </el-card>
      </div>
    </div>
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList" :selection="false" otherHeight="130">
      <template #charmNum="{ row }">
        <div v-if="row.charmNumFrozen === 0">{{ row.charmNum }}</div>
        <div v-else>{{ '已冻结' }}</div>
      </template>
      <template #coin="{ row }">
        <div v-if="row.coinFrozen === 0">{{ row.coin }}</div>
        <div v-else>{{ '已冻结' }}</div>
      </template>
    </MyProTable>
  </div>
</template>

<script setup name="UserDataList">
import { columns } from './constants'
// 修改对应api路径
import { getListApi, getTotalListApi } from '@/api/user/userDataList.js'

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.lastLoginDate?.[0] ?? ''
  newParams.endTime = newParams.lastLoginDate?.[1] ?? ''
  delete newParams.lastLoginDate
  return getListApi(newParams)
}

// 用户数据统计
const gitTotalList = async () => {
  const { data: ref } = await getTotalListApi()
  data.value[0].key = ref.giftBagTotal
  data.value[1].key = ref.charmNumTotal
  data.value[2].key = ref.coinTotal
  data.value[3].key = ref.coinFrozenTotal
  data.value[4].key = ref.charmNumFrozenTotal
}
gitTotalList()

// 刷新数据
const gitTotal = () => {
  gitTotalList()
}

// 看板数据
const data = ref([
  {
    name: '背包礼物剩余总价值',
    key: '999.999.00',
  },
  {
    name: '平台用户收益',
    key: '999.999.00',
  },
  {
    name: '平台用户余额',
    key: '999.999.00',
  },
  {
    name: '平台用户冻结余额',
    key: '999.999.00',
  },
  {
    name: '平台用户冻结收益',
    key: '999.999.00',
  },
])
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 10px;
  position: relative;
  :deep(.el-card__body) {
    padding: 20px 7px;
  }
  .content {
    margin-top: 40px;
  }
  .btn {
    position: relative;
    height: 50px;
    .el-button {
      position: absolute;
      right: 12px;
      top: 4px;
    }
  }
  .show {
    display: flex;
    .el-card {
      flex: 1;
      margin: 0 2px;
      .info {
        text-align: center;
        .title {
          margin-bottom: 20px;
        }
      }
    }
  }
}
</style>
