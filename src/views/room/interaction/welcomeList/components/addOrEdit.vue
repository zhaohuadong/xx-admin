<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- 文案内容 -->
      <el-form-item label="文案内容" prop="welcomeMsg">
        <el-input
          v-model="form.welcomeMsg"
          show-word-limit
          maxlength="500"
          type="textarea"
          placeholder="请输入欢迎语文案内容"
        />
      </el-form-item>
      <!-- 排序 -->
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.sort" type="number" :min="1" placeholder="请输入默认排序" />
      </el-form-item>
      <!-- 状态 -->
      <el-form-item label="状态" prop="state">
        <el-radio-group v-model="form.state" placeholder="请选择">
          <el-radio :label="1">显示</el-radio>
          <el-radio :label="0">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { editApi, addApi } from '@/api/room/welcomeList.js'
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
  titleName.value = isEdit ? '编辑欢迎语' : '新增欢迎语'
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
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
      emits('queryTable')
      visible.value = false
    } else {
      return false
    }
  })
}

defineExpose({ showDialog })
</script>
