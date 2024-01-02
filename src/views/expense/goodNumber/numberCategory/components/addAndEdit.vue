<template>
  <div>
    <MyDialog :model-value="visibel" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto" mx-auto>
        <el-form-item label="类别名称" prop="categoryName">
          <el-input v-model="form.categoryName" placeholder="要添加的靓号分类名称"></el-input>
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>

<script setup>
import { formData, formRule } from '../constants'
import { useToggle } from '@vueuse/core'
import { addApi, editApi } from '@/api/expense/niceNumberCategory.js'

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
  titleName.value = params !== undefined ? '编辑靓号分类' : '新增靓号分类'
  Object.assign(form, params || formData())
  visibel.value = true
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
      visibel.value = false
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
