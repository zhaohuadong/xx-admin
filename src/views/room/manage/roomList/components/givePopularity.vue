<template>
  <div>
    <MyDialog :model-value="visible" title="赠送人气" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="givePopularityFormRule" label-width="auto">
        <el-form-item label="房间名称">
          {{ form.roomTitle }}
        </el-form-item>
        <el-form-item label="赠送人气" prop="num">
          <el-input-number v-model="form.num" placeholder="请输入人气值" />
        </el-form-item>
        <el-form-item label="过期时间" prop="expirationDate">
          <el-date-picker
            v-model="form.expirationDate"
            value-format="YYYY-MM-DD HH:mm:ss"
            type="datetime"
            placeholder="请选择过期时间"
          />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { PopularityApi } from '@/api/room/room.js'
import { useToggle } from '@vueuse/core'
import { givePopularitytableForm, givePopularityFormRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(givePopularitytableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || givePopularitytableForm())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      await PopularityApi(form)
      proxy.$modal.msgSuccess(`赠送成功`)
      proxy.resetForm(formRef.value)
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
