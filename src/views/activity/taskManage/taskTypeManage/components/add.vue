<template>
  <MyDialog :model-value="visible" :title="title" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="任务类型" prop="taskType">
        <el-select v-model="form.taskType" class="w-full" placeholder="请选择任务类型">
          <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="任务类型描述" prop="remark">
        <el-input
          v-model="form.remark"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          maxlength="500"
          placeholder="请输入任务类型描述，最多可输入500字"
        />
      </el-form-item>
      <el-form-item label="任务形式" prop="condition">
        <el-select v-model="form.condition" class="w-full" placeholder="请选择任务形式">
          <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="跳转状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio :label="0">开启</el-radio>
          <el-radio :label="1">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="跳转类型" prop="jumpType">
        <el-select v-model="form.jumpType" class="w-full" placeholder="请选择跳转类型">
          <el-option v-for="item in list" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { reactive } from 'vue'
import { formData, formRule, options } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
const [visible, toggle] = useToggle()
const formRef = ref()
const title = ref()
const form = reactive(formData())
const list = reactive(options)
// 弹窗打开
const showDialog = (params = null) => {
  if (!params) {
    title.value = '新增任务'
  } else {
    title.value = '编辑任务'
  }
  proxy.resetForm(formRef.value)
  Object.assign(form, params || formData())
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
