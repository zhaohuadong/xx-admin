<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="开始时间" prop="startTime">
        <el-date-picker
          v-model="form.startTime"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择开始时间"
        />
      </el-form-item>
      <el-form-item label="结束时间" prop="endTime">
        <el-date-picker
          v-model="form.endTime"
          type="datetime"
          value-format="YYYY-MM-DD HH:mm:ss"
          placeholder="请选择结束时间"
        />
      </el-form-item>
      <!-- input -->
      <el-form-item label="名称" prop="title">
        <el-input v-model="form.title" placeholder="请输入标题" />
      </el-form-item>
      <!-- radio -->
      <el-form-item label="跳转类型" prop="type">
        <el-radio-group v-model="form.type" placeholder="请选择">
          <el-radio :label="0">无跳转</el-radio>
          <el-radio :label="1">外部链接</el-radio>
          <el-radio :label="2">页面跳转</el-radio>
        </el-radio-group>
      </el-form-item>
      <!-- input -->
      <el-form-item v-if="form.type !== 0" label="跳转链接" prop="linkUrl">
        <el-input v-model="form.linkUrl" placeholder="请输入活动地址链接" />
      </el-form-item>
      <!-- img -->
      <el-form-item label="banner图片" prop="bannerUrl">
        <ImageUpload v-model="form.bannerUrl" @queryImage="queryImage" />
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="form.status" placeholder="请选择">
          <el-radio :label="0">隐藏</el-radio>
          <el-radio :label="1">展示</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { editApi, addApi } from '@/api/activity/ears.js'
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
  titleName.value = isEdit ? '编辑' : '新增'
  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}

// 上传图片
const queryImage = (params) => {
  form.bannerUrl = params
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
      console.log('error submit')
      return false
    }
  })
}

defineExpose({ showDialog })
</script>
