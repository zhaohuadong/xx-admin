<template>
  <div>
    <MyDialog :model-value="visible" title="封禁房间" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="roomForbiddenFormRule" label-width="auto">
        <el-form-item label="封禁时长" prop="banType">
          <el-radio-group v-model="form.banType" class="ml-4">
            <el-radio :label="1">按小时封禁</el-radio>
            <el-radio :label="2">按天封禁</el-radio>
            <el-radio :label="3">按月封禁</el-radio>
            <el-radio :label="4">永久</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.banType !== 4" label=" " prop="banDuration">
          <el-input-number v-model="form.banDuration" placeholder="请输入封禁时长" :min="1" />
          <span v-if="form.banType === 1">&nbsp;&nbsp;小时</span>
          <span v-if="form.banType === 2">&nbsp;&nbsp;天</span>
          <span v-if="form.banType === 3">&nbsp;&nbsp;月</span>
        </el-form-item>
        <el-form-item label="封禁理由" prop="reason">
          <el-input v-model="form.reason" type="textarea" placeholder="请输入封禁理由" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { banApi } from '@/api/room/room.js'
import { useToggle } from '@vueuse/core'
import { roomForbiddentableForm, roomForbiddenFormRule } from '../constants'
const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(roomForbiddentableForm())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || roomForbiddentableForm())
  visible.value = true
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    console.log(form)
    if (valid) {
      await banApi(form)
      proxy.$modal.msgSuccess(`封禁成功`)
      formRef.value.resetFields()
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
