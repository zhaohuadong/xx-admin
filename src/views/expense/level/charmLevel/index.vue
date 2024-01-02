<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getListApi" :deleteApi="deleteApi">
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <template #action="{ row }">
        <el-button text type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
      <template #charmTxtIconUrl="{ row }">
        <el-image
          v-if="row.charmTxtIconUrl"
          :src="row.charmTxtIconUrl"
          :preview-src-list="[row.charmTxtIconUrl]"
          fit="contain"
          :preview-teleported="true"
        ></el-image>
      </template>
      <template #charmIconUrl="{ row }">
        <el-image
          v-if="row.charmIconUrl"
          :src="row.charmIconUrl"
          :preview-src-list="[row.charmIconUrl]"
          fit="contain"
          :preview-teleported="true"
        ></el-image>
      </template>
    </MyProTable>
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="CharmLevel">
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/expense/charm.js'
import AddAndEdit from './components/addAndEdit.vue'

// 新增/编辑
const addAndEdit = ref()
const setAddAndEditPage = (params) => {
  addAndEdit.value.showDialog(params)
}

const myProTableRef = ref(null)
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
