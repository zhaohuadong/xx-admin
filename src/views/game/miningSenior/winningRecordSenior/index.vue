<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="column"
      :requestApi="getList"
      :otherHeight="0"
      :dataCallback="dataCallback"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary">刷新</el-button>
      </template>
    </MyProTable>
  </div>
</template>

<script setup name="WinningRecord">
import { column } from './constants.js'
import { getListApi } from '@/api/game/nextLottery.js'
import { ref } from 'vue'
import { getListApi as getGiftListApi } from '@/api/gift/giftList.js'

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.createTime?.[0] ?? ''
  newParams.endTime = newParams.createTime?.[1] ?? ''
  delete newParams.createTime
  return getListApi(newParams)
}

// 获取礼物列表
const gitGiftList = async (params) => {
  const { rows } = await getGiftListApi()
  column[4].enum = rows.map((item) => {
    return {
      label: item.giftName,
      value: item.giftId,
    }
  })
}
gitGiftList()
</script>

<style scoped></style>
