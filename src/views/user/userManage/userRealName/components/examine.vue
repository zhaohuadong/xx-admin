<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- radio -->
      <el-form-item label="审核结果" prop="state">
        <el-radio-group v-model="form.state" placeholder="请选择">
          <el-radio :label="2">通过</el-radio>
          <el-radio :label="1">拒绝</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- textarea -->
      <el-form-item label="审核理由">
        <el-input
          v-model="form.authReason"
          show-word-limit
          maxlength="500"
          type="textarea"
          placeholder="请输入审核理由"
        />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { doAuthApi } from '@/api/user/realNameAuth.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
const titleName = ref('')

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  titleName.value = '实名审核'
  // 初始化表单值
  Object.assign(form, params || formData())
  form.state = 2
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await doAuthApi(form)
      proxy.$modal.msgSuccess(`审核成功`)
      proxy.resetForm(formRef.value)
      form.authReason = ''
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
