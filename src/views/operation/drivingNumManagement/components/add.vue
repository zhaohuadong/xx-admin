<template>
  <MyDialog :model-value="visible" :title="type === 1 ? '新增带动号' : '新增接收号'" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="用户编号" prop="userCode">
        <el-input v-model="form.userCode" placeholder="请输入用户编号" />
      </el-form-item>
      <el-form-item label="用户昵称" prop="userName">
        {{ form.userName }}
        <!-- <el-input v-model="form.userName" disabled placeholder="请先输入用户编号" /> -->
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { addData, formRule } from '../drivingNumList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  // 运营类型
  type: {
    type: Number,
    default: 1,
  },
})
const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(addData())
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || addData())
  visible.value = true
}
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
