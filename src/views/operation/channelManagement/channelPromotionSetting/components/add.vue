<template>
  <MyDialog :model-value="visible" title="编辑" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="顶级渠道名称" prop="top">
        {{ form.top }}
      </el-form-item>
      <el-form-item label="二级渠道名称" prop="second">
        {{ form.second }}
      </el-form-item>
      <el-form-item label="二级渠道标识" prop="secondId">
        {{ form.secondId }}
      </el-form-item>
      <el-form-item label="渠道厅" prop="channelHall">
        <el-input v-model="form.channelHall" placeholder="请输入房间编号" />
      </el-form-item>
      <el-form-item label="入场特效" prop="userName">
        {{ '123' }}
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
// const channelHall = ref('')
const form = reactive(formData())
// const formRule = reactive()
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  // Object.assign(form, params || formData())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await addApi(form)
      proxy.$modal.msgSuccess(`新增成功`)
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
