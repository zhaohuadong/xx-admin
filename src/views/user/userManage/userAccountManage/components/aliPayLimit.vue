<template>
  <div>
    <MyDialog :model-value="visible" title="绑定支付宝数量上限" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="aliPayFormRule">
        <el-form-item label="支付宝数量上限" prop="alipayAccountNum">
          <el-input-number v-model="form.alipayAccountNum" :min="0" placeholder="请输入数量上限" class="!w-80" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { objectMerge } from '@/utils/index.js'
import { useToggle } from '@vueuse/core'
import { aliPayTableForm, aliPayFormRule } from '../constants'
import { alipayAccountApi } from '@/api/user/manager.js'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(aliPayTableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  objectMerge(form, params || aliPayTableForm())
  form.userId = params.userId
  // Object.assign(form, params || aliPayTableForm())

  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    console.log(form)
    if (valid) {
      await alipayAccountApi(form)
      proxy.$modal.msgSuccess(`设置成功`)
      // if (isEdit.value) {
      //   await editMessageApi(form)
      //   proxy.$modal.msgSuccess(`编辑成功`)
      // } else {
      //   await addMessageApi(form)
      //   proxy.$modal.msgSuccess(`新增成功`)
      // }
      // emits('queryTable', { pageNum: 1 })
      visible.value = false
      emits('queryTable')
    } else {
      console.log('error submit')
      return false
    }
  })
}

defineExpose({ showDialog })
</script>
