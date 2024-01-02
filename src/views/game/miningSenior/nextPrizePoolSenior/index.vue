<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in poolList" :key="index" :label="item.name" :name="item.id" />
      </el-tabs>
      <div class="flex gap-6 flex-wrap flex-shrink-0 mb-4">
        <el-card shadow="always">{{ activePool }}</el-card>
        <el-card shadow="always">剩余礼物数量： {{ giftSum }}</el-card>
        <el-card shadow="always">剩余礼物总金额： {{ total }}</el-card>
        <el-card shadow="always">
          开放奖池：
          <el-switch
            v-model="isOpenNew"
            class="!h-[20px]"
            :active-value="1"
            :inactive-value="0"
            @change="changePoolState"
          />
        </el-card>
      </div>
      <MyProTable
        v-if="initParam.type"
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getList"
        :deleteApi="deleteNextApi"
        :deleteBatchApi="batchNextDeleteApi"
        :otherHeight="140"
        :initParam="initParam"
        :dataCallback="dataCallback"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
          <el-button type="primary" plain @click="editBatch">一键修改</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit :id="activeName" ref="addOrEdit" :type="initParam.type" @queryTable="resetList" />
    <!-- 一键修改-->
    <OneClickEditing ref="oneClickEditing" :nextConfigId="initParam.nextConfigId" @queryTable="resetList" />
  </div>
</template>

<script setup name="NextPrizePool">
import { columns } from './constants.js'
import { getNextTypeListApi } from '@/api/game/nextPrizePool.js'
import { switchNextApi } from '@/api/game/superior.js'
import { getListApi, deleteNextApi, batchNextDeleteApi, getListStatApi } from '@/api/game/nextCurrentAwardPool.js'

import { reactive, ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
import OneClickEditing from '../currentAwardPoolSenior/components/OneClickEditing.vue'
const initParam = reactive({
  type: null,
  nextConfigId: null,
})

// 初始获取列表数据
const getList = (request) => {
  return getListApi(request)
}

// 获取奖池类型列表
const isOpenNew = ref()
const activeName = ref()
const poolList = ref([])
const gitJackpotList = async () => {
  const { data } = await getNextTypeListApi()
  poolList.value = data
  newParams.type = data[0].type
  newParams.id = data[0].id
  isOpenNew.value = data[0].isOpen
  params.nextConfigId = data[0].id
  params.type = data[0].type
  initParam.type = data[0].type
  initParam.nextConfigId = data[0].id
  activeName.value = data[0].id

  gitStatList(params)

  // myProTableRef.value.changeCurrent(1)
}
gitJackpotList()

// 获取奖池列表数据
const giftSum = ref()
const total = ref()
const params = reactive({
  type: '',
  nextConfigId: '',
})
const gitStatList = async (params) => {
  const { data } = await getListStatApi(params)
  giftSum.value = data.giftNumber
  total.value = data.total
}

// tab栏切换
const activePool = ref('初级单连奖池')
const handleClick = (e) => {
  const newPool = poolList.value.find((item) => {
    return item.id === e.props.name
  })
  initParam.type = newPool.type
  activeName.value = e.props.name
  params.type = newPool.type
  isOpenNew.value = newPool.isOpen
  params.nextConfigId = e.props.name
  initParam.nextConfigId = e.props.name

  newParams.type = newPool.type
  newParams.id = e.props.name

  activePool.value = e.props.label
  gitStatList(params)

  // initParam.activeName = e.props.name
  // activePool.value = e.props.label
  myProTableRef.value.changeCurrent(1)
}

// 奖池开关
// const openPool = ref(true)
const newParams = reactive({ id: '', type: '', isOpen: '' })

const changePoolState = async (val) => {
  newParams.isOpen = val
  if (newParams.id) {
    await switchNextApi(newParams)
  }
}
const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
}
// 编辑弹窗
const addOrEdit = ref()
const setAddAndEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}
// 一键修改弹窗
const oneClickEditing = ref()
function editBatch() {
  oneClickEditing.value.showDialog(initParam.type)
}
</script>

<style scoped></style>
