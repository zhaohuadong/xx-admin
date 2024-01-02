<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
        <el-form-item label="礼物类别名称" prop="categoryName">
          <el-input v-model="form.categoryName" placeholder="请输入礼物类别名称" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { editApi, addApi } from '@/api/gift/giftCategory.js'
import { useToggle } from '@vueuse/core'
import { AddAndEditformData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(AddAndEditformData())
// 判断是新增或编辑
const isEdit = ref(false)
const titleName = ref('')
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑礼物类别' : '新增礼物类别'
  Object.assign(form, params || AddAndEditformData())
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
defineExpose({ showDialog })
</script>
