<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <p class="text-lg">直接清空当前奖池，替换新奖池，当前奖池剩余如下，是否确定替换？</p>
    <el-row class="mt-6 mb-6">
      <el-col :span="11">
        <el-card shadow="always">
          剩余礼物数量：
          <span class="text-red-600 text-2xl mr-1">{{ props.giftSum }}</span>
          个
        </el-card>
      </el-col>
      <el-col :span="11" class="ml-6">
        <el-card shadow="always">
          剩余礼物总金额：
          <span class="text-red-600 text-2xl mr-1">{{ props.total }}</span>
          金币
        </el-card>
      </el-col>
    </el-row>
  </MyDialog>
</template>

<script setup>
import { replaceApi } from '@/api/game/currentAwardPool.js'
import { useToggle } from '@vueuse/core'
import { getCurrentInstance, ref } from 'vue'
const props = defineProps({
  giftSum: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
})
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const titleName = ref('')
// 弹窗打开
const type = ref()
const showDialog = (params) => {
  titleName.value = '替换奖池'
  visible.value = true
  type.value = `${params}`
}
const submit = async () => {
  await replaceApi(type.value)
  proxy.$modal.msgSuccess(`替换成功`)
  emits('queryTable', { pageNum: 1 })
  visible.value = false
}
defineExpose({ showDialog })
</script>
