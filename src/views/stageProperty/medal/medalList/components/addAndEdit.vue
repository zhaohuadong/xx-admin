<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="addAndEditFormRule" label-width="auto">
        <el-form-item label="名称" prop="medalName">
          <el-input v-model="form.medalName" placeholder="请输入名称" />
        </el-form-item>
        <el-form-item label="图片" prop="iconUrl">
          <ImageUpload :modelValue="form.iconUrl" :limit="1" @queryImage="queryImage" />
        </el-form-item>
        <el-form-item label="排序" prop="sortNum">
          <el-input v-model="form.sortNum" placeholder="请输入排序数字" />
        </el-form-item>
        <!-- <el-form-item label="状态" prop="delFlag">
          <el-radio-group v-model="form.delFlag">
            <el-radio :label="1">显示</el-radio>
            <el-radio :label="0">隐藏</el-radio>
          </el-radio-group>
        </el-form-item> -->
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { editApi, addApi } from '@/api/stageProperty/medalList.js'
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
  titleName.value = params !== undefined ? '编辑勋章' : '新增勋章'
  Object.assign(form, params || addAndEditFormData())
  visible.value = true
}

// 获取图片上传链接
const queryImage = (params) => {
  form.iconUrl = params
}

// 保存
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
