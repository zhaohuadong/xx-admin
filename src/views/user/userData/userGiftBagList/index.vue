<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :dataCallback="dataCallback"
      :isShowSearch="false"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddBag()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button type="primary" link @click="showAddBag(row)">编辑</el-button>
        <el-button type="primary" link @click="showGiftBag(row)">赠送</el-button>
      </template>
      <!-- 礼包内容 -->
      <template #contentList="{ row }">{{ handleContent(row.contentList) }}</template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddBag ref="addBagRef" @queryTable="resetList" />
    <!-- 赠送 -->
    <GiftBag ref="giftBagRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="UserGiftBagList">
import GiftBag from './components/giftBag.vue'
import AddBag from './components/addBag.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi } from '@/api/user/pack.js'

const myProTableRef = ref(null)
// 新增或编辑弹窗
const addBagRef = ref()
const showAddBag = (params) => {
  addBagRef.value.showDialog(params)
}
// 赠送弹窗
const giftBagRef = ref()
const showGiftBag = (params) => {
  giftBagRef.value.showDialog(params)
}
// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
// const content = ref('')
// 处理返回数据
const dataCallback = (result) => {
  return result
}

// 处理内容数据
const handleContent = (params) => {
  if (params) {
    const newParams = params.map((item) => {
      return (item.title ? '  ' + item.title + ' 数量:' : '') + (item.title ? item.number + ',' : '')
    })
    return newParams.join('')
  }
}
</script>

<style lang="scss" scoped></style>
