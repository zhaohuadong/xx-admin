<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <!-- 表格 header 按钮 -->
      <template #tableHeader>
        <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
      </template>
      <!-- 表格操作 -->
      <!-- <template #action="{ row }">
        <el-button type="primary" link >详情</el-button>
      </template> -->
    </MyProTable>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="RoomRecommend">
import AddOrEdit from './components/addOrEdit.vue'
import { columns } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi } from '@/api/room/recommend.js'

const myProTableRef = ref(null)
// 新增或编辑弹窗
const addOrEditRef = ref()
const showAddOrEditPage = (params) => {
  addOrEditRef.value.showDialog(params)
}
// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}

// 处理时间筛选请求参数
const getList = (params) => {
  const nweParams = JSON.parse(JSON.stringify(params))
  // 时间查询转换为时间戳格式
  // console.log(dayjs(params.createTime?.[0]).unix())

  nweParams.startTime = params.createTime?.[0] || ''
  nweParams.endTime = params.createTime?.[1] || ''
  delete nweParams.createTime
  return getListApi(nweParams)
}
</script>

<style lang="scss" scoped></style>
