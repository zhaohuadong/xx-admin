<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
        <el-form-item label="称号名称" prop="title">
          <el-input v-model="form.title" placeholder="请输入称号名称" />
        </el-form-item>
        <el-form-item label="图片" prop="img">
          <ImageUpload :modelValue="form.img" :limit="1" @queryImage="queryImage" />
        </el-form-item>
        <el-form-item label="来源">
          <el-input v-model="form.source" placeholder="请输入来源" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
// import { editParamApi, addParamApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { addAndEditFormData, addAndEditFormRule } from '../constants'
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
  titleName.value = params !== undefined ? '编辑称号' : '新增称号'
  Object.assign(form, params || addAndEditFormData())
  visible.value = true
}

// 获取图片上传链接
const queryImage = (params) => {
  console.log(params)
  form.img = params
  console.log(form)
}

// 保存
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (isEdit.value) {
        // await editParamApi(form)
        proxy.$modal.msgSuccess(`编辑成功`)
      } else {
        // await addParamApi(form)
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
