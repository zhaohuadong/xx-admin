<template>
  <MyDialog :model-value="visible" title="发送" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="消息名称:" prop="title">
        {{ form.title }}
      </el-form-item>
      <el-form-item label="消息内容:" prop="content">
        {{ form.content }}
      </el-form-item>
      <el-form-item label="用户类型" prop="userType">
        <el-select v-model="form.userType" placeholder="请选择用户类型" class="w-full">
          <el-option v-for="item in TYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item v-if="form.userType === 2" label="用户编号" prop="userNo">
        <el-input v-model="form.userNo" type="textarea" placeholder="请输入用户编号，多个用户编号请用“;”隔开" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { sendApi } from '@/api/system/message.js'
import { useToggle } from '@vueuse/core'
import { sendFormData, formRule, TYPE } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(sendFormData())

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, { id: params.id, content: params.content, title: params.title } || sendFormData())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await sendApi(form)
      proxy.$modal.msgSuccess(`发送成功`)
      proxy.resetForm(formRef.value)
      form.userType = ''
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
