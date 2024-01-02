<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRuleDetail" label-width="auto">
      <el-form-item label="礼物" prop="giftId">
        <el-select v-model="form.giftId" placeholder="请选择礼物" class="w-full">
          <el-option v-for="item in giftOptions" :key="item.giftId" :label="item.giftName" :value="item.giftId" />
        </el-select>
      </el-form-item>
      <el-form-item label="库存" prop="number">
        <el-input-number v-model="form.number" :min="1" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { getGiftListApi } from '@/api/game/currentAwardPool.js'

import { editApi, addApi } from '@/api/game/nextSpecialPoolUserDetails.js'
import { useToggle } from '@vueuse/core'
import { formDataDetail, formRuleDetail } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const props = defineProps({
  userId: {
    type: String,
    required: true,
  },
})

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formDataDetail())

// 获取礼物列表
const giftOptions = ref([])
const gitGiftList = async () => {
  const { data } = await getGiftListApi()
  giftOptions.value = data
}
gitGiftList()

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  Object.assign(form, params || formDataDetail())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        form.userId = +props.userId
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable', { pageNum: 1 })
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
