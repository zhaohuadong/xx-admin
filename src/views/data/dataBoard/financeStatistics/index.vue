<template>
  <div class="app-container">
    <MyTagCard :data="data" :xl="3">
      <!-- <template #customize="{ row }"
        ><div>{{ row.name }}</div>
        <div><span>盈利：</span>{{ row.key }}</div></template
      > -->
    </MyTagCard>
    <MyProTable
      ref="myProTableRef"
      otherHeight="70"
      :columns="columns"
      :requestApi="getList"
      :deleteApi="deleteApi"
    ></MyProTable>
  </div>
</template>
<script setup name="Pay">
import { columns } from './constants'
import { getListApi, deleteApi } from '@/api/system/message.js'

const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startTime = newParams.updateTime?.[0] ?? ''
  newParams.endTime = newParams.updateTime?.[1] ?? ''
  delete newParams.updateTime
  return getListApi(newParams)
}
const data = ref([
  {
    name: '平台总流水',
    key: '19,787,768.00',
  },
  {
    name: '总注册人数',
    key: '2242',
  },
  {
    name: '总充值',
    key: '70,819.00',
  },
  {
    name: '申请提现金额',
    key: '243,196.00',
  },
  {
    name: '运营拒绝金额',
    key: '91,377.40 .00',
  },
  {
    name: '申请打款金额',
    key: '19,787,768.00',
  },
  {
    name: '财务拒绝金额',
    key: '19,787,768.00',
  },
  {
    name: '财务打款金额',
    key: '19,787,768.00',
  },
])
</script>
<style scoped lang="scss">
// :deep(.myTagCard3) {
//   background-color: red;
// }
</style>
