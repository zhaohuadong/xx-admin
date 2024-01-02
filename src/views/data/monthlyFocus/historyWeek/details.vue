<template>
  <div class="app-container">
    <el-card :body-style="{ paddingBottom: 0 }" class="mySearchBar mb-2">
      <div class="flex items-center justify-between">
        <div class="flex items-center justify-between w-full mb-3.5">周星榜 第 2 期榜单数据</div>
        <MyReturn :modelValue="{ name: 'HistoryWeek' }"></MyReturn>
      </div>
    </el-card>

    <MyProTable ref="myProTableRef" :otherHeight="15" :columns="columns" :requestApi="getListApi"></MyProTable>
  </div>
</template>
<script setup name="Week">
import { getListApi } from '@/api/system/message.js'

const columns = [
  {
    label: '序号',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '名次',
    prop: 'id',
    hideInSearch: true,
  },
  {
    label: '结束时间',
    prop: 'updateTime',
    hideInSearch: true,
  },
  {
    label: '用户编号',
    prop: 'orderId',
  },
  {
    label: '用户昵称',
    prop: 'dealCode',
    hideInSearch: true,
  },
  {
    label: '周星值',
    prop: 'money',
    hideInSearch: true,
  },
  {
    label: '所属公会',
    prop: 'gold',
    hideInSearch: true,
  },
]
</script>
