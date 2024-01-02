<template>
  <div class="app-container">
    <el-card>
      <el-tabs v-model="initParam.type" @tab-change="changeTab">
        <!-- 关于我 -->
        <el-tab-pane label="关于我" name="1"></el-tab-pane>
        <!-- 我想找 -->
        <el-tab-pane label="我想找" name="2"></el-tab-pane>
      </el-tabs>
      <MyProTable
        ref="myProTableRef"
        :key="initParam.type"
        :columns="upColumns"
        :requestApi="getListApi"
        :deleteApi="deleteApi"
        :deleteBatchApi="batchDeleteApi"
        :initParam="initParam"
        :otherHeight="53"
      >
        <!-- 表格 header 按钮 -->
        <template #tableHeader>
          <el-button type="primary" @click="showAddOrEditPage()">新增</el-button>
        </template>
        <!-- 表格操作 -->
        <template #action="{ row }">
          <el-button type="primary" link @click="showAddOrEditPage(row)">编辑</el-button>
        </template>
      </MyProTable>
    </el-card>
    <!-- 新增和编辑弹窗 -->
    <AddOrEdit ref="addOrEditRef" @queryTable="resetList" />
  </div>
</template>

<script setup name="UserLabelConfiguration">
import AddOrEdit from './components/addOrEdit.vue'
import { columns, Columns1 } from './constants'
// 修改对应api路径
import { getListApi, deleteApi, batchDeleteApi } from '@/api/user/label.js'

const myProTableRef = ref(null)

// 新增或编辑弹窗
const addOrEditRef = ref()
const showAddOrEditPage = (params) => {
  addOrEditRef.value.showDialog(params)
}

const upColumns = ref(columns)
// 此处可以放初始请求参数
const initParam = reactive({
  type: '1',
})
// tab栏切换
const changeTab = (tab) => {
  switch (tab) {
    case '1':
      upColumns.value = columns
      break
    case '2':
      upColumns.value = Columns1
      break
  }
  initParam.type = tab
  // myProTableRef.value.changeCurrent(1)
}

// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>

<style lang="scss" scoped>
// :deep().flex.flex-1.justify-end.items-baseline {
//   justify-content: flex-start !important;
// }
</style>
