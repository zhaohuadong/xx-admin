<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="配置名称" prop="configTitle">
        <el-input v-model="form.configTitle" placeholder="请输入配置名称" />
      </el-form-item>
      <el-form-item label="配置标识" prop="configKey">
        <el-input v-model="form.configKey" placeholder="请输入配置标识" />
      </el-form-item>
      <el-form-item label="配置类型" prop="configKey">
        <el-select v-model="form.configType" placeholder="请选择配置类型" class="w-full">
          <el-option v-for="item in TYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="配置值" prop="configValue">
        <el-input v-model="form.configValue" type="textarea" placeholder="请输入配置值" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="form.sort" :min="1" />
      </el-form-item>
      <el-form-item label="配置分组" prop="configGroup">
        <el-select v-model="form.configGroup" placeholder="请选择配置分组" class="w-full">
          <el-option label="基本设置" :value="1" />
          <el-option label="短信接口" :value="2" />
          <el-option label="app消息推送" :value="3" />
          <el-option label="系统参数" :value="4" />
          <el-option label="程序员设置" :value="5" />
          <el-option label="项目设置" :value="6" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否启用" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio label="1">启用</el-radio>
          <el-radio label="0">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { editApi, addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule, TYPE } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
let isEdit = false
const titleName = ref('')
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  isEdit = !!params
  titleName.value = isEdit ? '编辑' : '新增'
  Object.assign(form, params || formData())
  console.log(form)
  visible.value = true
}
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
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
