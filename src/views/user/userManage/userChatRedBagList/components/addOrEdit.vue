<template>
  <MyDialog :model-value="visible" :title="titleName" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <!-- input -->
      <el-form-item label="用户编号" prop="userCodes">
        <el-input v-model="form.userCodes" placeholder="请输入用户编号，多用户可用 “;” 隔开" />
      </el-form-item>

      <!-- radio -->
      <el-form-item label="状态" prop="disabled">
        <el-radio-group v-model="form.disabled" placeholder="请选择">
          <el-radio :label="0">启用</el-radio>
          <el-radio :label="1">关闭</el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
// 修改对应api路径
import { addApi } from '@/api/user/chatRedBag.js'
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
  titleName.value = isEdit ? '编辑' : '新增私聊白名单'
  // 初始化表单值
  Object.assign(form, params || formData())
  visible.value = true
}
// 提交表单
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await addApi(form)
      proxy.$modal.msgSuccess(`新增成功`)

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
