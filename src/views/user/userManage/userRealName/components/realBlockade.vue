<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- textarea -->
      <el-form-item label="封禁理由" prop="authReason">
        <el-input
          v-model="form.authReason"
          show-word-limit
          maxlength="500"
          type="textarea"
          placeholder="请输入封禁理由"
        />
      </el-form-item>
      <!-- input -->
      <el-form-item label="封禁来源">
        <el-input v-model="form.realBanSource" placeholder="请输入封禁来源" />
      </el-form-item>
      <!-- file -->
      <el-form-item label="封禁证据" prop="urls">
        <FileUpload v-model="form.urls" @queryFile="queryFile" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { realNameBanApi } from '@/api/user/realNameAuth.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

const titleName = ref('')

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  titleName.value = '实名封禁'
  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      form.type = 1
      await realNameBanApi(form)
      proxy.$modal.msgSuccess(`封禁成功`)
      proxy.resetForm(formRef.value)
      form.realBanSource = ''
      emits('queryTable')
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
//  上传文件存放
const queryFile = (params) => {
  const newParams = params.split(',')
  if (newParams[0] === '') {
    form.urls = []
  } else {
    form.urls = newParams
  }
}

defineExpose({ showDialog })
</script>
