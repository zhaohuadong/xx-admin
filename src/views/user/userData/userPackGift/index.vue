<template>
  <div class="app-container">
    <MyProTable
      ref="myProTableRef"
      :columns="columns"
      :requestApi="getListApi"
      :deleteApi="deleteApi"
      :exportApi="exportBagsApi"
      :deleteBatchApi="batchDeleteApi"
    >
      <!--  :deleteApi="deleteApi"
      :deleteBatchApi="batchDeleteApi" -->
      <!-- 表格 header 按钮 -->
      <template #tableHeader="{ isSelected, selectedListIds }">
        <el-button type="primary" :disabled="!isSelected" @click="showFrozen(selectedListIds)">批量冻结</el-button>
        <el-button type="primary" :disabled="!isSelected" @click="unFrozenShow(selectedListIds)">批量解冻</el-button>
      </template>
      <!-- 表格操作 -->
      <template #action="{ row }">
        <el-button v-if="!row.isLock" type="primary" link @click="showFrozen(row)">冻结礼物</el-button>
        <el-button v-else type="primary" link @click="unFrozenShow(row)">解冻礼物</el-button>
      </template>
    </MyProTable>
  </div>
</template>

<script setup name="UserPackGift">
import { columns } from './constants'
// 修改对应api路径
import { getListApi as getGiftListApi } from '@/api/gift/giftList.js'
import {
  getListApi,
  frozenApi,
  unfrozenApi,
  frozenBatchApi,
  unFrozenBatchApi,
  deleteApi,
  batchDeleteApi,
  exportBagsApi,
} from '@/api/user/bags.js'
import { useConfirm } from '@/hooks/useConfirm.js'

// 冻结弹窗
const myProTableRef = ref(null)

const showFrozen = (row) => {
  if (row.id) {
    useConfirm({
      api: () => frozenApi({ id: row.id }),
      tip: '确定冻结？',
      message: '冻结成功',
      title: '冻结礼物',
    }).then(() => {
      myProTableRef.value.reset()
    })
  } else {
    useConfirm({
      api: () => frozenBatchApi(row),
      tip: '确定冻结？',
      message: '冻结成功',
      title: '冻结礼物',
    }).then(() => {
      myProTableRef.value.reset()
    })
  }
}

// 解冻弹窗
const unFrozenShow = (row) => {
  if (row.id) {
    useConfirm({
      api: () => unfrozenApi({ id: row.id }),
      tip: '确定解冻？',
      message: '解冻成功',
      title: '解冻礼物',
    }).then(() => {
      myProTableRef.value.reset()
    })
  } else {
    useConfirm({
      api: () => unFrozenBatchApi(row),
      tip: '确定解冻？',
      message: '解冻成功',
      title: '解冻礼物',
    }).then(() => {
      myProTableRef.value.reset()
    })
  }
}

// 获取礼物分类

const getGiftList = async () => {
  const { rows } = await getGiftListApi()
  columns[2].enum = rows.map((item) => {
    return {
      label: item.giftName,
      value: item.giftId,
    }
  })
}
getGiftList()
</script>

<style lang="scss" scoped></style>
