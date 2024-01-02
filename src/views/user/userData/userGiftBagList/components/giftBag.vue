<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="礼包名称" prop="input">
        <p>{{ title }}</p>
      </el-form-item>
      <!-- textarea -->
      <el-form-item label="用户编号" prop="userCodes">
        <el-input v-model="form.userCodes" show-word-limit type="textarea" placeholder="请输入用户编号，以 “；” 隔开" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { sendApi } from '@/api/user/pack.js'
import { useToggle } from '@vueuse/core'
import { sendFormData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(sendFormData())

const titleName = ref('')
const title = ref('')
// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  title.value = params.title
  titleName.value = '赠送'
  // 初始化表单值
  Object.assign(form, params || sendFormData())
  form.userCodes = ''
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await sendApi(form)
      proxy.$modal.msgSuccess(`赠送成功`)
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

defineExpose({ showDialog })
</script>
