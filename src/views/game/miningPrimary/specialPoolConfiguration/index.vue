<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in poolList" :key="index" :label="item.name" :name="item.id" />
      </el-tabs>
      <div class="flex gap-6 flex-wrap flex-shrink-0 mb-4">
        <el-card shadow="always">{{ activePool }}</el-card>
        <el-card shadow="always">剩余礼物数量： {{ giftNumber }}</el-card>
        <el-card shadow="always">剩余礼物总金额： {{ total }}</el-card>
      </div>
      <MyProTable
        v-if="initParam.type"
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        :deleteBatchApi="deleteBatch"
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
    <AddOrEdit ref="addOrEdit" :type="initParam.type" @queryTable="resetList" />
    <!-- 一键修改-->
    <OneClickEditing ref="oneClickEditing" @queryTable="resetList" />
  </div>
</template>

<script setup name="SpecialPoolConfiguration">
import { columns } from './constants.js'
import {
  getListApi,
  deleteApi,
  batchDeleteApi,
  getSpecialListApi,
  getPersonTotalApi,
} from '@/api/game/specialPoolConfiguration.js'
import { reactive, ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
import OneClickEditing from './components/OneClickEditing.vue'
const initParam = reactive({
  type: null,
})

// 获取特殊个人奖池分类列表
const poolList = ref([])
const gitJackpotList = async () => {
  const { data } = await getSpecialListApi()
  poolList.value = data
  initParam.type = data[0].id
  gitToatlList(initParam)
}
gitJackpotList()

// 个人特殊奖池列表统计
const giftNumber = ref()
const total = ref()
const gitToatlList = async (params) => {
  const { data } = await getPersonTotalApi(params)
  giftNumber.value = data.giftNumber
  total.value = data.total
}

// tab栏切换
const activePool = ref('初级单连奖池')
const handleClick = (e) => {
  initParam.type = e.props.name
  activePool.value = e.props.label
  gitToatlList(initParam)
  myProTableRef.value.changeCurrent(1)
}

const myProTableRef = ref(null)

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.data.map((item) => {
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

// 批量删除
const deleteBatch = (params) => {
  return batchDeleteApi(initParam.type, params)
}
</script>

<style scoped></style>
