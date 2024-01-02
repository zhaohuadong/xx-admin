<template>
  <div>
    <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
        <el-form-item label="表情名称" prop="name">
          <el-input v-model="form.name" placeholder="请输入表情名称" />
        </el-form-item>
        <el-form-item label="表情图片" prop="iconUrl">
          <ImageUpload :modelValue="form.iconUrl" :limit="1" @queryImage="queryIconFile" />
        </el-form-item>
        <el-form-item label="表情动态图" prop="aniUrl">
          <ImageUpload :modelValue="form.aniUrl" :limit="1" @queryImage="queryAniFile" />
        </el-form-item>
        <el-form-item label="表情类别" prop="type">
          <el-select v-model="form.type" placeholder="请选择表情类别">
            <el-option label="单个普通" :value="1" />
            <el-option label="全麦普通" :value="3" />
            <el-option label="全麦玩法" :value="5" />
            <el-option label="单个玩法" :value="6" />
          </el-select>
        </el-form-item>
        <el-form-item label="排序" prop="orderNum">
          <el-input-number v-model="form.orderNum" :min="1" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { editApi, addApi } from '@/api/room/expressionList.js'
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
  console.log(params)
  proxy.resetForm(formRef.value)
  isEdit.value = params !== undefined
  titleName.value = params !== undefined ? '编辑表情' : '新增表情'
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
// 获取图片上传链接
const queryIconFile = (params) => {
  console.log(params)
  form.iconUrl = params
}
// 获取图片上传链接
const queryAniFile = (params) => {
  form.aniUrl = params
}
defineExpose({ showDialog })
</script>
