<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getListApi"></MyProTable>
  </div>
</template>
<script setup name="MedalRecord">
import { columns } from './constants'
import { getListApi } from '@/api/stageProperty/medalRecord.js'
</script>
