<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
      <el-form-item label="消息名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入配置名称" />
      </el-form-item>
      <el-form-item label="消息类型" prop="type">
        <el-select v-model="form.type" placeholder="请选择消息类型" class="w-full">
          <el-option v-for="item in MESSAGETYPE" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </el-form-item>
      <el-form-item label="消息内容" prop="content">
        <!-- <el-input
          v-model="form.content"
          show-word-limit
          maxlength="500"
          type="textarea"
          placeholder="请输入消息内容，最多输入500字"
        /> -->
        <MyEditor :content="form.content" @queryContent="queryContent" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/system/message.js'
import { useToggle } from '@vueuse/core'
import { addAndEditFormData, addAndEditFormRule, MESSAGETYPE } from '../constants'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addAndEditFormData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑消息' : '新增消息'
  Object.assign(form, params || addAndEditFormData())
  visible.value = true
}
const queryContent = (params) => {
  form.content = params
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        await editApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        await addApi(form)
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
