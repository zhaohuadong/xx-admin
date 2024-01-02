<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <template #speed="{ row }">
        {{ row.speed + '%' }}
      </template>
      <template #tableHeader>
        <el-button type="primary" @click="setAddAndEditPage()">新增</el-button>
      </template>
      <template #action="{ row }">
        <el-button text type="primary" link @click="setAddAndEditPage(row)">编辑</el-button>
      </template>
      <template #url="{ row }">
        <el-image
          v-if="/\.(jpg|jpeg|png|gif)$/.test(row.url)"
          :src="row.url"
          :preview-src-list="[row.url]"
          fit="fill"
          :preview-teleported="true"
        ></el-image>
        <video v-if="/\.(mp4)$/.test(row.url)" :src="row.url" autoplay loop muted :controls="true"></video>
      </template>
    </MyProTable>
    <AddAndEdit ref="addAndEdit" @queryTable="resetList" />
  </div>
</template>

<script setup name="NobilityLevel">
import { columns } from './constants'
import { getListApi, deleteApi, batchDeleteApi } from '@/api/expense/knighthood.js'
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
