<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="分类名称" prop="giftTabName">
        <el-input v-model="form.giftTabName" placeholder="请输入分类名称" />
      </el-form-item>
      <el-form-item label="背景图片">
        <ImageUpload :modelValue="form.backPic" :limit="1" @queryImage="queryImage" />
      </el-form-item>
      <el-form-item label="排序号" prop="sortNum">
        <el-input-number v-model="form.sortNum" placeholder="请输入排序" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="2">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/gift/giftAssort.js'
import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑礼物分类' : '新增礼物分类'
  Object.assign(form, params || formData())
  form.date = [form.validDate, form.expireDate]
  visible.value = true
}

// 提交form表单
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
  form.backPic = params
  console.log(form)
}
defineExpose({ showDialog })
</script>
