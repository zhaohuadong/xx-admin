<template>
  <div class="app-container">
    <div class="flex gap-6 flex-shrink-0 investmentStork items-start">
      <div class="flex flex-wrap gap-4">
        <el-card shadow="always">
          <div class="flex items-center border p-2 rounded-lg mb-4 flex-shrink-0 flex-wrap">
            理论概率
            <span class="text-[red] ml-2 mr-2 font-bold">{{ startList?.theory?.times }}</span>
            次=
            <span class="text-[red] ml-2 mr-2 font-bold">{{ startList?.theory?.inCoin }}</span>
            金币
            <div class="w-10"></div>
            产出：
            <span class="text-[red] mr-2 font-bold">{{ startList?.theory?.outCoin }}</span>
            金币
            <div class="w-10"></div>
            产出投入比：
            <span class="text-[red] mr-2 font-bold">{{ startList?.theory?.ratio }}</span>
          </div>
          <div class="flex items-center border p-2 rounded-lg mb-4 flex-shrink-0 flex-wrap">
            加系统库存投入（
            <span class="text-[red] ml-2 mr-2 font-bold">
              {{ startList?.theory?.inCoin + '+' + startList?.all?.inCoin }}
            </span>
            ）金币
            <div class="w-10"></div>
            产出：
            <span class="text-[red] mr-2 font-bold">
              {{ startList?.theory?.outCoin + '+' + startList?.all?.outCoin }}
            </span>
            金币
            <div class="w-10"></div>
            产出投入比：
            <span class="text-[red] mr-2 font-bold">{{ startList?.all?.ratio }}</span>
          </div>
          <div class="flex items-center border p-2 rounded-lg mb-4 flex-shrink-0 flex-wrap">
            实际概率
            <span class="text-[red] ml-2 mr-2 font-bold">{{ startList?.current?.times }}</span>
            次=
            <span class="text-[red] ml-2 mr-2 font-bold">{{ startList?.current?.inCoin }}</span>
            金币
            <div class="w-10"></div>
            产出：
            <span class="text-[red] mr-2 font-bold">{{ startList?.current?.outCoin }}</span>
            金币
            <div class="w-10"></div>
            产出投入比：
            <span class="text-[red] mr-2 font-bold">{{ startList?.current?.ratio }}</span>
          </div>
        </el-card>
        <el-card shadow="always">
          <div class="mb-2">
            库存产出投入比最大上限：
            <span class="font-bold text-lg">{{ startList?.ratioConfig?.maxRatio }}</span>
          </div>
          <div class="mb-2">
            库存产出投入比最低下限：
            <span class="font-bold text-lg">{{ startList?.ratioConfig?.minRatio }}</span>
          </div>
          <div class="mb-2">
            个人产出投入比最大上限：
            <span class="font-bold text-lg">{{ startList?.ratioConfig?.maxSelfRatio }}</span>
          </div>
          <div class="mb-2">
            个人产出投入比最低下限：
            <span class="font-bold text-lg">{{ startList?.ratioConfig?.minSelfRatio }}</span>
          </div>
          <el-button type="primary" class="float-right mb-4" @click="doEditConfigure()">修改配置</el-button>
        </el-card>
      </div>
    </div>

    <MyProTable
      ref="myProTableRef"
      class="mt-4"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
      :initParam="initParam"
      :otherHeight="220"
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

    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" :type="initParam.type" @queryTable="resetList" />
    <!-- 一键修改-->
    <OneClickEditing
      ref="oneClickEditing"
      :getListApi="getListApi"
      :oneEdit="oneEdit"
      :url="'url'"
      :list="true"
      @queryTable="resetList"
    />
    <!-- 修改配置-->
    <EditConfigure ref="editConfigure" @queryTable="resetList" />
  </div>
</template>

<script setup name="PoolConfiguration">
import { columns } from './constants.js'
import { getListApi, deleteApi, batchDeleteApi, oneEdit } from '@/api/game/currentAwardPool.js'

import { getStatApi } from '@/api/game/poolConfiguration.js'
import { ref } from 'vue'
import AddOrEdit from './components/addOrEdit.vue'
import OneClickEditing from '@/views/game/components/OneClickEditingComponents/index.vue'
import EditConfigure from './components/editConfigure.vue'
const myProTableRef = ref(null)
const initParam = reactive({
  type: 30,
})

// 获取产出比数据
const startList = ref({})
const getStatList = async () => {
  const { data } = await getStatApi()
  startList.value = data
}
getStatList()

// 此处可以自定义表格返回值
const dataCallback = (result) => {
  result.rows = result.data.map((item) => {
    return item
  })
  return result
}
const resetList = () => {
  myProTableRef.value.reset()
  getStatList()
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

// 修改配置
const editConfigure = ref()
const doEditConfigure = () => {
  editConfigure.value.showDialog()
}
</script>

<style scoped lang="scss"></style>
