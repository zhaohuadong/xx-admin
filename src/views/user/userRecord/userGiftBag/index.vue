<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getGiftListApi"
      :exportApi="exportPackApi"
      :selection="false"
    >
      <!-- 表格 header 按钮 -->
    </MyProTable>
  </div>
</template>

<script setup name="UserGiftBag">
import { columns } from './constants'
// 修改对应api路径
import { getGiftListApi, exportPackApi } from '@/api/user/unsealUser.js'

const myProTableRef = ref(null)
</script>

<style lang="scss" scoped></style>
