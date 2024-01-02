<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="礼物" prop="giftId">
        <el-select v-model="form.giftId" placeholder="请选择礼物" class="w-full">
          <el-option v-for="item in giftOptions" :key="item.giftId" :label="item.giftName" :value="item.giftId" />
        </el-select>
      </el-form-item>
      <el-form-item label="库存" prop="number">
        <el-input-number v-model.number="form.number" :min="1" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
// import { editApi, addApi } from '@/api/game/currentAwardPool.js'
import { editApi, addApi, getGiftListApi } from '@/api/game/blindbox.js'

import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { getCurrentInstance, reactive, ref } from 'vue'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const props = defineProps({
  type: {
    type: Number,
    required: true,
  },
})
const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑' : '新增'
  Object.assign(form, params || formData())
  form.type = props.type
  form.nextJackpot = 0
  visible.value = true
}

// 获取礼物列表
const giftOptions = ref([])
const gitGiftList = async () => {
  const { data } = await getGiftListApi()
  giftOptions.value = data
}
gitGiftList()

const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
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
