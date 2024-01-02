<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="用户编号" prop="username">
        <el-input v-model.number="form.username" placeholder="请输入用户编号" />
      </el-form-item>
      <el-form-item label="支付宝账号" prop="alipayAccount">
        <el-input v-model="form.alipayAccount" placeholder="请输入支付宝账号" />
      </el-form-item>
      <el-form-item label="姓名" prop="alipayName">
        <el-input v-model="form.alipayName" placeholder="请输入姓名" />
      </el-form-item>
      <el-form-item label="身份证号" prop="cardNumber">
        <el-input v-model="form.cardNumber" placeholder="请输入身份证号" />
      </el-form-item>
      <el-form-item label="手机号" prop="mobile">
        <el-input v-model.number="form.mobile" placeholder="请输入手机号" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { addApi } from '@/api/user/accounts.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
let isEdit = false
const titleName = ref('')

// 显示弹窗
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit = !!params
  titleName.value = isEdit ? '编辑' : '新增账号'
  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit) {
        // await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
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
