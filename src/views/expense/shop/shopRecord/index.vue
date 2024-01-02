<template>
  <div class="app-container">
    <MyProTable ref="myProTableRef" :columns="columns" :requestApi="getList">
      <!-- <template #status="{ row }">
        <el-tag :type="row.status === '1' ? 'warning' : row.status === '2' ? 'success' : 'danger'">{{
          row.status === '1' ? '未使用' : row.status === '2' ? '已使用' : '已过期'
        }}</el-tag>
      </template> -->
    </MyProTable>
  </div>
</template>

<script setup name="ShopRecord">
import { getListApi as getShopCategory } from '@/api/expense/shopCategory.js'
import { columns } from './constants'
import { getListApi } from '@/api/expense/buyList.js'

// 筛选时间处理
const getList = (params) => {
  const newParams = JSON.parse(JSON.stringify(params))
  newParams.startDate = params.addDate?.[0] || ''
  newParams.endDate = params.addDate?.[1] || ''
  delete newParams.addDate
  return getListApi(newParams)
}

// 获取类别列表
const getCategoryList = async function () {
  const { rows } = await getShopCategory()
  columns[6].enum = rows.map((item) => {
    return {
      label: item.name,
      value: item.id,
    }
  })
}
getCategoryList()
</script>
