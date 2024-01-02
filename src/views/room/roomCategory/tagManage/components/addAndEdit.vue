<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
        <el-form-item label="标签名称" prop="roomTag">
          <el-input v-model="form.roomTag" placeholder="请输入标签名称" />
        </el-form-item>
        <el-form-item label="排序" prop="roomTagUrl">
          <ImageUpload :modelValue="form.roomTagUrl" :limit="1" @queryImage="queryImage" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { addApi, editApi } from '@/api/room/tag.js'
import { addAndEditformData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addAndEditformData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗设置
const showDialog = (params, tabVal) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  if (tabVal === '2') {
    titleName.value = params !== undefined ? '编辑个人标签' : '新增个人标签'
  } else {
    titleName.value = params !== undefined ? '编辑官方标签' : '新增官方标签'
  }

  Object.assign(form, params || addAndEditformData())
  form.date = [form.validDate, form.expireDate]
  form.tagType = tabVal
  visible.value = true
}

// 提交form表单
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
      visible.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}

// 获取图片上传链接
const queryImage = (params) => {
  // console.log(params)
  form.roomTagUrl = params
}

defineExpose({ showDialog })
</script>
