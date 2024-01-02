<template>
  <MyDialog :model-value="visible" title="用户充值" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="充值金额" prop="amount">
        <el-input v-model="form.amount" placeholder="请输入充值金额" />
      </el-form-item>
      <el-form-item label="充值类型" prop="rechargeType">
        <el-radio-group v-model="form.rechargeType">
          <el-radio :label="3">余额</el-radio>
          <el-radio :label="6">收益</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="充值目的" prop="purpose">
        <el-radio-group v-model="form.purpose">
          <el-radio v-for="item in list" :key="item.value" :label="item.value">{{ item.label }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input
          v-model="form.remark"
          :autosize="{ minRows: 2, maxRows: 4 }"
          type="textarea"
          maxlength="500"
          placeholder="请输入备注，最多可输入500字"
        />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { formData, formRule, radioLIst } from '../drivingNumList/constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(formData())
const list = reactive(radioLIst())
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || formData())
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
