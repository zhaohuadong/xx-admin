<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-form-item label="等级名称" prop="charmName">
          <el-input v-model="form.charmName" placeholder="请输入等级名称"></el-input>
        </el-form-item>
        <el-form-item label="等级" prop="id">
          <el-input-number v-model="form.id" :step="1" :min="0" />
        </el-form-item>
        <el-form-item label="所需魅力值" prop="consumeMoney">
          <el-input-number v-model="form.consumeMoney" :step="1" :min="0" />
        </el-form-item>
        <el-form-item label="小图标">
          <ImageUpload :modelValue="form.charmTxtIconUrl" @queryImage="querySmallIcon" />
        </el-form-item>
        <el-form-item label="大图标">
          <ImageUpload :modelValue="form.charmIconUrl" @queryImage="queryBigIcon" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { addApi, editApi } from '@/api/expense/charm.js'

import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visibel, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())

// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')

// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑等级' : '新增等级'
  Object.assign(form, params || formData())
  visibel.value = true
}
const submit = () => {
  console.log(form)
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
      visibel.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

// 获取图片上传链接
const querySmallIcon = (params) => {
  form.charmTxtIconUrl = params
}

// 获取图片上传链接
const queryBigIcon = (params) => {
  form.charmIconUrl = params
}

defineExpose({ showDialog })
</script>
<style>
.el-input-number {
  width: 100%;
}
</style>
