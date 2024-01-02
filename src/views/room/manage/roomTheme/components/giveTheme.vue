<template>
  <div>
    <MyDialog :model-value="visible" title="赠送主题" @submit="submit" @toggle="toggle">
      <el-form ref="formRef" :model="form" :rules="giveThemeFormRule" label-width="auto">
        <el-form-item label="主题名称" prop="name">{{ form.name }}</el-form-item>
        <el-form-item label="用户编号" prop="toUserId">
          <el-input v-model="form.toUserId" placeholder="请输入用户编号，如有多用户使用';'隔开" />
        </el-form-item>
        <el-form-item label="赠送天数" prop="giveDay">
          <el-radio-group v-model="form.giveDay" @change="handleChangeDay">
            <el-radio :label="1">自定义天数</el-radio>
            <el-radio :label="2">7天</el-radio>
            <el-radio :label="3">15天</el-radio>
            <el-radio :label="4">30天</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item v-if="form.giveDay === 1" label="自定义天数" prop="dayNum">
          <el-input v-model.number="form.dayNum" type="number" placeholder="请输入自定义天数" />
        </el-form-item>
      </el-form>
    </MyDialog>
  </div>
</template>
<script setup>
import { useToggle } from '@vueuse/core'
import { giveThemeFormData, giveThemeFormRule } from '../constants'
import { sendApi } from '@/api/room/bg.js'

const { proxy } = getCurrentInstance()
const emits = defineEmits(['queryTable'])

const [visible, toggle] = useToggle()
const formRef = ref()
const form = reactive(giveThemeFormData())
// 弹窗打开
const showDialog = (params) => {
  proxy.resetForm(formRef.value)
  Object.assign(form, params || giveThemeFormData())
  visible.value = true
}

// 选择天数
const handleChangeDay = (params) => {
  const newMap = new Map([
    [2, 7],
    [3, 15],
    [4, 30],
  ])
  if (params !== 1) {
    const type = newMap.get(params)
    form.dayNum = type
  } else {
    form.dayNum = ''
  }
}
const submit = () => {
  if (!formRef.value) return
  formRef.value.validate(async (valid) => {
    if (valid) {
      if (form.giveDay === 2) {
        form.day = 7
      } else if (form.giveDay === 3) {
        form.day = 15
      } else if (form.giveDay === 4) {
        form.day = 30
      }

      await sendApi(form)
      proxy.$modal.msgSuccess(`赠送成功`)
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
