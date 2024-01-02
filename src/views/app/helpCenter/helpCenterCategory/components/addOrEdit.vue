<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="分类名称" prop="name">
        <el-input v-model="form.name" placeholder="请输入分类名称" />
      </el-form-item>
      <el-form-item label="图标" prop="imgUrl">
        <ImageUpload :modelValue="form.imgUrl" :limit="1" @queryImage="queryImage" />
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input v-model="form.sort" placeholder="请输入排序" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { editApi, addApi } from '@/api/app/config.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑协议分类' : '新增协议分类'
  Object.assign(form, params || formData())
  console.log(form)
  visible.value = true
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

// 获取图片上传链接
const queryImage = (params) => {
  console.log(params)
  form.imgUrl = params
}
defineExpose({ showDialog })
</script>
