<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="secondLevelFormRule" label-width="auto">
      <el-form-item label="一级分类名称" prop="configType">
        <el-select v-model="form.configType" :disabled="isEdit" placeholder="请选择一级分类" class="w-full">
          <el-option v-for="item in TYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="二级分类名称" prop="version">
        <el-input v-model="form.version" placeholder="请输入二级分类名称" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="1">显示</el-radio>
          <el-radio label="2">隐藏</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// import { addApi, editApi } from '@/api/app/version.js'
import { secondLevelFormData, secondLevelFormRule, TYPE } from '../constants'
import { useToggle } from '@vueuse/core'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(secondLevelFormData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params) => {
  console.log(params)
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑版本' : '新增版本'
  Object.assign(form, params || secondLevelFormData())
  visible.value = true
}
// 提交form表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        // await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        // await addApi(form)
        proxy.$modal.msgSuccess(`新增成功`)
      }
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
