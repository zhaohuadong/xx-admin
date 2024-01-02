<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="名称" prop="pageName">
        <el-input v-model="form.pageName" placeholder="请输入开屏页名称" />
      </el-form-item>
      <el-form-item label="图片" prop="imgUrl">
        <ImageUpload :modelValue="form.imgUrl" :limit="1" @queryImage="queryImage" />
      </el-form-item>
      <el-form-item label="展示时间" prop="date">
        <el-date-picker
          v-model="form.date"
          type="datetimerange"
          value-format="YYYY-MM-DD"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          @change="setCheckDate"
        />
      </el-form-item>
      <el-form-item label="跳转链接" prop="addressUrl">
        <el-input v-model="form.addressUrl" placeholder="请输入跳转链接" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi, editApi } from '@/api/app/openPage.js'
import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
import { timeToTimestamp } from '@/utils/date'
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
  titleName.value = params !== undefined ? '编辑开屏页' : '新增开屏页'
  Object.assign(form, params || formData())

  if (params) {
    form.validDate = timeToTimestamp(params.validDate)
    form.expireDate = timeToTimestamp(params.expireDate)
    form.date = [params.validDate, params.expireDate]
  }
  console.log(form.date)
  visible.value = true
}

// 获取选中日期
const setCheckDate = (param) => {
  console.log(timeToTimestamp(param[0]))
  form.validDate = timeToTimestamp(param[0])
  form.expireDate = timeToTimestamp(param[1])
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
  form.imgUrl = params
  console.log(form)
}
defineExpose({ showDialog })
</script>
