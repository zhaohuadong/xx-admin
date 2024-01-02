<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getList"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <template #action="{ row }">
        <el-button text type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
    </MyProTable>
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="numberList">
import { columns } from './constants'
import AddAndEdit from './components/addAndEdit.vue'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/niceNumber.js'
import { getListApi as gitNumberApi } from '@/api/expense/niceNumberCategory.js'

// 新增/编辑
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}

const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}

//  异步处理请求参数
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = newParams.expireDate?.[0] ?? ''
  newParams.endDate = newParams.expireDate?.[1] ?? ''
  delete newParams.expireDate
  newParams.addStartDate = newParams.addDate?.[0] ?? ''
  newParams.addEndDate = newParams.addDate?.[1] ?? ''
  delete newParams.addDate
  return getListApi(newParams)
}

// 获取靓号类别
// const options = reactive([])
const gitNumberList = async () => {
  const { rows } = await gitNumberApi()
  columns[3].enum = rows.map((item) => {
    return {
      label: item.categoryName,
      value: item.id,
    }
  })
}
gitNumberList()
</script>
