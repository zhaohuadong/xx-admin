<template>
  <div>
    <MyDialog :model-value="visible" title="用户充值" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="rechargeFormRule" label-width="auto">
        <el-form-item label="充值金额" prop="number">
          <el-input-number
            v-model.number="form.number"
            controls-position="right"
            :max="10000000"
            placeholder="请输入充值金额"
          />
        </el-form-item>
        <el-form-item label="充值类型" prop="type">
          <el-radio-group v-model="form.type" class="ml-4">
            <el-radio :label="1">余额</el-radio>
            <el-radio :label="2">收益</el-radio>
            <!-- <el-radio label="3">特殊币</el-radio> -->
          </el-radio-group>
        </el-form-item>
        <el-form-item label="充值目的" prop="purposeType">
          <el-radio-group v-model="form.purposeType" class="ml-4">
            <el-radio :label="1">测试费用</el-radio>
            <el-radio :label="2">24小时奖励</el-radio>
            <el-radio :label="3">公会周奖励</el-radio>
            <el-radio :label="4">公会月奖励</el-radio>
            <el-radio :label="5">账号冲正</el-radio>
            <el-radio :label="6">其他</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="备注" prop="remark">
          <el-input
            v-model="form.remark"
            :show-word-limit="true"
            type="textarea"
            maxlength="500"
            placeholder="请输入备注，最多可输入500字"
          />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
// import { objectMerge } from '@/utils/index.js'
import { sendGoldCoinsApi } from '@/api/user/manager.js'
import { useToggle } from '@vueuse/core'
import { reachargeTableForm, rechargeFormRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(reachargeTableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  // objectMerge(form, params || reachargeTableForm())
  form.userId = params.userId
  Object.assign(form, params || reachargeTableForm())
  console.log(form)
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      visible.value = false
      await sendGoldCoinsApi(form)
      proxy.$modal.msgSuccess(`充值成功`)
      proxy.resetForm(formRef.value)
      emits('queryTable')
    } else {
      console.log('error submit')
      return false
    }
  })
}
defineExpose({ showDialog })
</script>
