<template>
  <MyDialog :model-value="visible" title="账户扣除" @submit="submit" @toggle="toggle">
    <el-form ref="formRef" :model="form" :rules="formRule" label-width="auto">
      <el-form-item label="金币类型" prop="rechargeType">
        <el-radio-group v-model="form.rechargeType">
          <el-radio :label="3">余额</el-radio>
          <el-radio :label="6">收益</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="金币余额" prop="goldBalance">
        {{ form.goldBalance }}
        <!-- <el-input v-model="form.goldBalance" placeholder="请先输入金币余额" /> -->
      </el-form-item>

      <el-form-item label="扣除金额" prop="deductBalance">
        <el-input v-model="form.deductBalance" placeholder="请输入扣除金额" />
      </el-form-item>
      <el-form-item label="备注" prop="remark">
        <el-input v-model="form.remark" placeholder="请输入备注" />
      </el-form-item>
    </el-form>
  </MyDialog>
</template>
<script setup>
import { addApi } from '@/api/system/param.js'
import { useToggle } from '@vueuse/core'
import { accountDeductionData, accountDeductionRule } from '../drivingNumList/constants'
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
const form = reactive(accountDeductionData())
const formRule = reactive(accountDeductionRule)
// 弹窗打开
const showDialog = (params = null) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || accountDeductionData())
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
