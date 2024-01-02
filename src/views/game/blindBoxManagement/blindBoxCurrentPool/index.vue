<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-click="handleClick">
        <el-tab-pane v-for="(item, index) in blindBoxList" :key="index" :label="item.label" :name="item.value" />
      </el-tabs>
      <div class="flex gap-6 flex-wrap flex-shrink-0 mb-4">
        <el-card shadow="always">{{ activeBlindBox }}</el-card>
        <el-card shadow="always">剩余礼物数量： {{ giftSum }}</el-card>
        <el-card shadow="always">剩余礼物总金额： {{ total }}</el-card>
      </div>
      <MyProTable
        ref="myProTableRef"
        :columns="columns"
        :requestApi="getListApi"
        :deleteApi="deleteList"
        :deleteBatchApi="deleteBatchList"
        :otherHeight="140"
        :initParam="initParam"
        :dataCallback="dataCallback"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="setReplaceDialogPage()">替换新奖池</el-button>
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
    <!-- 替换新奖池-->
    <ReplaceDialog ref="replaceDialog" :giftSum="giftSum" :total="total" @queryTable="resetList" />
    <!-- 一键修改-->
    <OneClickEditing
      ref="oneClickEditing"
      :getListApi="getListApi"
      :oneEdit="batchEditApi"
      :url="'giftUrl'"
      :otherName="'nextJackpot'"
      :list="true"
      @queryTable="resetList"
    />
  </div>
</template>

<script setup name="BlindBoxCurrentPool">
import { columns, blindBoxList } from './constants.js'
import { getListApi, deleteApi, batchDeleteApi, getTotalListApi, batchEditApi } from '@/api/game/blindbox.js'
import { reactive, ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
import ReplaceDialog from './components/replaceDialog.vue'
// import OneClickEditing from '@/views/game/components/OneClickEditing'
import OneClickEditing from '@/views/game/components/OneClickEditingComponents/index.vue'

const initParam = reactive({
  type: 1,
  nextJackpot: 0,
})
// tab栏切换
const activeBlindBox = ref('铜盲盒')
const handleClick = (e) => {
  initParam.type = +e.props.name
  activeBlindBox.value = e.props.label
  gitStatList(e.props.name)
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

// 获取奖池列表数据
const giftSum = ref('')
const total = ref('')
const gitStatList = async (params) => {
  const { data } = await getTotalListApi({ type: params, nextJackpot: 0 })
  giftSum.value = data.giftNumber || ''
  total.value = data.total || ''
}
gitStatList(initParam.type)

// 编辑弹窗
const addOrEdit = ref()
const setAddAndEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}

// 替换新奖池弹窗
const replaceDialog = ref(null)
const setReplaceDialogPage = (params) => {
  replaceDialog.value.showDialog(initParam.type)
}

// 一键修改弹窗
const oneClickEditing = ref()
function editBatch() {
  oneClickEditing.value.showDialog(initParam.type, initParam.nextJackpot)
}

// 单项删除
const deleteList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.type = initParam.type
  return deleteApi(newParams)
}

// 批量删除
const deleteBatchList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  return batchDeleteApi(newParams, initParam.type)
}
</script>

<style scoped></style>
