<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      selectionKey="giftId"
      :requestApi="getList"
      :deleteApi="deleteApi"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
      </template>

      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button link type="primary" @click="setAddOrEditPage(row)">编辑</el-button>
        <el-button v-if="row.status === 1" link type="primary" @click="setUpOrDown(row, 2)">上架</el-button>
        <el-button v-else link type="primary" @click="setUpOrDown(row, 1)">下架</el-button>
      </template>

      <!-- 动态图片 -->
      <template #url2="{ row }">
        <el-image
          v-if="/\.(jpg|jpeg|png|gif)$/.test(row.url2)"
          :src="row.url2"
          :preview-src-list="[row.url2]"
          fit="fill"
          :preview-teleported="true"
        ></el-image>
        <video v-if="/\.(mp4)$/.test(row.url2)" :src="row.url2" autoplay loop muted :controls="true"></video>
      </template>
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEdit" @queryTable="resetList" />
    <!-- 发送消息弹窗 -->
    <!-- <SendMessage ref="sendMessage" @queryTable="resetList" /> -->
  </div>
</template>
<script setup name="giftList">
import AddOrEdit from './components/addOrEdit.vue'
// import SendMessage from './components/sendMessage.vue'
import { columns } from './constants'
import { getListApi, deleteApi, upAndLowShelvesApi } from '@/api/gift/giftList.js'
import { useConfirm } from '@/hooks/useConfirm.js'

const myProTableRef = ref(null)
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 新增和编辑弹窗
const addOrEdit = ref()
const setAddOrEditPage = (params) => {
  addOrEdit.value.showDialog(params)
}

// 上下架
const setUpOrDown = (params, type) => {
  const confirmTitle = params.status === 1 ? '上架' : '下架'
  const confirmText = params.status === 1 ? '确认上架该礼物?' : '确认下架该礼物?'
  useConfirm({
    api: () => upAndLowShelvesApi({ ids: [params.giftId], type }),
    tip: confirmText,
    message: `${confirmTitle}成功`,
    title: confirmTitle,
    fn: resetList,
  })
}
</script>
