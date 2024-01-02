<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <!-- 个性商城 -->
        <el-tab-pane label="个性商城" :name="1"></el-tab-pane>
        <!-- 贵族商城 -->
        <el-tab-pane label="贵族商城" :name="2"></el-tab-pane>
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :key="initParam.type"
        :columns="upColumns"
        :requestApi="geiList"
        :deleteApi="deleteList"
        :deleteBatchApi="batchDeleteApi"
        :initParam="initParam"
        otherHeight="55"
      >
        <template #price="{ row }">{{ row.skuListArray[0].price }}</template>
        <!-- <template #commodityState="{ row }">
          <el-tag :type="row.commodityState === 1 ? '' : 'danger'">{{ row.status === 1 ? '上架' : '下架' }}</el-tag>
        </template> -->

        <!-- <template #categoryName></template> -->

        <template #tableHeader>
          <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
        </template>
        <template #action="{ row }">
          <el-button text type="primary" link @click="sendGiveGift(row)">赠送</el-button>
          <el-button text type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
    <GiveGift ref="giveGift" @queryTable="resetList" />
    <GiveNobleGift ref="giveNobleGift" @queryTable="resetList" />
    <AddNobleAndEdit ref="addNobleAndEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="SkuControl">
import { columns, columns1 } from './constants'
import AddAndEdit from './componens/addAndEdit.vue'
import GiveGift from './componens/giveGift.vue'
import GiveNobleGift from './componens/giveNobleGift.vue'
import AddNobleAndEdit from './componens/addNobleAndEdit.vue'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/product.js'

const myProTableRef = ref(null)

// 新增/编辑
const addAndEdit = ref()
const addNobleAndEdit = ref()
const setAddAndEditPage = (params) => {
  if (initParam.type === 1) {
    addAndEdit.value.showDialog(params)
  } else {
    addNobleAndEdit.value.showDialog(params)
  }
}
// 赠送
const giveGift = ref()
const giveNobleGift = ref()
const sendGiveGift = (params) => {
  if (initParam.type === 1) {
    console.log(params)
    giveGift.value.showDialog(params)
  } else {
    giveNobleGift.value.showDialog(params)
  }
}

const upColumns = ref(columns)
// 此处可以放初始请求参数
const initParam = reactive({
  type: 1,
})
// tab栏切换
const changeTab = (tab) => {
  switch (tab) {
    case 1:
      upColumns.value = columns
      break
    case 2:
      upColumns.value = columns1
      break
  }
  initParam.type = tab
  // myProTableRef.value.changeCurrent(1)
}

// 刷新表单
const resetList = () => {
  myProTableRef.value.reset()
}
// 删除刷新表单
const deleteList = async (params) => {
  await deleteApi(params)
  myProTableRef.value.reset(1)
}
// 筛选时间处理
const geiList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = params.addDate?.[0] || ''
  newParams.endDate = params.addDate?.[1] || ''
  delete newParams.addDate
  return getListApi(newParams)
}
</script>
