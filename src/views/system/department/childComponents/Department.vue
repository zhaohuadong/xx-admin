<template>
  <MyProTable
    ref="myProTableRef"
    :columns="columns"
    :requestApi="getListApi"
    otherHeight="55"
    :dataCallback="dataCallback"
    selectionKey="deptId"
  >
    <!-- 表格 header 按钮 -->
    <template #tableHeader>
      <el-button type="primary" @click="setAddOrEditPage()">新增</el-button>
    </template>
    <template #userAmount="{ row }">
      <el-button type="primary" link @click="handleClickUserAmount(row)">{{ row.userAmount }}</el-button>
    </template>
    <!-- 表格操作 -->
    <template #action="{ row }">
      <el-button type="primary" link @click="setAddOrEditPage(row)">编辑</el-button>
      <el-button v-if="row.ancestors !== '0'" type="primary" link @click="deleteData(row)">删除</el-button>
    </template>
  </MyProTable>
  <AddDepartment ref="addDepartment" @queryTable="resetList"></AddDepartment>
</template>

<script setup>
import { handleTree } from '@/utils'
import { columns } from './departmentConstent'
import { getListApi, deleteApi } from '@/api/systemManage/department'
import AddDepartment from './AddDepartment.vue'
const { proxy } = getCurrentInstance()

const emits = defineEmits(['handleClickNum'])

const myProTableRef = ref(null)

let treeSelect = null
const dataCallback = (result) => {
  result.rows = handleTree(result.data, 'deptId')
  treeSelect = result.rows
  return result
}

const resetList = () => {
  myProTableRef.value.reset()
}

//
const handleClickUserAmount = (row) => {
  emits('handleClickNum', row)
}

// 编辑弹窗
const addDepartment = ref()
const setAddOrEditPage = (params) => {
  addDepartment.value.showDialog(treeSelect, params)
}

// 删除
const deleteData = async (row) => {
  await deleteApi({ id: row.deptId })
  proxy.$modal.msgSuccess(`删除成功`)
  myProTableRef.value.changeCurrent(1)
}

// 刷新为第一页
const changeCurrent = () => {
  myProTableRef.value.changeCurrent(1)
}
defineExpose({
  changeCurrent,
})
</script>

<style lang="scss" scoped></style>
