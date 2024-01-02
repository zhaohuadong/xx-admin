<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getListApi" :exportApi="exportDeviceApi">
      <!-- 表格 header 按钮 -->

      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button v-if="!row.frozen" type="primary" link @click="deviceManagement(row)">封禁设备</el-button>
        <el-button v-else type="primary" link @click="deviceManagement(row)">解封设备</el-button>
      </template>
    </MyProTable>

    <!-- 弹窗-->
    <Equipment ref="equipment" @queryTable="resetList"></Equipment>
  </div>
</template>

<script setup name="UserEquipment">
import Equipment from './components/prohibitedEquipment.vue'
import { columns } from './constants'

import { getListApi, exportDeviceApi } from '@/api/user/device.js'
const myProTableRef = ref(null)
// 编辑弹窗
const equipment = ref()
const deviceManagement = (params) => {
  equipment.value.showDialog(params)
}

// 操作成功后重置表格
const resetList = () => {
  myProTableRef.value.reset()
}
</script>
