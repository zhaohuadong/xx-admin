<template>
  <div class="app-container">
    <el-card>
      <el-tabs :lazy="true">
        <el-tab-pane label="一级分类">
          <MyProTable
            ref="myProTableRef"
            :columns="firstLevelColumns"
            :requestApi="getListApi"
            :deleteApi="deleteApi"
            otherHeight="55"
            :dataCallback="dataCallback"
          >
            <!-- selectionKey="versionId" -->
            <!-- 表格 header 按钮 -->
            <template #tableHeader>
              <el-button type="primary" @click="setFirstLevelAddOrEditPage()">新增</el-button>
            </template>
            <!-- <template #type="{ row }">
              <el-tag :type="row.type === 1 ? 'success' : 'danger'" plain>{{
                row.type === 1 ? '开启' : '关闭'
              }}</el-tag>
            </template> -->
            <!-- 表格操作 -->
            <template #action="{ row }">
              <el-button type="primary" link @click="setFirstLevelAddOrEditPage(row)">编辑</el-button>
            </template>
          </MyProTable>
        </el-tab-pane>
        <!-- <el-tab-pane label="二级分类" name="2">
          <MyProTable
            :columns="secondLevelColumns"
            :requestApi="getListApi"
            :deleteApi="deleteApi"
            ref="myProTableRef"
            otherHeight="55"
            :dataCallback="dataCallback"
            :initParam="initParam"
            selectionKey="versionId"
          >
            <template #tableHeader>
              <el-button type="primary" @click="setSecondLevelAddOrEditPage()">新增</el-button>
            </template>

            <template #action="{ row }">
              <el-button type="primary" link @click="setSecondLevelAddOrEditPage(row)">编辑</el-button>
            </template>
          </MyProTable>
        </el-tab-pane> -->
      </el-tabs>
    </el-card>
    <!--一级分类新增和编辑弹窗-->
    <FirstLevelAddOrEdit ref="firstLevelAddOrEdit" @queryTable="resetList" />
    <!--二级分类新增和编辑弹窗-->
    <!-- <SecondLevelAddOrEdit ref="secondLevelAddOrEdit" @queryTable="resetList" /> -->
  </div>
</template>
<script setup name="UserViolatType">
import FirstLevelAddOrEdit from './components/firstLevelAddOrEdit.vue'
// import SecondLevelAddOrEdit from './components/SecondLevelAddOrEdit.vue'
import { firstLevelColumns } from './constants'
import { getListApi, deleteApi } from '@/api/customer/config.js'

const myProTableRef = ref(null)
// const initParam = reactive({
//   appType: '1',
// })
// tab栏切换
// const changeTab = (tab) => {
//   initParam.appType = tab
//   myProTableRef.value.changeCurrent(1)
// }
// 自定义返回值
const dataCallback = (result) => {
  result.rows = result.rows.map((item) => {
    return item
  })
  return result
}

const resetList = () => {
  myProTableRef.value.reset()
}
// 一级分类新增和编辑弹窗
const firstLevelAddOrEdit = ref()
const setFirstLevelAddOrEditPage = (params) => {
  firstLevelAddOrEdit.value.showDialog(params)
}

// 二级分类新增和编辑弹窗
// const secondLevelAddOrEdit = ref()
// const setSecondLevelAddOrEditPage = (params) => {
//   secondLevelAddOrEdit.value.showDialog(params)
// }
</script>
