<template>
  <div class="app-container">
    <MyTagCard :data="data" :xl="3" :lg="5">
      <template #customize="{ row }">
        <div class="text-gray-500">
          <div class="font-black mb-3">{{ row.name }}</div>
          <div>
            <span>今日：</span>
            {{ row.key }}
          </div>
          <div>
            <span>昨日：</span>
            {{ row.key1 }}
          </div>
          <div>
            <span>前日：</span>
            {{ row.key3 }}
          </div>
          <div>
            <span>较前日：</span>
            {{ row.key4 }}
          </div>
        </div>
      </template>
    </MyTagCard>
    <MyProTable ref="myProTableRef" otherHeight="190" :columns="columns" :requestApi="getList"></MyProTable>
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
    name: '总计流水',
    key: '88,987.00',
    key1: '208,987,676.00',
    key3: '88,987.00',
    key4: '88,987.00',
  },
  {
    name: '房间礼物',
    key: '88,987.00',
    key1: '208,987,676.00',
    key3: '88,987.00',
    key4: '-88,987.00',
  },
  {
    name: '盲盒',
    key: '88,987.00',
    key1: '88,987.00',
    key3: '208,987,676.00',
    key4: '88,987.00',
  },
  {
    name: '深海寻宝（总数据）',
    key: '88,987.00',
    key1: '88,987.00',
    key3: '208,987,676.00',
    key4: '88,987.00',
  },
  {
    name: '深海寻宝（初级）',
    key: '88,987.00',
    key1: '88,987.00',
    key3: '88,987.00',
    key4: '88,987.00',
  },
  {
    name: '深海寻宝（高级）',
    key: '88,987.00',
    key1: '88,987.00',
    key3: '88,987.00',
    key4: '--',
  },
  {
    name: '其他数据',
    key: '88,987.00',
    key1: '88,987.00',
    key3: '88,987.00',
    key4: '88,987.00',
  },
])
</script>
