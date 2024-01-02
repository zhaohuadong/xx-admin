<template>
  <MyDialog :model-value="visible" top="42vh" width="400" :title="title" @submit="submit" @toggle="toggle">
    <div v-if="title === '批量审核拒绝'" class="text-red-600 mb-2">批量操作{{ form.ids.length }}条</div>
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" placeholder="请输入拒绝原因" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { oneRefuse, someRefuse } from '@/api/finance/withdraw.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const title = ref('')

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
const dataType = ref(true)
// 弹窗打开
const showDialog = (params = null, tit = '审核拒绝') => {
  proxy.resetForm(formRef.value)
  if (params.constructor === Object) {
    Object.assign(form, params || formData())
  } else {
    dataType.value = false
    form.ids = params
  }

  visible.value = true
  title.value = tit
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (dataType.value) {
        await oneRefuse(form)
      } else {
        await someRefuse(form)
      }
      proxy.$modal.msgSuccess(`${title.value}成功`)
      proxy.resetForm(formRef.value)
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
