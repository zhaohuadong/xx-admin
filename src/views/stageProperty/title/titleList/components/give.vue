<template>
  <div>
    <MyDialog :model-value="visible" title="赠送" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="giveFormRule" label-width="auto">
        <el-form-item label="称号标题">
          <el-input v-model="form.title" disabled />
        </el-form-item>
        <el-form-item label="用户编号" prop="userCode">
          <el-input v-model="form.userCode" type="textarea" placeholder="请输入用户编号，多个用户以“；”间隔" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
// import { editParamApi, addParamApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { giveFormData, giveFormRule } from '../constants'
const { proxy } = getCurrentInstance()

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(giveFormData())

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.keys(form).map((item) => (form[item] = params[item]))
  visible.value = true
}

// 保存
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      // await addParamApi(form)
      console.log(form)
      proxy.$modal.msgSuccess(`赠送成功`)
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
