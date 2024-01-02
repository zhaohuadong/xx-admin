<template>
  <div class="app-container">
    <MyTagCard :data="data">
      <!-- <template #customize="{ row }"
        ><div>{{ row.name }}</div>
        <div><span>盈利：</span>{{ row.key }}</div></template
      > -->
    </MyTagCard>
    <MyProTable
      ref="myProTableRef"
      :initParam="initParam"
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
    name: '总计',
    key: '22,201,860.00（金币）',
  },
  {
    name: '头像框',
    key: '22,201,860.00（金币）',
  },
  {
    name: '昵称挂件',
    key: '1,678,474.00（金币）',
  },
  {
    name: '昵称特效',
    key: '22,201,860.00（金币）',
  },
  {
    name: '入场特效',
    key: '22,201,860.00（金币）',
  },
  {
    name: '座驾',
    key: '22,201,860.00（金币）',
  },
  {
    name: '聊天室气泡',
    key: '22,201,860.00（金币）',
  },
  {
    name: '麦位光波',
    key: '22,201,860.00（金币）',
  },
  {
    name: '聊天气泡',
    key: '22,201,860.00（金币）',
  },
])
</script>
