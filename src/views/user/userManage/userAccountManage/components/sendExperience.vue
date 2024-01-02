<template>
  <div>
    <MyDialog :model-value="visible" title="赠送经验" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="sendExperienceFormRule" label-width="auto">
        <el-form-item label="当前财富值">{{ consumeTotalNum }}</el-form-item>
        <el-form-item label="当前等级">{{ vipId }}</el-form-item>
        <el-form-item label="增加财富值" prop="expNumber">
          <el-input-number
            v-model="form.expNumber"
            precision="0"
            :min="0"
            controls-position="right"
            placeholder="请输入财富值"
          />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { objectMerge } from '@/utils/index.js'
import { sendExpApi } from '@/api/user/manager.js'
import { useToggle } from '@vueuse/core'
import { sendExperienceTableForm, sendExperienceFormRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(sendExperienceTableForm())
const consumeTotalNum = ref()
const vipId = ref()
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  consumeTotalNum.value = params.consumeTotalNum
  vipId.value = params.vipId
  // Object.assign(form, params || sendExperienceTableForm())
  objectMerge(form, params || sendExperienceTableForm())
  form.userId = params.userId
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    console.log(form)
    if (valid) {
      // if (isEdit.value) {
      //   await editMessageApi(form)
      //   proxy.$modal.msgSuccess(`编辑成功`)
      // } else {
      //   await addMessageApi(form)
      //   proxy.$modal.msgSuccess(`新增成功`)
      // }
      // emits('queryTable', { pageNum: 1 })
      await sendExpApi(form)
      proxy.$modal.msgSuccess(`赠送成功`)
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
