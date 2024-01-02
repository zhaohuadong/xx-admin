<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getRoomLockStatisticApi">
      <template #action="{ row }">
        <router-link :to="{ path: '/room/record/roomLockStatisticInfo', query: { id: row.crId } }">
          <el-button link type="primary">详情</el-button>
        </router-link>
      </template>
      <!-- 锁房总时长 -->
      <template #totalLockTime="{ row }">{{ countDown(row.totalLockTime / 1000) }}</template>

      <!-- 平均锁房时长 -->
      <template #aveLockTime="{ row }">{{ countDown(row.aveLockTime / 1000) }}</template>
    </MyProTable>
  </div>
</template>
<script setup name="RoomLockStatistic">
import { columns } from './constants'
import { getRoomLockStatisticApi } from '@/api/room/record.js'
import { countDown } from '@/utils/date.js'
const myProTableRef = ref(null)
</script>
<style lang="scss" scoped></style>
