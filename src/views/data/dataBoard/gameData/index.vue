<template>
  <div class="app-container">
    <MyTagCard :data="data" :xs="24">
      <template #customize="{ row }">
        <div class="text-gray-500">
          <div class="font-black mb-3">{{ row.name }}</div>
          <div>
            <span>投入：</span>
            {{ row.key }}
          </div>
          <div>
            <span>产出：</span>
            {{ row.key1 }}
          </div>
          <div>
            <span>盈亏：</span>
            {{ row.key2 }}
          </div>
          <div>
            <span>投产比：</span>
            {{ row.key3 }}
          </div>
        </div>
      </template>
    </MyTagCard>
    <MyProTable
      :header-cell-style="{ 'text-align': 'center' }"
      noHeight
      :columns="columns"
      :requestApi="getList"
    ></MyProTable>
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi } from '@/api/system/message.js'
import { useTime } from '@/hooks/useTime.js'
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.timeType !== '自定义' ? useTime(params.timeType)[0] : newParams.selectTime?.[0] ?? ''
  newParams.endTime = newParams.timeType !== '自定义' ? useTime(params.timeType)[1] : newParams.selectTime?.[1] ?? ''
  delete newParams.timeType
  delete newParams.selectTime
  return getListApi(newParams)
}
const data = ref([
  {
    name: '盲盒礼物',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
  {
    name: '深海寻宝（金币）',
    key: '22,201,860.00',
    key1: '22,201,860.00',
    key2: '22,201,860.00',
    key3: '66.60%',
  },
])
</script>
