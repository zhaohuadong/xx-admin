<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggleNew">
    <el-form ref="formRef" :model="form" :rules="formRule">
      <el-form-item v-if="isShow" label="封禁理由" prop="banReason">
        <el-input v-model="form.banReason" placeholder="请输入封禁理由" />
      </el-form-item>
      <el-form-item v-else label="解封理由" prop="reason">
        <el-input v-model="form.reason" placeholder="请输入解封理由" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>

<script setup>
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
import { getTypeApi } from '@/api/user/device.js'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const form = reactive(formData())
const isShow = ref(true)
const formRef = ref()
const frozenType = ref()
// 判断是封禁还是解封

const titleName = ref('')
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isShow.value = !params.frozen
  frozenType.value = params.frozen ? 2 : 1
  titleName.value = params.frozen ? '解封设备' : '封禁设备'
  Object.assign(form, params || formData())
  visible.value = true
}

const [visible, toggle] = useToggle()

const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    form.frozenType = frozenType.value
    if (valid) {
      if (isShow.value) {
        form.reason = form.banReason
        visible.value = false
        await getTypeApi(form)
        form.reason = ''
        proxy.$modal.msgSuccess(`封禁成功`)
      } else {
        visible.value = false
        await getTypeApi(form)
        proxy.$modal.msgSuccess(`解封成功`)
      }
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

const toggleNew = (params) => {
  visible.value = false
  formRef.value.resetFields()
  return toggle(params)
}

defineExpose({ showDialog })
</script>

<style lang="scss" scoped></style>
