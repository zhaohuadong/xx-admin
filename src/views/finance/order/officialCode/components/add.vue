<template>
  <MyDialog :model-value="visible" title="新增" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="用户编号" prop="userCode">
        <el-input v-model="form.userCode" placeholder="请输入用户编号" @input="handleInputText" />
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model="form.nickname" disabled placeholder="请先输入用户编号" />
      </el-form-item>

      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="form.phoneNumber" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" type="textarea" placeholder="请输入备注" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/finance/officialAccount.js'
import { getListApi } from '@/api/user/manager.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || formData())
  visible.value = true
}

// 防抖
const debounce = (fn, delay) => {
  let timer
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn(...args)
      timer = null
    }, delay)
  }
}
// 输入触发事件
const handleInputText = debounce(async (params) => {
  const reg = /^[0-9]+$/
  if (!reg.test(params.trim())) {
    form.nickname = ''
    return
  }
  const { rows } = await getListApi({ userCode: params })
  form.nickname = rows.length ? rows[0].nickname : ''
  form.remark = rows.length ? rows[0].remark : ''
}, 500)

const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await addApi(form)
      proxy.$modal.msgSuccess(`新增成功`)
      form.nickname = ''
      form.remark = ''
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
